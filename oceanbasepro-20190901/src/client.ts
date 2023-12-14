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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDatabaseResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  diskSize?: number;
  diskType?: string;
  dryRun?: boolean;
  instanceClass?: string;
  instanceName?: string;
  isolationOptimization?: string;
  obVersion?: string;
  period?: number;
  periodUnit?: string;
  replicaMode?: string;
  resourceGroupId?: string;
  series?: string;
  zones?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      chargeType: 'ChargeType',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      dryRun: 'DryRun',
      instanceClass: 'InstanceClass',
      instanceName: 'InstanceName',
      isolationOptimization: 'IsolationOptimization',
      obVersion: 'ObVersion',
      period: 'Period',
      periodUnit: 'PeriodUnit',
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
      diskSize: 'number',
      diskType: 'string',
      dryRun: 'boolean',
      instanceClass: 'string',
      instanceName: 'string',
      isolationOptimization: 'string',
      obVersion: 'string',
      period: 'number',
      periodUnit: 'string',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateLabelResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMySqlDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOceanBaseDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOmsMysqlDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class CreateOmsOpenAPIProjectRequest extends $tea.Model {
  businessName?: string;
  destConfig?: CreateOmsOpenAPIProjectRequestDestConfig;
  labelIds?: string[];
  pageNumber?: number;
  pageSize?: number;
  projectName?: string;
  sourceConfig?: CreateOmsOpenAPIProjectRequestSourceConfig;
  transferMapping?: CreateOmsOpenAPIProjectRequestTransferMapping;
  transferStepConfig?: CreateOmsOpenAPIProjectRequestTransferStepConfig;
  workerGradeId?: string;
  static names(): { [key: string]: string } {
    return {
      businessName: 'BusinessName',
      destConfig: 'DestConfig',
      labelIds: 'LabelIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectName: 'ProjectName',
      sourceConfig: 'SourceConfig',
      transferMapping: 'TransferMapping',
      transferStepConfig: 'TransferStepConfig',
      workerGradeId: 'WorkerGradeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessName: 'string',
      destConfig: CreateOmsOpenAPIProjectRequestDestConfig,
      labelIds: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      projectName: 'string',
      sourceConfig: CreateOmsOpenAPIProjectRequestSourceConfig,
      transferMapping: CreateOmsOpenAPIProjectRequestTransferMapping,
      transferStepConfig: CreateOmsOpenAPIProjectRequestTransferStepConfig,
      workerGradeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOmsOpenAPIProjectShrinkRequest extends $tea.Model {
  businessName?: string;
  destConfigShrink?: string;
  labelIdsShrink?: string;
  pageNumber?: number;
  pageSize?: number;
  projectName?: string;
  sourceConfigShrink?: string;
  transferMappingShrink?: string;
  transferStepConfigShrink?: string;
  workerGradeId?: string;
  static names(): { [key: string]: string } {
    return {
      businessName: 'BusinessName',
      destConfigShrink: 'DestConfig',
      labelIdsShrink: 'LabelIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectName: 'ProjectName',
      sourceConfigShrink: 'SourceConfig',
      transferMappingShrink: 'TransferMapping',
      transferStepConfigShrink: 'TransferStepConfig',
      workerGradeId: 'WorkerGradeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessName: 'string',
      destConfigShrink: 'string',
      labelIdsShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectName: 'string',
      sourceConfigShrink: 'string',
      transferMappingShrink: 'string',
      transferStepConfigShrink: 'string',
      workerGradeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOmsOpenAPIProjectResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: string;
  errorDetail?: CreateOmsOpenAPIProjectResponseBodyErrorDetail;
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
      errorDetail: CreateOmsOpenAPIProjectResponseBodyErrorDetail,
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

export class CreateOmsOpenAPIProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOmsOpenAPIProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateOmsOpenAPIProjectResponseBody,
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
  incrTransferConfig?: CreateProjectRequestIncrTransferConfig;
  labelIds?: string[];
  name?: string;
  ossKey?: string;
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
      incrTransferConfig: 'IncrTransferConfig',
      labelIds: 'LabelIds',
      name: 'Name',
      ossKey: 'OssKey',
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
      incrTransferConfig: CreateProjectRequestIncrTransferConfig,
      labelIds: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      ossKey: 'string',
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
  incrTransferConfigShrink?: string;
  labelIdsShrink?: string;
  name?: string;
  ossKey?: string;
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
      incrTransferConfigShrink: 'IncrTransferConfig',
      labelIdsShrink: 'LabelIds',
      name: 'Name',
      ossKey: 'OssKey',
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
      incrTransferConfigShrink: 'string',
      labelIdsShrink: 'string',
      name: 'string',
      ossKey: 'string',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSecurityIpGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class CreateTenantRequest extends $tea.Model {
  charset?: string;
  cpu?: number;
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
  static names(): { [key: string]: string } {
    return {
      charset: 'Charset',
      cpu: 'Cpu',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      charset: 'string',
      cpu: 'number',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTenantResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTenantReadOnlyConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTenantSecurityIpGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  tenantUser?: CreateTenantUserResponseBodyTenantUser[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tenantUser: 'TenantUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tenantUser: { 'type': 'array', 'itemType': CreateTenantUserResponseBodyTenantUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTenantUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTenantUserResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDatabasesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DeleteOmsOpenAPIProjectRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  workerGradeId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      workerGradeId: 'WorkerGradeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      workerGradeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOmsOpenAPIProjectResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: boolean;
  errorDetail?: DeleteOmsOpenAPIProjectResponseBodyErrorDetail;
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
      data: 'boolean',
      errorDetail: DeleteOmsOpenAPIProjectResponseBodyErrorDetail,
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

export class DeleteOmsOpenAPIProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteOmsOpenAPIProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteOmsOpenAPIProjectResponseBody,
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSecurityIpGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteTenantSecurityIpGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteTenantUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteTenantsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAnomalySQLListResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAvailableCpuResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAvailableMemResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAvailableSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  deployType?: string;
  instanceType?: string;
  obVersion?: string;
  series?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      deployType: 'DeployType',
      instanceType: 'InstanceType',
      obVersion: 'ObVersion',
      series: 'Series',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAvailableZoneResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCharsetResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDatabasesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceCreatableZoneResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceSSLResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceSecurityConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceTenantModesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceTopologyResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeMetricsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeMetricsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeNodeMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeOasAnomalySQLListResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeOasSQLDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeOasSQLHistoryListResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeOasSQLPlansResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeOasSlowSQLListResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeOasTopSQLListResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeOmsOpenAPIProjectRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  workerGradeId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      workerGradeId: 'WorkerGradeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      workerGradeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOmsOpenAPIProjectResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: DescribeOmsOpenAPIProjectResponseBodyData;
  errorDetail?: DescribeOmsOpenAPIProjectResponseBodyErrorDetail;
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
      data: DescribeOmsOpenAPIProjectResponseBodyData,
      errorDetail: DescribeOmsOpenAPIProjectResponseBodyErrorDetail,
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

export class DescribeOmsOpenAPIProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeOmsOpenAPIProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOmsOpenAPIProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOmsOpenAPIProjectStepsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  workerGradeId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      workerGradeId: 'WorkerGradeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      workerGradeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOmsOpenAPIProjectStepsResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: DescribeOmsOpenAPIProjectStepsResponseBodyData[];
  errorDetail?: DescribeOmsOpenAPIProjectStepsResponseBodyErrorDetail;
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
      data: { 'type': 'array', 'itemType': DescribeOmsOpenAPIProjectStepsResponseBodyData },
      errorDetail: DescribeOmsOpenAPIProjectStepsResponseBodyErrorDetail,
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

export class DescribeOmsOpenAPIProjectStepsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeOmsOpenAPIProjectStepsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeOmsOpenAPIProjectStepsResponseBody,
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeOutlineBindingResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeParametersHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeProjectComponentsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeProjectProgressResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeProjectStepMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeProjectStepsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRecommendIndexResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSQLDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSQLHistoryListResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSQLPlansResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  sqlId?: string;
  startTime?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSQLSamplesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSecurityIpGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSlowSQLHistoryListResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSlowSQLListResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTenantResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTenantEncryptionResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTenantMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTenantSecurityConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTenantSecurityIpGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTenantTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTenantUserRolesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTenantUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTenantZonesReadResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTenantsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTimeZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTopSQLListResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  deployType?: string;
  series?: string;
  static names(): { [key: string]: string } {
    return {
      deployType: 'DeployType',
      series: 'Series',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUploadOssUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: KillProcessListResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAllLabelsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProjectFullVerifyResultResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListProjectsRequest extends $tea.Model {
  labelIds?: string[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListWorkerInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDatabaseUserRolesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyInstanceNameResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyInstanceNodeNumResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ModifyInstanceSpecRequest extends $tea.Model {
  diskSize?: number;
  dryRun?: boolean;
  instanceClass?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      diskSize: 'DiskSize',
      dryRun: 'DryRun',
      instanceClass: 'InstanceClass',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskSize: 'number',
      dryRun: 'boolean',
      instanceClass: 'string',
      instanceId: 'string',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyInstanceSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyInstanceTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  diskSize?: string;
  instanceId?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      diskSize: 'DiskSize',
      instanceId: 'InstanceId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyInstanceTemporaryCapacityResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyParametersResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyTenantEncryptionResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  tenantEndpointId?: string;
  tenantId?: string;
  userVSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      masterIntranetAddressZone: 'MasterIntranetAddressZone',
      primaryZone: 'PrimaryZone',
      tenantEndpointId: 'TenantEndpointId',
      tenantId: 'TenantId',
      userVSwitchId: 'UserVSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      masterIntranetAddressZone: 'string',
      primaryZone: 'string',
      tenantEndpointId: 'string',
      tenantId: 'string',
      userVSwitchId: 'string',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyTenantPrimaryZoneResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyTenantResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyTenantSecurityIpGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyTenantTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyTenantUserDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyTenantUserPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyTenantUserRolesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyTenantUserStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ReleaseOmsOpenAPIProjectRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  workerGradeId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      workerGradeId: 'WorkerGradeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      workerGradeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseOmsOpenAPIProjectResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: boolean;
  errorDetail?: ReleaseOmsOpenAPIProjectResponseBodyErrorDetail;
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
      data: 'boolean',
      errorDetail: ReleaseOmsOpenAPIProjectResponseBodyErrorDetail,
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

export class ReleaseOmsOpenAPIProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReleaseOmsOpenAPIProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleaseOmsOpenAPIProjectResponseBody,
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ReleaseProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ResetOmsOpenAPIProjectRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  workerGradeId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      workerGradeId: 'WorkerGradeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      workerGradeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetOmsOpenAPIProjectResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: boolean;
  errorDetail?: ResetOmsOpenAPIProjectResponseBodyErrorDetail;
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
      data: 'boolean',
      errorDetail: ResetOmsOpenAPIProjectResponseBodyErrorDetail,
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

export class ResetOmsOpenAPIProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResetOmsOpenAPIProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetOmsOpenAPIProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeOmsOpenAPIProjectRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  workerGradeId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      workerGradeId: 'WorkerGradeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      workerGradeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeOmsOpenAPIProjectResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: boolean;
  errorDetail?: ResumeOmsOpenAPIProjectResponseBodyErrorDetail;
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
      data: 'boolean',
      errorDetail: ResumeOmsOpenAPIProjectResponseBodyErrorDetail,
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

export class ResumeOmsOpenAPIProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResumeOmsOpenAPIProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResumeOmsOpenAPIProjectResponseBody,
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ResumeProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class SearchOmsOpenAPIMonitorMetricRequest extends $tea.Model {
  beginTime?: number;
  endTime?: number;
  maxPointNum?: number;
  metric?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  workerGradeId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      maxPointNum: 'MaxPointNum',
      metric: 'Metric',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      workerGradeId: 'WorkerGradeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      maxPointNum: 'number',
      metric: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      workerGradeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchOmsOpenAPIMonitorMetricResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: SearchOmsOpenAPIMonitorMetricResponseBodyData[];
  errorDetail?: SearchOmsOpenAPIMonitorMetricResponseBodyErrorDetail;
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
      data: { 'type': 'array', 'itemType': SearchOmsOpenAPIMonitorMetricResponseBodyData },
      errorDetail: SearchOmsOpenAPIMonitorMetricResponseBodyErrorDetail,
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

export class SearchOmsOpenAPIMonitorMetricResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchOmsOpenAPIMonitorMetricResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchOmsOpenAPIMonitorMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchOmsOpenAPIProjectsRequest extends $tea.Model {
  destDbTypes?: string[];
  labelIds?: string[];
  pageNumber?: number;
  pageSize?: number;
  searchKey?: string;
  sourceDbTypes?: string[];
  statusList?: string[];
  workerGradeId?: string;
  static names(): { [key: string]: string } {
    return {
      destDbTypes: 'DestDbTypes',
      labelIds: 'LabelIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      sourceDbTypes: 'SourceDbTypes',
      statusList: 'StatusList',
      workerGradeId: 'WorkerGradeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destDbTypes: { 'type': 'array', 'itemType': 'string' },
      labelIds: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      searchKey: 'string',
      sourceDbTypes: { 'type': 'array', 'itemType': 'string' },
      statusList: { 'type': 'array', 'itemType': 'string' },
      workerGradeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchOmsOpenAPIProjectsShrinkRequest extends $tea.Model {
  destDbTypesShrink?: string;
  labelIdsShrink?: string;
  pageNumber?: number;
  pageSize?: number;
  searchKey?: string;
  sourceDbTypesShrink?: string;
  statusListShrink?: string;
  workerGradeId?: string;
  static names(): { [key: string]: string } {
    return {
      destDbTypesShrink: 'DestDbTypes',
      labelIdsShrink: 'LabelIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKey: 'SearchKey',
      sourceDbTypesShrink: 'SourceDbTypes',
      statusListShrink: 'StatusList',
      workerGradeId: 'WorkerGradeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destDbTypesShrink: 'string',
      labelIdsShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchKey: 'string',
      sourceDbTypesShrink: 'string',
      statusListShrink: 'string',
      workerGradeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchOmsOpenAPIProjectsResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: SearchOmsOpenAPIProjectsResponseBodyData[];
  errorDetail?: SearchOmsOpenAPIProjectsResponseBodyErrorDetail;
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
      data: { 'type': 'array', 'itemType': SearchOmsOpenAPIProjectsResponseBodyData },
      errorDetail: SearchOmsOpenAPIProjectsResponseBodyErrorDetail,
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

export class SearchOmsOpenAPIProjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchOmsOpenAPIProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchOmsOpenAPIProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartOmsOpenAPIProjectRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  workerGradeId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      workerGradeId: 'WorkerGradeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      workerGradeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartOmsOpenAPIProjectResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: boolean;
  errorDetail?: StartOmsOpenAPIProjectResponseBodyErrorDetail;
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
      data: 'boolean',
      errorDetail: StartOmsOpenAPIProjectResponseBodyErrorDetail,
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

export class StartOmsOpenAPIProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartOmsOpenAPIProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartOmsOpenAPIProjectResponseBody,
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
  headers: { [key: string]: string };
  statusCode: number;
  body: StartProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: StartProjectsByLabelResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class StopOmsOpenAPIProjectRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  workerGradeId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      workerGradeId: 'WorkerGradeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      workerGradeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopOmsOpenAPIProjectResponseBody extends $tea.Model {
  advice?: string;
  code?: string;
  cost?: string;
  data?: boolean;
  errorDetail?: StopOmsOpenAPIProjectResponseBodyErrorDetail;
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
      data: 'boolean',
      errorDetail: StopOmsOpenAPIProjectResponseBodyErrorDetail,
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

export class StopOmsOpenAPIProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopOmsOpenAPIProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopOmsOpenAPIProjectResponseBody,
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
  headers: { [key: string]: string };
  statusCode: number;
  body: StopProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: StopProjectsByLabelResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: SwitchoverInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class CreateOmsOpenAPIProjectRequestDestConfig extends $tea.Model {
  enableMsgTrace?: boolean;
  endpointId?: string;
  endpointType?: string;
  msgTags?: string;
  partition?: number;
  partitionMode?: string;
  producerGroup?: string;
  sendMsgTimeout?: number;
  sequenceEnable?: boolean;
  sequenceStartTimestamp?: number;
  serializerType?: string;
  topicType?: string;
  static names(): { [key: string]: string } {
    return {
      enableMsgTrace: 'EnableMsgTrace',
      endpointId: 'EndpointId',
      endpointType: 'EndpointType',
      msgTags: 'MsgTags',
      partition: 'Partition',
      partitionMode: 'PartitionMode',
      producerGroup: 'ProducerGroup',
      sendMsgTimeout: 'SendMsgTimeout',
      sequenceEnable: 'SequenceEnable',
      sequenceStartTimestamp: 'SequenceStartTimestamp',
      serializerType: 'SerializerType',
      topicType: 'TopicType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableMsgTrace: 'boolean',
      endpointId: 'string',
      endpointType: 'string',
      msgTags: 'string',
      partition: 'number',
      partitionMode: 'string',
      producerGroup: 'string',
      sendMsgTimeout: 'number',
      sequenceEnable: 'boolean',
      sequenceStartTimestamp: 'number',
      serializerType: 'string',
      topicType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOmsOpenAPIProjectRequestSourceConfig extends $tea.Model {
  enableMsgTrace?: boolean;
  endpointId?: string;
  endpointType?: string;
  msgTags?: string;
  partition?: number;
  partitionMode?: string;
  producerGroup?: string;
  sendMsgTimeout?: number;
  sequenceEnable?: boolean;
  sequenceStartTimestamp?: number;
  serializerType?: string;
  topicType?: string;
  static names(): { [key: string]: string } {
    return {
      enableMsgTrace: 'EnableMsgTrace',
      endpointId: 'EndpointId',
      endpointType: 'EndpointType',
      msgTags: 'MsgTags',
      partition: 'Partition',
      partitionMode: 'PartitionMode',
      producerGroup: 'ProducerGroup',
      sendMsgTimeout: 'SendMsgTimeout',
      sequenceEnable: 'SequenceEnable',
      sequenceStartTimestamp: 'SequenceStartTimestamp',
      serializerType: 'SerializerType',
      topicType: 'TopicType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableMsgTrace: 'boolean',
      endpointId: 'string',
      endpointType: 'string',
      msgTags: 'string',
      partition: 'number',
      partitionMode: 'string',
      producerGroup: 'string',
      sendMsgTimeout: 'number',
      sequenceEnable: 'boolean',
      sequenceStartTimestamp: 'number',
      serializerType: 'string',
      topicType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOmsOpenAPIProjectRequestTransferMappingDatabasesTablesAdbTableSchema extends $tea.Model {
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

export class CreateOmsOpenAPIProjectRequestTransferMappingDatabasesTables extends $tea.Model {
  adbTableSchema?: CreateOmsOpenAPIProjectRequestTransferMappingDatabasesTablesAdbTableSchema;
  filterColumns?: string[];
  mappedName?: string;
  shardColumns?: string[];
  tableId?: string;
  tableName?: string;
  type?: string;
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      adbTableSchema: 'AdbTableSchema',
      filterColumns: 'FilterColumns',
      mappedName: 'MappedName',
      shardColumns: 'ShardColumns',
      tableId: 'TableId',
      tableName: 'TableName',
      type: 'Type',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbTableSchema: CreateOmsOpenAPIProjectRequestTransferMappingDatabasesTablesAdbTableSchema,
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      mappedName: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      tableId: 'string',
      tableName: 'string',
      type: 'string',
      whereClause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOmsOpenAPIProjectRequestTransferMappingDatabases extends $tea.Model {
  databaseId?: string;
  databaseName?: string;
  mappedName?: string;
  tables?: CreateOmsOpenAPIProjectRequestTransferMappingDatabasesTables[];
  tenantName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      databaseId: 'DatabaseId',
      databaseName: 'DatabaseName',
      mappedName: 'MappedName',
      tables: 'Tables',
      tenantName: 'TenantName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseId: 'string',
      databaseName: 'string',
      mappedName: 'string',
      tables: { 'type': 'array', 'itemType': CreateOmsOpenAPIProjectRequestTransferMappingDatabasesTables },
      tenantName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOmsOpenAPIProjectRequestTransferMapping extends $tea.Model {
  databases?: CreateOmsOpenAPIProjectRequestTransferMappingDatabases[];
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': CreateOmsOpenAPIProjectRequestTransferMappingDatabases },
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOmsOpenAPIProjectRequestTransferStepConfigIncrSyncStepTransferConfig extends $tea.Model {
  recordTypeList?: string[];
  startTimestamp?: number;
  storeLogKeptHour?: number;
  storeTransactionEnabled?: boolean;
  transferStepType?: string;
  static names(): { [key: string]: string } {
    return {
      recordTypeList: 'RecordTypeList',
      startTimestamp: 'StartTimestamp',
      storeLogKeptHour: 'StoreLogKeptHour',
      storeTransactionEnabled: 'StoreTransactionEnabled',
      transferStepType: 'TransferStepType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordTypeList: { 'type': 'array', 'itemType': 'string' },
      startTimestamp: 'number',
      storeLogKeptHour: 'number',
      storeTransactionEnabled: 'boolean',
      transferStepType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOmsOpenAPIProjectRequestTransferStepConfig extends $tea.Model {
  enableFullSync?: boolean;
  enableIncrSync?: boolean;
  enableStructSync?: boolean;
  incrSyncStepTransferConfig?: CreateOmsOpenAPIProjectRequestTransferStepConfigIncrSyncStepTransferConfig;
  static names(): { [key: string]: string } {
    return {
      enableFullSync: 'EnableFullSync',
      enableIncrSync: 'EnableIncrSync',
      enableStructSync: 'EnableStructSync',
      incrSyncStepTransferConfig: 'IncrSyncStepTransferConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableFullSync: 'boolean',
      enableIncrSync: 'boolean',
      enableStructSync: 'boolean',
      incrSyncStepTransferConfig: CreateOmsOpenAPIProjectRequestTransferStepConfigIncrSyncStepTransferConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOmsOpenAPIProjectResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  level?: string;
  message?: string;
  proposal?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      level: 'Level',
      message: 'Message',
      proposal: 'Proposal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      level: 'string',
      message: 'string',
      proposal: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestCommonTransferConfig extends $tea.Model {
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

export class CreateProjectRequestFullTransferConfig extends $tea.Model {
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

export class CreateProjectRequestIncrTransferConfig extends $tea.Model {
  enableIncrSyncStatistics?: boolean;
  enableSequencingWithinTxn?: boolean;
  incrSyncConcurrency?: number;
  recordTypeWhiteList?: string[];
  startTimestamp?: string;
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
      startTimestamp: 'string',
      storeLogKeptHour: 'number',
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

export class DeleteOmsOpenAPIProjectResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  level?: string;
  message?: string;
  proposal?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      level: 'Level',
      message: 'Message',
      proposal: 'Proposal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      level: 'string',
      message: 'string',
      proposal: 'string',
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
  maxCpu?: number;
  minCpu?: number;
  unitNum?: number;
  static names(): { [key: string]: string } {
    return {
      maxCpu: 'MaxCpu',
      minCpu: 'MinCpu',
      unitNum: 'UnitNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCpu: 'number',
      minCpu: 'number',
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
  instanceClass?: string;
  logDiskSizeRange?: DescribeAvailableSpecResponseBodyDataAvailableSpecificationsLogDiskSizeRange;
  nodeNum?: number[];
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      diskSizeRange: 'DiskSizeRange',
      instanceClass: 'InstanceClass',
      logDiskSizeRange: 'LogDiskSizeRange',
      nodeNum: 'NodeNum',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskSizeRange: DescribeAvailableSpecResponseBodyDataAvailableSpecificationsDiskSizeRange,
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
  deployType?: string;
  instanceType?: string;
  region?: string;
  series?: string;
  supportSpecifications?: DescribeAvailableZoneResponseBodyDataAvailableZonesSupportSpecifications[];
  zones?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
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
  upperThreshold?: number;
  upperbound?: number;
  static names(): { [key: string]: string } {
    return {
      autoScale: 'AutoScale',
      maxDiskSize: 'MaxDiskSize',
      scaleStepInMerge: 'ScaleStepInMerge',
      scaleStepInNormal: 'ScaleStepInNormal',
      upperMergeThreshold: 'UpperMergeThreshold',
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
      upperThreshold: 'number',
      upperbound: 'number',
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
  enableUpgradeLogDisk?: boolean;
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
  proxyClusterId?: string;
  proxyServiceStatus?: string;
  replicaMode?: string;
  resource?: DescribeInstanceResponseBodyInstanceResource;
  series?: string;
  status?: string;
  tenantCreatable?: DescribeInstanceResponseBodyInstanceTenantCreatable;
  version?: string;
  zones?: string[];
  static names(): { [key: string]: string } {
    return {
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
      enableUpgradeLogDisk: 'EnableUpgradeLogDisk',
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
      proxyClusterId: 'ProxyClusterId',
      proxyServiceStatus: 'ProxyServiceStatus',
      replicaMode: 'ReplicaMode',
      resource: 'Resource',
      series: 'Series',
      status: 'Status',
      tenantCreatable: 'TenantCreatable',
      version: 'Version',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
      enableUpgradeLogDisk: 'boolean',
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
      proxyClusterId: 'string',
      proxyServiceStatus: 'string',
      replicaMode: 'string',
      resource: DescribeInstanceResponseBodyInstanceResource,
      series: 'string',
      status: 'string',
      tenantCreatable: DescribeInstanceResponseBodyInstanceTenantCreatable,
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

export class DescribeInstanceTopologyResponseBodyInstanceTopologyTenantsTenantZonesUnits extends $tea.Model {
  enableCancelMigrateUnit?: boolean;
  enableMigrateUnit?: boolean;
  manualMigrate?: boolean;
  nodeId?: string;
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
  isPrimaryTenantZone?: string;
  tenantZoneId?: string;
  tenantZoneRole?: string;
  units?: DescribeInstanceTopologyResponseBodyInstanceTopologyTenantsTenantZonesUnits[];
  static names(): { [key: string]: string } {
    return {
      isPrimaryTenantZone: 'IsPrimaryTenantZone',
      tenantZoneId: 'TenantZoneId',
      tenantZoneRole: 'TenantZoneRole',
      units: 'Units',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPrimaryTenantZone: 'string',
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
  tenantId?: string;
  tenantMemory?: number;
  tenantMode?: string;
  tenantName?: string;
  tenantStatus?: string;
  tenantUnitNum?: number;
  tenantZones?: DescribeInstanceTopologyResponseBodyInstanceTopologyTenantsTenantZones[];
  static names(): { [key: string]: string } {
    return {
      primaryZoneDeployType: 'PrimaryZoneDeployType',
      tenantCpu: 'TenantCpu',
      tenantDeployType: 'TenantDeployType',
      tenantId: 'TenantId',
      tenantMemory: 'TenantMemory',
      tenantMode: 'TenantMode',
      tenantName: 'TenantName',
      tenantStatus: 'TenantStatus',
      tenantUnitNum: 'TenantUnitNum',
      tenantZones: 'TenantZones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      primaryZoneDeployType: 'string',
      tenantCpu: 'number',
      tenantDeployType: 'string',
      tenantId: 'string',
      tenantMemory: 'number',
      tenantMode: 'string',
      tenantName: 'string',
      tenantStatus: 'string',
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
  nodeCopyId?: number;
  nodeId?: string;
  nodeResource?: DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResource[];
  nodeStatus?: string;
  static names(): { [key: string]: string } {
    return {
      nodeCopyId: 'NodeCopyId',
      nodeId: 'NodeId',
      nodeResource: 'NodeResource',
      nodeStatus: 'NodeStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeCopyId: 'number',
      nodeId: 'string',
      nodeResource: { 'type': 'array', 'itemType': DescribeInstanceTopologyResponseBodyInstanceTopologyZonesNodesNodeResource },
      nodeStatus: 'string',
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
  tenants?: DescribeInstanceTopologyResponseBodyInstanceTopologyTenants[];
  zones?: DescribeInstanceTopologyResponseBodyInstanceTopologyZones[];
  static names(): { [key: string]: string } {
    return {
      tenants: 'Tenants',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  upperThreshold?: number;
  upperbound?: number;
  static names(): { [key: string]: string } {
    return {
      autoScale: 'AutoScale',
      maxDiskSize: 'MaxDiskSize',
      scaleStepInMerge: 'ScaleStepInMerge',
      scaleStepInNormal: 'ScaleStepInNormal',
      upperMergeThreshold: 'UpperMergeThreshold',
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
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      avgCpuTime: 'AvgCpuTime',
      avgDbTime: 'AvgDbTime',
      avgElapsedTime: 'AvgElapsedTime',
      avgGetPlanTime: 'AvgGetPlanTime',
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
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgCpuTime: 'number',
      avgDbTime: 'number',
      avgElapsedTime: 'number',
      avgGetPlanTime: 'number',
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
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      avgCpuTime: 'AvgCpuTime',
      avgDbTime: 'AvgDbTime',
      avgElapsedTime: 'AvgElapsedTime',
      avgGetPlanTime: 'AvgGetPlanTime',
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
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgCpuTime: 'number',
      avgDbTime: 'number',
      avgElapsedTime: 'number',
      avgGetPlanTime: 'number',
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

export class DescribeOmsOpenAPIProjectResponseBodyDataDestConfig extends $tea.Model {
  enableMsgTrace?: boolean;
  endpointId?: string;
  endpointType?: string;
  msgTags?: string;
  partition?: number;
  partitionMode?: string;
  producerGroup?: string;
  sendMsgTimeout?: number;
  sequenceEnable?: boolean;
  sequenceStartTimestamp?: number;
  serializerType?: string;
  topicType?: string;
  static names(): { [key: string]: string } {
    return {
      enableMsgTrace: 'EnableMsgTrace',
      endpointId: 'EndpointId',
      endpointType: 'EndpointType',
      msgTags: 'MsgTags',
      partition: 'Partition',
      partitionMode: 'PartitionMode',
      producerGroup: 'ProducerGroup',
      sendMsgTimeout: 'SendMsgTimeout',
      sequenceEnable: 'SequenceEnable',
      sequenceStartTimestamp: 'SequenceStartTimestamp',
      serializerType: 'SerializerType',
      topicType: 'TopicType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableMsgTrace: 'boolean',
      endpointId: 'string',
      endpointType: 'string',
      msgTags: 'string',
      partition: 'number',
      partitionMode: 'string',
      producerGroup: 'string',
      sendMsgTimeout: 'number',
      sequenceEnable: 'boolean',
      sequenceStartTimestamp: 'number',
      serializerType: 'string',
      topicType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOmsOpenAPIProjectResponseBodyDataLabels extends $tea.Model {
  count?: number;
  creator?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      creator: 'Creator',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      creator: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOmsOpenAPIProjectResponseBodyDataSourceConfig extends $tea.Model {
  enableMsgTrace?: boolean;
  endpointId?: string;
  endpointType?: string;
  msgTags?: string;
  partition?: number;
  partitionMode?: string;
  producerGroup?: string;
  sendMsgTimeout?: number;
  sequenceEnable?: boolean;
  sequenceStartTimestamp?: number;
  serializerType?: string;
  topicType?: string;
  static names(): { [key: string]: string } {
    return {
      enableMsgTrace: 'EnableMsgTrace',
      endpointId: 'EndpointId',
      endpointType: 'EndpointType',
      msgTags: 'MsgTags',
      partition: 'Partition',
      partitionMode: 'PartitionMode',
      producerGroup: 'ProducerGroup',
      sendMsgTimeout: 'SendMsgTimeout',
      sequenceEnable: 'SequenceEnable',
      sequenceStartTimestamp: 'SequenceStartTimestamp',
      serializerType: 'SerializerType',
      topicType: 'TopicType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableMsgTrace: 'boolean',
      endpointId: 'string',
      endpointType: 'string',
      msgTags: 'string',
      partition: 'number',
      partitionMode: 'string',
      producerGroup: 'string',
      sendMsgTimeout: 'number',
      sequenceEnable: 'boolean',
      sequenceStartTimestamp: 'number',
      serializerType: 'string',
      topicType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOmsOpenAPIProjectResponseBodyDataStepsExtraInfoErrorDetails extends $tea.Model {
  code?: string;
  level?: string;
  message?: string;
  proposal?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      level: 'Level',
      message: 'Message',
      proposal: 'Proposal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      level: 'string',
      message: 'string',
      proposal: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOmsOpenAPIProjectResponseBodyDataStepsExtraInfo extends $tea.Model {
  errorCode?: string;
  errorDetails?: DescribeOmsOpenAPIProjectResponseBodyDataStepsExtraInfoErrorDetails[];
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
      errorDetails: { 'type': 'array', 'itemType': DescribeOmsOpenAPIProjectResponseBodyDataStepsExtraInfoErrorDetails },
      errorMsg: 'string',
      errorParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      failedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOmsOpenAPIProjectResponseBodyDataStepsStepInfoConnectorFullProgressOverview extends $tea.Model {
  estimatedRemainingTimeOfSec?: number;
  estimatedTotalCount?: number;
  finishedCount?: number;
  progress?: number;
  static names(): { [key: string]: string } {
    return {
      estimatedRemainingTimeOfSec: 'EstimatedRemainingTimeOfSec',
      estimatedTotalCount: 'EstimatedTotalCount',
      finishedCount: 'FinishedCount',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      estimatedRemainingTimeOfSec: 'number',
      estimatedTotalCount: 'number',
      finishedCount: 'number',
      progress: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOmsOpenAPIProjectResponseBodyDataStepsStepInfo extends $tea.Model {
  capacity?: number;
  checkpoint?: string;
  connectorFullProgressOverview?: DescribeOmsOpenAPIProjectResponseBodyDataStepsStepInfoConnectorFullProgressOverview;
  deployId?: string;
  dstIops?: number;
  dstRps?: number;
  dstRpsRef?: number;
  dstRt?: number;
  dstRtRef?: number;
  gmt?: number;
  inconsistencies?: number;
  incrTimestampCheckpoint?: number;
  jobId?: string;
  processedRecords?: number;
  skipped?: boolean;
  srcIops?: number;
  srcIopsRef?: number;
  srcRps?: number;
  srcRpsRef?: number;
  srcRt?: number;
  srcRtRef?: number;
  validated?: boolean;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      checkpoint: 'Checkpoint',
      connectorFullProgressOverview: 'ConnectorFullProgressOverview',
      deployId: 'DeployId',
      dstIops: 'DstIops',
      dstRps: 'DstRps',
      dstRpsRef: 'DstRpsRef',
      dstRt: 'DstRt',
      dstRtRef: 'DstRtRef',
      gmt: 'Gmt',
      inconsistencies: 'Inconsistencies',
      incrTimestampCheckpoint: 'IncrTimestampCheckpoint',
      jobId: 'JobId',
      processedRecords: 'ProcessedRecords',
      skipped: 'Skipped',
      srcIops: 'SrcIops',
      srcIopsRef: 'SrcIopsRef',
      srcRps: 'SrcRps',
      srcRpsRef: 'SrcRpsRef',
      srcRt: 'SrcRt',
      srcRtRef: 'SrcRtRef',
      validated: 'Validated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      checkpoint: 'string',
      connectorFullProgressOverview: DescribeOmsOpenAPIProjectResponseBodyDataStepsStepInfoConnectorFullProgressOverview,
      deployId: 'string',
      dstIops: 'number',
      dstRps: 'number',
      dstRpsRef: 'number',
      dstRt: 'number',
      dstRtRef: 'number',
      gmt: 'number',
      inconsistencies: 'number',
      incrTimestampCheckpoint: 'number',
      jobId: 'string',
      processedRecords: 'number',
      skipped: 'boolean',
      srcIops: 'number',
      srcIopsRef: 'number',
      srcRps: 'number',
      srcRpsRef: 'number',
      srcRt: 'number',
      srcRtRef: 'number',
      validated: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOmsOpenAPIProjectResponseBodyDataSteps extends $tea.Model {
  estimatedRemainingSeconds?: number;
  extraInfo?: DescribeOmsOpenAPIProjectResponseBodyDataStepsExtraInfo;
  finishTime?: string;
  interactive?: boolean;
  startTime?: string;
  stepDescription?: string;
  stepInfo?: DescribeOmsOpenAPIProjectResponseBodyDataStepsStepInfo;
  stepName?: string;
  stepOrder?: number;
  stepProgress?: number;
  stepStatus?: string;
  static names(): { [key: string]: string } {
    return {
      estimatedRemainingSeconds: 'EstimatedRemainingSeconds',
      extraInfo: 'ExtraInfo',
      finishTime: 'FinishTime',
      interactive: 'Interactive',
      startTime: 'StartTime',
      stepDescription: 'StepDescription',
      stepInfo: 'StepInfo',
      stepName: 'StepName',
      stepOrder: 'StepOrder',
      stepProgress: 'StepProgress',
      stepStatus: 'StepStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      estimatedRemainingSeconds: 'number',
      extraInfo: DescribeOmsOpenAPIProjectResponseBodyDataStepsExtraInfo,
      finishTime: 'string',
      interactive: 'boolean',
      startTime: 'string',
      stepDescription: 'string',
      stepInfo: DescribeOmsOpenAPIProjectResponseBodyDataStepsStepInfo,
      stepName: 'string',
      stepOrder: 'number',
      stepProgress: 'number',
      stepStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOmsOpenAPIProjectResponseBodyDataTransferMappingDatabasesTablesAdbTableSchema extends $tea.Model {
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

export class DescribeOmsOpenAPIProjectResponseBodyDataTransferMappingDatabasesTables extends $tea.Model {
  adbTableSchema?: DescribeOmsOpenAPIProjectResponseBodyDataTransferMappingDatabasesTablesAdbTableSchema;
  filterColumns?: string[];
  mappedName?: string;
  shardColumns?: string[];
  tableId?: string;
  tableName?: string;
  type?: string;
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      adbTableSchema: 'AdbTableSchema',
      filterColumns: 'FilterColumns',
      mappedName: 'MappedName',
      shardColumns: 'ShardColumns',
      tableId: 'TableId',
      tableName: 'TableName',
      type: 'Type',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbTableSchema: DescribeOmsOpenAPIProjectResponseBodyDataTransferMappingDatabasesTablesAdbTableSchema,
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      mappedName: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      tableId: 'string',
      tableName: 'string',
      type: 'string',
      whereClause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOmsOpenAPIProjectResponseBodyDataTransferMappingDatabases extends $tea.Model {
  databaseId?: string;
  databaseName?: string;
  mappedName?: string;
  tables?: DescribeOmsOpenAPIProjectResponseBodyDataTransferMappingDatabasesTables[];
  tenantName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      databaseId: 'DatabaseId',
      databaseName: 'DatabaseName',
      mappedName: 'MappedName',
      tables: 'Tables',
      tenantName: 'TenantName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseId: 'string',
      databaseName: 'string',
      mappedName: 'string',
      tables: { 'type': 'array', 'itemType': DescribeOmsOpenAPIProjectResponseBodyDataTransferMappingDatabasesTables },
      tenantName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOmsOpenAPIProjectResponseBodyDataTransferMapping extends $tea.Model {
  databases?: DescribeOmsOpenAPIProjectResponseBodyDataTransferMappingDatabases[];
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': DescribeOmsOpenAPIProjectResponseBodyDataTransferMappingDatabases },
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOmsOpenAPIProjectResponseBodyDataTransferStepConfigIncrSyncStepTransferConfig extends $tea.Model {
  recordTypeList?: string[];
  startTimestamp?: number;
  storeLogKeptHour?: number;
  storeTransactionEnabled?: boolean;
  transferStepType?: string;
  static names(): { [key: string]: string } {
    return {
      recordTypeList: 'RecordTypeList',
      startTimestamp: 'StartTimestamp',
      storeLogKeptHour: 'StoreLogKeptHour',
      storeTransactionEnabled: 'StoreTransactionEnabled',
      transferStepType: 'TransferStepType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordTypeList: { 'type': 'array', 'itemType': 'string' },
      startTimestamp: 'number',
      storeLogKeptHour: 'number',
      storeTransactionEnabled: 'boolean',
      transferStepType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOmsOpenAPIProjectResponseBodyDataTransferStepConfig extends $tea.Model {
  enableFullSync?: boolean;
  enableIncrSync?: boolean;
  enableStructSync?: boolean;
  incrSyncStepTransferConfig?: DescribeOmsOpenAPIProjectResponseBodyDataTransferStepConfigIncrSyncStepTransferConfig;
  static names(): { [key: string]: string } {
    return {
      enableFullSync: 'EnableFullSync',
      enableIncrSync: 'EnableIncrSync',
      enableStructSync: 'EnableStructSync',
      incrSyncStepTransferConfig: 'IncrSyncStepTransferConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableFullSync: 'boolean',
      enableIncrSync: 'boolean',
      enableStructSync: 'boolean',
      incrSyncStepTransferConfig: DescribeOmsOpenAPIProjectResponseBodyDataTransferStepConfigIncrSyncStepTransferConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOmsOpenAPIProjectResponseBodyData extends $tea.Model {
  businessName?: string;
  destConfig?: DescribeOmsOpenAPIProjectResponseBodyDataDestConfig;
  labels?: DescribeOmsOpenAPIProjectResponseBodyDataLabels[];
  projectId?: string;
  projectName?: string;
  projectOwner?: string;
  sourceConfig?: DescribeOmsOpenAPIProjectResponseBodyDataSourceConfig;
  steps?: DescribeOmsOpenAPIProjectResponseBodyDataSteps[];
  transferMapping?: DescribeOmsOpenAPIProjectResponseBodyDataTransferMapping;
  transferStepConfig?: DescribeOmsOpenAPIProjectResponseBodyDataTransferStepConfig;
  static names(): { [key: string]: string } {
    return {
      businessName: 'BusinessName',
      destConfig: 'DestConfig',
      labels: 'Labels',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectOwner: 'ProjectOwner',
      sourceConfig: 'SourceConfig',
      steps: 'Steps',
      transferMapping: 'TransferMapping',
      transferStepConfig: 'TransferStepConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessName: 'string',
      destConfig: DescribeOmsOpenAPIProjectResponseBodyDataDestConfig,
      labels: { 'type': 'array', 'itemType': DescribeOmsOpenAPIProjectResponseBodyDataLabels },
      projectId: 'string',
      projectName: 'string',
      projectOwner: 'string',
      sourceConfig: DescribeOmsOpenAPIProjectResponseBodyDataSourceConfig,
      steps: { 'type': 'array', 'itemType': DescribeOmsOpenAPIProjectResponseBodyDataSteps },
      transferMapping: DescribeOmsOpenAPIProjectResponseBodyDataTransferMapping,
      transferStepConfig: DescribeOmsOpenAPIProjectResponseBodyDataTransferStepConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOmsOpenAPIProjectResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  level?: string;
  message?: string;
  proposal?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      level: 'Level',
      message: 'Message',
      proposal: 'Proposal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      level: 'string',
      message: 'string',
      proposal: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOmsOpenAPIProjectStepsResponseBodyDataExtraInfoErrorDetails extends $tea.Model {
  code?: string;
  level?: string;
  message?: string;
  proposal?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      level: 'Level',
      message: 'Message',
      proposal: 'Proposal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      level: 'string',
      message: 'string',
      proposal: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOmsOpenAPIProjectStepsResponseBodyDataExtraInfo extends $tea.Model {
  errorCode?: string;
  errorDetails?: DescribeOmsOpenAPIProjectStepsResponseBodyDataExtraInfoErrorDetails[];
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
      errorDetails: { 'type': 'array', 'itemType': DescribeOmsOpenAPIProjectStepsResponseBodyDataExtraInfoErrorDetails },
      errorMsg: 'string',
      errorParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      failedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOmsOpenAPIProjectStepsResponseBodyDataStepInfoConnectorFullProgressOverview extends $tea.Model {
  estimatedRemainingTimeOfSec?: number;
  estimatedTotalCount?: number;
  finishedCount?: number;
  progress?: number;
  static names(): { [key: string]: string } {
    return {
      estimatedRemainingTimeOfSec: 'EstimatedRemainingTimeOfSec',
      estimatedTotalCount: 'EstimatedTotalCount',
      finishedCount: 'FinishedCount',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      estimatedRemainingTimeOfSec: 'number',
      estimatedTotalCount: 'number',
      finishedCount: 'number',
      progress: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOmsOpenAPIProjectStepsResponseBodyDataStepInfo extends $tea.Model {
  capacity?: number;
  checkpoint?: string;
  connectorFullProgressOverview?: DescribeOmsOpenAPIProjectStepsResponseBodyDataStepInfoConnectorFullProgressOverview;
  deployId?: string;
  dstIops?: number;
  dstRps?: number;
  dstRpsRef?: number;
  dstRt?: number;
  dstRtRef?: number;
  gmt?: number;
  inconsistencies?: number;
  incrTimestampCheckpoint?: number;
  jobId?: string;
  processedRecords?: number;
  skipped?: boolean;
  srcIops?: number;
  srcIopsRef?: number;
  srcRps?: number;
  srcRpsRef?: number;
  srcRt?: number;
  srcRtRef?: number;
  validated?: boolean;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      checkpoint: 'Checkpoint',
      connectorFullProgressOverview: 'ConnectorFullProgressOverview',
      deployId: 'DeployId',
      dstIops: 'DstIops',
      dstRps: 'DstRps',
      dstRpsRef: 'DstRpsRef',
      dstRt: 'DstRt',
      dstRtRef: 'DstRtRef',
      gmt: 'Gmt',
      inconsistencies: 'Inconsistencies',
      incrTimestampCheckpoint: 'IncrTimestampCheckpoint',
      jobId: 'JobId',
      processedRecords: 'ProcessedRecords',
      skipped: 'Skipped',
      srcIops: 'SrcIops',
      srcIopsRef: 'SrcIopsRef',
      srcRps: 'SrcRps',
      srcRpsRef: 'SrcRpsRef',
      srcRt: 'SrcRt',
      srcRtRef: 'SrcRtRef',
      validated: 'Validated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      checkpoint: 'string',
      connectorFullProgressOverview: DescribeOmsOpenAPIProjectStepsResponseBodyDataStepInfoConnectorFullProgressOverview,
      deployId: 'string',
      dstIops: 'number',
      dstRps: 'number',
      dstRpsRef: 'number',
      dstRt: 'number',
      dstRtRef: 'number',
      gmt: 'number',
      inconsistencies: 'number',
      incrTimestampCheckpoint: 'number',
      jobId: 'string',
      processedRecords: 'number',
      skipped: 'boolean',
      srcIops: 'number',
      srcIopsRef: 'number',
      srcRps: 'number',
      srcRpsRef: 'number',
      srcRt: 'number',
      srcRtRef: 'number',
      validated: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOmsOpenAPIProjectStepsResponseBodyData extends $tea.Model {
  estimatedRemainingSeconds?: number;
  extraInfo?: DescribeOmsOpenAPIProjectStepsResponseBodyDataExtraInfo;
  finishTime?: string;
  interactive?: boolean;
  startTime?: string;
  stepDescription?: string;
  stepInfo?: DescribeOmsOpenAPIProjectStepsResponseBodyDataStepInfo;
  stepName?: string;
  stepOrder?: number;
  stepProgress?: number;
  stepStatus?: string;
  static names(): { [key: string]: string } {
    return {
      estimatedRemainingSeconds: 'EstimatedRemainingSeconds',
      extraInfo: 'ExtraInfo',
      finishTime: 'FinishTime',
      interactive: 'Interactive',
      startTime: 'StartTime',
      stepDescription: 'StepDescription',
      stepInfo: 'StepInfo',
      stepName: 'StepName',
      stepOrder: 'StepOrder',
      stepProgress: 'StepProgress',
      stepStatus: 'StepStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      estimatedRemainingSeconds: 'number',
      extraInfo: DescribeOmsOpenAPIProjectStepsResponseBodyDataExtraInfo,
      finishTime: 'string',
      interactive: 'boolean',
      startTime: 'string',
      stepDescription: 'string',
      stepInfo: DescribeOmsOpenAPIProjectStepsResponseBodyDataStepInfo,
      stepName: 'string',
      stepOrder: 'number',
      stepProgress: 'number',
      stepStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOmsOpenAPIProjectStepsResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  level?: string;
  message?: string;
  proposal?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      level: 'Level',
      message: 'Message',
      proposal: 'Proposal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      level: 'string',
      message: 'string',
      proposal: 'string',
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

export class DescribeProjectResponseBodyDataIncrTransferConfig extends $tea.Model {
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

export class DescribeTenantResponseBodyTenantTenantConnections extends $tea.Model {
  addressType?: string;
  connectionZones?: string[];
  enableTransactionSplit?: boolean;
  internetAddress?: string;
  internetAddressStatus?: string;
  internetPort?: number;
  intranetAddress?: string;
  intranetAddressMasterZoneId?: string;
  intranetAddressSlaveZoneId?: string;
  intranetAddressStatus?: string;
  intranetPort?: number;
  maxConnectionNum?: number;
  parallelQueryDegree?: number;
  tenantEndpointId?: string;
  transactionSplit?: boolean;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      connectionZones: 'ConnectionZones',
      enableTransactionSplit: 'EnableTransactionSplit',
      internetAddress: 'InternetAddress',
      internetAddressStatus: 'InternetAddressStatus',
      internetPort: 'InternetPort',
      intranetAddress: 'IntranetAddress',
      intranetAddressMasterZoneId: 'IntranetAddressMasterZoneId',
      intranetAddressSlaveZoneId: 'IntranetAddressSlaveZoneId',
      intranetAddressStatus: 'IntranetAddressStatus',
      intranetPort: 'IntranetPort',
      maxConnectionNum: 'MaxConnectionNum',
      parallelQueryDegree: 'ParallelQueryDegree',
      tenantEndpointId: 'TenantEndpointId',
      transactionSplit: 'TransactionSplit',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      connectionZones: { 'type': 'array', 'itemType': 'string' },
      enableTransactionSplit: 'boolean',
      internetAddress: 'string',
      internetAddressStatus: 'string',
      internetPort: 'number',
      intranetAddress: 'string',
      intranetAddressMasterZoneId: 'string',
      intranetAddressSlaveZoneId: 'string',
      intranetAddressStatus: 'string',
      intranetPort: 'number',
      maxConnectionNum: 'number',
      parallelQueryDegree: 'number',
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

export class DescribeTenantResponseBodyTenantTenantZones extends $tea.Model {
  region?: string;
  tenantZoneId?: string;
  tenantZoneRole?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      tenantZoneId: 'TenantZoneId',
      tenantZoneRole: 'TenantZoneRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      tenantZoneId: 'string',
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
  deployMode?: string;
  deployType?: string;
  description?: string;
  diskType?: string;
  enableBinlogService?: boolean;
  enableClogService?: boolean;
  enableInternetAddressService?: boolean;
  enableParallelQuery?: boolean;
  enableReadWriteSplit?: boolean;
  instanceType?: string;
  masterIntranetAddressZone?: string;
  maxParallelQueryDegree?: number;
  payType?: string;
  primaryZone?: string;
  primaryZoneDeployType?: string;
  series?: string;
  status?: string;
  tenantConnections?: DescribeTenantResponseBodyTenantTenantConnections[];
  tenantId?: string;
  tenantMode?: string;
  tenantName?: string;
  tenantResource?: DescribeTenantResponseBodyTenantTenantResource;
  tenantZones?: DescribeTenantResponseBodyTenantTenantZones[];
  timeZone?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      availableZones: 'AvailableZones',
      charset: 'Charset',
      clogServiceStatus: 'ClogServiceStatus',
      collation: 'Collation',
      createTime: 'CreateTime',
      deployMode: 'DeployMode',
      deployType: 'DeployType',
      description: 'Description',
      diskType: 'DiskType',
      enableBinlogService: 'EnableBinlogService',
      enableClogService: 'EnableClogService',
      enableInternetAddressService: 'EnableInternetAddressService',
      enableParallelQuery: 'EnableParallelQuery',
      enableReadWriteSplit: 'EnableReadWriteSplit',
      instanceType: 'InstanceType',
      masterIntranetAddressZone: 'MasterIntranetAddressZone',
      maxParallelQueryDegree: 'MaxParallelQueryDegree',
      payType: 'PayType',
      primaryZone: 'PrimaryZone',
      primaryZoneDeployType: 'PrimaryZoneDeployType',
      series: 'Series',
      status: 'Status',
      tenantConnections: 'TenantConnections',
      tenantId: 'TenantId',
      tenantMode: 'TenantMode',
      tenantName: 'TenantName',
      tenantResource: 'TenantResource',
      tenantZones: 'TenantZones',
      timeZone: 'TimeZone',
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
      deployMode: 'string',
      deployType: 'string',
      description: 'string',
      diskType: 'string',
      enableBinlogService: 'boolean',
      enableClogService: 'boolean',
      enableInternetAddressService: 'boolean',
      enableParallelQuery: 'boolean',
      enableReadWriteSplit: 'boolean',
      instanceType: 'string',
      masterIntranetAddressZone: 'string',
      maxParallelQueryDegree: 'number',
      payType: 'string',
      primaryZone: 'string',
      primaryZoneDeployType: 'string',
      series: 'string',
      status: 'string',
      tenantConnections: { 'type': 'array', 'itemType': DescribeTenantResponseBodyTenantTenantConnections },
      tenantId: 'string',
      tenantMode: 'string',
      tenantName: 'string',
      tenantResource: DescribeTenantResponseBodyTenantTenantResource,
      tenantZones: { 'type': 'array', 'itemType': DescribeTenantResponseBodyTenantTenantZones },
      timeZone: 'string',
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

export class ReleaseOmsOpenAPIProjectResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  level?: string;
  message?: string;
  proposal?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      level: 'Level',
      message: 'Message',
      proposal: 'Proposal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      level: 'string',
      message: 'string',
      proposal: 'string',
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

export class ResetOmsOpenAPIProjectResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  level?: string;
  message?: string;
  proposal?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      level: 'Level',
      message: 'Message',
      proposal: 'Proposal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      level: 'string',
      message: 'string',
      proposal: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeOmsOpenAPIProjectResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  level?: string;
  message?: string;
  proposal?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      level: 'Level',
      message: 'Message',
      proposal: 'Proposal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      level: 'string',
      message: 'string',
      proposal: 'string',
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

export class SearchOmsOpenAPIMonitorMetricResponseBodyDataDataPoints extends $tea.Model {
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

export class SearchOmsOpenAPIMonitorMetricResponseBodyData extends $tea.Model {
  dataPoints?: SearchOmsOpenAPIMonitorMetricResponseBodyDataDataPoints[];
  metric?: string;
  tags?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      dataPoints: 'DataPoints',
      metric: 'Metric',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPoints: { 'type': 'array', 'itemType': SearchOmsOpenAPIMonitorMetricResponseBodyDataDataPoints },
      metric: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchOmsOpenAPIMonitorMetricResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  level?: string;
  message?: string;
  proposal?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      level: 'Level',
      message: 'Message',
      proposal: 'Proposal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      level: 'string',
      message: 'string',
      proposal: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchOmsOpenAPIProjectsResponseBodyDataDestConfig extends $tea.Model {
  enableMsgTrace?: boolean;
  endpointId?: string;
  endpointType?: string;
  msgTags?: string;
  partition?: number;
  partitionMode?: string;
  producerGroup?: string;
  sendMsgTimeout?: number;
  sequenceEnable?: boolean;
  sequenceStartTimestamp?: number;
  serializerType?: string;
  topicType?: string;
  static names(): { [key: string]: string } {
    return {
      enableMsgTrace: 'EnableMsgTrace',
      endpointId: 'EndpointId',
      endpointType: 'EndpointType',
      msgTags: 'MsgTags',
      partition: 'Partition',
      partitionMode: 'PartitionMode',
      producerGroup: 'ProducerGroup',
      sendMsgTimeout: 'SendMsgTimeout',
      sequenceEnable: 'SequenceEnable',
      sequenceStartTimestamp: 'SequenceStartTimestamp',
      serializerType: 'SerializerType',
      topicType: 'TopicType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableMsgTrace: 'boolean',
      endpointId: 'string',
      endpointType: 'string',
      msgTags: 'string',
      partition: 'number',
      partitionMode: 'string',
      producerGroup: 'string',
      sendMsgTimeout: 'number',
      sequenceEnable: 'boolean',
      sequenceStartTimestamp: 'number',
      serializerType: 'string',
      topicType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchOmsOpenAPIProjectsResponseBodyDataLabels extends $tea.Model {
  count?: number;
  creator?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      creator: 'Creator',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      creator: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchOmsOpenAPIProjectsResponseBodyDataSourceConfig extends $tea.Model {
  enableMsgTrace?: boolean;
  endpointId?: string;
  endpointType?: string;
  msgTags?: string;
  partition?: number;
  partitionMode?: string;
  producerGroup?: string;
  sendMsgTimeout?: number;
  sequenceEnable?: boolean;
  sequenceStartTimestamp?: number;
  serializerType?: string;
  topicType?: string;
  static names(): { [key: string]: string } {
    return {
      enableMsgTrace: 'EnableMsgTrace',
      endpointId: 'EndpointId',
      endpointType: 'EndpointType',
      msgTags: 'MsgTags',
      partition: 'Partition',
      partitionMode: 'PartitionMode',
      producerGroup: 'ProducerGroup',
      sendMsgTimeout: 'SendMsgTimeout',
      sequenceEnable: 'SequenceEnable',
      sequenceStartTimestamp: 'SequenceStartTimestamp',
      serializerType: 'SerializerType',
      topicType: 'TopicType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableMsgTrace: 'boolean',
      endpointId: 'string',
      endpointType: 'string',
      msgTags: 'string',
      partition: 'number',
      partitionMode: 'string',
      producerGroup: 'string',
      sendMsgTimeout: 'number',
      sequenceEnable: 'boolean',
      sequenceStartTimestamp: 'number',
      serializerType: 'string',
      topicType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchOmsOpenAPIProjectsResponseBodyDataStepsExtraInfoErrorDetails extends $tea.Model {
  code?: string;
  level?: string;
  message?: string;
  proposal?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      level: 'Level',
      message: 'Message',
      proposal: 'Proposal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      level: 'string',
      message: 'string',
      proposal: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchOmsOpenAPIProjectsResponseBodyDataStepsExtraInfo extends $tea.Model {
  errorCode?: string;
  errorDetails?: SearchOmsOpenAPIProjectsResponseBodyDataStepsExtraInfoErrorDetails[];
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
      errorDetails: { 'type': 'array', 'itemType': SearchOmsOpenAPIProjectsResponseBodyDataStepsExtraInfoErrorDetails },
      errorMsg: 'string',
      errorParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      failedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchOmsOpenAPIProjectsResponseBodyDataStepsStepInfoConnectorFullProgressOverview extends $tea.Model {
  estimatedRemainingTimeOfSec?: number;
  estimatedTotalCount?: number;
  finishedCount?: number;
  progress?: number;
  static names(): { [key: string]: string } {
    return {
      estimatedRemainingTimeOfSec: 'EstimatedRemainingTimeOfSec',
      estimatedTotalCount: 'EstimatedTotalCount',
      finishedCount: 'FinishedCount',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      estimatedRemainingTimeOfSec: 'number',
      estimatedTotalCount: 'number',
      finishedCount: 'number',
      progress: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchOmsOpenAPIProjectsResponseBodyDataStepsStepInfo extends $tea.Model {
  capacity?: number;
  checkpoint?: string;
  connectorFullProgressOverview?: SearchOmsOpenAPIProjectsResponseBodyDataStepsStepInfoConnectorFullProgressOverview;
  deployId?: string;
  dstIops?: number;
  dstRps?: number;
  dstRpsRef?: number;
  dstRt?: number;
  dstRtRef?: number;
  gmt?: number;
  inconsistencies?: number;
  incrTimestampCheckpoint?: number;
  jobId?: string;
  processedRecords?: number;
  skipped?: boolean;
  srcIops?: number;
  srcIopsRef?: number;
  srcRps?: number;
  srcRpsRef?: number;
  srcRt?: number;
  srcRtRef?: number;
  validated?: boolean;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      checkpoint: 'Checkpoint',
      connectorFullProgressOverview: 'ConnectorFullProgressOverview',
      deployId: 'DeployId',
      dstIops: 'DstIops',
      dstRps: 'DstRps',
      dstRpsRef: 'DstRpsRef',
      dstRt: 'DstRt',
      dstRtRef: 'DstRtRef',
      gmt: 'Gmt',
      inconsistencies: 'Inconsistencies',
      incrTimestampCheckpoint: 'IncrTimestampCheckpoint',
      jobId: 'JobId',
      processedRecords: 'ProcessedRecords',
      skipped: 'Skipped',
      srcIops: 'SrcIops',
      srcIopsRef: 'SrcIopsRef',
      srcRps: 'SrcRps',
      srcRpsRef: 'SrcRpsRef',
      srcRt: 'SrcRt',
      srcRtRef: 'SrcRtRef',
      validated: 'Validated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      checkpoint: 'string',
      connectorFullProgressOverview: SearchOmsOpenAPIProjectsResponseBodyDataStepsStepInfoConnectorFullProgressOverview,
      deployId: 'string',
      dstIops: 'number',
      dstRps: 'number',
      dstRpsRef: 'number',
      dstRt: 'number',
      dstRtRef: 'number',
      gmt: 'number',
      inconsistencies: 'number',
      incrTimestampCheckpoint: 'number',
      jobId: 'string',
      processedRecords: 'number',
      skipped: 'boolean',
      srcIops: 'number',
      srcIopsRef: 'number',
      srcRps: 'number',
      srcRpsRef: 'number',
      srcRt: 'number',
      srcRtRef: 'number',
      validated: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchOmsOpenAPIProjectsResponseBodyDataSteps extends $tea.Model {
  estimatedRemainingSeconds?: number;
  extraInfo?: SearchOmsOpenAPIProjectsResponseBodyDataStepsExtraInfo;
  finishTime?: string;
  interactive?: boolean;
  startTime?: string;
  stepDescription?: string;
  stepInfo?: SearchOmsOpenAPIProjectsResponseBodyDataStepsStepInfo;
  stepName?: string;
  stepOrder?: number;
  stepProgress?: number;
  stepStatus?: string;
  static names(): { [key: string]: string } {
    return {
      estimatedRemainingSeconds: 'EstimatedRemainingSeconds',
      extraInfo: 'ExtraInfo',
      finishTime: 'FinishTime',
      interactive: 'Interactive',
      startTime: 'StartTime',
      stepDescription: 'StepDescription',
      stepInfo: 'StepInfo',
      stepName: 'StepName',
      stepOrder: 'StepOrder',
      stepProgress: 'StepProgress',
      stepStatus: 'StepStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      estimatedRemainingSeconds: 'number',
      extraInfo: SearchOmsOpenAPIProjectsResponseBodyDataStepsExtraInfo,
      finishTime: 'string',
      interactive: 'boolean',
      startTime: 'string',
      stepDescription: 'string',
      stepInfo: SearchOmsOpenAPIProjectsResponseBodyDataStepsStepInfo,
      stepName: 'string',
      stepOrder: 'number',
      stepProgress: 'number',
      stepStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchOmsOpenAPIProjectsResponseBodyDataTransferMappingDatabasesTablesAdbTableSchema extends $tea.Model {
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

export class SearchOmsOpenAPIProjectsResponseBodyDataTransferMappingDatabasesTables extends $tea.Model {
  adbTableSchema?: SearchOmsOpenAPIProjectsResponseBodyDataTransferMappingDatabasesTablesAdbTableSchema;
  filterColumns?: string[];
  mappedName?: string;
  shardColumns?: string[];
  tableId?: string;
  tableName?: string;
  type?: string;
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      adbTableSchema: 'AdbTableSchema',
      filterColumns: 'FilterColumns',
      mappedName: 'MappedName',
      shardColumns: 'ShardColumns',
      tableId: 'TableId',
      tableName: 'TableName',
      type: 'Type',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbTableSchema: SearchOmsOpenAPIProjectsResponseBodyDataTransferMappingDatabasesTablesAdbTableSchema,
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      mappedName: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      tableId: 'string',
      tableName: 'string',
      type: 'string',
      whereClause: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchOmsOpenAPIProjectsResponseBodyDataTransferMappingDatabases extends $tea.Model {
  databaseId?: string;
  databaseName?: string;
  mappedName?: string;
  tables?: SearchOmsOpenAPIProjectsResponseBodyDataTransferMappingDatabasesTables[];
  tenantName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      databaseId: 'DatabaseId',
      databaseName: 'DatabaseName',
      mappedName: 'MappedName',
      tables: 'Tables',
      tenantName: 'TenantName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseId: 'string',
      databaseName: 'string',
      mappedName: 'string',
      tables: { 'type': 'array', 'itemType': SearchOmsOpenAPIProjectsResponseBodyDataTransferMappingDatabasesTables },
      tenantName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchOmsOpenAPIProjectsResponseBodyDataTransferMapping extends $tea.Model {
  databases?: SearchOmsOpenAPIProjectsResponseBodyDataTransferMappingDatabases[];
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': SearchOmsOpenAPIProjectsResponseBodyDataTransferMappingDatabases },
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchOmsOpenAPIProjectsResponseBodyDataTransferStepConfigIncrSyncStepTransferConfig extends $tea.Model {
  recordTypeList?: string[];
  startTimestamp?: number;
  storeLogKeptHour?: number;
  storeTransactionEnabled?: boolean;
  transferStepType?: string;
  static names(): { [key: string]: string } {
    return {
      recordTypeList: 'RecordTypeList',
      startTimestamp: 'StartTimestamp',
      storeLogKeptHour: 'StoreLogKeptHour',
      storeTransactionEnabled: 'StoreTransactionEnabled',
      transferStepType: 'TransferStepType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordTypeList: { 'type': 'array', 'itemType': 'string' },
      startTimestamp: 'number',
      storeLogKeptHour: 'number',
      storeTransactionEnabled: 'boolean',
      transferStepType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchOmsOpenAPIProjectsResponseBodyDataTransferStepConfig extends $tea.Model {
  enableFullSync?: boolean;
  enableIncrSync?: boolean;
  enableStructSync?: boolean;
  incrSyncStepTransferConfig?: SearchOmsOpenAPIProjectsResponseBodyDataTransferStepConfigIncrSyncStepTransferConfig;
  static names(): { [key: string]: string } {
    return {
      enableFullSync: 'EnableFullSync',
      enableIncrSync: 'EnableIncrSync',
      enableStructSync: 'EnableStructSync',
      incrSyncStepTransferConfig: 'IncrSyncStepTransferConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableFullSync: 'boolean',
      enableIncrSync: 'boolean',
      enableStructSync: 'boolean',
      incrSyncStepTransferConfig: SearchOmsOpenAPIProjectsResponseBodyDataTransferStepConfigIncrSyncStepTransferConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchOmsOpenAPIProjectsResponseBodyData extends $tea.Model {
  businessName?: string;
  destConfig?: SearchOmsOpenAPIProjectsResponseBodyDataDestConfig;
  labels?: SearchOmsOpenAPIProjectsResponseBodyDataLabels[];
  projectId?: string;
  projectName?: string;
  projectOwner?: string;
  sourceConfig?: SearchOmsOpenAPIProjectsResponseBodyDataSourceConfig;
  steps?: SearchOmsOpenAPIProjectsResponseBodyDataSteps[];
  transferMapping?: SearchOmsOpenAPIProjectsResponseBodyDataTransferMapping;
  transferStepConfig?: SearchOmsOpenAPIProjectsResponseBodyDataTransferStepConfig;
  static names(): { [key: string]: string } {
    return {
      businessName: 'BusinessName',
      destConfig: 'DestConfig',
      labels: 'Labels',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      projectOwner: 'ProjectOwner',
      sourceConfig: 'SourceConfig',
      steps: 'Steps',
      transferMapping: 'TransferMapping',
      transferStepConfig: 'TransferStepConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessName: 'string',
      destConfig: SearchOmsOpenAPIProjectsResponseBodyDataDestConfig,
      labels: { 'type': 'array', 'itemType': SearchOmsOpenAPIProjectsResponseBodyDataLabels },
      projectId: 'string',
      projectName: 'string',
      projectOwner: 'string',
      sourceConfig: SearchOmsOpenAPIProjectsResponseBodyDataSourceConfig,
      steps: { 'type': 'array', 'itemType': SearchOmsOpenAPIProjectsResponseBodyDataSteps },
      transferMapping: SearchOmsOpenAPIProjectsResponseBodyDataTransferMapping,
      transferStepConfig: SearchOmsOpenAPIProjectsResponseBodyDataTransferStepConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchOmsOpenAPIProjectsResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  level?: string;
  message?: string;
  proposal?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      level: 'Level',
      message: 'Message',
      proposal: 'Proposal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      level: 'string',
      message: 'string',
      proposal: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartOmsOpenAPIProjectResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  level?: string;
  message?: string;
  proposal?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      level: 'Level',
      message: 'Message',
      proposal: 'Proposal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      level: 'string',
      message: 'string',
      proposal: 'string',
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

export class StopOmsOpenAPIProjectResponseBodyErrorDetail extends $tea.Model {
  code?: string;
  level?: string;
  message?: string;
  proposal?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      level: 'Level',
      message: 'Message',
      proposal: 'Proposal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      level: 'string',
      message: 'string',
      proposal: 'string',
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

  async createDatabase(request: CreateDatabaseRequest): Promise<CreateDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDatabaseWithOptions(request, runtime);
  }

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

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

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

  async createLabel(request: CreateLabelRequest): Promise<CreateLabelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLabelWithOptions(request, runtime);
  }

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

  async createMySqlDataSource(request: CreateMySqlDataSourceRequest): Promise<CreateMySqlDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMySqlDataSourceWithOptions(request, runtime);
  }

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

  async createOceanBaseDataSource(request: CreateOceanBaseDataSourceRequest): Promise<CreateOceanBaseDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOceanBaseDataSourceWithOptions(request, runtime);
  }

  /**
    * To call this operation, you must add the IP address of the OceanBase Migration Service (OMS) server to the whitelist of the Alibaba Cloud database instance, the security rules of the ECS instance, or the security settings of your self-managed database (usually the firewall of your self-managed database) to ensure that OMS can successfully access your database instance. To obtain the IP address of the OMS server, go to the OMS data source management page in the OMS console.
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
    * To call this operation, you must add the IP address of the OceanBase Migration Service (OMS) server to the whitelist of the Alibaba Cloud database instance, the security rules of the ECS instance, or the security settings of your self-managed database (usually the firewall of your self-managed database) to ensure that OMS can successfully access your database instance. To obtain the IP address of the OMS server, go to the OMS data source management page in the OMS console.
    *
    * @param request CreateOmsMysqlDataSourceRequest
    * @return CreateOmsMysqlDataSourceResponse
   */
  async createOmsMysqlDataSource(request: CreateOmsMysqlDataSourceRequest): Promise<CreateOmsMysqlDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOmsMysqlDataSourceWithOptions(request, runtime);
  }

  async createOmsOpenAPIProjectWithOptions(tmpReq: CreateOmsOpenAPIProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateOmsOpenAPIProjectResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateOmsOpenAPIProjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.destConfig)) {
      request.destConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.destConfig, "DestConfig", "json");
    }

    if (!Util.isUnset(tmpReq.labelIds)) {
      request.labelIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelIds, "LabelIds", "json");
    }

    if (!Util.isUnset(tmpReq.sourceConfig)) {
      request.sourceConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceConfig, "SourceConfig", "json");
    }

    if (!Util.isUnset(tmpReq.transferMapping)) {
      request.transferMappingShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transferMapping, "TransferMapping", "json");
    }

    if (!Util.isUnset(tmpReq.transferStepConfig)) {
      request.transferStepConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transferStepConfig, "TransferStepConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.businessName)) {
      body["BusinessName"] = request.businessName;
    }

    if (!Util.isUnset(request.destConfigShrink)) {
      body["DestConfig"] = request.destConfigShrink;
    }

    if (!Util.isUnset(request.labelIdsShrink)) {
      body["LabelIds"] = request.labelIdsShrink;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.sourceConfigShrink)) {
      body["SourceConfig"] = request.sourceConfigShrink;
    }

    if (!Util.isUnset(request.transferMappingShrink)) {
      body["TransferMapping"] = request.transferMappingShrink;
    }

    if (!Util.isUnset(request.transferStepConfigShrink)) {
      body["TransferStepConfig"] = request.transferStepConfigShrink;
    }

    if (!Util.isUnset(request.workerGradeId)) {
      body["WorkerGradeId"] = request.workerGradeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateOmsOpenAPIProject",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOmsOpenAPIProjectResponse>(await this.callApi(params, req, runtime), new CreateOmsOpenAPIProjectResponse({}));
  }

  async createOmsOpenAPIProject(request: CreateOmsOpenAPIProjectRequest): Promise<CreateOmsOpenAPIProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOmsOpenAPIProjectWithOptions(request, runtime);
  }

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

  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectWithOptions(request, runtime);
  }

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

  async createSecurityIpGroup(request: CreateSecurityIpGroupRequest): Promise<CreateSecurityIpGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSecurityIpGroupWithOptions(request, runtime);
  }

  async createTenantWithOptions(request: CreateTenantRequest, runtime: $Util.RuntimeOptions): Promise<CreateTenantResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.charset)) {
      body["Charset"] = request.charset;
    }

    if (!Util.isUnset(request.cpu)) {
      body["Cpu"] = request.cpu;
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

  async createTenant(request: CreateTenantRequest): Promise<CreateTenantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTenantWithOptions(request, runtime);
  }

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

  async createTenantReadOnlyConnection(request: CreateTenantReadOnlyConnectionRequest): Promise<CreateTenantReadOnlyConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTenantReadOnlyConnectionWithOptions(request, runtime);
  }

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

  async createTenantSecurityIpGroup(request: CreateTenantSecurityIpGroupRequest): Promise<CreateTenantSecurityIpGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTenantSecurityIpGroupWithOptions(request, runtime);
  }

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

  async createTenantUser(request: CreateTenantUserRequest): Promise<CreateTenantUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTenantUserWithOptions(request, runtime);
  }

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

  async deleteDatabases(request: DeleteDatabasesRequest): Promise<DeleteDatabasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDatabasesWithOptions(request, runtime);
  }

  /**
    * Alibaba Cloud provides SDKs in different languages to help you quickly integrate Alibaba Cloud products and services by using APIs. We recommend that you use an SDK to call APIs. In this way, you do not need to sign for verification.
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
    * Alibaba Cloud provides SDKs in different languages to help you quickly integrate Alibaba Cloud products and services by using APIs. We recommend that you use an SDK to call APIs. In this way, you do not need to sign for verification.
    *
    * @param request DeleteInstancesRequest
    * @return DeleteInstancesResponse
   */
  async deleteInstances(request: DeleteInstancesRequest): Promise<DeleteInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstancesWithOptions(request, runtime);
  }

  async deleteOmsOpenAPIProjectWithOptions(request: DeleteOmsOpenAPIProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteOmsOpenAPIProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.workerGradeId)) {
      body["WorkerGradeId"] = request.workerGradeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteOmsOpenAPIProject",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteOmsOpenAPIProjectResponse>(await this.callApi(params, req, runtime), new DeleteOmsOpenAPIProjectResponse({}));
  }

  async deleteOmsOpenAPIProject(request: DeleteOmsOpenAPIProjectRequest): Promise<DeleteOmsOpenAPIProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteOmsOpenAPIProjectWithOptions(request, runtime);
  }

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

  async deleteProject(request: DeleteProjectRequest): Promise<DeleteProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProjectWithOptions(request, runtime);
  }

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

  async deleteSecurityIpGroup(request: DeleteSecurityIpGroupRequest): Promise<DeleteSecurityIpGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSecurityIpGroupWithOptions(request, runtime);
  }

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

  async deleteTenantSecurityIpGroup(request: DeleteTenantSecurityIpGroupRequest): Promise<DeleteTenantSecurityIpGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTenantSecurityIpGroupWithOptions(request, runtime);
  }

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

  async deleteTenantUsers(request: DeleteTenantUsersRequest): Promise<DeleteTenantUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTenantUsersWithOptions(request, runtime);
  }

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

  async deleteTenants(request: DeleteTenantsRequest): Promise<DeleteTenantsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTenantsWithOptions(request, runtime);
  }

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

  async describeAnomalySQLList(request: DescribeAnomalySQLListRequest): Promise<DescribeAnomalySQLListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAnomalySQLListWithOptions(request, runtime);
  }

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

  async describeAvailableCpuResource(request: DescribeAvailableCpuResourceRequest): Promise<DescribeAvailableCpuResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableCpuResourceWithOptions(request, runtime);
  }

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

  async describeAvailableMemResource(request: DescribeAvailableMemResourceRequest): Promise<DescribeAvailableMemResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableMemResourceWithOptions(request, runtime);
  }

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

  async describeAvailableSpec(request: DescribeAvailableSpecRequest): Promise<DescribeAvailableSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableSpecWithOptions(request, runtime);
  }

  async describeAvailableZoneWithOptions(request: DescribeAvailableZoneRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAvailableZoneResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
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

  async describeAvailableZone(request: DescribeAvailableZoneRequest): Promise<DescribeAvailableZoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAvailableZoneWithOptions(request, runtime);
  }

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

  async describeCharset(request: DescribeCharsetRequest): Promise<DescribeCharsetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCharsetWithOptions(request, runtime);
  }

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

  async describeDatabases(request: DescribeDatabasesRequest): Promise<DescribeDatabasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDatabasesWithOptions(request, runtime);
  }

  async describeInstanceWithOptions(request: DescribeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
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

  async describeInstance(request: DescribeInstanceRequest): Promise<DescribeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceWithOptions(request, runtime);
  }

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

  async describeInstanceCreatableZone(request: DescribeInstanceCreatableZoneRequest): Promise<DescribeInstanceCreatableZoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceCreatableZoneWithOptions(request, runtime);
  }

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

  async describeInstanceSSL(request: DescribeInstanceSSLRequest): Promise<DescribeInstanceSSLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceSSLWithOptions(request, runtime);
  }

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

  async describeInstanceSecurityConfigs(request: DescribeInstanceSecurityConfigsRequest): Promise<DescribeInstanceSecurityConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceSecurityConfigsWithOptions(request, runtime);
  }

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

  async describeInstanceTags(request: DescribeInstanceTagsRequest): Promise<DescribeInstanceTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceTagsWithOptions(request, runtime);
  }

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

  async describeInstanceTenantModes(request: DescribeInstanceTenantModesRequest): Promise<DescribeInstanceTenantModesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceTenantModesWithOptions(request, runtime);
  }

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

  async describeInstanceTopology(request: DescribeInstanceTopologyRequest): Promise<DescribeInstanceTopologyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceTopologyWithOptions(request, runtime);
  }

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

  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
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

  async describeMetricsData(request: DescribeMetricsDataRequest): Promise<DescribeMetricsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricsDataWithOptions(request, runtime);
  }

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

  async describeNodeMetrics(request: DescribeNodeMetricsRequest): Promise<DescribeNodeMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNodeMetricsWithOptions(request, runtime);
  }

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

  async describeOasAnomalySQLList(request: DescribeOasAnomalySQLListRequest): Promise<DescribeOasAnomalySQLListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOasAnomalySQLListWithOptions(request, runtime);
  }

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

  async describeOasSQLDetails(request: DescribeOasSQLDetailsRequest): Promise<DescribeOasSQLDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOasSQLDetailsWithOptions(request, runtime);
  }

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

  async describeOasSQLHistoryList(request: DescribeOasSQLHistoryListRequest): Promise<DescribeOasSQLHistoryListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOasSQLHistoryListWithOptions(request, runtime);
  }

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

  async describeOasSQLPlans(request: DescribeOasSQLPlansRequest): Promise<DescribeOasSQLPlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOasSQLPlansWithOptions(request, runtime);
  }

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

  async describeOasSlowSQLList(request: DescribeOasSlowSQLListRequest): Promise<DescribeOasSlowSQLListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOasSlowSQLListWithOptions(request, runtime);
  }

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

  async describeOasTopSQLList(request: DescribeOasTopSQLListRequest): Promise<DescribeOasTopSQLListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOasTopSQLListWithOptions(request, runtime);
  }

  async describeOmsOpenAPIProjectWithOptions(request: DescribeOmsOpenAPIProjectRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOmsOpenAPIProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.workerGradeId)) {
      body["WorkerGradeId"] = request.workerGradeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOmsOpenAPIProject",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOmsOpenAPIProjectResponse>(await this.callApi(params, req, runtime), new DescribeOmsOpenAPIProjectResponse({}));
  }

  async describeOmsOpenAPIProject(request: DescribeOmsOpenAPIProjectRequest): Promise<DescribeOmsOpenAPIProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOmsOpenAPIProjectWithOptions(request, runtime);
  }

  async describeOmsOpenAPIProjectStepsWithOptions(request: DescribeOmsOpenAPIProjectStepsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOmsOpenAPIProjectStepsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.workerGradeId)) {
      body["WorkerGradeId"] = request.workerGradeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOmsOpenAPIProjectSteps",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOmsOpenAPIProjectStepsResponse>(await this.callApi(params, req, runtime), new DescribeOmsOpenAPIProjectStepsResponse({}));
  }

  async describeOmsOpenAPIProjectSteps(request: DescribeOmsOpenAPIProjectStepsRequest): Promise<DescribeOmsOpenAPIProjectStepsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOmsOpenAPIProjectStepsWithOptions(request, runtime);
  }

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

  async describeOutlineBinding(request: DescribeOutlineBindingRequest): Promise<DescribeOutlineBindingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOutlineBindingWithOptions(request, runtime);
  }

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

  async describeParameters(request: DescribeParametersRequest): Promise<DescribeParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParametersWithOptions(request, runtime);
  }

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

  async describeParametersHistory(request: DescribeParametersHistoryRequest): Promise<DescribeParametersHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeParametersHistoryWithOptions(request, runtime);
  }

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

  async describeProject(request: DescribeProjectRequest): Promise<DescribeProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProjectWithOptions(request, runtime);
  }

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

  async describeProjectComponents(request: DescribeProjectComponentsRequest): Promise<DescribeProjectComponentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProjectComponentsWithOptions(request, runtime);
  }

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

  async describeProjectProgress(request: DescribeProjectProgressRequest): Promise<DescribeProjectProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProjectProgressWithOptions(request, runtime);
  }

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

  async describeProjectStepMetric(request: DescribeProjectStepMetricRequest): Promise<DescribeProjectStepMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProjectStepMetricWithOptions(request, runtime);
  }

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

  async describeProjectSteps(request: DescribeProjectStepsRequest): Promise<DescribeProjectStepsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProjectStepsWithOptions(request, runtime);
  }

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

  async describeRecommendIndex(request: DescribeRecommendIndexRequest): Promise<DescribeRecommendIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecommendIndexWithOptions(request, runtime);
  }

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

  async describeSQLDetails(request: DescribeSQLDetailsRequest): Promise<DescribeSQLDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLDetailsWithOptions(request, runtime);
  }

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

  async describeSQLHistoryList(request: DescribeSQLHistoryListRequest): Promise<DescribeSQLHistoryListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLHistoryListWithOptions(request, runtime);
  }

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

  async describeSQLPlans(request: DescribeSQLPlansRequest): Promise<DescribeSQLPlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLPlansWithOptions(request, runtime);
  }

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

  async describeSQLSamples(request: DescribeSQLSamplesRequest): Promise<DescribeSQLSamplesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLSamplesWithOptions(request, runtime);
  }

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

  async describeSecurityIpGroups(request: DescribeSecurityIpGroupsRequest): Promise<DescribeSecurityIpGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityIpGroupsWithOptions(request, runtime);
  }

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

  async describeSlowSQLHistoryList(request: DescribeSlowSQLHistoryListRequest): Promise<DescribeSlowSQLHistoryListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlowSQLHistoryListWithOptions(request, runtime);
  }

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

  async describeSlowSQLList(request: DescribeSlowSQLListRequest): Promise<DescribeSlowSQLListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSlowSQLListWithOptions(request, runtime);
  }

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

  async describeTenant(request: DescribeTenantRequest): Promise<DescribeTenantResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTenantWithOptions(request, runtime);
  }

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

  async describeTenantEncryption(request: DescribeTenantEncryptionRequest): Promise<DescribeTenantEncryptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTenantEncryptionWithOptions(request, runtime);
  }

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

  async describeTenantMetrics(request: DescribeTenantMetricsRequest): Promise<DescribeTenantMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTenantMetricsWithOptions(request, runtime);
  }

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

  async describeTenantSecurityConfigs(request: DescribeTenantSecurityConfigsRequest): Promise<DescribeTenantSecurityConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTenantSecurityConfigsWithOptions(request, runtime);
  }

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

  async describeTenantSecurityIpGroups(request: DescribeTenantSecurityIpGroupsRequest): Promise<DescribeTenantSecurityIpGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTenantSecurityIpGroupsWithOptions(request, runtime);
  }

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

  async describeTenantTags(request: DescribeTenantTagsRequest): Promise<DescribeTenantTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTenantTagsWithOptions(request, runtime);
  }

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

  async describeTenantUserRoles(request: DescribeTenantUserRolesRequest): Promise<DescribeTenantUserRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTenantUserRolesWithOptions(request, runtime);
  }

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

  async describeTenantUsers(request: DescribeTenantUsersRequest): Promise<DescribeTenantUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTenantUsersWithOptions(request, runtime);
  }

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

  async describeTenantZonesRead(request: DescribeTenantZonesReadRequest): Promise<DescribeTenantZonesReadResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTenantZonesReadWithOptions(request, runtime);
  }

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

  async describeTenants(request: DescribeTenantsRequest): Promise<DescribeTenantsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTenantsWithOptions(request, runtime);
  }

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

  async describeTimeZones(): Promise<DescribeTimeZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTimeZonesWithOptions(runtime);
  }

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

  async describeTopSQLList(request: DescribeTopSQLListRequest): Promise<DescribeTopSQLListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTopSQLListWithOptions(request, runtime);
  }

  async describeZonesWithOptions(request: DescribeZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZonesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
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

  async describeZones(request: DescribeZonesRequest): Promise<DescribeZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

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

  async getUploadOssUrl(request: GetUploadOssUrlRequest): Promise<GetUploadOssUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUploadOssUrlWithOptions(request, runtime);
  }

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

  async killProcessList(request: KillProcessListRequest): Promise<KillProcessListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.killProcessListWithOptions(request, runtime);
  }

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

  async listAllLabels(): Promise<ListAllLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAllLabelsWithOptions(runtime);
  }

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

  async listDataSource(request: ListDataSourceRequest): Promise<ListDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDataSourceWithOptions(request, runtime);
  }

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

  async listProjectFullVerifyResult(request: ListProjectFullVerifyResultRequest): Promise<ListProjectFullVerifyResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectFullVerifyResultWithOptions(request, runtime);
  }

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

  async listProjects(request: ListProjectsRequest): Promise<ListProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectsWithOptions(request, runtime);
  }

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

  async listWorkerInstances(request: ListWorkerInstancesRequest): Promise<ListWorkerInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWorkerInstancesWithOptions(request, runtime);
  }

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

  async modifyDatabaseDescription(request: ModifyDatabaseDescriptionRequest): Promise<ModifyDatabaseDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDatabaseDescriptionWithOptions(request, runtime);
  }

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

  async modifyDatabaseUserRoles(request: ModifyDatabaseUserRolesRequest): Promise<ModifyDatabaseUserRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDatabaseUserRolesWithOptions(request, runtime);
  }

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

  async modifyInstanceName(request: ModifyInstanceNameRequest): Promise<ModifyInstanceNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceNameWithOptions(request, runtime);
  }

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

  async modifyInstanceNodeNum(request: ModifyInstanceNodeNumRequest): Promise<ModifyInstanceNodeNumResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceNodeNumWithOptions(request, runtime);
  }

  async modifyInstanceSpecWithOptions(request: ModifyInstanceSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceSpecResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.diskSize)) {
      body["DiskSize"] = request.diskSize;
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

  async modifyInstanceSpec(request: ModifyInstanceSpecRequest): Promise<ModifyInstanceSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceSpecWithOptions(request, runtime);
  }

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

  async modifyInstanceTags(request: ModifyInstanceTagsRequest): Promise<ModifyInstanceTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceTagsWithOptions(request, runtime);
  }

  async modifyInstanceTemporaryCapacityWithOptions(request: ModifyInstanceTemporaryCapacityRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceTemporaryCapacityResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
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

  async modifyInstanceTemporaryCapacity(request: ModifyInstanceTemporaryCapacityRequest): Promise<ModifyInstanceTemporaryCapacityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceTemporaryCapacityWithOptions(request, runtime);
  }

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

  async modifyParameters(request: ModifyParametersRequest): Promise<ModifyParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyParametersWithOptions(request, runtime);
  }

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

  async modifySecurityIps(request: ModifySecurityIpsRequest): Promise<ModifySecurityIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySecurityIpsWithOptions(request, runtime);
  }

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

  async modifyTenantEncryption(request: ModifyTenantEncryptionRequest): Promise<ModifyTenantEncryptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTenantEncryptionWithOptions(request, runtime);
  }

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

    if (!Util.isUnset(request.tenantEndpointId)) {
      body["TenantEndpointId"] = request.tenantEndpointId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.userVSwitchId)) {
      body["UserVSwitchId"] = request.userVSwitchId;
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

  async modifyTenantPrimaryZone(request: ModifyTenantPrimaryZoneRequest): Promise<ModifyTenantPrimaryZoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTenantPrimaryZoneWithOptions(request, runtime);
  }

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

  async modifyTenantResource(request: ModifyTenantResourceRequest): Promise<ModifyTenantResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTenantResourceWithOptions(request, runtime);
  }

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

  async modifyTenantSecurityIpGroup(request: ModifyTenantSecurityIpGroupRequest): Promise<ModifyTenantSecurityIpGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTenantSecurityIpGroupWithOptions(request, runtime);
  }

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

  async modifyTenantTags(request: ModifyTenantTagsRequest): Promise<ModifyTenantTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTenantTagsWithOptions(request, runtime);
  }

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

  async modifyTenantUserDescription(request: ModifyTenantUserDescriptionRequest): Promise<ModifyTenantUserDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTenantUserDescriptionWithOptions(request, runtime);
  }

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

  async modifyTenantUserPassword(request: ModifyTenantUserPasswordRequest): Promise<ModifyTenantUserPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTenantUserPasswordWithOptions(request, runtime);
  }

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

  async modifyTenantUserRoles(request: ModifyTenantUserRolesRequest): Promise<ModifyTenantUserRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTenantUserRolesWithOptions(request, runtime);
  }

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

  async modifyTenantUserStatus(request: ModifyTenantUserStatusRequest): Promise<ModifyTenantUserStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTenantUserStatusWithOptions(request, runtime);
  }

  async releaseOmsOpenAPIProjectWithOptions(request: ReleaseOmsOpenAPIProjectRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseOmsOpenAPIProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.workerGradeId)) {
      body["WorkerGradeId"] = request.workerGradeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseOmsOpenAPIProject",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReleaseOmsOpenAPIProjectResponse>(await this.callApi(params, req, runtime), new ReleaseOmsOpenAPIProjectResponse({}));
  }

  async releaseOmsOpenAPIProject(request: ReleaseOmsOpenAPIProjectRequest): Promise<ReleaseOmsOpenAPIProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseOmsOpenAPIProjectWithOptions(request, runtime);
  }

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

  async releaseProject(request: ReleaseProjectRequest): Promise<ReleaseProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseProjectWithOptions(request, runtime);
  }

  async resetOmsOpenAPIProjectWithOptions(request: ResetOmsOpenAPIProjectRequest, runtime: $Util.RuntimeOptions): Promise<ResetOmsOpenAPIProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.workerGradeId)) {
      body["WorkerGradeId"] = request.workerGradeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ResetOmsOpenAPIProject",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetOmsOpenAPIProjectResponse>(await this.callApi(params, req, runtime), new ResetOmsOpenAPIProjectResponse({}));
  }

  async resetOmsOpenAPIProject(request: ResetOmsOpenAPIProjectRequest): Promise<ResetOmsOpenAPIProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetOmsOpenAPIProjectWithOptions(request, runtime);
  }

  async resumeOmsOpenAPIProjectWithOptions(request: ResumeOmsOpenAPIProjectRequest, runtime: $Util.RuntimeOptions): Promise<ResumeOmsOpenAPIProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.workerGradeId)) {
      body["WorkerGradeId"] = request.workerGradeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ResumeOmsOpenAPIProject",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResumeOmsOpenAPIProjectResponse>(await this.callApi(params, req, runtime), new ResumeOmsOpenAPIProjectResponse({}));
  }

  async resumeOmsOpenAPIProject(request: ResumeOmsOpenAPIProjectRequest): Promise<ResumeOmsOpenAPIProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeOmsOpenAPIProjectWithOptions(request, runtime);
  }

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

  async resumeProject(request: ResumeProjectRequest): Promise<ResumeProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeProjectWithOptions(request, runtime);
  }

  async searchOmsOpenAPIMonitorMetricWithOptions(request: SearchOmsOpenAPIMonitorMetricRequest, runtime: $Util.RuntimeOptions): Promise<SearchOmsOpenAPIMonitorMetricResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.beginTime)) {
      body["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.maxPointNum)) {
      body["MaxPointNum"] = request.maxPointNum;
    }

    if (!Util.isUnset(request.metric)) {
      body["Metric"] = request.metric;
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

    if (!Util.isUnset(request.workerGradeId)) {
      body["WorkerGradeId"] = request.workerGradeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SearchOmsOpenAPIMonitorMetric",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchOmsOpenAPIMonitorMetricResponse>(await this.callApi(params, req, runtime), new SearchOmsOpenAPIMonitorMetricResponse({}));
  }

  async searchOmsOpenAPIMonitorMetric(request: SearchOmsOpenAPIMonitorMetricRequest): Promise<SearchOmsOpenAPIMonitorMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchOmsOpenAPIMonitorMetricWithOptions(request, runtime);
  }

  async searchOmsOpenAPIProjectsWithOptions(tmpReq: SearchOmsOpenAPIProjectsRequest, runtime: $Util.RuntimeOptions): Promise<SearchOmsOpenAPIProjectsResponse> {
    Util.validateModel(tmpReq);
    let request = new SearchOmsOpenAPIProjectsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.destDbTypes)) {
      request.destDbTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.destDbTypes, "DestDbTypes", "json");
    }

    if (!Util.isUnset(tmpReq.labelIds)) {
      request.labelIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelIds, "LabelIds", "json");
    }

    if (!Util.isUnset(tmpReq.sourceDbTypes)) {
      request.sourceDbTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceDbTypes, "SourceDbTypes", "json");
    }

    if (!Util.isUnset(tmpReq.statusList)) {
      request.statusListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.statusList, "StatusList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.destDbTypesShrink)) {
      body["DestDbTypes"] = request.destDbTypesShrink;
    }

    if (!Util.isUnset(request.labelIdsShrink)) {
      body["LabelIds"] = request.labelIdsShrink;
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

    if (!Util.isUnset(request.sourceDbTypesShrink)) {
      body["SourceDbTypes"] = request.sourceDbTypesShrink;
    }

    if (!Util.isUnset(request.statusListShrink)) {
      body["StatusList"] = request.statusListShrink;
    }

    if (!Util.isUnset(request.workerGradeId)) {
      body["WorkerGradeId"] = request.workerGradeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SearchOmsOpenAPIProjects",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchOmsOpenAPIProjectsResponse>(await this.callApi(params, req, runtime), new SearchOmsOpenAPIProjectsResponse({}));
  }

  async searchOmsOpenAPIProjects(request: SearchOmsOpenAPIProjectsRequest): Promise<SearchOmsOpenAPIProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchOmsOpenAPIProjectsWithOptions(request, runtime);
  }

  async startOmsOpenAPIProjectWithOptions(request: StartOmsOpenAPIProjectRequest, runtime: $Util.RuntimeOptions): Promise<StartOmsOpenAPIProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.workerGradeId)) {
      body["WorkerGradeId"] = request.workerGradeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartOmsOpenAPIProject",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartOmsOpenAPIProjectResponse>(await this.callApi(params, req, runtime), new StartOmsOpenAPIProjectResponse({}));
  }

  async startOmsOpenAPIProject(request: StartOmsOpenAPIProjectRequest): Promise<StartOmsOpenAPIProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startOmsOpenAPIProjectWithOptions(request, runtime);
  }

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

  async startProject(request: StartProjectRequest): Promise<StartProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startProjectWithOptions(request, runtime);
  }

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

  async startProjectsByLabel(request: StartProjectsByLabelRequest): Promise<StartProjectsByLabelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startProjectsByLabelWithOptions(request, runtime);
  }

  async stopOmsOpenAPIProjectWithOptions(request: StopOmsOpenAPIProjectRequest, runtime: $Util.RuntimeOptions): Promise<StopOmsOpenAPIProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.workerGradeId)) {
      body["WorkerGradeId"] = request.workerGradeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StopOmsOpenAPIProject",
      version: "2019-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopOmsOpenAPIProjectResponse>(await this.callApi(params, req, runtime), new StopOmsOpenAPIProjectResponse({}));
  }

  async stopOmsOpenAPIProject(request: StopOmsOpenAPIProjectRequest): Promise<StopOmsOpenAPIProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopOmsOpenAPIProjectWithOptions(request, runtime);
  }

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

  async stopProject(request: StopProjectRequest): Promise<StopProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopProjectWithOptions(request, runtime);
  }

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

  async stopProjectsByLabel(request: StopProjectsByLabelRequest): Promise<StopProjectsByLabelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopProjectsByLabelWithOptions(request, runtime);
  }

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

  async switchoverInstance(request: SwitchoverInstanceRequest): Promise<SwitchoverInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.switchoverInstanceWithOptions(request, runtime);
  }

}
