// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DataExtraInfoSubCondsValue extends $tea.Model {
  tenantName?: string;
  database?: string;
  destDatabase?: string;
  tableName?: string;
  destName?: string;
  whereClause?: string;
  filterColumns?: string[];
  shardColumns?: string[];
  logicTableId?: string;
  sourceEndpointId?: string;
  sourceClientId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantName: 'TenantName',
      database: 'Database',
      destDatabase: 'DestDatabase',
      tableName: 'TableName',
      destName: 'DestName',
      whereClause: 'WhereClause',
      filterColumns: 'FilterColumns',
      shardColumns: 'ShardColumns',
      logicTableId: 'LogicTableId',
      sourceEndpointId: 'SourceEndpointId',
      sourceClientId: 'SourceClientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantName: 'string',
      database: 'string',
      destDatabase: 'string',
      tableName: 'string',
      destName: 'string',
      whereClause: 'string',
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      logicTableId: 'string',
      sourceEndpointId: 'string',
      sourceClientId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataExtraInfoSubDbsValue extends $tea.Model {
  clusterName?: string;
  tenantName?: string;
  databaseId?: string;
  databaseName?: string;
  mappingDatabaseName?: string;
  sourceClientId?: string;
  tables?: DataExtraInfoSubDbsValueTables[];
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      tenantName: 'TenantName',
      databaseId: 'DatabaseId',
      databaseName: 'DatabaseName',
      mappingDatabaseName: 'MappingDatabaseName',
      sourceClientId: 'SourceClientId',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      tenantName: 'string',
      databaseId: 'string',
      databaseName: 'string',
      mappingDatabaseName: 'string',
      sourceClientId: 'string',
      tables: { 'type': 'array', 'itemType': DataExtraInfoSubDbsValueTables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchKillProcessListRequest extends $tea.Model {
  instanceId?: string;
  sessionList?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      sessionList: 'SessionList',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      sessionList: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchKillProcessListResponseBody extends $tea.Model {
  data?: BatchKillProcessListResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': BatchKillProcessListResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchKillProcessListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchKillProcessListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchKillProcessListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchKillSessionListRequest extends $tea.Model {
  instanceId?: string;
  sessionList?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      sessionList: 'SessionList',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      sessionList: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchKillSessionListResponseBody extends $tea.Model {
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

export class BatchKillSessionListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchKillSessionListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchKillSessionListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelProjectModifyRecordRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelProjectModifyRecordResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: any;
  errorDetail?: CancelProjectModifyRecordResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: 'any',
      errorDetail: CancelProjectModifyRecordResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelProjectModifyRecordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelProjectModifyRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelProjectModifyRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupSetDownloadLinkRequest extends $tea.Model {
  backupSetId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupSetDownloadLinkResponseBody extends $tea.Model {
  downloadTaskId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      downloadTaskId: 'DownloadTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadTaskId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupSetDownloadLinkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateBackupSetDownloadLinkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateBackupSetDownloadLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatabaseRequest extends $tea.Model {
  clientToken?: string;
  collation?: string;
  databaseName?: string;
  description?: string;
  encoding?: string;
  instanceId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      collation: 'Collation',
      databaseName: 'DatabaseName',
      description: 'Description',
      encoding: 'Encoding',
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      collation: 'string',
      databaseName: 'string',
      description: 'string',
      encoding: 'string',
      instanceId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatabaseResponseBody extends $tea.Model {
  databaseName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
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

export class CreateInstanceRequest extends $tea.Model {
  autoRenew?: boolean;
  autoRenewPeriod?: number;
  chargeType?: string;
  cpuArch?: string;
  diskSize?: number;
  diskType?: string;
  dryRun?: boolean;
  instanceClass?: string;
  instanceName?: string;
  isolationOptimization?: string;
  obVersion?: string;
  period?: number;
  periodUnit?: string;
  primaryInstance?: string;
  primaryRegion?: string;
  replicaMode?: string;
  resourceGroupId?: string;
  series?: string;
  zones?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      chargeType: 'ChargeType',
      cpuArch: 'CpuArch',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      dryRun: 'DryRun',
      instanceClass: 'InstanceClass',
      instanceName: 'InstanceName',
      isolationOptimization: 'IsolationOptimization',
      obVersion: 'ObVersion',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      primaryInstance: 'PrimaryInstance',
      primaryRegion: 'PrimaryRegion',
      replicaMode: 'ReplicaMode',
      resourceGroupId: 'ResourceGroupId',
      series: 'Series',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      chargeType: 'string',
      cpuArch: 'string',
      diskSize: 'number',
      diskType: 'string',
      dryRun: 'boolean',
      instanceClass: 'string',
      instanceName: 'string',
      isolationOptimization: 'string',
      obVersion: 'string',
      period: 'number',
      periodUnit: 'string',
      primaryInstance: 'string',
      primaryRegion: 'string',
      replicaMode: 'string',
      resourceGroupId: 'string',
      series: 'string',
      zones: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  data?: CreateInstanceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateInstanceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLabelRequest extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLabelResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: string;
  errorDetail?: CreateLabelResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: 'string',
      errorDetail: CreateLabelResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLabelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateLabelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateLabelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMySqlDataSourceRequest extends $tea.Model {
  description?: string;
  dgInstanceId?: string;
  instanceId?: string;
  ip?: string;
  name?: string;
  password?: string;
  port?: number;
  schema?: string;
  type?: string;
  useSsl?: boolean;
  userName?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      dgInstanceId: 'DgInstanceId',
      instanceId: 'InstanceId',
      ip: 'Ip',
      name: 'Name',
      password: 'Password',
      port: 'Port',
      schema: 'Schema',
      type: 'Type',
      useSsl: 'UseSsl',
      userName: 'UserName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dgInstanceId: 'string',
      instanceId: 'string',
      ip: 'string',
      name: 'string',
      password: 'string',
      port: 'number',
      schema: 'string',
      type: 'string',
      useSsl: 'boolean',
      userName: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMySqlDataSourceResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: string;
  errorDetail?: CreateMySqlDataSourceResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: 'string',
      errorDetail: CreateMySqlDataSourceResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMySqlDataSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMySqlDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateMySqlDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOceanBaseDataSourceRequest extends $tea.Model {
  cluster?: string;
  configUrl?: string;
  description?: string;
  drcPassword?: string;
  drcUserName?: string;
  innerDrcPassword?: string;
  ip?: string;
  logProxyIp?: string;
  logProxyPort?: string;
  name?: string;
  password?: string;
  port?: number;
  tenant?: string;
  type?: string;
  userName?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
      configUrl: 'ConfigUrl',
      description: 'Description',
      drcPassword: 'DrcPassword',
      drcUserName: 'DrcUserName',
      innerDrcPassword: 'InnerDrcPassword',
      ip: 'Ip',
      logProxyIp: 'LogProxyIp',
      logProxyPort: 'LogProxyPort',
      name: 'Name',
      password: 'Password',
      port: 'Port',
      tenant: 'Tenant',
      type: 'Type',
      userName: 'UserName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      configUrl: 'string',
      description: 'string',
      drcPassword: 'string',
      drcUserName: 'string',
      innerDrcPassword: 'string',
      ip: 'string',
      logProxyIp: 'string',
      logProxyPort: 'string',
      name: 'string',
      password: 'string',
      port: 'number',
      tenant: 'string',
      type: 'string',
      userName: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOceanBaseDataSourceResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: string;
  errorDetail?: CreateOceanBaseDataSourceResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: 'string',
      errorDetail: CreateOceanBaseDataSourceResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOceanBaseDataSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateOceanBaseDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateOceanBaseDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOmsMysqlDataSourceRequest extends $tea.Model {
  description?: string;
  dgDatabaseId?: string;
  instanceId?: string;
  ip?: string;
  name?: string;
  password?: string;
  port?: string;
  schema?: string;
  type?: string;
  username?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      dgDatabaseId: 'DgDatabaseId',
      instanceId: 'InstanceId',
      ip: 'Ip',
      name: 'Name',
      password: 'Password',
      port: 'Port',
      schema: 'Schema',
      type: 'Type',
      username: 'Username',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dgDatabaseId: 'string',
      instanceId: 'string',
      ip: 'string',
      name: 'string',
      password: 'string',
      port: 'string',
      schema: 'string',
      type: 'string',
      username: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOmsMysqlDataSourceResponseBody extends $tea.Model {
  data?: CreateOmsMysqlDataSourceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateOmsMysqlDataSourceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOmsMysqlDataSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateOmsMysqlDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateOmsMysqlDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequest extends $tea.Model {
  commonTransferConfig?: CreateProjectRequestCommonTransferConfig;
  enableFullTransfer?: boolean;
  enableFullVerify?: boolean;
  enableIncrTransfer?: boolean;
  enableReverseIncrTransfer?: boolean;
  enableStructTransfer?: boolean;
  fullTransferConfig?: CreateProjectRequestFullTransferConfig;
  id?: string;
  incrTransferConfig?: CreateProjectRequestIncrTransferConfig;
  labelIds?: string[];
  name?: string;
  ossKey?: string;
  reverseIncrTransferConfig?: CreateProjectRequestReverseIncrTransferConfig;
  sinkEndpointId?: string;
  sourceEndpointId?: string;
  structTransferConfig?: CreateProjectRequestStructTransferConfig;
  transferMapping?: CreateProjectRequestTransferMapping;
  type?: string;
  useOss?: boolean;
  workerGradeId?: string;
  static names(): { [key: string]: string } {
    return {
      commonTransferConfig: 'CommonTransferConfig',
      enableFullTransfer: 'EnableFullTransfer',
      enableFullVerify: 'EnableFullVerify',
      enableIncrTransfer: 'EnableIncrTransfer',
      enableReverseIncrTransfer: 'EnableReverseIncrTransfer',
      enableStructTransfer: 'EnableStructTransfer',
      fullTransferConfig: 'FullTransferConfig',
      id: 'Id',
      incrTransferConfig: 'IncrTransferConfig',
      labelIds: 'LabelIds',
      name: 'Name',
      ossKey: 'OssKey',
      reverseIncrTransferConfig: 'ReverseIncrTransferConfig',
      sinkEndpointId: 'SinkEndpointId',
      sourceEndpointId: 'SourceEndpointId',
      structTransferConfig: 'StructTransferConfig',
      transferMapping: 'TransferMapping',
      type: 'Type',
      useOss: 'UseOss',
      workerGradeId: 'WorkerGradeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonTransferConfig: CreateProjectRequestCommonTransferConfig,
      enableFullTransfer: 'boolean',
      enableFullVerify: 'boolean',
      enableIncrTransfer: 'boolean',
      enableReverseIncrTransfer: 'boolean',
      enableStructTransfer: 'boolean',
      fullTransferConfig: CreateProjectRequestFullTransferConfig,
      id: 'string',
      incrTransferConfig: CreateProjectRequestIncrTransferConfig,
      labelIds: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      ossKey: 'string',
      reverseIncrTransferConfig: CreateProjectRequestReverseIncrTransferConfig,
      sinkEndpointId: 'string',
      sourceEndpointId: 'string',
      structTransferConfig: CreateProjectRequestStructTransferConfig,
      transferMapping: CreateProjectRequestTransferMapping,
      type: 'string',
      useOss: 'boolean',
      workerGradeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectShrinkRequest extends $tea.Model {
  commonTransferConfigShrink?: string;
  enableFullTransfer?: boolean;
  enableFullVerify?: boolean;
  enableIncrTransfer?: boolean;
  enableReverseIncrTransfer?: boolean;
  enableStructTransfer?: boolean;
  fullTransferConfigShrink?: string;
  id?: string;
  incrTransferConfigShrink?: string;
  labelIdsShrink?: string;
  name?: string;
  ossKey?: string;
  reverseIncrTransferConfigShrink?: string;
  sinkEndpointId?: string;
  sourceEndpointId?: string;
  structTransferConfigShrink?: string;
  transferMappingShrink?: string;
  type?: string;
  useOss?: boolean;
  workerGradeId?: string;
  static names(): { [key: string]: string } {
    return {
      commonTransferConfigShrink: 'CommonTransferConfig',
      enableFullTransfer: 'EnableFullTransfer',
      enableFullVerify: 'EnableFullVerify',
      enableIncrTransfer: 'EnableIncrTransfer',
      enableReverseIncrTransfer: 'EnableReverseIncrTransfer',
      enableStructTransfer: 'EnableStructTransfer',
      fullTransferConfigShrink: 'FullTransferConfig',
      id: 'Id',
      incrTransferConfigShrink: 'IncrTransferConfig',
      labelIdsShrink: 'LabelIds',
      name: 'Name',
      ossKey: 'OssKey',
      reverseIncrTransferConfigShrink: 'ReverseIncrTransferConfig',
      sinkEndpointId: 'SinkEndpointId',
      sourceEndpointId: 'SourceEndpointId',
      structTransferConfigShrink: 'StructTransferConfig',
      transferMappingShrink: 'TransferMapping',
      type: 'Type',
      useOss: 'UseOss',
      workerGradeId: 'WorkerGradeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonTransferConfigShrink: 'string',
      enableFullTransfer: 'boolean',
      enableFullVerify: 'boolean',
      enableIncrTransfer: 'boolean',
      enableReverseIncrTransfer: 'boolean',
      enableStructTransfer: 'boolean',
      fullTransferConfigShrink: 'string',
      id: 'string',
      incrTransferConfigShrink: 'string',
      labelIdsShrink: 'string',
      name: 'string',
      ossKey: 'string',
      reverseIncrTransferConfigShrink: 'string',
      sinkEndpointId: 'string',
      sourceEndpointId: 'string',
      structTransferConfigShrink: 'string',
      transferMappingShrink: 'string',
      type: 'string',
      useOss: 'boolean',
      workerGradeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: string;
  errorDetail?: CreateProjectResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: 'string',
      errorDetail: CreateProjectResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectModifyRecordsRequest extends $tea.Model {
  databases?: CreateProjectModifyRecordsRequestDatabases[];
  id?: string;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': CreateProjectModifyRecordsRequestDatabases },
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectModifyRecordsShrinkRequest extends $tea.Model {
  databasesShrink?: string;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      databasesShrink: 'Databases',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databasesShrink: 'string',
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectModifyRecordsResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: number;
  errorDetail?: CreateProjectModifyRecordsResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: 'number',
      errorDetail: CreateProjectModifyRecordsResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectModifyRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateProjectModifyRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateProjectModifyRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRdsPostgreSQLDataSourceRequest extends $tea.Model {
  databaseName?: string;
  description?: string;
  instanceId?: string;
  name?: string;
  password?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      password: 'Password',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      password: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRdsPostgreSQLDataSourceResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: string;
  errorDetail?: CreateRdsPostgreSQLDataSourceResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: 'string',
      errorDetail: CreateRdsPostgreSQLDataSourceResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRdsPostgreSQLDataSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRdsPostgreSQLDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRdsPostgreSQLDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityIpGroupRequest extends $tea.Model {
  instanceId?: string;
  securityIpGroupName?: string;
  securityIps?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      securityIpGroupName: 'SecurityIpGroupName',
      securityIps: 'SecurityIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      securityIpGroupName: 'string',
      securityIps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityIpGroupResponseBody extends $tea.Model {
  requestId?: string;
  securityIpGroup?: CreateSecurityIpGroupResponseBodySecurityIpGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityIpGroup: 'SecurityIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityIpGroup: CreateSecurityIpGroupResponseBodySecurityIpGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityIpGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSecurityIpGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSecurityIpGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagRequest extends $tea.Model {
  clientToken?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagValueRequest extends $tea.Model {
  clientToken?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagValueResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagValueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTagValueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTagValueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTenantRequest extends $tea.Model {
  charset?: string;
  cpu?: number;
  createParams?: { [key: string]: string };
  description?: string;
  instanceId?: string;
  logDisk?: number;
  memory?: number;
  primaryZone?: string;
  readOnlyZoneList?: string;
  tenantMode?: string;
  tenantName?: string;
  timeZone?: string;
  unitNum?: number;
  userVSwitchId?: string;
  userVpcId?: string;
  userVpcOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      charset: 'Charset',
      cpu: 'Cpu',
      createParams: 'CreateParams',
      description: 'Description',
      instanceId: 'InstanceId',
      logDisk: 'LogDisk',
      memory: 'Memory',
      primaryZone: 'PrimaryZone',
      readOnlyZoneList: 'ReadOnlyZoneList',
      tenantMode: 'TenantMode',
      tenantName: 'TenantName',
      timeZone: 'TimeZone',
      unitNum: 'UnitNum',
      userVSwitchId: 'UserVSwitchId',
      userVpcId: 'UserVpcId',
      userVpcOwnerId: 'UserVpcOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charset: 'string',
      cpu: 'number',
      createParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      description: 'string',
      instanceId: 'string',
      logDisk: 'number',
      memory: 'number',
      primaryZone: 'string',
      readOnlyZoneList: 'string',
      tenantMode: 'string',
      tenantName: 'string',
      timeZone: 'string',
      unitNum: 'number',
      userVSwitchId: 'string',
      userVpcId: 'string',
      userVpcOwnerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTenantShrinkRequest extends $tea.Model {
  charset?: string;
  cpu?: number;
  createParamsShrink?: string;
  description?: string;
  instanceId?: string;
  logDisk?: number;
  memory?: number;
  primaryZone?: string;
  readOnlyZoneList?: string;
  tenantMode?: string;
  tenantName?: string;
  timeZone?: string;
  unitNum?: number;
  userVSwitchId?: string;
  userVpcId?: string;
  userVpcOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      charset: 'Charset',
      cpu: 'Cpu',
      createParamsShrink: 'CreateParams',
      description: 'Description',
      instanceId: 'InstanceId',
      logDisk: 'LogDisk',
      memory: 'Memory',
      primaryZone: 'PrimaryZone',
      readOnlyZoneList: 'ReadOnlyZoneList',
      tenantMode: 'TenantMode',
      tenantName: 'TenantName',
      timeZone: 'TimeZone',
      unitNum: 'UnitNum',
      userVSwitchId: 'UserVSwitchId',
      userVpcId: 'UserVpcId',
      userVpcOwnerId: 'UserVpcOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charset: 'string',
      cpu: 'number',
      createParamsShrink: 'string',
      description: 'string',
      instanceId: 'string',
      logDisk: 'number',
      memory: 'number',
      primaryZone: 'string',
      readOnlyZoneList: 'string',
      tenantMode: 'string',
      tenantName: 'string',
      timeZone: 'string',
      unitNum: 'number',
      userVSwitchId: 'string',
      userVpcId: 'string',
      userVpcOwnerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTenantResponseBody extends $tea.Model {
  requestId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTenantResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTenantResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTenantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTenantReadOnlyConnectionRequest extends $tea.Model {
  instanceId?: string;
  tenantId?: string;
  vSwitchId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tenantId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTenantReadOnlyConnectionResponseBody extends $tea.Model {
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

export class CreateTenantReadOnlyConnectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTenantReadOnlyConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTenantReadOnlyConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTenantSecurityIpGroupRequest extends $tea.Model {
  instanceId?: string;
  securityIpGroupName?: string;
  securityIps?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      securityIpGroupName: 'SecurityIpGroupName',
      securityIps: 'SecurityIps',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      securityIpGroupName: 'string',
      securityIps: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTenantSecurityIpGroupResponseBody extends $tea.Model {
  requestId?: string;
  securityIpGroup?: CreateTenantSecurityIpGroupResponseBodySecurityIpGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityIpGroup: 'SecurityIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityIpGroup: CreateTenantSecurityIpGroupResponseBodySecurityIpGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTenantSecurityIpGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTenantSecurityIpGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTenantSecurityIpGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTenantUserRequest extends $tea.Model {
  description?: string;
  encryptionType?: string;
  instanceId?: string;
  roles?: string;
  tenantId?: string;
  userName?: string;
  userPassword?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      encryptionType: 'EncryptionType',
      instanceId: 'InstanceId',
      roles: 'Roles',
      tenantId: 'TenantId',
      userName: 'UserName',
      userPassword: 'UserPassword',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      encryptionType: 'string',
      instanceId: 'string',
      roles: 'string',
      tenantId: 'string',
      userName: 'string',
      userPassword: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTenantUserResponseBody extends $tea.Model {
  requestId?: string;
  tenantUser?: CreateTenantUserResponseBodyTenantUser;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tenantUser: 'TenantUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tenantUser: CreateTenantUserResponseBodyTenantUser,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTenantUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTenantUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTenantUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: any;
  errorDetail?: DeleteDataSourceResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: 'any',
      errorDetail: DeleteDataSourceResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatabasesRequest extends $tea.Model {
  databaseNames?: string;
  instanceId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseNames: 'DatabaseNames',
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseNames: 'string',
      instanceId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatabasesResponseBody extends $tea.Model {
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

export class DeleteDatabasesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDatabasesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDatabasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstancesRequest extends $tea.Model {
  backupRetainMode?: string;
  dryRun?: boolean;
  instanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      backupRetainMode: 'BackupRetainMode',
      dryRun: 'DryRun',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRetainMode: 'string',
      dryRun: 'boolean',
      instanceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstancesResponseBody extends $tea.Model {
  data?: DeleteInstancesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteInstancesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: any;
  errorDetail?: DeleteProjectResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: 'any',
      errorDetail: DeleteProjectResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityIpGroupRequest extends $tea.Model {
  instanceId?: string;
  securityIpGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      securityIpGroupName: 'SecurityIpGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      securityIpGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityIpGroupResponseBody extends $tea.Model {
  requestId?: string;
  securityIpGroup?: DeleteSecurityIpGroupResponseBodySecurityIpGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityIpGroup: 'SecurityIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityIpGroup: DeleteSecurityIpGroupResponseBodySecurityIpGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityIpGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSecurityIpGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSecurityIpGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagRequest extends $tea.Model {
  key?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagValueRequest extends $tea.Model {
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

export class DeleteTagValueResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagValueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTagValueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTagValueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTenantSecurityIpGroupRequest extends $tea.Model {
  instanceId?: string;
  securityIpGroupName?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      securityIpGroupName: 'SecurityIpGroupName',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      securityIpGroupName: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTenantSecurityIpGroupResponseBody extends $tea.Model {
  requestId?: string;
  securityIpGroup?: DeleteTenantSecurityIpGroupResponseBodySecurityIpGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityIpGroup: 'SecurityIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityIpGroup: DeleteTenantSecurityIpGroupResponseBodySecurityIpGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTenantSecurityIpGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTenantSecurityIpGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTenantSecurityIpGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTenantUsersRequest extends $tea.Model {
  instanceId?: string;
  tenantId?: string;
  users?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tenantId: 'string',
      users: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTenantUsersResponseBody extends $tea.Model {
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

export class DeleteTenantUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTenantUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTenantUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTenantsRequest extends $tea.Model {
  instanceId?: string;
  tenantIds?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tenantIds: 'TenantIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tenantIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTenantsResponseBody extends $tea.Model {
  requestId?: string;
  tenantIds?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tenantIds: 'TenantIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tenantIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTenantsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTenantsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTenantsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnomalySQLListRequest extends $tea.Model {
  acceptLanguage?: string;
  dbName?: string;
  endTime?: string;
  filterCondition?: { [key: string]: any };
  instanceId?: string;
  nodeIp?: string;
  pageNumber?: number;
  pageSize?: number;
  SQLId?: string;
  searchKeyWord?: string;
  searchParameter?: string;
  searchRule?: string;
  searchValue?: string;
  sortColumn?: string;
  sortOrder?: string;
  startTime?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      dbName: 'DbName',
      endTime: 'EndTime',
      filterCondition: 'FilterCondition',
      instanceId: 'InstanceId',
      nodeIp: 'NodeIp',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      SQLId: 'SQLId',
      searchKeyWord: 'SearchKeyWord',
      searchParameter: 'SearchParameter',
      searchRule: 'SearchRule',
      searchValue: 'SearchValue',
      sortColumn: 'SortColumn',
      sortOrder: 'SortOrder',
      startTime: 'StartTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      dbName: 'string',
      endTime: 'string',
      filterCondition: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      instanceId: 'string',
      nodeIp: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      SQLId: 'string',
      searchKeyWord: 'string',
      searchParameter: 'string',
      searchRule: 'string',
      searchValue: 'string',
      sortColumn: 'string',
      sortOrder: 'string',
      startTime: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnomalySQLListShrinkRequest extends $tea.Model {
  acceptLanguage?: string;
  dbName?: string;
  endTime?: string;
  filterConditionShrink?: string;
  instanceId?: string;
  nodeIp?: string;
  pageNumber?: number;
  pageSize?: number;
  SQLId?: string;
  searchKeyWord?: string;
  searchParameter?: string;
  searchRule?: string;
  searchValue?: string;
  sortColumn?: string;
  sortOrder?: string;
  startTime?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      dbName: 'DbName',
      endTime: 'EndTime',
      filterConditionShrink: 'FilterCondition',
      instanceId: 'InstanceId',
      nodeIp: 'NodeIp',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      SQLId: 'SQLId',
      searchKeyWord: 'SearchKeyWord',
      searchParameter: 'SearchParameter',
      searchRule: 'SearchRule',
      searchValue: 'SearchValue',
      sortColumn: 'SortColumn',
      sortOrder: 'SortOrder',
      startTime: 'StartTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      dbName: 'string',
      endTime: 'string',
      filterConditionShrink: 'string',
      instanceId: 'string',
      nodeIp: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      SQLId: 'string',
      searchKeyWord: 'string',
      searchParameter: 'string',
      searchRule: 'string',
      searchValue: 'string',
      sortColumn: 'string',
      sortOrder: 'string',
      startTime: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnomalySQLListResponseBody extends $tea.Model {
  anomalySQLList?: DescribeAnomalySQLListResponseBodyAnomalySQLList[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      anomalySQLList: 'AnomalySQLList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anomalySQLList: { 'type': 'array', 'itemType': DescribeAnomalySQLListResponseBodyAnomalySQLList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnomalySQLListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAnomalySQLListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAnomalySQLListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableCpuResourceRequest extends $tea.Model {
  instanceId?: string;
  modifyType?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      modifyType: 'ModifyType',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      modifyType: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableCpuResourceResponseBody extends $tea.Model {
  data?: DescribeAvailableCpuResourceResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeAvailableCpuResourceResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableCpuResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAvailableCpuResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAvailableCpuResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableMemResourceRequest extends $tea.Model {
  cpuNum?: number;
  instanceId?: string;
  tenantId?: string;
  unitNum?: number;
  static names(): { [key: string]: string } {
    return {
      cpuNum: 'CpuNum',
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
      unitNum: 'UnitNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuNum: 'number',
      instanceId: 'string',
      tenantId: 'string',
      unitNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableMemResourceResponseBody extends $tea.Model {
  data?: DescribeAvailableMemResourceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeAvailableMemResourceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableMemResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAvailableMemResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAvailableMemResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableSpecRequest extends $tea.Model {
  instanceId?: string;
  spec?: string;
  upgradeType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      spec: 'Spec',
      upgradeType: 'UpgradeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      spec: 'string',
      upgradeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableSpecResponseBody extends $tea.Model {
  data?: DescribeAvailableSpecResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeAvailableSpecResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableSpecResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAvailableSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAvailableSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableZoneRequest extends $tea.Model {
  cpuArch?: string;
  deployType?: string;
  instanceType?: string;
  obVersion?: string;
  series?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      cpuArch: 'CpuArch',
      deployType: 'DeployType',
      instanceType: 'InstanceType',
      obVersion: 'ObVersion',
      series: 'Series',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuArch: 'string',
      deployType: 'string',
      instanceType: 'string',
      obVersion: 'string',
      series: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableZoneResponseBody extends $tea.Model {
  data?: DescribeAvailableZoneResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeAvailableZoneResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableZoneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAvailableZoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAvailableZoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetDownloadLinkRequest extends $tea.Model {
  downloadTaskId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      downloadTaskId: 'DownloadTaskId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadTaskId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetDownloadLinkResponseBody extends $tea.Model {
  data?: DescribeBackupSetDownloadLinkResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeBackupSetDownloadLinkResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetDownloadLinkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupSetDownloadLinkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeBackupSetDownloadLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCharsetRequest extends $tea.Model {
  instanceId?: string;
  series?: string;
  tenantMode?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      series: 'Series',
      tenantMode: 'TenantMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      series: 'string',
      tenantMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCharsetResponseBody extends $tea.Model {
  charset?: DescribeCharsetResponseBodyCharset[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      charset: 'Charset',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charset: { 'type': 'array', 'itemType': DescribeCharsetResponseBodyCharset },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCharsetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCharsetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCharsetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataBackupSetRequest extends $tea.Model {
  backupObjectType?: string;
  endTime?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      backupObjectType: 'BackupObjectType',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupObjectType: 'string',
      endTime: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataBackupSetResponseBody extends $tea.Model {
  data?: DescribeDataBackupSetResponseBodyData[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeDataBackupSetResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataBackupSetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDataBackupSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDataBackupSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesRequest extends $tea.Model {
  databaseName?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  searchKey?: string;
  tenantId?: string;
  withTables?: boolean;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      tenantId: 'TenantId',
      withTables: 'WithTables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchKey: 'string',
      tenantId: 'string',
      withTables: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesResponseBody extends $tea.Model {
  databases?: DescribeDatabasesResponseBodyDatabases[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': DescribeDatabasesResponseBodyDatabases },
      requestId: 'string',
      totalCount: 'number',
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

export class DescribeInstanceRequest extends $tea.Model {
  instanceId?: string;
  maxConnectionLimit?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxConnectionLimit: 'MaxConnectionLimit',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxConnectionLimit: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBody extends $tea.Model {
  instance?: DescribeInstanceResponseBodyInstance;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: DescribeInstanceResponseBodyInstance,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceCreatableZoneRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceCreatableZoneResponseBody extends $tea.Model {
  requestId?: string;
  zoneList?: DescribeInstanceCreatableZoneResponseBodyZoneList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zoneList: 'ZoneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zoneList: { 'type': 'array', 'itemType': DescribeInstanceCreatableZoneResponseBodyZoneList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceCreatableZoneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceCreatableZoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceCreatableZoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSSLRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSSLResponseBody extends $tea.Model {
  instanceSSL?: DescribeInstanceSSLResponseBodyInstanceSSL;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceSSL: 'InstanceSSL',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSSL: DescribeInstanceSSLResponseBodyInstanceSSL,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSSLResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceSSLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceSSLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSecurityConfigsRequest extends $tea.Model {
  checkId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSecurityConfigsResponseBody extends $tea.Model {
  instanceSecurityConfigs?: DescribeInstanceSecurityConfigsResponseBodyInstanceSecurityConfigs;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceSecurityConfigs: 'InstanceSecurityConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSecurityConfigs: DescribeInstanceSecurityConfigsResponseBodyInstanceSecurityConfigs,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSecurityConfigsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceSecurityConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceSecurityConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTagsRequest extends $tea.Model {
  instanceIds?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTagsResponseBody extends $tea.Model {
  requestId?: string;
  tagResources?: DescribeInstanceTagsResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': DescribeInstanceTagsResponseBodyTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTagsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTenantModesRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTenantModesResponseBody extends $tea.Model {
  instanceModes?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceModes: 'InstanceModes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceModes: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTenantModesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceTenantModesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceTenantModesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTopologyRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTopologyResponseBody extends $tea.Model {
  instanceTopology?: DescribeInstanceTopologyResponseBodyInstanceTopology;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTopology: 'InstanceTopology',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTopology: DescribeInstanceTopologyResponseBodyInstanceTopology,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTopologyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceTopologyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceTopologyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequest extends $tea.Model {
  instanceId?: string;
  instanceName?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $tea.Model {
  instances?: DescribeInstancesResponseBodyInstances[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstances },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricsDataRequest extends $tea.Model {
  endTime?: string;
  groupByLabels?: string;
  instanceId?: string;
  labels?: string;
  limit?: string;
  metrics?: string;
  replicaType?: string;
  sortMetricKey?: string;
  sortOrder?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      groupByLabels: 'GroupByLabels',
      instanceId: 'InstanceId',
      labels: 'Labels',
      limit: 'Limit',
      metrics: 'Metrics',
      replicaType: 'ReplicaType',
      sortMetricKey: 'SortMetricKey',
      sortOrder: 'SortOrder',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      groupByLabels: 'string',
      instanceId: 'string',
      labels: 'string',
      limit: 'string',
      metrics: 'string',
      replicaType: 'string',
      sortMetricKey: 'string',
      sortOrder: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricsDataResponseBody extends $tea.Model {
  data?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricsDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMetricsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMetricsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeMetricsRequest extends $tea.Model {
  endTime?: string;
  instanceId?: string;
  metrics?: string;
  nodeIdList?: string;
  nodeName?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      metrics: 'Metrics',
      nodeIdList: 'NodeIdList',
      nodeName: 'NodeName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      metrics: 'string',
      nodeIdList: 'string',
      nodeName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeMetricsResponseBody extends $tea.Model {
  nodeMetrics?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nodeMetrics: 'NodeMetrics',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeMetrics: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodeMetricsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNodeMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNodeMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOasAnomalySQLListRequest extends $tea.Model {
  acceptLanguage?: string;
  current?: number;
  dbName?: string;
  dynamicSql?: boolean;
  endTime?: string;
  filterCondition?: string;
  instanceId?: string;
  mergeDynamicSql?: boolean;
  nodeIp?: string;
  pageSize?: number;
  searchKeyWord?: string;
  searchParam?: string;
  searchRule?: string;
  searchValue?: string;
  sqlId?: string;
  sqlTextLength?: number;
  startTime?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      current: 'Current',
      dbName: 'DbName',
      dynamicSql: 'DynamicSql',
      endTime: 'EndTime',
      filterCondition: 'FilterCondition',
      instanceId: 'InstanceId',
      mergeDynamicSql: 'MergeDynamicSql',
      nodeIp: 'NodeIp',
      pageSize: 'PageSize',
      searchKeyWord: 'SearchKeyWord',
      searchParam: 'SearchParam',
      searchRule: 'SearchRule',
      searchValue: 'SearchValue',
      sqlId: 'SqlId',
      sqlTextLength: 'SqlTextLength',
      startTime: 'StartTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      current: 'number',
      dbName: 'string',
      dynamicSql: 'boolean',
      endTime: 'string',
      filterCondition: 'string',
      instanceId: 'string',
      mergeDynamicSql: 'boolean',
      nodeIp: 'string',
      pageSize: 'number',
      searchKeyWord: 'string',
      searchParam: 'string',
      searchRule: 'string',
      searchValue: 'string',
      sqlId: 'string',
      sqlTextLength: 'number',
      startTime: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOasAnomalySQLListResponseBody extends $tea.Model {
  data?: DescribeOasAnomalySQLListResponseBodyData[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeOasAnomalySQLListResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOasAnomalySQLListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOasAnomalySQLListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOasAnomalySQLListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOasSQLDetailsRequest extends $tea.Model {
  dbName?: string;
  dynamicSql?: boolean;
  endTime?: string;
  instanceId?: string;
  sqlId?: string;
  startTime?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      dynamicSql: 'DynamicSql',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      sqlId: 'SqlId',
      startTime: 'StartTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      dynamicSql: 'boolean',
      endTime: 'string',
      instanceId: 'string',
      sqlId: 'string',
      startTime: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOasSQLDetailsResponseBody extends $tea.Model {
  data?: DescribeOasSQLDetailsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeOasSQLDetailsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOasSQLDetailsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOasSQLDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOasSQLDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOasSQLHistoryListRequest extends $tea.Model {
  acceptLanguage?: string;
  dbName?: string;
  dynamicSql?: boolean;
  endTime?: string;
  instanceId?: string;
  nodeIp?: string;
  sqlId?: string;
  startTime?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      dbName: 'DbName',
      dynamicSql: 'DynamicSql',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      nodeIp: 'NodeIp',
      sqlId: 'SqlId',
      startTime: 'StartTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      dbName: 'string',
      dynamicSql: 'boolean',
      endTime: 'string',
      instanceId: 'string',
      nodeIp: 'string',
      sqlId: 'string',
      startTime: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOasSQLHistoryListResponseBody extends $tea.Model {
  data?: DescribeOasSQLHistoryListResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeOasSQLHistoryListResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOasSQLHistoryListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOasSQLHistoryListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOasSQLHistoryListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOasSQLPlansRequest extends $tea.Model {
  acceptLanguage?: string;
  dbName?: string;
  dynamicSql?: boolean;
  endTime?: string;
  instanceId?: string;
  planUnionHash?: string;
  returnBriefInfo?: boolean;
  sqlId?: string;
  startTime?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      dbName: 'DbName',
      dynamicSql: 'DynamicSql',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      planUnionHash: 'PlanUnionHash',
      returnBriefInfo: 'ReturnBriefInfo',
      sqlId: 'SqlId',
      startTime: 'StartTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      dbName: 'string',
      dynamicSql: 'boolean',
      endTime: 'string',
      instanceId: 'string',
      planUnionHash: 'string',
      returnBriefInfo: 'boolean',
      sqlId: 'string',
      startTime: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOasSQLPlansResponseBody extends $tea.Model {
  data?: DescribeOasSQLPlansResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeOasSQLPlansResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOasSQLPlansResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOasSQLPlansResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOasSQLPlansResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOasSlowSQLListRequest extends $tea.Model {
  acceptLanguage?: string;
  dbName?: string;
  dynamicSql?: boolean;
  endTime?: string;
  filterCondition?: string;
  instanceId?: string;
  mergeDynamicSql?: boolean;
  nodeIp?: string;
  searchKeyWord?: string;
  searchParam?: string;
  searchRule?: string;
  searchValue?: string;
  sqlId?: string;
  sqlTextLength?: number;
  startTime?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      dbName: 'DbName',
      dynamicSql: 'DynamicSql',
      endTime: 'EndTime',
      filterCondition: 'FilterCondition',
      instanceId: 'InstanceId',
      mergeDynamicSql: 'MergeDynamicSql',
      nodeIp: 'NodeIp',
      searchKeyWord: 'SearchKeyWord',
      searchParam: 'SearchParam',
      searchRule: 'SearchRule',
      searchValue: 'SearchValue',
      sqlId: 'SqlId',
      sqlTextLength: 'SqlTextLength',
      startTime: 'StartTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      dbName: 'string',
      dynamicSql: 'boolean',
      endTime: 'string',
      filterCondition: 'string',
      instanceId: 'string',
      mergeDynamicSql: 'boolean',
      nodeIp: 'string',
      searchKeyWord: 'string',
      searchParam: 'string',
      searchRule: 'string',
      searchValue: 'string',
      sqlId: 'string',
      sqlTextLength: 'number',
      startTime: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOasSlowSQLListResponseBody extends $tea.Model {
  data?: DescribeOasSlowSQLListResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeOasSlowSQLListResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOasSlowSQLListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOasSlowSQLListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOasSlowSQLListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOasTopSQLListRequest extends $tea.Model {
  acceptLanguage?: string;
  dbName?: string;
  dynamicSql?: boolean;
  endTime?: string;
  filterCondition?: string;
  instanceId?: string;
  mergeDynamicSql?: boolean;
  nodeIp?: string;
  searchKeyWord?: string;
  searchParam?: string;
  searchRule?: string;
  searchValue?: string;
  sqlId?: string;
  sqlTextLength?: number;
  startTime?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      dbName: 'DbName',
      dynamicSql: 'DynamicSql',
      endTime: 'EndTime',
      filterCondition: 'FilterCondition',
      instanceId: 'InstanceId',
      mergeDynamicSql: 'MergeDynamicSql',
      nodeIp: 'NodeIp',
      searchKeyWord: 'SearchKeyWord',
      searchParam: 'SearchParam',
      searchRule: 'SearchRule',
      searchValue: 'SearchValue',
      sqlId: 'SqlId',
      sqlTextLength: 'SqlTextLength',
      startTime: 'StartTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      dbName: 'string',
      dynamicSql: 'boolean',
      endTime: 'string',
      filterCondition: 'string',
      instanceId: 'string',
      mergeDynamicSql: 'boolean',
      nodeIp: 'string',
      searchKeyWord: 'string',
      searchParam: 'string',
      searchRule: 'string',
      searchValue: 'string',
      sqlId: 'string',
      sqlTextLength: 'number',
      startTime: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOasTopSQLListResponseBody extends $tea.Model {
  data?: DescribeOasTopSQLListResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeOasTopSQLListResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOasTopSQLListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOasTopSQLListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOasTopSQLListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutlineBindingRequest extends $tea.Model {
  databaseName?: string;
  instanceId?: string;
  isConcurrentLimit?: boolean;
  SQLId?: string;
  tableName?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      instanceId: 'InstanceId',
      isConcurrentLimit: 'IsConcurrentLimit',
      SQLId: 'SQLId',
      tableName: 'TableName',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      instanceId: 'string',
      isConcurrentLimit: 'boolean',
      SQLId: 'string',
      tableName: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutlineBindingResponseBody extends $tea.Model {
  outlineBinding?: DescribeOutlineBindingResponseBodyOutlineBinding;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      outlineBinding: 'OutlineBinding',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outlineBinding: DescribeOutlineBindingResponseBodyOutlineBinding,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutlineBindingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOutlineBindingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOutlineBindingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersRequest extends $tea.Model {
  dimension?: string;
  dimensionValue?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      dimensionValue: 'DimensionValue',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'string',
      dimensionValue: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBody extends $tea.Model {
  parameters?: DescribeParametersResponseBodyParameters[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'array', 'itemType': DescribeParametersResponseBodyParameters },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeParametersResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeParametersHistoryRequest extends $tea.Model {
  dimension?: string;
  dimensionValue?: string;
  endTime?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      dimensionValue: 'DimensionValue',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'string',
      dimensionValue: 'string',
      endTime: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersHistoryResponseBody extends $tea.Model {
  requestId?: string;
  respond?: DescribeParametersHistoryResponseBodyRespond[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      respond: 'Respond',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      respond: { 'type': 'array', 'itemType': DescribeParametersHistoryResponseBodyRespond },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersHistoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeParametersHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeParametersHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessStatsCompositionRequest extends $tea.Model {
  clientIp?: string;
  instanceId?: string;
  serverIp?: string;
  sqlText?: string;
  status?: string;
  tenantId?: string;
  UId?: string;
  users?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      instanceId: 'InstanceId',
      serverIp: 'ServerIp',
      sqlText: 'SqlText',
      status: 'Status',
      tenantId: 'TenantId',
      UId: 'UId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      instanceId: 'string',
      serverIp: 'string',
      sqlText: 'string',
      status: 'string',
      tenantId: 'string',
      UId: 'string',
      users: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessStatsCompositionResponseBody extends $tea.Model {
  data?: DescribeProcessStatsCompositionResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeProcessStatsCompositionResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessStatsCompositionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProcessStatsCompositionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeProcessStatsCompositionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: DescribeProjectResponseBodyData;
  errorDetail?: DescribeProjectResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: DescribeProjectResponseBodyData,
      errorDetail: DescribeProjectResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectComponentsRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectComponentsResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: DescribeProjectComponentsResponseBodyData;
  errorDetail?: DescribeProjectComponentsResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: DescribeProjectComponentsResponseBodyData,
      errorDetail: DescribeProjectComponentsResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectComponentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProjectComponentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeProjectComponentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectProgressRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectProgressResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: DescribeProjectProgressResponseBodyData;
  errorDetail?: DescribeProjectProgressResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: DescribeProjectProgressResponseBodyData,
      errorDetail: DescribeProjectProgressResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectProgressResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProjectProgressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeProjectProgressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectStepMetricRequest extends $tea.Model {
  aggregator?: string;
  beginTimestamp?: number;
  endTimestamp?: number;
  maxPointNum?: number;
  metricType?: string;
  projectId?: string;
  stepName?: string;
  static names(): { [key: string]: string } {
    return {
      aggregator: 'Aggregator',
      beginTimestamp: 'BeginTimestamp',
      endTimestamp: 'EndTimestamp',
      maxPointNum: 'MaxPointNum',
      metricType: 'MetricType',
      projectId: 'ProjectId',
      stepName: 'StepName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregator: 'string',
      beginTimestamp: 'number',
      endTimestamp: 'number',
      maxPointNum: 'number',
      metricType: 'string',
      projectId: 'string',
      stepName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectStepMetricResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: DescribeProjectStepMetricResponseBodyData;
  errorDetail?: DescribeProjectStepMetricResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: DescribeProjectStepMetricResponseBodyData,
      errorDetail: DescribeProjectStepMetricResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectStepMetricResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProjectStepMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeProjectStepMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectStepsRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectStepsResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: DescribeProjectStepsResponseBodyData[];
  errorDetail?: DescribeProjectStepsResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: { 'type': 'array', 'itemType': DescribeProjectStepsResponseBodyData },
      errorDetail: DescribeProjectStepsResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectStepsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProjectStepsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeProjectStepsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecommendIndexRequest extends $tea.Model {
  instanceId?: string;
  SQLId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      SQLId: 'SQLId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      SQLId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecommendIndexResponseBody extends $tea.Model {
  recommendIndex?: DescribeRecommendIndexResponseBodyRecommendIndex;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recommendIndex: 'RecommendIndex',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recommendIndex: DescribeRecommendIndexResponseBodyRecommendIndex,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecommendIndexResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRecommendIndexResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRecommendIndexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLDetailsRequest extends $tea.Model {
  SQLId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      SQLId: 'SQLId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLDetailsResponseBody extends $tea.Model {
  requestId?: string;
  SQLDetails?: DescribeSQLDetailsResponseBodySQLDetails[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SQLDetails: 'SQLDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SQLDetails: { 'type': 'array', 'itemType': DescribeSQLDetailsResponseBodySQLDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLDetailsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSQLDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSQLDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLHistoryListRequest extends $tea.Model {
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  SQLId?: string;
  startTime?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      SQLId: 'SQLId',
      startTime: 'StartTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      SQLId: 'string',
      startTime: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLHistoryListResponseBody extends $tea.Model {
  requestId?: string;
  SQLHistoryList?: DescribeSQLHistoryListResponseBodySQLHistoryList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SQLHistoryList: 'SQLHistoryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SQLHistoryList: DescribeSQLHistoryListResponseBodySQLHistoryList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLHistoryListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSQLHistoryListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSQLHistoryListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPlansRequest extends $tea.Model {
  SQLId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      SQLId: 'SQLId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPlansResponseBody extends $tea.Model {
  requestId?: string;
  SQLPlans?: DescribeSQLPlansResponseBodySQLPlans[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SQLPlans: 'SQLPlans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SQLPlans: { 'type': 'array', 'itemType': DescribeSQLPlansResponseBodySQLPlans },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPlansResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSQLPlansResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSQLPlansResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLSamplesRequest extends $tea.Model {
  dbName?: string;
  endTime?: string;
  instanceId?: string;
  returnSqlText?: boolean;
  sqlId?: string;
  startTime?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      returnSqlText: 'ReturnSqlText',
      sqlId: 'SqlId',
      startTime: 'StartTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      endTime: 'string',
      instanceId: 'string',
      returnSqlText: 'boolean',
      sqlId: 'string',
      startTime: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLSamplesResponseBody extends $tea.Model {
  data?: DescribeSQLSamplesResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeSQLSamplesResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLSamplesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSQLSamplesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSQLSamplesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSampleSqlRawTextsRequest extends $tea.Model {
  dbName?: string;
  endTime?: string;
  instanceId?: string;
  limit?: string;
  sqlId?: string;
  startTime?: string;
  tenantId?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      limit: 'Limit',
      sqlId: 'SqlId',
      startTime: 'StartTime',
      tenantId: 'TenantId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      endTime: 'string',
      instanceId: 'string',
      limit: 'string',
      sqlId: 'string',
      startTime: 'string',
      tenantId: 'string',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSampleSqlRawTextsResponseBody extends $tea.Model {
  data?: DescribeSampleSqlRawTextsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeSampleSqlRawTextsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSampleSqlRawTextsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSampleSqlRawTextsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSampleSqlRawTextsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIpGroupsRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIpGroupsResponseBody extends $tea.Model {
  requestId?: string;
  securityIpGroups?: DescribeSecurityIpGroupsResponseBodySecurityIpGroups[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityIpGroups: 'SecurityIpGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityIpGroups: { 'type': 'array', 'itemType': DescribeSecurityIpGroupsResponseBodySecurityIpGroups },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIpGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSecurityIpGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSecurityIpGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSessionListRequest extends $tea.Model {
  instanceId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSessionListResponseBody extends $tea.Model {
  data?: DescribeSessionListResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeSessionListResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSessionListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSessionListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSessionListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowSQLHistoryListRequest extends $tea.Model {
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  SQLId?: string;
  startTime?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      SQLId: 'SQLId',
      startTime: 'StartTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      SQLId: 'string',
      startTime: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowSQLHistoryListResponseBody extends $tea.Model {
  requestId?: string;
  slowSQLHistoryList?: DescribeSlowSQLHistoryListResponseBodySlowSQLHistoryList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slowSQLHistoryList: 'SlowSQLHistoryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slowSQLHistoryList: DescribeSlowSQLHistoryListResponseBodySlowSQLHistoryList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowSQLHistoryListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSlowSQLHistoryListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSlowSQLHistoryListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowSQLListRequest extends $tea.Model {
  dbName?: string;
  endTime?: string;
  filterCondition?: { [key: string]: any };
  nodeIp?: string;
  pageNumber?: number;
  pageSize?: number;
  SQLId?: string;
  searchKeyWord?: string;
  searchParameter?: string;
  searchRule?: string;
  searchValue?: string;
  sortColumn?: string;
  sortOrder?: string;
  startTime?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      endTime: 'EndTime',
      filterCondition: 'FilterCondition',
      nodeIp: 'NodeIp',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      SQLId: 'SQLId',
      searchKeyWord: 'SearchKeyWord',
      searchParameter: 'SearchParameter',
      searchRule: 'SearchRule',
      searchValue: 'SearchValue',
      sortColumn: 'SortColumn',
      sortOrder: 'SortOrder',
      startTime: 'StartTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      endTime: 'string',
      filterCondition: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      nodeIp: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      SQLId: 'string',
      searchKeyWord: 'string',
      searchParameter: 'string',
      searchRule: 'string',
      searchValue: 'string',
      sortColumn: 'string',
      sortOrder: 'string',
      startTime: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowSQLListShrinkRequest extends $tea.Model {
  dbName?: string;
  endTime?: string;
  filterConditionShrink?: string;
  nodeIp?: string;
  pageNumber?: number;
  pageSize?: number;
  SQLId?: string;
  searchKeyWord?: string;
  searchParameter?: string;
  searchRule?: string;
  searchValue?: string;
  sortColumn?: string;
  sortOrder?: string;
  startTime?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      endTime: 'EndTime',
      filterConditionShrink: 'FilterCondition',
      nodeIp: 'NodeIp',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      SQLId: 'SQLId',
      searchKeyWord: 'SearchKeyWord',
      searchParameter: 'SearchParameter',
      searchRule: 'SearchRule',
      searchValue: 'SearchValue',
      sortColumn: 'SortColumn',
      sortOrder: 'SortOrder',
      startTime: 'StartTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      endTime: 'string',
      filterConditionShrink: 'string',
      nodeIp: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      SQLId: 'string',
      searchKeyWord: 'string',
      searchParameter: 'string',
      searchRule: 'string',
      searchValue: 'string',
      sortColumn: 'string',
      sortOrder: 'string',
      startTime: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowSQLListResponseBody extends $tea.Model {
  requestId?: string;
  slowSQLList?: DescribeSlowSQLListResponseBodySlowSQLList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slowSQLList: 'SlowSQLList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slowSQLList: { 'type': 'array', 'itemType': DescribeSlowSQLListResponseBodySlowSQLList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowSQLListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSlowSQLListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSlowSQLListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagValuesRequest extends $tea.Model {
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagValuesResponseBody extends $tea.Model {
  map?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      map: 'Map',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      map: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagValuesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTagValuesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTagValuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantRequest extends $tea.Model {
  instanceId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantResponseBody extends $tea.Model {
  requestId?: string;
  tenant?: DescribeTenantResponseBodyTenant;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tenant: 'Tenant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tenant: DescribeTenantResponseBodyTenant,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTenantResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTenantResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantEncryptionRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  tenantId?: string;
  tenantName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tenantId: 'TenantId',
      tenantName: 'TenantName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      tenantId: 'string',
      tenantName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantEncryptionResponseBody extends $tea.Model {
  requestId?: string;
  tenantEncryptions?: DescribeTenantEncryptionResponseBodyTenantEncryptions[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tenantEncryptions: 'TenantEncryptions',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tenantEncryptions: { 'type': 'array', 'itemType': DescribeTenantEncryptionResponseBodyTenantEncryptions },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantEncryptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTenantEncryptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTenantEncryptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantMetricsRequest extends $tea.Model {
  endTime?: string;
  instanceId?: string;
  metrics?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: string;
  tenantId?: string;
  tenantIdList?: string;
  tenantName?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      metrics: 'Metrics',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      tenantId: 'TenantId',
      tenantIdList: 'TenantIdList',
      tenantName: 'TenantName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      metrics: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
      tenantId: 'string',
      tenantIdList: 'string',
      tenantName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantMetricsResponseBody extends $tea.Model {
  requestId?: string;
  tenantMetrics?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tenantMetrics: 'TenantMetrics',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tenantMetrics: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantMetricsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTenantMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTenantMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantReadableScnRequest extends $tea.Model {
  instanceId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantReadableScnResponseBody extends $tea.Model {
  data?: DescribeTenantReadableScnResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeTenantReadableScnResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantReadableScnResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTenantReadableScnResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTenantReadableScnResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantSecurityConfigsRequest extends $tea.Model {
  checkId?: string;
  instanceId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      instanceId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantSecurityConfigsResponseBody extends $tea.Model {
  configs?: DescribeTenantSecurityConfigsResponseBodyConfigs;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: DescribeTenantSecurityConfigsResponseBodyConfigs,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantSecurityConfigsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTenantSecurityConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTenantSecurityConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantSecurityIpGroupsRequest extends $tea.Model {
  instanceId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantSecurityIpGroupsResponseBody extends $tea.Model {
  requestId?: string;
  securityIpGroups?: DescribeTenantSecurityIpGroupsResponseBodySecurityIpGroups[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityIpGroups: 'SecurityIpGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityIpGroups: { 'type': 'array', 'itemType': DescribeTenantSecurityIpGroupsResponseBodySecurityIpGroups },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantSecurityIpGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTenantSecurityIpGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTenantSecurityIpGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantTagsRequest extends $tea.Model {
  instanceId?: string;
  tags?: string;
  tenantIds?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tags: 'Tags',
      tenantIds: 'TenantIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tags: 'string',
      tenantIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantTagsResponseBody extends $tea.Model {
  requestId?: string;
  tagResources?: DescribeTenantTagsResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': DescribeTenantTagsResponseBodyTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantTagsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTenantTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTenantTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantUserRolesRequest extends $tea.Model {
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantUserRolesResponseBody extends $tea.Model {
  requestId?: string;
  role?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      role: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantUserRolesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTenantUserRolesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTenantUserRolesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantUsersRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  searchKey?: string;
  tenantId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      tenantId: 'TenantId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      searchKey: 'string',
      tenantId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantUsersResponseBody extends $tea.Model {
  requestId?: string;
  tenantUsers?: DescribeTenantUsersResponseBodyTenantUsers[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tenantUsers: 'TenantUsers',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tenantUsers: { 'type': 'array', 'itemType': DescribeTenantUsersResponseBodyTenantUsers },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTenantUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTenantUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantZonesReadRequest extends $tea.Model {
  instanceId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantZonesReadResponseBody extends $tea.Model {
  requestId?: string;
  tenantZones?: DescribeTenantZonesReadResponseBodyTenantZones[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tenantZones: 'TenantZones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tenantZones: { 'type': 'array', 'itemType': DescribeTenantZonesReadResponseBodyTenantZones },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantZonesReadResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTenantZonesReadResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTenantZonesReadResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantsRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  searchKey?: string;
  tenantId?: string;
  tenantName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      tenantId: 'TenantId',
      tenantName: 'TenantName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchKey: 'string',
      tenantId: 'string',
      tenantName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantsResponseBody extends $tea.Model {
  requestId?: string;
  tenants?: DescribeTenantsResponseBodyTenants[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tenants: 'Tenants',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tenants: { 'type': 'array', 'itemType': DescribeTenantsResponseBodyTenants },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTenantsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTenantsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTimeZonesResponseBody extends $tea.Model {
  requestId?: string;
  timeZones?: DescribeTimeZonesResponseBodyTimeZones;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      timeZones: 'TimeZones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      timeZones: DescribeTimeZonesResponseBodyTimeZones,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTimeZonesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTimeZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTimeZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopSQLListRequest extends $tea.Model {
  dbName?: string;
  endTime?: string;
  filterCondition?: { [key: string]: any };
  nodeIp?: string;
  pageNumber?: number;
  pageSize?: number;
  SQLId?: string;
  searchKeyWord?: string;
  searchParameter?: string;
  searchRule?: string;
  searchValue?: string;
  sortColumn?: string;
  sortOrder?: string;
  startTime?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      endTime: 'EndTime',
      filterCondition: 'FilterCondition',
      nodeIp: 'NodeIp',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      SQLId: 'SQLId',
      searchKeyWord: 'SearchKeyWord',
      searchParameter: 'SearchParameter',
      searchRule: 'SearchRule',
      searchValue: 'SearchValue',
      sortColumn: 'SortColumn',
      sortOrder: 'SortOrder',
      startTime: 'StartTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      endTime: 'string',
      filterCondition: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      nodeIp: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      SQLId: 'string',
      searchKeyWord: 'string',
      searchParameter: 'string',
      searchRule: 'string',
      searchValue: 'string',
      sortColumn: 'string',
      sortOrder: 'string',
      startTime: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopSQLListShrinkRequest extends $tea.Model {
  dbName?: string;
  endTime?: string;
  filterConditionShrink?: string;
  nodeIp?: string;
  pageNumber?: number;
  pageSize?: number;
  SQLId?: string;
  searchKeyWord?: string;
  searchParameter?: string;
  searchRule?: string;
  searchValue?: string;
  sortColumn?: string;
  sortOrder?: string;
  startTime?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      endTime: 'EndTime',
      filterConditionShrink: 'FilterCondition',
      nodeIp: 'NodeIp',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      SQLId: 'SQLId',
      searchKeyWord: 'SearchKeyWord',
      searchParameter: 'SearchParameter',
      searchRule: 'SearchRule',
      searchValue: 'SearchValue',
      sortColumn: 'SortColumn',
      sortOrder: 'SortOrder',
      startTime: 'StartTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      endTime: 'string',
      filterConditionShrink: 'string',
      nodeIp: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      SQLId: 'string',
      searchKeyWord: 'string',
      searchParameter: 'string',
      searchRule: 'string',
      searchValue: 'string',
      sortColumn: 'string',
      sortOrder: 'string',
      startTime: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopSQLListResponseBody extends $tea.Model {
  requestId?: string;
  topSQLList?: DescribeTopSQLListResponseBodyTopSQLList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      topSQLList: 'TopSQLList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      topSQLList: { 'type': 'array', 'itemType': DescribeTopSQLListResponseBodyTopSQLList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopSQLListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTopSQLListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTopSQLListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesRequest extends $tea.Model {
  cpuArch?: string;
  deployType?: string;
  series?: string;
  static names(): { [key: string]: string } {
    return {
      cpuArch: 'CpuArch',
      deployType: 'DeployType',
      series: 'Series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuArch: 'string',
      deployType: 'string',
      series: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBody extends $tea.Model {
  requestId?: string;
  zones?: DescribeZonesResponseBodyZones[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZones },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadOssUrlRequest extends $tea.Model {
  effectiveTimeMinutes?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveTimeMinutes: 'EffectiveTimeMinutes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveTimeMinutes: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadOssUrlResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: GetUploadOssUrlResponseBodyData;
  errorDetail?: GetUploadOssUrlResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: GetUploadOssUrlResponseBodyData,
      errorDetail: GetUploadOssUrlResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadOssUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUploadOssUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUploadOssUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillProcessListRequest extends $tea.Model {
  instanceId?: string;
  sessionList?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      sessionList: 'SessionList',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      sessionList: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillProcessListResponseBody extends $tea.Model {
  data?: KillProcessListResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': KillProcessListResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillProcessListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: KillProcessListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: KillProcessListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllLabelsResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: ListAllLabelsResponseBodyData[];
  errorDetail?: ListAllLabelsResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: { 'type': 'array', 'itemType': ListAllLabelsResponseBodyData },
      errorDetail: ListAllLabelsResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllLabelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAllLabelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAllLabelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceRequest extends $tea.Model {
  order?: string;
  pageNumber?: string;
  pageSize?: string;
  searchKey?: string;
  sortField?: string;
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      sortField: 'SortField',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      searchKey: 'string',
      sortField: 'string',
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceShrinkRequest extends $tea.Model {
  order?: string;
  pageNumber?: string;
  pageSize?: string;
  searchKey?: string;
  sortField?: string;
  typesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      sortField: 'SortField',
      typesShrink: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      searchKey: 'string',
      sortField: 'string',
      typesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: ListDataSourceResponseBodyData[];
  errorDetail?: ListDataSourceResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: { 'type': 'array', 'itemType': ListDataSourceResponseBodyData },
      errorDetail: ListDataSourceResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectFullVerifyResultRequest extends $tea.Model {
  destSchemas?: string[];
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  sourceSchemas?: string[];
  status?: string;
  static names(): { [key: string]: string } {
    return {
      destSchemas: 'DestSchemas',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sourceSchemas: 'SourceSchemas',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destSchemas: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      sourceSchemas: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectFullVerifyResultShrinkRequest extends $tea.Model {
  destSchemasShrink?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  sourceSchemasShrink?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      destSchemasShrink: 'DestSchemas',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sourceSchemasShrink: 'SourceSchemas',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destSchemasShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      sourceSchemasShrink: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectFullVerifyResultResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: ListProjectFullVerifyResultResponseBodyData;
  errorDetail?: ListProjectFullVerifyResultResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: ListProjectFullVerifyResultResponseBodyData,
      errorDetail: ListProjectFullVerifyResultResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectFullVerifyResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProjectFullVerifyResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProjectFullVerifyResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: ListProjectModifyRecordsResponseBodyData[];
  errorDetail?: ListProjectModifyRecordsResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyData },
      errorDetail: ListProjectModifyRecordsResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProjectModifyRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProjectModifyRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsRequest extends $tea.Model {
  labelIds?: string[];
  needRelatedInfo?: boolean;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  searchKey?: string;
  sinkEndpointTypes?: string[];
  sortField?: string;
  sourceEndpointTypes?: string[];
  status?: string[];
  type?: string;
  visibleSubProject?: boolean;
  static names(): { [key: string]: string } {
    return {
      labelIds: 'LabelIds',
      needRelatedInfo: 'NeedRelatedInfo',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      sinkEndpointTypes: 'SinkEndpointTypes',
      sortField: 'SortField',
      sourceEndpointTypes: 'SourceEndpointTypes',
      status: 'Status',
      type: 'Type',
      visibleSubProject: 'VisibleSubProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelIds: { 'type': 'array', 'itemType': 'string' },
      needRelatedInfo: 'boolean',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchKey: 'string',
      sinkEndpointTypes: { 'type': 'array', 'itemType': 'string' },
      sortField: 'string',
      sourceEndpointTypes: { 'type': 'array', 'itemType': 'string' },
      status: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
      visibleSubProject: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsShrinkRequest extends $tea.Model {
  labelIdsShrink?: string;
  needRelatedInfo?: boolean;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  searchKey?: string;
  sinkEndpointTypesShrink?: string;
  sortField?: string;
  sourceEndpointTypesShrink?: string;
  statusShrink?: string;
  type?: string;
  visibleSubProject?: boolean;
  static names(): { [key: string]: string } {
    return {
      labelIdsShrink: 'LabelIds',
      needRelatedInfo: 'NeedRelatedInfo',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      sinkEndpointTypesShrink: 'SinkEndpointTypes',
      sortField: 'SortField',
      sourceEndpointTypesShrink: 'SourceEndpointTypes',
      statusShrink: 'Status',
      type: 'Type',
      visibleSubProject: 'VisibleSubProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelIdsShrink: 'string',
      needRelatedInfo: 'boolean',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchKey: 'string',
      sinkEndpointTypesShrink: 'string',
      sortField: 'string',
      sourceEndpointTypesShrink: 'string',
      statusShrink: 'string',
      type: 'string',
      visibleSubProject: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: ListProjectsResponseBodyData[];
  errorDetail?: ListProjectsResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: { 'type': 'array', 'itemType': ListProjectsResponseBodyData },
      errorDetail: ListProjectsResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkerInstancesRequest extends $tea.Model {
  destType?: string;
  instanceName?: string;
  onlyBindable?: boolean;
  pageNumber?: number;
  pageSize?: number;
  sourceType?: string;
  specs?: string[];
  static names(): { [key: string]: string } {
    return {
      destType: 'DestType',
      instanceName: 'InstanceName',
      onlyBindable: 'OnlyBindable',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sourceType: 'SourceType',
      specs: 'Specs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destType: 'string',
      instanceName: 'string',
      onlyBindable: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      sourceType: 'string',
      specs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkerInstancesShrinkRequest extends $tea.Model {
  destType?: string;
  instanceName?: string;
  onlyBindable?: boolean;
  pageNumber?: number;
  pageSize?: number;
  sourceType?: string;
  specsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      destType: 'DestType',
      instanceName: 'InstanceName',
      onlyBindable: 'OnlyBindable',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sourceType: 'SourceType',
      specsShrink: 'Specs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destType: 'string',
      instanceName: 'string',
      onlyBindable: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      sourceType: 'string',
      specsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkerInstancesResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: ListWorkerInstancesResponseBodyData[];
  errorDetail?: ListWorkerInstancesResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: { 'type': 'array', 'itemType': ListWorkerInstancesResponseBodyData },
      errorDetail: ListWorkerInstancesResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkerInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWorkerInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListWorkerInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatabaseDescriptionRequest extends $tea.Model {
  databaseName?: string;
  description?: string;
  instanceId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      description: 'Description',
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      description: 'string',
      instanceId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatabaseDescriptionResponseBody extends $tea.Model {
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

export class ModifyDatabaseDescriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDatabaseDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ModifyDatabaseUserRolesRequest extends $tea.Model {
  databaseName?: string;
  instanceId?: string;
  tenantId?: string;
  users?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      instanceId: 'string',
      tenantId: 'string',
      users: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatabaseUserRolesResponseBody extends $tea.Model {
  requestId?: string;
  tenantUser?: ModifyDatabaseUserRolesResponseBodyTenantUser;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tenantUser: 'TenantUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tenantUser: ModifyDatabaseUserRolesResponseBodyTenantUser,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatabaseUserRolesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDatabaseUserRolesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDatabaseUserRolesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceNameRequest extends $tea.Model {
  instanceId?: string;
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceNameResponseBody extends $tea.Model {
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

export class ModifyInstanceNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyInstanceNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyInstanceNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceNodeNumRequest extends $tea.Model {
  dryRun?: boolean;
  instanceId?: string;
  nodeNum?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      instanceId: 'InstanceId',
      nodeNum: 'NodeNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      instanceId: 'string',
      nodeNum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceNodeNumResponseBody extends $tea.Model {
  data?: ModifyInstanceNodeNumResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ModifyInstanceNodeNumResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceNodeNumResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyInstanceNodeNumResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyInstanceNodeNumResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceSSLRequest extends $tea.Model {
  enableSSL?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      enableSSL: 'EnableSSL',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableSSL: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceSSLResponseBody extends $tea.Model {
  instanceSSL?: ModifyInstanceSSLResponseBodyInstanceSSL;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceSSL: 'InstanceSSL',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSSL: ModifyInstanceSSLResponseBodyInstanceSSL,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceSSLResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyInstanceSSLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyInstanceSSLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceSpecRequest extends $tea.Model {
  diskSize?: number;
  diskType?: string;
  dryRun?: boolean;
  instanceClass?: string;
  instanceId?: string;
  upgradeSpecNative?: boolean;
  static names(): { [key: string]: string } {
    return {
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      dryRun: 'DryRun',
      instanceClass: 'InstanceClass',
      instanceId: 'InstanceId',
      upgradeSpecNative: 'UpgradeSpecNative',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskSize: 'number',
      diskType: 'string',
      dryRun: 'boolean',
      instanceClass: 'string',
      instanceId: 'string',
      upgradeSpecNative: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceSpecResponseBody extends $tea.Model {
  data?: ModifyInstanceSpecResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ModifyInstanceSpecResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceSpecResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyInstanceSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyInstanceSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceTagsRequest extends $tea.Model {
  instanceId?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceTagsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceTagsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyInstanceTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyInstanceTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceTemporaryCapacityRequest extends $tea.Model {
  acceptLanguage?: string;
  diskSize?: string;
  instanceId?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      diskSize: 'DiskSize',
      instanceId: 'InstanceId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      diskSize: 'string',
      instanceId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceTemporaryCapacityResponseBody extends $tea.Model {
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

export class ModifyInstanceTemporaryCapacityResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyInstanceTemporaryCapacityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyInstanceTemporaryCapacityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyParametersRequest extends $tea.Model {
  dimension?: string;
  dimensionValue?: string;
  instanceId?: string;
  parameters?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      dimensionValue: 'DimensionValue',
      instanceId: 'InstanceId',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'string',
      dimensionValue: 'string',
      instanceId: 'string',
      parameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyParametersResponseBody extends $tea.Model {
  requestId?: string;
  results?: ModifyParametersResponseBodyResults;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: ModifyParametersResponseBodyResults,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyParametersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyParametersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityIpsRequest extends $tea.Model {
  instanceId?: string;
  securityIpGroupName?: string;
  securityIps?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      securityIpGroupName: 'SecurityIpGroupName',
      securityIps: 'SecurityIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      securityIpGroupName: 'string',
      securityIps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityIpsResponseBody extends $tea.Model {
  requestId?: string;
  securityIpGroup?: ModifySecurityIpsResponseBodySecurityIpGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityIpGroup: 'SecurityIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityIpGroup: ModifySecurityIpsResponseBodySecurityIpGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityIpsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifySecurityIpsResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ModifyTagNameRequest extends $tea.Model {
  key?: string;
  newKey?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      newKey: 'NewKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      newKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTagNameResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTagNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyTagNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyTagNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTagValueNameRequest extends $tea.Model {
  key?: string;
  newValue?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      newValue: 'NewValue',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      newValue: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTagValueNameResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTagValueNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyTagValueNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyTagValueNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantEncryptionRequest extends $tea.Model {
  encryptionKeyId?: string;
  encryptionType?: string;
  instanceId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      encryptionKeyId: 'EncryptionKeyId',
      encryptionType: 'EncryptionType',
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptionKeyId: 'string',
      encryptionType: 'string',
      instanceId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantEncryptionResponseBody extends $tea.Model {
  requestId?: string;
  tenantEncryption?: ModifyTenantEncryptionResponseBodyTenantEncryption;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tenantEncryption: 'TenantEncryption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tenantEncryption: ModifyTenantEncryptionResponseBodyTenantEncryption,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantEncryptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyTenantEncryptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyTenantEncryptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantPrimaryZoneRequest extends $tea.Model {
  instanceId?: string;
  masterIntranetAddressZone?: string;
  primaryZone?: string;
  tenantEndpointDirectId?: string;
  tenantEndpointId?: string;
  tenantId?: string;
  userDirectVSwitchId?: string;
  userVSwitchId?: string;
  userVpcOwnerId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      masterIntranetAddressZone: 'MasterIntranetAddressZone',
      primaryZone: 'PrimaryZone',
      tenantEndpointDirectId: 'TenantEndpointDirectId',
      tenantEndpointId: 'TenantEndpointId',
      tenantId: 'TenantId',
      userDirectVSwitchId: 'UserDirectVSwitchId',
      userVSwitchId: 'UserVSwitchId',
      userVpcOwnerId: 'UserVpcOwnerId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      masterIntranetAddressZone: 'string',
      primaryZone: 'string',
      tenantEndpointDirectId: 'string',
      tenantEndpointId: 'string',
      tenantId: 'string',
      userDirectVSwitchId: 'string',
      userVSwitchId: 'string',
      userVpcOwnerId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantPrimaryZoneResponseBody extends $tea.Model {
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

export class ModifyTenantPrimaryZoneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyTenantPrimaryZoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyTenantPrimaryZoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantResourceRequest extends $tea.Model {
  cpu?: number;
  instanceId?: string;
  logDisk?: number;
  memory?: number;
  readOnlyZoneList?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      instanceId: 'InstanceId',
      logDisk: 'LogDisk',
      memory: 'Memory',
      readOnlyZoneList: 'ReadOnlyZoneList',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      instanceId: 'string',
      logDisk: 'number',
      memory: 'number',
      readOnlyZoneList: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantResourceResponseBody extends $tea.Model {
  requestId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyTenantResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyTenantResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantSecurityIpGroupRequest extends $tea.Model {
  instanceId?: string;
  securityIpGroupName?: string;
  securityIps?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      securityIpGroupName: 'SecurityIpGroupName',
      securityIps: 'SecurityIps',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      securityIpGroupName: 'string',
      securityIps: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantSecurityIpGroupResponseBody extends $tea.Model {
  requestId?: string;
  securityIpGroup?: ModifyTenantSecurityIpGroupResponseBodySecurityIpGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityIpGroup: 'SecurityIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityIpGroup: ModifyTenantSecurityIpGroupResponseBodySecurityIpGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantSecurityIpGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyTenantSecurityIpGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyTenantSecurityIpGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantTagsRequest extends $tea.Model {
  instanceId?: string;
  tags?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tags: 'Tags',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tags: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantTagsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantTagsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyTenantTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyTenantTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantUserDescriptionRequest extends $tea.Model {
  description?: string;
  instanceId?: string;
  tenantId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      tenantId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantUserDescriptionResponseBody extends $tea.Model {
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

export class ModifyTenantUserDescriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyTenantUserDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyTenantUserDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantUserPasswordRequest extends $tea.Model {
  encryptionType?: string;
  instanceId?: string;
  tenantId?: string;
  userName?: string;
  userPassword?: string;
  static names(): { [key: string]: string } {
    return {
      encryptionType: 'EncryptionType',
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
      userName: 'UserName',
      userPassword: 'UserPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptionType: 'string',
      instanceId: 'string',
      tenantId: 'string',
      userName: 'string',
      userPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantUserPasswordResponseBody extends $tea.Model {
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

export class ModifyTenantUserPasswordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyTenantUserPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyTenantUserPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantUserRolesRequest extends $tea.Model {
  instanceId?: string;
  modifyType?: string;
  tenantId?: string;
  userName?: string;
  userRole?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      modifyType: 'ModifyType',
      tenantId: 'TenantId',
      userName: 'UserName',
      userRole: 'UserRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      modifyType: 'string',
      tenantId: 'string',
      userName: 'string',
      userRole: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantUserRolesResponseBody extends $tea.Model {
  requestId?: string;
  tenantUser?: ModifyTenantUserRolesResponseBodyTenantUser;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tenantUser: 'TenantUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tenantUser: ModifyTenantUserRolesResponseBodyTenantUser,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantUserRolesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyTenantUserRolesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyTenantUserRolesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantUserStatusRequest extends $tea.Model {
  instanceId?: string;
  tenantId?: string;
  userName?: string;
  userStatus?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
      userName: 'UserName',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tenantId: 'string',
      userName: 'string',
      userStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantUserStatusResponseBody extends $tea.Model {
  requestId?: string;
  tenantUser?: ModifyTenantUserStatusResponseBodyTenantUser[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tenantUser: 'TenantUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tenantUser: { 'type': 'array', 'itemType': ModifyTenantUserStatusResponseBodyTenantUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantUserStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyTenantUserStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyTenantUserStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseProjectRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseProjectResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: any;
  errorDetail?: ReleaseProjectResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: 'any',
      errorDetail: ReleaseProjectResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseProjectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleaseProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseWorkerInstanceRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseWorkerInstanceResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: string;
  errorDetail?: ReleaseWorkerInstanceResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: 'string',
      errorDetail: ReleaseWorkerInstanceResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseWorkerInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseWorkerInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleaseWorkerInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeProjectRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeProjectResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: any;
  errorDetail?: ResumeProjectResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: 'any',
      errorDetail: ResumeProjectResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeProjectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResumeProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResumeProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryProjectModifyRecordsRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryProjectModifyRecordsResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: any;
  errorDetail?: RetryProjectModifyRecordsResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: 'any',
      errorDetail: RetryProjectModifyRecordsResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryProjectModifyRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RetryProjectModifyRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RetryProjectModifyRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartProjectRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartProjectResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: string;
  errorDetail?: StartProjectResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: 'string',
      errorDetail: StartProjectResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartProjectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartProjectsByLabelRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartProjectsByLabelResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: StartProjectsByLabelResponseBodyData;
  errorDetail?: StartProjectsByLabelResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: StartProjectsByLabelResponseBodyData,
      errorDetail: StartProjectsByLabelResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartProjectsByLabelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartProjectsByLabelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartProjectsByLabelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopProjectRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopProjectResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: string;
  errorDetail?: StopProjectResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: 'string',
      errorDetail: StopProjectResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopProjectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopProjectModifyRecordsRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopProjectModifyRecordsResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: any;
  errorDetail?: StopProjectModifyRecordsResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: 'any',
      errorDetail: StopProjectModifyRecordsResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopProjectModifyRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopProjectModifyRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopProjectModifyRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopProjectsByLabelRequest extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopProjectsByLabelResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: StopProjectsByLabelResponseBodyData;
  errorDetail?: StopProjectsByLabelResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: StopProjectsByLabelResponseBodyData,
      errorDetail: StopProjectsByLabelResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopProjectsByLabelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopProjectsByLabelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopProjectsByLabelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchoverInstanceRequest extends $tea.Model {
  forced?: boolean;
  instanceId?: string;
  targetInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      forced: 'Forced',
      instanceId: 'InstanceId',
      targetInstanceId: 'TargetInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forced: 'boolean',
      instanceId: 'string',
      targetInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchoverInstanceResponseBody extends $tea.Model {
  data?: SwitchoverInstanceResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SwitchoverInstanceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchoverInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SwitchoverInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SwitchoverInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectConfigRequest extends $tea.Model {
  commonTransferConfig?: UpdateProjectConfigRequestCommonTransferConfig;
  fullTransferConfig?: UpdateProjectConfigRequestFullTransferConfig;
  id?: string;
  incrTransferConfig?: UpdateProjectConfigRequestIncrTransferConfig;
  reverseIncrTransferConfig?: UpdateProjectConfigRequestReverseIncrTransferConfig;
  static names(): { [key: string]: string } {
    return {
      commonTransferConfig: 'CommonTransferConfig',
      fullTransferConfig: 'FullTransferConfig',
      id: 'Id',
      incrTransferConfig: 'IncrTransferConfig',
      reverseIncrTransferConfig: 'ReverseIncrTransferConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonTransferConfig: UpdateProjectConfigRequestCommonTransferConfig,
      fullTransferConfig: UpdateProjectConfigRequestFullTransferConfig,
      id: 'string',
      incrTransferConfig: UpdateProjectConfigRequestIncrTransferConfig,
      reverseIncrTransferConfig: UpdateProjectConfigRequestReverseIncrTransferConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectConfigShrinkRequest extends $tea.Model {
  commonTransferConfigShrink?: string;
  fullTransferConfigShrink?: string;
  id?: string;
  incrTransferConfigShrink?: string;
  reverseIncrTransferConfigShrink?: string;
  static names(): { [key: string]: string } {
    return {
      commonTransferConfigShrink: 'CommonTransferConfig',
      fullTransferConfigShrink: 'FullTransferConfig',
      id: 'Id',
      incrTransferConfigShrink: 'IncrTransferConfig',
      reverseIncrTransferConfigShrink: 'ReverseIncrTransferConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonTransferConfigShrink: 'string',
      fullTransferConfigShrink: 'string',
      id: 'string',
      incrTransferConfigShrink: 'string',
      reverseIncrTransferConfigShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectConfigResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: string;
  errorDetail?: UpdateProjectConfigResponseBodyErrorDetail;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      errorDetail: 'ErrorDetail',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      code: 'string',
      cost: 'string',
      data: 'string',
      errorDetail: UpdateProjectConfigResponseBodyErrorDetail,
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateProjectConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateProjectConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataExtraInfoSubDbsValueTablesColumns extends $tea.Model {
  columnName?: string;
  position?: number;
  columnType?: string;
  recordFieldType?: string;
  rawColumnType?: string;
  columnKey?: string;
  nullable?: boolean;
  defaultValue?: string;
  dataLength?: number;
  dataPrecision?: number;
  dataScale?: number;
  encoding?: string;
  columnComment?: string;
  isGenerateField?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      position: 'Position',
      columnType: 'ColumnType',
      recordFieldType: 'RecordFieldType',
      rawColumnType: 'RawColumnType',
      columnKey: 'ColumnKey',
      nullable: 'Nullable',
      defaultValue: 'DefaultValue',
      dataLength: 'DataLength',
      dataPrecision: 'DataPrecision',
      dataScale: 'DataScale',
      encoding: 'Encoding',
      columnComment: 'ColumnComment',
      isGenerateField: 'IsGenerateField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      position: 'number',
      columnType: 'string',
      recordFieldType: 'string',
      rawColumnType: 'string',
      columnKey: 'string',
      nullable: 'boolean',
      defaultValue: 'string',
      dataLength: 'number',
      dataPrecision: 'number',
      dataScale: 'number',
      encoding: 'string',
      columnComment: 'string',
      isGenerateField: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataExtraInfoSubDbsValueTables extends $tea.Model {
  tableId?: string;
  database?: string;
  tableName?: string;
  mappingTableName?: string;
  instance?: string;
  columns?: DataExtraInfoSubDbsValueTablesColumns[];
  static names(): { [key: string]: string } {
    return {
      tableId: 'TableId',
      database: 'Database',
      tableName: 'TableName',
      mappingTableName: 'MappingTableName',
      instance: 'Instance',
      columns: 'Columns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableId: 'string',
      database: 'string',
      tableName: 'string',
      mappingTableName: 'string',
      instance: 'string',
      columns: { 'type': 'array', 'itemType': DataExtraInfoSubDbsValueTablesColumns },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchKillProcessListResponseBodyData extends $tea.Model {
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelProjectModifyRecordResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBodyData extends $tea.Model {
  dryRunResult?: boolean;
  instanceId?: string;
  orderId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRunResult: 'DryRunResult',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRunResult: 'boolean',
      instanceId: 'string',
      orderId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLabelResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMySqlDataSourceResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOceanBaseDataSourceResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOmsMysqlDataSourceResponseBodyData extends $tea.Model {
  endpointId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestCommonTransferConfigCustomColumns extends $tea.Model {
  columnName?: string;
  expression?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      expression: 'Expression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      expression: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestCommonTransferConfig extends $tea.Model {
  activeActive?: boolean;
  customColumns?: CreateProjectRequestCommonTransferConfigCustomColumns[];
  dataWorksBusinessName?: string;
  datahubTopicType?: string;
  mqPartition?: number;
  mqPartitionMode?: string;
  mqSerializerType?: string;
  rocketMqEnableMsgTrace?: boolean;
  rocketMqMsgTags?: string;
  rocketMqProducerGroup?: string;
  rocketMqSendMsgTimeout?: number;
  sinkStoreFormat?: string;
  sourceStoreFormat?: string;
  syncSchema?: boolean;
  syncSchemaColumnName?: string;
  tableCategory?: string;
  static names(): { [key: string]: string } {
    return {
      activeActive: 'ActiveActive',
      customColumns: 'CustomColumns',
      dataWorksBusinessName: 'DataWorksBusinessName',
      datahubTopicType: 'DatahubTopicType',
      mqPartition: 'MqPartition',
      mqPartitionMode: 'MqPartitionMode',
      mqSerializerType: 'MqSerializerType',
      rocketMqEnableMsgTrace: 'RocketMqEnableMsgTrace',
      rocketMqMsgTags: 'RocketMqMsgTags',
      rocketMqProducerGroup: 'RocketMqProducerGroup',
      rocketMqSendMsgTimeout: 'RocketMqSendMsgTimeout',
      sinkStoreFormat: 'SinkStoreFormat',
      sourceStoreFormat: 'SourceStoreFormat',
      syncSchema: 'SyncSchema',
      syncSchemaColumnName: 'SyncSchemaColumnName',
      tableCategory: 'TableCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeActive: 'boolean',
      customColumns: { 'type': 'array', 'itemType': CreateProjectRequestCommonTransferConfigCustomColumns },
      dataWorksBusinessName: 'string',
      datahubTopicType: 'string',
      mqPartition: 'number',
      mqPartitionMode: 'string',
      mqSerializerType: 'string',
      rocketMqEnableMsgTrace: 'boolean',
      rocketMqMsgTags: 'string',
      rocketMqProducerGroup: 'string',
      rocketMqSendMsgTimeout: 'number',
      sinkStoreFormat: 'string',
      sourceStoreFormat: 'string',
      syncSchema: 'boolean',
      syncSchemaColumnName: 'string',
      tableCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestFullTransferConfig extends $tea.Model {
  allowDestTableNotEmpty?: boolean;
  fullTransferSpeedMode?: string;
  fullVerifySpeedMode?: string;
  nonePkUkTruncateDstTable?: boolean;
  readWorkerNum?: number;
  throttleIOPS?: number;
  throttleRps?: number;
  writeWorkerNum?: number;
  static names(): { [key: string]: string } {
    return {
      allowDestTableNotEmpty: 'AllowDestTableNotEmpty',
      fullTransferSpeedMode: 'FullTransferSpeedMode',
      fullVerifySpeedMode: 'FullVerifySpeedMode',
      nonePkUkTruncateDstTable: 'NonePkUkTruncateDstTable',
      readWorkerNum: 'ReadWorkerNum',
      throttleIOPS: 'ThrottleIOPS',
      throttleRps: 'ThrottleRps',
      writeWorkerNum: 'WriteWorkerNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowDestTableNotEmpty: 'boolean',
      fullTransferSpeedMode: 'string',
      fullVerifySpeedMode: 'string',
      nonePkUkTruncateDstTable: 'boolean',
      readWorkerNum: 'number',
      throttleIOPS: 'number',
      throttleRps: 'number',
      writeWorkerNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestIncrTransferConfig extends $tea.Model {
  enableIncrSyncStatistics?: boolean;
  enableSequencingWithinTxn?: boolean;
  incrSyncConcurrency?: number;
  recordTypeWhiteList?: string[];
  startTimestamp?: string;
  storeLogKeptHour?: number;
  supportDDLTypes?: string[];
  throttleIOPS?: number;
  throttleRps?: number;
  static names(): { [key: string]: string } {
    return {
      enableIncrSyncStatistics: 'EnableIncrSyncStatistics',
      enableSequencingWithinTxn: 'EnableSequencingWithinTxn',
      incrSyncConcurrency: 'IncrSyncConcurrency',
      recordTypeWhiteList: 'RecordTypeWhiteList',
      startTimestamp: 'StartTimestamp',
      storeLogKeptHour: 'StoreLogKeptHour',
      supportDDLTypes: 'SupportDDLTypes',
      throttleIOPS: 'ThrottleIOPS',
      throttleRps: 'ThrottleRps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableIncrSyncStatistics: 'boolean',
      enableSequencingWithinTxn: 'boolean',
      incrSyncConcurrency: 'number',
      recordTypeWhiteList: { 'type': 'array', 'itemType': 'string' },
      startTimestamp: 'string',
      storeLogKeptHour: 'number',
      supportDDLTypes: { 'type': 'array', 'itemType': 'string' },
      throttleIOPS: 'number',
      throttleRps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestReverseIncrTransferConfig extends $tea.Model {
  enableIncrSyncStatistics?: boolean;
  enableSequencingWithinTxn?: boolean;
  incrSyncConcurrency?: number;
  recordTypeWhiteList?: string[];
  startTimestamp?: string;
  storeLogKeptHour?: number;
  supportDDLTypes?: string[];
  throttleIOPS?: number;
  throttleRps?: number;
  static names(): { [key: string]: string } {
    return {
      enableIncrSyncStatistics: 'EnableIncrSyncStatistics',
      enableSequencingWithinTxn: 'EnableSequencingWithinTxn',
      incrSyncConcurrency: 'IncrSyncConcurrency',
      recordTypeWhiteList: 'RecordTypeWhiteList',
      startTimestamp: 'StartTimestamp',
      storeLogKeptHour: 'StoreLogKeptHour',
      supportDDLTypes: 'SupportDDLTypes',
      throttleIOPS: 'ThrottleIOPS',
      throttleRps: 'ThrottleRps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableIncrSyncStatistics: 'boolean',
      enableSequencingWithinTxn: 'boolean',
      incrSyncConcurrency: 'number',
      recordTypeWhiteList: { 'type': 'array', 'itemType': 'string' },
      startTimestamp: 'string',
      storeLogKeptHour: 'number',
      supportDDLTypes: { 'type': 'array', 'itemType': 'string' },
      throttleIOPS: 'number',
      throttleRps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestStructTransferConfig extends $tea.Model {
  byteCharConvertStrategy?: string;
  deferIndexCreation?: boolean;
  static names(): { [key: string]: string } {
    return {
      byteCharConvertStrategy: 'ByteCharConvertStrategy',
      deferIndexCreation: 'DeferIndexCreation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byteCharConvertStrategy: 'string',
      deferIndexCreation: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestTransferMappingDatabasesSpecificTablesAdbTableSchema extends $tea.Model {
  distributedKeys?: string[];
  partitionLifeCycle?: string;
  partitionStatement?: string;
  primaryKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      distributedKeys: 'DistributedKeys',
      partitionLifeCycle: 'PartitionLifeCycle',
      partitionStatement: 'PartitionStatement',
      primaryKeys: 'PrimaryKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributedKeys: { 'type': 'array', 'itemType': 'string' },
      partitionLifeCycle: 'string',
      partitionStatement: 'string',
      primaryKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestTransferMappingDatabasesSpecificTables extends $tea.Model {
  adbTableSchema?: CreateProjectRequestTransferMappingDatabasesSpecificTablesAdbTableSchema;
  filterColumns?: string[];
  id?: string;
  mappedName?: string;
  name?: string;
  shardColumns?: string[];
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      adbTableSchema: 'AdbTableSchema',
      filterColumns: 'FilterColumns',
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      shardColumns: 'ShardColumns',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbTableSchema: CreateProjectRequestTransferMappingDatabasesSpecificTablesAdbTableSchema,
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      mappedName: 'string',
      name: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      whereClause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestTransferMappingDatabasesSpecificViewsAdbTableSchema extends $tea.Model {
  distributedKeys?: string[];
  partitionLifeCycle?: string;
  partitionStatement?: string;
  primaryKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      distributedKeys: 'DistributedKeys',
      partitionLifeCycle: 'PartitionLifeCycle',
      partitionStatement: 'PartitionStatement',
      primaryKeys: 'PrimaryKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributedKeys: { 'type': 'array', 'itemType': 'string' },
      partitionLifeCycle: 'string',
      partitionStatement: 'string',
      primaryKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestTransferMappingDatabasesSpecificViews extends $tea.Model {
  adbTableSchema?: CreateProjectRequestTransferMappingDatabasesSpecificViewsAdbTableSchema;
  filterColumns?: string[];
  id?: string;
  mappedName?: string;
  name?: string;
  shardColumns?: string[];
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      adbTableSchema: 'AdbTableSchema',
      filterColumns: 'FilterColumns',
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      shardColumns: 'ShardColumns',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbTableSchema: CreateProjectRequestTransferMappingDatabasesSpecificViewsAdbTableSchema,
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      mappedName: 'string',
      name: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      whereClause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestTransferMappingDatabasesTablesAdbTableSchema extends $tea.Model {
  distributedKeys?: string[];
  partitionLifeCycle?: string;
  partitionStatement?: string;
  primaryKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      distributedKeys: 'DistributedKeys',
      partitionLifeCycle: 'PartitionLifeCycle',
      partitionStatement: 'PartitionStatement',
      primaryKeys: 'PrimaryKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributedKeys: { 'type': 'array', 'itemType': 'string' },
      partitionLifeCycle: 'string',
      partitionStatement: 'string',
      primaryKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestTransferMappingDatabasesTables extends $tea.Model {
  adbTableSchema?: CreateProjectRequestTransferMappingDatabasesTablesAdbTableSchema;
  filterColumns?: string[];
  id?: string;
  mappedName?: string;
  name?: string;
  shardColumns?: string[];
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      adbTableSchema: 'AdbTableSchema',
      filterColumns: 'FilterColumns',
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      shardColumns: 'ShardColumns',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbTableSchema: CreateProjectRequestTransferMappingDatabasesTablesAdbTableSchema,
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      mappedName: 'string',
      name: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      whereClause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestTransferMappingDatabasesViewsAdbTableSchema extends $tea.Model {
  distributedKeys?: string[];
  partitionLifeCycle?: string;
  partitionStatement?: string;
  primaryKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      distributedKeys: 'DistributedKeys',
      partitionLifeCycle: 'PartitionLifeCycle',
      partitionStatement: 'PartitionStatement',
      primaryKeys: 'PrimaryKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributedKeys: { 'type': 'array', 'itemType': 'string' },
      partitionLifeCycle: 'string',
      partitionStatement: 'string',
      primaryKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestTransferMappingDatabasesViews extends $tea.Model {
  adbTableSchema?: CreateProjectRequestTransferMappingDatabasesViewsAdbTableSchema;
  filterColumns?: string[];
  id?: string;
  mappedName?: string;
  name?: string;
  shardColumns?: string[];
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      adbTableSchema: 'AdbTableSchema',
      filterColumns: 'FilterColumns',
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      shardColumns: 'ShardColumns',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbTableSchema: CreateProjectRequestTransferMappingDatabasesViewsAdbTableSchema,
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      mappedName: 'string',
      name: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      whereClause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestTransferMappingDatabases extends $tea.Model {
  clusterName?: string;
  id?: string;
  mappedName?: string;
  name?: string;
  specificTables?: CreateProjectRequestTransferMappingDatabasesSpecificTables[];
  specificViews?: CreateProjectRequestTransferMappingDatabasesSpecificViews[];
  tables?: CreateProjectRequestTransferMappingDatabasesTables[];
  tenantName?: string;
  views?: CreateProjectRequestTransferMappingDatabasesViews[];
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      specificTables: 'SpecificTables',
      specificViews: 'SpecificViews',
      tables: 'Tables',
      tenantName: 'TenantName',
      views: 'Views',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      id: 'string',
      mappedName: 'string',
      name: 'string',
      specificTables: { 'type': 'array', 'itemType': CreateProjectRequestTransferMappingDatabasesSpecificTables },
      specificViews: { 'type': 'array', 'itemType': CreateProjectRequestTransferMappingDatabasesSpecificViews },
      tables: { 'type': 'array', 'itemType': CreateProjectRequestTransferMappingDatabasesTables },
      tenantName: 'string',
      views: { 'type': 'array', 'itemType': CreateProjectRequestTransferMappingDatabasesViews },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestTransferMappingDatabasesBlackSpecificTablesAdbTableSchema extends $tea.Model {
  distributedKeys?: string[];
  partitionLifeCycle?: string;
  partitionStatement?: string;
  primaryKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      distributedKeys: 'DistributedKeys',
      partitionLifeCycle: 'PartitionLifeCycle',
      partitionStatement: 'PartitionStatement',
      primaryKeys: 'PrimaryKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributedKeys: { 'type': 'array', 'itemType': 'string' },
      partitionLifeCycle: 'string',
      partitionStatement: 'string',
      primaryKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestTransferMappingDatabasesBlackSpecificTables extends $tea.Model {
  adbTableSchema?: CreateProjectRequestTransferMappingDatabasesBlackSpecificTablesAdbTableSchema;
  filterColumns?: string[];
  id?: string;
  mappedName?: string;
  name?: string;
  shardColumns?: string[];
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      adbTableSchema: 'AdbTableSchema',
      filterColumns: 'FilterColumns',
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      shardColumns: 'ShardColumns',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbTableSchema: CreateProjectRequestTransferMappingDatabasesBlackSpecificTablesAdbTableSchema,
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      mappedName: 'string',
      name: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      whereClause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestTransferMappingDatabasesBlackSpecificViewsAdbTableSchema extends $tea.Model {
  distributedKeys?: string[];
  partitionLifeCycle?: string;
  partitionStatement?: string;
  primaryKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      distributedKeys: 'DistributedKeys',
      partitionLifeCycle: 'PartitionLifeCycle',
      partitionStatement: 'PartitionStatement',
      primaryKeys: 'PrimaryKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributedKeys: { 'type': 'array', 'itemType': 'string' },
      partitionLifeCycle: 'string',
      partitionStatement: 'string',
      primaryKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestTransferMappingDatabasesBlackSpecificViews extends $tea.Model {
  adbTableSchema?: CreateProjectRequestTransferMappingDatabasesBlackSpecificViewsAdbTableSchema;
  filterColumns?: string[];
  id?: string;
  mappedName?: string;
  name?: string;
  shardColumns?: string[];
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      adbTableSchema: 'AdbTableSchema',
      filterColumns: 'FilterColumns',
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      shardColumns: 'ShardColumns',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbTableSchema: CreateProjectRequestTransferMappingDatabasesBlackSpecificViewsAdbTableSchema,
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      mappedName: 'string',
      name: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      whereClause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestTransferMappingDatabasesBlackTablesAdbTableSchema extends $tea.Model {
  distributedKeys?: string[];
  partitionLifeCycle?: string;
  partitionStatement?: string;
  primaryKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      distributedKeys: 'DistributedKeys',
      partitionLifeCycle: 'PartitionLifeCycle',
      partitionStatement: 'PartitionStatement',
      primaryKeys: 'PrimaryKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributedKeys: { 'type': 'array', 'itemType': 'string' },
      partitionLifeCycle: 'string',
      partitionStatement: 'string',
      primaryKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestTransferMappingDatabasesBlackTables extends $tea.Model {
  adbTableSchema?: CreateProjectRequestTransferMappingDatabasesBlackTablesAdbTableSchema;
  filterColumns?: string[];
  id?: string;
  mappedName?: string;
  name?: string;
  shardColumns?: string[];
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      adbTableSchema: 'AdbTableSchema',
      filterColumns: 'FilterColumns',
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      shardColumns: 'ShardColumns',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbTableSchema: CreateProjectRequestTransferMappingDatabasesBlackTablesAdbTableSchema,
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      mappedName: 'string',
      name: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      whereClause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestTransferMappingDatabasesBlackViewsAdbTableSchema extends $tea.Model {
  distributedKeys?: string[];
  partitionLifeCycle?: string;
  partitionStatement?: string;
  primaryKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      distributedKeys: 'DistributedKeys',
      partitionLifeCycle: 'PartitionLifeCycle',
      partitionStatement: 'PartitionStatement',
      primaryKeys: 'PrimaryKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributedKeys: { 'type': 'array', 'itemType': 'string' },
      partitionLifeCycle: 'string',
      partitionStatement: 'string',
      primaryKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestTransferMappingDatabasesBlackViews extends $tea.Model {
  adbTableSchema?: CreateProjectRequestTransferMappingDatabasesBlackViewsAdbTableSchema;
  filterColumns?: string[];
  id?: string;
  mappedName?: string;
  name?: string;
  shardColumns?: string[];
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      adbTableSchema: 'AdbTableSchema',
      filterColumns: 'FilterColumns',
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      shardColumns: 'ShardColumns',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbTableSchema: CreateProjectRequestTransferMappingDatabasesBlackViewsAdbTableSchema,
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      mappedName: 'string',
      name: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      whereClause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestTransferMappingDatabasesBlack extends $tea.Model {
  clusterName?: string;
  id?: string;
  mappedName?: string;
  name?: string;
  specificTables?: CreateProjectRequestTransferMappingDatabasesBlackSpecificTables[];
  specificViews?: CreateProjectRequestTransferMappingDatabasesBlackSpecificViews[];
  tables?: CreateProjectRequestTransferMappingDatabasesBlackTables[];
  tenantName?: string;
  views?: CreateProjectRequestTransferMappingDatabasesBlackViews[];
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      specificTables: 'SpecificTables',
      specificViews: 'SpecificViews',
      tables: 'Tables',
      tenantName: 'TenantName',
      views: 'Views',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      id: 'string',
      mappedName: 'string',
      name: 'string',
      specificTables: { 'type': 'array', 'itemType': CreateProjectRequestTransferMappingDatabasesBlackSpecificTables },
      specificViews: { 'type': 'array', 'itemType': CreateProjectRequestTransferMappingDatabasesBlackSpecificViews },
      tables: { 'type': 'array', 'itemType': CreateProjectRequestTransferMappingDatabasesBlackTables },
      tenantName: 'string',
      views: { 'type': 'array', 'itemType': CreateProjectRequestTransferMappingDatabasesBlackViews },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestTransferMapping extends $tea.Model {
  databases?: CreateProjectRequestTransferMappingDatabases[];
  databasesBlack?: CreateProjectRequestTransferMappingDatabasesBlack[];
  mode?: string;
  tableAndViewBlackList?: string[];
  tableAndViewWhiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      databasesBlack: 'DatabasesBlack',
      mode: 'Mode',
      tableAndViewBlackList: 'TableAndViewBlackList',
      tableAndViewWhiteList: 'TableAndViewWhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': CreateProjectRequestTransferMappingDatabases },
      databasesBlack: { 'type': 'array', 'itemType': CreateProjectRequestTransferMappingDatabasesBlack },
      mode: 'string',
      tableAndViewBlackList: { 'type': 'array', 'itemType': 'string' },
      tableAndViewWhiteList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectModifyRecordsRequestDatabasesSpecificTablesAdbTableSchema extends $tea.Model {
  distributedKeys?: string[];
  partitionLifeCycle?: string;
  partitionStatement?: string;
  primaryKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      distributedKeys: 'DistributedKeys',
      partitionLifeCycle: 'PartitionLifeCycle',
      partitionStatement: 'PartitionStatement',
      primaryKeys: 'PrimaryKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributedKeys: { 'type': 'array', 'itemType': 'string' },
      partitionLifeCycle: 'string',
      partitionStatement: 'string',
      primaryKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectModifyRecordsRequestDatabasesSpecificTables extends $tea.Model {
  adbTableSchema?: CreateProjectModifyRecordsRequestDatabasesSpecificTablesAdbTableSchema;
  filterColumns?: string[];
  id?: string;
  mappedName?: string;
  name?: string;
  shardColumns?: string[];
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      adbTableSchema: 'AdbTableSchema',
      filterColumns: 'FilterColumns',
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      shardColumns: 'ShardColumns',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbTableSchema: CreateProjectModifyRecordsRequestDatabasesSpecificTablesAdbTableSchema,
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      mappedName: 'string',
      name: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      whereClause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectModifyRecordsRequestDatabasesSpecificViewsAdbTableSchema extends $tea.Model {
  distributedKeys?: string[];
  partitionLifeCycle?: string;
  partitionStatement?: string;
  primaryKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      distributedKeys: 'DistributedKeys',
      partitionLifeCycle: 'PartitionLifeCycle',
      partitionStatement: 'PartitionStatement',
      primaryKeys: 'PrimaryKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributedKeys: { 'type': 'array', 'itemType': 'string' },
      partitionLifeCycle: 'string',
      partitionStatement: 'string',
      primaryKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectModifyRecordsRequestDatabasesSpecificViews extends $tea.Model {
  adbTableSchema?: CreateProjectModifyRecordsRequestDatabasesSpecificViewsAdbTableSchema;
  filterColumns?: string[];
  id?: string;
  mappedName?: string;
  name?: string;
  shardColumns?: string[];
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      adbTableSchema: 'AdbTableSchema',
      filterColumns: 'FilterColumns',
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      shardColumns: 'ShardColumns',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbTableSchema: CreateProjectModifyRecordsRequestDatabasesSpecificViewsAdbTableSchema,
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      mappedName: 'string',
      name: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      whereClause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectModifyRecordsRequestDatabasesTablesAdbTableSchema extends $tea.Model {
  distributedKeys?: string[];
  partitionLifeCycle?: string;
  partitionStatement?: string;
  primaryKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      distributedKeys: 'DistributedKeys',
      partitionLifeCycle: 'PartitionLifeCycle',
      partitionStatement: 'PartitionStatement',
      primaryKeys: 'PrimaryKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributedKeys: { 'type': 'array', 'itemType': 'string' },
      partitionLifeCycle: 'string',
      partitionStatement: 'string',
      primaryKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectModifyRecordsRequestDatabasesTables extends $tea.Model {
  adbTableSchema?: CreateProjectModifyRecordsRequestDatabasesTablesAdbTableSchema;
  filterColumns?: string[];
  id?: string;
  mappedName?: string;
  name?: string;
  shardColumns?: string[];
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      adbTableSchema: 'AdbTableSchema',
      filterColumns: 'FilterColumns',
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      shardColumns: 'ShardColumns',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbTableSchema: CreateProjectModifyRecordsRequestDatabasesTablesAdbTableSchema,
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      mappedName: 'string',
      name: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      whereClause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectModifyRecordsRequestDatabasesViewsAdbTableSchema extends $tea.Model {
  distributedKeys?: string[];
  partitionLifeCycle?: string;
  partitionStatement?: string;
  primaryKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      distributedKeys: 'DistributedKeys',
      partitionLifeCycle: 'PartitionLifeCycle',
      partitionStatement: 'PartitionStatement',
      primaryKeys: 'PrimaryKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributedKeys: { 'type': 'array', 'itemType': 'string' },
      partitionLifeCycle: 'string',
      partitionStatement: 'string',
      primaryKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectModifyRecordsRequestDatabasesViews extends $tea.Model {
  adbTableSchema?: CreateProjectModifyRecordsRequestDatabasesViewsAdbTableSchema;
  filterColumns?: string[];
  id?: string;
  mappedName?: string;
  name?: string;
  shardColumns?: string[];
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      adbTableSchema: 'AdbTableSchema',
      filterColumns: 'FilterColumns',
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      shardColumns: 'ShardColumns',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbTableSchema: CreateProjectModifyRecordsRequestDatabasesViewsAdbTableSchema,
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      mappedName: 'string',
      name: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      whereClause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectModifyRecordsRequestDatabases extends $tea.Model {
  id?: string;
  mappedName?: string;
  name?: string;
  specificTables?: CreateProjectModifyRecordsRequestDatabasesSpecificTables[];
  specificViews?: CreateProjectModifyRecordsRequestDatabasesSpecificViews[];
  tables?: CreateProjectModifyRecordsRequestDatabasesTables[];
  views?: CreateProjectModifyRecordsRequestDatabasesViews[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      specificTables: 'SpecificTables',
      specificViews: 'SpecificViews',
      tables: 'Tables',
      views: 'Views',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      mappedName: 'string',
      name: 'string',
      specificTables: { 'type': 'array', 'itemType': CreateProjectModifyRecordsRequestDatabasesSpecificTables },
      specificViews: { 'type': 'array', 'itemType': CreateProjectModifyRecordsRequestDatabasesSpecificViews },
      tables: { 'type': 'array', 'itemType': CreateProjectModifyRecordsRequestDatabasesTables },
      views: { 'type': 'array', 'itemType': CreateProjectModifyRecordsRequestDatabasesViews },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectModifyRecordsResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRdsPostgreSQLDataSourceResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityIpGroupResponseBodySecurityIpGroup extends $tea.Model {
  instanceId?: string;
  securityIpGroupName?: string;
  securityIps?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      securityIpGroupName: 'SecurityIpGroupName',
      securityIps: 'SecurityIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      securityIpGroupName: 'string',
      securityIps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTenantSecurityIpGroupResponseBodySecurityIpGroup extends $tea.Model {
  instanceId?: string;
  securityIpGroupName?: string;
  securityIps?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      securityIpGroupName: 'SecurityIpGroupName',
      securityIps: 'SecurityIps',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      securityIpGroupName: 'string',
      securityIps: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTenantUserResponseBodyTenantUserRoles extends $tea.Model {
  database?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTenantUserResponseBodyTenantUser extends $tea.Model {
  roles?: CreateTenantUserResponseBodyTenantUserRoles[];
  userName?: string;
  userStatus?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      roles: 'Roles',
      userName: 'UserName',
      userStatus: 'UserStatus',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roles: { 'type': 'array', 'itemType': CreateTenantUserResponseBodyTenantUserRoles },
      userName: 'string',
      userStatus: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstancesResponseBodyData extends $tea.Model {
  dryRunResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      dryRunResult: 'DryRunResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRunResult: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityIpGroupResponseBodySecurityIpGroup extends $tea.Model {
  instanceId?: string;
  securityIpGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      securityIpGroupName: 'SecurityIpGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      securityIpGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTenantSecurityIpGroupResponseBodySecurityIpGroup extends $tea.Model {
  instanceId?: string;
  securityIpGroupName?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      securityIpGroupName: 'SecurityIpGroupName',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      securityIpGroupName: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAnomalySQLListResponseBodyAnomalySQLList extends $tea.Model {
  cpuTime?: number;
  dbName?: string;
  diagnosis?: string;
  diagnosisRule?: string;
  executions?: number;
  key?: number;
  requestTime?: number;
  requestTimeUTCString?: string;
  SQLId?: string;
  SQLText?: string;
  suggestion?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      cpuTime: 'CpuTime',
      dbName: 'DbName',
      diagnosis: 'Diagnosis',
      diagnosisRule: 'DiagnosisRule',
      executions: 'Executions',
      key: 'Key',
      requestTime: 'RequestTime',
      requestTimeUTCString: 'RequestTimeUTCString',
      SQLId: 'SQLId',
      SQLText: 'SQLText',
      suggestion: 'Suggestion',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuTime: 'number',
      dbName: 'string',
      diagnosis: 'string',
      diagnosisRule: 'string',
      executions: 'number',
      key: 'number',
      requestTime: 'number',
      requestTimeUTCString: 'string',
      SQLId: 'string',
      SQLText: 'string',
      suggestion: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableCpuResourceResponseBodyData extends $tea.Model {
  comment?: string;
  maxCpu?: number;
  minCpu?: number;
  reviewCode?: string;
  unitNum?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      maxCpu: 'MaxCpu',
      minCpu: 'MinCpu',
      reviewCode: 'ReviewCode',
      unitNum: 'UnitNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      maxCpu: 'number',
      minCpu: 'number',
      reviewCode: 'string',
      unitNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableMemResourceResponseBodyData extends $tea.Model {
  maxMem?: number;
  minMem?: number;
  safeMem?: string;
  usedMem?: number;
  static names(): { [key: string]: string } {
    return {
      maxMem: 'MaxMem',
      minMem: 'MinMem',
      safeMem: 'SafeMem',
      usedMem: 'UsedMem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxMem: 'number',
      minMem: 'number',
      safeMem: 'string',
      usedMem: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableSpecResponseBodyDataAvailableSpecificationsDiskSizeRange extends $tea.Model {
  max?: number;
  min?: number;
  step?: number;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      min: 'number',
      step: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableSpecResponseBodyDataAvailableSpecificationsLogDiskSizeRange extends $tea.Model {
  max?: number;
  min?: number;
  step?: number;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      min: 'number',
      step: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableSpecResponseBodyDataAvailableSpecifications extends $tea.Model {
  diskSizeRange?: DescribeAvailableSpecResponseBodyDataAvailableSpecificationsDiskSizeRange;
  diskTypes?: string[];
  instanceClass?: string;
  logDiskSizeRange?: DescribeAvailableSpecResponseBodyDataAvailableSpecificationsLogDiskSizeRange;
  nodeNum?: number[];
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      diskSizeRange: 'DiskSizeRange',
      diskTypes: 'DiskTypes',
      instanceClass: 'InstanceClass',
      logDiskSizeRange: 'LogDiskSizeRange',
      nodeNum: 'NodeNum',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskSizeRange: DescribeAvailableSpecResponseBodyDataAvailableSpecificationsDiskSizeRange,
      diskTypes: { 'type': 'array', 'itemType': 'string' },
      instanceClass: 'string',
      logDiskSizeRange: DescribeAvailableSpecResponseBodyDataAvailableSpecificationsLogDiskSizeRange,
      nodeNum: { 'type': 'array', 'itemType': 'number' },
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableSpecResponseBodyData extends $tea.Model {
  availableSpecifications?: DescribeAvailableSpecResponseBodyDataAvailableSpecifications[];
  static names(): { [key: string]: string } {
    return {
      availableSpecifications: 'AvailableSpecifications',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableSpecifications: { 'type': 'array', 'itemType': DescribeAvailableSpecResponseBodyDataAvailableSpecifications },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableZoneResponseBodyDataAvailableZonesSupportSpecificationsDiskSizeRange extends $tea.Model {
  max?: number;
  min?: number;
  step?: number;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      min: 'number',
      step: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableZoneResponseBodyDataAvailableZonesSupportSpecificationsSupportEngineVersions extends $tea.Model {
  obVersion?: string;
  supportIsolationOptimization?: boolean;
  supportReplicaModes?: string[];
  static names(): { [key: string]: string } {
    return {
      obVersion: 'ObVersion',
      supportIsolationOptimization: 'SupportIsolationOptimization',
      supportReplicaModes: 'SupportReplicaModes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      obVersion: 'string',
      supportIsolationOptimization: 'boolean',
      supportReplicaModes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableZoneResponseBodyDataAvailableZonesSupportSpecifications extends $tea.Model {
  diskSizeRange?: DescribeAvailableZoneResponseBodyDataAvailableZonesSupportSpecificationsDiskSizeRange;
  diskTypes?: string[];
  instanceClass?: string;
  spec?: string;
  supportEngineVersions?: DescribeAvailableZoneResponseBodyDataAvailableZonesSupportSpecificationsSupportEngineVersions[];
  static names(): { [key: string]: string } {
    return {
      diskSizeRange: 'DiskSizeRange',
      diskTypes: 'DiskTypes',
      instanceClass: 'InstanceClass',
      spec: 'Spec',
      supportEngineVersions: 'SupportEngineVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskSizeRange: DescribeAvailableZoneResponseBodyDataAvailableZonesSupportSpecificationsDiskSizeRange,
      diskTypes: { 'type': 'array', 'itemType': 'string' },
      instanceClass: 'string',
      spec: 'string',
      supportEngineVersions: { 'type': 'array', 'itemType': DescribeAvailableZoneResponseBodyDataAvailableZonesSupportSpecificationsSupportEngineVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableZoneResponseBodyDataAvailableZones extends $tea.Model {
  channel?: string;
  cpuArch?: string;
  deployType?: string;
  instanceType?: string;
  region?: string;
  series?: string;
  supportSpecifications?: DescribeAvailableZoneResponseBodyDataAvailableZonesSupportSpecifications[];
  zones?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      cpuArch: 'CpuArch',
      deployType: 'DeployType',
      instanceType: 'InstanceType',
      region: 'Region',
      series: 'Series',
      supportSpecifications: 'SupportSpecifications',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      cpuArch: 'string',
      deployType: 'string',
      instanceType: 'string',
      region: 'string',
      series: 'string',
      supportSpecifications: { 'type': 'array', 'itemType': DescribeAvailableZoneResponseBodyDataAvailableZonesSupportSpecifications },
      zones: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailableZoneResponseBodyData extends $tea.Model {
  availableZones?: DescribeAvailableZoneResponseBodyDataAvailableZones[];
  static names(): { [key: string]: string } {
    return {
      availableZones: 'AvailableZones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZones: { 'type': 'array', 'itemType': DescribeAvailableZoneResponseBodyDataAvailableZones },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupSetDownloadLinkResponseBodyData extends $tea.Model {
  backupRestorableTime?: string;
  backupSetId?: string;
  downloadTaskCreateTime?: string;
  downloadTaskId?: number;
  downloadTaskStatus?: string;
  internalUrl?: string;
  urlAliveTime?: number;
  urlExpiredTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupRestorableTime: 'BackupRestorableTime',
      backupSetId: 'BackupSetId',
      downloadTaskCreateTime: 'DownloadTaskCreateTime',
      downloadTaskId: 'DownloadTaskId',
      downloadTaskStatus: 'DownloadTaskStatus',
      internalUrl: 'InternalUrl',
      urlAliveTime: 'UrlAliveTime',
      urlExpiredTime: 'UrlExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRestorableTime: 'string',
      backupSetId: 'string',
      downloadTaskCreateTime: 'string',
      downloadTaskId: 'number',
      downloadTaskStatus: 'string',
      internalUrl: 'string',
      urlAliveTime: 'number',
      urlExpiredTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCharsetResponseBodyCharset extends $tea.Model {
  charset?: string;
  collations?: string[];
  static names(): { [key: string]: string } {
    return {
      charset: 'Charset',
      collations: 'Collations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charset: 'string',
      collations: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataBackupSetResponseBodyDataBackupObjectsDatabaseTablesList extends $tea.Model {
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

export class DescribeDataBackupSetResponseBodyDataBackupObjects extends $tea.Model {
  clusterName?: string;
  databaseTablesList?: DescribeDataBackupSetResponseBodyDataBackupObjectsDatabaseTablesList[];
  tenantName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      databaseTablesList: 'DatabaseTablesList',
      tenantName: 'TenantName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      databaseTablesList: { 'type': 'array', 'itemType': DescribeDataBackupSetResponseBodyDataBackupObjectsDatabaseTablesList },
      tenantName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataBackupSetResponseBodyDataBackupResultsTableBackupResults extends $tea.Model {
  database?: string;
  message?: string;
  status?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      message: 'Message',
      status: 'Status',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      message: 'string',
      status: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataBackupSetResponseBodyDataBackupResults extends $tea.Model {
  clusterName?: string;
  tableBackupResults?: DescribeDataBackupSetResponseBodyDataBackupResultsTableBackupResults[];
  tenantName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      tableBackupResults: 'TableBackupResults',
      tenantName: 'TenantName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      tableBackupResults: { 'type': 'array', 'itemType': DescribeDataBackupSetResponseBodyDataBackupResultsTableBackupResults },
      tenantName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataBackupSetResponseBodyData extends $tea.Model {
  backupObjectType?: string;
  backupObjects?: DescribeDataBackupSetResponseBodyDataBackupObjects[];
  backupResults?: DescribeDataBackupSetResponseBodyDataBackupResults[];
  checkpoint?: string;
  dataSize?: number;
  dataVersion?: number;
  downloadTaskId?: number;
  downloadTaskStatus?: string;
  endTime?: string;
  method?: string;
  policy?: string;
  progress?: string;
  setId?: number;
  startTime?: string;
  status?: string;
  storageClass?: string;
  type?: string;
  validity?: string;
  static names(): { [key: string]: string } {
    return {
      backupObjectType: 'BackupObjectType',
      backupObjects: 'BackupObjects',
      backupResults: 'BackupResults',
      checkpoint: 'Checkpoint',
      dataSize: 'DataSize',
      dataVersion: 'DataVersion',
      downloadTaskId: 'DownloadTaskId',
      downloadTaskStatus: 'DownloadTaskStatus',
      endTime: 'EndTime',
      method: 'Method',
      policy: 'Policy',
      progress: 'Progress',
      setId: 'SetId',
      startTime: 'StartTime',
      status: 'Status',
      storageClass: 'StorageClass',
      type: 'Type',
      validity: 'Validity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupObjectType: 'string',
      backupObjects: { 'type': 'array', 'itemType': DescribeDataBackupSetResponseBodyDataBackupObjects },
      backupResults: { 'type': 'array', 'itemType': DescribeDataBackupSetResponseBodyDataBackupResults },
      checkpoint: 'string',
      dataSize: 'number',
      dataVersion: 'number',
      downloadTaskId: 'number',
      downloadTaskStatus: 'string',
      endTime: 'string',
      method: 'string',
      policy: 'string',
      progress: 'string',
      setId: 'number',
      startTime: 'string',
      status: 'string',
      storageClass: 'string',
      type: 'string',
      validity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesResponseBodyDatabasesTables extends $tea.Model {
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesResponseBodyDatabasesUsers extends $tea.Model {
  privileges?: string;
  role?: string;
  userName?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      privileges: 'Privileges',
      role: 'Role',
      userName: 'UserName',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privileges: 'string',
      role: 'string',
      userName: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabasesResponseBodyDatabases extends $tea.Model {
  collation?: string;
  createTime?: string;
  dataSize?: number;
  databaseName?: string;
  dbType?: string;
  description?: string;
  encoding?: string;
  instanceId?: string;
  requiredSize?: number;
  status?: string;
  tables?: DescribeDatabasesResponseBodyDatabasesTables[];
  tenantId?: string;
  tenantName?: string;
  users?: DescribeDatabasesResponseBodyDatabasesUsers[];
  static names(): { [key: string]: string } {
    return {
      collation: 'Collation',
      createTime: 'CreateTime',
      dataSize: 'DataSize',
      databaseName: 'DatabaseName',
      dbType: 'DbType',
      description: 'Description',
      encoding: 'Encoding',
      instanceId: 'InstanceId',
      requiredSize: 'RequiredSize',
      status: 'Status',
      tables: 'Tables',
      tenantId: 'TenantId',
      tenantName: 'TenantName',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collation: 'string',
      createTime: 'string',
      dataSize: 'number',
      databaseName: 'string',
      dbType: 'string',
      description: 'string',
      encoding: 'string',
      instanceId: 'string',
      requiredSize: 'number',
      status: 'string',
      tables: { 'type': 'array', 'itemType': DescribeDatabasesResponseBodyDatabasesTables },
      tenantId: 'string',
      tenantName: 'string',
      users: { 'type': 'array', 'itemType': DescribeDatabasesResponseBodyDatabasesUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyInstanceDataDiskAutoScaleConfig extends $tea.Model {
  autoScale?: boolean;
  maxDiskSize?: number;
  scaleStepInMerge?: number;
  scaleStepInNormal?: number;
  upperMergeThreshold?: number;
  upperScaleStep?: string;
  upperScaleStrategy?: string;
  upperThreshold?: number;
  upperbound?: number;
  static names(): { [key: string]: string } {
    return {
      autoScale: 'AutoScale',
      maxDiskSize: 'MaxDiskSize',
      scaleStepInMerge: 'ScaleStepInMerge',
      scaleStepInNormal: 'ScaleStepInNormal',
      upperMergeThreshold: 'UpperMergeThreshold',
      upperScaleStep: 'UpperScaleStep',
      upperScaleStrategy: 'UpperScaleStrategy',
      upperThreshold: 'UpperThreshold',
      upperbound: 'Upperbound',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScale: 'boolean',
      maxDiskSize: 'number',
      scaleStepInMerge: 'number',
      scaleStepInNormal: 'number',
      upperMergeThreshold: 'number',
      upperScaleStep: 'string',
      upperScaleStrategy: 'string',
      upperThreshold: 'number',
      upperbound: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyInstanceReadOnlyResourceCapacityUnit extends $tea.Model {
  maxCapacityUnit?: number;
  minCapacityUnit?: number;
  usedCapacityUnit?: string;
  static names(): { [key: string]: string } {
    return {
      maxCapacityUnit: 'MaxCapacityUnit',
      minCapacityUnit: 'MinCapacityUnit',
      usedCapacityUnit: 'UsedCapacityUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCapacityUnit: 'number',
      minCapacityUnit: 'number',
      usedCapacityUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyInstanceReadOnlyResourceCpu extends $tea.Model {
  originalTotalCpu?: number;
  totalCpu?: number;
  unitCpu?: number;
  usedCpu?: number;
  static names(): { [key: string]: string } {
    return {
      originalTotalCpu: 'OriginalTotalCpu',
      totalCpu: 'TotalCpu',
      unitCpu: 'UnitCpu',
      usedCpu: 'UsedCpu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalTotalCpu: 'number',
      totalCpu: 'number',
      unitCpu: 'number',
      usedCpu: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyInstanceReadOnlyResourceDiskSize extends $tea.Model {
  dataUsedSize?: number;
  maxDiskSize?: number;
  maxDiskUsedObServer?: string[];
  maxDiskUsedPercent?: number;
  originalTotalDiskSize?: number;
  totalDiskSize?: number;
  unitDiskSize?: number;
  usedDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataUsedSize: 'DataUsedSize',
      maxDiskSize: 'MaxDiskSize',
      maxDiskUsedObServer: 'MaxDiskUsedObServer',
      maxDiskUsedPercent: 'MaxDiskUsedPercent',
      originalTotalDiskSize: 'OriginalTotalDiskSize',
      totalDiskSize: 'TotalDiskSize',
      unitDiskSize: 'UnitDiskSize',
      usedDiskSize: 'UsedDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataUsedSize: 'number',
      maxDiskSize: 'number',
      maxDiskUsedObServer: { 'type': 'array', 'itemType': 'string' },
      maxDiskUsedPercent: 'number',
      originalTotalDiskSize: 'number',
      totalDiskSize: 'number',
      unitDiskSize: 'number',
      usedDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyInstanceReadOnlyResourceLogDiskSize extends $tea.Model {
  logAssignedSize?: string;
  maxLogAssignedObServer?: string[];
  maxLogAssignedPercent?: string;
  totalDiskSize?: number;
  unitDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      logAssignedSize: 'LogAssignedSize',
      maxLogAssignedObServer: 'MaxLogAssignedObServer',
      maxLogAssignedPercent: 'MaxLogAssignedPercent',
      totalDiskSize: 'TotalDiskSize',
      unitDiskSize: 'UnitDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logAssignedSize: 'string',
      maxLogAssignedObServer: { 'type': 'array', 'itemType': 'string' },
      maxLogAssignedPercent: 'string',
      totalDiskSize: 'number',
      unitDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyInstanceReadOnlyResourceMemory extends $tea.Model {
  originalTotalMemory?: number;
  totalMemory?: number;
  unitMemory?: number;
  usedMemory?: number;
  static names(): { [key: string]: string } {
    return {
      originalTotalMemory: 'OriginalTotalMemory',
      totalMemory: 'TotalMemory',
      unitMemory: 'UnitMemory',
      usedMemory: 'UsedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalTotalMemory: 'number',
      totalMemory: 'number',
      unitMemory: 'number',
      usedMemory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyInstanceReadOnlyResource extends $tea.Model {
  capacityUnit?: DescribeInstanceResponseBodyInstanceReadOnlyResourceCapacityUnit;
  cpu?: DescribeInstanceResponseBodyInstanceReadOnlyResourceCpu;
  diskSize?: DescribeInstanceResponseBodyInstanceReadOnlyResourceDiskSize;
  logDiskSize?: DescribeInstanceResponseBodyInstanceReadOnlyResourceLogDiskSize;
  memory?: DescribeInstanceResponseBodyInstanceReadOnlyResourceMemory;
  unitCount?: number;
  static names(): { [key: string]: string } {
    return {
      capacityUnit: 'CapacityUnit',
      cpu: 'Cpu',
      diskSize: 'DiskSize',
      logDiskSize: 'LogDiskSize',
      memory: 'Memory',
      unitCount: 'UnitCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityUnit: DescribeInstanceResponseBodyInstanceReadOnlyResourceCapacityUnit,
      cpu: DescribeInstanceResponseBodyInstanceReadOnlyResourceCpu,
      diskSize: DescribeInstanceResponseBodyInstanceReadOnlyResourceDiskSize,
      logDiskSize: DescribeInstanceResponseBodyInstanceReadOnlyResourceLogDiskSize,
      memory: DescribeInstanceResponseBodyInstanceReadOnlyResourceMemory,
      unitCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyInstanceResourceCapacityUnit extends $tea.Model {
  maxCapacityUnit?: number;
  minCapacityUnit?: number;
  usedCapacityUnit?: string;
  static names(): { [key: string]: string } {
    return {
      maxCapacityUnit: 'MaxCapacityUnit',
      minCapacityUnit: 'MinCapacityUnit',
      usedCapacityUnit: 'UsedCapacityUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCapacityUnit: 'number',
      minCapacityUnit: 'number',
      usedCapacityUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyInstanceResourceCpu extends $tea.Model {
  originalTotalCpu?: number;
  totalCpu?: number;
  unitCpu?: number;
  usedCpu?: number;
  static names(): { [key: string]: string } {
    return {
      originalTotalCpu: 'OriginalTotalCpu',
      totalCpu: 'TotalCpu',
      unitCpu: 'UnitCpu',
      usedCpu: 'UsedCpu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalTotalCpu: 'number',
      totalCpu: 'number',
      unitCpu: 'number',
      usedCpu: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyInstanceResourceDiskSize extends $tea.Model {
  dataUsedSize?: number;
  maxDiskSize?: number;
  maxDiskUsedObServer?: string[];
  maxDiskUsedPercent?: number;
  originalTotalDiskSize?: number;
  totalDiskSize?: number;
  unitDiskSize?: number;
  usedDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataUsedSize: 'DataUsedSize',
      maxDiskSize: 'MaxDiskSize',
      maxDiskUsedObServer: 'MaxDiskUsedObServer',
      maxDiskUsedPercent: 'MaxDiskUsedPercent',
      originalTotalDiskSize: 'OriginalTotalDiskSize',
      totalDiskSize: 'TotalDiskSize',
      unitDiskSize: 'UnitDiskSize',
      usedDiskSize: 'UsedDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataUsedSize: 'number',
      maxDiskSize: 'number',
      maxDiskUsedObServer: { 'type': 'array', 'itemType': 'string' },
      maxDiskUsedPercent: 'number',
      originalTotalDiskSize: 'number',
      totalDiskSize: 'number',
      unitDiskSize: 'number',
      usedDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyInstanceResourceLogDiskSize extends $tea.Model {
  logAssignedSize?: string;
  maxLogAssignedObServer?: string[];
  maxLogAssignedPercent?: string;
  originalTotalDiskSize?: number;
  totalDiskSize?: number;
  unitDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      logAssignedSize: 'LogAssignedSize',
      maxLogAssignedObServer: 'MaxLogAssignedObServer',
      maxLogAssignedPercent: 'MaxLogAssignedPercent',
      originalTotalDiskSize: 'OriginalTotalDiskSize',
      totalDiskSize: 'TotalDiskSize',
      unitDiskSize: 'UnitDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logAssignedSize: 'string',
      maxLogAssignedObServer: { 'type': 'array', 'itemType': 'string' },
      maxLogAssignedPercent: 'string',
      originalTotalDiskSize: 'number',
      totalDiskSize: 'number',
      unitDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyInstanceResourceMemory extends $tea.Model {
  originalTotalMemory?: number;
  totalMemory?: number;
  unitMemory?: number;
  usedMemory?: number;
  static names(): { [key: string]: string } {
    return {
      originalTotalMemory: 'OriginalTotalMemory',
      totalMemory: 'TotalMemory',
      unitMemory: 'UnitMemory',
      usedMemory: 'UsedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalTotalMemory: 'number',
      totalMemory: 'number',
      unitMemory: 'number',
      usedMemory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyInstanceResource extends $tea.Model {
  capacityUnit?: DescribeInstanceResponseBodyInstanceResourceCapacityUnit;
  cpu?: DescribeInstanceResponseBodyInstanceResourceCpu;
  diskSize?: DescribeInstanceResponseBodyInstanceResourceDiskSize;
  logDiskSize?: DescribeInstanceResponseBodyInstanceResourceLogDiskSize;
  memory?: DescribeInstanceResponseBodyInstanceResourceMemory;
  unitCount?: number;
  static names(): { [key: string]: string } {
    return {
      capacityUnit: 'CapacityUnit',
      cpu: 'Cpu',
      diskSize: 'DiskSize',
      logDiskSize: 'LogDiskSize',
      memory: 'Memory',
      unitCount: 'UnitCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityUnit: DescribeInstanceResponseBodyInstanceResourceCapacityUnit,
      cpu: DescribeInstanceResponseBodyInstanceResourceCpu,
      diskSize: DescribeInstanceResponseBodyInstanceResourceDiskSize,
      logDiskSize: DescribeInstanceResponseBodyInstanceResourceLogDiskSize,
      memory: DescribeInstanceResponseBodyInstanceResourceMemory,
      unitCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyInstanceTenantCreatable extends $tea.Model {
  disableCreateTenantReason?: string;
  enableCreateTenant?: boolean;
  static names(): { [key: string]: string } {
    return {
      disableCreateTenantReason: 'DisableCreateTenantReason',
      enableCreateTenant: 'EnableCreateTenant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableCreateTenantReason: 'string',
      enableCreateTenant: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyInstance extends $tea.Model {
  allowModifyInternetAddressConnectionLimit?: boolean;
  autoRenewal?: boolean;
  autoUpgradeObVersion?: boolean;
  availableZones?: string[];
  cpuArchitecture?: string;
  createTime?: string;
  dataDiskAutoScale?: boolean;
  dataDiskAutoScaleConfig?: DescribeInstanceResponseBodyInstanceDataDiskAutoScaleConfig;
  dataMergeTime?: string;
  deployMode?: string;
  deployType?: string;
  diskType?: string;
  enableIsolationOptimization?: boolean;
  enableProxyService?: boolean;
  enableReadOnlyReplica?: boolean;
  enableReadOnlyReplicaManagement?: boolean;
  enableUpgradeLogDisk?: boolean;
  exclusiveUnitNumLimit?: number;
  expireTime?: string;
  inTempCapacityStatus?: boolean;
  instanceClass?: string;
  instanceId?: string;
  instanceName?: string;
  instanceRole?: string;
  isLatestObVersion?: boolean;
  isTrustEcs?: boolean;
  isolationOptimization?: boolean;
  maintainTime?: string;
  nodeNum?: string;
  obRpmVersion?: string;
  payType?: string;
  primaryInstance?: string;
  primaryRegion?: string;
  proxyClusterId?: string;
  proxyServiceStatus?: string;
  readOnlyResource?: DescribeInstanceResponseBodyInstanceReadOnlyResource;
  replicaMode?: string;
  resource?: DescribeInstanceResponseBodyInstanceResource;
  series?: string;
  sharedUnitNumLimit?: number;
  specType?: string;
  status?: string;
  tenantCreatable?: DescribeInstanceResponseBodyInstanceTenantCreatable;
  unitSpec?: string;
  version?: string;
  zones?: string[];
  static names(): { [key: string]: string } {
    return {
      allowModifyInternetAddressConnectionLimit: 'AllowModifyInternetAddressConnectionLimit',
      autoRenewal: 'AutoRenewal',
      autoUpgradeObVersion: 'AutoUpgradeObVersion',
      availableZones: 'AvailableZones',
      cpuArchitecture: 'CpuArchitecture',
      createTime: 'CreateTime',
      dataDiskAutoScale: 'DataDiskAutoScale',
      dataDiskAutoScaleConfig: 'DataDiskAutoScaleConfig',
      dataMergeTime: 'DataMergeTime',
      deployMode: 'DeployMode',
      deployType: 'DeployType',
      diskType: 'DiskType',
      enableIsolationOptimization: 'EnableIsolationOptimization',
      enableProxyService: 'EnableProxyService',
      enableReadOnlyReplica: 'EnableReadOnlyReplica',
      enableReadOnlyReplicaManagement: 'EnableReadOnlyReplicaManagement',
      enableUpgradeLogDisk: 'EnableUpgradeLogDisk',
      exclusiveUnitNumLimit: 'ExclusiveUnitNumLimit',
      expireTime: 'ExpireTime',
      inTempCapacityStatus: 'InTempCapacityStatus',
      instanceClass: 'InstanceClass',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceRole: 'InstanceRole',
      isLatestObVersion: 'IsLatestObVersion',
      isTrustEcs: 'IsTrustEcs',
      isolationOptimization: 'IsolationOptimization',
      maintainTime: 'MaintainTime',
      nodeNum: 'NodeNum',
      obRpmVersion: 'ObRpmVersion',
      payType: 'PayType',
      primaryInstance: 'PrimaryInstance',
      primaryRegion: 'PrimaryRegion',
      proxyClusterId: 'ProxyClusterId',
      proxyServiceStatus: 'ProxyServiceStatus',
      readOnlyResource: 'ReadOnlyResource',
      replicaMode: 'ReplicaMode',
      resource: 'Resource',
      series: 'Series',
      sharedUnitNumLimit: 'SharedUnitNumLimit',
      specType: 'SpecType',
      status: 'Status',
      tenantCreatable: 'TenantCreatable',
      unitSpec: 'UnitSpec',
      version: 'Version',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowModifyInternetAddressConnectionLimit: 'boolean',
      autoRenewal: 'boolean',
      autoUpgradeObVersion: 'boolean',
      availableZones: { 'type': 'array', 'itemType': 'string' },
      cpuArchitecture: 'string',
      createTime: 'string',
      dataDiskAutoScale: 'boolean',
      dataDiskAutoScaleConfig: DescribeInstanceResponseBodyInstanceDataDiskAutoScaleConfig,
      dataMergeTime: 'string',
      deployMode: 'string',
      deployType: 'string',
      diskType: 'string',
      enableIsolationOptimization: 'boolean',
      enableProxyService: 'boolean',
      enableReadOnlyReplica: 'boolean',
      enableReadOnlyReplicaManagement: 'boolean',
      enableUpgradeLogDisk: 'boolean',
      exclusiveUnitNumLimit: 'number',
      expireTime: 'string',
      inTempCapacityStatus: 'boolean',
      instanceClass: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceRole: 'string',
      isLatestObVersion: 'boolean',
      isTrustEcs: 'boolean',
      isolationOptimization: 'boolean',
      maintainTime: 'string',
      nodeNum: 'string',
      obRpmVersion: 'string',
      payType: 'string',
      primaryInstance: 'string',
      primaryRegion: 'string',
      proxyClusterId: 'string',
      proxyServiceStatus: 'string',
      readOnlyResource: DescribeInstanceResponseBodyInstanceReadOnlyResource,
      replicaMode: 'string',
      resource: DescribeInstanceResponseBodyInstanceResource,
      series: 'string',
      sharedUnitNumLimit: 'number',
      specType: 'string',
      status: 'string',
      tenantCreatable: DescribeInstanceResponseBodyInstanceTenantCreatable,
      unitSpec: 'string',
      version: 'string',
      zones: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceCreatableZoneResponseBodyZoneList extends $tea.Model {
  isInCluster?: boolean;
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      isInCluster: 'IsInCluster',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isInCluster: 'boolean',
      zone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSSLResponseBodyInstanceSSL extends $tea.Model {
  caUrl?: string;
  enableSSL?: string;
  forceSSL?: string;
  forceSSLSupport?: boolean;
  instanceId?: string;
  status?: string;
  validPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      caUrl: 'CaUrl',
      enableSSL: 'EnableSSL',
      forceSSL: 'ForceSSL',
      forceSSLSupport: 'ForceSSLSupport',
      instanceId: 'InstanceId',
      status: 'Status',
      validPeriod: 'ValidPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caUrl: 'string',
      enableSSL: 'string',
      forceSSL: 'string',
      forceSSLSupport: 'boolean',
      instanceId: 'string',
      status: 'string',
      validPeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSecurityConfigsResponseBodyInstanceSecurityConfigsSecurityConfigs extends $tea.Model {
  configDescription?: string;
  configGroup?: string;
  configName?: string;
  risk?: boolean;
  riskDescription?: string;
  static names(): { [key: string]: string } {
    return {
      configDescription: 'ConfigDescription',
      configGroup: 'ConfigGroup',
      configName: 'ConfigName',
      risk: 'Risk',
      riskDescription: 'RiskDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configDescription: 'string',
      configGroup: 'string',
      configName: 'string',
      risk: 'boolean',
      riskDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSecurityConfigsResponseBodyInstanceSecurityConfigs extends $tea.Model {
  checkId?: string;
  checkTime?: string;
  instanceId?: string;
  securityConfigs?: DescribeInstanceSecurityConfigsResponseBodyInstanceSecurityConfigsSecurityConfigs[];
  totalCheckCount?: number;
  totalRiskCount?: number;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      checkTime: 'CheckTime',
      instanceId: 'InstanceId',
      securityConfigs: 'SecurityConfigs',
      totalCheckCount: 'TotalCheckCount',
      totalRiskCount: 'TotalRiskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      checkTime: 'string',
      instanceId: 'string',
      securityConfigs: { 'type': 'array', 'itemType': DescribeInstanceSecurityConfigsResponseBodyInstanceSecurityConfigsSecurityConfigs },
      totalCheckCount: 'number',
      totalRiskCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTagsResponseBodyTagResources extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResourceCpu extends $tea.Model {
  totalCpu?: number;
  usedCpu?: number;
  static names(): { [key: string]: string } {
    return {
      totalCpu: 'TotalCpu',
      usedCpu: 'UsedCpu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCpu: 'number',
      usedCpu: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResourceDiskSize extends $tea.Model {
  totalDiskSize?: number;
  usedDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      totalDiskSize: 'TotalDiskSize',
      usedDiskSize: 'UsedDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalDiskSize: 'number',
      usedDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResourceMemory extends $tea.Model {
  totalMemory?: number;
  usedMemory?: number;
  static names(): { [key: string]: string } {
    return {
      totalMemory: 'TotalMemory',
      usedMemory: 'UsedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalMemory: 'number',
      usedMemory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResource extends $tea.Model {
  cpu?: DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResourceCpu;
  diskSize?: DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResourceDiskSize;
  memory?: DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResourceMemory;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      diskSize: 'DiskSize',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResourceCpu,
      diskSize: DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResourceDiskSize,
      memory: DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResourceMemory,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTopologyResponseBodyInstanceTopologyReplicas extends $tea.Model {
  logicalZone?: string;
  nodeNum?: number;
  replicaResource?: DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResource;
  replicaType?: string;
  status?: string;
  zoneLogicalId?: number;
  zoneLogicalName?: string;
  zoneRegionName?: string;
  static names(): { [key: string]: string } {
    return {
      logicalZone: 'LogicalZone',
      nodeNum: 'NodeNum',
      replicaResource: 'ReplicaResource',
      replicaType: 'ReplicaType',
      status: 'Status',
      zoneLogicalId: 'ZoneLogicalId',
      zoneLogicalName: 'ZoneLogicalName',
      zoneRegionName: 'ZoneRegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalZone: 'string',
      nodeNum: 'number',
      replicaResource: DescribeInstanceTopologyResponseBodyInstanceTopologyReplicasReplicaResource,
      replicaType: 'string',
      status: 'string',
      zoneLogicalId: 'number',
      zoneLogicalName: 'string',
      zoneRegionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTopologyResponseBodyInstanceTopologyTenantsTenantZonesUnits extends $tea.Model {
  enableCancelMigrateUnit?: boolean;
  enableMigrateUnit?: boolean;
  manualMigrate?: boolean;
  nodeId?: string;
  replicaType?: string;
  unitCpu?: number;
  unitDataSize?: number;
  unitId?: string;
  unitMemory?: number;
  unitStatus?: string;
  static names(): { [key: string]: string } {
    return {
      enableCancelMigrateUnit: 'EnableCancelMigrateUnit',
      enableMigrateUnit: 'EnableMigrateUnit',
      manualMigrate: 'ManualMigrate',
      nodeId: 'NodeId',
      replicaType: 'ReplicaType',
      unitCpu: 'UnitCpu',
      unitDataSize: 'UnitDataSize',
      unitId: 'UnitId',
      unitMemory: 'UnitMemory',
      unitStatus: 'UnitStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableCancelMigrateUnit: 'boolean',
      enableMigrateUnit: 'boolean',
      manualMigrate: 'boolean',
      nodeId: 'string',
      replicaType: 'string',
      unitCpu: 'number',
      unitDataSize: 'number',
      unitId: 'string',
      unitMemory: 'number',
      unitStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTopologyResponseBodyInstanceTopologyTenantsTenantZones extends $tea.Model {
  isPrimaryTenantZone?: boolean;
  logicalZone?: string;
  replicaType?: string;
  tenantZoneId?: string;
  tenantZoneRole?: string;
  units?: DescribeInstanceTopologyResponseBodyInstanceTopologyTenantsTenantZonesUnits[];
  static names(): { [key: string]: string } {
    return {
      isPrimaryTenantZone: 'IsPrimaryTenantZone',
      logicalZone: 'LogicalZone',
      replicaType: 'ReplicaType',
      tenantZoneId: 'TenantZoneId',
      tenantZoneRole: 'TenantZoneRole',
      units: 'Units',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPrimaryTenantZone: 'boolean',
      logicalZone: 'string',
      replicaType: 'string',
      tenantZoneId: 'string',
      tenantZoneRole: 'string',
      units: { 'type': 'array', 'itemType': DescribeInstanceTopologyResponseBodyInstanceTopologyTenantsTenantZonesUnits },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTopologyResponseBodyInstanceTopologyTenants extends $tea.Model {
  primaryZoneDeployType?: string;
  tenantCpu?: number;
  tenantDeployType?: string;
  tenantDiskSize?: number;
  tenantId?: string;
  tenantMemory?: number;
  tenantMode?: string;
  tenantName?: string;
  tenantStatus?: string;
  tenantUnitCpu?: number;
  tenantUnitMemory?: number;
  tenantUnitNum?: number;
  tenantZones?: DescribeInstanceTopologyResponseBodyInstanceTopologyTenantsTenantZones[];
  static names(): { [key: string]: string } {
    return {
      primaryZoneDeployType: 'PrimaryZoneDeployType',
      tenantCpu: 'TenantCpu',
      tenantDeployType: 'TenantDeployType',
      tenantDiskSize: 'TenantDiskSize',
      tenantId: 'TenantId',
      tenantMemory: 'TenantMemory',
      tenantMode: 'TenantMode',
      tenantName: 'TenantName',
      tenantStatus: 'TenantStatus',
      tenantUnitCpu: 'TenantUnitCpu',
      tenantUnitMemory: 'TenantUnitMemory',
      tenantUnitNum: 'TenantUnitNum',
      tenantZones: 'TenantZones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primaryZoneDeployType: 'string',
      tenantCpu: 'number',
      tenantDeployType: 'string',
      tenantDiskSize: 'number',
      tenantId: 'string',
      tenantMemory: 'number',
      tenantMode: 'string',
      tenantName: 'string',
      tenantStatus: 'string',
      tenantUnitCpu: 'number',
      tenantUnitMemory: 'number',
      tenantUnitNum: 'number',
      tenantZones: { 'type': 'array', 'itemType': DescribeInstanceTopologyResponseBodyInstanceTopologyTenantsTenantZones },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResourceCpu extends $tea.Model {
  totalCpu?: number;
  usedCpu?: number;
  static names(): { [key: string]: string } {
    return {
      totalCpu: 'TotalCpu',
      usedCpu: 'UsedCpu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCpu: 'number',
      usedCpu: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResourceDiskSize extends $tea.Model {
  totalDiskSize?: number;
  usedDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      totalDiskSize: 'TotalDiskSize',
      usedDiskSize: 'UsedDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalDiskSize: 'number',
      usedDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResourceMemory extends $tea.Model {
  totalMemory?: number;
  usedMemory?: number;
  static names(): { [key: string]: string } {
    return {
      totalMemory: 'TotalMemory',
      usedMemory: 'UsedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalMemory: 'number',
      usedMemory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResource extends $tea.Model {
  cpu?: DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResourceCpu;
  diskSize?: DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResourceDiskSize;
  memory?: DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResourceMemory;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      diskSize: 'DiskSize',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResourceCpu,
      diskSize: DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResourceDiskSize,
      memory: DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResourceMemory,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodes extends $tea.Model {
  fullCopyId?: number;
  logicalZone?: string;
  nodeCopyId?: number;
  nodeId?: string;
  nodeResource?: DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResource;
  nodeStatus?: string;
  readOnlyCopyId?: number;
  replicaType?: string;
  static names(): { [key: string]: string } {
    return {
      fullCopyId: 'FullCopyId',
      logicalZone: 'LogicalZone',
      nodeCopyId: 'NodeCopyId',
      nodeId: 'NodeId',
      nodeResource: 'NodeResource',
      nodeStatus: 'NodeStatus',
      readOnlyCopyId: 'ReadOnlyCopyId',
      replicaType: 'ReplicaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullCopyId: 'number',
      logicalZone: 'string',
      nodeCopyId: 'number',
      nodeId: 'string',
      nodeResource: DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResource,
      nodeStatus: 'string',
      readOnlyCopyId: 'number',
      replicaType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTopologyResponseBodyInstanceTopologyZonesZoneResourceDiskSize extends $tea.Model {
  maxDiskUsedObServer?: string[];
  maxDiskUsedPercent?: number;
  static names(): { [key: string]: string } {
    return {
      maxDiskUsedObServer: 'MaxDiskUsedObServer',
      maxDiskUsedPercent: 'MaxDiskUsedPercent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxDiskUsedObServer: { 'type': 'array', 'itemType': 'string' },
      maxDiskUsedPercent: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTopologyResponseBodyInstanceTopologyZonesZoneResource extends $tea.Model {
  diskSize?: DescribeInstanceTopologyResponseBodyInstanceTopologyZonesZoneResourceDiskSize;
  static names(): { [key: string]: string } {
    return {
      diskSize: 'DiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskSize: DescribeInstanceTopologyResponseBodyInstanceTopologyZonesZoneResourceDiskSize,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTopologyResponseBodyInstanceTopologyZones extends $tea.Model {
  nodes?: DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodes[];
  region?: string;
  zoneDisk?: string;
  zoneId?: string;
  zoneResource?: DescribeInstanceTopologyResponseBodyInstanceTopologyZonesZoneResource;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      region: 'Region',
      zoneDisk: 'ZoneDisk',
      zoneId: 'ZoneId',
      zoneResource: 'ZoneResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodes },
      region: 'string',
      zoneDisk: 'string',
      zoneId: 'string',
      zoneResource: DescribeInstanceTopologyResponseBodyInstanceTopologyZonesZoneResource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTopologyResponseBodyInstanceTopology extends $tea.Model {
  replicas?: DescribeInstanceTopologyResponseBodyInstanceTopologyReplicas[];
  tenants?: DescribeInstanceTopologyResponseBodyInstanceTopologyTenants[];
  zones?: DescribeInstanceTopologyResponseBodyInstanceTopologyZones[];
  static names(): { [key: string]: string } {
    return {
      replicas: 'Replicas',
      tenants: 'Tenants',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      replicas: { 'type': 'array', 'itemType': DescribeInstanceTopologyResponseBodyInstanceTopologyReplicas },
      tenants: { 'type': 'array', 'itemType': DescribeInstanceTopologyResponseBodyInstanceTopologyTenants },
      zones: { 'type': 'array', 'itemType': DescribeInstanceTopologyResponseBodyInstanceTopologyZones },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesDataDiskAutoScaleConfig extends $tea.Model {
  autoScale?: boolean;
  maxDiskSize?: number;
  scaleStepInMerge?: number;
  scaleStepInNormal?: number;
  upperMergeThreshold?: number;
  upperScaleStrategy?: string;
  upperThreshold?: number;
  upperbound?: number;
  static names(): { [key: string]: string } {
    return {
      autoScale: 'AutoScale',
      maxDiskSize: 'MaxDiskSize',
      scaleStepInMerge: 'ScaleStepInMerge',
      scaleStepInNormal: 'ScaleStepInNormal',
      upperMergeThreshold: 'UpperMergeThreshold',
      upperScaleStrategy: 'UpperScaleStrategy',
      upperThreshold: 'UpperThreshold',
      upperbound: 'Upperbound',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScale: 'boolean',
      maxDiskSize: 'number',
      scaleStepInMerge: 'number',
      scaleStepInNormal: 'number',
      upperMergeThreshold: 'number',
      upperScaleStrategy: 'string',
      upperThreshold: 'number',
      upperbound: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesResourceCapacityUnit extends $tea.Model {
  maxCapacityUnit?: number;
  minCapacityUnit?: number;
  usedCapacityUnit?: number;
  static names(): { [key: string]: string } {
    return {
      maxCapacityUnit: 'MaxCapacityUnit',
      minCapacityUnit: 'MinCapacityUnit',
      usedCapacityUnit: 'UsedCapacityUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCapacityUnit: 'number',
      minCapacityUnit: 'number',
      usedCapacityUnit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesResourceCpu extends $tea.Model {
  originalTotalCpu?: number;
  totalCpu?: number;
  unitCpu?: number;
  usedCpu?: number;
  static names(): { [key: string]: string } {
    return {
      originalTotalCpu: 'OriginalTotalCpu',
      totalCpu: 'TotalCpu',
      unitCpu: 'UnitCpu',
      usedCpu: 'UsedCpu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalTotalCpu: 'number',
      totalCpu: 'number',
      unitCpu: 'number',
      usedCpu: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesResourceDiskSize extends $tea.Model {
  originalTotalDiskSize?: number;
  totalDiskSize?: number;
  unitDiskSize?: number;
  usedDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      originalTotalDiskSize: 'OriginalTotalDiskSize',
      totalDiskSize: 'TotalDiskSize',
      unitDiskSize: 'UnitDiskSize',
      usedDiskSize: 'UsedDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalTotalDiskSize: 'number',
      totalDiskSize: 'number',
      unitDiskSize: 'number',
      usedDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesResourceMemory extends $tea.Model {
  originalTotalMemory?: number;
  totalMemory?: number;
  unitMemory?: number;
  usedMemory?: number;
  static names(): { [key: string]: string } {
    return {
      originalTotalMemory: 'OriginalTotalMemory',
      totalMemory: 'TotalMemory',
      unitMemory: 'UnitMemory',
      usedMemory: 'UsedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalTotalMemory: 'number',
      totalMemory: 'number',
      unitMemory: 'number',
      usedMemory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesResource extends $tea.Model {
  capacityUnit?: DescribeInstancesResponseBodyInstancesResourceCapacityUnit;
  cpu?: DescribeInstancesResponseBodyInstancesResourceCpu;
  diskSize?: DescribeInstancesResponseBodyInstancesResourceDiskSize;
  memory?: DescribeInstancesResponseBodyInstancesResourceMemory;
  unitCount?: number;
  static names(): { [key: string]: string } {
    return {
      capacityUnit: 'CapacityUnit',
      cpu: 'Cpu',
      diskSize: 'DiskSize',
      memory: 'Memory',
      unitCount: 'UnitCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityUnit: DescribeInstancesResponseBodyInstancesResourceCapacityUnit,
      cpu: DescribeInstancesResponseBodyInstancesResourceCpu,
      diskSize: DescribeInstancesResponseBodyInstancesResourceDiskSize,
      memory: DescribeInstancesResponseBodyInstancesResourceMemory,
      unitCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstances extends $tea.Model {
  availableZones?: string[];
  commodityCode?: string;
  cpu?: number;
  cpuArchitecture?: string;
  createTime?: string;
  dataDiskAutoScaleConfig?: DescribeInstancesResponseBodyInstancesDataDiskAutoScaleConfig;
  deployMode?: string;
  deployType?: string;
  diskSize?: string;
  diskType?: string;
  enableReadOnlyReplicaManagement?: boolean;
  enableUpgradeNodes?: boolean;
  expireSeconds?: number;
  expireTime?: string;
  inTempCapacityStatus?: boolean;
  instanceClass?: string;
  instanceId?: string;
  instanceName?: string;
  instanceRole?: string;
  instanceType?: string;
  maintainTime?: string;
  mem?: number;
  payType?: string;
  resource?: DescribeInstancesResponseBodyInstancesResource;
  resourceGroupId?: string;
  series?: string;
  specType?: string;
  state?: string;
  usedDiskSize?: number;
  version?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      availableZones: 'AvailableZones',
      commodityCode: 'CommodityCode',
      cpu: 'Cpu',
      cpuArchitecture: 'CpuArchitecture',
      createTime: 'CreateTime',
      dataDiskAutoScaleConfig: 'DataDiskAutoScaleConfig',
      deployMode: 'DeployMode',
      deployType: 'DeployType',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      enableReadOnlyReplicaManagement: 'EnableReadOnlyReplicaManagement',
      enableUpgradeNodes: 'EnableUpgradeNodes',
      expireSeconds: 'ExpireSeconds',
      expireTime: 'ExpireTime',
      inTempCapacityStatus: 'InTempCapacityStatus',
      instanceClass: 'InstanceClass',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceRole: 'InstanceRole',
      instanceType: 'InstanceType',
      maintainTime: 'MaintainTime',
      mem: 'Mem',
      payType: 'PayType',
      resource: 'Resource',
      resourceGroupId: 'ResourceGroupId',
      series: 'Series',
      specType: 'SpecType',
      state: 'State',
      usedDiskSize: 'UsedDiskSize',
      version: 'Version',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZones: { 'type': 'array', 'itemType': 'string' },
      commodityCode: 'string',
      cpu: 'number',
      cpuArchitecture: 'string',
      createTime: 'string',
      dataDiskAutoScaleConfig: DescribeInstancesResponseBodyInstancesDataDiskAutoScaleConfig,
      deployMode: 'string',
      deployType: 'string',
      diskSize: 'string',
      diskType: 'string',
      enableReadOnlyReplicaManagement: 'boolean',
      enableUpgradeNodes: 'boolean',
      expireSeconds: 'number',
      expireTime: 'string',
      inTempCapacityStatus: 'boolean',
      instanceClass: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceRole: 'string',
      instanceType: 'string',
      maintainTime: 'string',
      mem: 'number',
      payType: 'string',
      resource: DescribeInstancesResponseBodyInstancesResource,
      resourceGroupId: 'string',
      series: 'string',
      specType: 'string',
      state: 'string',
      usedDiskSize: 'number',
      version: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOasAnomalySQLListResponseBodyDataSqlList extends $tea.Model {
  avgCpuTime?: number;
  avgDbTime?: number;
  avgElapsedTime?: number;
  avgGetPlanTime?: number;
  avgLogicalReads?: number;
  avgRetryCount?: number;
  cpuTime?: number;
  dbName?: string;
  diagTypes?: string[];
  diagnosis?: string;
  executions?: number;
  lastExecutedTime?: number;
  riskLevel?: string;
  sqlId?: string;
  sqlTextShort?: string;
  suggestion?: string;
  sumDbTime?: number;
  sumElapsedTime?: string;
  sumRetryCount?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      avgCpuTime: 'AvgCpuTime',
      avgDbTime: 'AvgDbTime',
      avgElapsedTime: 'AvgElapsedTime',
      avgGetPlanTime: 'AvgGetPlanTime',
      avgLogicalReads: 'AvgLogicalReads',
      avgRetryCount: 'AvgRetryCount',
      cpuTime: 'CpuTime',
      dbName: 'DbName',
      diagTypes: 'DiagTypes',
      diagnosis: 'Diagnosis',
      executions: 'Executions',
      lastExecutedTime: 'LastExecutedTime',
      riskLevel: 'RiskLevel',
      sqlId: 'SqlId',
      sqlTextShort: 'SqlTextShort',
      suggestion: 'Suggestion',
      sumDbTime: 'SumDbTime',
      sumElapsedTime: 'SumElapsedTime',
      sumRetryCount: 'SumRetryCount',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgCpuTime: 'number',
      avgDbTime: 'number',
      avgElapsedTime: 'number',
      avgGetPlanTime: 'number',
      avgLogicalReads: 'number',
      avgRetryCount: 'number',
      cpuTime: 'number',
      dbName: 'string',
      diagTypes: { 'type': 'array', 'itemType': 'string' },
      diagnosis: 'string',
      executions: 'number',
      lastExecutedTime: 'number',
      riskLevel: 'string',
      sqlId: 'string',
      sqlTextShort: 'string',
      suggestion: 'string',
      sumDbTime: 'number',
      sumElapsedTime: 'string',
      sumRetryCount: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOasAnomalySQLListResponseBodyData extends $tea.Model {
  avgCpuTime?: number;
  avgDbTime?: number;
  avgElapsedTime?: number;
  avgGetPlanTime?: number;
  avgLogicalReads?: number;
  avgRetryCount?: number;
  cpuTime?: number;
  dbName?: string;
  diagTypes?: string[];
  diagnosis?: string;
  dynamicSql?: boolean;
  executions?: number;
  lastExecutedTime?: number;
  riskLevel?: string;
  sqlId?: string;
  sqlList?: DescribeOasAnomalySQLListResponseBodyDataSqlList[];
  sqlTextShort?: string;
  suggestion?: string;
  sumDbTime?: number;
  sumElapsedTime?: string;
  sumRetryCount?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      avgCpuTime: 'AvgCpuTime',
      avgDbTime: 'AvgDbTime',
      avgElapsedTime: 'AvgElapsedTime',
      avgGetPlanTime: 'AvgGetPlanTime',
      avgLogicalReads: 'AvgLogicalReads',
      avgRetryCount: 'AvgRetryCount',
      cpuTime: 'CpuTime',
      dbName: 'DbName',
      diagTypes: 'DiagTypes',
      diagnosis: 'Diagnosis',
      dynamicSql: 'DynamicSql',
      executions: 'Executions',
      lastExecutedTime: 'LastExecutedTime',
      riskLevel: 'RiskLevel',
      sqlId: 'SqlId',
      sqlList: 'SqlList',
      sqlTextShort: 'SqlTextShort',
      suggestion: 'Suggestion',
      sumDbTime: 'SumDbTime',
      sumElapsedTime: 'SumElapsedTime',
      sumRetryCount: 'SumRetryCount',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgCpuTime: 'number',
      avgDbTime: 'number',
      avgElapsedTime: 'number',
      avgGetPlanTime: 'number',
      avgLogicalReads: 'number',
      avgRetryCount: 'number',
      cpuTime: 'number',
      dbName: 'string',
      diagTypes: { 'type': 'array', 'itemType': 'string' },
      diagnosis: 'string',
      dynamicSql: 'boolean',
      executions: 'number',
      lastExecutedTime: 'number',
      riskLevel: 'string',
      sqlId: 'string',
      sqlList: { 'type': 'array', 'itemType': DescribeOasAnomalySQLListResponseBodyDataSqlList },
      sqlTextShort: 'string',
      suggestion: 'string',
      sumDbTime: 'number',
      sumElapsedTime: 'string',
      sumRetryCount: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOasSQLDetailsResponseBodyData extends $tea.Model {
  dbName?: string;
  fulltext?: string;
  statement?: string;
  tables?: string[];
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      fulltext: 'Fulltext',
      statement: 'Statement',
      tables: 'Tables',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      fulltext: 'string',
      statement: 'string',
      tables: { 'type': 'array', 'itemType': 'string' },
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOasSQLHistoryListResponseBodyData extends $tea.Model {
  avgAffectedRows?: number;
  avgApplicationWaitTime?: number;
  avgBlockCacheHit?: number;
  avgBlockIndexCacheHit?: number;
  avgBloomFilterCacheHit?: number;
  avgConcurrencyWaitTime?: number;
  avgCpuTime?: number;
  avgDbTime?: number;
  avgDecodeTime?: number;
  avgDiskReads?: number;
  avgElapsedTime?: number;
  avgExecuteTime?: number;
  avgExecutorRpcCount?: number;
  avgExpectedWorkerCount?: number;
  avgGetPlanTime?: number;
  avgLogicalReads?: number;
  avgMemstoreReadRows?: number;
  avgNetTime?: number;
  avgNetWaitTime?: number;
  avgPartitionCount?: number;
  avgQueueTime?: number;
  avgReturnRows?: number;
  avgRowCacheHit?: number;
  avgRpcCount?: number;
  avgScheduleTime?: number;
  avgSsstoreReadRows?: number;
  avgUsedWorkerCount?: number;
  avgUserIoWaitTime?: number;
  avgWaitCount?: number;
  avgWaitTime?: number;
  dbName?: string;
  distPlanPercentage?: number;
  execPs?: number;
  executions?: number;
  failCount?: number;
  failPercentage?: number;
  localPlanPercentage?: number;
  maxAffectedRows?: number;
  maxApplicationWaitTime?: number;
  maxConcurrencyWaitTime?: number;
  maxCpuTime?: number;
  maxDiskReads?: number;
  maxElapsedTime?: number;
  maxReturnRows?: number;
  maxUserIoWaitTime?: number;
  maxWaitTime?: number;
  missPlanPercentage?: number;
  missPlans?: number;
  remotePlanPercentage?: number;
  remotePlans?: number;
  retCode4012Count?: number;
  retCode4013Count?: number;
  retCode5001Count?: number;
  retCode5024Count?: number;
  retCode5167Count?: number;
  retCode5217Count?: number;
  retCode6002Count?: number;
  retryCount?: number;
  SQLId?: string;
  server?: string;
  strongConsistencyPercentage?: number;
  sumDbTime?: number;
  sumElapsedTime?: number;
  sumLogicalReads?: number;
  sumWaitTime?: number;
  tableScanPercentage?: number;
  timestamp?: string;
  userName?: string;
  weakConsistencyPercentage?: number;
  static names(): { [key: string]: string } {
    return {
      avgAffectedRows: 'AvgAffectedRows',
      avgApplicationWaitTime: 'AvgApplicationWaitTime',
      avgBlockCacheHit: 'AvgBlockCacheHit',
      avgBlockIndexCacheHit: 'AvgBlockIndexCacheHit',
      avgBloomFilterCacheHit: 'AvgBloomFilterCacheHit',
      avgConcurrencyWaitTime: 'AvgConcurrencyWaitTime',
      avgCpuTime: 'AvgCpuTime',
      avgDbTime: 'AvgDbTime',
      avgDecodeTime: 'AvgDecodeTime',
      avgDiskReads: 'AvgDiskReads',
      avgElapsedTime: 'AvgElapsedTime',
      avgExecuteTime: 'AvgExecuteTime',
      avgExecutorRpcCount: 'AvgExecutorRpcCount',
      avgExpectedWorkerCount: 'AvgExpectedWorkerCount',
      avgGetPlanTime: 'AvgGetPlanTime',
      avgLogicalReads: 'AvgLogicalReads',
      avgMemstoreReadRows: 'AvgMemstoreReadRows',
      avgNetTime: 'AvgNetTime',
      avgNetWaitTime: 'AvgNetWaitTime',
      avgPartitionCount: 'AvgPartitionCount',
      avgQueueTime: 'AvgQueueTime',
      avgReturnRows: 'AvgReturnRows',
      avgRowCacheHit: 'AvgRowCacheHit',
      avgRpcCount: 'AvgRpcCount',
      avgScheduleTime: 'AvgScheduleTime',
      avgSsstoreReadRows: 'AvgSsstoreReadRows',
      avgUsedWorkerCount: 'AvgUsedWorkerCount',
      avgUserIoWaitTime: 'AvgUserIoWaitTime',
      avgWaitCount: 'AvgWaitCount',
      avgWaitTime: 'AvgWaitTime',
      dbName: 'DbName',
      distPlanPercentage: 'DistPlanPercentage',
      execPs: 'ExecPs',
      executions: 'Executions',
      failCount: 'FailCount',
      failPercentage: 'FailPercentage',
      localPlanPercentage: 'LocalPlanPercentage',
      maxAffectedRows: 'MaxAffectedRows',
      maxApplicationWaitTime: 'MaxApplicationWaitTime',
      maxConcurrencyWaitTime: 'MaxConcurrencyWaitTime',
      maxCpuTime: 'MaxCpuTime',
      maxDiskReads: 'MaxDiskReads',
      maxElapsedTime: 'MaxElapsedTime',
      maxReturnRows: 'MaxReturnRows',
      maxUserIoWaitTime: 'MaxUserIoWaitTime',
      maxWaitTime: 'MaxWaitTime',
      missPlanPercentage: 'MissPlanPercentage',
      missPlans: 'MissPlans',
      remotePlanPercentage: 'RemotePlanPercentage',
      remotePlans: 'RemotePlans',
      retCode4012Count: 'RetCode4012Count',
      retCode4013Count: 'RetCode4013Count',
      retCode5001Count: 'RetCode5001Count',
      retCode5024Count: 'RetCode5024Count',
      retCode5167Count: 'RetCode5167Count',
      retCode5217Count: 'RetCode5217Count',
      retCode6002Count: 'RetCode6002Count',
      retryCount: 'RetryCount',
      SQLId: 'SQLId',
      server: 'Server',
      strongConsistencyPercentage: 'StrongConsistencyPercentage',
      sumDbTime: 'SumDbTime',
      sumElapsedTime: 'SumElapsedTime',
      sumLogicalReads: 'SumLogicalReads',
      sumWaitTime: 'SumWaitTime',
      tableScanPercentage: 'TableScanPercentage',
      timestamp: 'Timestamp',
      userName: 'UserName',
      weakConsistencyPercentage: 'WeakConsistencyPercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgAffectedRows: 'number',
      avgApplicationWaitTime: 'number',
      avgBlockCacheHit: 'number',
      avgBlockIndexCacheHit: 'number',
      avgBloomFilterCacheHit: 'number',
      avgConcurrencyWaitTime: 'number',
      avgCpuTime: 'number',
      avgDbTime: 'number',
      avgDecodeTime: 'number',
      avgDiskReads: 'number',
      avgElapsedTime: 'number',
      avgExecuteTime: 'number',
      avgExecutorRpcCount: 'number',
      avgExpectedWorkerCount: 'number',
      avgGetPlanTime: 'number',
      avgLogicalReads: 'number',
      avgMemstoreReadRows: 'number',
      avgNetTime: 'number',
      avgNetWaitTime: 'number',
      avgPartitionCount: 'number',
      avgQueueTime: 'number',
      avgReturnRows: 'number',
      avgRowCacheHit: 'number',
      avgRpcCount: 'number',
      avgScheduleTime: 'number',
      avgSsstoreReadRows: 'number',
      avgUsedWorkerCount: 'number',
      avgUserIoWaitTime: 'number',
      avgWaitCount: 'number',
      avgWaitTime: 'number',
      dbName: 'string',
      distPlanPercentage: 'number',
      execPs: 'number',
      executions: 'number',
      failCount: 'number',
      failPercentage: 'number',
      localPlanPercentage: 'number',
      maxAffectedRows: 'number',
      maxApplicationWaitTime: 'number',
      maxConcurrencyWaitTime: 'number',
      maxCpuTime: 'number',
      maxDiskReads: 'number',
      maxElapsedTime: 'number',
      maxReturnRows: 'number',
      maxUserIoWaitTime: 'number',
      maxWaitTime: 'number',
      missPlanPercentage: 'number',
      missPlans: 'number',
      remotePlanPercentage: 'number',
      remotePlans: 'number',
      retCode4012Count: 'number',
      retCode4013Count: 'number',
      retCode5001Count: 'number',
      retCode5024Count: 'number',
      retCode5167Count: 'number',
      retCode5217Count: 'number',
      retCode6002Count: 'number',
      retryCount: 'number',
      SQLId: 'string',
      server: 'string',
      strongConsistencyPercentage: 'number',
      sumDbTime: 'number',
      sumElapsedTime: 'number',
      sumLogicalReads: 'number',
      sumWaitTime: 'number',
      tableScanPercentage: 'number',
      timestamp: 'string',
      userName: 'string',
      weakConsistencyPercentage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOasSQLPlansResponseBodyDataPlanExplain extends $tea.Model {
  planJsonString?: string;
  static names(): { [key: string]: string } {
    return {
      planJsonString: 'PlanJsonString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planJsonString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOasSQLPlansResponseBodyDataPlans extends $tea.Model {
  avgApplicationWaitTime?: number;
  avgBufferGets?: number;
  avgConcurrencyWaitTime?: number;
  avgCpuTime?: number;
  avgDiskReads?: number;
  avgDiskWrites?: number;
  avgElapsedTime?: number;
  avgRowProcessed?: number;
  avgUserIoWaitTime?: number;
  collectTimeUs?: number;
  delayedLargeQueryPercentage?: number;
  execPs?: number;
  executions?: number;
  firstLoadTime?: string;
  firstLoadTimeUs?: number;
  hitDiagnosis?: boolean;
  hitPercentage?: number;
  largeQueryPercentage?: number;
  mergedVersion?: number;
  obDbId?: number;
  obServerId?: number;
  outlineData?: string;
  outlineId?: number;
  planHash?: string;
  planId?: number;
  planSize?: number;
  planType?: string;
  planUnionHash?: string;
  schemaVersion?: number;
  server?: string;
  serverId?: number;
  sqlId?: string;
  tableScan?: boolean;
  timeoutPercentage?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      avgApplicationWaitTime: 'AvgApplicationWaitTime',
      avgBufferGets: 'AvgBufferGets',
      avgConcurrencyWaitTime: 'AvgConcurrencyWaitTime',
      avgCpuTime: 'AvgCpuTime',
      avgDiskReads: 'AvgDiskReads',
      avgDiskWrites: 'AvgDiskWrites',
      avgElapsedTime: 'AvgElapsedTime',
      avgRowProcessed: 'AvgRowProcessed',
      avgUserIoWaitTime: 'AvgUserIoWaitTime',
      collectTimeUs: 'CollectTimeUs',
      delayedLargeQueryPercentage: 'DelayedLargeQueryPercentage',
      execPs: 'ExecPs',
      executions: 'Executions',
      firstLoadTime: 'FirstLoadTime',
      firstLoadTimeUs: 'FirstLoadTimeUs',
      hitDiagnosis: 'HitDiagnosis',
      hitPercentage: 'HitPercentage',
      largeQueryPercentage: 'LargeQueryPercentage',
      mergedVersion: 'MergedVersion',
      obDbId: 'ObDbId',
      obServerId: 'ObServerId',
      outlineData: 'OutlineData',
      outlineId: 'OutlineId',
      planHash: 'PlanHash',
      planId: 'PlanId',
      planSize: 'PlanSize',
      planType: 'PlanType',
      planUnionHash: 'PlanUnionHash',
      schemaVersion: 'SchemaVersion',
      server: 'Server',
      serverId: 'ServerId',
      sqlId: 'SqlId',
      tableScan: 'TableScan',
      timeoutPercentage: 'TimeoutPercentage',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgApplicationWaitTime: 'number',
      avgBufferGets: 'number',
      avgConcurrencyWaitTime: 'number',
      avgCpuTime: 'number',
      avgDiskReads: 'number',
      avgDiskWrites: 'number',
      avgElapsedTime: 'number',
      avgRowProcessed: 'number',
      avgUserIoWaitTime: 'number',
      collectTimeUs: 'number',
      delayedLargeQueryPercentage: 'number',
      execPs: 'number',
      executions: 'number',
      firstLoadTime: 'string',
      firstLoadTimeUs: 'number',
      hitDiagnosis: 'boolean',
      hitPercentage: 'number',
      largeQueryPercentage: 'number',
      mergedVersion: 'number',
      obDbId: 'number',
      obServerId: 'number',
      outlineData: 'string',
      outlineId: 'number',
      planHash: 'string',
      planId: 'number',
      planSize: 'number',
      planType: 'string',
      planUnionHash: 'string',
      schemaVersion: 'number',
      server: 'string',
      serverId: 'number',
      sqlId: 'string',
      tableScan: 'boolean',
      timeoutPercentage: 'number',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOasSQLPlansResponseBodyData extends $tea.Model {
  avgCpuTime?: number;
  bounded?: boolean;
  executions?: number;
  firstLoadTime?: string;
  hitDiagnosis?: boolean;
  hitPercentage?: number;
  mergedVersion?: number;
  planExplain?: DescribeOasSQLPlansResponseBodyDataPlanExplain;
  planHash?: string;
  planType?: string;
  planUnionHash?: string;
  plans?: DescribeOasSQLPlansResponseBodyDataPlans[];
  querySql?: string;
  static names(): { [key: string]: string } {
    return {
      avgCpuTime: 'AvgCpuTime',
      bounded: 'Bounded',
      executions: 'Executions',
      firstLoadTime: 'FirstLoadTime',
      hitDiagnosis: 'HitDiagnosis',
      hitPercentage: 'HitPercentage',
      mergedVersion: 'MergedVersion',
      planExplain: 'PlanExplain',
      planHash: 'PlanHash',
      planType: 'PlanType',
      planUnionHash: 'PlanUnionHash',
      plans: 'Plans',
      querySql: 'QuerySql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgCpuTime: 'number',
      bounded: 'boolean',
      executions: 'number',
      firstLoadTime: 'string',
      hitDiagnosis: 'boolean',
      hitPercentage: 'number',
      mergedVersion: 'number',
      planExplain: DescribeOasSQLPlansResponseBodyDataPlanExplain,
      planHash: 'string',
      planType: 'string',
      planUnionHash: 'string',
      plans: { 'type': 'array', 'itemType': DescribeOasSQLPlansResponseBodyDataPlans },
      querySql: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOasSlowSQLListResponseBodyDataSqlList extends $tea.Model {
  avgAffectedRows?: number;
  avgApplicationWaitTime?: number;
  avgBlockCacheHit?: number;
  avgBlockIndexCacheHit?: number;
  avgBloomFilterCacheHit?: number;
  avgConcurrencyWaitTime?: number;
  avgCpuTime?: number;
  avgDbTime?: number;
  avgDecodeTime?: number;
  avgDiskReads?: number;
  avgElapsedTime?: number;
  avgExecuteTime?: number;
  avgExecutorRpcCount?: number;
  avgExpectedWorkerCount?: number;
  avgGetPlanTime?: number;
  avgLogicalReads?: number;
  avgMemstoreReadRows?: number;
  avgNetTime?: number;
  avgNetWaitTime?: number;
  avgPartitionCount?: number;
  avgQueueTime?: number;
  avgReturnRows?: number;
  avgRowCacheHit?: number;
  avgRpcCount?: number;
  avgScheduleTime?: number;
  avgSsstoreReadRows?: number;
  avgUsedWorkerCount?: number;
  avgUserIoWaitTime?: number;
  avgWaitCount?: number;
  avgWaitTime?: number;
  clientIp?: string;
  dbName?: string;
  distPlanPercentage?: number;
  execPs?: number;
  executions?: number;
  failCount?: number;
  failPercentage?: number;
  inner?: boolean;
  localPlanPercentage?: number;
  maxAffectedRows?: number;
  maxApplicationWaitTime?: number;
  maxConcurrencyWaitTime?: number;
  maxCpuTime?: number;
  maxDiskReads?: number;
  maxElapsedTime?: number;
  maxReturnRows?: number;
  maxUserIoWaitTime?: number;
  maxWaitTime?: number;
  missPlanPercentage?: number;
  missPlans?: number;
  remotePlanPercentage?: number;
  remotePlans?: number;
  retCode4012Count?: number;
  retCode4013Count?: number;
  retCode5001Count?: number;
  retCode5024Count?: number;
  retCode5167Count?: number;
  retCode5217Count?: number;
  retCode6002Count?: number;
  retryCount?: number;
  rpcCount?: number;
  server?: string;
  serverIp?: string;
  serverPort?: number;
  sqlId?: string;
  sqlTextShort?: string;
  sqlType?: string;
  strongConsistencyPercentage?: number;
  sumDbTime?: number;
  sumElapsedTime?: number;
  sumLogicalReads?: number;
  sumWaitTime?: number;
  tableScanPercentage?: number;
  totalWaitTime?: number;
  userName?: string;
  waitEvent?: string;
  weakConsistencyPercentage?: number;
  static names(): { [key: string]: string } {
    return {
      avgAffectedRows: 'AvgAffectedRows',
      avgApplicationWaitTime: 'AvgApplicationWaitTime',
      avgBlockCacheHit: 'AvgBlockCacheHit',
      avgBlockIndexCacheHit: 'AvgBlockIndexCacheHit',
      avgBloomFilterCacheHit: 'AvgBloomFilterCacheHit',
      avgConcurrencyWaitTime: 'AvgConcurrencyWaitTime',
      avgCpuTime: 'AvgCpuTime',
      avgDbTime: 'AvgDbTime',
      avgDecodeTime: 'AvgDecodeTime',
      avgDiskReads: 'AvgDiskReads',
      avgElapsedTime: 'AvgElapsedTime',
      avgExecuteTime: 'AvgExecuteTime',
      avgExecutorRpcCount: 'AvgExecutorRpcCount',
      avgExpectedWorkerCount: 'AvgExpectedWorkerCount',
      avgGetPlanTime: 'AvgGetPlanTime',
      avgLogicalReads: 'AvgLogicalReads',
      avgMemstoreReadRows: 'AvgMemstoreReadRows',
      avgNetTime: 'AvgNetTime',
      avgNetWaitTime: 'AvgNetWaitTime',
      avgPartitionCount: 'AvgPartitionCount',
      avgQueueTime: 'AvgQueueTime',
      avgReturnRows: 'AvgReturnRows',
      avgRowCacheHit: 'AvgRowCacheHit',
      avgRpcCount: 'AvgRpcCount',
      avgScheduleTime: 'AvgScheduleTime',
      avgSsstoreReadRows: 'AvgSsstoreReadRows',
      avgUsedWorkerCount: 'AvgUsedWorkerCount',
      avgUserIoWaitTime: 'AvgUserIoWaitTime',
      avgWaitCount: 'AvgWaitCount',
      avgWaitTime: 'AvgWaitTime',
      clientIp: 'ClientIp',
      dbName: 'DbName',
      distPlanPercentage: 'DistPlanPercentage',
      execPs: 'ExecPs',
      executions: 'Executions',
      failCount: 'FailCount',
      failPercentage: 'FailPercentage',
      inner: 'Inner',
      localPlanPercentage: 'LocalPlanPercentage',
      maxAffectedRows: 'MaxAffectedRows',
      maxApplicationWaitTime: 'MaxApplicationWaitTime',
      maxConcurrencyWaitTime: 'MaxConcurrencyWaitTime',
      maxCpuTime: 'MaxCpuTime',
      maxDiskReads: 'MaxDiskReads',
      maxElapsedTime: 'MaxElapsedTime',
      maxReturnRows: 'MaxReturnRows',
      maxUserIoWaitTime: 'MaxUserIoWaitTime',
      maxWaitTime: 'MaxWaitTime',
      missPlanPercentage: 'MissPlanPercentage',
      missPlans: 'MissPlans',
      remotePlanPercentage: 'RemotePlanPercentage',
      remotePlans: 'RemotePlans',
      retCode4012Count: 'RetCode4012Count',
      retCode4013Count: 'RetCode4013Count',
      retCode5001Count: 'RetCode5001Count',
      retCode5024Count: 'RetCode5024Count',
      retCode5167Count: 'RetCode5167Count',
      retCode5217Count: 'RetCode5217Count',
      retCode6002Count: 'RetCode6002Count',
      retryCount: 'RetryCount',
      rpcCount: 'RpcCount',
      server: 'Server',
      serverIp: 'ServerIp',
      serverPort: 'ServerPort',
      sqlId: 'SqlId',
      sqlTextShort: 'SqlTextShort',
      sqlType: 'SqlType',
      strongConsistencyPercentage: 'StrongConsistencyPercentage',
      sumDbTime: 'SumDbTime',
      sumElapsedTime: 'SumElapsedTime',
      sumLogicalReads: 'SumLogicalReads',
      sumWaitTime: 'SumWaitTime',
      tableScanPercentage: 'TableScanPercentage',
      totalWaitTime: 'TotalWaitTime',
      userName: 'UserName',
      waitEvent: 'WaitEvent',
      weakConsistencyPercentage: 'WeakConsistencyPercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgAffectedRows: 'number',
      avgApplicationWaitTime: 'number',
      avgBlockCacheHit: 'number',
      avgBlockIndexCacheHit: 'number',
      avgBloomFilterCacheHit: 'number',
      avgConcurrencyWaitTime: 'number',
      avgCpuTime: 'number',
      avgDbTime: 'number',
      avgDecodeTime: 'number',
      avgDiskReads: 'number',
      avgElapsedTime: 'number',
      avgExecuteTime: 'number',
      avgExecutorRpcCount: 'number',
      avgExpectedWorkerCount: 'number',
      avgGetPlanTime: 'number',
      avgLogicalReads: 'number',
      avgMemstoreReadRows: 'number',
      avgNetTime: 'number',
      avgNetWaitTime: 'number',
      avgPartitionCount: 'number',
      avgQueueTime: 'number',
      avgReturnRows: 'number',
      avgRowCacheHit: 'number',
      avgRpcCount: 'number',
      avgScheduleTime: 'number',
      avgSsstoreReadRows: 'number',
      avgUsedWorkerCount: 'number',
      avgUserIoWaitTime: 'number',
      avgWaitCount: 'number',
      avgWaitTime: 'number',
      clientIp: 'string',
      dbName: 'string',
      distPlanPercentage: 'number',
      execPs: 'number',
      executions: 'number',
      failCount: 'number',
      failPercentage: 'number',
      inner: 'boolean',
      localPlanPercentage: 'number',
      maxAffectedRows: 'number',
      maxApplicationWaitTime: 'number',
      maxConcurrencyWaitTime: 'number',
      maxCpuTime: 'number',
      maxDiskReads: 'number',
      maxElapsedTime: 'number',
      maxReturnRows: 'number',
      maxUserIoWaitTime: 'number',
      maxWaitTime: 'number',
      missPlanPercentage: 'number',
      missPlans: 'number',
      remotePlanPercentage: 'number',
      remotePlans: 'number',
      retCode4012Count: 'number',
      retCode4013Count: 'number',
      retCode5001Count: 'number',
      retCode5024Count: 'number',
      retCode5167Count: 'number',
      retCode5217Count: 'number',
      retCode6002Count: 'number',
      retryCount: 'number',
      rpcCount: 'number',
      server: 'string',
      serverIp: 'string',
      serverPort: 'number',
      sqlId: 'string',
      sqlTextShort: 'string',
      sqlType: 'string',
      strongConsistencyPercentage: 'number',
      sumDbTime: 'number',
      sumElapsedTime: 'number',
      sumLogicalReads: 'number',
      sumWaitTime: 'number',
      tableScanPercentage: 'number',
      totalWaitTime: 'number',
      userName: 'string',
      waitEvent: 'string',
      weakConsistencyPercentage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOasSlowSQLListResponseBodyData extends $tea.Model {
  avgAffectedRows?: number;
  avgApplicationWaitTime?: number;
  avgBlockCacheHit?: number;
  avgBlockIndexCacheHit?: number;
  avgBloomFilterCacheHit?: number;
  avgConcurrencyWaitTime?: number;
  avgCpuTime?: number;
  avgDbTime?: number;
  avgDecodeTime?: number;
  avgDiskReads?: number;
  avgElapsedTime?: number;
  avgExecuteTime?: number;
  avgExecutorRpcCount?: number;
  avgExpectedWorkerCount?: number;
  avgGetPlanTime?: number;
  avgLogicalReads?: number;
  avgMemstoreReadRows?: number;
  avgNetTime?: number;
  avgNetWaitTime?: number;
  avgPartitionCount?: number;
  avgQueueTime?: number;
  avgReturnRows?: number;
  avgRowCacheHit?: number;
  avgRpcCount?: number;
  avgScheduleTime?: number;
  avgSsstoreReadRows?: number;
  avgUsedWorkerCount?: number;
  avgUserIoWaitTime?: number;
  avgWaitCount?: number;
  avgWaitTime?: number;
  clientIp?: string;
  dbName?: string;
  distPlanPercentage?: number;
  dynamicSql?: boolean;
  execPs?: number;
  executions?: number;
  failCount?: number;
  failPercentage?: number;
  inner?: boolean;
  localPlanPercentage?: number;
  maxAffectedRows?: number;
  maxApplicationWaitTime?: number;
  maxConcurrencyWaitTime?: number;
  maxCpuTime?: number;
  maxDiskReads?: number;
  maxElapsedTime?: number;
  maxReturnRows?: number;
  maxUserIoWaitTime?: number;
  maxWaitTime?: number;
  missPlanPercentage?: number;
  missPlans?: number;
  remotePlanPercentage?: number;
  remotePlans?: number;
  retCode4012Count?: number;
  retCode4013Count?: number;
  retCode5001Count?: number;
  retCode5024Count?: number;
  retCode5167Count?: number;
  retCode5217Count?: number;
  retCode6002Count?: number;
  retryCount?: number;
  rpcCount?: number;
  server?: string;
  serverIp?: string;
  serverPort?: number;
  sqlId?: string;
  sqlList?: DescribeOasSlowSQLListResponseBodyDataSqlList[];
  sqlTextShort?: string;
  sqlType?: string;
  strongConsistencyPercentage?: number;
  sumDbTime?: number;
  sumElapsedTime?: number;
  sumLogicalReads?: number;
  sumWaitTime?: number;
  tableScanPercentage?: number;
  totalWaitTime?: number;
  userName?: string;
  waitEvent?: string;
  weakConsistencyPercentage?: number;
  static names(): { [key: string]: string } {
    return {
      avgAffectedRows: 'AvgAffectedRows',
      avgApplicationWaitTime: 'AvgApplicationWaitTime',
      avgBlockCacheHit: 'AvgBlockCacheHit',
      avgBlockIndexCacheHit: 'AvgBlockIndexCacheHit',
      avgBloomFilterCacheHit: 'AvgBloomFilterCacheHit',
      avgConcurrencyWaitTime: 'AvgConcurrencyWaitTime',
      avgCpuTime: 'AvgCpuTime',
      avgDbTime: 'AvgDbTime',
      avgDecodeTime: 'AvgDecodeTime',
      avgDiskReads: 'AvgDiskReads',
      avgElapsedTime: 'AvgElapsedTime',
      avgExecuteTime: 'AvgExecuteTime',
      avgExecutorRpcCount: 'AvgExecutorRpcCount',
      avgExpectedWorkerCount: 'AvgExpectedWorkerCount',
      avgGetPlanTime: 'AvgGetPlanTime',
      avgLogicalReads: 'AvgLogicalReads',
      avgMemstoreReadRows: 'AvgMemstoreReadRows',
      avgNetTime: 'AvgNetTime',
      avgNetWaitTime: 'AvgNetWaitTime',
      avgPartitionCount: 'AvgPartitionCount',
      avgQueueTime: 'AvgQueueTime',
      avgReturnRows: 'AvgReturnRows',
      avgRowCacheHit: 'AvgRowCacheHit',
      avgRpcCount: 'AvgRpcCount',
      avgScheduleTime: 'AvgScheduleTime',
      avgSsstoreReadRows: 'AvgSsstoreReadRows',
      avgUsedWorkerCount: 'AvgUsedWorkerCount',
      avgUserIoWaitTime: 'AvgUserIoWaitTime',
      avgWaitCount: 'AvgWaitCount',
      avgWaitTime: 'AvgWaitTime',
      clientIp: 'ClientIp',
      dbName: 'DbName',
      distPlanPercentage: 'DistPlanPercentage',
      dynamicSql: 'DynamicSql',
      execPs: 'ExecPs',
      executions: 'Executions',
      failCount: 'FailCount',
      failPercentage: 'FailPercentage',
      inner: 'Inner',
      localPlanPercentage: 'LocalPlanPercentage',
      maxAffectedRows: 'MaxAffectedRows',
      maxApplicationWaitTime: 'MaxApplicationWaitTime',
      maxConcurrencyWaitTime: 'MaxConcurrencyWaitTime',
      maxCpuTime: 'MaxCpuTime',
      maxDiskReads: 'MaxDiskReads',
      maxElapsedTime: 'MaxElapsedTime',
      maxReturnRows: 'MaxReturnRows',
      maxUserIoWaitTime: 'MaxUserIoWaitTime',
      maxWaitTime: 'MaxWaitTime',
      missPlanPercentage: 'MissPlanPercentage',
      missPlans: 'MissPlans',
      remotePlanPercentage: 'RemotePlanPercentage',
      remotePlans: 'RemotePlans',
      retCode4012Count: 'RetCode4012Count',
      retCode4013Count: 'RetCode4013Count',
      retCode5001Count: 'RetCode5001Count',
      retCode5024Count: 'RetCode5024Count',
      retCode5167Count: 'RetCode5167Count',
      retCode5217Count: 'RetCode5217Count',
      retCode6002Count: 'RetCode6002Count',
      retryCount: 'RetryCount',
      rpcCount: 'RpcCount',
      server: 'Server',
      serverIp: 'ServerIp',
      serverPort: 'ServerPort',
      sqlId: 'SqlId',
      sqlList: 'SqlList',
      sqlTextShort: 'SqlTextShort',
      sqlType: 'SqlType',
      strongConsistencyPercentage: 'StrongConsistencyPercentage',
      sumDbTime: 'SumDbTime',
      sumElapsedTime: 'SumElapsedTime',
      sumLogicalReads: 'SumLogicalReads',
      sumWaitTime: 'SumWaitTime',
      tableScanPercentage: 'TableScanPercentage',
      totalWaitTime: 'TotalWaitTime',
      userName: 'UserName',
      waitEvent: 'WaitEvent',
      weakConsistencyPercentage: 'WeakConsistencyPercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgAffectedRows: 'number',
      avgApplicationWaitTime: 'number',
      avgBlockCacheHit: 'number',
      avgBlockIndexCacheHit: 'number',
      avgBloomFilterCacheHit: 'number',
      avgConcurrencyWaitTime: 'number',
      avgCpuTime: 'number',
      avgDbTime: 'number',
      avgDecodeTime: 'number',
      avgDiskReads: 'number',
      avgElapsedTime: 'number',
      avgExecuteTime: 'number',
      avgExecutorRpcCount: 'number',
      avgExpectedWorkerCount: 'number',
      avgGetPlanTime: 'number',
      avgLogicalReads: 'number',
      avgMemstoreReadRows: 'number',
      avgNetTime: 'number',
      avgNetWaitTime: 'number',
      avgPartitionCount: 'number',
      avgQueueTime: 'number',
      avgReturnRows: 'number',
      avgRowCacheHit: 'number',
      avgRpcCount: 'number',
      avgScheduleTime: 'number',
      avgSsstoreReadRows: 'number',
      avgUsedWorkerCount: 'number',
      avgUserIoWaitTime: 'number',
      avgWaitCount: 'number',
      avgWaitTime: 'number',
      clientIp: 'string',
      dbName: 'string',
      distPlanPercentage: 'number',
      dynamicSql: 'boolean',
      execPs: 'number',
      executions: 'number',
      failCount: 'number',
      failPercentage: 'number',
      inner: 'boolean',
      localPlanPercentage: 'number',
      maxAffectedRows: 'number',
      maxApplicationWaitTime: 'number',
      maxConcurrencyWaitTime: 'number',
      maxCpuTime: 'number',
      maxDiskReads: 'number',
      maxElapsedTime: 'number',
      maxReturnRows: 'number',
      maxUserIoWaitTime: 'number',
      maxWaitTime: 'number',
      missPlanPercentage: 'number',
      missPlans: 'number',
      remotePlanPercentage: 'number',
      remotePlans: 'number',
      retCode4012Count: 'number',
      retCode4013Count: 'number',
      retCode5001Count: 'number',
      retCode5024Count: 'number',
      retCode5167Count: 'number',
      retCode5217Count: 'number',
      retCode6002Count: 'number',
      retryCount: 'number',
      rpcCount: 'number',
      server: 'string',
      serverIp: 'string',
      serverPort: 'number',
      sqlId: 'string',
      sqlList: { 'type': 'array', 'itemType': DescribeOasSlowSQLListResponseBodyDataSqlList },
      sqlTextShort: 'string',
      sqlType: 'string',
      strongConsistencyPercentage: 'number',
      sumDbTime: 'number',
      sumElapsedTime: 'number',
      sumLogicalReads: 'number',
      sumWaitTime: 'number',
      tableScanPercentage: 'number',
      totalWaitTime: 'number',
      userName: 'string',
      waitEvent: 'string',
      weakConsistencyPercentage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOasTopSQLListResponseBodyDataSqlList extends $tea.Model {
  avgAffectedRows?: number;
  avgApplicationWaitTime?: number;
  avgBlockCacheHit?: number;
  avgBlockIndexCacheHit?: number;
  avgBloomFilterCacheHit?: number;
  avgConcurrencyWaitTime?: number;
  avgCpuTime?: number;
  avgDbTime?: number;
  avgDecodeTime?: number;
  avgDiskReads?: number;
  avgElapsedTime?: number;
  avgExecuteTime?: number;
  avgExecutorRpcCount?: number;
  avgExpectedWorkerCount?: number;
  avgGetPlanTime?: number;
  avgLogicalReads?: number;
  avgMemstoreReadRows?: number;
  avgNetTime?: number;
  avgNetWaitTime?: number;
  avgPartitionCount?: number;
  avgQueueTime?: number;
  avgReturnRows?: number;
  avgRowCacheHit?: number;
  avgRpcCount?: number;
  avgScheduleTime?: number;
  avgSsstoreReadRows?: number;
  avgUsedWorkerCount?: number;
  avgUserIoWaitTime?: number;
  avgWaitCount?: number;
  avgWaitTime?: number;
  clientIp?: string;
  cpuPercentage?: number;
  dbName?: string;
  distPlanPercentage?: number;
  execPs?: number;
  executions?: number;
  failCount?: number;
  failPercentage?: number;
  inner?: boolean;
  localPlanPercentage?: number;
  maxAffectedRows?: number;
  maxApplicationWaitTime?: number;
  maxConcurrencyWaitTime?: number;
  maxCpuTime?: number;
  maxDiskReads?: number;
  maxElapsedTime?: number;
  maxReturnRows?: number;
  maxUserIoWaitTime?: number;
  maxWaitTime?: number;
  missPlanPercentage?: number;
  missPlans?: number;
  remotePlanPercentage?: number;
  remotePlans?: number;
  retCode4012Count?: number;
  retCode4013Count?: number;
  retCode5001Count?: number;
  retCode5024Count?: number;
  retCode5167Count?: number;
  retCode5217Count?: number;
  retCode6002Count?: number;
  retryCount?: number;
  rpcCount?: number;
  server?: string;
  serverIp?: string;
  serverPort?: number;
  sqlId?: string;
  sqlTextShort?: string;
  sqlType?: string;
  strongConsistencyPercentage?: number;
  sumDbTime?: number;
  sumElapsedTime?: number;
  sumLogicalReads?: number;
  sumWaitTime?: number;
  tableScanPercentage?: number;
  totalWaitTime?: number;
  userName?: string;
  waitEvent?: string;
  weakConsistencyPercentage?: number;
  static names(): { [key: string]: string } {
    return {
      avgAffectedRows: 'AvgAffectedRows',
      avgApplicationWaitTime: 'AvgApplicationWaitTime',
      avgBlockCacheHit: 'AvgBlockCacheHit',
      avgBlockIndexCacheHit: 'AvgBlockIndexCacheHit',
      avgBloomFilterCacheHit: 'AvgBloomFilterCacheHit',
      avgConcurrencyWaitTime: 'AvgConcurrencyWaitTime',
      avgCpuTime: 'AvgCpuTime',
      avgDbTime: 'AvgDbTime',
      avgDecodeTime: 'AvgDecodeTime',
      avgDiskReads: 'AvgDiskReads',
      avgElapsedTime: 'AvgElapsedTime',
      avgExecuteTime: 'AvgExecuteTime',
      avgExecutorRpcCount: 'AvgExecutorRpcCount',
      avgExpectedWorkerCount: 'AvgExpectedWorkerCount',
      avgGetPlanTime: 'AvgGetPlanTime',
      avgLogicalReads: 'AvgLogicalReads',
      avgMemstoreReadRows: 'AvgMemstoreReadRows',
      avgNetTime: 'AvgNetTime',
      avgNetWaitTime: 'AvgNetWaitTime',
      avgPartitionCount: 'AvgPartitionCount',
      avgQueueTime: 'AvgQueueTime',
      avgReturnRows: 'AvgReturnRows',
      avgRowCacheHit: 'AvgRowCacheHit',
      avgRpcCount: 'AvgRpcCount',
      avgScheduleTime: 'AvgScheduleTime',
      avgSsstoreReadRows: 'AvgSsstoreReadRows',
      avgUsedWorkerCount: 'AvgUsedWorkerCount',
      avgUserIoWaitTime: 'AvgUserIoWaitTime',
      avgWaitCount: 'AvgWaitCount',
      avgWaitTime: 'AvgWaitTime',
      clientIp: 'ClientIp',
      cpuPercentage: 'CpuPercentage',
      dbName: 'DbName',
      distPlanPercentage: 'DistPlanPercentage',
      execPs: 'ExecPs',
      executions: 'Executions',
      failCount: 'FailCount',
      failPercentage: 'FailPercentage',
      inner: 'Inner',
      localPlanPercentage: 'LocalPlanPercentage',
      maxAffectedRows: 'MaxAffectedRows',
      maxApplicationWaitTime: 'MaxApplicationWaitTime',
      maxConcurrencyWaitTime: 'MaxConcurrencyWaitTime',
      maxCpuTime: 'MaxCpuTime',
      maxDiskReads: 'MaxDiskReads',
      maxElapsedTime: 'MaxElapsedTime',
      maxReturnRows: 'MaxReturnRows',
      maxUserIoWaitTime: 'MaxUserIoWaitTime',
      maxWaitTime: 'MaxWaitTime',
      missPlanPercentage: 'MissPlanPercentage',
      missPlans: 'MissPlans',
      remotePlanPercentage: 'RemotePlanPercentage',
      remotePlans: 'RemotePlans',
      retCode4012Count: 'RetCode4012Count',
      retCode4013Count: 'RetCode4013Count',
      retCode5001Count: 'RetCode5001Count',
      retCode5024Count: 'RetCode5024Count',
      retCode5167Count: 'RetCode5167Count',
      retCode5217Count: 'RetCode5217Count',
      retCode6002Count: 'RetCode6002Count',
      retryCount: 'RetryCount',
      rpcCount: 'RpcCount',
      server: 'Server',
      serverIp: 'ServerIp',
      serverPort: 'ServerPort',
      sqlId: 'SqlId',
      sqlTextShort: 'SqlTextShort',
      sqlType: 'SqlType',
      strongConsistencyPercentage: 'StrongConsistencyPercentage',
      sumDbTime: 'SumDbTime',
      sumElapsedTime: 'SumElapsedTime',
      sumLogicalReads: 'SumLogicalReads',
      sumWaitTime: 'SumWaitTime',
      tableScanPercentage: 'TableScanPercentage',
      totalWaitTime: 'TotalWaitTime',
      userName: 'UserName',
      waitEvent: 'WaitEvent',
      weakConsistencyPercentage: 'WeakConsistencyPercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgAffectedRows: 'number',
      avgApplicationWaitTime: 'number',
      avgBlockCacheHit: 'number',
      avgBlockIndexCacheHit: 'number',
      avgBloomFilterCacheHit: 'number',
      avgConcurrencyWaitTime: 'number',
      avgCpuTime: 'number',
      avgDbTime: 'number',
      avgDecodeTime: 'number',
      avgDiskReads: 'number',
      avgElapsedTime: 'number',
      avgExecuteTime: 'number',
      avgExecutorRpcCount: 'number',
      avgExpectedWorkerCount: 'number',
      avgGetPlanTime: 'number',
      avgLogicalReads: 'number',
      avgMemstoreReadRows: 'number',
      avgNetTime: 'number',
      avgNetWaitTime: 'number',
      avgPartitionCount: 'number',
      avgQueueTime: 'number',
      avgReturnRows: 'number',
      avgRowCacheHit: 'number',
      avgRpcCount: 'number',
      avgScheduleTime: 'number',
      avgSsstoreReadRows: 'number',
      avgUsedWorkerCount: 'number',
      avgUserIoWaitTime: 'number',
      avgWaitCount: 'number',
      avgWaitTime: 'number',
      clientIp: 'string',
      cpuPercentage: 'number',
      dbName: 'string',
      distPlanPercentage: 'number',
      execPs: 'number',
      executions: 'number',
      failCount: 'number',
      failPercentage: 'number',
      inner: 'boolean',
      localPlanPercentage: 'number',
      maxAffectedRows: 'number',
      maxApplicationWaitTime: 'number',
      maxConcurrencyWaitTime: 'number',
      maxCpuTime: 'number',
      maxDiskReads: 'number',
      maxElapsedTime: 'number',
      maxReturnRows: 'number',
      maxUserIoWaitTime: 'number',
      maxWaitTime: 'number',
      missPlanPercentage: 'number',
      missPlans: 'number',
      remotePlanPercentage: 'number',
      remotePlans: 'number',
      retCode4012Count: 'number',
      retCode4013Count: 'number',
      retCode5001Count: 'number',
      retCode5024Count: 'number',
      retCode5167Count: 'number',
      retCode5217Count: 'number',
      retCode6002Count: 'number',
      retryCount: 'number',
      rpcCount: 'number',
      server: 'string',
      serverIp: 'string',
      serverPort: 'number',
      sqlId: 'string',
      sqlTextShort: 'string',
      sqlType: 'string',
      strongConsistencyPercentage: 'number',
      sumDbTime: 'number',
      sumElapsedTime: 'number',
      sumLogicalReads: 'number',
      sumWaitTime: 'number',
      tableScanPercentage: 'number',
      totalWaitTime: 'number',
      userName: 'string',
      waitEvent: 'string',
      weakConsistencyPercentage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOasTopSQLListResponseBodyData extends $tea.Model {
  avgAffectedRows?: number;
  avgApplicationWaitTime?: number;
  avgBlockCacheHit?: number;
  avgBlockIndexCacheHit?: number;
  avgBloomFilterCacheHit?: number;
  avgConcurrencyWaitTime?: number;
  avgCpuTime?: number;
  avgDbTime?: number;
  avgDecodeTime?: number;
  avgDiskReads?: number;
  avgElapsedTime?: number;
  avgExecuteTime?: number;
  avgExecutorRpcCount?: number;
  avgExpectedWorkerCount?: number;
  avgGetPlanTime?: number;
  avgLogicalReads?: number;
  avgMemstoreReadRows?: number;
  avgNetTime?: number;
  avgNetWaitTime?: number;
  avgPartitionCount?: number;
  avgQueueTime?: number;
  avgReturnRows?: number;
  avgRowCacheHit?: number;
  avgRpcCount?: number;
  avgScheduleTime?: number;
  avgSsstoreReadRows?: number;
  avgUsedWorkerCount?: number;
  avgUserIoWaitTime?: number;
  avgWaitCount?: number;
  avgWaitTime?: number;
  clientIp?: string;
  cpuPercentage?: number;
  dbName?: string;
  distPlanPercentage?: number;
  dynamicSql?: boolean;
  execPs?: number;
  executions?: number;
  failCount?: number;
  failPercentage?: number;
  inner?: boolean;
  lastFailCode?: number;
  localPlanPercentage?: number;
  maxAffectedRows?: number;
  maxApplicationWaitTime?: number;
  maxConcurrencyWaitTime?: number;
  maxCpuTime?: number;
  maxDiskReads?: number;
  maxElapsedTime?: number;
  maxReturnRows?: number;
  maxUserIoWaitTime?: number;
  maxWaitTime?: number;
  missPlanPercentage?: number;
  missPlans?: number;
  remotePlanPercentage?: number;
  remotePlans?: number;
  retCode4012Count?: number;
  retCode4013Count?: number;
  retCode5001Count?: number;
  retCode5024Count?: number;
  retCode5167Count?: number;
  retCode5217Count?: number;
  retCode6002Count?: number;
  retryCount?: number;
  rpcCount?: number;
  server?: string;
  serverIp?: string;
  serverPort?: number;
  sqlId?: string;
  sqlList?: DescribeOasTopSQLListResponseBodyDataSqlList[];
  sqlTextShort?: string;
  sqlType?: string;
  strongConsistencyPercentage?: number;
  sumDbTime?: number;
  sumElapsedTime?: number;
  sumLogicalReads?: number;
  sumWaitTime?: number;
  tableScanPercentage?: number;
  totalWaitTime?: number;
  userName?: string;
  waitEvent?: string;
  weakConsistencyPercentage?: number;
  static names(): { [key: string]: string } {
    return {
      avgAffectedRows: 'AvgAffectedRows',
      avgApplicationWaitTime: 'AvgApplicationWaitTime',
      avgBlockCacheHit: 'AvgBlockCacheHit',
      avgBlockIndexCacheHit: 'AvgBlockIndexCacheHit',
      avgBloomFilterCacheHit: 'AvgBloomFilterCacheHit',
      avgConcurrencyWaitTime: 'AvgConcurrencyWaitTime',
      avgCpuTime: 'AvgCpuTime',
      avgDbTime: 'AvgDbTime',
      avgDecodeTime: 'AvgDecodeTime',
      avgDiskReads: 'AvgDiskReads',
      avgElapsedTime: 'AvgElapsedTime',
      avgExecuteTime: 'AvgExecuteTime',
      avgExecutorRpcCount: 'AvgExecutorRpcCount',
      avgExpectedWorkerCount: 'AvgExpectedWorkerCount',
      avgGetPlanTime: 'AvgGetPlanTime',
      avgLogicalReads: 'AvgLogicalReads',
      avgMemstoreReadRows: 'AvgMemstoreReadRows',
      avgNetTime: 'AvgNetTime',
      avgNetWaitTime: 'AvgNetWaitTime',
      avgPartitionCount: 'AvgPartitionCount',
      avgQueueTime: 'AvgQueueTime',
      avgReturnRows: 'AvgReturnRows',
      avgRowCacheHit: 'AvgRowCacheHit',
      avgRpcCount: 'AvgRpcCount',
      avgScheduleTime: 'AvgScheduleTime',
      avgSsstoreReadRows: 'AvgSsstoreReadRows',
      avgUsedWorkerCount: 'AvgUsedWorkerCount',
      avgUserIoWaitTime: 'AvgUserIoWaitTime',
      avgWaitCount: 'AvgWaitCount',
      avgWaitTime: 'AvgWaitTime',
      clientIp: 'ClientIp',
      cpuPercentage: 'CpuPercentage',
      dbName: 'DbName',
      distPlanPercentage: 'DistPlanPercentage',
      dynamicSql: 'DynamicSql',
      execPs: 'ExecPs',
      executions: 'Executions',
      failCount: 'FailCount',
      failPercentage: 'FailPercentage',
      inner: 'Inner',
      lastFailCode: 'LastFailCode',
      localPlanPercentage: 'LocalPlanPercentage',
      maxAffectedRows: 'MaxAffectedRows',
      maxApplicationWaitTime: 'MaxApplicationWaitTime',
      maxConcurrencyWaitTime: 'MaxConcurrencyWaitTime',
      maxCpuTime: 'MaxCpuTime',
      maxDiskReads: 'MaxDiskReads',
      maxElapsedTime: 'MaxElapsedTime',
      maxReturnRows: 'MaxReturnRows',
      maxUserIoWaitTime: 'MaxUserIoWaitTime',
      maxWaitTime: 'MaxWaitTime',
      missPlanPercentage: 'MissPlanPercentage',
      missPlans: 'MissPlans',
      remotePlanPercentage: 'RemotePlanPercentage',
      remotePlans: 'RemotePlans',
      retCode4012Count: 'RetCode4012Count',
      retCode4013Count: 'RetCode4013Count',
      retCode5001Count: 'RetCode5001Count',
      retCode5024Count: 'RetCode5024Count',
      retCode5167Count: 'RetCode5167Count',
      retCode5217Count: 'RetCode5217Count',
      retCode6002Count: 'RetCode6002Count',
      retryCount: 'RetryCount',
      rpcCount: 'RpcCount',
      server: 'Server',
      serverIp: 'ServerIp',
      serverPort: 'ServerPort',
      sqlId: 'SqlId',
      sqlList: 'SqlList',
      sqlTextShort: 'SqlTextShort',
      sqlType: 'SqlType',
      strongConsistencyPercentage: 'StrongConsistencyPercentage',
      sumDbTime: 'SumDbTime',
      sumElapsedTime: 'SumElapsedTime',
      sumLogicalReads: 'SumLogicalReads',
      sumWaitTime: 'SumWaitTime',
      tableScanPercentage: 'TableScanPercentage',
      totalWaitTime: 'TotalWaitTime',
      userName: 'UserName',
      waitEvent: 'WaitEvent',
      weakConsistencyPercentage: 'WeakConsistencyPercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgAffectedRows: 'number',
      avgApplicationWaitTime: 'number',
      avgBlockCacheHit: 'number',
      avgBlockIndexCacheHit: 'number',
      avgBloomFilterCacheHit: 'number',
      avgConcurrencyWaitTime: 'number',
      avgCpuTime: 'number',
      avgDbTime: 'number',
      avgDecodeTime: 'number',
      avgDiskReads: 'number',
      avgElapsedTime: 'number',
      avgExecuteTime: 'number',
      avgExecutorRpcCount: 'number',
      avgExpectedWorkerCount: 'number',
      avgGetPlanTime: 'number',
      avgLogicalReads: 'number',
      avgMemstoreReadRows: 'number',
      avgNetTime: 'number',
      avgNetWaitTime: 'number',
      avgPartitionCount: 'number',
      avgQueueTime: 'number',
      avgReturnRows: 'number',
      avgRowCacheHit: 'number',
      avgRpcCount: 'number',
      avgScheduleTime: 'number',
      avgSsstoreReadRows: 'number',
      avgUsedWorkerCount: 'number',
      avgUserIoWaitTime: 'number',
      avgWaitCount: 'number',
      avgWaitTime: 'number',
      clientIp: 'string',
      cpuPercentage: 'number',
      dbName: 'string',
      distPlanPercentage: 'number',
      dynamicSql: 'boolean',
      execPs: 'number',
      executions: 'number',
      failCount: 'number',
      failPercentage: 'number',
      inner: 'boolean',
      lastFailCode: 'number',
      localPlanPercentage: 'number',
      maxAffectedRows: 'number',
      maxApplicationWaitTime: 'number',
      maxConcurrencyWaitTime: 'number',
      maxCpuTime: 'number',
      maxDiskReads: 'number',
      maxElapsedTime: 'number',
      maxReturnRows: 'number',
      maxUserIoWaitTime: 'number',
      maxWaitTime: 'number',
      missPlanPercentage: 'number',
      missPlans: 'number',
      remotePlanPercentage: 'number',
      remotePlans: 'number',
      retCode4012Count: 'number',
      retCode4013Count: 'number',
      retCode5001Count: 'number',
      retCode5024Count: 'number',
      retCode5167Count: 'number',
      retCode5217Count: 'number',
      retCode6002Count: 'number',
      retryCount: 'number',
      rpcCount: 'number',
      server: 'string',
      serverIp: 'string',
      serverPort: 'number',
      sqlId: 'string',
      sqlList: { 'type': 'array', 'itemType': DescribeOasTopSQLListResponseBodyDataSqlList },
      sqlTextShort: 'string',
      sqlType: 'string',
      strongConsistencyPercentage: 'number',
      sumDbTime: 'number',
      sumElapsedTime: 'number',
      sumLogicalReads: 'number',
      sumWaitTime: 'number',
      tableScanPercentage: 'number',
      totalWaitTime: 'number',
      userName: 'string',
      waitEvent: 'string',
      weakConsistencyPercentage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOutlineBindingResponseBodyOutlineBinding extends $tea.Model {
  bindIndex?: string;
  bindPlan?: string;
  maxConcurrent?: number;
  outlineId?: number;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      bindIndex: 'BindIndex',
      bindPlan: 'BindPlan',
      maxConcurrent: 'MaxConcurrent',
      outlineId: 'OutlineId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindIndex: 'string',
      bindPlan: 'string',
      maxConcurrent: 'number',
      outlineId: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBodyParameters extends $tea.Model {
  acceptableValue?: string[];
  currentValue?: string;
  defaultValue?: string;
  description?: string;
  name?: string;
  needReboot?: boolean;
  readonly?: boolean;
  rejectedValue?: string[];
  unit?: string;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      acceptableValue: 'AcceptableValue',
      currentValue: 'CurrentValue',
      defaultValue: 'DefaultValue',
      description: 'Description',
      name: 'Name',
      needReboot: 'NeedReboot',
      readonly: 'Readonly',
      rejectedValue: 'RejectedValue',
      unit: 'Unit',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptableValue: { 'type': 'array', 'itemType': 'string' },
      currentValue: 'string',
      defaultValue: 'string',
      description: 'string',
      name: 'string',
      needReboot: 'boolean',
      readonly: 'boolean',
      rejectedValue: { 'type': 'array', 'itemType': 'string' },
      unit: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersHistoryResponseBodyRespondParameters extends $tea.Model {
  createTime?: string;
  dimensionValue?: string;
  name?: string;
  newValue?: string;
  oldValue?: string;
  status?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dimensionValue: 'DimensionValue',
      name: 'Name',
      newValue: 'NewValue',
      oldValue: 'OldValue',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dimensionValue: 'string',
      name: 'string',
      newValue: 'string',
      oldValue: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersHistoryResponseBodyRespond extends $tea.Model {
  pageNumber?: number;
  parameters?: DescribeParametersHistoryResponseBodyRespondParameters[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      parameters: 'Parameters',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      parameters: { 'type': 'array', 'itemType': DescribeParametersHistoryResponseBodyRespondParameters },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessStatsCompositionResponseBodyDataAllProcessList extends $tea.Model {
  clientIp?: string;
  command?: string;
  cpuTime?: number;
  database?: string;
  executeTime?: number;
  planId?: string;
  proxySessId?: string;
  serverIp?: string;
  sessionId?: number;
  sqlId?: string;
  sqlText?: string;
  status?: string;
  tenantId?: string;
  traceId?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      command: 'Command',
      cpuTime: 'CpuTime',
      database: 'Database',
      executeTime: 'ExecuteTime',
      planId: 'PlanId',
      proxySessId: 'ProxySessId',
      serverIp: 'ServerIp',
      sessionId: 'SessionId',
      sqlId: 'SqlId',
      sqlText: 'SqlText',
      status: 'Status',
      tenantId: 'TenantId',
      traceId: 'TraceId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      command: 'string',
      cpuTime: 'number',
      database: 'string',
      executeTime: 'number',
      planId: 'string',
      proxySessId: 'string',
      serverIp: 'string',
      sessionId: 'number',
      sqlId: 'string',
      sqlText: 'string',
      status: 'string',
      tenantId: 'string',
      traceId: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessStatsCompositionResponseBodyDataSessionStatisticsDataBaseStatistics extends $tea.Model {
  activeCount?: number;
  metricValue?: string;
  totalCount?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      activeCount: 'ActiveCount',
      metricValue: 'MetricValue',
      totalCount: 'TotalCount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCount: 'number',
      metricValue: 'string',
      totalCount: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessStatsCompositionResponseBodyDataSessionStatisticsSourceStatistics extends $tea.Model {
  activeCount?: number;
  metricValue?: string;
  totalCount?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      activeCount: 'ActiveCount',
      metricValue: 'MetricValue',
      totalCount: 'TotalCount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCount: 'number',
      metricValue: 'string',
      totalCount: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessStatsCompositionResponseBodyDataSessionStatisticsUserStatistics extends $tea.Model {
  activeCount?: number;
  metricValue?: string;
  totalCount?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      activeCount: 'ActiveCount',
      metricValue: 'MetricValue',
      totalCount: 'TotalCount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCount: 'number',
      metricValue: 'string',
      totalCount: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessStatsCompositionResponseBodyDataSessionStatistics extends $tea.Model {
  dataBaseStatistics?: DescribeProcessStatsCompositionResponseBodyDataSessionStatisticsDataBaseStatistics[];
  sourceStatistics?: DescribeProcessStatsCompositionResponseBodyDataSessionStatisticsSourceStatistics[];
  userStatistics?: DescribeProcessStatsCompositionResponseBodyDataSessionStatisticsUserStatistics[];
  static names(): { [key: string]: string } {
    return {
      dataBaseStatistics: 'DataBaseStatistics',
      sourceStatistics: 'SourceStatistics',
      userStatistics: 'UserStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataBaseStatistics: { 'type': 'array', 'itemType': DescribeProcessStatsCompositionResponseBodyDataSessionStatisticsDataBaseStatistics },
      sourceStatistics: { 'type': 'array', 'itemType': DescribeProcessStatsCompositionResponseBodyDataSessionStatisticsSourceStatistics },
      userStatistics: { 'type': 'array', 'itemType': DescribeProcessStatsCompositionResponseBodyDataSessionStatisticsUserStatistics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessStatsCompositionResponseBodyData extends $tea.Model {
  activeSessionCount?: number;
  allProcessList?: DescribeProcessStatsCompositionResponseBodyDataAllProcessList[];
  idleSessionCount?: number;
  obVersion?: string;
  sessionStatistics?: DescribeProcessStatsCompositionResponseBodyDataSessionStatistics;
  totalSessionCount?: number;
  static names(): { [key: string]: string } {
    return {
      activeSessionCount: 'ActiveSessionCount',
      allProcessList: 'AllProcessList',
      idleSessionCount: 'IdleSessionCount',
      obVersion: 'ObVersion',
      sessionStatistics: 'SessionStatistics',
      totalSessionCount: 'TotalSessionCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeSessionCount: 'number',
      allProcessList: { 'type': 'array', 'itemType': DescribeProcessStatsCompositionResponseBodyDataAllProcessList },
      idleSessionCount: 'number',
      obVersion: 'string',
      sessionStatistics: DescribeProcessStatsCompositionResponseBodyDataSessionStatistics,
      totalSessionCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataAlarmStats extends $tea.Model {
  alarmContent?: string;
  alarming?: boolean;
  openMonitor?: boolean;
  recentlyTriggerCount?: number;
  ruleToRecentlyTriggerCount?: { [key: string]: number };
  target?: string;
  static names(): { [key: string]: string } {
    return {
      alarmContent: 'AlarmContent',
      alarming: 'Alarming',
      openMonitor: 'OpenMonitor',
      recentlyTriggerCount: 'RecentlyTriggerCount',
      ruleToRecentlyTriggerCount: 'RuleToRecentlyTriggerCount',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmContent: 'string',
      alarming: 'boolean',
      openMonitor: 'boolean',
      recentlyTriggerCount: 'number',
      ruleToRecentlyTriggerCount: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      target: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataCommonTransferConfig extends $tea.Model {
  activeActive?: boolean;
  dataWorksBusinessName?: string;
  datahubTopicType?: string;
  mqPartition?: number;
  mqPartitionMode?: string;
  mqSerializerType?: string;
  rocketMqEnableMsgTrace?: boolean;
  rocketMqMsgTags?: string;
  rocketMqProducerGroup?: string;
  rocketMqSendMsgTimeout?: number;
  sinkStoreFormat?: string;
  sourceStoreFormat?: string;
  tableCategory?: string;
  static names(): { [key: string]: string } {
    return {
      activeActive: 'ActiveActive',
      dataWorksBusinessName: 'DataWorksBusinessName',
      datahubTopicType: 'DatahubTopicType',
      mqPartition: 'MqPartition',
      mqPartitionMode: 'MqPartitionMode',
      mqSerializerType: 'MqSerializerType',
      rocketMqEnableMsgTrace: 'RocketMqEnableMsgTrace',
      rocketMqMsgTags: 'RocketMqMsgTags',
      rocketMqProducerGroup: 'RocketMqProducerGroup',
      rocketMqSendMsgTimeout: 'RocketMqSendMsgTimeout',
      sinkStoreFormat: 'SinkStoreFormat',
      sourceStoreFormat: 'SourceStoreFormat',
      tableCategory: 'TableCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeActive: 'boolean',
      dataWorksBusinessName: 'string',
      datahubTopicType: 'string',
      mqPartition: 'number',
      mqPartitionMode: 'string',
      mqSerializerType: 'string',
      rocketMqEnableMsgTrace: 'boolean',
      rocketMqMsgTags: 'string',
      rocketMqProducerGroup: 'string',
      rocketMqSendMsgTimeout: 'number',
      sinkStoreFormat: 'string',
      sourceStoreFormat: 'string',
      tableCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataExtraInfo extends $tea.Model {
  accessObSource?: boolean;
  ignoreUnsupportDdl?: boolean;
  incrSyncTimestamp?: number;
  logServiceStartCheckpoint?: number;
  maxConnectorCount?: number;
  monitoringIncr?: boolean;
  overwriteConfig?: boolean;
  reverseSubtopics?: string[];
  runningProgress?: number;
  runningStep?: string;
  sourceStoreKeptHour?: number;
  storeIncr?: boolean;
  subConds?: { [key: string]: DataExtraInfoSubCondsValue[] };
  subDbs?: { [key: string]: DataExtraInfoSubDbsValue[] };
  subIds?: { [key: string]: string };
  subtopics?: string[];
  syncDelay?: number;
  syncDelaySampleTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      accessObSource: 'AccessObSource',
      ignoreUnsupportDdl: 'IgnoreUnsupportDdl',
      incrSyncTimestamp: 'IncrSyncTimestamp',
      logServiceStartCheckpoint: 'LogServiceStartCheckpoint',
      maxConnectorCount: 'MaxConnectorCount',
      monitoringIncr: 'MonitoringIncr',
      overwriteConfig: 'OverwriteConfig',
      reverseSubtopics: 'ReverseSubtopics',
      runningProgress: 'RunningProgress',
      runningStep: 'RunningStep',
      sourceStoreKeptHour: 'SourceStoreKeptHour',
      storeIncr: 'StoreIncr',
      subConds: 'SubConds',
      subDbs: 'SubDbs',
      subIds: 'SubIds',
      subtopics: 'Subtopics',
      syncDelay: 'SyncDelay',
      syncDelaySampleTimestamp: 'SyncDelaySampleTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessObSource: 'boolean',
      ignoreUnsupportDdl: 'boolean',
      incrSyncTimestamp: 'number',
      logServiceStartCheckpoint: 'number',
      maxConnectorCount: 'number',
      monitoringIncr: 'boolean',
      overwriteConfig: 'boolean',
      reverseSubtopics: { 'type': 'array', 'itemType': 'string' },
      runningProgress: 'number',
      runningStep: 'string',
      sourceStoreKeptHour: 'number',
      storeIncr: 'boolean',
      subConds: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': DataExtraInfoSubCondsValue } },
      subDbs: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': DataExtraInfoSubDbsValue } },
      subIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      subtopics: { 'type': 'array', 'itemType': 'string' },
      syncDelay: 'number',
      syncDelaySampleTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataFullTransferConfig extends $tea.Model {
  allowDestTableNotEmpty?: boolean;
  fullTransferSpeedMode?: string;
  fullVerifySpeedMode?: string;
  nonePkUkTruncateDstTable?: boolean;
  readWorkerNum?: number;
  throttleIOPS?: number;
  throttleRps?: number;
  writeWorkerNum?: number;
  static names(): { [key: string]: string } {
    return {
      allowDestTableNotEmpty: 'AllowDestTableNotEmpty',
      fullTransferSpeedMode: 'FullTransferSpeedMode',
      fullVerifySpeedMode: 'FullVerifySpeedMode',
      nonePkUkTruncateDstTable: 'NonePkUkTruncateDstTable',
      readWorkerNum: 'ReadWorkerNum',
      throttleIOPS: 'ThrottleIOPS',
      throttleRps: 'ThrottleRps',
      writeWorkerNum: 'WriteWorkerNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowDestTableNotEmpty: 'boolean',
      fullTransferSpeedMode: 'string',
      fullVerifySpeedMode: 'string',
      nonePkUkTruncateDstTable: 'boolean',
      readWorkerNum: 'number',
      throttleIOPS: 'number',
      throttleRps: 'number',
      writeWorkerNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataIncrTransferConfig extends $tea.Model {
  enableIncrSyncStatistics?: boolean;
  enableSequencingWithinTxn?: boolean;
  incrSyncConcurrency?: number;
  recordTypeWhiteList?: string[];
  startTimestamp?: number;
  storeLogKeptHour?: number;
  supportDDLTypes?: string[];
  throttleIOPS?: number;
  throttleRps?: number;
  static names(): { [key: string]: string } {
    return {
      enableIncrSyncStatistics: 'EnableIncrSyncStatistics',
      enableSequencingWithinTxn: 'EnableSequencingWithinTxn',
      incrSyncConcurrency: 'IncrSyncConcurrency',
      recordTypeWhiteList: 'RecordTypeWhiteList',
      startTimestamp: 'StartTimestamp',
      storeLogKeptHour: 'StoreLogKeptHour',
      supportDDLTypes: 'SupportDDLTypes',
      throttleIOPS: 'ThrottleIOPS',
      throttleRps: 'ThrottleRps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableIncrSyncStatistics: 'boolean',
      enableSequencingWithinTxn: 'boolean',
      incrSyncConcurrency: 'number',
      recordTypeWhiteList: { 'type': 'array', 'itemType': 'string' },
      startTimestamp: 'number',
      storeLogKeptHour: 'number',
      supportDDLTypes: { 'type': 'array', 'itemType': 'string' },
      throttleIOPS: 'number',
      throttleRps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataLabels extends $tea.Model {
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataReverseIncrTransferConfig extends $tea.Model {
  enableIncrSyncStatistics?: boolean;
  enableSequencingWithinTxn?: boolean;
  incrSyncConcurrency?: number;
  recordTypeWhiteList?: string[];
  startTimestamp?: number;
  storeLogKeptHour?: number;
  supportDDLTypes?: string[];
  throttleIOPS?: number;
  throttleRps?: number;
  static names(): { [key: string]: string } {
    return {
      enableIncrSyncStatistics: 'EnableIncrSyncStatistics',
      enableSequencingWithinTxn: 'EnableSequencingWithinTxn',
      incrSyncConcurrency: 'IncrSyncConcurrency',
      recordTypeWhiteList: 'RecordTypeWhiteList',
      startTimestamp: 'StartTimestamp',
      storeLogKeptHour: 'StoreLogKeptHour',
      supportDDLTypes: 'SupportDDLTypes',
      throttleIOPS: 'ThrottleIOPS',
      throttleRps: 'ThrottleRps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableIncrSyncStatistics: 'boolean',
      enableSequencingWithinTxn: 'boolean',
      incrSyncConcurrency: 'number',
      recordTypeWhiteList: { 'type': 'array', 'itemType': 'string' },
      startTimestamp: 'number',
      storeLogKeptHour: 'number',
      supportDDLTypes: { 'type': 'array', 'itemType': 'string' },
      throttleIOPS: 'number',
      throttleRps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataSinkConnectInfo extends $tea.Model {
  charset?: string;
  connExtraAttributes?: any;
  connectionInfo?: string;
  dbEngine?: string;
  endpointId?: string;
  endpointName?: string;
  endpointSide?: string;
  host?: string;
  id?: string;
  nlsLengthSemantics?: string;
  ocpName?: string;
  operatingSystem?: string;
  owner?: string;
  port?: number;
  region?: string;
  resourceOwner?: string;
  timezone?: string;
  username?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      charset: 'Charset',
      connExtraAttributes: 'ConnExtraAttributes',
      connectionInfo: 'ConnectionInfo',
      dbEngine: 'DbEngine',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      endpointSide: 'EndpointSide',
      host: 'Host',
      id: 'Id',
      nlsLengthSemantics: 'NlsLengthSemantics',
      ocpName: 'OcpName',
      operatingSystem: 'OperatingSystem',
      owner: 'Owner',
      port: 'Port',
      region: 'Region',
      resourceOwner: 'ResourceOwner',
      timezone: 'Timezone',
      username: 'Username',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charset: 'string',
      connExtraAttributes: 'any',
      connectionInfo: 'string',
      dbEngine: 'string',
      endpointId: 'string',
      endpointName: 'string',
      endpointSide: 'string',
      host: 'string',
      id: 'string',
      nlsLengthSemantics: 'string',
      ocpName: 'string',
      operatingSystem: 'string',
      owner: 'string',
      port: 'number',
      region: 'string',
      resourceOwner: 'string',
      timezone: 'string',
      username: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataSourceConnectInfo extends $tea.Model {
  charset?: string;
  connExtraAttributes?: any;
  connectionInfo?: string;
  dbEngine?: string;
  endpointId?: string;
  endpointName?: string;
  endpointSide?: string;
  host?: string;
  id?: string;
  nlsLengthSemantics?: string;
  ocpName?: string;
  operatingSystem?: string;
  owner?: string;
  port?: number;
  region?: string;
  resourceOwner?: string;
  timezone?: string;
  username?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      charset: 'Charset',
      connExtraAttributes: 'ConnExtraAttributes',
      connectionInfo: 'ConnectionInfo',
      dbEngine: 'DbEngine',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      endpointSide: 'EndpointSide',
      host: 'Host',
      id: 'Id',
      nlsLengthSemantics: 'NlsLengthSemantics',
      ocpName: 'OcpName',
      operatingSystem: 'OperatingSystem',
      owner: 'Owner',
      port: 'Port',
      region: 'Region',
      resourceOwner: 'ResourceOwner',
      timezone: 'Timezone',
      username: 'Username',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charset: 'string',
      connExtraAttributes: 'any',
      connectionInfo: 'string',
      dbEngine: 'string',
      endpointId: 'string',
      endpointName: 'string',
      endpointSide: 'string',
      host: 'string',
      id: 'string',
      nlsLengthSemantics: 'string',
      ocpName: 'string',
      operatingSystem: 'string',
      owner: 'string',
      port: 'number',
      region: 'string',
      resourceOwner: 'string',
      timezone: 'string',
      username: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataStepsExtraInfoErrorDetails extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataStepsExtraInfo extends $tea.Model {
  errorCode?: string;
  errorDetails?: DescribeProjectResponseBodyDataStepsExtraInfoErrorDetails[];
  errorMsg?: string;
  errorParam?: { [key: string]: string };
  failedTime?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorDetails: 'ErrorDetails',
      errorMsg: 'ErrorMsg',
      errorParam: 'ErrorParam',
      failedTime: 'FailedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorDetails: { 'type': 'array', 'itemType': DescribeProjectResponseBodyDataStepsExtraInfoErrorDetails },
      errorMsg: 'string',
      errorParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      failedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataSteps extends $tea.Model {
  description?: string;
  extraInfo?: DescribeProjectResponseBodyDataStepsExtraInfo;
  finishTime?: string;
  name?: string;
  order?: number;
  progress?: number;
  startTime?: string;
  status?: string;
  stepInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      extraInfo: 'ExtraInfo',
      finishTime: 'FinishTime',
      name: 'Name',
      order: 'Order',
      progress: 'Progress',
      startTime: 'StartTime',
      status: 'Status',
      stepInfo: 'StepInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      extraInfo: DescribeProjectResponseBodyDataStepsExtraInfo,
      finishTime: 'string',
      name: 'string',
      order: 'number',
      progress: 'number',
      startTime: 'string',
      status: 'string',
      stepInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataStructTransferConfig extends $tea.Model {
  byteCharConvertStrategy?: string;
  deferIndexCreation?: boolean;
  static names(): { [key: string]: string } {
    return {
      byteCharConvertStrategy: 'ByteCharConvertStrategy',
      deferIndexCreation: 'DeferIndexCreation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byteCharConvertStrategy: 'string',
      deferIndexCreation: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataTransferMappingDatabasesSpecificTablesAdbTableSchema extends $tea.Model {
  distributedKeys?: string[];
  partitionLifeCycle?: string;
  partitionStatement?: string;
  primaryKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      distributedKeys: 'DistributedKeys',
      partitionLifeCycle: 'PartitionLifeCycle',
      partitionStatement: 'PartitionStatement',
      primaryKeys: 'PrimaryKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributedKeys: { 'type': 'array', 'itemType': 'string' },
      partitionLifeCycle: 'string',
      partitionStatement: 'string',
      primaryKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataTransferMappingDatabasesSpecificTables extends $tea.Model {
  adbTableSchema?: DescribeProjectResponseBodyDataTransferMappingDatabasesSpecificTablesAdbTableSchema;
  filterColumns?: string[];
  id?: string;
  mappedName?: string;
  name?: string;
  shardColumns?: string[];
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      adbTableSchema: 'AdbTableSchema',
      filterColumns: 'FilterColumns',
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      shardColumns: 'ShardColumns',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbTableSchema: DescribeProjectResponseBodyDataTransferMappingDatabasesSpecificTablesAdbTableSchema,
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      mappedName: 'string',
      name: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      whereClause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataTransferMappingDatabasesSpecificViewsAdbTableSchema extends $tea.Model {
  distributedKeys?: string[];
  partitionLifeCycle?: string;
  partitionStatement?: string;
  primaryKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      distributedKeys: 'DistributedKeys',
      partitionLifeCycle: 'PartitionLifeCycle',
      partitionStatement: 'PartitionStatement',
      primaryKeys: 'PrimaryKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributedKeys: { 'type': 'array', 'itemType': 'string' },
      partitionLifeCycle: 'string',
      partitionStatement: 'string',
      primaryKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataTransferMappingDatabasesSpecificViews extends $tea.Model {
  adbTableSchema?: DescribeProjectResponseBodyDataTransferMappingDatabasesSpecificViewsAdbTableSchema;
  filterColumns?: string[];
  id?: string;
  mappedName?: string;
  name?: string;
  shardColumns?: string[];
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      adbTableSchema: 'AdbTableSchema',
      filterColumns: 'FilterColumns',
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      shardColumns: 'ShardColumns',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbTableSchema: DescribeProjectResponseBodyDataTransferMappingDatabasesSpecificViewsAdbTableSchema,
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      mappedName: 'string',
      name: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      whereClause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataTransferMappingDatabasesTablesAdbTableSchema extends $tea.Model {
  distributedKeys?: string[];
  partitionLifeCycle?: string;
  partitionStatement?: string;
  primaryKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      distributedKeys: 'DistributedKeys',
      partitionLifeCycle: 'PartitionLifeCycle',
      partitionStatement: 'PartitionStatement',
      primaryKeys: 'PrimaryKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributedKeys: { 'type': 'array', 'itemType': 'string' },
      partitionLifeCycle: 'string',
      partitionStatement: 'string',
      primaryKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataTransferMappingDatabasesTables extends $tea.Model {
  adbTableSchema?: DescribeProjectResponseBodyDataTransferMappingDatabasesTablesAdbTableSchema;
  filterColumns?: string[];
  id?: string;
  mappedName?: string;
  name?: string;
  shardColumns?: string[];
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      adbTableSchema: 'AdbTableSchema',
      filterColumns: 'FilterColumns',
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      shardColumns: 'ShardColumns',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbTableSchema: DescribeProjectResponseBodyDataTransferMappingDatabasesTablesAdbTableSchema,
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      mappedName: 'string',
      name: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      whereClause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataTransferMappingDatabasesViewsAdbTableSchema extends $tea.Model {
  distributedKeys?: string[];
  partitionLifeCycle?: string;
  partitionStatement?: string;
  primaryKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      distributedKeys: 'DistributedKeys',
      partitionLifeCycle: 'PartitionLifeCycle',
      partitionStatement: 'PartitionStatement',
      primaryKeys: 'PrimaryKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributedKeys: { 'type': 'array', 'itemType': 'string' },
      partitionLifeCycle: 'string',
      partitionStatement: 'string',
      primaryKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataTransferMappingDatabasesViews extends $tea.Model {
  adbTableSchema?: DescribeProjectResponseBodyDataTransferMappingDatabasesViewsAdbTableSchema;
  filterColumns?: string[];
  id?: string;
  mappedName?: string;
  name?: string;
  shardColumns?: string[];
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      adbTableSchema: 'AdbTableSchema',
      filterColumns: 'FilterColumns',
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      shardColumns: 'ShardColumns',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbTableSchema: DescribeProjectResponseBodyDataTransferMappingDatabasesViewsAdbTableSchema,
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      mappedName: 'string',
      name: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      whereClause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataTransferMappingDatabases extends $tea.Model {
  id?: string;
  mappedName?: string;
  name?: string;
  specificTables?: DescribeProjectResponseBodyDataTransferMappingDatabasesSpecificTables[];
  specificViews?: DescribeProjectResponseBodyDataTransferMappingDatabasesSpecificViews[];
  tables?: DescribeProjectResponseBodyDataTransferMappingDatabasesTables[];
  tenantName?: string;
  type?: string;
  views?: DescribeProjectResponseBodyDataTransferMappingDatabasesViews[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      specificTables: 'SpecificTables',
      specificViews: 'SpecificViews',
      tables: 'Tables',
      tenantName: 'TenantName',
      type: 'Type',
      views: 'Views',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      mappedName: 'string',
      name: 'string',
      specificTables: { 'type': 'array', 'itemType': DescribeProjectResponseBodyDataTransferMappingDatabasesSpecificTables },
      specificViews: { 'type': 'array', 'itemType': DescribeProjectResponseBodyDataTransferMappingDatabasesSpecificViews },
      tables: { 'type': 'array', 'itemType': DescribeProjectResponseBodyDataTransferMappingDatabasesTables },
      tenantName: 'string',
      type: 'string',
      views: { 'type': 'array', 'itemType': DescribeProjectResponseBodyDataTransferMappingDatabasesViews },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataTransferMappingDatabasesBlackSpecificTablesAdbTableSchema extends $tea.Model {
  distributedKeys?: string[];
  partitionLifeCycle?: string;
  partitionStatement?: string;
  primaryKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      distributedKeys: 'DistributedKeys',
      partitionLifeCycle: 'PartitionLifeCycle',
      partitionStatement: 'PartitionStatement',
      primaryKeys: 'PrimaryKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributedKeys: { 'type': 'array', 'itemType': 'string' },
      partitionLifeCycle: 'string',
      partitionStatement: 'string',
      primaryKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataTransferMappingDatabasesBlackSpecificTables extends $tea.Model {
  adbTableSchema?: DescribeProjectResponseBodyDataTransferMappingDatabasesBlackSpecificTablesAdbTableSchema;
  filterColumns?: string[];
  id?: string;
  mappedName?: string;
  name?: string;
  shardColumns?: string[];
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      adbTableSchema: 'AdbTableSchema',
      filterColumns: 'FilterColumns',
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      shardColumns: 'ShardColumns',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbTableSchema: DescribeProjectResponseBodyDataTransferMappingDatabasesBlackSpecificTablesAdbTableSchema,
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      mappedName: 'string',
      name: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      whereClause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataTransferMappingDatabasesBlackSpecificViewsAdbTableSchema extends $tea.Model {
  distributedKeys?: string[];
  partitionLifeCycle?: string;
  partitionStatement?: string;
  primaryKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      distributedKeys: 'DistributedKeys',
      partitionLifeCycle: 'PartitionLifeCycle',
      partitionStatement: 'PartitionStatement',
      primaryKeys: 'PrimaryKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributedKeys: { 'type': 'array', 'itemType': 'string' },
      partitionLifeCycle: 'string',
      partitionStatement: 'string',
      primaryKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataTransferMappingDatabasesBlackSpecificViews extends $tea.Model {
  adbTableSchema?: DescribeProjectResponseBodyDataTransferMappingDatabasesBlackSpecificViewsAdbTableSchema;
  filterColumns?: string[];
  id?: string;
  mappedName?: string;
  name?: string;
  shardColumns?: string[];
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      adbTableSchema: 'AdbTableSchema',
      filterColumns: 'FilterColumns',
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      shardColumns: 'ShardColumns',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbTableSchema: DescribeProjectResponseBodyDataTransferMappingDatabasesBlackSpecificViewsAdbTableSchema,
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      mappedName: 'string',
      name: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      whereClause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataTransferMappingDatabasesBlackTablesAdbTableSchema extends $tea.Model {
  distributedKeys?: string[];
  partitionLifeCycle?: string;
  partitionStatement?: string;
  primaryKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      distributedKeys: 'DistributedKeys',
      partitionLifeCycle: 'PartitionLifeCycle',
      partitionStatement: 'PartitionStatement',
      primaryKeys: 'PrimaryKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributedKeys: { 'type': 'array', 'itemType': 'string' },
      partitionLifeCycle: 'string',
      partitionStatement: 'string',
      primaryKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataTransferMappingDatabasesBlackTables extends $tea.Model {
  adbTableSchema?: DescribeProjectResponseBodyDataTransferMappingDatabasesBlackTablesAdbTableSchema;
  filterColumns?: string[];
  id?: string;
  mappedName?: string;
  name?: string;
  shardColumns?: string[];
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      adbTableSchema: 'AdbTableSchema',
      filterColumns: 'FilterColumns',
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      shardColumns: 'ShardColumns',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbTableSchema: DescribeProjectResponseBodyDataTransferMappingDatabasesBlackTablesAdbTableSchema,
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      mappedName: 'string',
      name: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      whereClause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataTransferMappingDatabasesBlackViewsAdbTableSchema extends $tea.Model {
  distributedKeys?: string[];
  partitionLifeCycle?: string;
  partitionStatement?: string;
  primaryKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      distributedKeys: 'DistributedKeys',
      partitionLifeCycle: 'PartitionLifeCycle',
      partitionStatement: 'PartitionStatement',
      primaryKeys: 'PrimaryKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributedKeys: { 'type': 'array', 'itemType': 'string' },
      partitionLifeCycle: 'string',
      partitionStatement: 'string',
      primaryKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataTransferMappingDatabasesBlackViews extends $tea.Model {
  adbTableSchema?: DescribeProjectResponseBodyDataTransferMappingDatabasesBlackViewsAdbTableSchema;
  filterColumns?: string[];
  id?: string;
  mappedName?: string;
  name?: string;
  shardColumns?: string[];
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      adbTableSchema: 'AdbTableSchema',
      filterColumns: 'FilterColumns',
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      shardColumns: 'ShardColumns',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbTableSchema: DescribeProjectResponseBodyDataTransferMappingDatabasesBlackViewsAdbTableSchema,
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      mappedName: 'string',
      name: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      whereClause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataTransferMappingDatabasesBlack extends $tea.Model {
  id?: string;
  mappedName?: string;
  name?: string;
  specificTables?: DescribeProjectResponseBodyDataTransferMappingDatabasesBlackSpecificTables[];
  specificViews?: DescribeProjectResponseBodyDataTransferMappingDatabasesBlackSpecificViews[];
  tables?: DescribeProjectResponseBodyDataTransferMappingDatabasesBlackTables[];
  tenantName?: string;
  type?: string;
  views?: DescribeProjectResponseBodyDataTransferMappingDatabasesBlackViews[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      specificTables: 'SpecificTables',
      specificViews: 'SpecificViews',
      tables: 'Tables',
      tenantName: 'TenantName',
      type: 'Type',
      views: 'Views',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      mappedName: 'string',
      name: 'string',
      specificTables: { 'type': 'array', 'itemType': DescribeProjectResponseBodyDataTransferMappingDatabasesBlackSpecificTables },
      specificViews: { 'type': 'array', 'itemType': DescribeProjectResponseBodyDataTransferMappingDatabasesBlackSpecificViews },
      tables: { 'type': 'array', 'itemType': DescribeProjectResponseBodyDataTransferMappingDatabasesBlackTables },
      tenantName: 'string',
      type: 'string',
      views: { 'type': 'array', 'itemType': DescribeProjectResponseBodyDataTransferMappingDatabasesBlackViews },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataTransferMapping extends $tea.Model {
  databases?: DescribeProjectResponseBodyDataTransferMappingDatabases[];
  databasesBlack?: DescribeProjectResponseBodyDataTransferMappingDatabasesBlack[];
  mode?: string;
  tableAndViewBlackList?: string[];
  tableAndViewWhiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      databasesBlack: 'DatabasesBlack',
      mode: 'Mode',
      tableAndViewBlackList: 'TableAndViewBlackList',
      tableAndViewWhiteList: 'TableAndViewWhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': DescribeProjectResponseBodyDataTransferMappingDatabases },
      databasesBlack: { 'type': 'array', 'itemType': DescribeProjectResponseBodyDataTransferMappingDatabasesBlack },
      mode: 'string',
      tableAndViewBlackList: { 'type': 'array', 'itemType': 'string' },
      tableAndViewWhiteList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyDataWorkerGradeInfo extends $tea.Model {
  autoRenewal?: boolean;
  chargeType?: string;
  destRegion?: string;
  destType?: string;
  endTime?: string;
  expired?: boolean;
  gmtCreate?: string;
  grade?: string;
  id?: string;
  name?: string;
  sourceRegion?: string;
  sourceType?: string;
  spec?: string;
  specName?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      chargeType: 'ChargeType',
      destRegion: 'DestRegion',
      destType: 'DestType',
      endTime: 'EndTime',
      expired: 'Expired',
      gmtCreate: 'GmtCreate',
      grade: 'Grade',
      id: 'Id',
      name: 'Name',
      sourceRegion: 'SourceRegion',
      sourceType: 'SourceType',
      spec: 'Spec',
      specName: 'SpecName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'boolean',
      chargeType: 'string',
      destRegion: 'string',
      destType: 'string',
      endTime: 'string',
      expired: 'boolean',
      gmtCreate: 'string',
      grade: 'string',
      id: 'string',
      name: 'string',
      sourceRegion: 'string',
      sourceType: 'string',
      spec: 'string',
      specName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyData extends $tea.Model {
  alarmStats?: DescribeProjectResponseBodyDataAlarmStats;
  commonTransferConfig?: DescribeProjectResponseBodyDataCommonTransferConfig;
  destConnId?: string;
  enableFullTransfer?: boolean;
  enableFullVerify?: boolean;
  enableIncrTransfer?: boolean;
  enableIncrVerify?: boolean;
  enableReverseIncrTransfer?: boolean;
  enableStructTransfer?: boolean;
  extraInfo?: DescribeProjectResponseBodyDataExtraInfo;
  fullTransferConfig?: DescribeProjectResponseBodyDataFullTransferConfig;
  gmtCreate?: string;
  gmtFinish?: string;
  gmtModified?: string;
  gmtStart?: string;
  id?: string;
  importance?: string;
  incrTransferConfig?: DescribeProjectResponseBodyDataIncrTransferConfig;
  isMerging?: boolean;
  isModifying?: boolean;
  isSubProject?: boolean;
  labels?: DescribeProjectResponseBodyDataLabels[];
  name?: string;
  owner?: string;
  reverseIncrTransferConfig?: DescribeProjectResponseBodyDataReverseIncrTransferConfig;
  sinkConnectInfo?: DescribeProjectResponseBodyDataSinkConnectInfo;
  sinkEndpointType?: string;
  sourceConnectInfo?: DescribeProjectResponseBodyDataSourceConnectInfo;
  sourceEndpointType?: string;
  status?: string;
  steps?: DescribeProjectResponseBodyDataSteps[];
  structTransferConfig?: DescribeProjectResponseBodyDataStructTransferConfig;
  transferMapping?: DescribeProjectResponseBodyDataTransferMapping;
  type?: string;
  workerGradeId?: string;
  workerGradeInfo?: DescribeProjectResponseBodyDataWorkerGradeInfo;
  static names(): { [key: string]: string } {
    return {
      alarmStats: 'AlarmStats',
      commonTransferConfig: 'CommonTransferConfig',
      destConnId: 'DestConnId',
      enableFullTransfer: 'EnableFullTransfer',
      enableFullVerify: 'EnableFullVerify',
      enableIncrTransfer: 'EnableIncrTransfer',
      enableIncrVerify: 'EnableIncrVerify',
      enableReverseIncrTransfer: 'EnableReverseIncrTransfer',
      enableStructTransfer: 'EnableStructTransfer',
      extraInfo: 'ExtraInfo',
      fullTransferConfig: 'FullTransferConfig',
      gmtCreate: 'GmtCreate',
      gmtFinish: 'GmtFinish',
      gmtModified: 'GmtModified',
      gmtStart: 'GmtStart',
      id: 'Id',
      importance: 'Importance',
      incrTransferConfig: 'IncrTransferConfig',
      isMerging: 'IsMerging',
      isModifying: 'IsModifying',
      isSubProject: 'IsSubProject',
      labels: 'Labels',
      name: 'Name',
      owner: 'Owner',
      reverseIncrTransferConfig: 'ReverseIncrTransferConfig',
      sinkConnectInfo: 'SinkConnectInfo',
      sinkEndpointType: 'SinkEndpointType',
      sourceConnectInfo: 'SourceConnectInfo',
      sourceEndpointType: 'SourceEndpointType',
      status: 'Status',
      steps: 'Steps',
      structTransferConfig: 'StructTransferConfig',
      transferMapping: 'TransferMapping',
      type: 'Type',
      workerGradeId: 'WorkerGradeId',
      workerGradeInfo: 'WorkerGradeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmStats: DescribeProjectResponseBodyDataAlarmStats,
      commonTransferConfig: DescribeProjectResponseBodyDataCommonTransferConfig,
      destConnId: 'string',
      enableFullTransfer: 'boolean',
      enableFullVerify: 'boolean',
      enableIncrTransfer: 'boolean',
      enableIncrVerify: 'boolean',
      enableReverseIncrTransfer: 'boolean',
      enableStructTransfer: 'boolean',
      extraInfo: DescribeProjectResponseBodyDataExtraInfo,
      fullTransferConfig: DescribeProjectResponseBodyDataFullTransferConfig,
      gmtCreate: 'string',
      gmtFinish: 'string',
      gmtModified: 'string',
      gmtStart: 'string',
      id: 'string',
      importance: 'string',
      incrTransferConfig: DescribeProjectResponseBodyDataIncrTransferConfig,
      isMerging: 'boolean',
      isModifying: 'boolean',
      isSubProject: 'boolean',
      labels: { 'type': 'array', 'itemType': DescribeProjectResponseBodyDataLabels },
      name: 'string',
      owner: 'string',
      reverseIncrTransferConfig: DescribeProjectResponseBodyDataReverseIncrTransferConfig,
      sinkConnectInfo: DescribeProjectResponseBodyDataSinkConnectInfo,
      sinkEndpointType: 'string',
      sourceConnectInfo: DescribeProjectResponseBodyDataSourceConnectInfo,
      sourceEndpointType: 'string',
      status: 'string',
      steps: { 'type': 'array', 'itemType': DescribeProjectResponseBodyDataSteps },
      structTransferConfig: DescribeProjectResponseBodyDataStructTransferConfig,
      transferMapping: DescribeProjectResponseBodyDataTransferMapping,
      type: 'string',
      workerGradeId: 'string',
      workerGradeInfo: DescribeProjectResponseBodyDataWorkerGradeInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectComponentsResponseBodyDataFullImportComponentsErrorDetails extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectComponentsResponseBodyDataFullImportComponents extends $tea.Model {
  errorDetails?: DescribeProjectComponentsResponseBodyDataFullImportComponentsErrorDetails[];
  gmtCreate?: string;
  gmtModify?: string;
  identity?: string;
  ip?: string;
  name?: string;
  progress?: number;
  region?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorDetails: 'ErrorDetails',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      identity: 'Identity',
      ip: 'Ip',
      name: 'Name',
      progress: 'Progress',
      region: 'Region',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorDetails: { 'type': 'array', 'itemType': DescribeProjectComponentsResponseBodyDataFullImportComponentsErrorDetails },
      gmtCreate: 'string',
      gmtModify: 'string',
      identity: 'string',
      ip: 'string',
      name: 'string',
      progress: 'number',
      region: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectComponentsResponseBodyDataFullVerifyComponentsErrorDetails extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectComponentsResponseBodyDataFullVerifyComponents extends $tea.Model {
  consistentQuantity?: number;
  errorDetails?: DescribeProjectComponentsResponseBodyDataFullVerifyComponentsErrorDetails[];
  inconsistentQuantity?: number;
  ip?: string;
  name?: string;
  progress?: string;
  recordProgress?: number;
  region?: string;
  status?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      consistentQuantity: 'ConsistentQuantity',
      errorDetails: 'ErrorDetails',
      inconsistentQuantity: 'InconsistentQuantity',
      ip: 'Ip',
      name: 'Name',
      progress: 'Progress',
      recordProgress: 'RecordProgress',
      region: 'Region',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistentQuantity: 'number',
      errorDetails: { 'type': 'array', 'itemType': DescribeProjectComponentsResponseBodyDataFullVerifyComponentsErrorDetails },
      inconsistentQuantity: 'number',
      ip: 'string',
      name: 'string',
      progress: 'string',
      recordProgress: 'number',
      region: 'string',
      status: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectComponentsResponseBodyDataIncrSyncComponentsErrorDetails extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectComponentsResponseBodyDataIncrSyncComponents extends $tea.Model {
  checkpoint?: string;
  checkpointSampleTimestamp?: number;
  delay?: number;
  errorDetails?: DescribeProjectComponentsResponseBodyDataIncrSyncComponentsErrorDetails[];
  gmtCreate?: string;
  gmtModify?: string;
  identity?: string;
  ip?: string;
  name?: string;
  region?: string;
  status?: string;
  subtopics?: string[];
  tps?: number;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      checkpointSampleTimestamp: 'CheckpointSampleTimestamp',
      delay: 'Delay',
      errorDetails: 'ErrorDetails',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      identity: 'Identity',
      ip: 'Ip',
      name: 'Name',
      region: 'Region',
      status: 'Status',
      subtopics: 'Subtopics',
      tps: 'Tps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      checkpointSampleTimestamp: 'number',
      delay: 'number',
      errorDetails: { 'type': 'array', 'itemType': DescribeProjectComponentsResponseBodyDataIncrSyncComponentsErrorDetails },
      gmtCreate: 'string',
      gmtModify: 'string',
      identity: 'string',
      ip: 'string',
      name: 'string',
      region: 'string',
      status: 'string',
      subtopics: { 'type': 'array', 'itemType': 'string' },
      tps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectComponentsResponseBodyDataReverseIncrSyncComponentsErrorDetails extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectComponentsResponseBodyDataReverseIncrSyncComponents extends $tea.Model {
  checkpoint?: string;
  checkpointSampleTimestamp?: number;
  delay?: number;
  errorDetails?: DescribeProjectComponentsResponseBodyDataReverseIncrSyncComponentsErrorDetails[];
  gmtCreate?: string;
  gmtModify?: string;
  identity?: string;
  ip?: string;
  name?: string;
  region?: string;
  status?: string;
  subtopics?: string[];
  tps?: number;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      checkpointSampleTimestamp: 'CheckpointSampleTimestamp',
      delay: 'Delay',
      errorDetails: 'ErrorDetails',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      identity: 'Identity',
      ip: 'Ip',
      name: 'Name',
      region: 'Region',
      status: 'Status',
      subtopics: 'Subtopics',
      tps: 'Tps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      checkpointSampleTimestamp: 'number',
      delay: 'number',
      errorDetails: { 'type': 'array', 'itemType': DescribeProjectComponentsResponseBodyDataReverseIncrSyncComponentsErrorDetails },
      gmtCreate: 'string',
      gmtModify: 'string',
      identity: 'string',
      ip: 'string',
      name: 'string',
      region: 'string',
      status: 'string',
      subtopics: { 'type': 'array', 'itemType': 'string' },
      tps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectComponentsResponseBodyDataReverseStoreListErrorDetails extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectComponentsResponseBodyDataReverseStoreList extends $tea.Model {
  beginCheckpoint?: string;
  conn?: number;
  delay?: number;
  endCheckpoint?: string;
  errMsg?: string;
  errorDetails?: DescribeProjectComponentsResponseBodyDataReverseStoreListErrorDetails[];
  gmt?: number;
  gmtCreate?: string;
  gmtModified?: string;
  ip?: string;
  latelyHeartbeatTimeSec?: number;
  name?: string;
  port?: number;
  region?: string;
  status?: string;
  storePort?: number;
  subtopic?: string;
  toSwitch?: boolean;
  topic?: string;
  tps?: number;
  static names(): { [key: string]: string } {
    return {
      beginCheckpoint: 'BeginCheckpoint',
      conn: 'Conn',
      delay: 'Delay',
      endCheckpoint: 'EndCheckpoint',
      errMsg: 'ErrMsg',
      errorDetails: 'ErrorDetails',
      gmt: 'Gmt',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      ip: 'Ip',
      latelyHeartbeatTimeSec: 'LatelyHeartbeatTimeSec',
      name: 'Name',
      port: 'Port',
      region: 'Region',
      status: 'Status',
      storePort: 'StorePort',
      subtopic: 'Subtopic',
      toSwitch: 'ToSwitch',
      topic: 'Topic',
      tps: 'Tps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginCheckpoint: 'string',
      conn: 'number',
      delay: 'number',
      endCheckpoint: 'string',
      errMsg: 'string',
      errorDetails: { 'type': 'array', 'itemType': DescribeProjectComponentsResponseBodyDataReverseStoreListErrorDetails },
      gmt: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      ip: 'string',
      latelyHeartbeatTimeSec: 'number',
      name: 'string',
      port: 'number',
      region: 'string',
      status: 'string',
      storePort: 'number',
      subtopic: 'string',
      toSwitch: 'boolean',
      topic: 'string',
      tps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectComponentsResponseBodyDataStoreListErrorDetails extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectComponentsResponseBodyDataStoreList extends $tea.Model {
  beginCheckpoint?: string;
  conn?: number;
  delay?: number;
  endCheckpoint?: string;
  errMsg?: string;
  errorDetails?: DescribeProjectComponentsResponseBodyDataStoreListErrorDetails[];
  gmt?: number;
  gmtCreate?: string;
  gmtModified?: string;
  ip?: string;
  latelyHeartbeatTimeSec?: number;
  name?: string;
  port?: number;
  region?: string;
  status?: string;
  storePort?: number;
  subtopic?: string;
  toSwitch?: boolean;
  topic?: string;
  tps?: number;
  static names(): { [key: string]: string } {
    return {
      beginCheckpoint: 'BeginCheckpoint',
      conn: 'Conn',
      delay: 'Delay',
      endCheckpoint: 'EndCheckpoint',
      errMsg: 'ErrMsg',
      errorDetails: 'ErrorDetails',
      gmt: 'Gmt',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      ip: 'Ip',
      latelyHeartbeatTimeSec: 'LatelyHeartbeatTimeSec',
      name: 'Name',
      port: 'Port',
      region: 'Region',
      status: 'Status',
      storePort: 'StorePort',
      subtopic: 'Subtopic',
      toSwitch: 'ToSwitch',
      topic: 'Topic',
      tps: 'Tps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginCheckpoint: 'string',
      conn: 'number',
      delay: 'number',
      endCheckpoint: 'string',
      errMsg: 'string',
      errorDetails: { 'type': 'array', 'itemType': DescribeProjectComponentsResponseBodyDataStoreListErrorDetails },
      gmt: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      ip: 'string',
      latelyHeartbeatTimeSec: 'number',
      name: 'string',
      port: 'number',
      region: 'string',
      status: 'string',
      storePort: 'number',
      subtopic: 'string',
      toSwitch: 'boolean',
      topic: 'string',
      tps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectComponentsResponseBodyData extends $tea.Model {
  fullImportComponents?: DescribeProjectComponentsResponseBodyDataFullImportComponents[];
  fullVerifyComponents?: DescribeProjectComponentsResponseBodyDataFullVerifyComponents[];
  incrSyncComponents?: DescribeProjectComponentsResponseBodyDataIncrSyncComponents[];
  reverseIncrSyncComponents?: DescribeProjectComponentsResponseBodyDataReverseIncrSyncComponents[];
  reverseStoreList?: DescribeProjectComponentsResponseBodyDataReverseStoreList[];
  storeList?: DescribeProjectComponentsResponseBodyDataStoreList[];
  static names(): { [key: string]: string } {
    return {
      fullImportComponents: 'FullImportComponents',
      fullVerifyComponents: 'FullVerifyComponents',
      incrSyncComponents: 'IncrSyncComponents',
      reverseIncrSyncComponents: 'ReverseIncrSyncComponents',
      reverseStoreList: 'ReverseStoreList',
      storeList: 'StoreList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullImportComponents: { 'type': 'array', 'itemType': DescribeProjectComponentsResponseBodyDataFullImportComponents },
      fullVerifyComponents: { 'type': 'array', 'itemType': DescribeProjectComponentsResponseBodyDataFullVerifyComponents },
      incrSyncComponents: { 'type': 'array', 'itemType': DescribeProjectComponentsResponseBodyDataIncrSyncComponents },
      reverseIncrSyncComponents: { 'type': 'array', 'itemType': DescribeProjectComponentsResponseBodyDataReverseIncrSyncComponents },
      reverseStoreList: { 'type': 'array', 'itemType': DescribeProjectComponentsResponseBodyDataReverseStoreList },
      storeList: { 'type': 'array', 'itemType': DescribeProjectComponentsResponseBodyDataStoreList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectComponentsResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectProgressResponseBodyData extends $tea.Model {
  alarmLevel?: string;
  currentStep?: string;
  enableFullTransfer?: boolean;
  enableIncrSync?: boolean;
  enableReverseIncrTransfer?: boolean;
  enableStructTransfer?: boolean;
  fullTransferProgress?: number;
  incrSyncCheckpoint?: number;
  projectId?: string;
  reverseIncrTransferCheckpoint?: number;
  status?: string;
  structTransferProgress?: number;
  static names(): { [key: string]: string } {
    return {
      alarmLevel: 'AlarmLevel',
      currentStep: 'CurrentStep',
      enableFullTransfer: 'EnableFullTransfer',
      enableIncrSync: 'EnableIncrSync',
      enableReverseIncrTransfer: 'EnableReverseIncrTransfer',
      enableStructTransfer: 'EnableStructTransfer',
      fullTransferProgress: 'FullTransferProgress',
      incrSyncCheckpoint: 'IncrSyncCheckpoint',
      projectId: 'ProjectId',
      reverseIncrTransferCheckpoint: 'ReverseIncrTransferCheckpoint',
      status: 'Status',
      structTransferProgress: 'StructTransferProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmLevel: 'string',
      currentStep: 'string',
      enableFullTransfer: 'boolean',
      enableIncrSync: 'boolean',
      enableReverseIncrTransfer: 'boolean',
      enableStructTransfer: 'boolean',
      fullTransferProgress: 'number',
      incrSyncCheckpoint: 'number',
      projectId: 'string',
      reverseIncrTransferCheckpoint: 'number',
      status: 'string',
      structTransferProgress: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectProgressResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectStepMetricResponseBodyDataMetricsDataPoints extends $tea.Model {
  timestamp?: number;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectStepMetricResponseBodyDataMetrics extends $tea.Model {
  dataPoints?: DescribeProjectStepMetricResponseBodyDataMetricsDataPoints[];
  name?: string;
  tags?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      dataPoints: 'DataPoints',
      name: 'Name',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPoints: { 'type': 'array', 'itemType': DescribeProjectStepMetricResponseBodyDataMetricsDataPoints },
      name: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectStepMetricResponseBodyData extends $tea.Model {
  aggregator?: string;
  metrics?: DescribeProjectStepMetricResponseBodyDataMetrics[];
  referenceValue?: number;
  static names(): { [key: string]: string } {
    return {
      aggregator: 'Aggregator',
      metrics: 'Metrics',
      referenceValue: 'ReferenceValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregator: 'string',
      metrics: { 'type': 'array', 'itemType': DescribeProjectStepMetricResponseBodyDataMetrics },
      referenceValue: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectStepMetricResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectStepsResponseBodyDataExtraInfoErrorDetails extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectStepsResponseBodyDataExtraInfo extends $tea.Model {
  errorCode?: string;
  errorDetails?: DescribeProjectStepsResponseBodyDataExtraInfoErrorDetails[];
  errorMsg?: string;
  errorParam?: { [key: string]: string };
  failedTime?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorDetails: 'ErrorDetails',
      errorMsg: 'ErrorMsg',
      errorParam: 'ErrorParam',
      failedTime: 'FailedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorDetails: { 'type': 'array', 'itemType': DescribeProjectStepsResponseBodyDataExtraInfoErrorDetails },
      errorMsg: 'string',
      errorParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      failedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectStepsResponseBodyData extends $tea.Model {
  description?: string;
  extraInfo?: DescribeProjectStepsResponseBodyDataExtraInfo;
  finishTime?: string;
  name?: string;
  order?: number;
  progress?: number;
  startTime?: string;
  status?: string;
  stepInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      extraInfo: 'ExtraInfo',
      finishTime: 'FinishTime',
      name: 'Name',
      order: 'Order',
      progress: 'Progress',
      startTime: 'StartTime',
      status: 'Status',
      stepInfo: 'StepInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      extraInfo: DescribeProjectStepsResponseBodyDataExtraInfo,
      finishTime: 'string',
      name: 'string',
      order: 'number',
      progress: 'number',
      startTime: 'string',
      status: 'string',
      stepInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectStepsResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecommendIndexResponseBodyRecommendIndex extends $tea.Model {
  suggestIndex?: string;
  tableList?: string;
  tenantMode?: string;
  static names(): { [key: string]: string } {
    return {
      suggestIndex: 'SuggestIndex',
      tableList: 'TableList',
      tenantMode: 'TenantMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suggestIndex: 'string',
      tableList: 'string',
      tenantMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLDetailsResponseBodySQLDetails extends $tea.Model {
  dbName?: string;
  SQLText?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      SQLText: 'SQLText',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      SQLText: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLHistoryListResponseBodySQLHistoryListList extends $tea.Model {
  affectedRows?: number;
  appWaitTime?: number;
  blockCacheHit?: number;
  blockIndexCacheHit?: number;
  bloomFilterCacheHit?: number;
  clientIp?: string;
  concurrencyWaitTime?: number;
  cpuTime?: number;
  dbName?: string;
  decodeTime?: number;
  diskRead?: number;
  elapsedTime?: number;
  endTime?: number;
  endTimeUTCString?: string;
  event?: string;
  execPerSecond?: number;
  executeTime?: number;
  executions?: number;
  failTimes?: number;
  getPlanTime?: number;
  IOWaitTime?: number;
  logicalRead?: number;
  maxCpuTime?: number;
  maxElapsedTime?: number;
  memstoreReadRowCount?: number;
  missPlans?: number;
  netWaitTime?: number;
  nodeIp?: string;
  queueTime?: number;
  RPCCount?: number;
  remotePlans?: number;
  retryCount?: number;
  returnRows?: number;
  rowCacheHit?: number;
  scheduleTime?: number;
  ssstoreReadRowCount?: number;
  totalWaitTime?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      affectedRows: 'AffectedRows',
      appWaitTime: 'AppWaitTime',
      blockCacheHit: 'BlockCacheHit',
      blockIndexCacheHit: 'BlockIndexCacheHit',
      bloomFilterCacheHit: 'BloomFilterCacheHit',
      clientIp: 'ClientIp',
      concurrencyWaitTime: 'ConcurrencyWaitTime',
      cpuTime: 'CpuTime',
      dbName: 'DbName',
      decodeTime: 'DecodeTime',
      diskRead: 'DiskRead',
      elapsedTime: 'ElapsedTime',
      endTime: 'EndTime',
      endTimeUTCString: 'EndTimeUTCString',
      event: 'Event',
      execPerSecond: 'ExecPerSecond',
      executeTime: 'ExecuteTime',
      executions: 'Executions',
      failTimes: 'FailTimes',
      getPlanTime: 'GetPlanTime',
      IOWaitTime: 'IOWaitTime',
      logicalRead: 'LogicalRead',
      maxCpuTime: 'MaxCpuTime',
      maxElapsedTime: 'MaxElapsedTime',
      memstoreReadRowCount: 'MemstoreReadRowCount',
      missPlans: 'MissPlans',
      netWaitTime: 'NetWaitTime',
      nodeIp: 'NodeIp',
      queueTime: 'QueueTime',
      RPCCount: 'RPCCount',
      remotePlans: 'RemotePlans',
      retryCount: 'RetryCount',
      returnRows: 'ReturnRows',
      rowCacheHit: 'RowCacheHit',
      scheduleTime: 'ScheduleTime',
      ssstoreReadRowCount: 'SsstoreReadRowCount',
      totalWaitTime: 'TotalWaitTime',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedRows: 'number',
      appWaitTime: 'number',
      blockCacheHit: 'number',
      blockIndexCacheHit: 'number',
      bloomFilterCacheHit: 'number',
      clientIp: 'string',
      concurrencyWaitTime: 'number',
      cpuTime: 'number',
      dbName: 'string',
      decodeTime: 'number',
      diskRead: 'number',
      elapsedTime: 'number',
      endTime: 'number',
      endTimeUTCString: 'string',
      event: 'string',
      execPerSecond: 'number',
      executeTime: 'number',
      executions: 'number',
      failTimes: 'number',
      getPlanTime: 'number',
      IOWaitTime: 'number',
      logicalRead: 'number',
      maxCpuTime: 'number',
      maxElapsedTime: 'number',
      memstoreReadRowCount: 'number',
      missPlans: 'number',
      netWaitTime: 'number',
      nodeIp: 'string',
      queueTime: 'number',
      RPCCount: 'number',
      remotePlans: 'number',
      retryCount: 'number',
      returnRows: 'number',
      rowCacheHit: 'number',
      scheduleTime: 'number',
      ssstoreReadRowCount: 'number',
      totalWaitTime: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLHistoryListResponseBodySQLHistoryList extends $tea.Model {
  count?: number;
  list?: DescribeSQLHistoryListResponseBodySQLHistoryListList[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      list: { 'type': 'array', 'itemType': DescribeSQLHistoryListResponseBodySQLHistoryListList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPlansResponseBodySQLPlans extends $tea.Model {
  avgExecutionMS?: number;
  avgExecutionTimeMS?: number;
  firstLoadTime?: number;
  firstLoadTimeUTCString?: string;
  hitCount?: number;
  mergedVersion?: number;
  nodeIp?: string;
  outlineData?: string;
  outlineId?: number;
  outlineTime?: number;
  outlineTimeUTCString?: string;
  planFull?: string;
  planId?: number;
  planInfo?: string;
  planUnionHash?: string;
  querySQL?: string;
  static names(): { [key: string]: string } {
    return {
      avgExecutionMS: 'AvgExecutionMS',
      avgExecutionTimeMS: 'AvgExecutionTimeMS',
      firstLoadTime: 'FirstLoadTime',
      firstLoadTimeUTCString: 'FirstLoadTimeUTCString',
      hitCount: 'HitCount',
      mergedVersion: 'MergedVersion',
      nodeIp: 'NodeIp',
      outlineData: 'OutlineData',
      outlineId: 'OutlineId',
      outlineTime: 'OutlineTime',
      outlineTimeUTCString: 'OutlineTimeUTCString',
      planFull: 'PlanFull',
      planId: 'PlanId',
      planInfo: 'PlanInfo',
      planUnionHash: 'PlanUnionHash',
      querySQL: 'QuerySQL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgExecutionMS: 'number',
      avgExecutionTimeMS: 'number',
      firstLoadTime: 'number',
      firstLoadTimeUTCString: 'string',
      hitCount: 'number',
      mergedVersion: 'number',
      nodeIp: 'string',
      outlineData: 'string',
      outlineId: 'number',
      outlineTime: 'number',
      outlineTimeUTCString: 'string',
      planFull: 'string',
      planId: 'number',
      planInfo: 'string',
      planUnionHash: 'string',
      querySQL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLSamplesResponseBodyData extends $tea.Model {
  affectedRows?: number;
  applicationWaitTime?: number;
  blockCacheHit?: number;
  blockIndexCacheHit?: number;
  bloomFilterCacheHit?: number;
  clientIp?: string;
  clientPort?: string;
  concurrencyWaitTime?: number;
  consistencyLevel?: string;
  cpuTime?: number;
  dbName?: string;
  decodeTime?: number;
  diskReads?: number;
  elapsedTime?: number;
  executeTime?: number;
  executorRpc?: boolean;
  expectedWorkerCount?: number;
  fullSqlText?: string;
  getPlanTime?: number;
  hitPlan?: boolean;
  inner?: boolean;
  memstoreReadRows?: number;
  netTime?: number;
  netWaitTime?: number;
  obDbId?: number;
  obServerId?: number;
  obUserId?: number;
  partitionCount?: number;
  planId?: number;
  planType?: string;
  queueTime?: number;
  requestId?: string;
  requestTime?: string;
  retCode?: number;
  retryCount?: number;
  returnRows?: number;
  rowCacheHit?: number;
  rpcCount?: number;
  scheduleTime?: number;
  server?: string;
  sqlText?: string;
  sqlType?: string;
  ssstoreReadRows?: number;
  statement?: string;
  tableScan?: boolean;
  traceId?: string;
  transHash?: string;
  usedWorkerCount?: number;
  userIoWaitTime?: number;
  userName?: string;
  waitCount?: number;
  waitEvent?: string;
  waitTime?: number;
  static names(): { [key: string]: string } {
    return {
      affectedRows: 'AffectedRows',
      applicationWaitTime: 'ApplicationWaitTime',
      blockCacheHit: 'BlockCacheHit',
      blockIndexCacheHit: 'BlockIndexCacheHit',
      bloomFilterCacheHit: 'BloomFilterCacheHit',
      clientIp: 'ClientIp',
      clientPort: 'ClientPort',
      concurrencyWaitTime: 'ConcurrencyWaitTime',
      consistencyLevel: 'ConsistencyLevel',
      cpuTime: 'CpuTime',
      dbName: 'DbName',
      decodeTime: 'DecodeTime',
      diskReads: 'DiskReads',
      elapsedTime: 'ElapsedTime',
      executeTime: 'ExecuteTime',
      executorRpc: 'ExecutorRpc',
      expectedWorkerCount: 'ExpectedWorkerCount',
      fullSqlText: 'FullSqlText',
      getPlanTime: 'GetPlanTime',
      hitPlan: 'HitPlan',
      inner: 'Inner',
      memstoreReadRows: 'MemstoreReadRows',
      netTime: 'NetTime',
      netWaitTime: 'NetWaitTime',
      obDbId: 'ObDbId',
      obServerId: 'ObServerId',
      obUserId: 'ObUserId',
      partitionCount: 'PartitionCount',
      planId: 'PlanId',
      planType: 'PlanType',
      queueTime: 'QueueTime',
      requestId: 'RequestId',
      requestTime: 'RequestTime',
      retCode: 'RetCode',
      retryCount: 'RetryCount',
      returnRows: 'ReturnRows',
      rowCacheHit: 'RowCacheHit',
      rpcCount: 'RpcCount',
      scheduleTime: 'ScheduleTime',
      server: 'Server',
      sqlText: 'SqlText',
      sqlType: 'SqlType',
      ssstoreReadRows: 'SsstoreReadRows',
      statement: 'Statement',
      tableScan: 'TableScan',
      traceId: 'TraceId',
      transHash: 'TransHash',
      usedWorkerCount: 'UsedWorkerCount',
      userIoWaitTime: 'UserIoWaitTime',
      userName: 'UserName',
      waitCount: 'WaitCount',
      waitEvent: 'WaitEvent',
      waitTime: 'WaitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedRows: 'number',
      applicationWaitTime: 'number',
      blockCacheHit: 'number',
      blockIndexCacheHit: 'number',
      bloomFilterCacheHit: 'number',
      clientIp: 'string',
      clientPort: 'string',
      concurrencyWaitTime: 'number',
      consistencyLevel: 'string',
      cpuTime: 'number',
      dbName: 'string',
      decodeTime: 'number',
      diskReads: 'number',
      elapsedTime: 'number',
      executeTime: 'number',
      executorRpc: 'boolean',
      expectedWorkerCount: 'number',
      fullSqlText: 'string',
      getPlanTime: 'number',
      hitPlan: 'boolean',
      inner: 'boolean',
      memstoreReadRows: 'number',
      netTime: 'number',
      netWaitTime: 'number',
      obDbId: 'number',
      obServerId: 'number',
      obUserId: 'number',
      partitionCount: 'number',
      planId: 'number',
      planType: 'string',
      queueTime: 'number',
      requestId: 'string',
      requestTime: 'string',
      retCode: 'number',
      retryCount: 'number',
      returnRows: 'number',
      rowCacheHit: 'number',
      rpcCount: 'number',
      scheduleTime: 'number',
      server: 'string',
      sqlText: 'string',
      sqlType: 'string',
      ssstoreReadRows: 'number',
      statement: 'string',
      tableScan: 'boolean',
      traceId: 'string',
      transHash: 'string',
      usedWorkerCount: 'number',
      userIoWaitTime: 'number',
      userName: 'string',
      waitCount: 'number',
      waitEvent: 'string',
      waitTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSampleSqlRawTextsResponseBodyData extends $tea.Model {
  sqlText?: string[];
  static names(): { [key: string]: string } {
    return {
      sqlText: 'SqlText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sqlText: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityIpGroupsResponseBodySecurityIpGroups extends $tea.Model {
  securityIpGroupName?: string;
  securityIps?: string;
  static names(): { [key: string]: string } {
    return {
      securityIpGroupName: 'SecurityIpGroupName',
      securityIps: 'SecurityIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIpGroupName: 'string',
      securityIps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSessionListResponseBodyData extends $tea.Model {
  host?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowSQLHistoryListResponseBodySlowSQLHistoryListList extends $tea.Model {
  affectedRows?: number;
  appWaitTime?: number;
  blockCacheHit?: number;
  blockIndexCacheHit?: number;
  bloomFilterCacheHit?: number;
  clientIp?: string;
  concurrencyWaitTime?: number;
  cpuTime?: number;
  dbName?: string;
  decodeTime?: number;
  diskRead?: number;
  elapsedTime?: number;
  endTimeUTCString?: string;
  event?: string;
  execPerSecond?: number;
  executeTime?: number;
  executions?: number;
  failTimes?: number;
  getPlanTime?: number;
  IOWaitTime?: number;
  logicalRead?: number;
  maxCpuTime?: number;
  maxElapsedTime?: number;
  memstoreReadRowCount?: number;
  missPlans?: number;
  netWaitTime?: number;
  nodeIp?: string;
  queueTime?: number;
  RPCCount?: number;
  remotePlans?: number;
  retryCount?: number;
  returnRows?: number;
  rowCacheHit?: number;
  scheduleTime?: number;
  sqlId?: string;
  sqlType?: string;
  ssstoreReadRowCount?: number;
  tenantName?: string;
  totalWaitTime?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      affectedRows: 'AffectedRows',
      appWaitTime: 'AppWaitTime',
      blockCacheHit: 'BlockCacheHit',
      blockIndexCacheHit: 'BlockIndexCacheHit',
      bloomFilterCacheHit: 'BloomFilterCacheHit',
      clientIp: 'ClientIp',
      concurrencyWaitTime: 'ConcurrencyWaitTime',
      cpuTime: 'CpuTime',
      dbName: 'DbName',
      decodeTime: 'DecodeTime',
      diskRead: 'DiskRead',
      elapsedTime: 'ElapsedTime',
      endTimeUTCString: 'EndTimeUTCString',
      event: 'Event',
      execPerSecond: 'ExecPerSecond',
      executeTime: 'ExecuteTime',
      executions: 'Executions',
      failTimes: 'FailTimes',
      getPlanTime: 'GetPlanTime',
      IOWaitTime: 'IOWaitTime',
      logicalRead: 'LogicalRead',
      maxCpuTime: 'MaxCpuTime',
      maxElapsedTime: 'MaxElapsedTime',
      memstoreReadRowCount: 'MemstoreReadRowCount',
      missPlans: 'MissPlans',
      netWaitTime: 'NetWaitTime',
      nodeIp: 'NodeIp',
      queueTime: 'QueueTime',
      RPCCount: 'RPCCount',
      remotePlans: 'RemotePlans',
      retryCount: 'RetryCount',
      returnRows: 'ReturnRows',
      rowCacheHit: 'RowCacheHit',
      scheduleTime: 'ScheduleTime',
      sqlId: 'SqlId',
      sqlType: 'SqlType',
      ssstoreReadRowCount: 'SsstoreReadRowCount',
      tenantName: 'TenantName',
      totalWaitTime: 'TotalWaitTime',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedRows: 'number',
      appWaitTime: 'number',
      blockCacheHit: 'number',
      blockIndexCacheHit: 'number',
      bloomFilterCacheHit: 'number',
      clientIp: 'string',
      concurrencyWaitTime: 'number',
      cpuTime: 'number',
      dbName: 'string',
      decodeTime: 'number',
      diskRead: 'number',
      elapsedTime: 'number',
      endTimeUTCString: 'string',
      event: 'string',
      execPerSecond: 'number',
      executeTime: 'number',
      executions: 'number',
      failTimes: 'number',
      getPlanTime: 'number',
      IOWaitTime: 'number',
      logicalRead: 'number',
      maxCpuTime: 'number',
      maxElapsedTime: 'number',
      memstoreReadRowCount: 'number',
      missPlans: 'number',
      netWaitTime: 'number',
      nodeIp: 'string',
      queueTime: 'number',
      RPCCount: 'number',
      remotePlans: 'number',
      retryCount: 'number',
      returnRows: 'number',
      rowCacheHit: 'number',
      scheduleTime: 'number',
      sqlId: 'string',
      sqlType: 'string',
      ssstoreReadRowCount: 'number',
      tenantName: 'string',
      totalWaitTime: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowSQLHistoryListResponseBodySlowSQLHistoryList extends $tea.Model {
  count?: number;
  list?: DescribeSlowSQLHistoryListResponseBodySlowSQLHistoryListList[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      list: { 'type': 'array', 'itemType': DescribeSlowSQLHistoryListResponseBodySlowSQLHistoryListList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowSQLListResponseBodySlowSQLList extends $tea.Model {
  affectedRows?: number;
  appWaitTime?: number;
  blockCacheHit?: number;
  blockIndexCacheHit?: number;
  bloomFilterCacheHit?: number;
  clientIp?: string;
  concurrencyWaitTime?: number;
  cpuTime?: number;
  dbName?: string;
  decodeTime?: number;
  diskRead?: number;
  elapsedTime?: number;
  event?: string;
  execPerSecond?: number;
  executeTime?: number;
  executions?: number;
  failTimes?: number;
  getPlanTime?: number;
  IOWaitTime?: number;
  key?: number;
  logicalRead?: number;
  maxCpuTime?: number;
  maxElapsedTime?: number;
  memstoreReadRowCount?: number;
  missPlans?: number;
  netWaitTime?: number;
  nodeIp?: string;
  queueTime?: number;
  RPCCount?: number;
  remotePlans?: number;
  retryCount?: number;
  returnRows?: number;
  rowCacheHit?: number;
  SQLId?: string;
  SQLText?: string;
  SQLType?: number;
  scheduleTime?: number;
  ssstoreReadRowCount?: number;
  totalWaitTime?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      affectedRows: 'AffectedRows',
      appWaitTime: 'AppWaitTime',
      blockCacheHit: 'BlockCacheHit',
      blockIndexCacheHit: 'BlockIndexCacheHit',
      bloomFilterCacheHit: 'BloomFilterCacheHit',
      clientIp: 'ClientIp',
      concurrencyWaitTime: 'ConcurrencyWaitTime',
      cpuTime: 'CpuTime',
      dbName: 'DbName',
      decodeTime: 'DecodeTime',
      diskRead: 'DiskRead',
      elapsedTime: 'ElapsedTime',
      event: 'Event',
      execPerSecond: 'ExecPerSecond',
      executeTime: 'ExecuteTime',
      executions: 'Executions',
      failTimes: 'FailTimes',
      getPlanTime: 'GetPlanTime',
      IOWaitTime: 'IOWaitTime',
      key: 'Key',
      logicalRead: 'LogicalRead',
      maxCpuTime: 'MaxCpuTime',
      maxElapsedTime: 'MaxElapsedTime',
      memstoreReadRowCount: 'MemstoreReadRowCount',
      missPlans: 'MissPlans',
      netWaitTime: 'NetWaitTime',
      nodeIp: 'NodeIp',
      queueTime: 'QueueTime',
      RPCCount: 'RPCCount',
      remotePlans: 'RemotePlans',
      retryCount: 'RetryCount',
      returnRows: 'ReturnRows',
      rowCacheHit: 'RowCacheHit',
      SQLId: 'SQLId',
      SQLText: 'SQLText',
      SQLType: 'SQLType',
      scheduleTime: 'ScheduleTime',
      ssstoreReadRowCount: 'SsstoreReadRowCount',
      totalWaitTime: 'TotalWaitTime',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedRows: 'number',
      appWaitTime: 'number',
      blockCacheHit: 'number',
      blockIndexCacheHit: 'number',
      bloomFilterCacheHit: 'number',
      clientIp: 'string',
      concurrencyWaitTime: 'number',
      cpuTime: 'number',
      dbName: 'string',
      decodeTime: 'number',
      diskRead: 'number',
      elapsedTime: 'number',
      event: 'string',
      execPerSecond: 'number',
      executeTime: 'number',
      executions: 'number',
      failTimes: 'number',
      getPlanTime: 'number',
      IOWaitTime: 'number',
      key: 'number',
      logicalRead: 'number',
      maxCpuTime: 'number',
      maxElapsedTime: 'number',
      memstoreReadRowCount: 'number',
      missPlans: 'number',
      netWaitTime: 'number',
      nodeIp: 'string',
      queueTime: 'number',
      RPCCount: 'number',
      remotePlans: 'number',
      retryCount: 'number',
      returnRows: 'number',
      rowCacheHit: 'number',
      SQLId: 'string',
      SQLText: 'string',
      SQLType: 'number',
      scheduleTime: 'number',
      ssstoreReadRowCount: 'number',
      totalWaitTime: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantResponseBodyTenantReadOnlyResourceCapacityUnit extends $tea.Model {
  maxCapacityUnit?: number;
  minCapacityUnit?: number;
  usedCapacit?: number;
  static names(): { [key: string]: string } {
    return {
      maxCapacityUnit: 'MaxCapacityUnit',
      minCapacityUnit: 'MinCapacityUnit',
      usedCapacit: 'UsedCapacit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCapacityUnit: 'number',
      minCapacityUnit: 'number',
      usedCapacit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantResponseBodyTenantReadOnlyResourceCpu extends $tea.Model {
  totalCpu?: number;
  unitCpu?: number;
  usedCpu?: number;
  static names(): { [key: string]: string } {
    return {
      totalCpu: 'TotalCpu',
      unitCpu: 'UnitCpu',
      usedCpu: 'UsedCpu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCpu: 'number',
      unitCpu: 'number',
      usedCpu: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantResponseBodyTenantReadOnlyResourceDiskSize extends $tea.Model {
  usedDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      usedDiskSize: 'UsedDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usedDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantResponseBodyTenantReadOnlyResourceLogDiskSize extends $tea.Model {
  totalLogDisk?: number;
  unitLogDisk?: number;
  static names(): { [key: string]: string } {
    return {
      totalLogDisk: 'TotalLogDisk',
      unitLogDisk: 'UnitLogDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalLogDisk: 'number',
      unitLogDisk: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantResponseBodyTenantReadOnlyResourceMemory extends $tea.Model {
  totalMemory?: number;
  unitMemory?: number;
  usedMemory?: number;
  static names(): { [key: string]: string } {
    return {
      totalMemory: 'TotalMemory',
      unitMemory: 'UnitMemory',
      usedMemory: 'UsedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalMemory: 'number',
      unitMemory: 'number',
      usedMemory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantResponseBodyTenantReadOnlyResource extends $tea.Model {
  capacityUnit?: DescribeTenantResponseBodyTenantReadOnlyResourceCapacityUnit;
  cpu?: DescribeTenantResponseBodyTenantReadOnlyResourceCpu;
  diskSize?: DescribeTenantResponseBodyTenantReadOnlyResourceDiskSize;
  logDiskSize?: DescribeTenantResponseBodyTenantReadOnlyResourceLogDiskSize;
  memory?: DescribeTenantResponseBodyTenantReadOnlyResourceMemory;
  unitNum?: number;
  static names(): { [key: string]: string } {
    return {
      capacityUnit: 'CapacityUnit',
      cpu: 'Cpu',
      diskSize: 'DiskSize',
      logDiskSize: 'LogDiskSize',
      memory: 'Memory',
      unitNum: 'UnitNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityUnit: DescribeTenantResponseBodyTenantReadOnlyResourceCapacityUnit,
      cpu: DescribeTenantResponseBodyTenantReadOnlyResourceCpu,
      diskSize: DescribeTenantResponseBodyTenantReadOnlyResourceDiskSize,
      logDiskSize: DescribeTenantResponseBodyTenantReadOnlyResourceLogDiskSize,
      memory: DescribeTenantResponseBodyTenantReadOnlyResourceMemory,
      unitNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantResponseBodyTenantTenantConnections extends $tea.Model {
  addressType?: string;
  connectionLogicalZones?: string[];
  connectionReplicaType?: string;
  connectionZones?: string[];
  enableTransactionSplit?: boolean;
  internetAddress?: string;
  internetAddressStatus?: string;
  internetMaxConnectionLimit?: number;
  internetMaxConnectionNum?: number;
  internetPort?: number;
  internetRpcPort?: number;
  intranetAddress?: string;
  intranetAddressMasterZoneId?: string;
  intranetAddressSlaveZoneId?: string;
  intranetAddressStatus?: string;
  intranetPort?: number;
  intranetRpcPort?: number;
  maxConnectionLimit?: number;
  maxConnectionNum?: number;
  parallelQueryDegree?: number;
  proxyClusterId?: string;
  tenantEndpointId?: string;
  transactionSplit?: boolean;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      connectionLogicalZones: 'ConnectionLogicalZones',
      connectionReplicaType: 'ConnectionReplicaType',
      connectionZones: 'ConnectionZones',
      enableTransactionSplit: 'EnableTransactionSplit',
      internetAddress: 'InternetAddress',
      internetAddressStatus: 'InternetAddressStatus',
      internetMaxConnectionLimit: 'InternetMaxConnectionLimit',
      internetMaxConnectionNum: 'InternetMaxConnectionNum',
      internetPort: 'InternetPort',
      internetRpcPort: 'InternetRpcPort',
      intranetAddress: 'IntranetAddress',
      intranetAddressMasterZoneId: 'IntranetAddressMasterZoneId',
      intranetAddressSlaveZoneId: 'IntranetAddressSlaveZoneId',
      intranetAddressStatus: 'IntranetAddressStatus',
      intranetPort: 'IntranetPort',
      intranetRpcPort: 'IntranetRpcPort',
      maxConnectionLimit: 'MaxConnectionLimit',
      maxConnectionNum: 'MaxConnectionNum',
      parallelQueryDegree: 'ParallelQueryDegree',
      proxyClusterId: 'ProxyClusterId',
      tenantEndpointId: 'TenantEndpointId',
      transactionSplit: 'TransactionSplit',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      connectionLogicalZones: { 'type': 'array', 'itemType': 'string' },
      connectionReplicaType: 'string',
      connectionZones: { 'type': 'array', 'itemType': 'string' },
      enableTransactionSplit: 'boolean',
      internetAddress: 'string',
      internetAddressStatus: 'string',
      internetMaxConnectionLimit: 'number',
      internetMaxConnectionNum: 'number',
      internetPort: 'number',
      internetRpcPort: 'number',
      intranetAddress: 'string',
      intranetAddressMasterZoneId: 'string',
      intranetAddressSlaveZoneId: 'string',
      intranetAddressStatus: 'string',
      intranetPort: 'number',
      intranetRpcPort: 'number',
      maxConnectionLimit: 'number',
      maxConnectionNum: 'number',
      parallelQueryDegree: 'number',
      proxyClusterId: 'string',
      tenantEndpointId: 'string',
      transactionSplit: 'boolean',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantResponseBodyTenantTenantResourceCapacityUnit extends $tea.Model {
  maxCapacityUnit?: number;
  minCapacityUnit?: number;
  usedCapacit?: number;
  static names(): { [key: string]: string } {
    return {
      maxCapacityUnit: 'MaxCapacityUnit',
      minCapacityUnit: 'MinCapacityUnit',
      usedCapacit: 'UsedCapacit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCapacityUnit: 'number',
      minCapacityUnit: 'number',
      usedCapacit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantResponseBodyTenantTenantResourceCpu extends $tea.Model {
  totalCpu?: number;
  unitCpu?: number;
  usedCpu?: number;
  static names(): { [key: string]: string } {
    return {
      totalCpu: 'TotalCpu',
      unitCpu: 'UnitCpu',
      usedCpu: 'UsedCpu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCpu: 'number',
      unitCpu: 'number',
      usedCpu: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantResponseBodyTenantTenantResourceDiskSize extends $tea.Model {
  usedDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      usedDiskSize: 'UsedDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usedDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantResponseBodyTenantTenantResourceLogDiskSize extends $tea.Model {
  totalLogDisk?: number;
  unitLogDisk?: number;
  static names(): { [key: string]: string } {
    return {
      totalLogDisk: 'TotalLogDisk',
      unitLogDisk: 'UnitLogDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalLogDisk: 'number',
      unitLogDisk: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantResponseBodyTenantTenantResourceMemory extends $tea.Model {
  totalMemory?: number;
  unitMemory?: number;
  usedMemory?: number;
  static names(): { [key: string]: string } {
    return {
      totalMemory: 'TotalMemory',
      unitMemory: 'UnitMemory',
      usedMemory: 'UsedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalMemory: 'number',
      unitMemory: 'number',
      usedMemory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantResponseBodyTenantTenantResource extends $tea.Model {
  capacityUnit?: DescribeTenantResponseBodyTenantTenantResourceCapacityUnit;
  cpu?: DescribeTenantResponseBodyTenantTenantResourceCpu;
  diskSize?: DescribeTenantResponseBodyTenantTenantResourceDiskSize;
  logDiskSize?: DescribeTenantResponseBodyTenantTenantResourceLogDiskSize;
  memory?: DescribeTenantResponseBodyTenantTenantResourceMemory;
  unitNum?: number;
  static names(): { [key: string]: string } {
    return {
      capacityUnit: 'CapacityUnit',
      cpu: 'Cpu',
      diskSize: 'DiskSize',
      logDiskSize: 'LogDiskSize',
      memory: 'Memory',
      unitNum: 'UnitNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityUnit: DescribeTenantResponseBodyTenantTenantResourceCapacityUnit,
      cpu: DescribeTenantResponseBodyTenantTenantResourceCpu,
      diskSize: DescribeTenantResponseBodyTenantTenantResourceDiskSize,
      logDiskSize: DescribeTenantResponseBodyTenantTenantResourceLogDiskSize,
      memory: DescribeTenantResponseBodyTenantTenantResourceMemory,
      unitNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantResponseBodyTenantTenantZonesTenantZoneReplicas extends $tea.Model {
  fullCopyId?: number;
  logicZoneName?: string;
  readOnlyCopyId?: string;
  zoneCopyId?: number;
  zoneNodes?: string;
  zoneReplicaType?: string;
  static names(): { [key: string]: string } {
    return {
      fullCopyId: 'FullCopyId',
      logicZoneName: 'LogicZoneName',
      readOnlyCopyId: 'ReadOnlyCopyId',
      zoneCopyId: 'ZoneCopyId',
      zoneNodes: 'ZoneNodes',
      zoneReplicaType: 'ZoneReplicaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullCopyId: 'number',
      logicZoneName: 'string',
      readOnlyCopyId: 'string',
      zoneCopyId: 'number',
      zoneNodes: 'string',
      zoneReplicaType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantResponseBodyTenantTenantZones extends $tea.Model {
  region?: string;
  tenantZoneId?: string;
  tenantZoneReplicas?: DescribeTenantResponseBodyTenantTenantZonesTenantZoneReplicas[];
  tenantZoneRole?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      tenantZoneId: 'TenantZoneId',
      tenantZoneReplicas: 'TenantZoneReplicas',
      tenantZoneRole: 'TenantZoneRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      tenantZoneId: 'string',
      tenantZoneReplicas: { 'type': 'array', 'itemType': DescribeTenantResponseBodyTenantTenantZonesTenantZoneReplicas },
      tenantZoneRole: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantResponseBodyTenant extends $tea.Model {
  availableZones?: string[];
  charset?: string;
  clogServiceStatus?: string;
  collation?: string;
  createTime?: string;
  dataMergeTime?: string;
  deployMode?: string;
  deployType?: string;
  description?: string;
  diskType?: string;
  enableBinlogService?: boolean;
  enableClogService?: boolean;
  enableInternetAddressService?: boolean;
  enableParallelQuery?: boolean;
  enableReadOnlyReplica?: boolean;
  enableReadWriteSplit?: boolean;
  instanceType?: string;
  lowerCaseTableNames?: Buffer;
  masterIntranetAddressZone?: string;
  maxParallelQueryDegree?: number;
  payType?: string;
  primaryZone?: string;
  primaryZoneDeployType?: string;
  readOnlyResource?: DescribeTenantResponseBodyTenantReadOnlyResource;
  recycleBinStatus?: string;
  series?: string;
  status?: string;
  tenantConnections?: DescribeTenantResponseBodyTenantTenantConnections[];
  tenantId?: string;
  tenantMode?: string;
  tenantName?: string;
  tenantResource?: DescribeTenantResponseBodyTenantTenantResource;
  tenantZones?: DescribeTenantResponseBodyTenantTenantZones[];
  timeZone?: string;
  version?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      availableZones: 'AvailableZones',
      charset: 'Charset',
      clogServiceStatus: 'ClogServiceStatus',
      collation: 'Collation',
      createTime: 'CreateTime',
      dataMergeTime: 'DataMergeTime',
      deployMode: 'DeployMode',
      deployType: 'DeployType',
      description: 'Description',
      diskType: 'DiskType',
      enableBinlogService: 'EnableBinlogService',
      enableClogService: 'EnableClogService',
      enableInternetAddressService: 'EnableInternetAddressService',
      enableParallelQuery: 'EnableParallelQuery',
      enableReadOnlyReplica: 'EnableReadOnlyReplica',
      enableReadWriteSplit: 'EnableReadWriteSplit',
      instanceType: 'InstanceType',
      lowerCaseTableNames: 'LowerCaseTableNames',
      masterIntranetAddressZone: 'MasterIntranetAddressZone',
      maxParallelQueryDegree: 'MaxParallelQueryDegree',
      payType: 'PayType',
      primaryZone: 'PrimaryZone',
      primaryZoneDeployType: 'PrimaryZoneDeployType',
      readOnlyResource: 'ReadOnlyResource',
      recycleBinStatus: 'RecycleBinStatus',
      series: 'Series',
      status: 'Status',
      tenantConnections: 'TenantConnections',
      tenantId: 'TenantId',
      tenantMode: 'TenantMode',
      tenantName: 'TenantName',
      tenantResource: 'TenantResource',
      tenantZones: 'TenantZones',
      timeZone: 'TimeZone',
      version: 'Version',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZones: { 'type': 'array', 'itemType': 'string' },
      charset: 'string',
      clogServiceStatus: 'string',
      collation: 'string',
      createTime: 'string',
      dataMergeTime: 'string',
      deployMode: 'string',
      deployType: 'string',
      description: 'string',
      diskType: 'string',
      enableBinlogService: 'boolean',
      enableClogService: 'boolean',
      enableInternetAddressService: 'boolean',
      enableParallelQuery: 'boolean',
      enableReadOnlyReplica: 'boolean',
      enableReadWriteSplit: 'boolean',
      instanceType: 'string',
      lowerCaseTableNames: 'Buffer',
      masterIntranetAddressZone: 'string',
      maxParallelQueryDegree: 'number',
      payType: 'string',
      primaryZone: 'string',
      primaryZoneDeployType: 'string',
      readOnlyResource: DescribeTenantResponseBodyTenantReadOnlyResource,
      recycleBinStatus: 'string',
      series: 'string',
      status: 'string',
      tenantConnections: { 'type': 'array', 'itemType': DescribeTenantResponseBodyTenantTenantConnections },
      tenantId: 'string',
      tenantMode: 'string',
      tenantName: 'string',
      tenantResource: DescribeTenantResponseBodyTenantTenantResource,
      tenantZones: { 'type': 'array', 'itemType': DescribeTenantResponseBodyTenantTenantZones },
      timeZone: 'string',
      version: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantEncryptionResponseBodyTenantEncryptions extends $tea.Model {
  enableEncryption?: boolean;
  encryptionKeyId?: string;
  encryptionType?: string;
  status?: string;
  tenantId?: string;
  tenantMode?: string;
  tenantName?: string;
  tenantStatus?: string;
  static names(): { [key: string]: string } {
    return {
      enableEncryption: 'EnableEncryption',
      encryptionKeyId: 'EncryptionKeyId',
      encryptionType: 'EncryptionType',
      status: 'Status',
      tenantId: 'TenantId',
      tenantMode: 'TenantMode',
      tenantName: 'TenantName',
      tenantStatus: 'TenantStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableEncryption: 'boolean',
      encryptionKeyId: 'string',
      encryptionType: 'string',
      status: 'string',
      tenantId: 'string',
      tenantMode: 'string',
      tenantName: 'string',
      tenantStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantReadableScnResponseBodyData extends $tea.Model {
  readableScn?: number;
  static names(): { [key: string]: string } {
    return {
      readableScn: 'ReadableScn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readableScn: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantSecurityConfigsResponseBodyConfigsTenantSecurityConfigsSecurityConfigs extends $tea.Model {
  configDescription?: string;
  configGroup?: string;
  configName?: string;
  risk?: boolean;
  riskDescription?: string;
  static names(): { [key: string]: string } {
    return {
      configDescription: 'ConfigDescription',
      configGroup: 'ConfigGroup',
      configName: 'ConfigName',
      risk: 'Risk',
      riskDescription: 'RiskDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configDescription: 'string',
      configGroup: 'string',
      configName: 'string',
      risk: 'boolean',
      riskDescription: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantSecurityConfigsResponseBodyConfigsTenantSecurityConfigs extends $tea.Model {
  riskCount?: number;
  securityConfigs?: DescribeTenantSecurityConfigsResponseBodyConfigsTenantSecurityConfigsSecurityConfigs[];
  tenantId?: string;
  tenantName?: string;
  static names(): { [key: string]: string } {
    return {
      riskCount: 'RiskCount',
      securityConfigs: 'SecurityConfigs',
      tenantId: 'TenantId',
      tenantName: 'TenantName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskCount: 'number',
      securityConfigs: { 'type': 'array', 'itemType': DescribeTenantSecurityConfigsResponseBodyConfigsTenantSecurityConfigsSecurityConfigs },
      tenantId: 'string',
      tenantName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantSecurityConfigsResponseBodyConfigs extends $tea.Model {
  checkId?: string;
  checkTime?: string;
  instanceId?: string;
  tenantSecurityConfigs?: DescribeTenantSecurityConfigsResponseBodyConfigsTenantSecurityConfigs[];
  totalCheckCount?: number;
  totalRiskCount?: number;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      checkTime: 'CheckTime',
      instanceId: 'InstanceId',
      tenantSecurityConfigs: 'TenantSecurityConfigs',
      totalCheckCount: 'TotalCheckCount',
      totalRiskCount: 'TotalRiskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      checkTime: 'string',
      instanceId: 'string',
      tenantSecurityConfigs: { 'type': 'array', 'itemType': DescribeTenantSecurityConfigsResponseBodyConfigsTenantSecurityConfigs },
      totalCheckCount: 'number',
      totalRiskCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantSecurityIpGroupsResponseBodySecurityIpGroups extends $tea.Model {
  securityIpGroupName?: string;
  securityIpGroupType?: string;
  securityIps?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      securityIpGroupName: 'SecurityIpGroupName',
      securityIpGroupType: 'SecurityIpGroupType',
      securityIps: 'SecurityIps',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIpGroupName: 'string',
      securityIpGroupType: 'string',
      securityIps: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantTagsResponseBodyTagResources extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantUsersResponseBodyTenantUsersDatabases extends $tea.Model {
  database?: string;
  privileges?: string;
  role?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      privileges: 'Privileges',
      role: 'Role',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      privileges: 'string',
      role: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantUsersResponseBodyTenantUsers extends $tea.Model {
  databases?: DescribeTenantUsersResponseBodyTenantUsersDatabases[];
  description?: string;
  instanceId?: string;
  tenantId?: string;
  userName?: string;
  userStatus?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      description: 'Description',
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
      userName: 'UserName',
      userStatus: 'UserStatus',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': DescribeTenantUsersResponseBodyTenantUsersDatabases },
      description: 'string',
      instanceId: 'string',
      tenantId: 'string',
      userName: 'string',
      userStatus: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantZonesReadResponseBodyTenantZones extends $tea.Model {
  isElectable?: boolean;
  isPrimary?: boolean;
  isReadable?: string;
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      isElectable: 'IsElectable',
      isPrimary: 'IsPrimary',
      isReadable: 'IsReadable',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isElectable: 'boolean',
      isPrimary: 'boolean',
      isReadable: 'string',
      zone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantsResponseBodyTenants extends $tea.Model {
  charset?: string;
  collation?: string;
  cpu?: number;
  createTime?: string;
  deployMode?: string;
  deployType?: string;
  description?: string;
  enableReadOnlyReplica?: boolean;
  mem?: number;
  primaryZone?: string;
  status?: string;
  tenantId?: string;
  tenantMode?: string;
  tenantName?: string;
  unitCpu?: number;
  unitMem?: number;
  unitNum?: number;
  usedDiskSize?: number;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      charset: 'Charset',
      collation: 'Collation',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      deployMode: 'DeployMode',
      deployType: 'DeployType',
      description: 'Description',
      enableReadOnlyReplica: 'EnableReadOnlyReplica',
      mem: 'Mem',
      primaryZone: 'PrimaryZone',
      status: 'Status',
      tenantId: 'TenantId',
      tenantMode: 'TenantMode',
      tenantName: 'TenantName',
      unitCpu: 'UnitCpu',
      unitMem: 'UnitMem',
      unitNum: 'UnitNum',
      usedDiskSize: 'UsedDiskSize',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charset: 'string',
      collation: 'string',
      cpu: 'number',
      createTime: 'string',
      deployMode: 'string',
      deployType: 'string',
      description: 'string',
      enableReadOnlyReplica: 'boolean',
      mem: 'number',
      primaryZone: 'string',
      status: 'string',
      tenantId: 'string',
      tenantMode: 'string',
      tenantName: 'string',
      unitCpu: 'number',
      unitMem: 'number',
      unitNum: 'number',
      usedDiskSize: 'number',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTimeZonesResponseBodyTimeZonesList extends $tea.Model {
  description?: string;
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      timeZone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTimeZonesResponseBodyTimeZones extends $tea.Model {
  default?: string;
  list?: DescribeTimeZonesResponseBodyTimeZonesList[];
  static names(): { [key: string]: string } {
    return {
      default: 'Default',
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      default: 'string',
      list: { 'type': 'array', 'itemType': DescribeTimeZonesResponseBodyTimeZonesList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopSQLListResponseBodyTopSQLList extends $tea.Model {
  affectedRows?: number;
  appWaitTime?: number;
  blockCacheHit?: number;
  blockIndexCacheHit?: number;
  bloomFilterCacheHit?: number;
  clientIp?: string;
  concurrencyWaitTime?: number;
  cpuTime?: number;
  dbName?: string;
  decodeTime?: number;
  diskRead?: number;
  elapsedTime?: number;
  event?: string;
  execPerSecond?: number;
  executeTime?: number;
  executions?: number;
  failTimes?: number;
  getPlanTime?: number;
  IOWaitTime?: number;
  key?: number;
  logicalRead?: number;
  maxCpuTime?: number;
  maxElapsedTime?: number;
  memstoreReadRowCount?: number;
  missPlans?: number;
  netWaitTime?: number;
  nodeIp?: string;
  queueTime?: number;
  RPCCount?: number;
  remotePlans?: number;
  retryCount?: number;
  returnRows?: number;
  rowCacheHit?: number;
  SQLId?: string;
  SQLText?: string;
  SQLType?: number;
  scheduleTime?: number;
  ssstoreReadRowCount?: number;
  totalWaitTime?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      affectedRows: 'AffectedRows',
      appWaitTime: 'AppWaitTime',
      blockCacheHit: 'BlockCacheHit',
      blockIndexCacheHit: 'BlockIndexCacheHit',
      bloomFilterCacheHit: 'BloomFilterCacheHit',
      clientIp: 'ClientIp',
      concurrencyWaitTime: 'ConcurrencyWaitTime',
      cpuTime: 'CpuTime',
      dbName: 'DbName',
      decodeTime: 'DecodeTime',
      diskRead: 'DiskRead',
      elapsedTime: 'ElapsedTime',
      event: 'Event',
      execPerSecond: 'ExecPerSecond',
      executeTime: 'ExecuteTime',
      executions: 'Executions',
      failTimes: 'FailTimes',
      getPlanTime: 'GetPlanTime',
      IOWaitTime: 'IOWaitTime',
      key: 'Key',
      logicalRead: 'LogicalRead',
      maxCpuTime: 'MaxCpuTime',
      maxElapsedTime: 'MaxElapsedTime',
      memstoreReadRowCount: 'MemstoreReadRowCount',
      missPlans: 'MissPlans',
      netWaitTime: 'NetWaitTime',
      nodeIp: 'NodeIp',
      queueTime: 'QueueTime',
      RPCCount: 'RPCCount',
      remotePlans: 'RemotePlans',
      retryCount: 'RetryCount',
      returnRows: 'ReturnRows',
      rowCacheHit: 'RowCacheHit',
      SQLId: 'SQLId',
      SQLText: 'SQLText',
      SQLType: 'SQLType',
      scheduleTime: 'ScheduleTime',
      ssstoreReadRowCount: 'SsstoreReadRowCount',
      totalWaitTime: 'TotalWaitTime',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedRows: 'number',
      appWaitTime: 'number',
      blockCacheHit: 'number',
      blockIndexCacheHit: 'number',
      bloomFilterCacheHit: 'number',
      clientIp: 'string',
      concurrencyWaitTime: 'number',
      cpuTime: 'number',
      dbName: 'string',
      decodeTime: 'number',
      diskRead: 'number',
      elapsedTime: 'number',
      event: 'string',
      execPerSecond: 'number',
      executeTime: 'number',
      executions: 'number',
      failTimes: 'number',
      getPlanTime: 'number',
      IOWaitTime: 'number',
      key: 'number',
      logicalRead: 'number',
      maxCpuTime: 'number',
      maxElapsedTime: 'number',
      memstoreReadRowCount: 'number',
      missPlans: 'number',
      netWaitTime: 'number',
      nodeIp: 'string',
      queueTime: 'number',
      RPCCount: 'number',
      remotePlans: 'number',
      retryCount: 'number',
      returnRows: 'number',
      rowCacheHit: 'number',
      SQLId: 'string',
      SQLText: 'string',
      SQLType: 'number',
      scheduleTime: 'number',
      ssstoreReadRowCount: 'number',
      totalWaitTime: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZones extends $tea.Model {
  deployType?: string;
  series?: string;
  zoneId?: string;
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      deployType: 'DeployType',
      series: 'Series',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployType: 'string',
      series: 'string',
      zoneId: 'string',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadOssUrlResponseBodyData extends $tea.Model {
  expectedExpirationTime?: string;
  ossKey?: string;
  ossUrl?: string;
  static names(): { [key: string]: string } {
    return {
      expectedExpirationTime: 'ExpectedExpirationTime',
      ossKey: 'OssKey',
      ossUrl: 'OssUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expectedExpirationTime: 'string',
      ossKey: 'string',
      ossUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadOssUrlResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillProcessListResponseBodyData extends $tea.Model {
  clientIp?: string;
  command?: string;
  database?: string;
  errorMessage?: string;
  executeTime?: string;
  serverIp?: string;
  sessionId?: number;
  sqlText?: string;
  status?: string;
  tenantId?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      command: 'Command',
      database: 'Database',
      errorMessage: 'ErrorMessage',
      executeTime: 'ExecuteTime',
      serverIp: 'ServerIp',
      sessionId: 'SessionId',
      sqlText: 'SqlText',
      status: 'Status',
      tenantId: 'TenantId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      command: 'string',
      database: 'string',
      errorMessage: 'string',
      executeTime: 'string',
      serverIp: 'string',
      sessionId: 'number',
      sqlText: 'string',
      status: 'string',
      tenantId: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllLabelsResponseBodyData extends $tea.Model {
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllLabelsResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceResponseBodyData extends $tea.Model {
  charset?: string;
  cluster?: string;
  connExtraAttributes?: any;
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: string;
  ip?: string;
  name?: string;
  operatingSystem?: string;
  oracleNlsLengthSemantics?: string;
  oracleSid?: string;
  owner?: string;
  partnerId?: string;
  port?: number;
  region?: string;
  resourceOwner?: string;
  role?: string;
  schema?: string;
  tenant?: string;
  timezone?: string;
  type?: string;
  userName?: string;
  version?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      charset: 'Charset',
      cluster: 'Cluster',
      connExtraAttributes: 'ConnExtraAttributes',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      ip: 'Ip',
      name: 'Name',
      operatingSystem: 'OperatingSystem',
      oracleNlsLengthSemantics: 'OracleNlsLengthSemantics',
      oracleSid: 'OracleSid',
      owner: 'Owner',
      partnerId: 'PartnerId',
      port: 'Port',
      region: 'Region',
      resourceOwner: 'ResourceOwner',
      role: 'Role',
      schema: 'Schema',
      tenant: 'Tenant',
      timezone: 'Timezone',
      type: 'Type',
      userName: 'UserName',
      version: 'Version',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charset: 'string',
      cluster: 'string',
      connExtraAttributes: 'any',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'string',
      ip: 'string',
      name: 'string',
      operatingSystem: 'string',
      oracleNlsLengthSemantics: 'string',
      oracleSid: 'string',
      owner: 'string',
      partnerId: 'string',
      port: 'number',
      region: 'string',
      resourceOwner: 'string',
      role: 'string',
      schema: 'string',
      tenant: 'string',
      timezone: 'string',
      type: 'string',
      userName: 'string',
      version: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourceResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectFullVerifyResultResponseBodyDataFullVerifyTableStatisticsErrorDetails extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectFullVerifyResultResponseBodyDataFullVerifyTableStatistics extends $tea.Model {
  consistentCount?: number;
  destOnlyCount?: number;
  destSchemaName?: string;
  errorDetails?: ListProjectFullVerifyResultResponseBodyDataFullVerifyTableStatisticsErrorDetails[];
  message?: string;
  mismatchedCount?: number;
  progress?: string;
  resultDesc?: string;
  resultType?: string;
  sourceOnlyCount?: number;
  sourceSchemaName?: string;
  sourceTableName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      consistentCount: 'ConsistentCount',
      destOnlyCount: 'DestOnlyCount',
      destSchemaName: 'DestSchemaName',
      errorDetails: 'ErrorDetails',
      message: 'Message',
      mismatchedCount: 'MismatchedCount',
      progress: 'Progress',
      resultDesc: 'ResultDesc',
      resultType: 'ResultType',
      sourceOnlyCount: 'SourceOnlyCount',
      sourceSchemaName: 'SourceSchemaName',
      sourceTableName: 'SourceTableName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistentCount: 'number',
      destOnlyCount: 'number',
      destSchemaName: 'string',
      errorDetails: { 'type': 'array', 'itemType': ListProjectFullVerifyResultResponseBodyDataFullVerifyTableStatisticsErrorDetails },
      message: 'string',
      mismatchedCount: 'number',
      progress: 'string',
      resultDesc: 'string',
      resultType: 'string',
      sourceOnlyCount: 'number',
      sourceSchemaName: 'string',
      sourceTableName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectFullVerifyResultResponseBodyData extends $tea.Model {
  differentNumber?: number;
  fullVerifyTableStatistics?: ListProjectFullVerifyResultResponseBodyDataFullVerifyTableStatistics[];
  static names(): { [key: string]: string } {
    return {
      differentNumber: 'DifferentNumber',
      fullVerifyTableStatistics: 'FullVerifyTableStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      differentNumber: 'number',
      fullVerifyTableStatistics: { 'type': 'array', 'itemType': ListProjectFullVerifyResultResponseBodyDataFullVerifyTableStatistics },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectFullVerifyResultResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsResponseBodyDataDatabasesSpecificTablesAdbTableSchema extends $tea.Model {
  distributedKeys?: string[];
  partitionLifeCycle?: number;
  partitionStatement?: string;
  primaryKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      distributedKeys: 'DistributedKeys',
      partitionLifeCycle: 'PartitionLifeCycle',
      partitionStatement: 'PartitionStatement',
      primaryKeys: 'PrimaryKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributedKeys: { 'type': 'array', 'itemType': 'string' },
      partitionLifeCycle: 'number',
      partitionStatement: 'string',
      primaryKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsResponseBodyDataDatabasesSpecificTablesColumns extends $tea.Model {
  columnComment?: string;
  columnKey?: string;
  columnName?: string;
  columnType?: string;
  dataLength?: number;
  dataPrecision?: number;
  dataScale?: number;
  defaultValue?: string;
  encoding?: string;
  isGenerateField?: boolean;
  mappedName?: string;
  nullable?: boolean;
  position?: number;
  rawColumnType?: string;
  recordFieldType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      columnComment: 'ColumnComment',
      columnKey: 'ColumnKey',
      columnName: 'ColumnName',
      columnType: 'ColumnType',
      dataLength: 'DataLength',
      dataPrecision: 'DataPrecision',
      dataScale: 'DataScale',
      defaultValue: 'DefaultValue',
      encoding: 'Encoding',
      isGenerateField: 'IsGenerateField',
      mappedName: 'MappedName',
      nullable: 'Nullable',
      position: 'Position',
      rawColumnType: 'RawColumnType',
      recordFieldType: 'RecordFieldType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnComment: 'string',
      columnKey: 'string',
      columnName: 'string',
      columnType: 'string',
      dataLength: 'number',
      dataPrecision: 'number',
      dataScale: 'number',
      defaultValue: 'string',
      encoding: 'string',
      isGenerateField: 'boolean',
      mappedName: 'string',
      nullable: 'boolean',
      position: 'number',
      rawColumnType: 'string',
      recordFieldType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsResponseBodyDataDatabasesSpecificTables extends $tea.Model {
  adbTableSchema?: ListProjectModifyRecordsResponseBodyDataDatabasesSpecificTablesAdbTableSchema;
  columns?: ListProjectModifyRecordsResponseBodyDataDatabasesSpecificTablesColumns[];
  filterColumns?: string[];
  id?: string;
  mappedName?: string;
  name?: string;
  shardColumns?: string[];
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      adbTableSchema: 'AdbTableSchema',
      columns: 'Columns',
      filterColumns: 'FilterColumns',
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      shardColumns: 'ShardColumns',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbTableSchema: ListProjectModifyRecordsResponseBodyDataDatabasesSpecificTablesAdbTableSchema,
      columns: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataDatabasesSpecificTablesColumns },
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      mappedName: 'string',
      name: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      whereClause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsResponseBodyDataDatabasesSpecificViewsAdbTableSchema extends $tea.Model {
  distributedKeys?: string[];
  partitionLifeCycle?: number;
  partitionStatement?: string;
  primaryKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      distributedKeys: 'DistributedKeys',
      partitionLifeCycle: 'PartitionLifeCycle',
      partitionStatement: 'PartitionStatement',
      primaryKeys: 'PrimaryKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributedKeys: { 'type': 'array', 'itemType': 'string' },
      partitionLifeCycle: 'number',
      partitionStatement: 'string',
      primaryKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsResponseBodyDataDatabasesSpecificViewsColumns extends $tea.Model {
  columnComment?: string;
  columnKey?: string;
  columnName?: string;
  columnType?: string;
  dataLength?: number;
  dataPrecision?: number;
  dataScale?: number;
  defaultValue?: string;
  encoding?: string;
  isGenerateField?: boolean;
  mappedName?: string;
  nullable?: boolean;
  position?: number;
  rawColumnType?: string;
  recordFieldType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      columnComment: 'ColumnComment',
      columnKey: 'ColumnKey',
      columnName: 'ColumnName',
      columnType: 'ColumnType',
      dataLength: 'DataLength',
      dataPrecision: 'DataPrecision',
      dataScale: 'DataScale',
      defaultValue: 'DefaultValue',
      encoding: 'Encoding',
      isGenerateField: 'IsGenerateField',
      mappedName: 'MappedName',
      nullable: 'Nullable',
      position: 'Position',
      rawColumnType: 'RawColumnType',
      recordFieldType: 'RecordFieldType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnComment: 'string',
      columnKey: 'string',
      columnName: 'string',
      columnType: 'string',
      dataLength: 'number',
      dataPrecision: 'number',
      dataScale: 'number',
      defaultValue: 'string',
      encoding: 'string',
      isGenerateField: 'boolean',
      mappedName: 'string',
      nullable: 'boolean',
      position: 'number',
      rawColumnType: 'string',
      recordFieldType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsResponseBodyDataDatabasesSpecificViews extends $tea.Model {
  adbTableSchema?: ListProjectModifyRecordsResponseBodyDataDatabasesSpecificViewsAdbTableSchema;
  columns?: ListProjectModifyRecordsResponseBodyDataDatabasesSpecificViewsColumns[];
  filterColumns?: string[];
  id?: string;
  mappedName?: string;
  name?: string;
  shardColumns?: string[];
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      adbTableSchema: 'AdbTableSchema',
      columns: 'Columns',
      filterColumns: 'FilterColumns',
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      shardColumns: 'ShardColumns',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbTableSchema: ListProjectModifyRecordsResponseBodyDataDatabasesSpecificViewsAdbTableSchema,
      columns: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataDatabasesSpecificViewsColumns },
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      mappedName: 'string',
      name: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      whereClause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsResponseBodyDataDatabasesTablesAdbTableSchema extends $tea.Model {
  distributedKeys?: string[];
  partitionLifeCycle?: number;
  partitionStatement?: string;
  primaryKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      distributedKeys: 'DistributedKeys',
      partitionLifeCycle: 'PartitionLifeCycle',
      partitionStatement: 'PartitionStatement',
      primaryKeys: 'PrimaryKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributedKeys: { 'type': 'array', 'itemType': 'string' },
      partitionLifeCycle: 'number',
      partitionStatement: 'string',
      primaryKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsResponseBodyDataDatabasesTablesColumns extends $tea.Model {
  columnComment?: string;
  columnKey?: string;
  columnName?: string;
  columnType?: string;
  dataLength?: number;
  dataPrecision?: number;
  dataScale?: number;
  defaultValue?: string;
  encoding?: string;
  isGenerateField?: boolean;
  mappedName?: string;
  nullable?: boolean;
  position?: number;
  rawColumnType?: string;
  recordFieldType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      columnComment: 'ColumnComment',
      columnKey: 'ColumnKey',
      columnName: 'ColumnName',
      columnType: 'ColumnType',
      dataLength: 'DataLength',
      dataPrecision: 'DataPrecision',
      dataScale: 'DataScale',
      defaultValue: 'DefaultValue',
      encoding: 'Encoding',
      isGenerateField: 'IsGenerateField',
      mappedName: 'MappedName',
      nullable: 'Nullable',
      position: 'Position',
      rawColumnType: 'RawColumnType',
      recordFieldType: 'RecordFieldType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnComment: 'string',
      columnKey: 'string',
      columnName: 'string',
      columnType: 'string',
      dataLength: 'number',
      dataPrecision: 'number',
      dataScale: 'number',
      defaultValue: 'string',
      encoding: 'string',
      isGenerateField: 'boolean',
      mappedName: 'string',
      nullable: 'boolean',
      position: 'number',
      rawColumnType: 'string',
      recordFieldType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsResponseBodyDataDatabasesTables extends $tea.Model {
  adbTableSchema?: ListProjectModifyRecordsResponseBodyDataDatabasesTablesAdbTableSchema;
  columns?: ListProjectModifyRecordsResponseBodyDataDatabasesTablesColumns[];
  filterColumns?: string[];
  id?: string;
  mappedName?: string;
  name?: string;
  shardColumns?: string[];
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      adbTableSchema: 'AdbTableSchema',
      columns: 'Columns',
      filterColumns: 'FilterColumns',
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      shardColumns: 'ShardColumns',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbTableSchema: ListProjectModifyRecordsResponseBodyDataDatabasesTablesAdbTableSchema,
      columns: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataDatabasesTablesColumns },
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      mappedName: 'string',
      name: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      whereClause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsResponseBodyDataDatabasesViewsAdbTableSchema extends $tea.Model {
  distributedKeys?: string[];
  partitionLifeCycle?: number;
  partitionStatement?: string;
  primaryKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      distributedKeys: 'DistributedKeys',
      partitionLifeCycle: 'PartitionLifeCycle',
      partitionStatement: 'PartitionStatement',
      primaryKeys: 'PrimaryKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributedKeys: { 'type': 'array', 'itemType': 'string' },
      partitionLifeCycle: 'number',
      partitionStatement: 'string',
      primaryKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsResponseBodyDataDatabasesViewsColumns extends $tea.Model {
  columnComment?: string;
  columnKey?: string;
  columnName?: string;
  columnType?: string;
  dataLength?: number;
  dataPrecision?: number;
  dataScale?: number;
  defaultValue?: string;
  encoding?: string;
  isGenerateField?: boolean;
  mappedName?: string;
  nullable?: boolean;
  position?: number;
  rawColumnType?: string;
  recordFieldType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      columnComment: 'ColumnComment',
      columnKey: 'ColumnKey',
      columnName: 'ColumnName',
      columnType: 'ColumnType',
      dataLength: 'DataLength',
      dataPrecision: 'DataPrecision',
      dataScale: 'DataScale',
      defaultValue: 'DefaultValue',
      encoding: 'Encoding',
      isGenerateField: 'IsGenerateField',
      mappedName: 'MappedName',
      nullable: 'Nullable',
      position: 'Position',
      rawColumnType: 'RawColumnType',
      recordFieldType: 'RecordFieldType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnComment: 'string',
      columnKey: 'string',
      columnName: 'string',
      columnType: 'string',
      dataLength: 'number',
      dataPrecision: 'number',
      dataScale: 'number',
      defaultValue: 'string',
      encoding: 'string',
      isGenerateField: 'boolean',
      mappedName: 'string',
      nullable: 'boolean',
      position: 'number',
      rawColumnType: 'string',
      recordFieldType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsResponseBodyDataDatabasesViews extends $tea.Model {
  adbTableSchema?: ListProjectModifyRecordsResponseBodyDataDatabasesViewsAdbTableSchema;
  columns?: ListProjectModifyRecordsResponseBodyDataDatabasesViewsColumns[];
  filterColumns?: string[];
  id?: string;
  mappedName?: string;
  name?: string;
  shardColumns?: string[];
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      adbTableSchema: 'AdbTableSchema',
      columns: 'Columns',
      filterColumns: 'FilterColumns',
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      shardColumns: 'ShardColumns',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbTableSchema: ListProjectModifyRecordsResponseBodyDataDatabasesViewsAdbTableSchema,
      columns: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataDatabasesViewsColumns },
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      mappedName: 'string',
      name: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      whereClause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsResponseBodyDataDatabases extends $tea.Model {
  id?: string;
  mappedName?: string;
  name?: string;
  specificTables?: ListProjectModifyRecordsResponseBodyDataDatabasesSpecificTables[];
  specificViews?: ListProjectModifyRecordsResponseBodyDataDatabasesSpecificViews[];
  tables?: ListProjectModifyRecordsResponseBodyDataDatabasesTables[];
  views?: ListProjectModifyRecordsResponseBodyDataDatabasesViews[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      specificTables: 'SpecificTables',
      specificViews: 'SpecificViews',
      tables: 'Tables',
      views: 'Views',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      mappedName: 'string',
      name: 'string',
      specificTables: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataDatabasesSpecificTables },
      specificViews: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataDatabasesSpecificViews },
      tables: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataDatabasesTables },
      views: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataDatabasesViews },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsResponseBodyDataErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfoTables extends $tea.Model {
  name?: string;
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      schema: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfoTablesBlack extends $tea.Model {
  name?: string;
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      schema: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfoViews extends $tea.Model {
  name?: string;
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      schema: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfoViewsBlack extends $tea.Model {
  name?: string;
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      schema: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfo extends $tea.Model {
  tables?: ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfoTables[];
  tablesBlack?: ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfoTablesBlack[];
  views?: ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfoViews[];
  viewsBlack?: ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfoViewsBlack[];
  wildcardMode?: boolean;
  static names(): { [key: string]: string } {
    return {
      tables: 'Tables',
      tablesBlack: 'TablesBlack',
      views: 'Views',
      viewsBlack: 'ViewsBlack',
      wildcardMode: 'WildcardMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tables: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfoTables },
      tablesBlack: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfoTablesBlack },
      views: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfoViews },
      viewsBlack: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfoViewsBlack },
      wildcardMode: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoColumnMappings extends $tea.Model {
  destName?: string;
  sourceName?: string;
  sourceSchema?: string;
  sourceTable?: string;
  static names(): { [key: string]: string } {
    return {
      destName: 'DestName',
      sourceName: 'SourceName',
      sourceSchema: 'SourceSchema',
      sourceTable: 'SourceTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destName: 'string',
      sourceName: 'string',
      sourceSchema: 'string',
      sourceTable: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoSchemaMappings extends $tea.Model {
  destName?: string;
  sourceName?: string;
  static names(): { [key: string]: string } {
    return {
      destName: 'DestName',
      sourceName: 'SourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destName: 'string',
      sourceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoTableMappings extends $tea.Model {
  destName?: string;
  sourceName?: string;
  sourceSchema?: string;
  static names(): { [key: string]: string } {
    return {
      destName: 'DestName',
      sourceName: 'SourceName',
      sourceSchema: 'SourceSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destName: 'string',
      sourceName: 'string',
      sourceSchema: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoViewMappings extends $tea.Model {
  destName?: string;
  sourceName?: string;
  sourceSchema?: string;
  static names(): { [key: string]: string } {
    return {
      destName: 'DestName',
      sourceName: 'SourceName',
      sourceSchema: 'SourceSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destName: 'string',
      sourceName: 'string',
      sourceSchema: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfo extends $tea.Model {
  columnMappings?: ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoColumnMappings[];
  schemaMappings?: ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoSchemaMappings[];
  tableMappings?: ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoTableMappings[];
  viewMappings?: ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoViewMappings[];
  static names(): { [key: string]: string } {
    return {
      columnMappings: 'ColumnMappings',
      schemaMappings: 'SchemaMappings',
      tableMappings: 'TableMappings',
      viewMappings: 'ViewMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnMappings: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoColumnMappings },
      schemaMappings: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoSchemaMappings },
      tableMappings: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoTableMappings },
      viewMappings: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoViewMappings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsResponseBodyDataTableEtlList extends $tea.Model {
  database?: string;
  destDatabase?: string;
  destName?: string;
  filterColumns?: string[];
  logicTableId?: string;
  shardColumns?: string[];
  sourceEndpointId?: string;
  tableName?: string;
  tenantName?: string;
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      destDatabase: 'DestDatabase',
      destName: 'DestName',
      filterColumns: 'FilterColumns',
      logicTableId: 'LogicTableId',
      shardColumns: 'ShardColumns',
      sourceEndpointId: 'SourceEndpointId',
      tableName: 'TableName',
      tenantName: 'TenantName',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      destDatabase: 'string',
      destName: 'string',
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      logicTableId: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      sourceEndpointId: 'string',
      tableName: 'string',
      tenantName: 'string',
      whereClause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsResponseBodyData extends $tea.Model {
  databases?: ListProjectModifyRecordsResponseBodyDataDatabases[];
  errorDetail?: ListProjectModifyRecordsResponseBodyDataErrorDetail;
  gmtModified?: string;
  id?: number;
  mergeRequestId?: number;
  migrationObjectsInfo?: ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfo;
  omsProjectMappingInfo?: ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfo;
  status?: string;
  subProjectId?: string;
  tableEtlList?: ListProjectModifyRecordsResponseBodyDataTableEtlList[];
  type?: string;
  updateRequestId?: number;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      errorDetail: 'ErrorDetail',
      gmtModified: 'GmtModified',
      id: 'Id',
      mergeRequestId: 'MergeRequestId',
      migrationObjectsInfo: 'MigrationObjectsInfo',
      omsProjectMappingInfo: 'OmsProjectMappingInfo',
      status: 'Status',
      subProjectId: 'SubProjectId',
      tableEtlList: 'TableEtlList',
      type: 'Type',
      updateRequestId: 'UpdateRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataDatabases },
      errorDetail: ListProjectModifyRecordsResponseBodyDataErrorDetail,
      gmtModified: 'string',
      id: 'number',
      mergeRequestId: 'number',
      migrationObjectsInfo: ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfo,
      omsProjectMappingInfo: ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfo,
      status: 'string',
      subProjectId: 'string',
      tableEtlList: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataTableEtlList },
      type: 'string',
      updateRequestId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectModifyRecordsResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataAlarmStats extends $tea.Model {
  alarmContent?: string;
  alarming?: boolean;
  openMonitor?: boolean;
  recentlyTriggerCount?: number;
  ruleToRecentlyTriggerCount?: { [key: string]: number };
  target?: string;
  static names(): { [key: string]: string } {
    return {
      alarmContent: 'AlarmContent',
      alarming: 'Alarming',
      openMonitor: 'OpenMonitor',
      recentlyTriggerCount: 'RecentlyTriggerCount',
      ruleToRecentlyTriggerCount: 'RuleToRecentlyTriggerCount',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmContent: 'string',
      alarming: 'boolean',
      openMonitor: 'boolean',
      recentlyTriggerCount: 'number',
      ruleToRecentlyTriggerCount: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      target: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataCommonTransferConfig extends $tea.Model {
  activeActive?: boolean;
  dataWorksBusinessName?: string;
  datahubTopicType?: string;
  mqPartition?: number;
  mqPartitionMode?: string;
  mqSerializerType?: string;
  rocketMqEnableMsgTrace?: boolean;
  rocketMqMsgTags?: string;
  rocketMqProducerGroup?: string;
  rocketMqSendMsgTimeout?: number;
  tableCategory?: string;
  static names(): { [key: string]: string } {
    return {
      activeActive: 'ActiveActive',
      dataWorksBusinessName: 'DataWorksBusinessName',
      datahubTopicType: 'DatahubTopicType',
      mqPartition: 'MqPartition',
      mqPartitionMode: 'MqPartitionMode',
      mqSerializerType: 'MqSerializerType',
      rocketMqEnableMsgTrace: 'RocketMqEnableMsgTrace',
      rocketMqMsgTags: 'RocketMqMsgTags',
      rocketMqProducerGroup: 'RocketMqProducerGroup',
      rocketMqSendMsgTimeout: 'RocketMqSendMsgTimeout',
      tableCategory: 'TableCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeActive: 'boolean',
      dataWorksBusinessName: 'string',
      datahubTopicType: 'string',
      mqPartition: 'number',
      mqPartitionMode: 'string',
      mqSerializerType: 'string',
      rocketMqEnableMsgTrace: 'boolean',
      rocketMqMsgTags: 'string',
      rocketMqProducerGroup: 'string',
      rocketMqSendMsgTimeout: 'number',
      tableCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataExtraInfo extends $tea.Model {
  accessObSource?: boolean;
  ignoreUnsupportDdl?: boolean;
  incrSyncTimestamp?: number;
  logServiceStartCheckpoint?: number;
  maxConnectorCount?: number;
  monitoringIncr?: boolean;
  overwriteConfig?: boolean;
  reverseSubtopics?: string[];
  runningProgress?: number;
  runningStep?: string;
  sourceStoreKeptHour?: number;
  storeIncr?: boolean;
  subConds?: { [key: string]: DataExtraInfoSubCondsValue[] };
  subDbs?: { [key: string]: DataExtraInfoSubDbsValue[] };
  subIds?: { [key: string]: string };
  subtopics?: string[];
  syncDelay?: number;
  syncDelaySampleTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      accessObSource: 'AccessObSource',
      ignoreUnsupportDdl: 'IgnoreUnsupportDdl',
      incrSyncTimestamp: 'IncrSyncTimestamp',
      logServiceStartCheckpoint: 'LogServiceStartCheckpoint',
      maxConnectorCount: 'MaxConnectorCount',
      monitoringIncr: 'MonitoringIncr',
      overwriteConfig: 'OverwriteConfig',
      reverseSubtopics: 'ReverseSubtopics',
      runningProgress: 'RunningProgress',
      runningStep: 'RunningStep',
      sourceStoreKeptHour: 'SourceStoreKeptHour',
      storeIncr: 'StoreIncr',
      subConds: 'SubConds',
      subDbs: 'SubDbs',
      subIds: 'SubIds',
      subtopics: 'Subtopics',
      syncDelay: 'SyncDelay',
      syncDelaySampleTimestamp: 'SyncDelaySampleTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessObSource: 'boolean',
      ignoreUnsupportDdl: 'boolean',
      incrSyncTimestamp: 'number',
      logServiceStartCheckpoint: 'number',
      maxConnectorCount: 'number',
      monitoringIncr: 'boolean',
      overwriteConfig: 'boolean',
      reverseSubtopics: { 'type': 'array', 'itemType': 'string' },
      runningProgress: 'number',
      runningStep: 'string',
      sourceStoreKeptHour: 'number',
      storeIncr: 'boolean',
      subConds: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': DataExtraInfoSubCondsValue } },
      subDbs: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': DataExtraInfoSubDbsValue } },
      subIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      subtopics: { 'type': 'array', 'itemType': 'string' },
      syncDelay: 'number',
      syncDelaySampleTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataFullTransferConfig extends $tea.Model {
  allowDestTableNotEmpty?: boolean;
  fullTransferSpeedMode?: string;
  fullVerifySpeedMode?: string;
  nonePkUkTruncateDstTable?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowDestTableNotEmpty: 'AllowDestTableNotEmpty',
      fullTransferSpeedMode: 'FullTransferSpeedMode',
      fullVerifySpeedMode: 'FullVerifySpeedMode',
      nonePkUkTruncateDstTable: 'NonePkUkTruncateDstTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowDestTableNotEmpty: 'boolean',
      fullTransferSpeedMode: 'string',
      fullVerifySpeedMode: 'string',
      nonePkUkTruncateDstTable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataIncrTransferConfig extends $tea.Model {
  enableIncrSyncStatistics?: boolean;
  enableSequencingWithinTxn?: boolean;
  incrSyncConcurrency?: number;
  recordTypeWhiteList?: string[];
  startTimestamp?: number;
  storeLogKeptHour?: number;
  static names(): { [key: string]: string } {
    return {
      enableIncrSyncStatistics: 'EnableIncrSyncStatistics',
      enableSequencingWithinTxn: 'EnableSequencingWithinTxn',
      incrSyncConcurrency: 'IncrSyncConcurrency',
      recordTypeWhiteList: 'RecordTypeWhiteList',
      startTimestamp: 'StartTimestamp',
      storeLogKeptHour: 'StoreLogKeptHour',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableIncrSyncStatistics: 'boolean',
      enableSequencingWithinTxn: 'boolean',
      incrSyncConcurrency: 'number',
      recordTypeWhiteList: { 'type': 'array', 'itemType': 'string' },
      startTimestamp: 'number',
      storeLogKeptHour: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataLabels extends $tea.Model {
  count?: number;
  creator?: string;
  id?: string;
  name?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      creator: 'Creator',
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      creator: 'string',
      id: 'string',
      name: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataSinkConnectInfo extends $tea.Model {
  charset?: string;
  connExtraAttributes?: any;
  connectionInfo?: string;
  dbEngine?: string;
  endpointId?: string;
  endpointName?: string;
  endpointSide?: string;
  host?: string;
  id?: string;
  nlsLengthSemantics?: string;
  ocpName?: string;
  operatingSystem?: string;
  owner?: string;
  port?: number;
  region?: string;
  resourceOwner?: string;
  timezone?: string;
  username?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      charset: 'Charset',
      connExtraAttributes: 'ConnExtraAttributes',
      connectionInfo: 'ConnectionInfo',
      dbEngine: 'DbEngine',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      endpointSide: 'EndpointSide',
      host: 'Host',
      id: 'Id',
      nlsLengthSemantics: 'NlsLengthSemantics',
      ocpName: 'OcpName',
      operatingSystem: 'OperatingSystem',
      owner: 'Owner',
      port: 'Port',
      region: 'Region',
      resourceOwner: 'ResourceOwner',
      timezone: 'Timezone',
      username: 'Username',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charset: 'string',
      connExtraAttributes: 'any',
      connectionInfo: 'string',
      dbEngine: 'string',
      endpointId: 'string',
      endpointName: 'string',
      endpointSide: 'string',
      host: 'string',
      id: 'string',
      nlsLengthSemantics: 'string',
      ocpName: 'string',
      operatingSystem: 'string',
      owner: 'string',
      port: 'number',
      region: 'string',
      resourceOwner: 'string',
      timezone: 'string',
      username: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataSourceConnectInfo extends $tea.Model {
  charset?: string;
  connExtraAttributes?: any;
  connectionInfo?: string;
  dbEngine?: string;
  endpointId?: string;
  endpointName?: string;
  endpointSide?: string;
  host?: string;
  id?: string;
  nlsLengthSemantics?: string;
  ocpName?: string;
  operatingSystem?: string;
  owner?: string;
  port?: number;
  region?: string;
  resourceOwner?: string;
  timezone?: string;
  username?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      charset: 'Charset',
      connExtraAttributes: 'ConnExtraAttributes',
      connectionInfo: 'ConnectionInfo',
      dbEngine: 'DbEngine',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      endpointSide: 'EndpointSide',
      host: 'Host',
      id: 'Id',
      nlsLengthSemantics: 'NlsLengthSemantics',
      ocpName: 'OcpName',
      operatingSystem: 'OperatingSystem',
      owner: 'Owner',
      port: 'Port',
      region: 'Region',
      resourceOwner: 'ResourceOwner',
      timezone: 'Timezone',
      username: 'Username',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charset: 'string',
      connExtraAttributes: 'any',
      connectionInfo: 'string',
      dbEngine: 'string',
      endpointId: 'string',
      endpointName: 'string',
      endpointSide: 'string',
      host: 'string',
      id: 'string',
      nlsLengthSemantics: 'string',
      ocpName: 'string',
      operatingSystem: 'string',
      owner: 'string',
      port: 'number',
      region: 'string',
      resourceOwner: 'string',
      timezone: 'string',
      username: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataStepsExtraInfoErrorDetails extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataStepsExtraInfo extends $tea.Model {
  errorCode?: string;
  errorDetails?: ListProjectsResponseBodyDataStepsExtraInfoErrorDetails[];
  errorMsg?: string;
  errorParam?: { [key: string]: string };
  failedTime?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorDetails: 'ErrorDetails',
      errorMsg: 'ErrorMsg',
      errorParam: 'ErrorParam',
      failedTime: 'FailedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorDetails: { 'type': 'array', 'itemType': ListProjectsResponseBodyDataStepsExtraInfoErrorDetails },
      errorMsg: 'string',
      errorParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      failedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataSteps extends $tea.Model {
  description?: string;
  extraInfo?: ListProjectsResponseBodyDataStepsExtraInfo;
  finishTime?: string;
  name?: string;
  order?: number;
  progress?: number;
  startTime?: string;
  status?: string;
  stepInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      extraInfo: 'ExtraInfo',
      finishTime: 'FinishTime',
      name: 'Name',
      order: 'Order',
      progress: 'Progress',
      startTime: 'StartTime',
      status: 'Status',
      stepInfo: 'StepInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      extraInfo: ListProjectsResponseBodyDataStepsExtraInfo,
      finishTime: 'string',
      name: 'string',
      order: 'number',
      progress: 'number',
      startTime: 'string',
      status: 'string',
      stepInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataStructTransferConfig extends $tea.Model {
  byteCharConvertStrategy?: string;
  deferIndexCreation?: boolean;
  static names(): { [key: string]: string } {
    return {
      byteCharConvertStrategy: 'ByteCharConvertStrategy',
      deferIndexCreation: 'DeferIndexCreation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byteCharConvertStrategy: 'string',
      deferIndexCreation: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataTransferMapping extends $tea.Model {
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataWorkerGradeInfo extends $tea.Model {
  autoRenewal?: boolean;
  chargeType?: string;
  destRegion?: string;
  destType?: string;
  endTime?: string;
  expired?: boolean;
  gmtCreate?: string;
  grade?: string;
  id?: string;
  name?: string;
  sourceRegion?: string;
  sourceType?: string;
  spec?: string;
  specName?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      chargeType: 'ChargeType',
      destRegion: 'DestRegion',
      destType: 'DestType',
      endTime: 'EndTime',
      expired: 'Expired',
      gmtCreate: 'GmtCreate',
      grade: 'Grade',
      id: 'Id',
      name: 'Name',
      sourceRegion: 'SourceRegion',
      sourceType: 'SourceType',
      spec: 'Spec',
      specName: 'SpecName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'boolean',
      chargeType: 'string',
      destRegion: 'string',
      destType: 'string',
      endTime: 'string',
      expired: 'boolean',
      gmtCreate: 'string',
      grade: 'string',
      id: 'string',
      name: 'string',
      sourceRegion: 'string',
      sourceType: 'string',
      spec: 'string',
      specName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyData extends $tea.Model {
  alarmStats?: ListProjectsResponseBodyDataAlarmStats;
  commonTransferConfig?: ListProjectsResponseBodyDataCommonTransferConfig;
  destConnId?: string;
  enableFullTransfer?: boolean;
  enableFullVerify?: boolean;
  enableIncrTransfer?: boolean;
  enableIncrVerify?: boolean;
  enableReverseIncrTransfer?: boolean;
  enableStructTransfer?: boolean;
  extraInfo?: ListProjectsResponseBodyDataExtraInfo;
  fullTransferConfig?: ListProjectsResponseBodyDataFullTransferConfig;
  gmtCreate?: string;
  gmtFinish?: string;
  gmtModified?: string;
  gmtStart?: string;
  id?: string;
  importance?: string;
  incrTransferConfig?: ListProjectsResponseBodyDataIncrTransferConfig;
  isMerging?: boolean;
  isModifying?: boolean;
  isSubProject?: boolean;
  labels?: ListProjectsResponseBodyDataLabels[];
  name?: string;
  owner?: string;
  sinkConnectInfo?: ListProjectsResponseBodyDataSinkConnectInfo;
  sinkEndpointType?: string;
  sourceConnectInfo?: ListProjectsResponseBodyDataSourceConnectInfo;
  sourceEndpointType?: string;
  status?: string;
  steps?: ListProjectsResponseBodyDataSteps[];
  structTransferConfig?: ListProjectsResponseBodyDataStructTransferConfig;
  transferMapping?: ListProjectsResponseBodyDataTransferMapping;
  type?: string;
  workerGradeId?: string;
  workerGradeInfo?: ListProjectsResponseBodyDataWorkerGradeInfo;
  static names(): { [key: string]: string } {
    return {
      alarmStats: 'AlarmStats',
      commonTransferConfig: 'CommonTransferConfig',
      destConnId: 'DestConnId',
      enableFullTransfer: 'EnableFullTransfer',
      enableFullVerify: 'EnableFullVerify',
      enableIncrTransfer: 'EnableIncrTransfer',
      enableIncrVerify: 'EnableIncrVerify',
      enableReverseIncrTransfer: 'EnableReverseIncrTransfer',
      enableStructTransfer: 'EnableStructTransfer',
      extraInfo: 'ExtraInfo',
      fullTransferConfig: 'FullTransferConfig',
      gmtCreate: 'GmtCreate',
      gmtFinish: 'GmtFinish',
      gmtModified: 'GmtModified',
      gmtStart: 'GmtStart',
      id: 'Id',
      importance: 'Importance',
      incrTransferConfig: 'IncrTransferConfig',
      isMerging: 'IsMerging',
      isModifying: 'IsModifying',
      isSubProject: 'IsSubProject',
      labels: 'Labels',
      name: 'Name',
      owner: 'Owner',
      sinkConnectInfo: 'SinkConnectInfo',
      sinkEndpointType: 'SinkEndpointType',
      sourceConnectInfo: 'SourceConnectInfo',
      sourceEndpointType: 'SourceEndpointType',
      status: 'Status',
      steps: 'Steps',
      structTransferConfig: 'StructTransferConfig',
      transferMapping: 'TransferMapping',
      type: 'Type',
      workerGradeId: 'WorkerGradeId',
      workerGradeInfo: 'WorkerGradeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmStats: ListProjectsResponseBodyDataAlarmStats,
      commonTransferConfig: ListProjectsResponseBodyDataCommonTransferConfig,
      destConnId: 'string',
      enableFullTransfer: 'boolean',
      enableFullVerify: 'boolean',
      enableIncrTransfer: 'boolean',
      enableIncrVerify: 'boolean',
      enableReverseIncrTransfer: 'boolean',
      enableStructTransfer: 'boolean',
      extraInfo: ListProjectsResponseBodyDataExtraInfo,
      fullTransferConfig: ListProjectsResponseBodyDataFullTransferConfig,
      gmtCreate: 'string',
      gmtFinish: 'string',
      gmtModified: 'string',
      gmtStart: 'string',
      id: 'string',
      importance: 'string',
      incrTransferConfig: ListProjectsResponseBodyDataIncrTransferConfig,
      isMerging: 'boolean',
      isModifying: 'boolean',
      isSubProject: 'boolean',
      labels: { 'type': 'array', 'itemType': ListProjectsResponseBodyDataLabels },
      name: 'string',
      owner: 'string',
      sinkConnectInfo: ListProjectsResponseBodyDataSinkConnectInfo,
      sinkEndpointType: 'string',
      sourceConnectInfo: ListProjectsResponseBodyDataSourceConnectInfo,
      sourceEndpointType: 'string',
      status: 'string',
      steps: { 'type': 'array', 'itemType': ListProjectsResponseBodyDataSteps },
      structTransferConfig: ListProjectsResponseBodyDataStructTransferConfig,
      transferMapping: ListProjectsResponseBodyDataTransferMapping,
      type: 'string',
      workerGradeId: 'string',
      workerGradeInfo: ListProjectsResponseBodyDataWorkerGradeInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkerInstancesResponseBodyData extends $tea.Model {
  gmtCreate?: string;
  id?: string;
  name?: string;
  projectId?: string;
  projectName?: string;
  projectType?: string;
  region?: string;
  spec?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectType: 'ProjectType',
      region: 'Region',
      spec: 'Spec',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      id: 'string',
      name: 'string',
      projectId: 'string',
      projectName: 'string',
      projectType: 'string',
      region: 'string',
      spec: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkerInstancesResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatabaseUserRolesResponseBodyTenantUserUsers extends $tea.Model {
  role?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatabaseUserRolesResponseBodyTenantUser extends $tea.Model {
  databaseName?: string;
  tenantId?: string;
  users?: ModifyDatabaseUserRolesResponseBodyTenantUserUsers[];
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      tenantId: 'TenantId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      tenantId: 'string',
      users: { 'type': 'array', 'itemType': ModifyDatabaseUserRolesResponseBodyTenantUserUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceNodeNumResponseBodyData extends $tea.Model {
  dryRunResult?: boolean;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRunResult: 'DryRunResult',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRunResult: 'boolean',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceSSLResponseBodyInstanceSSL extends $tea.Model {
  enableSSL?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      enableSSL: 'EnableSSL',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableSSL: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceSpecResponseBodyData extends $tea.Model {
  dryRunResult?: boolean;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRunResult: 'DryRunResult',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRunResult: 'boolean',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyParametersResponseBodyResults extends $tea.Model {
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

export class ModifySecurityIpsResponseBodySecurityIpGroup extends $tea.Model {
  instanceId?: string;
  securityIpGroupName?: string;
  securityIps?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      securityIpGroupName: 'SecurityIpGroupName',
      securityIps: 'SecurityIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      securityIpGroupName: 'string',
      securityIps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantEncryptionResponseBodyTenantEncryption extends $tea.Model {
  encryptionType?: string;
  instanceId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      encryptionType: 'EncryptionType',
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptionType: 'string',
      instanceId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantSecurityIpGroupResponseBodySecurityIpGroup extends $tea.Model {
  instanceId?: string;
  securityIpGroupName?: string;
  securityIps?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      securityIpGroupName: 'SecurityIpGroupName',
      securityIps: 'SecurityIps',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      securityIpGroupName: 'string',
      securityIps: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantUserRolesResponseBodyTenantUserUserRole extends $tea.Model {
  database?: string;
  isSuccess?: boolean;
  role?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      isSuccess: 'IsSuccess',
      role: 'Role',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      isSuccess: 'boolean',
      role: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantUserRolesResponseBodyTenantUser extends $tea.Model {
  tenantId?: string;
  userName?: string;
  userRole?: ModifyTenantUserRolesResponseBodyTenantUserUserRole[];
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      userName: 'UserName',
      userRole: 'UserRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
      userName: 'string',
      userRole: { 'type': 'array', 'itemType': ModifyTenantUserRolesResponseBodyTenantUserUserRole },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTenantUserStatusResponseBodyTenantUser extends $tea.Model {
  tenantId?: string;
  userName?: string;
  userStatus?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      userName: 'UserName',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
      userName: 'string',
      userStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseProjectResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseWorkerInstanceResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeProjectResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryProjectModifyRecordsResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartProjectResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartProjectsByLabelResponseBodyData extends $tea.Model {
  failedProjectIds?: string[];
  succeedProjectIds?: string[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failedProjectIds: 'FailedProjectIds',
      succeedProjectIds: 'SucceedProjectIds',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedProjectIds: { 'type': 'array', 'itemType': 'string' },
      succeedProjectIds: { 'type': 'array', 'itemType': 'string' },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartProjectsByLabelResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopProjectResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopProjectModifyRecordsResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopProjectsByLabelResponseBodyData extends $tea.Model {
  failedProjectIds?: string[];
  succeedProjectIds?: string[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failedProjectIds: 'FailedProjectIds',
      succeedProjectIds: 'SucceedProjectIds',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedProjectIds: { 'type': 'array', 'itemType': 'string' },
      succeedProjectIds: { 'type': 'array', 'itemType': 'string' },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopProjectsByLabelResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchoverInstanceResponseBodyData extends $tea.Model {
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

export class UpdateProjectConfigRequestCommonTransferConfig extends $tea.Model {
  sinkStoreFormat?: string;
  sourceStoreFormat?: string;
  static names(): { [key: string]: string } {
    return {
      sinkStoreFormat: 'SinkStoreFormat',
      sourceStoreFormat: 'SourceStoreFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sinkStoreFormat: 'string',
      sourceStoreFormat: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectConfigRequestFullTransferConfig extends $tea.Model {
  readWorkerNum?: number;
  throttleIOPS?: number;
  throttleRps?: number;
  writeWorkerNum?: number;
  static names(): { [key: string]: string } {
    return {
      readWorkerNum: 'ReadWorkerNum',
      throttleIOPS: 'ThrottleIOPS',
      throttleRps: 'ThrottleRps',
      writeWorkerNum: 'WriteWorkerNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readWorkerNum: 'number',
      throttleIOPS: 'number',
      throttleRps: 'number',
      writeWorkerNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectConfigRequestIncrTransferConfig extends $tea.Model {
  incrSyncThreadCount?: number;
  recordTypeWhiteList?: string[];
  supportDDLTypes?: string[];
  throttleIOPS?: number;
  throttleRps?: number;
  static names(): { [key: string]: string } {
    return {
      incrSyncThreadCount: 'IncrSyncThreadCount',
      recordTypeWhiteList: 'RecordTypeWhiteList',
      supportDDLTypes: 'SupportDDLTypes',
      throttleIOPS: 'ThrottleIOPS',
      throttleRps: 'ThrottleRps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incrSyncThreadCount: 'number',
      recordTypeWhiteList: { 'type': 'array', 'itemType': 'string' },
      supportDDLTypes: { 'type': 'array', 'itemType': 'string' },
      throttleIOPS: 'number',
      throttleRps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectConfigRequestReverseIncrTransferConfig extends $tea.Model {
  incrSyncThreadCount?: number;
  recordTypeWhiteList?: string[];
  supportDDLTypes?: string[];
  throttleIOPS?: number;
  throttleRps?: number;
  static names(): { [key: string]: string } {
    return {
      incrSyncThreadCount: 'IncrSyncThreadCount',
      recordTypeWhiteList: 'RecordTypeWhiteList',
      supportDDLTypes: 'SupportDDLTypes',
      throttleIOPS: 'ThrottleIOPS',
      throttleRps: 'ThrottleRps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incrSyncThreadCount: 'number',
      recordTypeWhiteList: { 'type': 'array', 'itemType': 'string' },
      supportDDLTypes: { 'type': 'array', 'itemType': 'string' },
      throttleIOPS: 'number',
      throttleRps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectConfigResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  extraContext?: { [key: string]: any };
  level?: string;
  message?: string;
  messageMcmsContext?: { [key: string]: string };
  messageMcmsKey?: string;
  proposal?: string;
  proposalMcmsContext?: { [key: string]: string };
  proposalMcmsKey?: string;
  reason?: string;
  reasonMcmsContext?: { [key: string]: string };
  reasonMcmsKey?: string;
  upstreamErrorDetail?: any;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      extraContext: 'ExtraContext',
      level: 'Level',
      message: 'Message',
      messageMcmsContext: 'MessageMcmsContext',
      messageMcmsKey: 'MessageMcmsKey',
      proposal: 'Proposal',
      proposalMcmsContext: 'ProposalMcmsContext',
      proposalMcmsKey: 'ProposalMcmsKey',
      reason: 'Reason',
      reasonMcmsContext: 'ReasonMcmsContext',
      reasonMcmsKey: 'ReasonMcmsKey',
      upstreamErrorDetail: 'UpstreamErrorDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      level: 'string',
      message: 'string',
      messageMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      messageMcmsKey: 'string',
      proposal: 'string',
      proposalMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      proposalMcmsKey: 'string',
      reason: 'string',
      reasonMcmsContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      reasonMcmsKey: 'string',
      upstreamErrorDetail: 'any',
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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("oceanbasepro", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @summary You can call this operation to close sessions in batches. Please note that this operation is executed asynchronously. After calling this operation, you need to verify it by calling DescribeProcessStatsComposition.
   *
   * @param request BatchKillProcessListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchKillProcessListResponse
   */
  async batchKillProcessListWithOptions(request: BatchKillProcessListRequest, runtime: $Util.RuntimeOptions): Promise<BatchKillProcessListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.sessionList)) {
      body["SessionList"] = request.sessionList;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchKillProcessList",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchKillProcessListResponse>(await this.callApi(params, req, runtime), new BatchKillProcessListResponse({}));
  }

  /**
   * @summary You can call this operation to close sessions in batches. Please note that this operation is executed asynchronously. After calling this operation, you need to verify it by calling DescribeProcessStatsComposition.
   *
   * @param request BatchKillProcessListRequest
   * @return BatchKillProcessListResponse
   */
  async batchKillProcessList(request: BatchKillProcessListRequest): Promise<BatchKillProcessListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchKillProcessListWithOptions(request, runtime);
  }

  /**
   * @summary 异步关闭集群租户的会话信息；关闭oceanbase云服务和业务之间的会话信息
   *
   * @param request BatchKillSessionListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchKillSessionListResponse
   */
  async batchKillSessionListWithOptions(request: BatchKillSessionListRequest, runtime: $Util.RuntimeOptions): Promise<BatchKillSessionListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.sessionList)) {
      body["SessionList"] = request.sessionList;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchKillSessionList",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchKillSessionListResponse>(await this.callApi(params, req, runtime), new BatchKillSessionListResponse({}));
  }

  /**
   * @summary 异步关闭集群租户的会话信息；关闭oceanbase云服务和业务之间的会话信息
   *
   * @param request BatchKillSessionListRequest
   * @return BatchKillSessionListResponse
   */
  async batchKillSessionList(request: BatchKillSessionListRequest): Promise<BatchKillSessionListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchKillSessionListWithOptions(request, runtime);
  }

  /**
   * @summary 根据记录id取消修改操作 （仅支持处于 PENDING 状态的修改记录）
   *
   * @param request CancelProjectModifyRecordRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CancelProjectModifyRecordResponse
   */
  async cancelProjectModifyRecordWithOptions(request: CancelProjectModifyRecordRequest, runtime: $Util.RuntimeOptions): Promise<CancelProjectModifyRecordResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CancelProjectModifyRecord",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelProjectModifyRecordResponse>(await this.callApi(params, req, runtime), new CancelProjectModifyRecordResponse({}));
  }

  /**
   * @summary 根据记录id取消修改操作 （仅支持处于 PENDING 状态的修改记录）
   *
   * @param request CancelProjectModifyRecordRequest
   * @return CancelProjectModifyRecordResponse
   */
  async cancelProjectModifyRecord(request: CancelProjectModifyRecordRequest): Promise<CancelProjectModifyRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelProjectModifyRecordWithOptions(request, runtime);
  }

  /**
   * @summary 创建备份任务下载链接
   *
   * @param request CreateBackupSetDownloadLinkRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateBackupSetDownloadLinkResponse
   */
  async createBackupSetDownloadLinkWithOptions(request: CreateBackupSetDownloadLinkRequest, runtime: $Util.RuntimeOptions): Promise<CreateBackupSetDownloadLinkResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.backupSetId)) {
      body["BackupSetId"] = request.backupSetId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateBackupSetDownloadLink",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBackupSetDownloadLinkResponse>(await this.callApi(params, req, runtime), new CreateBackupSetDownloadLinkResponse({}));
  }

  /**
   * @summary 创建备份任务下载链接
   *
   * @param request CreateBackupSetDownloadLinkRequest
   * @return CreateBackupSetDownloadLinkResponse
   */
  async createBackupSetDownloadLink(request: CreateBackupSetDownloadLinkRequest): Promise<CreateBackupSetDownloadLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBackupSetDownloadLinkWithOptions(request, runtime);
  }

  /**
   * @summary The request ID.
   *
   * @param request CreateDatabaseRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDatabaseResponse
   */
  async createDatabaseWithOptions(request: CreateDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<CreateDatabaseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.collation)) {
      body["Collation"] = request.collation;
    }

    if (!Util.isUnset(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.encoding)) {
      body["Encoding"] = request.encoding;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDatabase",
      version: "2019-09-01",
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
   * @summary The request ID.
   *
   * @param request CreateDatabaseRequest
   * @return CreateDatabaseResponse
   */
  async createDatabase(request: CreateDatabaseRequest): Promise<CreateDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDatabaseWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to create an OceanBase cluster.
   *
   * @param request CreateInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateInstanceResponse
   */
  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoRenew)) {
      body["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.autoRenewPeriod)) {
      body["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!Util.isUnset(request.chargeType)) {
      body["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.cpuArch)) {
      body["CpuArch"] = request.cpuArch;
    }

    if (!Util.isUnset(request.diskSize)) {
      body["DiskSize"] = request.diskSize;
    }

    if (!Util.isUnset(request.diskType)) {
      body["DiskType"] = request.diskType;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.instanceClass)) {
      body["InstanceClass"] = request.instanceClass;
    }

    if (!Util.isUnset(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.isolationOptimization)) {
      body["IsolationOptimization"] = request.isolationOptimization;
    }

    if (!Util.isUnset(request.obVersion)) {
      body["ObVersion"] = request.obVersion;
    }

    if (!Util.isUnset(request.period)) {
      body["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      body["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.primaryInstance)) {
      body["PrimaryInstance"] = request.primaryInstance;
    }

    if (!Util.isUnset(request.primaryRegion)) {
      body["PrimaryRegion"] = request.primaryRegion;
    }

    if (!Util.isUnset(request.replicaMode)) {
      body["ReplicaMode"] = request.replicaMode;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.series)) {
      body["Series"] = request.series;
    }

    if (!Util.isUnset(request.zones)) {
      body["Zones"] = request.zones;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstance",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceResponse>(await this.callApi(params, req, runtime), new CreateInstanceResponse({}));
  }

  /**
   * @summary You can call this operation to create an OceanBase cluster.
   *
   * @param request CreateInstanceRequest
   * @return CreateInstanceResponse
   */
  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  /**
   * @summary 创建标签
   *
   * @param request CreateLabelRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateLabelResponse
   */
  async createLabelWithOptions(request: CreateLabelRequest, runtime: $Util.RuntimeOptions): Promise<CreateLabelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateLabel",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLabelResponse>(await this.callApi(params, req, runtime), new CreateLabelResponse({}));
  }

  /**
   * @summary 创建标签
   *
   * @param request CreateLabelRequest
   * @return CreateLabelResponse
   */
  async createLabel(request: CreateLabelRequest): Promise<CreateLabelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLabelWithOptions(request, runtime);
  }

  /**
   * @summary 创建 MySQL 数据源
   *
   * @param request CreateMySqlDataSourceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateMySqlDataSourceResponse
   */
  async createMySqlDataSourceWithOptions(request: CreateMySqlDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<CreateMySqlDataSourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.dgInstanceId)) {
      body["DgInstanceId"] = request.dgInstanceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ip)) {
      body["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.password)) {
      body["Password"] = request.password;
    }

    if (!Util.isUnset(request.port)) {
      body["Port"] = request.port;
    }

    if (!Util.isUnset(request.schema)) {
      body["Schema"] = request.schema;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.useSsl)) {
      body["UseSsl"] = request.useSsl;
    }

    if (!Util.isUnset(request.userName)) {
      body["UserName"] = request.userName;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMySqlDataSource",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMySqlDataSourceResponse>(await this.callApi(params, req, runtime), new CreateMySqlDataSourceResponse({}));
  }

  /**
   * @summary 创建 MySQL 数据源
   *
   * @param request CreateMySqlDataSourceRequest
   * @return CreateMySqlDataSourceResponse
   */
  async createMySqlDataSource(request: CreateMySqlDataSourceRequest): Promise<CreateMySqlDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMySqlDataSourceWithOptions(request, runtime);
  }

  /**
   * @summary 创建 OceanBase 数据源
   *
   * @param request CreateOceanBaseDataSourceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateOceanBaseDataSourceResponse
   */
  async createOceanBaseDataSourceWithOptions(request: CreateOceanBaseDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<CreateOceanBaseDataSourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cluster)) {
      body["Cluster"] = request.cluster;
    }

    if (!Util.isUnset(request.configUrl)) {
      body["ConfigUrl"] = request.configUrl;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.drcPassword)) {
      body["DrcPassword"] = request.drcPassword;
    }

    if (!Util.isUnset(request.drcUserName)) {
      body["DrcUserName"] = request.drcUserName;
    }

    if (!Util.isUnset(request.innerDrcPassword)) {
      body["InnerDrcPassword"] = request.innerDrcPassword;
    }

    if (!Util.isUnset(request.ip)) {
      body["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.logProxyIp)) {
      body["LogProxyIp"] = request.logProxyIp;
    }

    if (!Util.isUnset(request.logProxyPort)) {
      body["LogProxyPort"] = request.logProxyPort;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.password)) {
      body["Password"] = request.password;
    }

    if (!Util.isUnset(request.port)) {
      body["Port"] = request.port;
    }

    if (!Util.isUnset(request.tenant)) {
      body["Tenant"] = request.tenant;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.userName)) {
      body["UserName"] = request.userName;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateOceanBaseDataSource",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOceanBaseDataSourceResponse>(await this.callApi(params, req, runtime), new CreateOceanBaseDataSourceResponse({}));
  }

  /**
   * @summary 创建 OceanBase 数据源
   *
   * @param request CreateOceanBaseDataSourceRequest
   * @return CreateOceanBaseDataSourceResponse
   */
  async createOceanBaseDataSource(request: CreateOceanBaseDataSourceRequest): Promise<CreateOceanBaseDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOceanBaseDataSourceWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to create a MySQL data source.
   *
   * @description To call this operation, you must add the IP address of the OceanBase Migration Service (OMS) server to the whitelist of the Alibaba Cloud database instance, the security rules of the ECS instance, or the security settings of your self-managed database (usually the firewall of your self-managed database) to ensure that OMS can successfully access your database instance. To obtain the IP address of the OMS server, go to the OMS data source management page in the OMS console.
   *
   * @param request CreateOmsMysqlDataSourceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateOmsMysqlDataSourceResponse
   */
  async createOmsMysqlDataSourceWithOptions(request: CreateOmsMysqlDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<CreateOmsMysqlDataSourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.dgDatabaseId)) {
      body["DgDatabaseId"] = request.dgDatabaseId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ip)) {
      body["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.password)) {
      body["Password"] = request.password;
    }

    if (!Util.isUnset(request.port)) {
      body["Port"] = request.port;
    }

    if (!Util.isUnset(request.schema)) {
      body["Schema"] = request.schema;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.username)) {
      body["Username"] = request.username;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateOmsMysqlDataSource",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOmsMysqlDataSourceResponse>(await this.callApi(params, req, runtime), new CreateOmsMysqlDataSourceResponse({}));
  }

  /**
   * @summary You can call this operation to create a MySQL data source.
   *
   * @description To call this operation, you must add the IP address of the OceanBase Migration Service (OMS) server to the whitelist of the Alibaba Cloud database instance, the security rules of the ECS instance, or the security settings of your self-managed database (usually the firewall of your self-managed database) to ensure that OMS can successfully access your database instance. To obtain the IP address of the OMS server, go to the OMS data source management page in the OMS console.
   *
   * @param request CreateOmsMysqlDataSourceRequest
   * @return CreateOmsMysqlDataSourceResponse
   */
  async createOmsMysqlDataSource(request: CreateOmsMysqlDataSourceRequest): Promise<CreateOmsMysqlDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOmsMysqlDataSourceWithOptions(request, runtime);
  }

  /**
   * @summary 创建项目
   *
   * @param tmpReq CreateProjectRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateProjectResponse
   */
  async createProjectWithOptions(tmpReq: CreateProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateProjectResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateProjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.commonTransferConfig)) {
      request.commonTransferConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.commonTransferConfig, "CommonTransferConfig", "json");
    }

    if (!Util.isUnset(tmpReq.fullTransferConfig)) {
      request.fullTransferConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fullTransferConfig, "FullTransferConfig", "json");
    }

    if (!Util.isUnset(tmpReq.incrTransferConfig)) {
      request.incrTransferConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.incrTransferConfig, "IncrTransferConfig", "json");
    }

    if (!Util.isUnset(tmpReq.labelIds)) {
      request.labelIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelIds, "LabelIds", "json");
    }

    if (!Util.isUnset(tmpReq.reverseIncrTransferConfig)) {
      request.reverseIncrTransferConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.reverseIncrTransferConfig, "ReverseIncrTransferConfig", "json");
    }

    if (!Util.isUnset(tmpReq.structTransferConfig)) {
      request.structTransferConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.structTransferConfig, "StructTransferConfig", "json");
    }

    if (!Util.isUnset(tmpReq.transferMapping)) {
      request.transferMappingShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transferMapping, "TransferMapping", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.commonTransferConfigShrink)) {
      body["CommonTransferConfig"] = request.commonTransferConfigShrink;
    }

    if (!Util.isUnset(request.enableFullTransfer)) {
      body["EnableFullTransfer"] = request.enableFullTransfer;
    }

    if (!Util.isUnset(request.enableFullVerify)) {
      body["EnableFullVerify"] = request.enableFullVerify;
    }

    if (!Util.isUnset(request.enableIncrTransfer)) {
      body["EnableIncrTransfer"] = request.enableIncrTransfer;
    }

    if (!Util.isUnset(request.enableReverseIncrTransfer)) {
      body["EnableReverseIncrTransfer"] = request.enableReverseIncrTransfer;
    }

    if (!Util.isUnset(request.enableStructTransfer)) {
      body["EnableStructTransfer"] = request.enableStructTransfer;
    }

    if (!Util.isUnset(request.fullTransferConfigShrink)) {
      body["FullTransferConfig"] = request.fullTransferConfigShrink;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.incrTransferConfigShrink)) {
      body["IncrTransferConfig"] = request.incrTransferConfigShrink;
    }

    if (!Util.isUnset(request.labelIdsShrink)) {
      body["LabelIds"] = request.labelIdsShrink;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.ossKey)) {
      body["OssKey"] = request.ossKey;
    }

    if (!Util.isUnset(request.reverseIncrTransferConfigShrink)) {
      body["ReverseIncrTransferConfig"] = request.reverseIncrTransferConfigShrink;
    }

    if (!Util.isUnset(request.sinkEndpointId)) {
      body["SinkEndpointId"] = request.sinkEndpointId;
    }

    if (!Util.isUnset(request.sourceEndpointId)) {
      body["SourceEndpointId"] = request.sourceEndpointId;
    }

    if (!Util.isUnset(request.structTransferConfigShrink)) {
      body["StructTransferConfig"] = request.structTransferConfigShrink;
    }

    if (!Util.isUnset(request.transferMappingShrink)) {
      body["TransferMapping"] = request.transferMappingShrink;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.useOss)) {
      body["UseOss"] = request.useOss;
    }

    if (!Util.isUnset(request.workerGradeId)) {
      body["WorkerGradeId"] = request.workerGradeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateProject",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateProjectResponse>(await this.callApi(params, req, runtime), new CreateProjectResponse({}));
  }

  /**
   * @summary 创建项目
   *
   * @param request CreateProjectRequest
   * @return CreateProjectResponse
   */
  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectWithOptions(request, runtime);
  }

  /**
   * @summary 修改传输对象（加减表）(仅支持处于 RUNNING/FAILED/SUSPEND 状态的项目)
   *
   * @param tmpReq CreateProjectModifyRecordsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateProjectModifyRecordsResponse
   */
  async createProjectModifyRecordsWithOptions(tmpReq: CreateProjectModifyRecordsRequest, runtime: $Util.RuntimeOptions): Promise<CreateProjectModifyRecordsResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateProjectModifyRecordsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.databases)) {
      request.databasesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.databases, "Databases", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.databasesShrink)) {
      body["Databases"] = request.databasesShrink;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateProjectModifyRecords",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateProjectModifyRecordsResponse>(await this.callApi(params, req, runtime), new CreateProjectModifyRecordsResponse({}));
  }

  /**
   * @summary 修改传输对象（加减表）(仅支持处于 RUNNING/FAILED/SUSPEND 状态的项目)
   *
   * @param request CreateProjectModifyRecordsRequest
   * @return CreateProjectModifyRecordsResponse
   */
  async createProjectModifyRecords(request: CreateProjectModifyRecordsRequest): Promise<CreateProjectModifyRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectModifyRecordsWithOptions(request, runtime);
  }

  /**
   * @summary 创建RDS PG 数据源
   *
   * @param request CreateRdsPostgreSQLDataSourceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateRdsPostgreSQLDataSourceResponse
   */
  async createRdsPostgreSQLDataSourceWithOptions(request: CreateRdsPostgreSQLDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<CreateRdsPostgreSQLDataSourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.password)) {
      body["Password"] = request.password;
    }

    if (!Util.isUnset(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateRdsPostgreSQLDataSource",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRdsPostgreSQLDataSourceResponse>(await this.callApi(params, req, runtime), new CreateRdsPostgreSQLDataSourceResponse({}));
  }

  /**
   * @summary 创建RDS PG 数据源
   *
   * @param request CreateRdsPostgreSQLDataSourceRequest
   * @return CreateRdsPostgreSQLDataSourceResponse
   */
  async createRdsPostgreSQLDataSource(request: CreateRdsPostgreSQLDataSourceRequest): Promise<CreateRdsPostgreSQLDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRdsPostgreSQLDataSourceWithOptions(request, runtime);
  }

  /**
   * @summary The name of the whitelist group.
   *
   * @param request CreateSecurityIpGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateSecurityIpGroupResponse
   */
  async createSecurityIpGroupWithOptions(request: CreateSecurityIpGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateSecurityIpGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.securityIpGroupName)) {
      body["SecurityIpGroupName"] = request.securityIpGroupName;
    }

    if (!Util.isUnset(request.securityIps)) {
      body["SecurityIps"] = request.securityIps;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSecurityIpGroup",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSecurityIpGroupResponse>(await this.callApi(params, req, runtime), new CreateSecurityIpGroupResponse({}));
  }

  /**
   * @summary The name of the whitelist group.
   *
   * @param request CreateSecurityIpGroupRequest
   * @return CreateSecurityIpGroupResponse
   */
  async createSecurityIpGroup(request: CreateSecurityIpGroupRequest): Promise<CreateSecurityIpGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSecurityIpGroupWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to create a tag group.
   *
   * @param request CreateTagRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateTagResponse
   */
  async createTagWithOptions(request: CreateTagRequest, runtime: $Util.RuntimeOptions): Promise<CreateTagResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.key)) {
      body["Key"] = request.key;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTag",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTagResponse>(await this.callApi(params, req, runtime), new CreateTagResponse({}));
  }

  /**
   * @summary You can call this operation to create a tag group.
   *
   * @param request CreateTagRequest
   * @return CreateTagResponse
   */
  async createTag(request: CreateTagRequest): Promise<CreateTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTagWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to create a tag.
   *
   * @param request CreateTagValueRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateTagValueResponse
   */
  async createTagValueWithOptions(request: CreateTagValueRequest, runtime: $Util.RuntimeOptions): Promise<CreateTagValueResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.key)) {
      body["Key"] = request.key;
    }

    if (!Util.isUnset(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTagValue",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTagValueResponse>(await this.callApi(params, req, runtime), new CreateTagValueResponse({}));
  }

  /**
   * @summary You can call this operation to create a tag.
   *
   * @param request CreateTagValueRequest
   * @return CreateTagValueResponse
   */
  async createTagValue(request: CreateTagValueRequest): Promise<CreateTagValueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTagValueWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to create a tenant.
   *
   * @param tmpReq CreateTenantRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateTenantResponse
   */
  async createTenantWithOptions(tmpReq: CreateTenantRequest, runtime: $Util.RuntimeOptions): Promise<CreateTenantResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateTenantShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.createParams)) {
      request.createParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createParams, "CreateParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.charset)) {
      body["Charset"] = request.charset;
    }

    if (!Util.isUnset(request.cpu)) {
      body["Cpu"] = request.cpu;
    }

    if (!Util.isUnset(request.createParamsShrink)) {
      body["CreateParams"] = request.createParamsShrink;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.logDisk)) {
      body["LogDisk"] = request.logDisk;
    }

    if (!Util.isUnset(request.memory)) {
      body["Memory"] = request.memory;
    }

    if (!Util.isUnset(request.primaryZone)) {
      body["PrimaryZone"] = request.primaryZone;
    }

    if (!Util.isUnset(request.readOnlyZoneList)) {
      body["ReadOnlyZoneList"] = request.readOnlyZoneList;
    }

    if (!Util.isUnset(request.tenantMode)) {
      body["TenantMode"] = request.tenantMode;
    }

    if (!Util.isUnset(request.tenantName)) {
      body["TenantName"] = request.tenantName;
    }

    if (!Util.isUnset(request.timeZone)) {
      body["TimeZone"] = request.timeZone;
    }

    if (!Util.isUnset(request.unitNum)) {
      body["UnitNum"] = request.unitNum;
    }

    if (!Util.isUnset(request.userVSwitchId)) {
      body["UserVSwitchId"] = request.userVSwitchId;
    }

    if (!Util.isUnset(request.userVpcId)) {
      body["UserVpcId"] = request.userVpcId;
    }

    if (!Util.isUnset(request.userVpcOwnerId)) {
      body["UserVpcOwnerId"] = request.userVpcOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTenant",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTenantResponse>(await this.callApi(params, req, runtime), new CreateTenantResponse({}));
  }

  /**
   * @summary You can call this operation to create a tenant.
   *
   * @param request CreateTenantRequest
   * @return CreateTenantResponse
   */
  async createTenant(request: CreateTenantRequest): Promise<CreateTenantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTenantWithOptions(request, runtime);
  }

  /**
   * @summary The request ID.
   *
   * @param request CreateTenantReadOnlyConnectionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateTenantReadOnlyConnectionResponse
   */
  async createTenantReadOnlyConnectionWithOptions(request: CreateTenantReadOnlyConnectionRequest, runtime: $Util.RuntimeOptions): Promise<CreateTenantReadOnlyConnectionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      body["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTenantReadOnlyConnection",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTenantReadOnlyConnectionResponse>(await this.callApi(params, req, runtime), new CreateTenantReadOnlyConnectionResponse({}));
  }

  /**
   * @summary The request ID.
   *
   * @param request CreateTenantReadOnlyConnectionRequest
   * @return CreateTenantReadOnlyConnectionResponse
   */
  async createTenantReadOnlyConnection(request: CreateTenantReadOnlyConnectionRequest): Promise<CreateTenantReadOnlyConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTenantReadOnlyConnectionWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to create the security whitelist for the tenant.
   *
   * @param request CreateTenantSecurityIpGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateTenantSecurityIpGroupResponse
   */
  async createTenantSecurityIpGroupWithOptions(request: CreateTenantSecurityIpGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateTenantSecurityIpGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.securityIpGroupName)) {
      body["SecurityIpGroupName"] = request.securityIpGroupName;
    }

    if (!Util.isUnset(request.securityIps)) {
      body["SecurityIps"] = request.securityIps;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTenantSecurityIpGroup",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTenantSecurityIpGroupResponse>(await this.callApi(params, req, runtime), new CreateTenantSecurityIpGroupResponse({}));
  }

  /**
   * @summary You can call this operation to create the security whitelist for the tenant.
   *
   * @param request CreateTenantSecurityIpGroupRequest
   * @return CreateTenantSecurityIpGroupResponse
   */
  async createTenantSecurityIpGroup(request: CreateTenantSecurityIpGroupRequest): Promise<CreateTenantSecurityIpGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTenantSecurityIpGroupWithOptions(request, runtime);
  }

  /**
   * @summary CreateTenantUser
   *
   * @param request CreateTenantUserRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateTenantUserResponse
   */
  async createTenantUserWithOptions(request: CreateTenantUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateTenantUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.encryptionType)) {
      body["EncryptionType"] = request.encryptionType;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.roles)) {
      body["Roles"] = request.roles;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.userName)) {
      body["UserName"] = request.userName;
    }

    if (!Util.isUnset(request.userPassword)) {
      body["UserPassword"] = request.userPassword;
    }

    if (!Util.isUnset(request.userType)) {
      body["UserType"] = request.userType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTenantUser",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTenantUserResponse>(await this.callApi(params, req, runtime), new CreateTenantUserResponse({}));
  }

  /**
   * @summary CreateTenantUser
   *
   * @param request CreateTenantUserRequest
   * @return CreateTenantUserResponse
   */
  async createTenantUser(request: CreateTenantUserRequest): Promise<CreateTenantUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTenantUserWithOptions(request, runtime);
  }

  /**
   * @summary 删除数据源
   *
   * @param request DeleteDataSourceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteDataSourceResponse
   */
  async deleteDataSourceWithOptions(request: DeleteDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDataSourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDataSource",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDataSourceResponse>(await this.callApi(params, req, runtime), new DeleteDataSourceResponse({}));
  }

  /**
   * @summary 删除数据源
   *
   * @param request DeleteDataSourceRequest
   * @return DeleteDataSourceResponse
   */
  async deleteDataSource(request: DeleteDataSourceRequest): Promise<DeleteDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDataSourceWithOptions(request, runtime);
  }

  /**
   * @summary The request ID.
   *
   * @param request DeleteDatabasesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteDatabasesResponse
   */
  async deleteDatabasesWithOptions(request: DeleteDatabasesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDatabasesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.databaseNames)) {
      body["DatabaseNames"] = request.databaseNames;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDatabases",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDatabasesResponse>(await this.callApi(params, req, runtime), new DeleteDatabasesResponse({}));
  }

  /**
   * @summary The request ID.
   *
   * @param request DeleteDatabasesRequest
   * @return DeleteDatabasesResponse
   */
  async deleteDatabases(request: DeleteDatabasesRequest): Promise<DeleteDatabasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDatabasesWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to release an OceanBase cluster.
   *
   * @description Before you call this operation, ensure that the following requirements are met:
   * - The cluster is in the Running state.
   * - The cluster is a primary cluster and the billing method is pay-as-you-go.
   *
   * @param request DeleteInstancesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteInstancesResponse
   */
  async deleteInstancesWithOptions(request: DeleteInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstancesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.backupRetainMode)) {
      body["BackupRetainMode"] = request.backupRetainMode;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.instanceIds)) {
      body["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstances",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstancesResponse>(await this.callApi(params, req, runtime), new DeleteInstancesResponse({}));
  }

  /**
   * @summary You can call this operation to release an OceanBase cluster.
   *
   * @description Before you call this operation, ensure that the following requirements are met:
   * - The cluster is in the Running state.
   * - The cluster is a primary cluster and the billing method is pay-as-you-go.
   *
   * @param request DeleteInstancesRequest
   * @return DeleteInstancesResponse
   */
  async deleteInstances(request: DeleteInstancesRequest): Promise<DeleteInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstancesWithOptions(request, runtime);
  }

  /**
   * @summary 删除项目
   *
   * @param request DeleteProjectRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteProjectResponse
   */
  async deleteProjectWithOptions(request: DeleteProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteProject",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteProjectResponse>(await this.callApi(params, req, runtime), new DeleteProjectResponse({}));
  }

  /**
   * @summary 删除项目
   *
   * @param request DeleteProjectRequest
   * @return DeleteProjectResponse
   */
  async deleteProject(request: DeleteProjectRequest): Promise<DeleteProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProjectWithOptions(request, runtime);
  }

  /**
   * @summary The name of the deleted IP address whitelist group.
   *
   * @param request DeleteSecurityIpGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteSecurityIpGroupResponse
   */
  async deleteSecurityIpGroupWithOptions(request: DeleteSecurityIpGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSecurityIpGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.securityIpGroupName)) {
      body["SecurityIpGroupName"] = request.securityIpGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSecurityIpGroup",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSecurityIpGroupResponse>(await this.callApi(params, req, runtime), new DeleteSecurityIpGroupResponse({}));
  }

  /**
   * @summary The name of the deleted IP address whitelist group.
   *
   * @param request DeleteSecurityIpGroupRequest
   * @return DeleteSecurityIpGroupResponse
   */
  async deleteSecurityIpGroup(request: DeleteSecurityIpGroupRequest): Promise<DeleteSecurityIpGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSecurityIpGroupWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to delete a tag group.
   *
   * @param request DeleteTagRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteTagResponse
   */
  async deleteTagWithOptions(request: DeleteTagRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTagResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.key)) {
      body["Key"] = request.key;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTag",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTagResponse>(await this.callApi(params, req, runtime), new DeleteTagResponse({}));
  }

  /**
   * @summary You can call this operation to delete a tag group.
   *
   * @param request DeleteTagRequest
   * @return DeleteTagResponse
   */
  async deleteTag(request: DeleteTagRequest): Promise<DeleteTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTagWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to delete a tag from a tag group.
   *
   * @param request DeleteTagValueRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteTagValueResponse
   */
  async deleteTagValueWithOptions(request: DeleteTagValueRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTagValueResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.key)) {
      body["Key"] = request.key;
    }

    if (!Util.isUnset(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTagValue",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTagValueResponse>(await this.callApi(params, req, runtime), new DeleteTagValueResponse({}));
  }

  /**
   * @summary You can call this operation to delete a tag from a tag group.
   *
   * @param request DeleteTagValueRequest
   * @return DeleteTagValueResponse
   */
  async deleteTagValue(request: DeleteTagValueRequest): Promise<DeleteTagValueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTagValueWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to delete the information on the whitelist group of the tenant.
   *
   * @param request DeleteTenantSecurityIpGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteTenantSecurityIpGroupResponse
   */
  async deleteTenantSecurityIpGroupWithOptions(request: DeleteTenantSecurityIpGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTenantSecurityIpGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.securityIpGroupName)) {
      body["SecurityIpGroupName"] = request.securityIpGroupName;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTenantSecurityIpGroup",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTenantSecurityIpGroupResponse>(await this.callApi(params, req, runtime), new DeleteTenantSecurityIpGroupResponse({}));
  }

  /**
   * @summary You can call this operation to delete the information on the whitelist group of the tenant.
   *
   * @param request DeleteTenantSecurityIpGroupRequest
   * @return DeleteTenantSecurityIpGroupResponse
   */
  async deleteTenantSecurityIpGroup(request: DeleteTenantSecurityIpGroupRequest): Promise<DeleteTenantSecurityIpGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTenantSecurityIpGroupWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to delete one or more database accounts.
   *
   * @param request DeleteTenantUsersRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteTenantUsersResponse
   */
  async deleteTenantUsersWithOptions(request: DeleteTenantUsersRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTenantUsersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTenantUsers",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTenantUsersResponse>(await this.callApi(params, req, runtime), new DeleteTenantUsersResponse({}));
  }

  /**
   * @summary You can call this operation to delete one or more database accounts.
   *
   * @param request DeleteTenantUsersRequest
   * @return DeleteTenantUsersResponse
   */
  async deleteTenantUsers(request: DeleteTenantUsersRequest): Promise<DeleteTenantUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTenantUsersWithOptions(request, runtime);
  }

  /**
   * @summary The return result of the request.
   *
   * @param request DeleteTenantsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteTenantsResponse
   */
  async deleteTenantsWithOptions(request: DeleteTenantsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTenantsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tenantIds)) {
      body["TenantIds"] = request.tenantIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTenants",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTenantsResponse>(await this.callApi(params, req, runtime), new DeleteTenantsResponse({}));
  }

  /**
   * @summary The return result of the request.
   *
   * @param request DeleteTenantsRequest
   * @return DeleteTenantsResponse
   */
  async deleteTenants(request: DeleteTenantsRequest): Promise<DeleteTenantsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTenantsWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to obtain the list of SQL statements that may have performance problems according to the diagnostic system.
   *
   * @param tmpReq DescribeAnomalySQLListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeAnomalySQLListResponse
   */
  async describeAnomalySQLListWithOptions(tmpReq: DescribeAnomalySQLListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAnomalySQLListResponse> {
    Util.validateModel(tmpReq);
    let request = new DescribeAnomalySQLListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.filterCondition)) {
      request.filterConditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterCondition, "FilterCondition", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.filterConditionShrink)) {
      body["FilterCondition"] = request.filterConditionShrink;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nodeIp)) {
      body["NodeIp"] = request.nodeIp;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.SQLId)) {
      body["SQLId"] = request.SQLId;
    }

    if (!Util.isUnset(request.searchKeyWord)) {
      body["SearchKeyWord"] = request.searchKeyWord;
    }

    if (!Util.isUnset(request.searchParameter)) {
      body["SearchParameter"] = request.searchParameter;
    }

    if (!Util.isUnset(request.searchRule)) {
      body["SearchRule"] = request.searchRule;
    }

    if (!Util.isUnset(request.searchValue)) {
      body["SearchValue"] = request.searchValue;
    }

    if (!Util.isUnset(request.sortColumn)) {
      body["SortColumn"] = request.sortColumn;
    }

    if (!Util.isUnset(request.sortOrder)) {
      body["SortOrder"] = request.sortOrder;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAnomalySQLList",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAnomalySQLListResponse>(await this.callApi(params, req, runtime), new DescribeAnomalySQLListResponse({}));
  }

  /**
   * @summary You can call this operation to obtain the list of SQL statements that may have performance problems according to the diagnostic system.
   *
   * @param request DescribeAnomalySQLListRequest
   * @return DescribeAnomalySQLListResponse
   */
  async describeAnomalySQLList(request: DescribeAnomalySQLListRequest): Promise<DescribeAnomalySQLListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAnomalySQLListWithOptions(request, runtime);
  }

  /**
   * @summary The maximum number of CPU cores per resource unit.
   *
   * @param request DescribeAvailableCpuResourceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeAvailableCpuResourceResponse
   */
  async describeAvailableCpuResourceWithOptions(request: DescribeAvailableCpuResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableCpuResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.modifyType)) {
      body["ModifyType"] = request.modifyType;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAvailableCpuResource",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAvailableCpuResourceResponse>(await this.callApi(params, req, runtime), new DescribeAvailableCpuResourceResponse({}));
  }

  /**
   * @summary The maximum number of CPU cores per resource unit.
   *
   * @param request DescribeAvailableCpuResourceRequest
   * @return DescribeAvailableCpuResourceResponse
   */
  async describeAvailableCpuResource(request: DescribeAvailableCpuResourceRequest): Promise<DescribeAvailableCpuResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableCpuResourceWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to query the available memory resource of an OceanBase Database tenant.
   *
   * @param request DescribeAvailableMemResourceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeAvailableMemResourceResponse
   */
  async describeAvailableMemResourceWithOptions(request: DescribeAvailableMemResourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableMemResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cpuNum)) {
      body["CpuNum"] = request.cpuNum;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.unitNum)) {
      body["UnitNum"] = request.unitNum;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAvailableMemResource",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAvailableMemResourceResponse>(await this.callApi(params, req, runtime), new DescribeAvailableMemResourceResponse({}));
  }

  /**
   * @summary You can call this operation to query the available memory resource of an OceanBase Database tenant.
   *
   * @param request DescribeAvailableMemResourceRequest
   * @return DescribeAvailableMemResourceResponse
   */
  async describeAvailableMemResource(request: DescribeAvailableMemResourceRequest): Promise<DescribeAvailableMemResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableMemResourceWithOptions(request, runtime);
  }

  /**
   * @summary 获取集群变配页可选配置
   *
   * @param request DescribeAvailableSpecRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeAvailableSpecResponse
   */
  async describeAvailableSpecWithOptions(request: DescribeAvailableSpecRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableSpecResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    if (!Util.isUnset(request.upgradeType)) {
      body["UpgradeType"] = request.upgradeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAvailableSpec",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAvailableSpecResponse>(await this.callApi(params, req, runtime), new DescribeAvailableSpecResponse({}));
  }

  /**
   * @summary 获取集群变配页可选配置
   *
   * @param request DescribeAvailableSpecRequest
   * @return DescribeAvailableSpecResponse
   */
  async describeAvailableSpec(request: DescribeAvailableSpecRequest): Promise<DescribeAvailableSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableSpecWithOptions(request, runtime);
  }

  /**
   * @summary 获取集群售卖页可选配置
   *
   * @param request DescribeAvailableZoneRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeAvailableZoneResponse
   */
  async describeAvailableZoneWithOptions(request: DescribeAvailableZoneRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableZoneResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cpuArch)) {
      body["CpuArch"] = request.cpuArch;
    }

    if (!Util.isUnset(request.deployType)) {
      body["DeployType"] = request.deployType;
    }

    if (!Util.isUnset(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.obVersion)) {
      body["ObVersion"] = request.obVersion;
    }

    if (!Util.isUnset(request.series)) {
      body["Series"] = request.series;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAvailableZone",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAvailableZoneResponse>(await this.callApi(params, req, runtime), new DescribeAvailableZoneResponse({}));
  }

  /**
   * @summary 获取集群售卖页可选配置
   *
   * @param request DescribeAvailableZoneRequest
   * @return DescribeAvailableZoneResponse
   */
  async describeAvailableZone(request: DescribeAvailableZoneRequest): Promise<DescribeAvailableZoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableZoneWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to query the link for downloading a backup set of OceanBase Database.
   *
   * @param request DescribeBackupSetDownloadLinkRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeBackupSetDownloadLinkResponse
   */
  async describeBackupSetDownloadLinkWithOptions(request: DescribeBackupSetDownloadLinkRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupSetDownloadLinkResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.downloadTaskId)) {
      body["DownloadTaskId"] = request.downloadTaskId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackupSetDownloadLink",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupSetDownloadLinkResponse>(await this.callApi(params, req, runtime), new DescribeBackupSetDownloadLinkResponse({}));
  }

  /**
   * @summary You can call this operation to query the link for downloading a backup set of OceanBase Database.
   *
   * @param request DescribeBackupSetDownloadLinkRequest
   * @return DescribeBackupSetDownloadLinkResponse
   */
  async describeBackupSetDownloadLink(request: DescribeBackupSetDownloadLinkRequest): Promise<DescribeBackupSetDownloadLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupSetDownloadLinkWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to query the character sets of an OceanBase Database tenant.
   *
   * @param request DescribeCharsetRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeCharsetResponse
   */
  async describeCharsetWithOptions(request: DescribeCharsetRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCharsetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.series)) {
      body["Series"] = request.series;
    }

    if (!Util.isUnset(request.tenantMode)) {
      body["TenantMode"] = request.tenantMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCharset",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCharsetResponse>(await this.callApi(params, req, runtime), new DescribeCharsetResponse({}));
  }

  /**
   * @summary You can call this operation to query the character sets of an OceanBase Database tenant.
   *
   * @param request DescribeCharsetRequest
   * @return DescribeCharsetResponse
   */
  async describeCharset(request: DescribeCharsetRequest): Promise<DescribeCharsetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCharsetWithOptions(request, runtime);
  }

  /**
   * @summary 查询备份集信息
   *
   * @param request DescribeDataBackupSetRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDataBackupSetResponse
   */
  async describeDataBackupSetWithOptions(request: DescribeDataBackupSetRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDataBackupSetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.backupObjectType)) {
      body["BackupObjectType"] = request.backupObjectType;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDataBackupSet",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDataBackupSetResponse>(await this.callApi(params, req, runtime), new DescribeDataBackupSetResponse({}));
  }

  /**
   * @summary 查询备份集信息
   *
   * @param request DescribeDataBackupSetRequest
   * @return DescribeDataBackupSetResponse
   */
  async describeDataBackupSet(request: DescribeDataBackupSetRequest): Promise<DescribeDataBackupSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDataBackupSetWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to query databases in a tenant.
   *
   * @param request DescribeDatabasesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDatabasesResponse
   */
  async describeDatabasesWithOptions(request: DescribeDatabasesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDatabasesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.withTables)) {
      body["WithTables"] = request.withTables;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDatabases",
      version: "2019-09-01",
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
   * @summary You can call this operation to query databases in a tenant.
   *
   * @param request DescribeDatabasesRequest
   * @return DescribeDatabasesResponse
   */
  async describeDatabases(request: DescribeDatabasesRequest): Promise<DescribeDatabasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDatabasesWithOptions(request, runtime);
  }

  /**
   * @summary The size of used memory in the cluster, in GB.
   *
   * @param request DescribeInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeInstanceResponse
   */
  async describeInstanceWithOptions(request: DescribeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.maxConnectionLimit)) {
      body["MaxConnectionLimit"] = request.maxConnectionLimit;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstance",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceResponse>(await this.callApi(params, req, runtime), new DescribeInstanceResponse({}));
  }

  /**
   * @summary The size of used memory in the cluster, in GB.
   *
   * @param request DescribeInstanceRequest
   * @return DescribeInstanceResponse
   */
  async describeInstance(request: DescribeInstanceRequest): Promise<DescribeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceWithOptions(request, runtime);
  }

  /**
   * @summary The ID of the zone.
   *
   * @param request DescribeInstanceCreatableZoneRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeInstanceCreatableZoneResponse
   */
  async describeInstanceCreatableZoneWithOptions(request: DescribeInstanceCreatableZoneRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceCreatableZoneResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceCreatableZone",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceCreatableZoneResponse>(await this.callApi(params, req, runtime), new DescribeInstanceCreatableZoneResponse({}));
  }

  /**
   * @summary The ID of the zone.
   *
   * @param request DescribeInstanceCreatableZoneRequest
   * @return DescribeInstanceCreatableZoneResponse
   */
  async describeInstanceCreatableZone(request: DescribeInstanceCreatableZoneRequest): Promise<DescribeInstanceCreatableZoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceCreatableZoneWithOptions(request, runtime);
  }

  /**
   * @summary 查询集群SSL配置
   *
   * @param request DescribeInstanceSSLRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeInstanceSSLResponse
   */
  async describeInstanceSSLWithOptions(request: DescribeInstanceSSLRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceSSLResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceSSL",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceSSLResponse>(await this.callApi(params, req, runtime), new DescribeInstanceSSLResponse({}));
  }

  /**
   * @summary 查询集群SSL配置
   *
   * @param request DescribeInstanceSSLRequest
   * @return DescribeInstanceSSLResponse
   */
  async describeInstanceSSL(request: DescribeInstanceSSLRequest): Promise<DescribeInstanceSSLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceSSLWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to query security check items of an OceanBase cluster.
   *
   * @param request DescribeInstanceSecurityConfigsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeInstanceSecurityConfigsResponse
   */
  async describeInstanceSecurityConfigsWithOptions(request: DescribeInstanceSecurityConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceSecurityConfigsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.checkId)) {
      body["CheckId"] = request.checkId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceSecurityConfigs",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceSecurityConfigsResponse>(await this.callApi(params, req, runtime), new DescribeInstanceSecurityConfigsResponse({}));
  }

  /**
   * @summary You can call this operation to query security check items of an OceanBase cluster.
   *
   * @param request DescribeInstanceSecurityConfigsRequest
   * @return DescribeInstanceSecurityConfigsResponse
   */
  async describeInstanceSecurityConfigs(request: DescribeInstanceSecurityConfigsRequest): Promise<DescribeInstanceSecurityConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceSecurityConfigsWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to query the tags of clusters.
   *
   * @param request DescribeInstanceTagsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeInstanceTagsResponse
   */
  async describeInstanceTagsWithOptions(request: DescribeInstanceTagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceTagsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceIds)) {
      body["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceTags",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceTagsResponse>(await this.callApi(params, req, runtime), new DescribeInstanceTagsResponse({}));
  }

  /**
   * @summary You can call this operation to query the tags of clusters.
   *
   * @param request DescribeInstanceTagsRequest
   * @return DescribeInstanceTagsResponse
   */
  async describeInstanceTags(request: DescribeInstanceTagsRequest): Promise<DescribeInstanceTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceTagsWithOptions(request, runtime);
  }

  /**
   * @summary The return result of the request.
   *
   * @param request DescribeInstanceTenantModesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeInstanceTenantModesResponse
   */
  async describeInstanceTenantModesWithOptions(request: DescribeInstanceTenantModesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceTenantModesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceTenantModes",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceTenantModesResponse>(await this.callApi(params, req, runtime), new DescribeInstanceTenantModesResponse({}));
  }

  /**
   * @summary The return result of the request.
   *
   * @param request DescribeInstanceTenantModesRequest
   * @return DescribeInstanceTenantModesResponse
   */
  async describeInstanceTenantModes(request: DescribeInstanceTenantModesRequest): Promise<DescribeInstanceTenantModesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceTenantModesWithOptions(request, runtime);
  }

  /**
   * @summary The ID of the zone.
   *
   * @param request DescribeInstanceTopologyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeInstanceTopologyResponse
   */
  async describeInstanceTopologyWithOptions(request: DescribeInstanceTopologyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceTopologyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceTopology",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceTopologyResponse>(await this.callApi(params, req, runtime), new DescribeInstanceTopologyResponse({}));
  }

  /**
   * @summary The ID of the zone.
   *
   * @param request DescribeInstanceTopologyRequest
   * @return DescribeInstanceTopologyResponse
   */
  async describeInstanceTopology(request: DescribeInstanceTopologyRequest): Promise<DescribeInstanceTopologyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceTopologyWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to obtain the list of OceanBase clusters.
   *
   * @param request DescribeInstancesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeInstancesResponse
   */
  async describeInstancesWithOptions(request: DescribeInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstances",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstancesResponse>(await this.callApi(params, req, runtime), new DescribeInstancesResponse({}));
  }

  /**
   * @summary You can call this operation to obtain the list of OceanBase clusters.
   *
   * @param request DescribeInstancesRequest
   * @return DescribeInstancesResponse
   */
  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  /**
   * @summary 查询监控指标数据
   *
   * @param request DescribeMetricsDataRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeMetricsDataResponse
   */
  async describeMetricsDataWithOptions(request: DescribeMetricsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricsDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.groupByLabels)) {
      query["GroupByLabels"] = request.groupByLabels;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.metrics)) {
      query["Metrics"] = request.metrics;
    }

    if (!Util.isUnset(request.sortMetricKey)) {
      query["SortMetricKey"] = request.sortMetricKey;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.replicaType)) {
      body["ReplicaType"] = request.replicaType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMetricsData",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMetricsDataResponse>(await this.callApi(params, req, runtime), new DescribeMetricsDataResponse({}));
  }

  /**
   * @summary 查询监控指标数据
   *
   * @param request DescribeMetricsDataRequest
   * @return DescribeMetricsDataResponse
   */
  async describeMetricsData(request: DescribeMetricsDataRequest): Promise<DescribeMetricsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricsDataWithOptions(request, runtime);
  }

  /**
   * @summary The list of nodes.
   *
   * @param request DescribeNodeMetricsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeNodeMetricsResponse
   */
  async describeNodeMetricsWithOptions(request: DescribeNodeMetricsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNodeMetricsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.metrics)) {
      body["Metrics"] = request.metrics;
    }

    if (!Util.isUnset(request.nodeIdList)) {
      body["NodeIdList"] = request.nodeIdList;
    }

    if (!Util.isUnset(request.nodeName)) {
      body["NodeName"] = request.nodeName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNodeMetrics",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNodeMetricsResponse>(await this.callApi(params, req, runtime), new DescribeNodeMetricsResponse({}));
  }

  /**
   * @summary The list of nodes.
   *
   * @param request DescribeNodeMetricsRequest
   * @return DescribeNodeMetricsResponse
   */
  async describeNodeMetrics(request: DescribeNodeMetricsRequest): Promise<DescribeNodeMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNodeMetricsWithOptions(request, runtime);
  }

  /**
   * @summary You can call this API to view the list of SQL statements that are identified as having performance issues by the diagnostic system.
   *
   * @param request DescribeOasAnomalySQLListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeOasAnomalySQLListResponse
   */
  async describeOasAnomalySQLListWithOptions(request: DescribeOasAnomalySQLListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOasAnomalySQLListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.current)) {
      body["Current"] = request.current;
    }

    if (!Util.isUnset(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.dynamicSql)) {
      body["DynamicSql"] = request.dynamicSql;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.filterCondition)) {
      body["FilterCondition"] = request.filterCondition;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mergeDynamicSql)) {
      body["MergeDynamicSql"] = request.mergeDynamicSql;
    }

    if (!Util.isUnset(request.nodeIp)) {
      body["NodeIp"] = request.nodeIp;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKeyWord)) {
      body["SearchKeyWord"] = request.searchKeyWord;
    }

    if (!Util.isUnset(request.searchParam)) {
      body["SearchParam"] = request.searchParam;
    }

    if (!Util.isUnset(request.searchRule)) {
      body["SearchRule"] = request.searchRule;
    }

    if (!Util.isUnset(request.searchValue)) {
      body["SearchValue"] = request.searchValue;
    }

    if (!Util.isUnset(request.sqlId)) {
      body["SqlId"] = request.sqlId;
    }

    if (!Util.isUnset(request.sqlTextLength)) {
      body["SqlTextLength"] = request.sqlTextLength;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOasAnomalySQLList",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOasAnomalySQLListResponse>(await this.callApi(params, req, runtime), new DescribeOasAnomalySQLListResponse({}));
  }

  /**
   * @summary You can call this API to view the list of SQL statements that are identified as having performance issues by the diagnostic system.
   *
   * @param request DescribeOasAnomalySQLListRequest
   * @return DescribeOasAnomalySQLListResponse
   */
  async describeOasAnomalySQLList(request: DescribeOasAnomalySQLListRequest): Promise<DescribeOasAnomalySQLListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOasAnomalySQLListWithOptions(request, runtime);
  }

  /**
   * @summary You can call this API to query detailed information about the SQL, including the SQL text, related table names, and so on.
   *
   * @param request DescribeOasSQLDetailsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeOasSQLDetailsResponse
   */
  async describeOasSQLDetailsWithOptions(request: DescribeOasSQLDetailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOasSQLDetailsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.dynamicSql)) {
      body["DynamicSql"] = request.dynamicSql;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.sqlId)) {
      body["SqlId"] = request.sqlId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOasSQLDetails",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOasSQLDetailsResponse>(await this.callApi(params, req, runtime), new DescribeOasSQLDetailsResponse({}));
  }

  /**
   * @summary You can call this API to query detailed information about the SQL, including the SQL text, related table names, and so on.
   *
   * @param request DescribeOasSQLDetailsRequest
   * @return DescribeOasSQLDetailsResponse
   */
  async describeOasSQLDetails(request: DescribeOasSQLDetailsRequest): Promise<DescribeOasSQLDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOasSQLDetailsWithOptions(request, runtime);
  }

  /**
   * @summary You can call this API to view the SQL execution history.
   *
   * @param request DescribeOasSQLHistoryListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeOasSQLHistoryListResponse
   */
  async describeOasSQLHistoryListWithOptions(request: DescribeOasSQLHistoryListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOasSQLHistoryListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.dynamicSql)) {
      body["DynamicSql"] = request.dynamicSql;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nodeIp)) {
      body["NodeIp"] = request.nodeIp;
    }

    if (!Util.isUnset(request.sqlId)) {
      body["SqlId"] = request.sqlId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOasSQLHistoryList",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOasSQLHistoryListResponse>(await this.callApi(params, req, runtime), new DescribeOasSQLHistoryListResponse({}));
  }

  /**
   * @summary You can call this API to view the SQL execution history.
   *
   * @param request DescribeOasSQLHistoryListRequest
   * @return DescribeOasSQLHistoryListResponse
   */
  async describeOasSQLHistoryList(request: DescribeOasSQLHistoryListRequest): Promise<DescribeOasSQLHistoryListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOasSQLHistoryListWithOptions(request, runtime);
  }

  /**
   * @summary You can call this API to retrieve information about the SQL execution plan stored in the diagnostic system based on the SQL ID.
   *
   * @param request DescribeOasSQLPlansRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeOasSQLPlansResponse
   */
  async describeOasSQLPlansWithOptions(request: DescribeOasSQLPlansRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOasSQLPlansResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.dynamicSql)) {
      body["DynamicSql"] = request.dynamicSql;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.planUnionHash)) {
      body["PlanUnionHash"] = request.planUnionHash;
    }

    if (!Util.isUnset(request.returnBriefInfo)) {
      body["ReturnBriefInfo"] = request.returnBriefInfo;
    }

    if (!Util.isUnset(request.sqlId)) {
      body["SqlId"] = request.sqlId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOasSQLPlans",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOasSQLPlansResponse>(await this.callApi(params, req, runtime), new DescribeOasSQLPlansResponse({}));
  }

  /**
   * @summary You can call this API to retrieve information about the SQL execution plan stored in the diagnostic system based on the SQL ID.
   *
   * @param request DescribeOasSQLPlansRequest
   * @return DescribeOasSQLPlansResponse
   */
  async describeOasSQLPlans(request: DescribeOasSQLPlansRequest): Promise<DescribeOasSQLPlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOasSQLPlansWithOptions(request, runtime);
  }

  /**
   * @summary You can call this API to view a list of slow queries.
   *
   * @param request DescribeOasSlowSQLListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeOasSlowSQLListResponse
   */
  async describeOasSlowSQLListWithOptions(request: DescribeOasSlowSQLListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOasSlowSQLListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.dynamicSql)) {
      body["DynamicSql"] = request.dynamicSql;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.filterCondition)) {
      body["FilterCondition"] = request.filterCondition;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mergeDynamicSql)) {
      body["MergeDynamicSql"] = request.mergeDynamicSql;
    }

    if (!Util.isUnset(request.nodeIp)) {
      body["NodeIp"] = request.nodeIp;
    }

    if (!Util.isUnset(request.searchKeyWord)) {
      body["SearchKeyWord"] = request.searchKeyWord;
    }

    if (!Util.isUnset(request.searchParam)) {
      body["SearchParam"] = request.searchParam;
    }

    if (!Util.isUnset(request.searchRule)) {
      body["SearchRule"] = request.searchRule;
    }

    if (!Util.isUnset(request.searchValue)) {
      body["SearchValue"] = request.searchValue;
    }

    if (!Util.isUnset(request.sqlId)) {
      body["SqlId"] = request.sqlId;
    }

    if (!Util.isUnset(request.sqlTextLength)) {
      body["SqlTextLength"] = request.sqlTextLength;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOasSlowSQLList",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOasSlowSQLListResponse>(await this.callApi(params, req, runtime), new DescribeOasSlowSQLListResponse({}));
  }

  /**
   * @summary You can call this API to view a list of slow queries.
   *
   * @param request DescribeOasSlowSQLListRequest
   * @return DescribeOasSlowSQLListResponse
   */
  async describeOasSlowSQLList(request: DescribeOasSlowSQLListRequest): Promise<DescribeOasSlowSQLListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOasSlowSQLListWithOptions(request, runtime);
  }

  /**
   * @summary You can call this API to retrieve the list of data on the SQL execution performance collected by the diagnostic system.
   *
   * @param request DescribeOasTopSQLListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeOasTopSQLListResponse
   */
  async describeOasTopSQLListWithOptions(request: DescribeOasTopSQLListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOasTopSQLListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.dynamicSql)) {
      body["DynamicSql"] = request.dynamicSql;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.filterCondition)) {
      body["FilterCondition"] = request.filterCondition;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mergeDynamicSql)) {
      body["MergeDynamicSql"] = request.mergeDynamicSql;
    }

    if (!Util.isUnset(request.nodeIp)) {
      body["NodeIp"] = request.nodeIp;
    }

    if (!Util.isUnset(request.searchKeyWord)) {
      body["SearchKeyWord"] = request.searchKeyWord;
    }

    if (!Util.isUnset(request.searchParam)) {
      body["SearchParam"] = request.searchParam;
    }

    if (!Util.isUnset(request.searchRule)) {
      body["SearchRule"] = request.searchRule;
    }

    if (!Util.isUnset(request.searchValue)) {
      body["SearchValue"] = request.searchValue;
    }

    if (!Util.isUnset(request.sqlId)) {
      body["SqlId"] = request.sqlId;
    }

    if (!Util.isUnset(request.sqlTextLength)) {
      body["SqlTextLength"] = request.sqlTextLength;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOasTopSQLList",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOasTopSQLListResponse>(await this.callApi(params, req, runtime), new DescribeOasTopSQLListResponse({}));
  }

  /**
   * @summary You can call this API to retrieve the list of data on the SQL execution performance collected by the diagnostic system.
   *
   * @param request DescribeOasTopSQLListRequest
   * @return DescribeOasTopSQLListResponse
   */
  async describeOasTopSQLList(request: DescribeOasTopSQLListRequest): Promise<DescribeOasTopSQLListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOasTopSQLListWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to query the outline binding information or throttling information of an SQL statement in the database based on an SQLID.
   *
   * @param request DescribeOutlineBindingRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeOutlineBindingResponse
   */
  async describeOutlineBindingWithOptions(request: DescribeOutlineBindingRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOutlineBindingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.isConcurrentLimit)) {
      body["IsConcurrentLimit"] = request.isConcurrentLimit;
    }

    if (!Util.isUnset(request.SQLId)) {
      body["SQLId"] = request.SQLId;
    }

    if (!Util.isUnset(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOutlineBinding",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOutlineBindingResponse>(await this.callApi(params, req, runtime), new DescribeOutlineBindingResponse({}));
  }

  /**
   * @summary You can call this operation to query the outline binding information or throttling information of an SQL statement in the database based on an SQLID.
   *
   * @param request DescribeOutlineBindingRequest
   * @return DescribeOutlineBindingResponse
   */
  async describeOutlineBinding(request: DescribeOutlineBindingRequest): Promise<DescribeOutlineBindingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOutlineBindingWithOptions(request, runtime);
  }

  /**
   * @summary Indicates whether a restart is required for changes to the parameter to take effect. Valid values: - true: A restart is required. - false: A restart is not required.
   *
   * @param request DescribeParametersRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeParametersResponse
   */
  async describeParametersWithOptions(request: DescribeParametersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParametersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dimension)) {
      body["Dimension"] = request.dimension;
    }

    if (!Util.isUnset(request.dimensionValue)) {
      body["DimensionValue"] = request.dimensionValue;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeParameters",
      version: "2019-09-01",
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

  /**
   * @summary Indicates whether a restart is required for changes to the parameter to take effect. Valid values: - true: A restart is required. - false: A restart is not required.
   *
   * @param request DescribeParametersRequest
   * @return DescribeParametersResponse
   */
  async describeParameters(request: DescribeParametersRequest): Promise<DescribeParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParametersWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to query the modification history of cluster or tenant parameters.
   *
   * @param request DescribeParametersHistoryRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeParametersHistoryResponse
   */
  async describeParametersHistoryWithOptions(request: DescribeParametersHistoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeParametersHistoryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dimension)) {
      body["Dimension"] = request.dimension;
    }

    if (!Util.isUnset(request.dimensionValue)) {
      body["DimensionValue"] = request.dimensionValue;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeParametersHistory",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeParametersHistoryResponse>(await this.callApi(params, req, runtime), new DescribeParametersHistoryResponse({}));
  }

  /**
   * @summary You can call this operation to query the modification history of cluster or tenant parameters.
   *
   * @param request DescribeParametersHistoryRequest
   * @return DescribeParametersHistoryResponse
   */
  async describeParametersHistory(request: DescribeParametersHistoryRequest): Promise<DescribeParametersHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParametersHistoryWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to query session information.
   *
   * @param request DescribeProcessStatsCompositionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeProcessStatsCompositionResponse
   */
  async describeProcessStatsCompositionWithOptions(request: DescribeProcessStatsCompositionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProcessStatsCompositionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientIp)) {
      body["ClientIp"] = request.clientIp;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.serverIp)) {
      body["ServerIp"] = request.serverIp;
    }

    if (!Util.isUnset(request.sqlText)) {
      body["SqlText"] = request.sqlText;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.UId)) {
      body["UId"] = request.UId;
    }

    if (!Util.isUnset(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProcessStatsComposition",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProcessStatsCompositionResponse>(await this.callApi(params, req, runtime), new DescribeProcessStatsCompositionResponse({}));
  }

  /**
   * @summary You can call this operation to query session information.
   *
   * @param request DescribeProcessStatsCompositionRequest
   * @return DescribeProcessStatsCompositionResponse
   */
  async describeProcessStatsComposition(request: DescribeProcessStatsCompositionRequest): Promise<DescribeProcessStatsCompositionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProcessStatsCompositionWithOptions(request, runtime);
  }

  /**
   * @summary 查询项目详情
   *
   * @param request DescribeProjectRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeProjectResponse
   */
  async describeProjectWithOptions(request: DescribeProjectRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProject",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProjectResponse>(await this.callApi(params, req, runtime), new DescribeProjectResponse({}));
  }

  /**
   * @summary 查询项目详情
   *
   * @param request DescribeProjectRequest
   * @return DescribeProjectResponse
   */
  async describeProject(request: DescribeProjectRequest): Promise<DescribeProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProjectWithOptions(request, runtime);
  }

  /**
   * @summary 获取项目的组件信息
   *
   * @param request DescribeProjectComponentsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeProjectComponentsResponse
   */
  async describeProjectComponentsWithOptions(request: DescribeProjectComponentsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProjectComponentsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProjectComponents",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProjectComponentsResponse>(await this.callApi(params, req, runtime), new DescribeProjectComponentsResponse({}));
  }

  /**
   * @summary 获取项目的组件信息
   *
   * @param request DescribeProjectComponentsRequest
   * @return DescribeProjectComponentsResponse
   */
  async describeProjectComponents(request: DescribeProjectComponentsRequest): Promise<DescribeProjectComponentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProjectComponentsWithOptions(request, runtime);
  }

  /**
   * @summary 获取迁移/同步项目 Progress 信息
   *
   * @param request DescribeProjectProgressRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeProjectProgressResponse
   */
  async describeProjectProgressWithOptions(request: DescribeProjectProgressRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProjectProgressResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProjectProgress",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProjectProgressResponse>(await this.callApi(params, req, runtime), new DescribeProjectProgressResponse({}));
  }

  /**
   * @summary 获取迁移/同步项目 Progress 信息
   *
   * @param request DescribeProjectProgressRequest
   * @return DescribeProjectProgressResponse
   */
  async describeProjectProgress(request: DescribeProjectProgressRequest): Promise<DescribeProjectProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProjectProgressWithOptions(request, runtime);
  }

  /**
   * @summary 查询项目步骤指标
   *
   * @param request DescribeProjectStepMetricRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeProjectStepMetricResponse
   */
  async describeProjectStepMetricWithOptions(request: DescribeProjectStepMetricRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProjectStepMetricResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aggregator)) {
      body["Aggregator"] = request.aggregator;
    }

    if (!Util.isUnset(request.beginTimestamp)) {
      body["BeginTimestamp"] = request.beginTimestamp;
    }

    if (!Util.isUnset(request.endTimestamp)) {
      body["EndTimestamp"] = request.endTimestamp;
    }

    if (!Util.isUnset(request.maxPointNum)) {
      body["MaxPointNum"] = request.maxPointNum;
    }

    if (!Util.isUnset(request.metricType)) {
      body["MetricType"] = request.metricType;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.stepName)) {
      body["StepName"] = request.stepName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProjectStepMetric",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProjectStepMetricResponse>(await this.callApi(params, req, runtime), new DescribeProjectStepMetricResponse({}));
  }

  /**
   * @summary 查询项目步骤指标
   *
   * @param request DescribeProjectStepMetricRequest
   * @return DescribeProjectStepMetricResponse
   */
  async describeProjectStepMetric(request: DescribeProjectStepMetricRequest): Promise<DescribeProjectStepMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProjectStepMetricWithOptions(request, runtime);
  }

  /**
   * @summary 查询项目步骤
   *
   * @param request DescribeProjectStepsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeProjectStepsResponse
   */
  async describeProjectStepsWithOptions(request: DescribeProjectStepsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProjectStepsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProjectSteps",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProjectStepsResponse>(await this.callApi(params, req, runtime), new DescribeProjectStepsResponse({}));
  }

  /**
   * @summary 查询项目步骤
   *
   * @param request DescribeProjectStepsRequest
   * @return DescribeProjectStepsResponse
   */
  async describeProjectSteps(request: DescribeProjectStepsRequest): Promise<DescribeProjectStepsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProjectStepsWithOptions(request, runtime);
  }

  /**
   * @summary The tenant mode.   Valid values:  
   * Oracle   
   * MySQL
   *
   * @param request DescribeRecommendIndexRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRecommendIndexResponse
   */
  async describeRecommendIndexWithOptions(request: DescribeRecommendIndexRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecommendIndexResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.SQLId)) {
      body["SQLId"] = request.SQLId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRecommendIndex",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRecommendIndexResponse>(await this.callApi(params, req, runtime), new DescribeRecommendIndexResponse({}));
  }

  /**
   * @summary The tenant mode.   Valid values:  
   * Oracle   
   * MySQL
   *
   * @param request DescribeRecommendIndexRequest
   * @return DescribeRecommendIndexResponse
   */
  async describeRecommendIndex(request: DescribeRecommendIndexRequest): Promise<DescribeRecommendIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecommendIndexWithOptions(request, runtime);
  }

  /**
   * @summary The username.
   *
   * @param request DescribeSQLDetailsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeSQLDetailsResponse
   */
  async describeSQLDetailsWithOptions(request: DescribeSQLDetailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLDetailsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.SQLId)) {
      body["SQLId"] = request.SQLId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSQLDetails",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSQLDetailsResponse>(await this.callApi(params, req, runtime), new DescribeSQLDetailsResponse({}));
  }

  /**
   * @summary The username.
   *
   * @param request DescribeSQLDetailsRequest
   * @return DescribeSQLDetailsResponse
   */
  async describeSQLDetails(request: DescribeSQLDetailsRequest): Promise<DescribeSQLDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLDetailsWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to query the execution history of an SQL statement in a specified period based on an SQL ID.
   *
   * @param request DescribeSQLHistoryListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeSQLHistoryListResponse
   */
  async describeSQLHistoryListWithOptions(request: DescribeSQLHistoryListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLHistoryListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.SQLId)) {
      body["SQLId"] = request.SQLId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSQLHistoryList",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSQLHistoryListResponse>(await this.callApi(params, req, runtime), new DescribeSQLHistoryListResponse({}));
  }

  /**
   * @summary You can call this operation to query the execution history of an SQL statement in a specified period based on an SQL ID.
   *
   * @param request DescribeSQLHistoryListRequest
   * @return DescribeSQLHistoryListResponse
   */
  async describeSQLHistoryList(request: DescribeSQLHistoryListRequest): Promise<DescribeSQLHistoryListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLHistoryListWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to query the information about the SQL execution plans stored in the diagnostic system based on an SQL ID.
   *
   * @param request DescribeSQLPlansRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeSQLPlansResponse
   */
  async describeSQLPlansWithOptions(request: DescribeSQLPlansRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLPlansResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.SQLId)) {
      body["SQLId"] = request.SQLId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSQLPlans",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSQLPlansResponse>(await this.callApi(params, req, runtime), new DescribeSQLPlansResponse({}));
  }

  /**
   * @summary You can call this operation to query the information about the SQL execution plans stored in the diagnostic system based on an SQL ID.
   *
   * @param request DescribeSQLPlansRequest
   * @return DescribeSQLPlansResponse
   */
  async describeSQLPlans(request: DescribeSQLPlansRequest): Promise<DescribeSQLPlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLPlansWithOptions(request, runtime);
  }

  /**
   * @summary You can call this API to view the sample data of the execution details of the slow queries.
   *
   * @param request DescribeSQLSamplesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeSQLSamplesResponse
   */
  async describeSQLSamplesWithOptions(request: DescribeSQLSamplesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLSamplesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.returnSqlText)) {
      body["ReturnSqlText"] = request.returnSqlText;
    }

    if (!Util.isUnset(request.sqlId)) {
      body["SqlId"] = request.sqlId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSQLSamples",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSQLSamplesResponse>(await this.callApi(params, req, runtime), new DescribeSQLSamplesResponse({}));
  }

  /**
   * @summary You can call this API to view the sample data of the execution details of the slow queries.
   *
   * @param request DescribeSQLSamplesRequest
   * @return DescribeSQLSamplesResponse
   */
  async describeSQLSamples(request: DescribeSQLSamplesRequest): Promise<DescribeSQLSamplesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLSamplesWithOptions(request, runtime);
  }

  /**
   * @summary 查询采样SQL的原始文本
   *
   * @param request DescribeSampleSqlRawTextsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeSampleSqlRawTextsResponse
   */
  async describeSampleSqlRawTextsWithOptions(request: DescribeSampleSqlRawTextsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSampleSqlRawTextsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.sqlId)) {
      body["SqlId"] = request.sqlId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.traceId)) {
      body["TraceId"] = request.traceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSampleSqlRawTexts",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSampleSqlRawTextsResponse>(await this.callApi(params, req, runtime), new DescribeSampleSqlRawTextsResponse({}));
  }

  /**
   * @summary 查询采样SQL的原始文本
   *
   * @param request DescribeSampleSqlRawTextsRequest
   * @return DescribeSampleSqlRawTextsResponse
   */
  async describeSampleSqlRawTexts(request: DescribeSampleSqlRawTextsRequest): Promise<DescribeSampleSqlRawTextsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSampleSqlRawTextsWithOptions(request, runtime);
  }

  /**
   * @summary The name of the security group.
   *
   * @param request DescribeSecurityIpGroupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeSecurityIpGroupsResponse
   */
  async describeSecurityIpGroupsWithOptions(request: DescribeSecurityIpGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityIpGroupsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSecurityIpGroups",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSecurityIpGroupsResponse>(await this.callApi(params, req, runtime), new DescribeSecurityIpGroupsResponse({}));
  }

  /**
   * @summary The name of the security group.
   *
   * @param request DescribeSecurityIpGroupsRequest
   * @return DescribeSecurityIpGroupsResponse
   */
  async describeSecurityIpGroups(request: DescribeSecurityIpGroupsRequest): Promise<DescribeSecurityIpGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityIpGroupsWithOptions(request, runtime);
  }

  /**
   * @summary 查询集群租户的会话信息；展示oceanbase云服务和业务之间的会话信息
   *
   * @param request DescribeSessionListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeSessionListResponse
   */
  async describeSessionListWithOptions(request: DescribeSessionListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSessionListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSessionList",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSessionListResponse>(await this.callApi(params, req, runtime), new DescribeSessionListResponse({}));
  }

  /**
   * @summary 查询集群租户的会话信息；展示oceanbase云服务和业务之间的会话信息
   *
   * @param request DescribeSessionListRequest
   * @return DescribeSessionListResponse
   */
  async describeSessionList(request: DescribeSessionListRequest): Promise<DescribeSessionListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSessionListWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to query the execution history of an SQL statement by SQL ID that is determined as a slow SQL statement during a specified period of time.
   *
   * @param request DescribeSlowSQLHistoryListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeSlowSQLHistoryListResponse
   */
  async describeSlowSQLHistoryListWithOptions(request: DescribeSlowSQLHistoryListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlowSQLHistoryListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.SQLId)) {
      body["SQLId"] = request.SQLId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSlowSQLHistoryList",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSlowSQLHistoryListResponse>(await this.callApi(params, req, runtime), new DescribeSlowSQLHistoryListResponse({}));
  }

  /**
   * @summary You can call this operation to query the execution history of an SQL statement by SQL ID that is determined as a slow SQL statement during a specified period of time.
   *
   * @param request DescribeSlowSQLHistoryListRequest
   * @return DescribeSlowSQLHistoryListResponse
   */
  async describeSlowSQLHistoryList(request: DescribeSlowSQLHistoryListRequest): Promise<DescribeSlowSQLHistoryListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlowSQLHistoryListWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to query the list of slow SQL statements
   *
   * @param tmpReq DescribeSlowSQLListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeSlowSQLListResponse
   */
  async describeSlowSQLListWithOptions(tmpReq: DescribeSlowSQLListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSlowSQLListResponse> {
    Util.validateModel(tmpReq);
    let request = new DescribeSlowSQLListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.filterCondition)) {
      request.filterConditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterCondition, "FilterCondition", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.filterConditionShrink)) {
      body["FilterCondition"] = request.filterConditionShrink;
    }

    if (!Util.isUnset(request.nodeIp)) {
      body["NodeIp"] = request.nodeIp;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.SQLId)) {
      body["SQLId"] = request.SQLId;
    }

    if (!Util.isUnset(request.searchKeyWord)) {
      body["SearchKeyWord"] = request.searchKeyWord;
    }

    if (!Util.isUnset(request.searchParameter)) {
      body["SearchParameter"] = request.searchParameter;
    }

    if (!Util.isUnset(request.searchRule)) {
      body["SearchRule"] = request.searchRule;
    }

    if (!Util.isUnset(request.searchValue)) {
      body["SearchValue"] = request.searchValue;
    }

    if (!Util.isUnset(request.sortColumn)) {
      body["SortColumn"] = request.sortColumn;
    }

    if (!Util.isUnset(request.sortOrder)) {
      body["SortOrder"] = request.sortOrder;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSlowSQLList",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSlowSQLListResponse>(await this.callApi(params, req, runtime), new DescribeSlowSQLListResponse({}));
  }

  /**
   * @summary You can call this operation to query the list of slow SQL statements
   *
   * @param request DescribeSlowSQLListRequest
   * @return DescribeSlowSQLListResponse
   */
  async describeSlowSQLList(request: DescribeSlowSQLListRequest): Promise<DescribeSlowSQLListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlowSQLListWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to query tags.
   *
   * @param request DescribeTagValuesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeTagValuesResponse
   */
  async describeTagValuesWithOptions(request: DescribeTagValuesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagValuesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTagValues",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTagValuesResponse>(await this.callApi(params, req, runtime), new DescribeTagValuesResponse({}));
  }

  /**
   * @summary You can call this operation to query tags.
   *
   * @param request DescribeTagValuesRequest
   * @return DescribeTagValuesResponse
   */
  async describeTagValues(request: DescribeTagValuesRequest): Promise<DescribeTagValuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagValuesWithOptions(request, runtime);
  }

  /**
   * @summary The ID of the VPC.
   *
   * @param request DescribeTenantRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeTenantResponse
   */
  async describeTenantWithOptions(request: DescribeTenantRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTenantResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTenant",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTenantResponse>(await this.callApi(params, req, runtime), new DescribeTenantResponse({}));
  }

  /**
   * @summary The ID of the VPC.
   *
   * @param request DescribeTenantRequest
   * @return DescribeTenantResponse
   */
  async describeTenant(request: DescribeTenantRequest): Promise<DescribeTenantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTenantWithOptions(request, runtime);
  }

  /**
   * @summary 查询租户加密信息
   *
   * @param request DescribeTenantEncryptionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeTenantEncryptionResponse
   */
  async describeTenantEncryptionWithOptions(request: DescribeTenantEncryptionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTenantEncryptionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.tenantName)) {
      body["TenantName"] = request.tenantName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTenantEncryption",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTenantEncryptionResponse>(await this.callApi(params, req, runtime), new DescribeTenantEncryptionResponse({}));
  }

  /**
   * @summary 查询租户加密信息
   *
   * @param request DescribeTenantEncryptionRequest
   * @return DescribeTenantEncryptionResponse
   */
  async describeTenantEncryption(request: DescribeTenantEncryptionRequest): Promise<DescribeTenantEncryptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTenantEncryptionWithOptions(request, runtime);
  }

  /**
   * @summary The list of tenant IDs.
   *
   * @param request DescribeTenantMetricsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeTenantMetricsResponse
   */
  async describeTenantMetricsWithOptions(request: DescribeTenantMetricsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTenantMetricsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.metrics)) {
      body["Metrics"] = request.metrics;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.tenantIdList)) {
      body["TenantIdList"] = request.tenantIdList;
    }

    if (!Util.isUnset(request.tenantName)) {
      body["TenantName"] = request.tenantName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTenantMetrics",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTenantMetricsResponse>(await this.callApi(params, req, runtime), new DescribeTenantMetricsResponse({}));
  }

  /**
   * @summary The list of tenant IDs.
   *
   * @param request DescribeTenantMetricsRequest
   * @return DescribeTenantMetricsResponse
   */
  async describeTenantMetrics(request: DescribeTenantMetricsRequest): Promise<DescribeTenantMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTenantMetricsWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to query the maximum readable timestamp of a tenant.
   *
   * @param request DescribeTenantReadableScnRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeTenantReadableScnResponse
   */
  async describeTenantReadableScnWithOptions(request: DescribeTenantReadableScnRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTenantReadableScnResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTenantReadableScn",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTenantReadableScnResponse>(await this.callApi(params, req, runtime), new DescribeTenantReadableScnResponse({}));
  }

  /**
   * @summary You can call this operation to query the maximum readable timestamp of a tenant.
   *
   * @param request DescribeTenantReadableScnRequest
   * @return DescribeTenantReadableScnResponse
   */
  async describeTenantReadableScn(request: DescribeTenantReadableScnRequest): Promise<DescribeTenantReadableScnResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTenantReadableScnWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to query security check items of an OceanBase Database tenant.
   *
   * @param request DescribeTenantSecurityConfigsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeTenantSecurityConfigsResponse
   */
  async describeTenantSecurityConfigsWithOptions(request: DescribeTenantSecurityConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTenantSecurityConfigsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.checkId)) {
      body["CheckId"] = request.checkId;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTenantSecurityConfigs",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTenantSecurityConfigsResponse>(await this.callApi(params, req, runtime), new DescribeTenantSecurityConfigsResponse({}));
  }

  /**
   * @summary You can call this operation to query security check items of an OceanBase Database tenant.
   *
   * @param request DescribeTenantSecurityConfigsRequest
   * @return DescribeTenantSecurityConfigsResponse
   */
  async describeTenantSecurityConfigs(request: DescribeTenantSecurityConfigsRequest): Promise<DescribeTenantSecurityConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTenantSecurityConfigsWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to view the list of whitelist groups of the tenant.
   *
   * @param request DescribeTenantSecurityIpGroupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeTenantSecurityIpGroupsResponse
   */
  async describeTenantSecurityIpGroupsWithOptions(request: DescribeTenantSecurityIpGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTenantSecurityIpGroupsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTenantSecurityIpGroups",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTenantSecurityIpGroupsResponse>(await this.callApi(params, req, runtime), new DescribeTenantSecurityIpGroupsResponse({}));
  }

  /**
   * @summary You can call this operation to view the list of whitelist groups of the tenant.
   *
   * @param request DescribeTenantSecurityIpGroupsRequest
   * @return DescribeTenantSecurityIpGroupsResponse
   */
  async describeTenantSecurityIpGroups(request: DescribeTenantSecurityIpGroupsRequest): Promise<DescribeTenantSecurityIpGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTenantSecurityIpGroupsWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to query the tags of tenants in a cluster.
   *
   * @param request DescribeTenantTagsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeTenantTagsResponse
   */
  async describeTenantTagsWithOptions(request: DescribeTenantTagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTenantTagsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tags)) {
      body["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.tenantIds)) {
      body["TenantIds"] = request.tenantIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTenantTags",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTenantTagsResponse>(await this.callApi(params, req, runtime), new DescribeTenantTagsResponse({}));
  }

  /**
   * @summary You can call this operation to query the tags of tenants in a cluster.
   *
   * @param request DescribeTenantTagsRequest
   * @return DescribeTenantTagsResponse
   */
  async describeTenantTags(request: DescribeTenantTagsRequest): Promise<DescribeTenantTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTenantTagsWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to obtain the account authorization information of the tenant.
   *
   * @param request DescribeTenantUserRolesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeTenantUserRolesResponse
   */
  async describeTenantUserRolesWithOptions(request: DescribeTenantUserRolesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTenantUserRolesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTenantUserRoles",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTenantUserRolesResponse>(await this.callApi(params, req, runtime), new DescribeTenantUserRolesResponse({}));
  }

  /**
   * @summary You can call this operation to obtain the account authorization information of the tenant.
   *
   * @param request DescribeTenantUserRolesRequest
   * @return DescribeTenantUserRolesResponse
   */
  async describeTenantUserRoles(request: DescribeTenantUserRolesRequest): Promise<DescribeTenantUserRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTenantUserRolesWithOptions(request, runtime);
  }

  /**
   * @summary The return result of the request.
   *
   * @param request DescribeTenantUsersRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeTenantUsersResponse
   */
  async describeTenantUsersWithOptions(request: DescribeTenantUsersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTenantUsersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTenantUsers",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTenantUsersResponse>(await this.callApi(params, req, runtime), new DescribeTenantUsersResponse({}));
  }

  /**
   * @summary The return result of the request.
   *
   * @param request DescribeTenantUsersRequest
   * @return DescribeTenantUsersResponse
   */
  async describeTenantUsers(request: DescribeTenantUsersRequest): Promise<DescribeTenantUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTenantUsersWithOptions(request, runtime);
  }

  /**
   * @summary Indicates whether a read-only connection has been created.
   *
   * @param request DescribeTenantZonesReadRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeTenantZonesReadResponse
   */
  async describeTenantZonesReadWithOptions(request: DescribeTenantZonesReadRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTenantZonesReadResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTenantZonesRead",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTenantZonesReadResponse>(await this.callApi(params, req, runtime), new DescribeTenantZonesReadResponse({}));
  }

  /**
   * @summary Indicates whether a read-only connection has been created.
   *
   * @param request DescribeTenantZonesReadRequest
   * @return DescribeTenantZonesReadResponse
   */
  async describeTenantZonesRead(request: DescribeTenantZonesReadRequest): Promise<DescribeTenantZonesReadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTenantZonesReadWithOptions(request, runtime);
  }

  /**
   * @summary The total memory size of the tenant, in GB.
   *
   * @param request DescribeTenantsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeTenantsResponse
   */
  async describeTenantsWithOptions(request: DescribeTenantsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTenantsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.tenantName)) {
      body["TenantName"] = request.tenantName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTenants",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTenantsResponse>(await this.callApi(params, req, runtime), new DescribeTenantsResponse({}));
  }

  /**
   * @summary The total memory size of the tenant, in GB.
   *
   * @param request DescribeTenantsRequest
   * @return DescribeTenantsResponse
   */
  async describeTenants(request: DescribeTenantsRequest): Promise<DescribeTenantsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTenantsWithOptions(request, runtime);
  }

  /**
   * @summary The time zones supported by the tenant.
   *
   * @param request DescribeTimeZonesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeTimeZonesResponse
   */
  async describeTimeZonesWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeTimeZonesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeTimeZones",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTimeZonesResponse>(await this.callApi(params, req, runtime), new DescribeTimeZonesResponse({}));
  }

  /**
   * @summary The time zones supported by the tenant.
   *
   * @return DescribeTimeZonesResponse
   */
  async describeTimeZones(): Promise<DescribeTimeZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTimeZonesWithOptions(runtime);
  }

  /**
   * @summary The name of the database.
   *
   * @param tmpReq DescribeTopSQLListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeTopSQLListResponse
   */
  async describeTopSQLListWithOptions(tmpReq: DescribeTopSQLListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTopSQLListResponse> {
    Util.validateModel(tmpReq);
    let request = new DescribeTopSQLListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.filterCondition)) {
      request.filterConditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterCondition, "FilterCondition", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.filterConditionShrink)) {
      body["FilterCondition"] = request.filterConditionShrink;
    }

    if (!Util.isUnset(request.nodeIp)) {
      body["NodeIp"] = request.nodeIp;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.SQLId)) {
      body["SQLId"] = request.SQLId;
    }

    if (!Util.isUnset(request.searchKeyWord)) {
      body["SearchKeyWord"] = request.searchKeyWord;
    }

    if (!Util.isUnset(request.searchParameter)) {
      body["SearchParameter"] = request.searchParameter;
    }

    if (!Util.isUnset(request.searchRule)) {
      body["SearchRule"] = request.searchRule;
    }

    if (!Util.isUnset(request.searchValue)) {
      body["SearchValue"] = request.searchValue;
    }

    if (!Util.isUnset(request.sortColumn)) {
      body["SortColumn"] = request.sortColumn;
    }

    if (!Util.isUnset(request.sortOrder)) {
      body["SortOrder"] = request.sortOrder;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTopSQLList",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTopSQLListResponse>(await this.callApi(params, req, runtime), new DescribeTopSQLListResponse({}));
  }

  /**
   * @summary The name of the database.
   *
   * @param request DescribeTopSQLListRequest
   * @return DescribeTopSQLListResponse
   */
  async describeTopSQLList(request: DescribeTopSQLListRequest): Promise<DescribeTopSQLListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTopSQLListWithOptions(request, runtime);
  }

  /**
   * @summary The deployment mode.
   *
   * @param request DescribeZonesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeZonesResponse
   */
  async describeZonesWithOptions(request: DescribeZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZonesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cpuArch)) {
      body["CpuArch"] = request.cpuArch;
    }

    if (!Util.isUnset(request.deployType)) {
      body["DeployType"] = request.deployType;
    }

    if (!Util.isUnset(request.series)) {
      body["Series"] = request.series;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeZones",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeZonesResponse>(await this.callApi(params, req, runtime), new DescribeZonesResponse({}));
  }

  /**
   * @summary The deployment mode.
   *
   * @param request DescribeZonesRequest
   * @return DescribeZonesResponse
   */
  async describeZones(request: DescribeZonesRequest): Promise<DescribeZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  /**
   * @summary 公有云上传OSS 获取一个临时上传url
   *
   * @param request GetUploadOssUrlRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetUploadOssUrlResponse
   */
  async getUploadOssUrlWithOptions(request: GetUploadOssUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetUploadOssUrlResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.effectiveTimeMinutes)) {
      body["EffectiveTimeMinutes"] = request.effectiveTimeMinutes;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetUploadOssUrl",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUploadOssUrlResponse>(await this.callApi(params, req, runtime), new GetUploadOssUrlResponse({}));
  }

  /**
   * @summary 公有云上传OSS 获取一个临时上传url
   *
   * @param request GetUploadOssUrlRequest
   * @return GetUploadOssUrlResponse
   */
  async getUploadOssUrl(request: GetUploadOssUrlRequest): Promise<GetUploadOssUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUploadOssUrlWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to close a session.
   *
   * @param request KillProcessListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return KillProcessListResponse
   */
  async killProcessListWithOptions(request: KillProcessListRequest, runtime: $Util.RuntimeOptions): Promise<KillProcessListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.sessionList)) {
      body["SessionList"] = request.sessionList;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "KillProcessList",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<KillProcessListResponse>(await this.callApi(params, req, runtime), new KillProcessListResponse({}));
  }

  /**
   * @summary You can call this operation to close a session.
   *
   * @param request KillProcessListRequest
   * @return KillProcessListResponse
   */
  async killProcessList(request: KillProcessListRequest): Promise<KillProcessListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.killProcessListWithOptions(request, runtime);
  }

  /**
   * @summary 查询标签列表
   *
   * @param request ListAllLabelsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAllLabelsResponse
   */
  async listAllLabelsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListAllLabelsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListAllLabels",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAllLabelsResponse>(await this.callApi(params, req, runtime), new ListAllLabelsResponse({}));
  }

  /**
   * @summary 查询标签列表
   *
   * @return ListAllLabelsResponse
   */
  async listAllLabels(): Promise<ListAllLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAllLabelsWithOptions(runtime);
  }

  /**
   * @summary 查询数据源列表 (MySql、OB_MYSQL、OB_ORACLE)
   *
   * @param tmpReq ListDataSourceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListDataSourceResponse
   */
  async listDataSourceWithOptions(tmpReq: ListDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<ListDataSourceResponse> {
    Util.validateModel(tmpReq);
    let request = new ListDataSourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.types)) {
      request.typesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.types, "Types", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.order)) {
      body["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    if (!Util.isUnset(request.sortField)) {
      body["SortField"] = request.sortField;
    }

    if (!Util.isUnset(request.typesShrink)) {
      body["Types"] = request.typesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDataSource",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDataSourceResponse>(await this.callApi(params, req, runtime), new ListDataSourceResponse({}));
  }

  /**
   * @summary 查询数据源列表 (MySql、OB_MYSQL、OB_ORACLE)
   *
   * @param request ListDataSourceRequest
   * @return ListDataSourceResponse
   */
  async listDataSource(request: ListDataSourceRequest): Promise<ListDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataSourceWithOptions(request, runtime);
  }

  /**
   * @summary 查询项目的全量校验结果
   *
   * @param tmpReq ListProjectFullVerifyResultRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListProjectFullVerifyResultResponse
   */
  async listProjectFullVerifyResultWithOptions(tmpReq: ListProjectFullVerifyResultRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectFullVerifyResultResponse> {
    Util.validateModel(tmpReq);
    let request = new ListProjectFullVerifyResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.destSchemas)) {
      request.destSchemasShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.destSchemas, "DestSchemas", "json");
    }

    if (!Util.isUnset(tmpReq.sourceSchemas)) {
      request.sourceSchemasShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceSchemas, "SourceSchemas", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.destSchemasShrink)) {
      body["DestSchemas"] = request.destSchemasShrink;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.sourceSchemasShrink)) {
      body["SourceSchemas"] = request.sourceSchemasShrink;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListProjectFullVerifyResult",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListProjectFullVerifyResultResponse>(await this.callApi(params, req, runtime), new ListProjectFullVerifyResultResponse({}));
  }

  /**
   * @summary 查询项目的全量校验结果
   *
   * @param request ListProjectFullVerifyResultRequest
   * @return ListProjectFullVerifyResultResponse
   */
  async listProjectFullVerifyResult(request: ListProjectFullVerifyResultRequest): Promise<ListProjectFullVerifyResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectFullVerifyResultWithOptions(request, runtime);
  }

  /**
   * @summary 根据项目 ID 查询项目的修改记录
   *
   * @param request ListProjectModifyRecordsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListProjectModifyRecordsResponse
   */
  async listProjectModifyRecordsWithOptions(request: ListProjectModifyRecordsRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectModifyRecordsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListProjectModifyRecords",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListProjectModifyRecordsResponse>(await this.callApi(params, req, runtime), new ListProjectModifyRecordsResponse({}));
  }

  /**
   * @summary 根据项目 ID 查询项目的修改记录
   *
   * @param request ListProjectModifyRecordsRequest
   * @return ListProjectModifyRecordsResponse
   */
  async listProjectModifyRecords(request: ListProjectModifyRecordsRequest): Promise<ListProjectModifyRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectModifyRecordsWithOptions(request, runtime);
  }

  /**
   * @summary 查询项目列表
   *
   * @param tmpReq ListProjectsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListProjectsResponse
   */
  async listProjectsWithOptions(tmpReq: ListProjectsRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListProjectsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.labelIds)) {
      request.labelIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelIds, "LabelIds", "json");
    }

    if (!Util.isUnset(tmpReq.sinkEndpointTypes)) {
      request.sinkEndpointTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sinkEndpointTypes, "SinkEndpointTypes", "json");
    }

    if (!Util.isUnset(tmpReq.sourceEndpointTypes)) {
      request.sourceEndpointTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceEndpointTypes, "SourceEndpointTypes", "json");
    }

    if (!Util.isUnset(tmpReq.status)) {
      request.statusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.status, "Status", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labelIdsShrink)) {
      body["LabelIds"] = request.labelIdsShrink;
    }

    if (!Util.isUnset(request.needRelatedInfo)) {
      body["NeedRelatedInfo"] = request.needRelatedInfo;
    }

    if (!Util.isUnset(request.order)) {
      body["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    if (!Util.isUnset(request.sinkEndpointTypesShrink)) {
      body["SinkEndpointTypes"] = request.sinkEndpointTypesShrink;
    }

    if (!Util.isUnset(request.sortField)) {
      body["SortField"] = request.sortField;
    }

    if (!Util.isUnset(request.sourceEndpointTypesShrink)) {
      body["SourceEndpointTypes"] = request.sourceEndpointTypesShrink;
    }

    if (!Util.isUnset(request.statusShrink)) {
      body["Status"] = request.statusShrink;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.visibleSubProject)) {
      body["VisibleSubProject"] = request.visibleSubProject;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListProjects",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListProjectsResponse>(await this.callApi(params, req, runtime), new ListProjectsResponse({}));
  }

  /**
   * @summary 查询项目列表
   *
   * @param request ListProjectsRequest
   * @return ListProjectsResponse
   */
  async listProjects(request: ListProjectsRequest): Promise<ListProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectsWithOptions(request, runtime);
  }

  /**
   * @summary 查询传输实例列表
   *
   * @param tmpReq ListWorkerInstancesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListWorkerInstancesResponse
   */
  async listWorkerInstancesWithOptions(tmpReq: ListWorkerInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListWorkerInstancesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListWorkerInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.specs)) {
      request.specsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.specs, "Specs", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.destType)) {
      body["DestType"] = request.destType;
    }

    if (!Util.isUnset(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.onlyBindable)) {
      body["OnlyBindable"] = request.onlyBindable;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.specsShrink)) {
      body["Specs"] = request.specsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListWorkerInstances",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWorkerInstancesResponse>(await this.callApi(params, req, runtime), new ListWorkerInstancesResponse({}));
  }

  /**
   * @summary 查询传输实例列表
   *
   * @param request ListWorkerInstancesRequest
   * @return ListWorkerInstancesResponse
   */
  async listWorkerInstances(request: ListWorkerInstancesRequest): Promise<ListWorkerInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWorkerInstancesWithOptions(request, runtime);
  }

  /**
   * @summary The request ID.
   *
   * @param request ModifyDatabaseDescriptionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDatabaseDescriptionResponse
   */
  async modifyDatabaseDescriptionWithOptions(request: ModifyDatabaseDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDatabaseDescriptionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDatabaseDescription",
      version: "2019-09-01",
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

  /**
   * @summary The request ID.
   *
   * @param request ModifyDatabaseDescriptionRequest
   * @return ModifyDatabaseDescriptionResponse
   */
  async modifyDatabaseDescription(request: ModifyDatabaseDescriptionRequest): Promise<ModifyDatabaseDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDatabaseDescriptionWithOptions(request, runtime);
  }

  /**
   * @summary The accounts that have privileges on the database.
   *
   * @param request ModifyDatabaseUserRolesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDatabaseUserRolesResponse
   */
  async modifyDatabaseUserRolesWithOptions(request: ModifyDatabaseUserRolesRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDatabaseUserRolesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDatabaseUserRoles",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDatabaseUserRolesResponse>(await this.callApi(params, req, runtime), new ModifyDatabaseUserRolesResponse({}));
  }

  /**
   * @summary The accounts that have privileges on the database.
   *
   * @param request ModifyDatabaseUserRolesRequest
   * @return ModifyDatabaseUserRolesResponse
   */
  async modifyDatabaseUserRoles(request: ModifyDatabaseUserRolesRequest): Promise<ModifyDatabaseUserRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDatabaseUserRolesWithOptions(request, runtime);
  }

  /**
   * @summary The name of the OceanBase cluster.
   *
   * @param request ModifyInstanceNameRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyInstanceNameResponse
   */
  async modifyInstanceNameWithOptions(request: ModifyInstanceNameRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceNameResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstanceName",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceNameResponse>(await this.callApi(params, req, runtime), new ModifyInstanceNameResponse({}));
  }

  /**
   * @summary The name of the OceanBase cluster.
   *
   * @param request ModifyInstanceNameRequest
   * @return ModifyInstanceNameResponse
   */
  async modifyInstanceName(request: ModifyInstanceNameRequest): Promise<ModifyInstanceNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceNameWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to modify the number of nodes in a cluster.
   *
   * @param request ModifyInstanceNodeNumRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyInstanceNodeNumResponse
   */
  async modifyInstanceNodeNumWithOptions(request: ModifyInstanceNodeNumRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceNodeNumResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nodeNum)) {
      body["NodeNum"] = request.nodeNum;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstanceNodeNum",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceNodeNumResponse>(await this.callApi(params, req, runtime), new ModifyInstanceNodeNumResponse({}));
  }

  /**
   * @summary You can call this operation to modify the number of nodes in a cluster.
   *
   * @param request ModifyInstanceNodeNumRequest
   * @return ModifyInstanceNodeNumResponse
   */
  async modifyInstanceNodeNum(request: ModifyInstanceNodeNumRequest): Promise<ModifyInstanceNodeNumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceNodeNumWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to modify the Secure Sockets Layer (SSL) setting for an OceanBase cluster instance.
   *
   * @description There is currently no authorization information disclosed in the API.
   *
   * @param request ModifyInstanceSSLRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyInstanceSSLResponse
   */
  async modifyInstanceSSLWithOptions(request: ModifyInstanceSSLRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceSSLResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.enableSSL)) {
      body["EnableSSL"] = request.enableSSL;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstanceSSL",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceSSLResponse>(await this.callApi(params, req, runtime), new ModifyInstanceSSLResponse({}));
  }

  /**
   * @summary You can call this operation to modify the Secure Sockets Layer (SSL) setting for an OceanBase cluster instance.
   *
   * @description There is currently no authorization information disclosed in the API.
   *
   * @param request ModifyInstanceSSLRequest
   * @return ModifyInstanceSSLResponse
   */
  async modifyInstanceSSL(request: ModifyInstanceSSLRequest): Promise<ModifyInstanceSSLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceSSLWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to modify the cluster specifications and storage space.
   *
   * @param request ModifyInstanceSpecRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyInstanceSpecResponse
   */
  async modifyInstanceSpecWithOptions(request: ModifyInstanceSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceSpecResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.diskSize)) {
      body["DiskSize"] = request.diskSize;
    }

    if (!Util.isUnset(request.diskType)) {
      body["DiskType"] = request.diskType;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.instanceClass)) {
      body["InstanceClass"] = request.instanceClass;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.upgradeSpecNative)) {
      body["UpgradeSpecNative"] = request.upgradeSpecNative;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstanceSpec",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceSpecResponse>(await this.callApi(params, req, runtime), new ModifyInstanceSpecResponse({}));
  }

  /**
   * @summary You can call this operation to modify the cluster specifications and storage space.
   *
   * @param request ModifyInstanceSpecRequest
   * @return ModifyInstanceSpecResponse
   */
  async modifyInstanceSpec(request: ModifyInstanceSpecRequest): Promise<ModifyInstanceSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceSpecWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to modify the tags of a cluster.
   *
   * @param request ModifyInstanceTagsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyInstanceTagsResponse
   */
  async modifyInstanceTagsWithOptions(request: ModifyInstanceTagsRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceTagsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstanceTags",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceTagsResponse>(await this.callApi(params, req, runtime), new ModifyInstanceTagsResponse({}));
  }

  /**
   * @summary You can call this operation to modify the tags of a cluster.
   *
   * @param request ModifyInstanceTagsRequest
   * @return ModifyInstanceTagsResponse
   */
  async modifyInstanceTags(request: ModifyInstanceTagsRequest): Promise<ModifyInstanceTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceTagsWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to modify the temporary capacity of the OceanBase cluster.
   *
   * @param request ModifyInstanceTemporaryCapacityRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyInstanceTemporaryCapacityResponse
   */
  async modifyInstanceTemporaryCapacityWithOptions(request: ModifyInstanceTemporaryCapacityRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceTemporaryCapacityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.diskSize)) {
      body["DiskSize"] = request.diskSize;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstanceTemporaryCapacity",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceTemporaryCapacityResponse>(await this.callApi(params, req, runtime), new ModifyInstanceTemporaryCapacityResponse({}));
  }

  /**
   * @summary You can call this operation to modify the temporary capacity of the OceanBase cluster.
   *
   * @param request ModifyInstanceTemporaryCapacityRequest
   * @return ModifyInstanceTemporaryCapacityResponse
   */
  async modifyInstanceTemporaryCapacity(request: ModifyInstanceTemporaryCapacityRequest): Promise<ModifyInstanceTemporaryCapacityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceTemporaryCapacityWithOptions(request, runtime);
  }

  /**
   * @summary The modification results.
   *
   * @param request ModifyParametersRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyParametersResponse
   */
  async modifyParametersWithOptions(request: ModifyParametersRequest, runtime: $Util.RuntimeOptions): Promise<ModifyParametersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dimension)) {
      body["Dimension"] = request.dimension;
    }

    if (!Util.isUnset(request.dimensionValue)) {
      body["DimensionValue"] = request.dimensionValue;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.parameters)) {
      body["Parameters"] = request.parameters;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyParameters",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyParametersResponse>(await this.callApi(params, req, runtime), new ModifyParametersResponse({}));
  }

  /**
   * @summary The modification results.
   *
   * @param request ModifyParametersRequest
   * @return ModifyParametersResponse
   */
  async modifyParameters(request: ModifyParametersRequest): Promise<ModifyParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyParametersWithOptions(request, runtime);
  }

  /**
   * @summary The name of the security group.
   *
   * @param request ModifySecurityIpsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifySecurityIpsResponse
   */
  async modifySecurityIpsWithOptions(request: ModifySecurityIpsRequest, runtime: $Util.RuntimeOptions): Promise<ModifySecurityIpsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.securityIpGroupName)) {
      body["SecurityIpGroupName"] = request.securityIpGroupName;
    }

    if (!Util.isUnset(request.securityIps)) {
      body["SecurityIps"] = request.securityIps;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifySecurityIps",
      version: "2019-09-01",
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

  /**
   * @summary The name of the security group.
   *
   * @param request ModifySecurityIpsRequest
   * @return ModifySecurityIpsResponse
   */
  async modifySecurityIps(request: ModifySecurityIpsRequest): Promise<ModifySecurityIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySecurityIpsWithOptions(request, runtime);
  }

  /**
   * @param request ModifyTagNameRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyTagNameResponse
   */
  async modifyTagNameWithOptions(request: ModifyTagNameRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTagNameResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.key)) {
      body["Key"] = request.key;
    }

    if (!Util.isUnset(request.newKey)) {
      body["NewKey"] = request.newKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTagName",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyTagNameResponse>(await this.callApi(params, req, runtime), new ModifyTagNameResponse({}));
  }

  /**
   * @param request ModifyTagNameRequest
   * @return ModifyTagNameResponse
   */
  async modifyTagName(request: ModifyTagNameRequest): Promise<ModifyTagNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTagNameWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to rename a tag.
   *
   * @param request ModifyTagValueNameRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyTagValueNameResponse
   */
  async modifyTagValueNameWithOptions(request: ModifyTagValueNameRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTagValueNameResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.key)) {
      body["Key"] = request.key;
    }

    if (!Util.isUnset(request.newValue)) {
      body["NewValue"] = request.newValue;
    }

    if (!Util.isUnset(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTagValueName",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyTagValueNameResponse>(await this.callApi(params, req, runtime), new ModifyTagValueNameResponse({}));
  }

  /**
   * @summary You can call this operation to rename a tag.
   *
   * @param request ModifyTagValueNameRequest
   * @return ModifyTagValueNameResponse
   */
  async modifyTagValueName(request: ModifyTagValueNameRequest): Promise<ModifyTagValueNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTagValueNameWithOptions(request, runtime);
  }

  /**
   * @summary 租户加密变更
   *
   * @param request ModifyTenantEncryptionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyTenantEncryptionResponse
   */
  async modifyTenantEncryptionWithOptions(request: ModifyTenantEncryptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTenantEncryptionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.encryptionKeyId)) {
      body["EncryptionKeyId"] = request.encryptionKeyId;
    }

    if (!Util.isUnset(request.encryptionType)) {
      body["EncryptionType"] = request.encryptionType;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTenantEncryption",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyTenantEncryptionResponse>(await this.callApi(params, req, runtime), new ModifyTenantEncryptionResponse({}));
  }

  /**
   * @summary 租户加密变更
   *
   * @param request ModifyTenantEncryptionRequest
   * @return ModifyTenantEncryptionResponse
   */
  async modifyTenantEncryption(request: ModifyTenantEncryptionRequest): Promise<ModifyTenantEncryptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTenantEncryptionWithOptions(request, runtime);
  }

  /**
   * @summary The return result of the request.
   *
   * @param request ModifyTenantPrimaryZoneRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyTenantPrimaryZoneResponse
   */
  async modifyTenantPrimaryZoneWithOptions(request: ModifyTenantPrimaryZoneRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTenantPrimaryZoneResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.masterIntranetAddressZone)) {
      body["MasterIntranetAddressZone"] = request.masterIntranetAddressZone;
    }

    if (!Util.isUnset(request.primaryZone)) {
      body["PrimaryZone"] = request.primaryZone;
    }

    if (!Util.isUnset(request.tenantEndpointDirectId)) {
      body["TenantEndpointDirectId"] = request.tenantEndpointDirectId;
    }

    if (!Util.isUnset(request.tenantEndpointId)) {
      body["TenantEndpointId"] = request.tenantEndpointId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.userDirectVSwitchId)) {
      body["UserDirectVSwitchId"] = request.userDirectVSwitchId;
    }

    if (!Util.isUnset(request.userVSwitchId)) {
      body["UserVSwitchId"] = request.userVSwitchId;
    }

    if (!Util.isUnset(request.userVpcOwnerId)) {
      body["UserVpcOwnerId"] = request.userVpcOwnerId;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTenantPrimaryZone",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyTenantPrimaryZoneResponse>(await this.callApi(params, req, runtime), new ModifyTenantPrimaryZoneResponse({}));
  }

  /**
   * @summary The return result of the request.
   *
   * @param request ModifyTenantPrimaryZoneRequest
   * @return ModifyTenantPrimaryZoneResponse
   */
  async modifyTenantPrimaryZone(request: ModifyTenantPrimaryZoneRequest): Promise<ModifyTenantPrimaryZoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTenantPrimaryZoneWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to modify the specifications of a tenant in an OceanBase cluster.
   *
   * @param request ModifyTenantResourceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyTenantResourceResponse
   */
  async modifyTenantResourceWithOptions(request: ModifyTenantResourceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTenantResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cpu)) {
      body["Cpu"] = request.cpu;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.logDisk)) {
      body["LogDisk"] = request.logDisk;
    }

    if (!Util.isUnset(request.memory)) {
      body["Memory"] = request.memory;
    }

    if (!Util.isUnset(request.readOnlyZoneList)) {
      body["ReadOnlyZoneList"] = request.readOnlyZoneList;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTenantResource",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyTenantResourceResponse>(await this.callApi(params, req, runtime), new ModifyTenantResourceResponse({}));
  }

  /**
   * @summary You can call this operation to modify the specifications of a tenant in an OceanBase cluster.
   *
   * @param request ModifyTenantResourceRequest
   * @return ModifyTenantResourceResponse
   */
  async modifyTenantResource(request: ModifyTenantResourceRequest): Promise<ModifyTenantResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTenantResourceWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to modify the information on the whitelist group of the tenant.
   *
   * @param request ModifyTenantSecurityIpGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyTenantSecurityIpGroupResponse
   */
  async modifyTenantSecurityIpGroupWithOptions(request: ModifyTenantSecurityIpGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTenantSecurityIpGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.securityIpGroupName)) {
      body["SecurityIpGroupName"] = request.securityIpGroupName;
    }

    if (!Util.isUnset(request.securityIps)) {
      body["SecurityIps"] = request.securityIps;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTenantSecurityIpGroup",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyTenantSecurityIpGroupResponse>(await this.callApi(params, req, runtime), new ModifyTenantSecurityIpGroupResponse({}));
  }

  /**
   * @summary You can call this operation to modify the information on the whitelist group of the tenant.
   *
   * @param request ModifyTenantSecurityIpGroupRequest
   * @return ModifyTenantSecurityIpGroupResponse
   */
  async modifyTenantSecurityIpGroup(request: ModifyTenantSecurityIpGroupRequest): Promise<ModifyTenantSecurityIpGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTenantSecurityIpGroupWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to modify the tags of a tenant.
   *
   * @param request ModifyTenantTagsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyTenantTagsResponse
   */
  async modifyTenantTagsWithOptions(request: ModifyTenantTagsRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTenantTagsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tags)) {
      body["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTenantTags",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyTenantTagsResponse>(await this.callApi(params, req, runtime), new ModifyTenantTagsResponse({}));
  }

  /**
   * @summary You can call this operation to modify the tags of a tenant.
   *
   * @param request ModifyTenantTagsRequest
   * @return ModifyTenantTagsResponse
   */
  async modifyTenantTags(request: ModifyTenantTagsRequest): Promise<ModifyTenantTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTenantTagsWithOptions(request, runtime);
  }

  /**
   * @summary The description of the database.
   *
   * @param request ModifyTenantUserDescriptionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyTenantUserDescriptionResponse
   */
  async modifyTenantUserDescriptionWithOptions(request: ModifyTenantUserDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTenantUserDescriptionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTenantUserDescription",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyTenantUserDescriptionResponse>(await this.callApi(params, req, runtime), new ModifyTenantUserDescriptionResponse({}));
  }

  /**
   * @summary The description of the database.
   *
   * @param request ModifyTenantUserDescriptionRequest
   * @return ModifyTenantUserDescriptionResponse
   */
  async modifyTenantUserDescription(request: ModifyTenantUserDescriptionRequest): Promise<ModifyTenantUserDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTenantUserDescriptionWithOptions(request, runtime);
  }

  /**
   * @summary The request ID.
   *
   * @param request ModifyTenantUserPasswordRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyTenantUserPasswordResponse
   */
  async modifyTenantUserPasswordWithOptions(request: ModifyTenantUserPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTenantUserPasswordResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.encryptionType)) {
      body["EncryptionType"] = request.encryptionType;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.userName)) {
      body["UserName"] = request.userName;
    }

    if (!Util.isUnset(request.userPassword)) {
      body["UserPassword"] = request.userPassword;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTenantUserPassword",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyTenantUserPasswordResponse>(await this.callApi(params, req, runtime), new ModifyTenantUserPasswordResponse({}));
  }

  /**
   * @summary The request ID.
   *
   * @param request ModifyTenantUserPasswordRequest
   * @return ModifyTenantUserPasswordResponse
   */
  async modifyTenantUserPassword(request: ModifyTenantUserPasswordRequest): Promise<ModifyTenantUserPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTenantUserPasswordWithOptions(request, runtime);
  }

  /**
   * @summary Indicates whether the privilege was granted to the role.
   *
   * @param request ModifyTenantUserRolesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyTenantUserRolesResponse
   */
  async modifyTenantUserRolesWithOptions(request: ModifyTenantUserRolesRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTenantUserRolesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.modifyType)) {
      body["ModifyType"] = request.modifyType;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.userName)) {
      body["UserName"] = request.userName;
    }

    if (!Util.isUnset(request.userRole)) {
      body["UserRole"] = request.userRole;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTenantUserRoles",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyTenantUserRolesResponse>(await this.callApi(params, req, runtime), new ModifyTenantUserRolesResponse({}));
  }

  /**
   * @summary Indicates whether the privilege was granted to the role.
   *
   * @param request ModifyTenantUserRolesRequest
   * @return ModifyTenantUserRolesResponse
   */
  async modifyTenantUserRoles(request: ModifyTenantUserRolesRequest): Promise<ModifyTenantUserRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTenantUserRolesWithOptions(request, runtime);
  }

  /**
   * @summary The ID of the tenant.
   *
   * @param request ModifyTenantUserStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyTenantUserStatusResponse
   */
  async modifyTenantUserStatusWithOptions(request: ModifyTenantUserStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTenantUserStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.userName)) {
      body["UserName"] = request.userName;
    }

    if (!Util.isUnset(request.userStatus)) {
      body["UserStatus"] = request.userStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTenantUserStatus",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyTenantUserStatusResponse>(await this.callApi(params, req, runtime), new ModifyTenantUserStatusResponse({}));
  }

  /**
   * @summary The ID of the tenant.
   *
   * @param request ModifyTenantUserStatusRequest
   * @return ModifyTenantUserStatusResponse
   */
  async modifyTenantUserStatus(request: ModifyTenantUserStatusRequest): Promise<ModifyTenantUserStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTenantUserStatusWithOptions(request, runtime);
  }

  /**
   * @summary 释放项目
   *
   * @param request ReleaseProjectRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ReleaseProjectResponse
   */
  async releaseProjectWithOptions(request: ReleaseProjectRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseProject",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseProjectResponse>(await this.callApi(params, req, runtime), new ReleaseProjectResponse({}));
  }

  /**
   * @summary 释放项目
   *
   * @param request ReleaseProjectRequest
   * @return ReleaseProjectResponse
   */
  async releaseProject(request: ReleaseProjectRequest): Promise<ReleaseProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseProjectWithOptions(request, runtime);
  }

  /**
   * @summary 释放传输实例 （未绑定项目时才可以释放）
   *
   * @param request ReleaseWorkerInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ReleaseWorkerInstanceResponse
   */
  async releaseWorkerInstanceWithOptions(request: ReleaseWorkerInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseWorkerInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseWorkerInstance",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseWorkerInstanceResponse>(await this.callApi(params, req, runtime), new ReleaseWorkerInstanceResponse({}));
  }

  /**
   * @summary 释放传输实例 （未绑定项目时才可以释放）
   *
   * @param request ReleaseWorkerInstanceRequest
   * @return ReleaseWorkerInstanceResponse
   */
  async releaseWorkerInstance(request: ReleaseWorkerInstanceRequest): Promise<ReleaseWorkerInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseWorkerInstanceWithOptions(request, runtime);
  }

  /**
   * @summary 恢复项目
   *
   * @param request ResumeProjectRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ResumeProjectResponse
   */
  async resumeProjectWithOptions(request: ResumeProjectRequest, runtime: $Util.RuntimeOptions): Promise<ResumeProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ResumeProject",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResumeProjectResponse>(await this.callApi(params, req, runtime), new ResumeProjectResponse({}));
  }

  /**
   * @summary 恢复项目
   *
   * @param request ResumeProjectRequest
   * @return ResumeProjectResponse
   */
  async resumeProject(request: ResumeProjectRequest): Promise<ResumeProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeProjectWithOptions(request, runtime);
  }

  /**
   * @summary 根据修改记录 ID 重试修改操作（仅支持处于 FAILED 状态的修改记录）
   *
   * @param request RetryProjectModifyRecordsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RetryProjectModifyRecordsResponse
   */
  async retryProjectModifyRecordsWithOptions(request: RetryProjectModifyRecordsRequest, runtime: $Util.RuntimeOptions): Promise<RetryProjectModifyRecordsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RetryProjectModifyRecords",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RetryProjectModifyRecordsResponse>(await this.callApi(params, req, runtime), new RetryProjectModifyRecordsResponse({}));
  }

  /**
   * @summary 根据修改记录 ID 重试修改操作（仅支持处于 FAILED 状态的修改记录）
   *
   * @param request RetryProjectModifyRecordsRequest
   * @return RetryProjectModifyRecordsResponse
   */
  async retryProjectModifyRecords(request: RetryProjectModifyRecordsRequest): Promise<RetryProjectModifyRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.retryProjectModifyRecordsWithOptions(request, runtime);
  }

  /**
   * @summary 启动项目
   *
   * @param request StartProjectRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartProjectResponse
   */
  async startProjectWithOptions(request: StartProjectRequest, runtime: $Util.RuntimeOptions): Promise<StartProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartProject",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartProjectResponse>(await this.callApi(params, req, runtime), new StartProjectResponse({}));
  }

  /**
   * @summary 启动项目
   *
   * @param request StartProjectRequest
   * @return StartProjectResponse
   */
  async startProject(request: StartProjectRequest): Promise<StartProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startProjectWithOptions(request, runtime);
  }

  /**
   * @summary 启动该label下的所有未启动项目
   *
   * @param request StartProjectsByLabelRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartProjectsByLabelResponse
   */
  async startProjectsByLabelWithOptions(request: StartProjectsByLabelRequest, runtime: $Util.RuntimeOptions): Promise<StartProjectsByLabelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartProjectsByLabel",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartProjectsByLabelResponse>(await this.callApi(params, req, runtime), new StartProjectsByLabelResponse({}));
  }

  /**
   * @summary 启动该label下的所有未启动项目
   *
   * @param request StartProjectsByLabelRequest
   * @return StartProjectsByLabelResponse
   */
  async startProjectsByLabel(request: StartProjectsByLabelRequest): Promise<StartProjectsByLabelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startProjectsByLabelWithOptions(request, runtime);
  }

  /**
   * @summary 暂停项目
   *
   * @param request StopProjectRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopProjectResponse
   */
  async stopProjectWithOptions(request: StopProjectRequest, runtime: $Util.RuntimeOptions): Promise<StopProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StopProject",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopProjectResponse>(await this.callApi(params, req, runtime), new StopProjectResponse({}));
  }

  /**
   * @summary 暂停项目
   *
   * @param request StopProjectRequest
   * @return StopProjectResponse
   */
  async stopProject(request: StopProjectRequest): Promise<StopProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopProjectWithOptions(request, runtime);
  }

  /**
   * @summary 根据修改记录 ID 终止修改操作，不可恢复（仅支持处于 RUNNING / FAILED 状态的修改记录）
   *
   * @param request StopProjectModifyRecordsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopProjectModifyRecordsResponse
   */
  async stopProjectModifyRecordsWithOptions(request: StopProjectModifyRecordsRequest, runtime: $Util.RuntimeOptions): Promise<StopProjectModifyRecordsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StopProjectModifyRecords",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopProjectModifyRecordsResponse>(await this.callApi(params, req, runtime), new StopProjectModifyRecordsResponse({}));
  }

  /**
   * @summary 根据修改记录 ID 终止修改操作，不可恢复（仅支持处于 RUNNING / FAILED 状态的修改记录）
   *
   * @param request StopProjectModifyRecordsRequest
   * @return StopProjectModifyRecordsResponse
   */
  async stopProjectModifyRecords(request: StopProjectModifyRecordsRequest): Promise<StopProjectModifyRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopProjectModifyRecordsWithOptions(request, runtime);
  }

  /**
   * @summary 暂停该label下的所有运行中项目
   *
   * @param request StopProjectsByLabelRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopProjectsByLabelResponse
   */
  async stopProjectsByLabelWithOptions(request: StopProjectsByLabelRequest, runtime: $Util.RuntimeOptions): Promise<StopProjectsByLabelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StopProjectsByLabel",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopProjectsByLabelResponse>(await this.callApi(params, req, runtime), new StopProjectsByLabelResponse({}));
  }

  /**
   * @summary 暂停该label下的所有运行中项目
   *
   * @param request StopProjectsByLabelRequest
   * @return StopProjectsByLabelResponse
   */
  async stopProjectsByLabel(request: StopProjectsByLabelRequest): Promise<StopProjectsByLabelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopProjectsByLabelWithOptions(request, runtime);
  }

  /**
   * @summary You can call this operation to switch between the primary and standby instances of OceanBase.
   *
   * @param request SwitchoverInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SwitchoverInstanceResponse
   */
  async switchoverInstanceWithOptions(request: SwitchoverInstanceRequest, runtime: $Util.RuntimeOptions): Promise<SwitchoverInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.forced)) {
      body["Forced"] = request.forced;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.targetInstanceId)) {
      body["TargetInstanceId"] = request.targetInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SwitchoverInstance",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SwitchoverInstanceResponse>(await this.callApi(params, req, runtime), new SwitchoverInstanceResponse({}));
  }

  /**
   * @summary You can call this operation to switch between the primary and standby instances of OceanBase.
   *
   * @param request SwitchoverInstanceRequest
   * @return SwitchoverInstanceResponse
   */
  async switchoverInstance(request: SwitchoverInstanceRequest): Promise<SwitchoverInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchoverInstanceWithOptions(request, runtime);
  }

  /**
   * @summary 更新项目配置 Action=UpdateProjectConfig
   *
   * @param tmpReq UpdateProjectConfigRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateProjectConfigResponse
   */
  async updateProjectConfigWithOptions(tmpReq: UpdateProjectConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProjectConfigResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateProjectConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.commonTransferConfig)) {
      request.commonTransferConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.commonTransferConfig, "CommonTransferConfig", "json");
    }

    if (!Util.isUnset(tmpReq.fullTransferConfig)) {
      request.fullTransferConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fullTransferConfig, "FullTransferConfig", "json");
    }

    if (!Util.isUnset(tmpReq.incrTransferConfig)) {
      request.incrTransferConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.incrTransferConfig, "IncrTransferConfig", "json");
    }

    if (!Util.isUnset(tmpReq.reverseIncrTransferConfig)) {
      request.reverseIncrTransferConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.reverseIncrTransferConfig, "ReverseIncrTransferConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.commonTransferConfigShrink)) {
      body["CommonTransferConfig"] = request.commonTransferConfigShrink;
    }

    if (!Util.isUnset(request.fullTransferConfigShrink)) {
      body["FullTransferConfig"] = request.fullTransferConfigShrink;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.incrTransferConfigShrink)) {
      body["IncrTransferConfig"] = request.incrTransferConfigShrink;
    }

    if (!Util.isUnset(request.reverseIncrTransferConfigShrink)) {
      body["ReverseIncrTransferConfig"] = request.reverseIncrTransferConfigShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProjectConfig",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateProjectConfigResponse>(await this.callApi(params, req, runtime), new UpdateProjectConfigResponse({}));
  }

  /**
   * @summary 更新项目配置 Action=UpdateProjectConfig
   *
   * @param request UpdateProjectConfigRequest
   * @return UpdateProjectConfigResponse
   */
  async updateProjectConfig(request: UpdateProjectConfigRequest): Promise<UpdateProjectConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProjectConfigWithOptions(request, runtime);
  }

}
