// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AccessRequest extends $tea.Model {
  catalogId?: string;
  principal?: Principal;
  privilegeResources?: PrivilegeResource[];
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      principal: 'Principal',
      privilegeResources: 'PrivilegeResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      principal: Principal,
      privilegeResources: { 'type': 'array', 'itemType': PrivilegeResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Catalog extends $tea.Model {
  catalogId?: string;
  catalogType?: string;
  createTime?: number;
  createdBy?: string;
  defaultCatalog?: boolean;
  description?: string;
  jdbcEnabled?: boolean;
  locationUri?: string;
  owner?: string;
  status?: string;
  storageAccessConfig?: string;
  thriftEnabled?: boolean;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      catalogType: 'CatalogType',
      createTime: 'CreateTime',
      createdBy: 'CreatedBy',
      defaultCatalog: 'DefaultCatalog',
      description: 'Description',
      jdbcEnabled: 'JdbcEnabled',
      locationUri: 'LocationUri',
      owner: 'Owner',
      status: 'Status',
      storageAccessConfig: 'StorageAccessConfig',
      thriftEnabled: 'ThriftEnabled',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      catalogType: 'string',
      createTime: 'number',
      createdBy: 'string',
      defaultCatalog: 'boolean',
      description: 'string',
      jdbcEnabled: 'boolean',
      locationUri: 'string',
      owner: 'string',
      status: 'string',
      storageAccessConfig: 'string',
      thriftEnabled: 'boolean',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CatalogConnection extends $tea.Model {
  jdbcPassword?: string;
  jdbcUri?: string;
  jdbcUserName?: string;
  thriftUri?: string;
  vpcConnectionId?: string;
  static names(): { [key: string]: string } {
    return {
      jdbcPassword: 'JdbcPassword',
      jdbcUri: 'JdbcUri',
      jdbcUserName: 'JdbcUserName',
      thriftUri: 'ThriftUri',
      vpcConnectionId: 'VpcConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jdbcPassword: 'string',
      jdbcUri: 'string',
      jdbcUserName: 'string',
      thriftUri: 'string',
      vpcConnectionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CatalogInput extends $tea.Model {
  catalogId?: string;
  catalogType?: string;
  description?: string;
  jdbcEnabled?: boolean;
  locationUri?: string;
  owner?: string;
  storageAccessConfig?: string;
  thriftEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      catalogType: 'CatalogType',
      description: 'Description',
      jdbcEnabled: 'JdbcEnabled',
      locationUri: 'LocationUri',
      owner: 'Owner',
      storageAccessConfig: 'StorageAccessConfig',
      thriftEnabled: 'ThriftEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      catalogType: 'string',
      description: 'string',
      jdbcEnabled: 'boolean',
      locationUri: 'string',
      owner: 'string',
      storageAccessConfig: 'string',
      thriftEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CatalogResource extends $tea.Model {
  catalogId?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CatalogSettings extends $tea.Model {
  config?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CatalogVpcConnection extends $tea.Model {
  catalogId?: string;
  connectionName?: string;
  connectionStatus?: string;
  creator?: number;
  errorMessage?: string;
  gmtCreate?: string;
  gmtModified?: string;
  jdbcUri?: string;
  modifier?: number;
  owner?: number;
  regionId?: string;
  securityGroupIds?: string[];
  thriftUri?: string;
  vpcConnectionId?: string;
  vpcId?: string;
  zones?: CatalogVpcConnectionZones[];
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      connectionName: 'ConnectionName',
      connectionStatus: 'ConnectionStatus',
      creator: 'Creator',
      errorMessage: 'ErrorMessage',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      jdbcUri: 'JdbcUri',
      modifier: 'Modifier',
      owner: 'Owner',
      regionId: 'RegionId',
      securityGroupIds: 'SecurityGroupIds',
      thriftUri: 'ThriftUri',
      vpcConnectionId: 'VpcConnectionId',
      vpcId: 'VpcId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      connectionName: 'string',
      connectionStatus: 'string',
      creator: 'number',
      errorMessage: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      jdbcUri: 'string',
      modifier: 'number',
      owner: 'number',
      regionId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      thriftUri: 'string',
      vpcConnectionId: 'string',
      vpcId: 'string',
      zones: { 'type': 'array', 'itemType': CatalogVpcConnectionZones },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CatalogVpcConnectionInput extends $tea.Model {
  connectionName?: string;
  securityGroupIds?: string[];
  vpcId?: string;
  zones?: CatalogVpcConnectionInputZones[];
  static names(): { [key: string]: string } {
    return {
      connectionName: 'ConnectionName',
      securityGroupIds: 'SecurityGroupIds',
      vpcId: 'VpcId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionName: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      zones: { 'type': 'array', 'itemType': CatalogVpcConnectionInputZones },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ColumnResource extends $tea.Model {
  columnNames?: string[];
  databaseName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      columnNames: 'ColumnNames',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnNames: { 'type': 'array', 'itemType': 'string' },
      databaseName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ColumnStatistics extends $tea.Model {
  columnStatisticsDesc?: ColumnStatisticsDesc;
  columnStatisticsObjList?: ColumnStatisticsObj[];
  engine?: string;
  isStatsCompliant?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnStatisticsDesc: 'ColumnStatisticsDesc',
      columnStatisticsObjList: 'ColumnStatisticsObjList',
      engine: 'Engine',
      isStatsCompliant: 'IsStatsCompliant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnStatisticsDesc: ColumnStatisticsDesc,
      columnStatisticsObjList: { 'type': 'array', 'itemType': ColumnStatisticsObj },
      engine: 'string',
      isStatsCompliant: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ColumnStatisticsDesc extends $tea.Model {
  lastAnalyzedTime?: number;
  partitionName?: string;
  static names(): { [key: string]: string } {
    return {
      lastAnalyzedTime: 'LastAnalyzedTime',
      partitionName: 'PartitionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastAnalyzedTime: 'number',
      partitionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ColumnStatisticsObj extends $tea.Model {
  columnName?: string;
  columnStatisticsData?: ColumnStatisticsObjColumnStatisticsData;
  columnType?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      columnStatisticsData: 'ColumnStatisticsData',
      columnType: 'ColumnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      columnStatisticsData: ColumnStatisticsObjColumnStatisticsData,
      columnType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Database extends $tea.Model {
  createTime?: number;
  createdBy?: string;
  description?: string;
  locationUri?: string;
  name?: string;
  ownerName?: string;
  ownerType?: string;
  parameters?: { [key: string]: string };
  privileges?: PrincipalPrivilegeSet;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createdBy: 'CreatedBy',
      description: 'Description',
      locationUri: 'LocationUri',
      name: 'Name',
      ownerName: 'OwnerName',
      ownerType: 'OwnerType',
      parameters: 'Parameters',
      privileges: 'Privileges',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      createdBy: 'string',
      description: 'string',
      locationUri: 'string',
      name: 'string',
      ownerName: 'string',
      ownerType: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      privileges: PrincipalPrivilegeSet,
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DatabaseInput extends $tea.Model {
  createTime?: number;
  description?: string;
  locationUri?: string;
  name?: string;
  ownerName?: string;
  ownerType?: string;
  parameters?: { [key: string]: string };
  privileges?: PrincipalPrivilegeSet;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      locationUri: 'LocationUri',
      name: 'Name',
      ownerName: 'OwnerName',
      ownerType: 'OwnerType',
      parameters: 'Parameters',
      privileges: 'Privileges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      locationUri: 'string',
      name: 'string',
      ownerName: 'string',
      ownerType: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      privileges: PrincipalPrivilegeSet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DatabaseProfile extends $tea.Model {
  createTime?: string;
  fileCnt?: number;
  fileSize?: number;
  latestDate?: string;
  location?: string;
  name?: string;
  objectCnt?: number;
  objectSize?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      fileCnt: 'FileCnt',
      fileSize: 'FileSize',
      latestDate: 'LatestDate',
      location: 'Location',
      name: 'Name',
      objectCnt: 'ObjectCnt',
      objectSize: 'ObjectSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      fileCnt: 'number',
      fileSize: 'number',
      latestDate: 'string',
      location: 'string',
      name: 'string',
      objectCnt: 'number',
      objectSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DatabaseResource extends $tea.Model {
  databaseName?: string;
  databaseWildcard?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      databaseWildcard: 'DatabaseWildcard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      databaseWildcard: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DbStorageRank extends $tea.Model {
  dbName?: string;
  quantity?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      quantity: 'Quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      quantity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ErrorDetail extends $tea.Model {
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FieldSchema extends $tea.Model {
  comment?: string;
  name?: string;
  parameters?: { [key: string]: string };
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      name: 'Name',
      parameters: 'Parameters',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      name: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileCnt extends $tea.Model {
  large?: number;
  middle?: number;
  small?: number;
  tiny?: number;
  static names(): { [key: string]: string } {
    return {
      large: 'Large',
      middle: 'Middle',
      small: 'Small',
      tiny: 'Tiny',
    };
  }

  static types(): { [key: string]: any } {
    return {
      large: 'number',
      middle: 'number',
      small: 'number',
      tiny: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Function extends $tea.Model {
  catalogId?: string;
  className?: string;
  createTime?: number;
  createdBy?: string;
  databaseName?: string;
  functionName?: string;
  functionType?: string;
  ownerName?: string;
  ownerType?: string;
  resourceUri?: ResourceUri[];
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      className: 'ClassName',
      createTime: 'CreateTime',
      createdBy: 'CreatedBy',
      databaseName: 'DatabaseName',
      functionName: 'FunctionName',
      functionType: 'FunctionType',
      ownerName: 'OwnerName',
      ownerType: 'OwnerType',
      resourceUri: 'ResourceUri',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      className: 'string',
      createTime: 'number',
      createdBy: 'string',
      databaseName: 'string',
      functionName: 'string',
      functionType: 'string',
      ownerName: 'string',
      ownerType: 'string',
      resourceUri: { 'type': 'array', 'itemType': ResourceUri },
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FunctionInput extends $tea.Model {
  className?: string;
  createTime?: number;
  functionName?: string;
  functionType?: string;
  ownerName?: string;
  ownerType?: string;
  resourceUri?: ResourceUri[];
  static names(): { [key: string]: string } {
    return {
      className: 'ClassName',
      createTime: 'CreateTime',
      functionName: 'FunctionName',
      functionType: 'FunctionType',
      ownerName: 'OwnerName',
      ownerType: 'OwnerType',
      resourceUri: 'ResourceUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      className: 'string',
      createTime: 'number',
      functionName: 'string',
      functionType: 'string',
      ownerName: 'string',
      ownerType: 'string',
      resourceUri: { 'type': 'array', 'itemType': ResourceUri },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FunctionResource extends $tea.Model {
  databaseName?: string;
  functionName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      functionName: 'FunctionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      functionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantRevokeEntry extends $tea.Model {
  accesses?: string[];
  delegateAccesses?: string[];
  id?: string;
  metaResource?: MetaResource;
  principal?: Principal;
  static names(): { [key: string]: string } {
    return {
      accesses: 'Accesses',
      delegateAccesses: 'DelegateAccesses',
      id: 'Id',
      metaResource: 'MetaResource',
      principal: 'Principal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accesses: { 'type': 'array', 'itemType': 'string' },
      delegateAccesses: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      metaResource: MetaResource,
      principal: Principal,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantRevokeFailureEntry extends $tea.Model {
  errorDetail?: ErrorDetail;
  grantRevokeEntry?: GrantRevokeEntry;
  static names(): { [key: string]: string } {
    return {
      errorDetail: 'ErrorDetail',
      grantRevokeEntry: 'GrantRevokeEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorDetail: ErrorDetail,
      grantRevokeEntry: GrantRevokeEntry,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HighLight extends $tea.Model {
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

export class IndicatorStatistic extends $tea.Model {
  data?: number;
  date?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      date: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LifecycleResource extends $tea.Model {
  bizId?: string;
  catalogId?: string;
  database?: LifecycleResourceDatabase;
  databaseName?: string;
  databaseProfile?: DatabaseProfile;
  gmtCreate?: string;
  lifecycleRuleBizId?: string;
  owner?: number;
  table?: LifecycleResourceTable;
  tableName?: string;
  tableProfile?: TableProfile;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      catalogId: 'CatalogId',
      database: 'Database',
      databaseName: 'DatabaseName',
      databaseProfile: 'DatabaseProfile',
      gmtCreate: 'GmtCreate',
      lifecycleRuleBizId: 'LifecycleRuleBizId',
      owner: 'Owner',
      table: 'Table',
      tableName: 'TableName',
      tableProfile: 'TableProfile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      catalogId: 'string',
      database: LifecycleResourceDatabase,
      databaseName: 'string',
      databaseProfile: DatabaseProfile,
      gmtCreate: 'string',
      lifecycleRuleBizId: 'string',
      owner: 'number',
      table: LifecycleResourceTable,
      tableName: 'string',
      tableProfile: TableProfile,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LifecycleRule extends $tea.Model {
  archiveDays?: number;
  bindCount?: number;
  bizId?: string;
  catalogId?: string;
  coldArchiveDays?: number;
  config?: string;
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  iaDays?: number;
  name?: string;
  resourceType?: string;
  ruleType?: string;
  scheduleStatus?: string;
  workflow?: Workflow;
  workflowId?: string;
  workflowInstance?: WorkflowInstance;
  static names(): { [key: string]: string } {
    return {
      archiveDays: 'ArchiveDays',
      bindCount: 'BindCount',
      bizId: 'BizId',
      catalogId: 'CatalogId',
      coldArchiveDays: 'ColdArchiveDays',
      config: 'Config',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      iaDays: 'IaDays',
      name: 'Name',
      resourceType: 'ResourceType',
      ruleType: 'RuleType',
      scheduleStatus: 'ScheduleStatus',
      workflow: 'Workflow',
      workflowId: 'WorkflowId',
      workflowInstance: 'WorkflowInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveDays: 'number',
      bindCount: 'number',
      bizId: 'string',
      catalogId: 'string',
      coldArchiveDays: 'number',
      config: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      iaDays: 'number',
      name: 'string',
      resourceType: 'string',
      ruleType: 'string',
      scheduleStatus: 'string',
      workflow: Workflow,
      workflowId: 'string',
      workflowInstance: WorkflowInstance,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LifecycleTask extends $tea.Model {
  bizId?: string;
  lifecycleRule?: LifecycleRule;
  name?: string;
  workflowInstance?: WorkflowInstance;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      lifecycleRule: 'LifecycleRule',
      name: 'Name',
      workflowInstance: 'WorkflowInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      lifecycleRule: LifecycleRule,
      name: 'string',
      workflowInstance: WorkflowInstance,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LocationStorageRankDTO extends $tea.Model {
  fileCnt?: number;
  location?: string;
  storage?: number;
  static names(): { [key: string]: string } {
    return {
      fileCnt: 'FileCnt',
      location: 'Location',
      storage: 'Storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileCnt: 'number',
      location: 'string',
      storage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockObj extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  partitionName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      partitionName: 'PartitionName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      partitionName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockStatus extends $tea.Model {
  lockId?: number;
  lockState?: string;
  static names(): { [key: string]: string } {
    return {
      lockId: 'LockId',
      lockState: 'LockState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockId: 'number',
      lockState: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogInfo extends $tea.Model {
  bizTime?: string;
  gmtCreate?: string;
  instanceId?: string;
  logContent?: string;
  logId?: string;
  logSummary?: string;
  logType?: string;
  static names(): { [key: string]: string } {
    return {
      bizTime: 'BizTime',
      gmtCreate: 'GmtCreate',
      instanceId: 'InstanceId',
      logContent: 'LogContent',
      logId: 'LogId',
      logSummary: 'LogSummary',
      logType: 'LogType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTime: 'string',
      gmtCreate: 'string',
      instanceId: 'string',
      logContent: 'string',
      logId: 'string',
      logSummary: 'string',
      logType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MetaResource extends $tea.Model {
  catalogResource?: CatalogResource;
  columnResource?: ColumnResource;
  databaseResource?: DatabaseResource;
  functionResource?: FunctionResource;
  resourceType?: string;
  tableResource?: TableResource;
  static names(): { [key: string]: string } {
    return {
      catalogResource: 'CatalogResource',
      columnResource: 'ColumnResource',
      databaseResource: 'DatabaseResource',
      functionResource: 'FunctionResource',
      resourceType: 'ResourceType',
      tableResource: 'TableResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogResource: CatalogResource,
      columnResource: ColumnResource,
      databaseResource: DatabaseResource,
      functionResource: FunctionResource,
      resourceType: 'string',
      tableResource: TableResource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Order extends $tea.Model {
  col?: string;
  order?: number;
  static names(): { [key: string]: string } {
    return {
      col: 'Col',
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      col: 'string',
      order: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Partition extends $tea.Model {
  createTime?: number;
  databaseName?: string;
  lastAccessTime?: number;
  lastAnalyzedTime?: number;
  parameters?: { [key: string]: string };
  privileges?: PrincipalPrivilegeSet;
  sd?: StorageDescriptor;
  tableName?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      databaseName: 'DatabaseName',
      lastAccessTime: 'LastAccessTime',
      lastAnalyzedTime: 'LastAnalyzedTime',
      parameters: 'Parameters',
      privileges: 'Privileges',
      sd: 'Sd',
      tableName: 'TableName',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      databaseName: 'string',
      lastAccessTime: 'number',
      lastAnalyzedTime: 'number',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      privileges: PrincipalPrivilegeSet,
      sd: StorageDescriptor,
      tableName: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PartitionError extends $tea.Model {
  errorDetail?: ErrorDetail;
  partitionValues?: string[];
  static names(): { [key: string]: string } {
    return {
      errorDetail: 'ErrorDetail',
      partitionValues: 'PartitionValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorDetail: ErrorDetail,
      partitionValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PartitionInput extends $tea.Model {
  createTime?: number;
  databaseName?: string;
  lastAccessTime?: number;
  lastAnalyzedTime?: number;
  parameters?: { [key: string]: string };
  privileges?: PrincipalPrivilegeSet;
  sd?: StorageDescriptor;
  tableName?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      databaseName: 'DatabaseName',
      lastAccessTime: 'LastAccessTime',
      lastAnalyzedTime: 'LastAnalyzedTime',
      parameters: 'Parameters',
      privileges: 'Privileges',
      sd: 'Sd',
      tableName: 'TableName',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      databaseName: 'string',
      lastAccessTime: 'number',
      lastAnalyzedTime: 'number',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      privileges: PrincipalPrivilegeSet,
      sd: StorageDescriptor,
      tableName: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PartitionProfile extends $tea.Model {
  accessNum?: number;
  accessNumMonthly?: number;
  accessNumWeekly?: number;
  archiveStatus?: string;
  createTime?: string;
  dataSourceType?: string;
  databaseName?: string;
  fileCnt?: number;
  fileSize?: number;
  lastAccessNumTime?: string;
  lastAccessTime?: string;
  lastModifyTime?: string;
  location?: string;
  objectAccessNum?: number;
  objectAccessNumMonthly?: number;
  objectAccessNumWeekly?: number;
  objectCnt?: number;
  objectSize?: number;
  partitionName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      accessNum: 'AccessNum',
      accessNumMonthly: 'AccessNumMonthly',
      accessNumWeekly: 'AccessNumWeekly',
      archiveStatus: 'ArchiveStatus',
      createTime: 'CreateTime',
      dataSourceType: 'DataSourceType',
      databaseName: 'DatabaseName',
      fileCnt: 'FileCnt',
      fileSize: 'FileSize',
      lastAccessNumTime: 'LastAccessNumTime',
      lastAccessTime: 'LastAccessTime',
      lastModifyTime: 'LastModifyTime',
      location: 'Location',
      objectAccessNum: 'ObjectAccessNum',
      objectAccessNumMonthly: 'ObjectAccessNumMonthly',
      objectAccessNumWeekly: 'ObjectAccessNumWeekly',
      objectCnt: 'ObjectCnt',
      objectSize: 'ObjectSize',
      partitionName: 'PartitionName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessNum: 'number',
      accessNumMonthly: 'number',
      accessNumWeekly: 'number',
      archiveStatus: 'string',
      createTime: 'string',
      dataSourceType: 'string',
      databaseName: 'string',
      fileCnt: 'number',
      fileSize: 'number',
      lastAccessNumTime: 'string',
      lastAccessTime: 'string',
      lastModifyTime: 'string',
      location: 'string',
      objectAccessNum: 'number',
      objectAccessNumMonthly: 'number',
      objectAccessNumWeekly: 'number',
      objectCnt: 'number',
      objectSize: 'number',
      partitionName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PartitionSpec extends $tea.Model {
  sharedSDPartitions?: Partition[];
  sharedStorageDescriptor?: PartitionSpecSharedStorageDescriptor;
  static names(): { [key: string]: string } {
    return {
      sharedSDPartitions: 'SharedSDPartitions',
      sharedStorageDescriptor: 'SharedStorageDescriptor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sharedSDPartitions: { 'type': 'array', 'itemType': Partition },
      sharedStorageDescriptor: PartitionSpecSharedStorageDescriptor,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Principal extends $tea.Model {
  principalArn?: string;
  static names(): { [key: string]: string } {
    return {
      principalArn: 'PrincipalArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principalArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrincipalPrivilegeSet extends $tea.Model {
  groupPrivileges?: { [key: string]: PrivilegeGrantInfo[] };
  rolePrivileges?: { [key: string]: PrivilegeGrantInfo[] };
  userPrivileges?: { [key: string]: PrivilegeGrantInfo[] };
  static names(): { [key: string]: string } {
    return {
      groupPrivileges: 'GroupPrivileges',
      rolePrivileges: 'RolePrivileges',
      userPrivileges: 'UserPrivileges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupPrivileges: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': PrivilegeGrantInfo } },
      rolePrivileges: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': PrivilegeGrantInfo } },
      userPrivileges: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': PrivilegeGrantInfo } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrincipalResourcePermissions extends $tea.Model {
  accesses?: string[];
  delegateAccesses?: string[];
  metaResource?: MetaResource;
  principal?: Principal;
  static names(): { [key: string]: string } {
    return {
      accesses: 'Accesses',
      delegateAccesses: 'DelegateAccesses',
      metaResource: 'MetaResource',
      principal: 'Principal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accesses: { 'type': 'array', 'itemType': 'string' },
      delegateAccesses: { 'type': 'array', 'itemType': 'string' },
      metaResource: MetaResource,
      principal: Principal,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrivilegeGrantInfo extends $tea.Model {
  createTime?: number;
  grantOption?: boolean;
  grantor?: string;
  grantorType?: string;
  privilege?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      grantOption: 'GrantOption',
      grantor: 'Grantor',
      grantorType: 'GrantorType',
      privilege: 'Privilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      grantOption: 'boolean',
      grantor: 'string',
      grantorType: 'string',
      privilege: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrivilegeResource extends $tea.Model {
  access?: string;
  metaResource?: MetaResource;
  static names(): { [key: string]: string } {
    return {
      access: 'Access',
      metaResource: 'MetaResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      access: 'string',
      metaResource: MetaResource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceUri extends $tea.Model {
  resourceType?: string;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Role extends $tea.Model {
  createTime?: number;
  description?: string;
  displayName?: string;
  isPredefined?: number;
  name?: string;
  principalArn?: string;
  updateTime?: number;
  users?: Principal[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      displayName: 'DisplayName',
      isPredefined: 'IsPredefined',
      name: 'Name',
      principalArn: 'PrincipalArn',
      updateTime: 'UpdateTime',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      displayName: 'string',
      isPredefined: 'number',
      name: 'string',
      principalArn: 'string',
      updateTime: 'number',
      users: { 'type': 'array', 'itemType': Principal },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RoleInput extends $tea.Model {
  description?: string;
  displayName?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SerDeInfo extends $tea.Model {
  name?: string;
  parameters?: { [key: string]: string };
  serializationLib?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      parameters: 'Parameters',
      serializationLib: 'SerializationLib',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      serializationLib: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SingleIndicatorDTO extends $tea.Model {
  dayIncrement?: number;
  dayOnDay?: number;
  monthIncrement?: number;
  monthOnMonth?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      dayIncrement: 'DayIncrement',
      dayOnDay: 'DayOnDay',
      monthIncrement: 'MonthIncrement',
      monthOnMonth: 'MonthOnMonth',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayIncrement: 'number',
      dayOnDay: 'number',
      monthIncrement: 'number',
      monthOnMonth: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SkewedInfo extends $tea.Model {
  skewedColNames?: string[];
  skewedColValueLocationMaps?: { [key: string]: string };
  skewedColValues?: string[][];
  static names(): { [key: string]: string } {
    return {
      skewedColNames: 'SkewedColNames',
      skewedColValueLocationMaps: 'SkewedColValueLocationMaps',
      skewedColValues: 'SkewedColValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skewedColNames: { 'type': 'array', 'itemType': 'string' },
      skewedColValueLocationMaps: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      skewedColValues: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmallFileCntRank extends $tea.Model {
  dbName?: string;
  location?: string;
  quantity?: number;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      location: 'Location',
      quantity: 'Quantity',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      location: 'string',
      quantity: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SortCriterion extends $tea.Model {
  fieldName?: string;
  sort?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'FieldName',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      sort: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StorageCollectTaskOperationResult extends $tea.Model {
  dlfCreated?: boolean;
  errCode?: string;
  errMessage?: string;
  success?: boolean;
  taskId?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      dlfCreated: 'DlfCreated',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      success: 'Success',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dlfCreated: 'boolean',
      errCode: 'string',
      errMessage: 'string',
      success: 'boolean',
      taskId: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StorageDescriptor extends $tea.Model {
  bucketCols?: string[];
  cols?: FieldSchema[];
  compressed?: boolean;
  inputFormat?: string;
  location?: string;
  numBuckets?: number;
  outputFormat?: string;
  parameters?: { [key: string]: string };
  serDeInfo?: SerDeInfo;
  skewedInfo?: SkewedInfo;
  sortCols?: Order[];
  storedAsSubDirectories?: boolean;
  static names(): { [key: string]: string } {
    return {
      bucketCols: 'BucketCols',
      cols: 'Cols',
      compressed: 'Compressed',
      inputFormat: 'InputFormat',
      location: 'Location',
      numBuckets: 'NumBuckets',
      outputFormat: 'OutputFormat',
      parameters: 'Parameters',
      serDeInfo: 'SerDeInfo',
      skewedInfo: 'SkewedInfo',
      sortCols: 'SortCols',
      storedAsSubDirectories: 'StoredAsSubDirectories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketCols: { 'type': 'array', 'itemType': 'string' },
      cols: { 'type': 'array', 'itemType': FieldSchema },
      compressed: 'boolean',
      inputFormat: 'string',
      location: 'string',
      numBuckets: 'number',
      outputFormat: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      serDeInfo: SerDeInfo,
      skewedInfo: SkewedInfo,
      sortCols: { 'type': 'array', 'itemType': Order },
      storedAsSubDirectories: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StorageFormat extends $tea.Model {
  avro?: number;
  csv?: number;
  delta?: number;
  hudi?: number;
  iceberg?: number;
  json?: number;
  orc?: number;
  parquet?: number;
  uncategorized?: number;
  static names(): { [key: string]: string } {
    return {
      avro: 'Avro',
      csv: 'Csv',
      delta: 'Delta',
      hudi: 'Hudi',
      iceberg: 'Iceberg',
      json: 'Json',
      orc: 'Orc',
      parquet: 'Parquet',
      uncategorized: 'Uncategorized',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avro: 'number',
      csv: 'number',
      delta: 'number',
      hudi: 'number',
      iceberg: 'number',
      json: 'number',
      orc: 'number',
      parquet: 'number',
      uncategorized: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StorageLayer extends $tea.Model {
  archive?: number;
  coldArchive?: number;
  infrequent?: number;
  standard?: number;
  unknown?: number;
  static names(): { [key: string]: string } {
    return {
      archive: 'Archive',
      coldArchive: 'ColdArchive',
      infrequent: 'Infrequent',
      standard: 'Standard',
      unknown: 'Unknown',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archive: 'number',
      coldArchive: 'number',
      infrequent: 'number',
      standard: 'number',
      unknown: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StorageRankDTO extends $tea.Model {
  dbStorageRank?: DbStorageRank[];
  smallFileCntRank?: SmallFileCntRank[];
  tableStorageRank?: TableStorageRank[];
  static names(): { [key: string]: string } {
    return {
      dbStorageRank: 'dbStorageRank',
      smallFileCntRank: 'smallFileCntRank',
      tableStorageRank: 'tableStorageRank',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbStorageRank: { 'type': 'array', 'itemType': DbStorageRank },
      smallFileCntRank: { 'type': 'array', 'itemType': SmallFileCntRank },
      tableStorageRank: { 'type': 'array', 'itemType': TableStorageRank },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StorageSummary extends $tea.Model {
  databaseNum?: number;
  partitionNum?: number;
  tableNum?: number;
  static names(): { [key: string]: string } {
    return {
      databaseNum: 'DatabaseNum',
      partitionNum: 'PartitionNum',
      tableNum: 'TableNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseNum: 'number',
      partitionNum: 'number',
      tableNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StrogeCollectTask extends $tea.Model {
  destinationBucketName?: string;
  destinationPrefix?: string;
  dlfCreated?: boolean;
  gmtCreate?: string;
  gmtModified?: string;
  id?: string;
  inventoryId?: string;
  location?: string;
  status?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      destinationBucketName: 'DestinationBucketName',
      destinationPrefix: 'DestinationPrefix',
      dlfCreated: 'DlfCreated',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      inventoryId: 'InventoryId',
      location: 'Location',
      status: 'Status',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationBucketName: 'string',
      destinationPrefix: 'string',
      dlfCreated: 'boolean',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'string',
      inventoryId: 'string',
      location: 'string',
      status: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Table extends $tea.Model {
  cascade?: boolean;
  createTime?: number;
  createdBy?: string;
  databaseName?: string;
  lastAccessTime?: number;
  lastAnalyzedTime?: number;
  owner?: string;
  ownerType?: string;
  parameters?: { [key: string]: string };
  partitionKeys?: FieldSchema[];
  privileges?: PrincipalPrivilegeSet;
  retention?: number;
  rewriteEnabled?: boolean;
  sd?: StorageDescriptor;
  tableId?: string;
  tableName?: string;
  tableType?: string;
  tableVersion?: TableVersion;
  temporary?: boolean;
  updateTime?: number;
  viewExpandedText?: string;
  viewOriginalText?: string;
  static names(): { [key: string]: string } {
    return {
      cascade: 'Cascade',
      createTime: 'CreateTime',
      createdBy: 'CreatedBy',
      databaseName: 'DatabaseName',
      lastAccessTime: 'LastAccessTime',
      lastAnalyzedTime: 'LastAnalyzedTime',
      owner: 'Owner',
      ownerType: 'OwnerType',
      parameters: 'Parameters',
      partitionKeys: 'PartitionKeys',
      privileges: 'Privileges',
      retention: 'Retention',
      rewriteEnabled: 'RewriteEnabled',
      sd: 'Sd',
      tableId: 'TableId',
      tableName: 'TableName',
      tableType: 'TableType',
      tableVersion: 'TableVersion',
      temporary: 'Temporary',
      updateTime: 'UpdateTime',
      viewExpandedText: 'ViewExpandedText',
      viewOriginalText: 'ViewOriginalText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cascade: 'boolean',
      createTime: 'number',
      createdBy: 'string',
      databaseName: 'string',
      lastAccessTime: 'number',
      lastAnalyzedTime: 'number',
      owner: 'string',
      ownerType: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      partitionKeys: { 'type': 'array', 'itemType': FieldSchema },
      privileges: PrincipalPrivilegeSet,
      retention: 'number',
      rewriteEnabled: 'boolean',
      sd: StorageDescriptor,
      tableId: 'string',
      tableName: 'string',
      tableType: 'string',
      tableVersion: TableVersion,
      temporary: 'boolean',
      updateTime: 'number',
      viewExpandedText: 'string',
      viewOriginalText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableError extends $tea.Model {
  errorDetail?: ErrorDetail;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      errorDetail: 'ErrorDetail',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorDetail: ErrorDetail,
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableExtended extends $tea.Model {
  cascade?: boolean;
  createTime?: number;
  createdBy?: string;
  databaseName?: string;
  lastAccessTime?: number;
  lastAnalyzedTime?: number;
  owner?: string;
  ownerType?: string;
  parameters?: { [key: string]: string };
  partitionKeys?: FieldSchema[];
  privileges?: TableExtendedPrivileges;
  retention?: number;
  rewriteEnabled?: boolean;
  sd?: TableExtendedSd;
  tableFormat?: string;
  tableName?: string;
  tableType?: string;
  temporary?: boolean;
  updateTime?: number;
  viewExpandedText?: string;
  viewOriginalText?: string;
  static names(): { [key: string]: string } {
    return {
      cascade: 'Cascade',
      createTime: 'CreateTime',
      createdBy: 'CreatedBy',
      databaseName: 'DatabaseName',
      lastAccessTime: 'LastAccessTime',
      lastAnalyzedTime: 'LastAnalyzedTime',
      owner: 'Owner',
      ownerType: 'OwnerType',
      parameters: 'Parameters',
      partitionKeys: 'PartitionKeys',
      privileges: 'Privileges',
      retention: 'Retention',
      rewriteEnabled: 'RewriteEnabled',
      sd: 'Sd',
      tableFormat: 'TableFormat',
      tableName: 'TableName',
      tableType: 'TableType',
      temporary: 'Temporary',
      updateTime: 'UpdateTime',
      viewExpandedText: 'ViewExpandedText',
      viewOriginalText: 'ViewOriginalText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cascade: 'boolean',
      createTime: 'number',
      createdBy: 'string',
      databaseName: 'string',
      lastAccessTime: 'number',
      lastAnalyzedTime: 'number',
      owner: 'string',
      ownerType: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      partitionKeys: { 'type': 'array', 'itemType': FieldSchema },
      privileges: TableExtendedPrivileges,
      retention: 'number',
      rewriteEnabled: 'boolean',
      sd: TableExtendedSd,
      tableFormat: 'string',
      tableName: 'string',
      tableType: 'string',
      temporary: 'boolean',
      updateTime: 'number',
      viewExpandedText: 'string',
      viewOriginalText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableInput extends $tea.Model {
  cascade?: boolean;
  createTime?: number;
  createdBy?: string;
  databaseName?: string;
  lastAccessTime?: number;
  lastAnalyzedTime?: number;
  owner?: string;
  ownerType?: string;
  parameters?: { [key: string]: string };
  partitionKeys?: FieldSchema[];
  privileges?: PrincipalPrivilegeSet;
  retention?: number;
  rewriteEnabled?: boolean;
  sd?: StorageDescriptor;
  tableName?: string;
  tableType?: string;
  temporary?: boolean;
  viewExpandedText?: string;
  viewOriginalText?: string;
  static names(): { [key: string]: string } {
    return {
      cascade: 'Cascade',
      createTime: 'CreateTime',
      createdBy: 'CreatedBy',
      databaseName: 'DatabaseName',
      lastAccessTime: 'LastAccessTime',
      lastAnalyzedTime: 'LastAnalyzedTime',
      owner: 'Owner',
      ownerType: 'OwnerType',
      parameters: 'Parameters',
      partitionKeys: 'PartitionKeys',
      privileges: 'Privileges',
      retention: 'Retention',
      rewriteEnabled: 'RewriteEnabled',
      sd: 'Sd',
      tableName: 'TableName',
      tableType: 'TableType',
      temporary: 'Temporary',
      viewExpandedText: 'ViewExpandedText',
      viewOriginalText: 'ViewOriginalText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cascade: 'boolean',
      createTime: 'number',
      createdBy: 'string',
      databaseName: 'string',
      lastAccessTime: 'number',
      lastAnalyzedTime: 'number',
      owner: 'string',
      ownerType: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      partitionKeys: { 'type': 'array', 'itemType': FieldSchema },
      privileges: PrincipalPrivilegeSet,
      retention: 'number',
      rewriteEnabled: 'boolean',
      sd: StorageDescriptor,
      tableName: 'string',
      tableType: 'string',
      temporary: 'boolean',
      viewExpandedText: 'string',
      viewOriginalText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableProfile extends $tea.Model {
  accessNum?: number;
  accessNumMonthly?: number;
  accessNumWeekly?: number;
  createTime?: string;
  dataSourceType?: string;
  databaseName?: string;
  fileCnt?: number;
  fileSize?: number;
  isPartitioned?: boolean;
  lastAccessNumTime?: string;
  lastAccessTime?: string;
  lastDdlTime?: string;
  lastModifyTime?: string;
  latestAccessNumDate?: string;
  latestDate?: string;
  location?: string;
  objectAccessNum?: number;
  objectAccessNumMonthly?: number;
  objectAccessNumWeekly?: number;
  objectCnt?: number;
  objectSize?: number;
  partitionCnt?: number;
  recordCnt?: number;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      accessNum: 'AccessNum',
      accessNumMonthly: 'AccessNumMonthly',
      accessNumWeekly: 'AccessNumWeekly',
      createTime: 'CreateTime',
      dataSourceType: 'DataSourceType',
      databaseName: 'DatabaseName',
      fileCnt: 'FileCnt',
      fileSize: 'FileSize',
      isPartitioned: 'IsPartitioned',
      lastAccessNumTime: 'LastAccessNumTime',
      lastAccessTime: 'LastAccessTime',
      lastDdlTime: 'LastDdlTime',
      lastModifyTime: 'LastModifyTime',
      latestAccessNumDate: 'LatestAccessNumDate',
      latestDate: 'LatestDate',
      location: 'Location',
      objectAccessNum: 'ObjectAccessNum',
      objectAccessNumMonthly: 'ObjectAccessNumMonthly',
      objectAccessNumWeekly: 'ObjectAccessNumWeekly',
      objectCnt: 'ObjectCnt',
      objectSize: 'ObjectSize',
      partitionCnt: 'PartitionCnt',
      recordCnt: 'RecordCnt',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessNum: 'number',
      accessNumMonthly: 'number',
      accessNumWeekly: 'number',
      createTime: 'string',
      dataSourceType: 'string',
      databaseName: 'string',
      fileCnt: 'number',
      fileSize: 'number',
      isPartitioned: 'boolean',
      lastAccessNumTime: 'string',
      lastAccessTime: 'string',
      lastDdlTime: 'string',
      lastModifyTime: 'string',
      latestAccessNumDate: 'string',
      latestDate: 'string',
      location: 'string',
      objectAccessNum: 'number',
      objectAccessNumMonthly: 'number',
      objectAccessNumWeekly: 'number',
      objectCnt: 'number',
      objectSize: 'number',
      partitionCnt: 'number',
      recordCnt: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableResource extends $tea.Model {
  databaseName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableStorageRank extends $tea.Model {
  dbName?: string;
  quantity?: number;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      quantity: 'Quantity',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      quantity: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableVersion extends $tea.Model {
  table?: Table;
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      table: 'Table',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      table: Table,
      versionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskStatus extends $tea.Model {
  message?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnarchiveDetail extends $tea.Model {
  apiCallTimes?: number;
  cost?: number;
  storageSize?: number;
  storageType?: string;
  unarchiveTaskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      apiCallTimes: 'ApiCallTimes',
      cost: 'Cost',
      storageSize: 'StorageSize',
      storageType: 'StorageType',
      unarchiveTaskStatus: 'UnarchiveTaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiCallTimes: 'number',
      cost: 'number',
      storageSize: 'number',
      storageType: 'string',
      unarchiveTaskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTablePartitionColumnStatisticsRequest extends $tea.Model {
  catalogId?: string;
  columnStatisticsList?: ColumnStatistics[];
  databaseName?: string;
  engine?: string;
  isStatsCompliant?: boolean;
  tableName?: string;
  validWriteIdList?: string;
  writeId?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      columnStatisticsList: 'ColumnStatisticsList',
      databaseName: 'DatabaseName',
      engine: 'Engine',
      isStatsCompliant: 'IsStatsCompliant',
      tableName: 'TableName',
      validWriteIdList: 'ValidWriteIdList',
      writeId: 'WriteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      columnStatisticsList: { 'type': 'array', 'itemType': ColumnStatistics },
      databaseName: 'string',
      engine: 'string',
      isStatsCompliant: 'boolean',
      tableName: 'string',
      validWriteIdList: 'string',
      writeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserRole extends $tea.Model {
  grantTime?: number;
  role?: Role;
  user?: Principal;
  static names(): { [key: string]: string } {
    return {
      grantTime: 'GrantTime',
      role: 'Role',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantTime: 'number',
      role: Role,
      user: Principal,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Workflow extends $tea.Model {
  latestEndTime?: string;
  latestInstanceId?: string;
  latestInstanceStatus?: string;
  latestStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      latestEndTime: 'LatestEndTime',
      latestInstanceId: 'LatestInstanceId',
      latestInstanceStatus: 'LatestInstanceStatus',
      latestStartTime: 'LatestStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latestEndTime: 'string',
      latestInstanceId: 'string',
      latestInstanceStatus: 'string',
      latestStartTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WorkflowInstance extends $tea.Model {
  batchProgress?: number;
  dlfWorkflowId?: string;
  endTime?: number;
  externalInstanceId?: string;
  runtimeLogs?: LogInfo[];
  startTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      batchProgress: 'BatchProgress',
      dlfWorkflowId: 'DlfWorkflowId',
      endTime: 'EndTime',
      externalInstanceId: 'ExternalInstanceId',
      runtimeLogs: 'RuntimeLogs',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchProgress: 'number',
      dlfWorkflowId: 'string',
      endTime: 'number',
      externalInstanceId: 'string',
      runtimeLogs: { 'type': 'array', 'itemType': LogInfo },
      startTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableExtendedPrivilegesRolePrivilegesValue extends $tea.Model {
  createTime?: number;
  grantOption?: boolean;
  grantor?: string;
  grantorType?: string;
  privilege?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      grantOption: 'GrantOption',
      grantor: 'Grantor',
      grantorType: 'GrantorType',
      privilege: 'Privilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      grantOption: 'boolean',
      grantor: 'string',
      grantorType: 'string',
      privilege: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableExtendedPrivilegesUserPrivilegesValue extends $tea.Model {
  createTime?: number;
  grantOption?: boolean;
  grantor?: string;
  grantorType?: string;
  privilege?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      grantOption: 'GrantOption',
      grantor: 'Grantor',
      grantorType: 'GrantorType',
      privilege: 'Privilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      grantOption: 'boolean',
      grantor: 'string',
      grantorType: 'string',
      privilege: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableExtendedPrivilegesGroupPrivilegesValue extends $tea.Model {
  createTime?: number;
  grantOption?: boolean;
  grantor?: string;
  grantorType?: string;
  privilege?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      grantOption: 'GrantOption',
      grantor: 'Grantor',
      grantorType: 'GrantorType',
      privilege: 'Privilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      grantOption: 'boolean',
      grantor: 'string',
      grantorType: 'string',
      privilege: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortLockRequest extends $tea.Model {
  lockId?: number;
  static names(): { [key: string]: string } {
    return {
      lockId: 'LockId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortLockResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbortLockResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AbortLockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AbortLockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreatePartitionsRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  ifNotExists?: boolean;
  needResult?: boolean;
  partitionInputs?: PartitionInput[];
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      ifNotExists: 'IfNotExists',
      needResult: 'NeedResult',
      partitionInputs: 'PartitionInputs',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      ifNotExists: 'boolean',
      needResult: 'boolean',
      partitionInputs: { 'type': 'array', 'itemType': PartitionInput },
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreatePartitionsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  partitionErrors?: PartitionError[];
  partitions?: Partition[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      partitionErrors: 'PartitionErrors',
      partitions: 'Partitions',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      partitionErrors: { 'type': 'array', 'itemType': PartitionError },
      partitions: { 'type': 'array', 'itemType': Partition },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreatePartitionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchCreatePartitionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchCreatePartitionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateTablesRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  ifNotExists?: boolean;
  tableInputs?: TableInput[];
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      ifNotExists: 'IfNotExists',
      tableInputs: 'TableInputs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      ifNotExists: 'boolean',
      tableInputs: { 'type': 'array', 'itemType': TableInput },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateTablesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  tableErrors?: TableError[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tableErrors: 'TableErrors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tableErrors: { 'type': 'array', 'itemType': TableError },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateTablesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchCreateTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchCreateTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeletePartitionsRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  ifExists?: boolean;
  partitionValueList?: BatchDeletePartitionsRequestPartitionValueList[];
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      ifExists: 'IfExists',
      partitionValueList: 'PartitionValueList',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      ifExists: 'boolean',
      partitionValueList: { 'type': 'array', 'itemType': BatchDeletePartitionsRequestPartitionValueList },
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeletePartitionsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  partitionErrors?: PartitionError[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      partitionErrors: 'PartitionErrors',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      partitionErrors: { 'type': 'array', 'itemType': PartitionError },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeletePartitionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchDeletePartitionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchDeletePartitionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteTableVersionsRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  tableName?: string;
  versionIds?: number[];
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
      versionIds: 'VersionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      tableName: 'string',
      versionIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteTableVersionsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteTableVersionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchDeleteTableVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchDeleteTableVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteTablesRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  ifExists?: boolean;
  tableNames?: string[];
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      ifExists: 'IfExists',
      tableNames: 'TableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      ifExists: 'boolean',
      tableNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteTablesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  tableErrors?: TableError[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tableErrors: 'TableErrors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tableErrors: { 'type': 'array', 'itemType': TableError },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteTablesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchDeleteTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchDeleteTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetPartitionColumnStatisticsRequest extends $tea.Model {
  catalogId?: string;
  columnNames?: string[];
  databaseName?: string;
  partitionNames?: string[];
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      columnNames: 'ColumnNames',
      databaseName: 'DatabaseName',
      partitionNames: 'PartitionNames',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      columnNames: { 'type': 'array', 'itemType': 'string' },
      databaseName: 'string',
      partitionNames: { 'type': 'array', 'itemType': 'string' },
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetPartitionColumnStatisticsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  partitionStatisticsMap?: { [key: string]: ColumnStatisticsObj[] };
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      partitionStatisticsMap: 'PartitionStatisticsMap',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      partitionStatisticsMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': ColumnStatisticsObj } },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetPartitionColumnStatisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchGetPartitionColumnStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchGetPartitionColumnStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetPartitionsRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  isShareSd?: boolean;
  partitionValueList?: BatchGetPartitionsRequestPartitionValueList[];
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      isShareSd: 'IsShareSd',
      partitionValueList: 'PartitionValueList',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      isShareSd: 'boolean',
      partitionValueList: { 'type': 'array', 'itemType': BatchGetPartitionsRequestPartitionValueList },
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetPartitionsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  partitionErrors?: PartitionError[];
  partitionSpecs?: PartitionSpec[];
  partitions?: Partition[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      partitionErrors: 'PartitionErrors',
      partitionSpecs: 'PartitionSpecs',
      partitions: 'Partitions',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      partitionErrors: { 'type': 'array', 'itemType': PartitionError },
      partitionSpecs: { 'type': 'array', 'itemType': PartitionSpec },
      partitions: { 'type': 'array', 'itemType': Partition },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetPartitionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchGetPartitionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchGetPartitionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetTablesRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  tableNames?: string[];
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      tableNames: 'TableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      tableNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetTablesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  tableErrors?: TableError[];
  tables?: Table[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tableErrors: 'TableErrors',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tableErrors: { 'type': 'array', 'itemType': TableError },
      tables: { 'type': 'array', 'itemType': Table },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetTablesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchGetTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchGetTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGrantPermissionsRequest extends $tea.Model {
  catalogId?: string;
  grantRevokeEntries?: GrantRevokeEntry[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      grantRevokeEntries: 'GrantRevokeEntries',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      grantRevokeEntries: { 'type': 'array', 'itemType': GrantRevokeEntry },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGrantPermissionsResponseBody extends $tea.Model {
  batchGrantRevokeFailureResult?: GrantRevokeFailureEntry[];
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      batchGrantRevokeFailureResult: 'BatchGrantRevokeFailureResult',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchGrantRevokeFailureResult: { 'type': 'array', 'itemType': GrantRevokeFailureEntry },
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGrantPermissionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchGrantPermissionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchGrantPermissionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRevokePermissionsRequest extends $tea.Model {
  catalogId?: string;
  grantRevokeEntries?: GrantRevokeEntry[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      grantRevokeEntries: 'GrantRevokeEntries',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      grantRevokeEntries: { 'type': 'array', 'itemType': GrantRevokeEntry },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRevokePermissionsResponseBody extends $tea.Model {
  batchGrantRevokeFailureResult?: GrantRevokeFailureEntry[];
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      batchGrantRevokeFailureResult: 'BatchGrantRevokeFailureResult',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchGrantRevokeFailureResult: { 'type': 'array', 'itemType': GrantRevokeFailureEntry },
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchRevokePermissionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchRevokePermissionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchRevokePermissionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdatePartitionsRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  partitionInputs?: PartitionInput[];
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      partitionInputs: 'PartitionInputs',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      partitionInputs: { 'type': 'array', 'itemType': PartitionInput },
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdatePartitionsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  partitionErrors?: PartitionError[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      partitionErrors: 'PartitionErrors',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      partitionErrors: { 'type': 'array', 'itemType': PartitionError },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdatePartitionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchUpdatePartitionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchUpdatePartitionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateTablesRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  isAsync?: boolean;
  tableInputs?: TableInput[];
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      isAsync: 'IsAsync',
      tableInputs: 'TableInputs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      isAsync: 'boolean',
      tableInputs: { 'type': 'array', 'itemType': TableInput },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateTablesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  tableErrors?: TableError[];
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tableErrors: 'TableErrors',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tableErrors: { 'type': 'array', 'itemType': TableError },
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateTablesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchUpdateTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchUpdateTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelQueryRequest extends $tea.Model {
  queryId?: string;
  static names(): { [key: string]: string } {
    return {
      queryId: 'QueryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelQueryResponseBody extends $tea.Model {
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

export class CancelQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckPermissionsRequest extends $tea.Model {
  body?: AccessRequest;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: AccessRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckPermissionsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckPermissionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckPermissionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckPermissionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCatalogRequest extends $tea.Model {
  catalogInput?: CatalogInput;
  static names(): { [key: string]: string } {
    return {
      catalogInput: 'CatalogInput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogInput: CatalogInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCatalogResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCatalogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCatalogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCatalogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatabaseRequest extends $tea.Model {
  catalogId?: string;
  databaseInput?: DatabaseInput;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseInput: 'DatabaseInput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseInput: DatabaseInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatabaseResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class CreateFunctionRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  functionInput?: FunctionInput;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      functionInput: 'FunctionInput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      functionInput: FunctionInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLockRequest extends $tea.Model {
  lockObjList?: LockObj[];
  static names(): { [key: string]: string } {
    return {
      lockObjList: 'LockObjList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockObjList: { 'type': 'array', 'itemType': LockObj },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLockResponseBody extends $tea.Model {
  code?: string;
  lockStatus?: LockStatus;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      lockStatus: 'LockStatus',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      lockStatus: LockStatus,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLockResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateLockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateLockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePartitionRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  ifNotExists?: boolean;
  needResult?: boolean;
  partitionInput?: PartitionInput;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      ifNotExists: 'IfNotExists',
      needResult: 'NeedResult',
      partitionInput: 'PartitionInput',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      ifNotExists: 'boolean',
      needResult: 'boolean',
      partitionInput: PartitionInput,
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePartitionResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  partition?: Partition;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      partition: 'Partition',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      partition: Partition,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePartitionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePartitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePartitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleRequest extends $tea.Model {
  body?: RoleInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: RoleInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  tableInput?: TableInput;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      tableInput: 'TableInput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      tableInput: TableInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCatalogRequest extends $tea.Model {
  catalogId?: string;
  isAsync?: boolean;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      isAsync: 'IsAsync',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      isAsync: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCatalogResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCatalogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCatalogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCatalogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatabaseRequest extends $tea.Model {
  async?: boolean;
  cascade?: boolean;
  catalogId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      cascade: 'Cascade',
      catalogId: 'CatalogId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      cascade: 'boolean',
      catalogId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatabaseResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatabaseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDatabaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  functionName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      functionName: 'FunctionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      functionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePartitionRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  ifExists?: boolean;
  partitionValues?: string[];
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      ifExists: 'IfExists',
      partitionValues: 'PartitionValues',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      ifExists: 'boolean',
      partitionValues: { 'type': 'array', 'itemType': 'string' },
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePartitionResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePartitionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePartitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePartitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePartitionColumnStatisticsRequest extends $tea.Model {
  catalogId?: string;
  columnNames?: string[];
  databaseName?: string;
  partitionNames?: string[];
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      columnNames: 'ColumnNames',
      databaseName: 'DatabaseName',
      partitionNames: 'PartitionNames',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      columnNames: { 'type': 'array', 'itemType': 'string' },
      databaseName: 'string',
      partitionNames: { 'type': 'array', 'itemType': 'string' },
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePartitionColumnStatisticsShrinkRequest extends $tea.Model {
  catalogId?: string;
  columnNamesShrink?: string;
  databaseName?: string;
  partitionNamesShrink?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      columnNamesShrink: 'ColumnNames',
      databaseName: 'DatabaseName',
      partitionNamesShrink: 'PartitionNames',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      columnNamesShrink: 'string',
      databaseName: 'string',
      partitionNamesShrink: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePartitionColumnStatisticsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePartitionColumnStatisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePartitionColumnStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePartitionColumnStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRoleRequest extends $tea.Model {
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRoleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableColumnStatisticsRequest extends $tea.Model {
  catalogId?: string;
  columnNames?: string[];
  databaseName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      columnNames: 'ColumnNames',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      columnNames: { 'type': 'array', 'itemType': 'string' },
      databaseName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableColumnStatisticsShrinkRequest extends $tea.Model {
  catalogId?: string;
  columnNamesShrink?: string;
  databaseName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      columnNamesShrink: 'ColumnNames',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      columnNamesShrink: 'string',
      databaseName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableColumnStatisticsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableColumnStatisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTableColumnStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTableColumnStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableVersionRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  tableName?: string;
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      tableName: 'string',
      versionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableVersionResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTableVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTableVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTableVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeregisterLocationRequest extends $tea.Model {
  locationId?: string;
  static names(): { [key: string]: string } {
    return {
      locationId: 'LocationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeregisterLocationResponseBody extends $tea.Model {
  data?: DeregisterLocationResponseBodyData;
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
      data: DeregisterLocationResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeregisterLocationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeregisterLocationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeregisterLocationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  regions?: DescribeRegionsResponseBodyRegions[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class GetAsyncTaskStatusRequest extends $tea.Model {
  catalogId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncTaskStatusResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskStatus?: TaskStatus;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskStatus: TaskStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncTaskStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAsyncTaskStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAsyncTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogRequest extends $tea.Model {
  catalogId?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogResponseBody extends $tea.Model {
  catalog?: Catalog;
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: Catalog,
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCatalogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCatalogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogSettingsRequest extends $tea.Model {
  catalogId?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogSettingsResponseBody extends $tea.Model {
  catalogSettings?: CatalogSettings;
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      catalogSettings: 'CatalogSettings',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogSettings: CatalogSettings,
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogSettingsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCatalogSettingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCatalogSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseRequest extends $tea.Model {
  catalogId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseResponseBody extends $tea.Model {
  code?: string;
  database?: Database;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      database: 'Database',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      database: Database,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDatabaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseProfileRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseProfileResponseBody extends $tea.Model {
  code?: string;
  databaseProfile?: DatabaseProfile;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      databaseProfile: 'DatabaseProfile',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      databaseProfile: DatabaseProfile,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseProfileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDatabaseProfileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDatabaseProfileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  functionName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      functionName: 'FunctionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      functionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionResponseBody extends $tea.Model {
  code?: string;
  function?: Function;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      function: 'Function',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      function: Function,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLifecycleRuleRequest extends $tea.Model {
  bizId?: string;
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      resourceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLifecycleRuleResponseBody extends $tea.Model {
  data?: LifecycleRule;
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
      data: LifecycleRule,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLifecycleRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLifecycleRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLifecycleRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLockRequest extends $tea.Model {
  lockId?: number;
  static names(): { [key: string]: string } {
    return {
      lockId: 'LockId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLockResponseBody extends $tea.Model {
  code?: string;
  lockStatus?: LockStatus;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      lockStatus: 'LockStatus',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      lockStatus: LockStatus,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLockResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPartitionRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  partitionValues?: string[];
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      partitionValues: 'PartitionValues',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      partitionValues: { 'type': 'array', 'itemType': 'string' },
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPartitionResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  partition?: Partition;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      partition: 'Partition',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      partition: Partition,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPartitionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPartitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPartitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPartitionColumnStatisticsRequest extends $tea.Model {
  catalogId?: string;
  columnNames?: string[];
  databaseName?: string;
  partitionNames?: string[];
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      columnNames: 'ColumnNames',
      databaseName: 'DatabaseName',
      partitionNames: 'PartitionNames',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      columnNames: { 'type': 'array', 'itemType': 'string' },
      databaseName: 'string',
      partitionNames: { 'type': 'array', 'itemType': 'string' },
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPartitionColumnStatisticsShrinkRequest extends $tea.Model {
  catalogId?: string;
  columnNamesShrink?: string;
  databaseName?: string;
  partitionNamesShrink?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      columnNamesShrink: 'ColumnNames',
      databaseName: 'DatabaseName',
      partitionNamesShrink: 'PartitionNames',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      columnNamesShrink: 'string',
      databaseName: 'string',
      partitionNamesShrink: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPartitionColumnStatisticsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  partitionStatisticsMap?: { [key: string]: ColumnStatisticsObj[] };
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      partitionStatisticsMap: 'PartitionStatisticsMap',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      partitionStatisticsMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': ColumnStatisticsObj } },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPartitionColumnStatisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPartitionColumnStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPartitionColumnStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryResultRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  queryId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryId: 'QueryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      queryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryResultResponseBody extends $tea.Model {
  duration?: number;
  endTime?: string;
  errorMessage?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: string;
  jobCompleted?: boolean;
  logs?: string;
  owner?: number;
  progress?: number;
  regionId?: string;
  requestId?: string;
  resultTmpDb?: string;
  resultTmpTable?: string;
  rowCount?: number;
  rowCountOverLimit?: boolean;
  rows?: string;
  schema?: string;
  sql?: string;
  startTime?: string;
  status?: string;
  success?: boolean;
  totalBytesProcessed?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      endTime: 'EndTime',
      errorMessage: 'ErrorMessage',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      jobCompleted: 'JobCompleted',
      logs: 'Logs',
      owner: 'Owner',
      progress: 'Progress',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resultTmpDb: 'ResultTmpDb',
      resultTmpTable: 'ResultTmpTable',
      rowCount: 'RowCount',
      rowCountOverLimit: 'RowCountOverLimit',
      rows: 'Rows',
      schema: 'Schema',
      sql: 'Sql',
      startTime: 'StartTime',
      status: 'Status',
      success: 'Success',
      totalBytesProcessed: 'TotalBytesProcessed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      endTime: 'string',
      errorMessage: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'string',
      jobCompleted: 'boolean',
      logs: 'string',
      owner: 'number',
      progress: 'number',
      regionId: 'string',
      requestId: 'string',
      resultTmpDb: 'string',
      resultTmpTable: 'string',
      rowCount: 'number',
      rowCountOverLimit: 'boolean',
      rows: 'string',
      schema: 'string',
      sql: 'string',
      startTime: 'string',
      status: 'string',
      success: 'boolean',
      totalBytesProcessed: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQueryResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetQueryResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionStatusRequest extends $tea.Model {
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

export class GetRegionStatusResponseBody extends $tea.Model {
  data?: GetRegionStatusResponseBodyData;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetRegionStatusResponseBodyData,
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRegionStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRegionStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleRequest extends $tea.Model {
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  role?: Role;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      role: 'Role',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      role: Role,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceStatusRequest extends $tea.Model {
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

export class GetServiceStatusResponseBody extends $tea.Model {
  data?: GetServiceStatusResponseBodyData;
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
      data: GetServiceStatusResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  table?: Table;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      table: Table,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableColumnStatisticsRequest extends $tea.Model {
  catalogId?: string;
  columnNames?: string[];
  databaseName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      columnNames: 'ColumnNames',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      columnNames: { 'type': 'array', 'itemType': 'string' },
      databaseName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableColumnStatisticsShrinkRequest extends $tea.Model {
  catalogId?: string;
  columnNamesShrink?: string;
  databaseName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      columnNamesShrink: 'ColumnNames',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      columnNamesShrink: 'string',
      databaseName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableColumnStatisticsResponseBody extends $tea.Model {
  code?: string;
  columnStatisticsObjList?: ColumnStatisticsObj[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      columnStatisticsObjList: 'ColumnStatisticsObjList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      columnStatisticsObjList: { 'type': 'array', 'itemType': ColumnStatisticsObj },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableColumnStatisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTableColumnStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTableColumnStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableProfileRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableProfileResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  tableProfile?: TableProfile;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tableProfile: 'TableProfile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tableProfile: TableProfile,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableProfileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTableProfileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTableProfileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableVersionRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  tableName?: string;
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      tableName: 'TableName',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      tableName: 'string',
      versionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableVersionResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  tableVersion?: TableVersion;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tableVersion: 'TableVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tableVersion: TableVersion,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTableVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTableVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantPermissionsRequest extends $tea.Model {
  accesses?: string[];
  catalogId?: string;
  delegateAccesses?: string[];
  metaResource?: MetaResource;
  principal?: Principal;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accesses: 'Accesses',
      catalogId: 'CatalogId',
      delegateAccesses: 'DelegateAccesses',
      metaResource: 'MetaResource',
      principal: 'Principal',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accesses: { 'type': 'array', 'itemType': 'string' },
      catalogId: 'string',
      delegateAccesses: { 'type': 'array', 'itemType': 'string' },
      metaResource: MetaResource,
      principal: Principal,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantPermissionsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantPermissionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GrantPermissionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GrantPermissionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantRoleToUsersRequest extends $tea.Model {
  roleName?: string;
  users?: Principal[];
  static names(): { [key: string]: string } {
    return {
      roleName: 'RoleName',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleName: 'string',
      users: { 'type': 'array', 'itemType': Principal },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantRoleToUsersResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantRoleToUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GrantRoleToUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GrantRoleToUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantRolesToUserRequest extends $tea.Model {
  roleNames?: string[];
  user?: Principal;
  static names(): { [key: string]: string } {
    return {
      roleNames: 'RoleNames',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleNames: { 'type': 'array', 'itemType': 'string' },
      user: Principal,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantRolesToUserResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantRolesToUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GrantRolesToUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GrantRolesToUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCatalogsRequest extends $tea.Model {
  idPattern?: string;
  nextPageToken?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      idPattern: 'IdPattern',
      nextPageToken: 'NextPageToken',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idPattern: 'string',
      nextPageToken: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCatalogsResponseBody extends $tea.Model {
  catalogs?: Catalog[];
  code?: string;
  message?: string;
  nextPageToken?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      catalogs: 'Catalogs',
      code: 'Code',
      message: 'Message',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogs: { 'type': 'array', 'itemType': Catalog },
      code: 'string',
      message: 'string',
      nextPageToken: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCatalogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCatalogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCatalogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesRequest extends $tea.Model {
  catalogId?: string;
  namePattern?: string;
  nextPageToken?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      namePattern: 'NamePattern',
      nextPageToken: 'NextPageToken',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      namePattern: 'string',
      nextPageToken: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponseBody extends $tea.Model {
  code?: string;
  databases?: Database[];
  message?: string;
  nextPageToken?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      databases: 'Databases',
      message: 'Message',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      databases: { 'type': 'array', 'itemType': Database },
      message: 'string',
      nextPageToken: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDatabasesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDatabasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionNamesRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  functionNamePattern?: string;
  nextPageToken?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      functionNamePattern: 'FunctionNamePattern',
      nextPageToken: 'NextPageToken',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      functionNamePattern: 'string',
      nextPageToken: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionNamesResponseBody extends $tea.Model {
  code?: string;
  functionNames?: string[];
  message?: string;
  nextPageToken?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      functionNames: 'FunctionNames',
      message: 'Message',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      functionNames: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      nextPageToken: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionNamesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFunctionNamesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFunctionNamesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  functionNamePattern?: string;
  nextPageToken?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      functionNamePattern: 'FunctionNamePattern',
      nextPageToken: 'NextPageToken',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      functionNamePattern: 'string',
      nextPageToken: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBody extends $tea.Model {
  code?: string;
  functions?: Function[];
  message?: string;
  nextPageToken?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      functions: 'Functions',
      message: 'Message',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      functions: { 'type': 'array', 'itemType': Function },
      message: 'string',
      nextPageToken: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFunctionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFunctionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPartitionNamesRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  nextPageToken?: string;
  pageSize?: number;
  partialPartValues?: string[];
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      nextPageToken: 'NextPageToken',
      pageSize: 'PageSize',
      partialPartValues: 'PartialPartValues',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      nextPageToken: 'string',
      pageSize: 'number',
      partialPartValues: { 'type': 'array', 'itemType': 'string' },
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPartitionNamesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  nextPageToken?: string;
  partitionNames?: string[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      nextPageToken: 'NextPageToken',
      partitionNames: 'PartitionNames',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      nextPageToken: 'string',
      partitionNames: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPartitionNamesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPartitionNamesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPartitionNamesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPartitionsRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  isShareSd?: boolean;
  nextPageToken?: string;
  pageSize?: number;
  partialPartValues?: string[];
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      isShareSd: 'IsShareSd',
      nextPageToken: 'NextPageToken',
      pageSize: 'PageSize',
      partialPartValues: 'PartialPartValues',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      isShareSd: 'boolean',
      nextPageToken: 'string',
      pageSize: 'number',
      partialPartValues: { 'type': 'array', 'itemType': 'string' },
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPartitionsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  nextPageToken?: string;
  partitionSpecs?: PartitionSpec[];
  partitions?: Partition[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      nextPageToken: 'NextPageToken',
      partitionSpecs: 'PartitionSpecs',
      partitions: 'Partitions',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      nextPageToken: 'string',
      partitionSpecs: { 'type': 'array', 'itemType': PartitionSpec },
      partitions: { 'type': 'array', 'itemType': Partition },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPartitionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPartitionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPartitionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPartitionsByExprResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPartitionsByFilterRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  filter?: string;
  isShareSd?: boolean;
  nextPageToken?: string;
  pageSize?: number;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      filter: 'Filter',
      isShareSd: 'IsShareSd',
      nextPageToken: 'NextPageToken',
      pageSize: 'PageSize',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      filter: 'string',
      isShareSd: 'boolean',
      nextPageToken: 'string',
      pageSize: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPartitionsByFilterResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  nextPageToken?: string;
  partitionSpecs?: PartitionSpec[];
  partitions?: Partition[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      nextPageToken: 'NextPageToken',
      partitionSpecs: 'PartitionSpecs',
      partitions: 'Partitions',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      nextPageToken: 'string',
      partitionSpecs: { 'type': 'array', 'itemType': PartitionSpec },
      partitions: { 'type': 'array', 'itemType': Partition },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPartitionsByFilterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPartitionsByFilterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPartitionsByFilterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPartitionsProfileRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  pageNumber?: number;
  pageSize?: number;
  partitionNames?: string[];
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      partitionNames: 'PartitionNames',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      partitionNames: { 'type': 'array', 'itemType': 'string' },
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPartitionsProfileShrinkRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  pageNumber?: number;
  pageSize?: number;
  partitionNamesShrink?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      partitionNamesShrink: 'PartitionNames',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      partitionNamesShrink: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPartitionsProfileResponseBody extends $tea.Model {
  code?: string;
  data?: PartitionProfile[];
  latestAccessNumDate?: string;
  latestDate?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      latestAccessNumDate: 'LatestAccessNumDate',
      latestDate: 'LatestDate',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': PartitionProfile },
      latestAccessNumDate: 'string',
      latestDate: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPartitionsProfileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPartitionsProfileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPartitionsProfileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionsRequest extends $tea.Model {
  catalogId?: string;
  isListUserRolePermissions?: boolean;
  metaResource?: MetaResource;
  metaResourceType?: string;
  nextPageToken?: string;
  pageSize?: number;
  principal?: Principal;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      isListUserRolePermissions: 'IsListUserRolePermissions',
      metaResource: 'MetaResource',
      metaResourceType: 'MetaResourceType',
      nextPageToken: 'NextPageToken',
      pageSize: 'PageSize',
      principal: 'Principal',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      isListUserRolePermissions: 'boolean',
      metaResource: MetaResource,
      metaResourceType: 'string',
      nextPageToken: 'string',
      pageSize: 'number',
      principal: Principal,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  nextPageToken?: string;
  principalResourcePermissionsList?: PrincipalResourcePermissions[];
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      nextPageToken: 'NextPageToken',
      principalResourcePermissionsList: 'PrincipalResourcePermissionsList',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      nextPageToken: 'string',
      principalResourcePermissionsList: { 'type': 'array', 'itemType': PrincipalResourcePermissions },
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPermissionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPermissionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoleUsersRequest extends $tea.Model {
  nextPageToken?: string;
  pageSize?: number;
  roleName?: string;
  userNamePattern?: string;
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'NextPageToken',
      pageSize: 'PageSize',
      roleName: 'RoleName',
      userNamePattern: 'UserNamePattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      pageSize: 'number',
      roleName: 'string',
      userNamePattern: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoleUsersResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  nextPageToken?: string;
  requestId?: string;
  success?: boolean;
  userRoles?: UserRole[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
      success: 'Success',
      userRoles: 'UserRoles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      nextPageToken: 'string',
      requestId: 'string',
      success: 'boolean',
      userRoles: { 'type': 'array', 'itemType': UserRole },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoleUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRoleUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRoleUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesRequest extends $tea.Model {
  nextPageToken?: string;
  pageSize?: number;
  roleNamePattern?: string;
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'NextPageToken',
      pageSize: 'PageSize',
      roleNamePattern: 'RoleNamePattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      pageSize: 'number',
      roleNamePattern: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  nextPageToken?: string;
  requestId?: string;
  roles?: Role[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
      roles: 'Roles',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      nextPageToken: 'string',
      requestId: 'string',
      roles: { 'type': 'array', 'itemType': Role },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRolesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRolesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableNamesRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  nextPageToken?: string;
  pageSize?: number;
  tableNamePattern?: string;
  tableType?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      nextPageToken: 'NextPageToken',
      pageSize: 'PageSize',
      tableNamePattern: 'TableNamePattern',
      tableType: 'TableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      nextPageToken: 'string',
      pageSize: 'number',
      tableNamePattern: 'string',
      tableType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableNamesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  nextPageToken?: string;
  requestId?: string;
  success?: boolean;
  tableNames?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
      success: 'Success',
      tableNames: 'TableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      nextPageToken: 'string',
      requestId: 'string',
      success: 'boolean',
      tableNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableNamesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTableNamesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTableNamesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableVersionsRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  nextPageToken?: string;
  pageSize?: number;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      nextPageToken: 'NextPageToken',
      pageSize: 'PageSize',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      nextPageToken: 'string',
      pageSize: 'number',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableVersionsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  nextPageToken?: string;
  requestId?: string;
  success?: boolean;
  tableVersions?: TableVersion[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
      success: 'Success',
      tableVersions: 'TableVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      nextPageToken: 'string',
      requestId: 'string',
      success: 'boolean',
      tableVersions: { 'type': 'array', 'itemType': TableVersion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableVersionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTableVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTableVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  nextPageToken?: string;
  pageSize?: number;
  tableNamePattern?: string;
  tableType?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      nextPageToken: 'NextPageToken',
      pageSize: 'PageSize',
      tableNamePattern: 'TableNamePattern',
      tableType: 'TableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      nextPageToken: 'string',
      pageSize: 'number',
      tableNamePattern: 'string',
      tableType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  nextPageToken?: string;
  requestId?: string;
  success?: boolean;
  tables?: Table[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
      success: 'Success',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      nextPageToken: 'string',
      requestId: 'string',
      success: 'boolean',
      tables: { 'type': 'array', 'itemType': Table },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserRolesRequest extends $tea.Model {
  nextPageToken?: string;
  pageSize?: number;
  principalArn?: string;
  roleNamePattern?: string;
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'NextPageToken',
      pageSize: 'PageSize',
      principalArn: 'PrincipalArn',
      roleNamePattern: 'RoleNamePattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      pageSize: 'number',
      principalArn: 'string',
      roleNamePattern: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserRolesResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  nextPageToken?: string;
  requestId?: string;
  success?: boolean;
  userRoles?: UserRole[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
      success: 'Success',
      userRoles: 'UserRoles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      nextPageToken: 'string',
      requestId: 'string',
      success: 'boolean',
      userRoles: { 'type': 'array', 'itemType': UserRole },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserRolesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserRolesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserRolesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshLockRequest extends $tea.Model {
  lockId?: number;
  static names(): { [key: string]: string } {
    return {
      lockId: 'LockId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshLockResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshLockResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefreshLockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RefreshLockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterLocationRequest extends $tea.Model {
  inventoryCollectEnabled?: boolean;
  location?: string;
  ossLogCollectEnabled?: boolean;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      inventoryCollectEnabled: 'InventoryCollectEnabled',
      location: 'Location',
      ossLogCollectEnabled: 'OssLogCollectEnabled',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inventoryCollectEnabled: 'boolean',
      location: 'string',
      ossLogCollectEnabled: 'boolean',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterLocationResponseBody extends $tea.Model {
  data?: RegisterLocationResponseBodyData;
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
      data: RegisterLocationResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterLocationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RegisterLocationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RegisterLocationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenamePartitionRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  partitionInput?: PartitionInput;
  partitionValues?: string[];
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      partitionInput: 'PartitionInput',
      partitionValues: 'PartitionValues',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      partitionInput: PartitionInput,
      partitionValues: { 'type': 'array', 'itemType': 'string' },
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenamePartitionResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenamePartitionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenamePartitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenamePartitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameTableRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  isAsync?: boolean;
  tableInput?: TableInput;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      isAsync: 'IsAsync',
      tableInput: 'TableInput',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      isAsync: 'boolean',
      tableInput: TableInput,
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameTableResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenameTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenameTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokePermissionsRequest extends $tea.Model {
  accesses?: string[];
  catalogId?: string;
  delegateAccesses?: string[];
  metaResource?: MetaResource;
  principal?: Principal;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accesses: 'Accesses',
      catalogId: 'CatalogId',
      delegateAccesses: 'DelegateAccesses',
      metaResource: 'MetaResource',
      principal: 'Principal',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accesses: { 'type': 'array', 'itemType': 'string' },
      catalogId: 'string',
      delegateAccesses: { 'type': 'array', 'itemType': 'string' },
      metaResource: MetaResource,
      principal: Principal,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokePermissionsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokePermissionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevokePermissionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RevokePermissionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeRoleFromUsersRequest extends $tea.Model {
  roleName?: string;
  users?: Principal[];
  static names(): { [key: string]: string } {
    return {
      roleName: 'RoleName',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleName: 'string',
      users: { 'type': 'array', 'itemType': Principal },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeRoleFromUsersResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeRoleFromUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevokeRoleFromUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RevokeRoleFromUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeRolesFromUserRequest extends $tea.Model {
  roleNames?: string[];
  user?: Principal;
  static names(): { [key: string]: string } {
    return {
      roleNames: 'RoleNames',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleNames: { 'type': 'array', 'itemType': 'string' },
      user: Principal,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeRolesFromUserResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeRolesFromUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevokeRolesFromUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RevokeRolesFromUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMigrationWorkflowRequest extends $tea.Model {
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

export class RunMigrationWorkflowResponseBody extends $tea.Model {
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

export class RunMigrationWorkflowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunMigrationWorkflowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunMigrationWorkflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchRequest extends $tea.Model {
  catalogId?: string;
  pageNumber?: number;
  pageSize?: number;
  searchText?: string;
  searchType?: string;
  sortCriteria?: SortCriterion[];
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchText: 'SearchText',
      searchType: 'SearchType',
      sortCriteria: 'SortCriteria',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchText: 'string',
      searchType: 'string',
      sortCriteria: { 'type': 'array', 'itemType': SortCriterion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResponseBody extends $tea.Model {
  code?: string;
  databaseResult?: SearchResponseBodyDatabaseResult;
  message?: string;
  requestId?: string;
  success?: boolean;
  tableResult?: SearchResponseBodyTableResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      databaseResult: 'DatabaseResult',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tableResult: 'TableResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      databaseResult: SearchResponseBodyDatabaseResult,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tableResult: SearchResponseBodyTableResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAcrossCatalogRequest extends $tea.Model {
  catalogIds?: string[];
  pageNumber?: number;
  pageSize?: number;
  searchText?: string;
  searchTypes?: string[];
  sortCriteria?: SortCriterion[];
  static names(): { [key: string]: string } {
    return {
      catalogIds: 'CatalogIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchText: 'SearchText',
      searchTypes: 'SearchTypes',
      sortCriteria: 'SortCriteria',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogIds: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      searchText: 'string',
      searchTypes: { 'type': 'array', 'itemType': 'string' },
      sortCriteria: { 'type': 'array', 'itemType': SortCriterion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAcrossCatalogResponseBody extends $tea.Model {
  catalogResult?: SearchAcrossCatalogResponseBodyCatalogResult;
  code?: string;
  databaseResult?: SearchAcrossCatalogResponseBodyDatabaseResult;
  message?: string;
  requestId?: string;
  success?: boolean;
  tableResult?: SearchAcrossCatalogResponseBodyTableResult;
  static names(): { [key: string]: string } {
    return {
      catalogResult: 'CatalogResult',
      code: 'Code',
      databaseResult: 'DatabaseResult',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tableResult: 'TableResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogResult: SearchAcrossCatalogResponseBodyCatalogResult,
      code: 'string',
      databaseResult: SearchAcrossCatalogResponseBodyDatabaseResult,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tableResult: SearchAcrossCatalogResponseBodyTableResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAcrossCatalogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchAcrossCatalogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchAcrossCatalogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMigrationWorkflowRequest extends $tea.Model {
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

export class StopMigrationWorkflowResponseBody extends $tea.Model {
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

export class StopMigrationWorkflowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopMigrationWorkflowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopMigrationWorkflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitQueryRequest extends $tea.Model {
  catalogId?: string;
  sql?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'catalogId',
      sql: 'sql',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      sql: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitQueryResponseBody extends $tea.Model {
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

export class SubmitQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnLockRequest extends $tea.Model {
  lockId?: number;
  static names(): { [key: string]: string } {
    return {
      lockId: 'LockId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnLockResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnLockResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnLockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnLockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCatalogRequest extends $tea.Model {
  catalogInput?: CatalogInput;
  static names(): { [key: string]: string } {
    return {
      catalogInput: 'CatalogInput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogInput: CatalogInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCatalogResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCatalogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCatalogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCatalogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCatalogSettingsRequest extends $tea.Model {
  catalogId?: string;
  catalogSettings?: CatalogSettings;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      catalogSettings: 'CatalogSettings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      catalogSettings: CatalogSettings,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCatalogSettingsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCatalogSettingsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCatalogSettingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCatalogSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatabaseRequest extends $tea.Model {
  catalogId?: string;
  databaseInput?: DatabaseInput;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseInput: 'DatabaseInput',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseInput: DatabaseInput,
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatabaseResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatabaseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDatabaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionRequest extends $tea.Model {
  catalogId?: string;
  databaseName?: string;
  functionInput?: FunctionInput;
  functionName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      functionInput: 'FunctionInput',
      functionName: 'FunctionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogId: 'string',
      databaseName: 'string',
      functionInput: FunctionInput,
      functionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePartitionColumnStatisticsRequest extends $tea.Model {
  updateTablePartitionColumnStatisticsRequest?: UpdateTablePartitionColumnStatisticsRequest;
  static names(): { [key: string]: string } {
    return {
      updateTablePartitionColumnStatisticsRequest: 'UpdateTablePartitionColumnStatisticsRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTablePartitionColumnStatisticsRequest: UpdateTablePartitionColumnStatisticsRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePartitionColumnStatisticsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePartitionColumnStatisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePartitionColumnStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdatePartitionColumnStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePermissionsRequest extends $tea.Model {
  accesses?: string[];
  catalogId?: string;
  delegateAccesses?: string[];
  metaResource?: MetaResource;
  principal?: Principal;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accesses: 'Accesses',
      catalogId: 'CatalogId',
      delegateAccesses: 'DelegateAccesses',
      metaResource: 'MetaResource',
      principal: 'Principal',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accesses: { 'type': 'array', 'itemType': 'string' },
      catalogId: 'string',
      delegateAccesses: { 'type': 'array', 'itemType': 'string' },
      metaResource: MetaResource,
      principal: Principal,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePermissionsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePermissionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePermissionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdatePermissionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRegisteredLocationRequest extends $tea.Model {
  inventoryCollectEnabled?: boolean;
  locationId?: string;
  ossLogCollectEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      inventoryCollectEnabled: 'InventoryCollectEnabled',
      locationId: 'LocationId',
      ossLogCollectEnabled: 'OssLogCollectEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inventoryCollectEnabled: 'boolean',
      locationId: 'string',
      ossLogCollectEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRegisteredLocationResponseBody extends $tea.Model {
  data?: UpdateRegisteredLocationResponseBodyData;
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
      data: UpdateRegisteredLocationResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRegisteredLocationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRegisteredLocationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRegisteredLocationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleRequest extends $tea.Model {
  roleInput?: RoleInput;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      roleInput: 'RoleInput',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleInput: RoleInput,
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleUsersRequest extends $tea.Model {
  roleName?: string;
  users?: Principal[];
  static names(): { [key: string]: string } {
    return {
      roleName: 'RoleName',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleName: 'string',
      users: { 'type': 'array', 'itemType': Principal },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleUsersResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRoleUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRoleUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRoleUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableRequest extends $tea.Model {
  allowPartitionKeyChange?: boolean;
  catalogId?: string;
  databaseName?: string;
  isAsync?: boolean;
  skipArchive?: boolean;
  tableInput?: TableInput;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      allowPartitionKeyChange: 'AllowPartitionKeyChange',
      catalogId: 'CatalogId',
      databaseName: 'DatabaseName',
      isAsync: 'IsAsync',
      skipArchive: 'SkipArchive',
      tableInput: 'TableInput',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowPartitionKeyChange: 'boolean',
      catalogId: 'string',
      databaseName: 'string',
      isAsync: 'boolean',
      skipArchive: 'boolean',
      tableInput: TableInput,
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableColumnStatisticsRequest extends $tea.Model {
  updateTablePartitionColumnStatisticsRequest?: UpdateTablePartitionColumnStatisticsRequest;
  static names(): { [key: string]: string } {
    return {
      updateTablePartitionColumnStatisticsRequest: 'UpdateTablePartitionColumnStatisticsRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTablePartitionColumnStatisticsRequest: UpdateTablePartitionColumnStatisticsRequest,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableColumnStatisticsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTableColumnStatisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTableColumnStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateTableColumnStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CatalogVpcConnectionZones extends $tea.Model {
  IP?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CatalogVpcConnectionInputZones extends $tea.Model {
  IP?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ColumnStatisticsObjColumnStatisticsData extends $tea.Model {
  statisticsData?: string;
  statisticsType?: string;
  static names(): { [key: string]: string } {
    return {
      statisticsData: 'StatisticsData',
      statisticsType: 'StatisticsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statisticsData: 'string',
      statisticsType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LifecycleResourceDatabase extends $tea.Model {
  createTime?: number;
  description?: string;
  locationUri?: string;
  name?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      locationUri: 'LocationUri',
      name: 'Name',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      locationUri: 'string',
      name: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LifecycleResourceTableSdSerDeInfo extends $tea.Model {
  name?: string;
  parameters?: { [key: string]: string };
  serializationLib?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      parameters: 'Parameters',
      serializationLib: 'SerializationLib',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      serializationLib: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LifecycleResourceTableSd extends $tea.Model {
  bucketCols?: string[];
  inputFormat?: string;
  location?: string;
  outputFormat?: string;
  parameters?: { [key: string]: string };
  serDeInfo?: LifecycleResourceTableSdSerDeInfo;
  static names(): { [key: string]: string } {
    return {
      bucketCols: 'BucketCols',
      inputFormat: 'InputFormat',
      location: 'Location',
      outputFormat: 'OutputFormat',
      parameters: 'Parameters',
      serDeInfo: 'SerDeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketCols: { 'type': 'array', 'itemType': 'string' },
      inputFormat: 'string',
      location: 'string',
      outputFormat: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      serDeInfo: LifecycleResourceTableSdSerDeInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LifecycleResourceTable extends $tea.Model {
  createTime?: number;
  databaseName?: string;
  parameters?: { [key: string]: string };
  sd?: LifecycleResourceTableSd;
  tableName?: string;
  tableType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      databaseName: 'DatabaseName',
      parameters: 'Parameters',
      sd: 'Sd',
      tableName: 'TableName',
      tableType: 'TableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      databaseName: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      sd: LifecycleResourceTableSd,
      tableName: 'string',
      tableType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PartitionSpecSharedStorageDescriptor extends $tea.Model {
  cols?: FieldSchema[];
  location?: string;
  static names(): { [key: string]: string } {
    return {
      cols: 'Cols',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cols: { 'type': 'array', 'itemType': FieldSchema },
      location: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableExtendedPrivileges extends $tea.Model {
  rolePrivileges?: { [key: string]: TableExtendedPrivilegesRolePrivilegesValue[] };
  userPrivileges?: { [key: string]: TableExtendedPrivilegesUserPrivilegesValue[] };
  groupPrivileges?: { [key: string]: TableExtendedPrivilegesGroupPrivilegesValue[] };
  static names(): { [key: string]: string } {
    return {
      rolePrivileges: 'RolePrivileges',
      userPrivileges: 'UserPrivileges',
      groupPrivileges: 'groupPrivileges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rolePrivileges: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': TableExtendedPrivilegesRolePrivilegesValue } },
      userPrivileges: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': TableExtendedPrivilegesUserPrivilegesValue } },
      groupPrivileges: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': TableExtendedPrivilegesGroupPrivilegesValue } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableExtendedSdSerDeInfo extends $tea.Model {
  name?: string;
  parameters?: { [key: string]: string };
  serializationLib?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      parameters: 'Parameters',
      serializationLib: 'SerializationLib',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      serializationLib: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableExtendedSdSkewedInfo extends $tea.Model {
  skewedColNames?: string[];
  skewedColValueLocationMaps?: { [key: string]: string };
  skewedColValues?: string[][];
  static names(): { [key: string]: string } {
    return {
      skewedColNames: 'SkewedColNames',
      skewedColValueLocationMaps: 'SkewedColValueLocationMaps',
      skewedColValues: 'SkewedColValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skewedColNames: { 'type': 'array', 'itemType': 'string' },
      skewedColValueLocationMaps: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      skewedColValues: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableExtendedSd extends $tea.Model {
  bucketCols?: string[];
  cols?: FieldSchema[];
  compressed?: boolean;
  inputFormat?: string;
  location?: string;
  numBuckets?: number;
  outputFormat?: string;
  parameters?: { [key: string]: string };
  serDeInfo?: TableExtendedSdSerDeInfo;
  skewedInfo?: TableExtendedSdSkewedInfo;
  sortCols?: Order[];
  storedAsSubDirectories?: boolean;
  static names(): { [key: string]: string } {
    return {
      bucketCols: 'BucketCols',
      cols: 'Cols',
      compressed: 'Compressed',
      inputFormat: 'InputFormat',
      location: 'Location',
      numBuckets: 'NumBuckets',
      outputFormat: 'OutputFormat',
      parameters: 'Parameters',
      serDeInfo: 'SerDeInfo',
      skewedInfo: 'SkewedInfo',
      sortCols: 'SortCols',
      storedAsSubDirectories: 'StoredAsSubDirectories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketCols: { 'type': 'array', 'itemType': 'string' },
      cols: { 'type': 'array', 'itemType': FieldSchema },
      compressed: 'boolean',
      inputFormat: 'string',
      location: 'string',
      numBuckets: 'number',
      outputFormat: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      serDeInfo: TableExtendedSdSerDeInfo,
      skewedInfo: TableExtendedSdSkewedInfo,
      sortCols: { 'type': 'array', 'itemType': Order },
      storedAsSubDirectories: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeletePartitionsRequestPartitionValueList extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetPartitionsRequestPartitionValueList extends $tea.Model {
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeregisterLocationResponseBodyData extends $tea.Model {
  locationId?: string;
  storageCollectTaskOperationResultList?: StorageCollectTaskOperationResult[];
  static names(): { [key: string]: string } {
    return {
      locationId: 'LocationId',
      storageCollectTaskOperationResultList: 'StorageCollectTaskOperationResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locationId: 'string',
      storageCollectTaskOperationResultList: { 'type': 'array', 'itemType': StorageCollectTaskOperationResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  description?: string;
  name?: string;
  showName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      showName: 'ShowName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      showName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionStatusResponseBodyData extends $tea.Model {
  accountStatus?: string;
  isDependencyReady?: boolean;
  isDlfServiceOpen?: boolean;
  regionId?: string;
  regionStatus?: string;
  static names(): { [key: string]: string } {
    return {
      accountStatus: 'AccountStatus',
      isDependencyReady: 'IsDependencyReady',
      isDlfServiceOpen: 'IsDlfServiceOpen',
      regionId: 'RegionId',
      regionStatus: 'RegionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountStatus: 'string',
      isDependencyReady: 'boolean',
      isDlfServiceOpen: 'boolean',
      regionId: 'string',
      regionStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceStatusResponseBodyData extends $tea.Model {
  hasRamPermissions?: boolean;
  isDlfServiceOpen?: boolean;
  isOssOpen?: boolean;
  static names(): { [key: string]: string } {
    return {
      hasRamPermissions: 'HasRamPermissions',
      isDlfServiceOpen: 'IsDlfServiceOpen',
      isOssOpen: 'IsOssOpen',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasRamPermissions: 'boolean',
      isDlfServiceOpen: 'boolean',
      isOssOpen: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterLocationResponseBodyData extends $tea.Model {
  locationId?: string;
  storageCollectTaskOperationResultList?: StorageCollectTaskOperationResult[];
  static names(): { [key: string]: string } {
    return {
      locationId: 'LocationId',
      storageCollectTaskOperationResultList: 'StorageCollectTaskOperationResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locationId: 'string',
      storageCollectTaskOperationResultList: { 'type': 'array', 'itemType': StorageCollectTaskOperationResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResponseBodyDatabaseResultDatabases extends $tea.Model {
  database?: Database;
  highLightList?: HighLight[];
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      highLightList: 'HighLightList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: Database,
      highLightList: { 'type': 'array', 'itemType': HighLight },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResponseBodyDatabaseResult extends $tea.Model {
  databases?: SearchResponseBodyDatabaseResultDatabases[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': SearchResponseBodyDatabaseResultDatabases },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResponseBodyTableResultTables extends $tea.Model {
  highLightList?: HighLight[];
  table?: Table;
  static names(): { [key: string]: string } {
    return {
      highLightList: 'HighLightList',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      highLightList: { 'type': 'array', 'itemType': HighLight },
      table: Table,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResponseBodyTableResult extends $tea.Model {
  tables?: SearchResponseBodyTableResultTables[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      tables: 'Tables',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tables: { 'type': 'array', 'itemType': SearchResponseBodyTableResultTables },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAcrossCatalogResponseBodyCatalogResultCatalogs extends $tea.Model {
  catalog?: Catalog;
  highLightList?: HighLight[];
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      highLightList: 'HighLightList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: Catalog,
      highLightList: { 'type': 'array', 'itemType': HighLight },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAcrossCatalogResponseBodyCatalogResult extends $tea.Model {
  catalogs?: SearchAcrossCatalogResponseBodyCatalogResultCatalogs[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      catalogs: 'Catalogs',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogs: { 'type': 'array', 'itemType': SearchAcrossCatalogResponseBodyCatalogResultCatalogs },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAcrossCatalogResponseBodyDatabaseResultDatabases extends $tea.Model {
  database?: Database;
  highLightList?: HighLight[];
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      highLightList: 'HighLightList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: Database,
      highLightList: { 'type': 'array', 'itemType': HighLight },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAcrossCatalogResponseBodyDatabaseResult extends $tea.Model {
  databases?: SearchAcrossCatalogResponseBodyDatabaseResultDatabases[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': SearchAcrossCatalogResponseBodyDatabaseResultDatabases },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAcrossCatalogResponseBodyTableResultTables extends $tea.Model {
  highLightList?: HighLight[];
  table?: Table;
  static names(): { [key: string]: string } {
    return {
      highLightList: 'HighLightList',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      highLightList: { 'type': 'array', 'itemType': HighLight },
      table: Table,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAcrossCatalogResponseBodyTableResult extends $tea.Model {
  tables?: SearchAcrossCatalogResponseBodyTableResultTables[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      tables: 'Tables',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tables: { 'type': 'array', 'itemType': SearchAcrossCatalogResponseBodyTableResultTables },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRegisteredLocationResponseBodyData extends $tea.Model {
  locationId?: string;
  storageCollectTaskOperationResultList?: StorageCollectTaskOperationResult[];
  static names(): { [key: string]: string } {
    return {
      locationId: 'LocationId',
      storageCollectTaskOperationResultList: 'StorageCollectTaskOperationResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locationId: 'string',
      storageCollectTaskOperationResultList: { 'type': 'array', 'itemType': StorageCollectTaskOperationResult },
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
      'ap-northeast-1': "datalake-daily.aliyuncs.com",
      'ap-northeast-2-pop': "datalake-daily.aliyuncs.com",
      'ap-south-1': "datalake-daily.aliyuncs.com",
      'ap-southeast-1': "datalake-daily.aliyuncs.com",
      'ap-southeast-2': "datalake-daily.aliyuncs.com",
      'ap-southeast-3': "datalake-daily.aliyuncs.com",
      'ap-southeast-5': "datalake-daily.aliyuncs.com",
      'cn-beijing': "dlf.cn-beijing.aliyuncs.com",
      'cn-beijing-finance-1': "datalake-daily.aliyuncs.com",
      'cn-beijing-finance-pop': "datalake-daily.aliyuncs.com",
      'cn-beijing-gov-1': "datalake-daily.aliyuncs.com",
      'cn-beijing-nu16-b01': "datalake-daily.aliyuncs.com",
      'cn-chengdu': "datalake-daily.aliyuncs.com",
      'cn-edge-1': "datalake-daily.aliyuncs.com",
      'cn-fujian': "datalake-daily.aliyuncs.com",
      'cn-haidian-cm12-c01': "datalake-daily.aliyuncs.com",
      'cn-hangzhou': "dlf.cn-hangzhou.aliyuncs.com",
      'cn-hangzhou-bj-b01': "datalake-daily.aliyuncs.com",
      'cn-hangzhou-finance': "datalake-daily.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "datalake-daily.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "datalake-daily.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "datalake-daily.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "datalake-daily.aliyuncs.com",
      'cn-hangzhou-test-306': "datalake-daily.aliyuncs.com",
      'cn-hongkong': "datalake-daily.aliyuncs.com",
      'cn-hongkong-finance-pop': "datalake-daily.aliyuncs.com",
      'cn-huhehaote': "datalake-daily.aliyuncs.com",
      'cn-huhehaote-nebula-1': "datalake-daily.aliyuncs.com",
      'cn-north-2-gov-1': "datalake-daily.aliyuncs.com",
      'cn-qingdao': "datalake-daily.aliyuncs.com",
      'cn-qingdao-nebula': "datalake-daily.aliyuncs.com",
      'cn-shanghai': "dlf.cn-shanghai.aliyuncs.com",
      'cn-shanghai-et15-b01': "datalake-daily.aliyuncs.com",
      'cn-shanghai-et2-b01': "datalake-daily.aliyuncs.com",
      'cn-shanghai-finance-1': "datalake-daily.aliyuncs.com",
      'cn-shanghai-inner': "datalake-daily.aliyuncs.com",
      'cn-shanghai-internal-test-1': "datalake-daily.aliyuncs.com",
      'cn-shenzhen': "dlf.cn-shenzhen.aliyuncs.com",
      'cn-shenzhen-finance-1': "datalake-daily.aliyuncs.com",
      'cn-shenzhen-inner': "datalake-daily.aliyuncs.com",
      'cn-shenzhen-st4-d01': "datalake-daily.aliyuncs.com",
      'cn-shenzhen-su18-b01': "datalake-daily.aliyuncs.com",
      'cn-wuhan': "datalake-daily.aliyuncs.com",
      'cn-wulanchabu': "datalake-daily.aliyuncs.com",
      'cn-yushanfang': "datalake-daily.aliyuncs.com",
      'cn-zhangbei': "datalake-daily.aliyuncs.com",
      'cn-zhangbei-na61-b01': "datalake-daily.aliyuncs.com",
      'cn-zhangjiakou': "datalake-daily.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "datalake-daily.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "datalake-daily.aliyuncs.com",
      'eu-central-1': "datalake-daily.aliyuncs.com",
      'eu-west-1': "datalake-daily.aliyuncs.com",
      'eu-west-1-oxs': "datalake-daily.aliyuncs.com",
      'me-east-1': "datalake-daily.aliyuncs.com",
      'rus-west-1-pop': "datalake-daily.aliyuncs.com",
      'us-east-1': "datalake-daily.aliyuncs.com",
      'us-west-1': "datalake-daily.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("datalake", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @summary abort lock context with the lockid
   *
   * @param request AbortLockRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return AbortLockResponse
   */
  async abortLockWithOptions(request: AbortLockRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AbortLockResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.lockId)) {
      query["LockId"] = request.lockId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AbortLock",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/locks/abort`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AbortLockResponse>(await this.callApi(params, req, runtime), new AbortLockResponse({}));
  }

  /**
   * @summary abort lock context with the lockid
   *
   * @param request AbortLockRequest
   * @return AbortLockResponse
   */
  async abortLock(request: AbortLockRequest): Promise<AbortLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.abortLockWithOptions(request, headers, runtime);
  }

  /**
   * @summary 批量创建分区
   *
   * @param request BatchCreatePartitionsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchCreatePartitionsResponse
   */
  async batchCreatePartitionsWithOptions(request: BatchCreatePartitionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BatchCreatePartitionsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.ifNotExists)) {
      body["IfNotExists"] = request.ifNotExists;
    }

    if (!Util.isUnset(request.needResult)) {
      body["NeedResult"] = request.needResult;
    }

    if (!Util.isUnset(request.partitionInputs)) {
      body["PartitionInputs"] = request.partitionInputs;
    }

    if (!Util.isUnset(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchCreatePartitions",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/partitions/batchcreate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchCreatePartitionsResponse>(await this.callApi(params, req, runtime), new BatchCreatePartitionsResponse({}));
  }

  /**
   * @summary 批量创建分区
   *
   * @param request BatchCreatePartitionsRequest
   * @return BatchCreatePartitionsResponse
   */
  async batchCreatePartitions(request: BatchCreatePartitionsRequest): Promise<BatchCreatePartitionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchCreatePartitionsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 批量创建表
   *
   * @param request BatchCreateTablesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchCreateTablesResponse
   */
  async batchCreateTablesWithOptions(request: BatchCreateTablesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BatchCreateTablesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.ifNotExists)) {
      body["IfNotExists"] = request.ifNotExists;
    }

    if (!Util.isUnset(request.tableInputs)) {
      body["TableInputs"] = request.tableInputs;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchCreateTables",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/batchcreate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchCreateTablesResponse>(await this.callApi(params, req, runtime), new BatchCreateTablesResponse({}));
  }

  /**
   * @summary 批量创建表
   *
   * @param request BatchCreateTablesRequest
   * @return BatchCreateTablesResponse
   */
  async batchCreateTables(request: BatchCreateTablesRequest): Promise<BatchCreateTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchCreateTablesWithOptions(request, headers, runtime);
  }

  /**
   * @summary batch delete partitions
   *
   * @param request BatchDeletePartitionsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchDeletePartitionsResponse
   */
  async batchDeletePartitionsWithOptions(request: BatchDeletePartitionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BatchDeletePartitionsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.ifExists)) {
      body["IfExists"] = request.ifExists;
    }

    if (!Util.isUnset(request.partitionValueList)) {
      body["PartitionValueList"] = request.partitionValueList;
    }

    if (!Util.isUnset(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchDeletePartitions",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/partitions/batchdelete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchDeletePartitionsResponse>(await this.callApi(params, req, runtime), new BatchDeletePartitionsResponse({}));
  }

  /**
   * @summary batch delete partitions
   *
   * @param request BatchDeletePartitionsRequest
   * @return BatchDeletePartitionsResponse
   */
  async batchDeletePartitions(request: BatchDeletePartitionsRequest): Promise<BatchDeletePartitionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchDeletePartitionsWithOptions(request, headers, runtime);
  }

  /**
   * @summary BatchDeleteTableVersions
   *
   * @param request BatchDeleteTableVersionsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchDeleteTableVersionsResponse
   */
  async batchDeleteTableVersionsWithOptions(request: BatchDeleteTableVersionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BatchDeleteTableVersionsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    if (!Util.isUnset(request.versionIds)) {
      body["VersionIds"] = request.versionIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchDeleteTableVersions",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/versions/batchdelete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchDeleteTableVersionsResponse>(await this.callApi(params, req, runtime), new BatchDeleteTableVersionsResponse({}));
  }

  /**
   * @summary BatchDeleteTableVersions
   *
   * @param request BatchDeleteTableVersionsRequest
   * @return BatchDeleteTableVersionsResponse
   */
  async batchDeleteTableVersions(request: BatchDeleteTableVersionsRequest): Promise<BatchDeleteTableVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchDeleteTableVersionsWithOptions(request, headers, runtime);
  }

  /**
   * @summary BatchDeleteTables
   *
   * @param request BatchDeleteTablesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchDeleteTablesResponse
   */
  async batchDeleteTablesWithOptions(request: BatchDeleteTablesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BatchDeleteTablesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.ifExists)) {
      body["IfExists"] = request.ifExists;
    }

    if (!Util.isUnset(request.tableNames)) {
      body["TableNames"] = request.tableNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchDeleteTables",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/batchdelete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchDeleteTablesResponse>(await this.callApi(params, req, runtime), new BatchDeleteTablesResponse({}));
  }

  /**
   * @summary BatchDeleteTables
   *
   * @param request BatchDeleteTablesRequest
   * @return BatchDeleteTablesResponse
   */
  async batchDeleteTables(request: BatchDeleteTablesRequest): Promise<BatchDeleteTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchDeleteTablesWithOptions(request, headers, runtime);
  }

  /**
   * @summary Batch Get Partition Column Statistics
   *
   * @param request BatchGetPartitionColumnStatisticsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchGetPartitionColumnStatisticsResponse
   */
  async batchGetPartitionColumnStatisticsWithOptions(request: BatchGetPartitionColumnStatisticsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BatchGetPartitionColumnStatisticsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.columnNames)) {
      body["ColumnNames"] = request.columnNames;
    }

    if (!Util.isUnset(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.partitionNames)) {
      body["PartitionNames"] = request.partitionNames;
    }

    if (!Util.isUnset(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchGetPartitionColumnStatistics",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/partitions/columnstatistics/batchget`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchGetPartitionColumnStatisticsResponse>(await this.callApi(params, req, runtime), new BatchGetPartitionColumnStatisticsResponse({}));
  }

  /**
   * @summary Batch Get Partition Column Statistics
   *
   * @param request BatchGetPartitionColumnStatisticsRequest
   * @return BatchGetPartitionColumnStatisticsResponse
   */
  async batchGetPartitionColumnStatistics(request: BatchGetPartitionColumnStatisticsRequest): Promise<BatchGetPartitionColumnStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchGetPartitionColumnStatisticsWithOptions(request, headers, runtime);
  }

  /**
   * @summary batch get partitions
   *
   * @param request BatchGetPartitionsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchGetPartitionsResponse
   */
  async batchGetPartitionsWithOptions(request: BatchGetPartitionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BatchGetPartitionsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.isShareSd)) {
      body["IsShareSd"] = request.isShareSd;
    }

    if (!Util.isUnset(request.partitionValueList)) {
      body["PartitionValueList"] = request.partitionValueList;
    }

    if (!Util.isUnset(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchGetPartitions",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/partitions/batchget`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchGetPartitionsResponse>(await this.callApi(params, req, runtime), new BatchGetPartitionsResponse({}));
  }

  /**
   * @summary batch get partitions
   *
   * @param request BatchGetPartitionsRequest
   * @return BatchGetPartitionsResponse
   */
  async batchGetPartitions(request: BatchGetPartitionsRequest): Promise<BatchGetPartitionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchGetPartitionsWithOptions(request, headers, runtime);
  }

  /**
   * @summary batch get tables
   *
   * @param request BatchGetTablesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchGetTablesResponse
   */
  async batchGetTablesWithOptions(request: BatchGetTablesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BatchGetTablesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.tableNames)) {
      body["TableNames"] = request.tableNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchGetTables",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/batchget`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchGetTablesResponse>(await this.callApi(params, req, runtime), new BatchGetTablesResponse({}));
  }

  /**
   * @summary batch get tables
   *
   * @param request BatchGetTablesRequest
   * @return BatchGetTablesResponse
   */
  async batchGetTables(request: BatchGetTablesRequest): Promise<BatchGetTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchGetTablesWithOptions(request, headers, runtime);
  }

  /**
   * @summary 批量授权
   *
   * @param request BatchGrantPermissionsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchGrantPermissionsResponse
   */
  async batchGrantPermissionsWithOptions(request: BatchGrantPermissionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BatchGrantPermissionsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.grantRevokeEntries)) {
      body["GrantRevokeEntries"] = request.grantRevokeEntries;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchGrantPermissions",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/auth/permissions/batchgrant`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchGrantPermissionsResponse>(await this.callApi(params, req, runtime), new BatchGrantPermissionsResponse({}));
  }

  /**
   * @summary 批量授权
   *
   * @param request BatchGrantPermissionsRequest
   * @return BatchGrantPermissionsResponse
   */
  async batchGrantPermissions(request: BatchGrantPermissionsRequest): Promise<BatchGrantPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchGrantPermissionsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 批量取消授权
   *
   * @param request BatchRevokePermissionsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchRevokePermissionsResponse
   */
  async batchRevokePermissionsWithOptions(request: BatchRevokePermissionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BatchRevokePermissionsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.grantRevokeEntries)) {
      body["GrantRevokeEntries"] = request.grantRevokeEntries;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchRevokePermissions",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/auth/permissions/batchrevoke`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchRevokePermissionsResponse>(await this.callApi(params, req, runtime), new BatchRevokePermissionsResponse({}));
  }

  /**
   * @summary 批量取消授权
   *
   * @param request BatchRevokePermissionsRequest
   * @return BatchRevokePermissionsResponse
   */
  async batchRevokePermissions(request: BatchRevokePermissionsRequest): Promise<BatchRevokePermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchRevokePermissionsWithOptions(request, headers, runtime);
  }

  /**
   * @summary batch update partitions
   *
   * @param request BatchUpdatePartitionsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchUpdatePartitionsResponse
   */
  async batchUpdatePartitionsWithOptions(request: BatchUpdatePartitionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BatchUpdatePartitionsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.partitionInputs)) {
      body["PartitionInputs"] = request.partitionInputs;
    }

    if (!Util.isUnset(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchUpdatePartitions",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/partitions/batchupdate`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchUpdatePartitionsResponse>(await this.callApi(params, req, runtime), new BatchUpdatePartitionsResponse({}));
  }

  /**
   * @summary batch update partitions
   *
   * @param request BatchUpdatePartitionsRequest
   * @return BatchUpdatePartitionsResponse
   */
  async batchUpdatePartitions(request: BatchUpdatePartitionsRequest): Promise<BatchUpdatePartitionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchUpdatePartitionsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 批量更新表
   *
   * @param request BatchUpdateTablesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return BatchUpdateTablesResponse
   */
  async batchUpdateTablesWithOptions(request: BatchUpdateTablesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BatchUpdateTablesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.isAsync)) {
      body["IsAsync"] = request.isAsync;
    }

    if (!Util.isUnset(request.tableInputs)) {
      body["TableInputs"] = request.tableInputs;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchUpdateTables",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/batchupdate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchUpdateTablesResponse>(await this.callApi(params, req, runtime), new BatchUpdateTablesResponse({}));
  }

  /**
   * @summary 批量更新表
   *
   * @param request BatchUpdateTablesRequest
   * @return BatchUpdateTablesResponse
   */
  async batchUpdateTables(request: BatchUpdateTablesRequest): Promise<BatchUpdateTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchUpdateTablesWithOptions(request, headers, runtime);
  }

  /**
   * @summary 取消查询任务
   *
   * @param request CancelQueryRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CancelQueryResponse
   */
  async cancelQueryWithOptions(request: CancelQueryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CancelQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.queryId)) {
      query["QueryId"] = request.queryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelQuery",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/webapi/query/cancelQuery`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CancelQueryResponse>(await this.callApi(params, req, runtime), new CancelQueryResponse({}));
  }

  /**
   * @summary 取消查询任务
   *
   * @param request CancelQueryRequest
   * @return CancelQueryResponse
   */
  async cancelQuery(request: CancelQueryRequest): Promise<CancelQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelQueryWithOptions(request, headers, runtime);
  }

  /**
   * @summary Check permissions
   *
   * @param request CheckPermissionsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CheckPermissionsResponse
   */
  async checkPermissionsWithOptions(request: CheckPermissionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CheckPermissionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CheckPermissions",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/auth/permissions/check`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CheckPermissionsResponse>(await this.callApi(params, req, runtime), new CheckPermissionsResponse({}));
  }

  /**
   * @summary Check permissions
   *
   * @param request CheckPermissionsRequest
   * @return CheckPermissionsResponse
   */
  async checkPermissions(request: CheckPermissionsRequest): Promise<CheckPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkPermissionsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建数据湖Catalog
   *
   * @param request CreateCatalogRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateCatalogResponse
   */
  async createCatalogWithOptions(request: CreateCatalogRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateCatalogResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogInput)) {
      body["CatalogInput"] = request.catalogInput;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateCatalog",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateCatalogResponse>(await this.callApi(params, req, runtime), new CreateCatalogResponse({}));
  }

  /**
   * @summary 创建数据湖Catalog
   *
   * @param request CreateCatalogRequest
   * @return CreateCatalogResponse
   */
  async createCatalog(request: CreateCatalogRequest): Promise<CreateCatalogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCatalogWithOptions(request, headers, runtime);
  }

  /**
   * @summary create database
   *
   * @param request CreateDatabaseRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDatabaseResponse
   */
  async createDatabaseWithOptions(request: CreateDatabaseRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateDatabaseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseInput)) {
      body["DatabaseInput"] = request.databaseInput;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDatabase",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateDatabaseResponse>(await this.callApi(params, req, runtime), new CreateDatabaseResponse({}));
  }

  /**
   * @summary create database
   *
   * @param request CreateDatabaseRequest
   * @return CreateDatabaseResponse
   */
  async createDatabase(request: CreateDatabaseRequest): Promise<CreateDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDatabaseWithOptions(request, headers, runtime);
  }

  /**
   * @summary Create function
   *
   * @param request CreateFunctionRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateFunctionResponse
   */
  async createFunctionWithOptions(request: CreateFunctionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateFunctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.functionInput)) {
      body["FunctionInput"] = request.functionInput;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFunction",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/functions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateFunctionResponse>(await this.callApi(params, req, runtime), new CreateFunctionResponse({}));
  }

  /**
   * @summary Create function
   *
   * @param request CreateFunctionRequest
   * @return CreateFunctionResponse
   */
  async createFunction(request: CreateFunctionRequest): Promise<CreateFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFunctionWithOptions(request, headers, runtime);
  }

  /**
   * @summary create lock
   *
   * @param request CreateLockRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateLockResponse
   */
  async createLockWithOptions(request: CreateLockRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateLockResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.lockObjList)) {
      body["LockObjList"] = request.lockObjList;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateLock",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/locks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateLockResponse>(await this.callApi(params, req, runtime), new CreateLockResponse({}));
  }

  /**
   * @summary create lock
   *
   * @param request CreateLockRequest
   * @return CreateLockResponse
   */
  async createLock(request: CreateLockRequest): Promise<CreateLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLockWithOptions(request, headers, runtime);
  }

  /**
   * @summary Create Partition
   *
   * @param request CreatePartitionRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreatePartitionResponse
   */
  async createPartitionWithOptions(request: CreatePartitionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreatePartitionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.ifNotExists)) {
      body["IfNotExists"] = request.ifNotExists;
    }

    if (!Util.isUnset(request.needResult)) {
      body["NeedResult"] = request.needResult;
    }

    if (!Util.isUnset(request.partitionInput)) {
      body["PartitionInput"] = request.partitionInput;
    }

    if (!Util.isUnset(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreatePartition",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/partitions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreatePartitionResponse>(await this.callApi(params, req, runtime), new CreatePartitionResponse({}));
  }

  /**
   * @summary Create Partition
   *
   * @param request CreatePartitionRequest
   * @return CreatePartitionResponse
   */
  async createPartition(request: CreatePartitionRequest): Promise<CreatePartitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPartitionWithOptions(request, headers, runtime);
  }

  /**
   * @summary 创建数据糊角色
   *
   * @param request CreateRoleRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateRoleResponse
   */
  async createRoleWithOptions(request: CreateRoleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateRole",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/auth/roles`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateRoleResponse>(await this.callApi(params, req, runtime), new CreateRoleResponse({}));
  }

  /**
   * @summary 创建数据糊角色
   *
   * @param request CreateRoleRequest
   * @return CreateRoleResponse
   */
  async createRole(request: CreateRoleRequest): Promise<CreateRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRoleWithOptions(request, headers, runtime);
  }

  /**
   * @summary Create tables
   *
   * @param request CreateTableRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateTableResponse
   */
  async createTableWithOptions(request: CreateTableRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTableResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.tableInput)) {
      body["TableInput"] = request.tableInput;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTable",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateTableResponse>(await this.callApi(params, req, runtime), new CreateTableResponse({}));
  }

  /**
   * @summary Create tables
   *
   * @param request CreateTableRequest
   * @return CreateTableResponse
   */
  async createTable(request: CreateTableRequest): Promise<CreateTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTableWithOptions(request, headers, runtime);
  }

  /**
   * @summary Delete Catalog by catalogId
   *
   * @param request DeleteCatalogRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteCatalogResponse
   */
  async deleteCatalogWithOptions(request: DeleteCatalogRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteCatalogResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.isAsync)) {
      query["IsAsync"] = request.isAsync;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCatalog",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteCatalogResponse>(await this.callApi(params, req, runtime), new DeleteCatalogResponse({}));
  }

  /**
   * @summary Delete Catalog by catalogId
   *
   * @param request DeleteCatalogRequest
   * @return DeleteCatalogResponse
   */
  async deleteCatalog(request: DeleteCatalogRequest): Promise<DeleteCatalogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCatalogWithOptions(request, headers, runtime);
  }

  /**
   * @summary Delete database by catalogId and database name
   *
   * @param request DeleteDatabaseRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteDatabaseResponse
   */
  async deleteDatabaseWithOptions(request: DeleteDatabaseRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteDatabaseResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.async)) {
      query["Async"] = request.async;
    }

    if (!Util.isUnset(request.cascade)) {
      query["Cascade"] = request.cascade;
    }

    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDatabase",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteDatabaseResponse>(await this.callApi(params, req, runtime), new DeleteDatabaseResponse({}));
  }

  /**
   * @summary Delete database by catalogId and database name
   *
   * @param request DeleteDatabaseRequest
   * @return DeleteDatabaseResponse
   */
  async deleteDatabase(request: DeleteDatabaseRequest): Promise<DeleteDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDatabaseWithOptions(request, headers, runtime);
  }

  /**
   * @summary Delete function
   *
   * @param request DeleteFunctionRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteFunctionResponse
   */
  async deleteFunctionWithOptions(request: DeleteFunctionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteFunctionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.functionName)) {
      query["FunctionName"] = request.functionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFunction",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/functions`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteFunctionResponse>(await this.callApi(params, req, runtime), new DeleteFunctionResponse({}));
  }

  /**
   * @summary Delete function
   *
   * @param request DeleteFunctionRequest
   * @return DeleteFunctionResponse
   */
  async deleteFunction(request: DeleteFunctionRequest): Promise<DeleteFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFunctionWithOptions(request, headers, runtime);
  }

  /**
   * @summary delete partition
   *
   * @param request DeletePartitionRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeletePartitionResponse
   */
  async deletePartitionWithOptions(request: DeletePartitionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeletePartitionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.ifExists)) {
      body["IfExists"] = request.ifExists;
    }

    if (!Util.isUnset(request.partitionValues)) {
      body["PartitionValues"] = request.partitionValues;
    }

    if (!Util.isUnset(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeletePartition",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/partitions/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeletePartitionResponse>(await this.callApi(params, req, runtime), new DeletePartitionResponse({}));
  }

  /**
   * @summary delete partition
   *
   * @param request DeletePartitionRequest
   * @return DeletePartitionResponse
   */
  async deletePartition(request: DeletePartitionRequest): Promise<DeletePartitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePartitionWithOptions(request, headers, runtime);
  }

  /**
   * @summary DeletePartitionColumnStatistics
   *
   * @param tmpReq DeletePartitionColumnStatisticsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeletePartitionColumnStatisticsResponse
   */
  async deletePartitionColumnStatisticsWithOptions(tmpReq: DeletePartitionColumnStatisticsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeletePartitionColumnStatisticsResponse> {
    Util.validateModel(tmpReq);
    let request = new DeletePartitionColumnStatisticsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.columnNames)) {
      request.columnNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.columnNames, "ColumnNames", "json");
    }

    if (!Util.isUnset(tmpReq.partitionNames)) {
      request.partitionNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.partitionNames, "PartitionNames", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.columnNamesShrink)) {
      query["ColumnNames"] = request.columnNamesShrink;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.partitionNamesShrink)) {
      query["PartitionNames"] = request.partitionNamesShrink;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePartitionColumnStatistics",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/partitions/columnstatistics`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeletePartitionColumnStatisticsResponse>(await this.callApi(params, req, runtime), new DeletePartitionColumnStatisticsResponse({}));
  }

  /**
   * @summary DeletePartitionColumnStatistics
   *
   * @param request DeletePartitionColumnStatisticsRequest
   * @return DeletePartitionColumnStatisticsResponse
   */
  async deletePartitionColumnStatistics(request: DeletePartitionColumnStatisticsRequest): Promise<DeletePartitionColumnStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePartitionColumnStatisticsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 删除角色
   *
   * @param request DeleteRoleRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteRoleResponse
   */
  async deleteRoleWithOptions(request: DeleteRoleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteRoleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRole",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/auth/roles`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteRoleResponse>(await this.callApi(params, req, runtime), new DeleteRoleResponse({}));
  }

  /**
   * @summary 删除角色
   *
   * @param request DeleteRoleRequest
   * @return DeleteRoleResponse
   */
  async deleteRole(request: DeleteRoleRequest): Promise<DeleteRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRoleWithOptions(request, headers, runtime);
  }

  /**
   * @summary delete table
   *
   * @param request DeleteTableRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteTableResponse
   */
  async deleteTableWithOptions(request: DeleteTableRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteTableResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTable",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteTableResponse>(await this.callApi(params, req, runtime), new DeleteTableResponse({}));
  }

  /**
   * @summary delete table
   *
   * @param request DeleteTableRequest
   * @return DeleteTableResponse
   */
  async deleteTable(request: DeleteTableRequest): Promise<DeleteTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTableWithOptions(request, headers, runtime);
  }

  /**
   * @summary DeleteTableColumnStatistics
   *
   * @param tmpReq DeleteTableColumnStatisticsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteTableColumnStatisticsResponse
   */
  async deleteTableColumnStatisticsWithOptions(tmpReq: DeleteTableColumnStatisticsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteTableColumnStatisticsResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteTableColumnStatisticsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.columnNames)) {
      request.columnNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.columnNames, "ColumnNames", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.columnNamesShrink)) {
      query["ColumnNames"] = request.columnNamesShrink;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTableColumnStatistics",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/columnstatistics`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteTableColumnStatisticsResponse>(await this.callApi(params, req, runtime), new DeleteTableColumnStatisticsResponse({}));
  }

  /**
   * @summary DeleteTableColumnStatistics
   *
   * @param request DeleteTableColumnStatisticsRequest
   * @return DeleteTableColumnStatisticsResponse
   */
  async deleteTableColumnStatistics(request: DeleteTableColumnStatisticsRequest): Promise<DeleteTableColumnStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTableColumnStatisticsWithOptions(request, headers, runtime);
  }

  /**
   * @summary delete table version
   *
   * @param request DeleteTableVersionRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteTableVersionResponse
   */
  async deleteTableVersionWithOptions(request: DeleteTableVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteTableVersionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTableVersion",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/versions`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteTableVersionResponse>(await this.callApi(params, req, runtime), new DeleteTableVersionResponse({}));
  }

  /**
   * @summary delete table version
   *
   * @param request DeleteTableVersionRequest
   * @return DeleteTableVersionResponse
   */
  async deleteTableVersion(request: DeleteTableVersionRequest): Promise<DeleteTableVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTableVersionWithOptions(request, headers, runtime);
  }

  /**
   * @summary 取消注册Location
   *
   * @param request DeregisterLocationRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeregisterLocationResponse
   */
  async deregisterLocationWithOptions(request: DeregisterLocationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeregisterLocationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.locationId)) {
      query["LocationId"] = request.locationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeregisterLocation",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/webapi/locations`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeregisterLocationResponse>(await this.callApi(params, req, runtime), new DeregisterLocationResponse({}));
  }

  /**
   * @summary 取消注册Location
   *
   * @param request DeregisterLocationRequest
   * @return DeregisterLocationResponse
   */
  async deregisterLocation(request: DeregisterLocationRequest): Promise<DeregisterLocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deregisterLocationWithOptions(request, headers, runtime);
  }

  /**
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRegionsResponse
   */
  async describeRegionsWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/webapi/service/describeRegions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  /**
   * @return DescribeRegionsResponse
   */
  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRegionsWithOptions(headers, runtime);
  }

  /**
   * @summary GetAsyncTaskStatus
   *
   * @param request GetAsyncTaskStatusRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetAsyncTaskStatusResponse
   */
  async getAsyncTaskStatusWithOptions(request: GetAsyncTaskStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAsyncTaskStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAsyncTaskStatus",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAsyncTaskStatusResponse>(await this.callApi(params, req, runtime), new GetAsyncTaskStatusResponse({}));
  }

  /**
   * @summary GetAsyncTaskStatus
   *
   * @param request GetAsyncTaskStatusRequest
   * @return GetAsyncTaskStatusResponse
   */
  async getAsyncTaskStatus(request: GetAsyncTaskStatusRequest): Promise<GetAsyncTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAsyncTaskStatusWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取Catalog
   *
   * @param request GetCatalogRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetCatalogResponse
   */
  async getCatalogWithOptions(request: GetCatalogRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetCatalogResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCatalog",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetCatalogResponse>(await this.callApi(params, req, runtime), new GetCatalogResponse({}));
  }

  /**
   * @summary 获取Catalog
   *
   * @param request GetCatalogRequest
   * @return GetCatalogResponse
   */
  async getCatalog(request: GetCatalogRequest): Promise<GetCatalogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCatalogWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取数据湖配置
   *
   * @param request GetCatalogSettingsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetCatalogSettingsResponse
   */
  async getCatalogSettingsWithOptions(request: GetCatalogSettingsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetCatalogSettingsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCatalogSettings",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/settings`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetCatalogSettingsResponse>(await this.callApi(params, req, runtime), new GetCatalogSettingsResponse({}));
  }

  /**
   * @summary 获取数据湖配置
   *
   * @param request GetCatalogSettingsRequest
   * @return GetCatalogSettingsResponse
   */
  async getCatalogSettings(request: GetCatalogSettingsRequest): Promise<GetCatalogSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCatalogSettingsWithOptions(request, headers, runtime);
  }

  /**
   * @summary Get Database
   *
   * @param request GetDatabaseRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDatabaseResponse
   */
  async getDatabaseWithOptions(request: GetDatabaseRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDatabaseResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDatabase",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDatabaseResponse>(await this.callApi(params, req, runtime), new GetDatabaseResponse({}));
  }

  /**
   * @summary Get Database
   *
   * @param request GetDatabaseRequest
   * @return GetDatabaseResponse
   */
  async getDatabase(request: GetDatabaseRequest): Promise<GetDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatabaseWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取库数据概览信息
   *
   * @param request GetDatabaseProfileRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDatabaseProfileResponse
   */
  async getDatabaseProfileWithOptions(request: GetDatabaseProfileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDatabaseProfileResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDatabaseProfile",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/webapi/metastorehouse/catalog/database/databaseprofile`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDatabaseProfileResponse>(await this.callApi(params, req, runtime), new GetDatabaseProfileResponse({}));
  }

  /**
   * @summary 获取库数据概览信息
   *
   * @param request GetDatabaseProfileRequest
   * @return GetDatabaseProfileResponse
   */
  async getDatabaseProfile(request: GetDatabaseProfileRequest): Promise<GetDatabaseProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatabaseProfileWithOptions(request, headers, runtime);
  }

  /**
   * @summary Get Function
   *
   * @param request GetFunctionRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetFunctionResponse
   */
  async getFunctionWithOptions(request: GetFunctionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFunctionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.functionName)) {
      query["FunctionName"] = request.functionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFunction",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/functions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFunctionResponse>(await this.callApi(params, req, runtime), new GetFunctionResponse({}));
  }

  /**
   * @summary Get Function
   *
   * @param request GetFunctionRequest
   * @return GetFunctionResponse
   */
  async getFunction(request: GetFunctionRequest): Promise<GetFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFunctionWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取生命周期规则
   *
   * @param request GetLifecycleRuleRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetLifecycleRuleResponse
   */
  async getLifecycleRuleWithOptions(request: GetLifecycleRuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetLifecycleRuleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!Util.isUnset(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLifecycleRule",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/webapi/metastorehouse/lifecycle/rule/getLifecycleRule`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetLifecycleRuleResponse>(await this.callApi(params, req, runtime), new GetLifecycleRuleResponse({}));
  }

  /**
   * @summary 获取生命周期规则
   *
   * @param request GetLifecycleRuleRequest
   * @return GetLifecycleRuleResponse
   */
  async getLifecycleRule(request: GetLifecycleRuleRequest): Promise<GetLifecycleRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLifecycleRuleWithOptions(request, headers, runtime);
  }

  /**
   * @summary get lock status
   *
   * @param request GetLockRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetLockResponse
   */
  async getLockWithOptions(request: GetLockRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetLockResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.lockId)) {
      query["LockId"] = request.lockId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLock",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/locks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetLockResponse>(await this.callApi(params, req, runtime), new GetLockResponse({}));
  }

  /**
   * @summary get lock status
   *
   * @param request GetLockRequest
   * @return GetLockResponse
   */
  async getLock(request: GetLockRequest): Promise<GetLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLockWithOptions(request, headers, runtime);
  }

  /**
   * @summary get partition
   *
   * @param request GetPartitionRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetPartitionResponse
   */
  async getPartitionWithOptions(request: GetPartitionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPartitionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.partitionValues)) {
      body["PartitionValues"] = request.partitionValues;
    }

    if (!Util.isUnset(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetPartition",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/partitions/get`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetPartitionResponse>(await this.callApi(params, req, runtime), new GetPartitionResponse({}));
  }

  /**
   * @summary get partition
   *
   * @param request GetPartitionRequest
   * @return GetPartitionResponse
   */
  async getPartition(request: GetPartitionRequest): Promise<GetPartitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPartitionWithOptions(request, headers, runtime);
  }

  /**
   * @summary Batch Get Partition Column Statistics
   *
   * @param tmpReq GetPartitionColumnStatisticsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetPartitionColumnStatisticsResponse
   */
  async getPartitionColumnStatisticsWithOptions(tmpReq: GetPartitionColumnStatisticsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPartitionColumnStatisticsResponse> {
    Util.validateModel(tmpReq);
    let request = new GetPartitionColumnStatisticsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.columnNames)) {
      request.columnNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.columnNames, "ColumnNames", "json");
    }

    if (!Util.isUnset(tmpReq.partitionNames)) {
      request.partitionNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.partitionNames, "PartitionNames", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.columnNamesShrink)) {
      query["ColumnNames"] = request.columnNamesShrink;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.partitionNamesShrink)) {
      query["PartitionNames"] = request.partitionNamesShrink;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPartitionColumnStatistics",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/partitions/columnstatistics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetPartitionColumnStatisticsResponse>(await this.callApi(params, req, runtime), new GetPartitionColumnStatisticsResponse({}));
  }

  /**
   * @summary Batch Get Partition Column Statistics
   *
   * @param request GetPartitionColumnStatisticsRequest
   * @return GetPartitionColumnStatisticsResponse
   */
  async getPartitionColumnStatistics(request: GetPartitionColumnStatisticsRequest): Promise<GetPartitionColumnStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPartitionColumnStatisticsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取查询结果
   *
   * @param request GetQueryResultRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetQueryResultResponse
   */
  async getQueryResultWithOptions(request: GetQueryResultRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetQueryResultResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryId)) {
      query["QueryId"] = request.queryId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetQueryResult",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/webapi/query/getQueryResult`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetQueryResultResponse>(await this.callApi(params, req, runtime), new GetQueryResultResponse({}));
  }

  /**
   * @summary 获取查询结果
   *
   * @param request GetQueryResultRequest
   * @return GetQueryResultResponse
   */
  async getQueryResult(request: GetQueryResultRequest): Promise<GetQueryResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getQueryResultWithOptions(request, headers, runtime);
  }

  /**
   * @param request GetRegionStatusRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetRegionStatusResponse
   */
  async getRegionStatusWithOptions(request: GetRegionStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRegionStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRegionStatus",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/webapi/service/getRegionStatus`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetRegionStatusResponse>(await this.callApi(params, req, runtime), new GetRegionStatusResponse({}));
  }

  /**
   * @param request GetRegionStatusRequest
   * @return GetRegionStatusResponse
   */
  async getRegionStatus(request: GetRegionStatusRequest): Promise<GetRegionStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRegionStatusWithOptions(request, headers, runtime);
  }

  /**
   * @summary GetRole
   *
   * @param request GetRoleRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetRoleResponse
   */
  async getRoleWithOptions(request: GetRoleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRoleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRole",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/auth/roles`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetRoleResponse>(await this.callApi(params, req, runtime), new GetRoleResponse({}));
  }

  /**
   * @summary GetRole
   *
   * @param request GetRoleRequest
   * @return GetRoleResponse
   */
  async getRole(request: GetRoleRequest): Promise<GetRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRoleWithOptions(request, headers, runtime);
  }

  /**
   * @param request GetServiceStatusRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetServiceStatusResponse
   */
  async getServiceStatusWithOptions(request: GetServiceStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetServiceStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceStatus",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/webapi/service/getServiceStatus`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetServiceStatusResponse>(await this.callApi(params, req, runtime), new GetServiceStatusResponse({}));
  }

  /**
   * @param request GetServiceStatusRequest
   * @return GetServiceStatusResponse
   */
  async getServiceStatus(request: GetServiceStatusRequest): Promise<GetServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceStatusWithOptions(request, headers, runtime);
  }

  /**
   * @summary Get table
   *
   * @param request GetTableRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTableResponse
   */
  async getTableWithOptions(request: GetTableRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTableResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTable",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTableResponse>(await this.callApi(params, req, runtime), new GetTableResponse({}));
  }

  /**
   * @summary Get table
   *
   * @param request GetTableRequest
   * @return GetTableResponse
   */
  async getTable(request: GetTableRequest): Promise<GetTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTableWithOptions(request, headers, runtime);
  }

  /**
   * @summary An example of API
   *
   * @param tmpReq GetTableColumnStatisticsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTableColumnStatisticsResponse
   */
  async getTableColumnStatisticsWithOptions(tmpReq: GetTableColumnStatisticsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTableColumnStatisticsResponse> {
    Util.validateModel(tmpReq);
    let request = new GetTableColumnStatisticsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.columnNames)) {
      request.columnNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.columnNames, "ColumnNames", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.columnNamesShrink)) {
      query["ColumnNames"] = request.columnNamesShrink;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTableColumnStatistics",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/columnstatistics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTableColumnStatisticsResponse>(await this.callApi(params, req, runtime), new GetTableColumnStatisticsResponse({}));
  }

  /**
   * @summary An example of API
   *
   * @param request GetTableColumnStatisticsRequest
   * @return GetTableColumnStatisticsResponse
   */
  async getTableColumnStatistics(request: GetTableColumnStatisticsRequest): Promise<GetTableColumnStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTableColumnStatisticsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取表数据概况信息
   *
   * @param request GetTableProfileRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTableProfileResponse
   */
  async getTableProfileWithOptions(request: GetTableProfileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTableProfileResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTableProfile",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/webapi/metastorehouse/catalog/database/tableprofile`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTableProfileResponse>(await this.callApi(params, req, runtime), new GetTableProfileResponse({}));
  }

  /**
   * @summary 获取表数据概况信息
   *
   * @param request GetTableProfileRequest
   * @return GetTableProfileResponse
   */
  async getTableProfile(request: GetTableProfileRequest): Promise<GetTableProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTableProfileWithOptions(request, headers, runtime);
  }

  /**
   * @summary Get table version
   *
   * @param request GetTableVersionRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTableVersionResponse
   */
  async getTableVersionWithOptions(request: GetTableVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTableVersionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTableVersion",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTableVersionResponse>(await this.callApi(params, req, runtime), new GetTableVersionResponse({}));
  }

  /**
   * @summary Get table version
   *
   * @param request GetTableVersionRequest
   * @return GetTableVersionResponse
   */
  async getTableVersion(request: GetTableVersionRequest): Promise<GetTableVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTableVersionWithOptions(request, headers, runtime);
  }

  /**
   * @summary 赋予Principal资源的权限
   *
   * @param request GrantPermissionsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GrantPermissionsResponse
   */
  async grantPermissionsWithOptions(request: GrantPermissionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GrantPermissionsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accesses)) {
      body["Accesses"] = request.accesses;
    }

    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.delegateAccesses)) {
      body["DelegateAccesses"] = request.delegateAccesses;
    }

    if (!Util.isUnset(request.metaResource)) {
      body["MetaResource"] = request.metaResource;
    }

    if (!Util.isUnset(request.principal)) {
      body["Principal"] = request.principal;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GrantPermissions",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/auth/permissions/grant`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GrantPermissionsResponse>(await this.callApi(params, req, runtime), new GrantPermissionsResponse({}));
  }

  /**
   * @summary 赋予Principal资源的权限
   *
   * @param request GrantPermissionsRequest
   * @return GrantPermissionsResponse
   */
  async grantPermissions(request: GrantPermissionsRequest): Promise<GrantPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.grantPermissionsWithOptions(request, headers, runtime);
  }

  /**
   * @summary Grant 单个角色给一个或多个用户
   *
   * @param request GrantRoleToUsersRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GrantRoleToUsersResponse
   */
  async grantRoleToUsersWithOptions(request: GrantRoleToUsersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GrantRoleToUsersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.roleName)) {
      body["RoleName"] = request.roleName;
    }

    if (!Util.isUnset(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GrantRoleToUsers",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/auth/roles/grantusers`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GrantRoleToUsersResponse>(await this.callApi(params, req, runtime), new GrantRoleToUsersResponse({}));
  }

  /**
   * @summary Grant 单个角色给一个或多个用户
   *
   * @param request GrantRoleToUsersRequest
   * @return GrantRoleToUsersResponse
   */
  async grantRoleToUsers(request: GrantRoleToUsersRequest): Promise<GrantRoleToUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.grantRoleToUsersWithOptions(request, headers, runtime);
  }

  /**
   * @summary Grant 一个或多个角色给一个用户
   *
   * @param request GrantRolesToUserRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GrantRolesToUserResponse
   */
  async grantRolesToUserWithOptions(request: GrantRolesToUserRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GrantRolesToUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.roleNames)) {
      body["RoleNames"] = request.roleNames;
    }

    if (!Util.isUnset(request.user)) {
      body["User"] = request.user;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GrantRolesToUser",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/auth/roles/grantroles`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GrantRolesToUserResponse>(await this.callApi(params, req, runtime), new GrantRolesToUserResponse({}));
  }

  /**
   * @summary Grant 一个或多个角色给一个用户
   *
   * @param request GrantRolesToUserRequest
   * @return GrantRolesToUserResponse
   */
  async grantRolesToUser(request: GrantRolesToUserRequest): Promise<GrantRolesToUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.grantRolesToUserWithOptions(request, headers, runtime);
  }

  /**
   * @summary ListCatalogs
   *
   * @param request ListCatalogsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListCatalogsResponse
   */
  async listCatalogsWithOptions(request: ListCatalogsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListCatalogsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.idPattern)) {
      query["IdPattern"] = request.idPattern;
    }

    if (!Util.isUnset(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCatalogs",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListCatalogsResponse>(await this.callApi(params, req, runtime), new ListCatalogsResponse({}));
  }

  /**
   * @summary ListCatalogs
   *
   * @param request ListCatalogsRequest
   * @return ListCatalogsResponse
   */
  async listCatalogs(request: ListCatalogsRequest): Promise<ListCatalogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCatalogsWithOptions(request, headers, runtime);
  }

  /**
   * @summary Get Databases List
   *
   * @param request ListDatabasesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListDatabasesResponse
   */
  async listDatabasesWithOptions(request: ListDatabasesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDatabasesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.namePattern)) {
      query["NamePattern"] = request.namePattern;
    }

    if (!Util.isUnset(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDatabases",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDatabasesResponse>(await this.callApi(params, req, runtime), new ListDatabasesResponse({}));
  }

  /**
   * @summary Get Databases List
   *
   * @param request ListDatabasesRequest
   * @return ListDatabasesResponse
   */
  async listDatabases(request: ListDatabasesRequest): Promise<ListDatabasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDatabasesWithOptions(request, headers, runtime);
  }

  /**
   * @summary list function names
   *
   * @param request ListFunctionNamesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListFunctionNamesResponse
   */
  async listFunctionNamesWithOptions(request: ListFunctionNamesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFunctionNamesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.functionNamePattern)) {
      query["FunctionNamePattern"] = request.functionNamePattern;
    }

    if (!Util.isUnset(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFunctionNames",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/functions/names`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFunctionNamesResponse>(await this.callApi(params, req, runtime), new ListFunctionNamesResponse({}));
  }

  /**
   * @summary list function names
   *
   * @param request ListFunctionNamesRequest
   * @return ListFunctionNamesResponse
   */
  async listFunctionNames(request: ListFunctionNamesRequest): Promise<ListFunctionNamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFunctionNamesWithOptions(request, headers, runtime);
  }

  /**
   * @summary list functions
   *
   * @param request ListFunctionsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListFunctionsResponse
   */
  async listFunctionsWithOptions(request: ListFunctionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFunctionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.functionNamePattern)) {
      query["FunctionNamePattern"] = request.functionNamePattern;
    }

    if (!Util.isUnset(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFunctions",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/functions/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFunctionsResponse>(await this.callApi(params, req, runtime), new ListFunctionsResponse({}));
  }

  /**
   * @summary list functions
   *
   * @param request ListFunctionsRequest
   * @return ListFunctionsResponse
   */
  async listFunctions(request: ListFunctionsRequest): Promise<ListFunctionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFunctionsWithOptions(request, headers, runtime);
  }

  /**
   * @summary partition names
   *
   * @param request ListPartitionNamesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListPartitionNamesResponse
   */
  async listPartitionNamesWithOptions(request: ListPartitionNamesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPartitionNamesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.nextPageToken)) {
      body["NextPageToken"] = request.nextPageToken;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.partialPartValues)) {
      body["PartialPartValues"] = request.partialPartValues;
    }

    if (!Util.isUnset(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListPartitionNames",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/partitions/names`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListPartitionNamesResponse>(await this.callApi(params, req, runtime), new ListPartitionNamesResponse({}));
  }

  /**
   * @summary partition names
   *
   * @param request ListPartitionNamesRequest
   * @return ListPartitionNamesResponse
   */
  async listPartitionNames(request: ListPartitionNamesRequest): Promise<ListPartitionNamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPartitionNamesWithOptions(request, headers, runtime);
  }

  /**
   * @summary list partitions
   *
   * @param request ListPartitionsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListPartitionsResponse
   */
  async listPartitionsWithOptions(request: ListPartitionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPartitionsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.isShareSd)) {
      body["IsShareSd"] = request.isShareSd;
    }

    if (!Util.isUnset(request.nextPageToken)) {
      body["NextPageToken"] = request.nextPageToken;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.partialPartValues)) {
      body["PartialPartValues"] = request.partialPartValues;
    }

    if (!Util.isUnset(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListPartitions",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/partitions/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListPartitionsResponse>(await this.callApi(params, req, runtime), new ListPartitionsResponse({}));
  }

  /**
   * @summary list partitions
   *
   * @param request ListPartitionsRequest
   * @return ListPartitionsResponse
   */
  async listPartitions(request: ListPartitionsRequest): Promise<ListPartitionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPartitionsWithOptions(request, headers, runtime);
  }

  /**
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListPartitionsByExprResponse
   */
  async listPartitionsByExprWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPartitionsByExprResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListPartitionsByExpr",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/partitions/listbyexpr`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<ListPartitionsByExprResponse>(await this.callApi(params, req, runtime), new ListPartitionsByExprResponse({}));
  }

  /**
   * @return ListPartitionsByExprResponse
   */
  async listPartitionsByExpr(): Promise<ListPartitionsByExprResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPartitionsByExprWithOptions(headers, runtime);
  }

  /**
   * @summary list partitions by filter
   *
   * @param request ListPartitionsByFilterRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListPartitionsByFilterResponse
   */
  async listPartitionsByFilterWithOptions(request: ListPartitionsByFilterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPartitionsByFilterResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.filter)) {
      body["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.isShareSd)) {
      body["IsShareSd"] = request.isShareSd;
    }

    if (!Util.isUnset(request.nextPageToken)) {
      body["NextPageToken"] = request.nextPageToken;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListPartitionsByFilter",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/partitions/listbyfilter`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListPartitionsByFilterResponse>(await this.callApi(params, req, runtime), new ListPartitionsByFilterResponse({}));
  }

  /**
   * @summary list partitions by filter
   *
   * @param request ListPartitionsByFilterRequest
   * @return ListPartitionsByFilterResponse
   */
  async listPartitionsByFilter(request: ListPartitionsByFilterRequest): Promise<ListPartitionsByFilterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPartitionsByFilterWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取分区数据概况信息
   *
   * @param tmpReq ListPartitionsProfileRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListPartitionsProfileResponse
   */
  async listPartitionsProfileWithOptions(tmpReq: ListPartitionsProfileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPartitionsProfileResponse> {
    Util.validateModel(tmpReq);
    let request = new ListPartitionsProfileShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.partitionNames)) {
      request.partitionNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.partitionNames, "PartitionNames", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.partitionNamesShrink)) {
      query["PartitionNames"] = request.partitionNamesShrink;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPartitionsProfile",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/webapi/metastorehouse/catalog/database/tableprofile/partitionprofile/listPartitionsProfile`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListPartitionsProfileResponse>(await this.callApi(params, req, runtime), new ListPartitionsProfileResponse({}));
  }

  /**
   * @summary 获取分区数据概况信息
   *
   * @param request ListPartitionsProfileRequest
   * @return ListPartitionsProfileResponse
   */
  async listPartitionsProfile(request: ListPartitionsProfileRequest): Promise<ListPartitionsProfileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPartitionsProfileWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取指定资源或指定Principal的权限信息
   *
   * @param request ListPermissionsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListPermissionsResponse
   */
  async listPermissionsWithOptions(request: ListPermissionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPermissionsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.isListUserRolePermissions)) {
      body["IsListUserRolePermissions"] = request.isListUserRolePermissions;
    }

    if (!Util.isUnset(request.metaResource)) {
      body["MetaResource"] = request.metaResource;
    }

    if (!Util.isUnset(request.metaResourceType)) {
      body["MetaResourceType"] = request.metaResourceType;
    }

    if (!Util.isUnset(request.nextPageToken)) {
      body["NextPageToken"] = request.nextPageToken;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.principal)) {
      body["Principal"] = request.principal;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListPermissions",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/auth/permissions/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListPermissionsResponse>(await this.callApi(params, req, runtime), new ListPermissionsResponse({}));
  }

  /**
   * @summary 获取指定资源或指定Principal的权限信息
   *
   * @param request ListPermissionsRequest
   * @return ListPermissionsResponse
   */
  async listPermissions(request: ListPermissionsRequest): Promise<ListPermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPermissionsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 查询用户角色列表
   *
   * @param request ListRoleUsersRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListRoleUsersResponse
   */
  async listRoleUsersWithOptions(request: ListRoleUsersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRoleUsersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    if (!Util.isUnset(request.userNamePattern)) {
      query["UserNamePattern"] = request.userNamePattern;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRoleUsers",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/auth/roles/roleusers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRoleUsersResponse>(await this.callApi(params, req, runtime), new ListRoleUsersResponse({}));
  }

  /**
   * @summary 查询用户角色列表
   *
   * @param request ListRoleUsersRequest
   * @return ListRoleUsersResponse
   */
  async listRoleUsers(request: ListRoleUsersRequest): Promise<ListRoleUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRoleUsersWithOptions(request, headers, runtime);
  }

  /**
   * @summary ListRoles
   *
   * @param request ListRolesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListRolesResponse
   */
  async listRolesWithOptions(request: ListRolesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRolesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.roleNamePattern)) {
      query["RoleNamePattern"] = request.roleNamePattern;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRoles",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/auth/roles/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRolesResponse>(await this.callApi(params, req, runtime), new ListRolesResponse({}));
  }

  /**
   * @summary ListRoles
   *
   * @param request ListRolesRequest
   * @return ListRolesResponse
   */
  async listRoles(request: ListRolesRequest): Promise<ListRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRolesWithOptions(request, headers, runtime);
  }

  /**
   * @summary list table names
   *
   * @param request ListTableNamesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTableNamesResponse
   */
  async listTableNamesWithOptions(request: ListTableNamesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTableNamesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tableNamePattern)) {
      query["TableNamePattern"] = request.tableNamePattern;
    }

    if (!Util.isUnset(request.tableType)) {
      query["TableType"] = request.tableType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTableNames",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/names`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTableNamesResponse>(await this.callApi(params, req, runtime), new ListTableNamesResponse({}));
  }

  /**
   * @summary list table names
   *
   * @param request ListTableNamesRequest
   * @return ListTableNamesResponse
   */
  async listTableNames(request: ListTableNamesRequest): Promise<ListTableNamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTableNamesWithOptions(request, headers, runtime);
  }

  /**
   * @summary List table versions
   *
   * @param request ListTableVersionsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTableVersionsResponse
   */
  async listTableVersionsWithOptions(request: ListTableVersionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTableVersionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTableVersions",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/versions/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTableVersionsResponse>(await this.callApi(params, req, runtime), new ListTableVersionsResponse({}));
  }

  /**
   * @summary List table versions
   *
   * @param request ListTableVersionsRequest
   * @return ListTableVersionsResponse
   */
  async listTableVersions(request: ListTableVersionsRequest): Promise<ListTableVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTableVersionsWithOptions(request, headers, runtime);
  }

  /**
   * @summary list tables
   *
   * @param request ListTablesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTablesResponse
   */
  async listTablesWithOptions(request: ListTablesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTablesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      query["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tableNamePattern)) {
      query["TableNamePattern"] = request.tableNamePattern;
    }

    if (!Util.isUnset(request.tableType)) {
      query["TableType"] = request.tableType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTables",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/databases/tables/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTablesResponse>(await this.callApi(params, req, runtime), new ListTablesResponse({}));
  }

  /**
   * @summary list tables
   *
   * @param request ListTablesRequest
   * @return ListTablesResponse
   */
  async listTables(request: ListTablesRequest): Promise<ListTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTablesWithOptions(request, headers, runtime);
  }

  /**
   * @summary 查询用户角色列表
   *
   * @param request ListUserRolesRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListUserRolesResponse
   */
  async listUserRolesWithOptions(request: ListUserRolesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListUserRolesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nextPageToken)) {
      query["NextPageToken"] = request.nextPageToken;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.principalArn)) {
      query["PrincipalArn"] = request.principalArn;
    }

    if (!Util.isUnset(request.roleNamePattern)) {
      query["RoleNamePattern"] = request.roleNamePattern;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserRoles",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/auth/roles/userroles`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListUserRolesResponse>(await this.callApi(params, req, runtime), new ListUserRolesResponse({}));
  }

  /**
   * @summary 查询用户角色列表
   *
   * @param request ListUserRolesRequest
   * @return ListUserRolesResponse
   */
  async listUserRoles(request: ListUserRolesRequest): Promise<ListUserRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserRolesWithOptions(request, headers, runtime);
  }

  /**
   * @summary refresh to keep the lock alive
   *
   * @param request RefreshLockRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return RefreshLockResponse
   */
  async refreshLockWithOptions(request: RefreshLockRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RefreshLockResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.lockId)) {
      query["LockId"] = request.lockId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefreshLock",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/locks`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RefreshLockResponse>(await this.callApi(params, req, runtime), new RefreshLockResponse({}));
  }

  /**
   * @summary refresh to keep the lock alive
   *
   * @param request RefreshLockRequest
   * @return RefreshLockResponse
   */
  async refreshLock(request: RefreshLockRequest): Promise<RefreshLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.refreshLockWithOptions(request, headers, runtime);
  }

  /**
   * @summary 注册Location
   *
   * @param request RegisterLocationRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return RegisterLocationResponse
   */
  async registerLocationWithOptions(request: RegisterLocationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RegisterLocationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.inventoryCollectEnabled)) {
      body["InventoryCollectEnabled"] = request.inventoryCollectEnabled;
    }

    if (!Util.isUnset(request.location)) {
      body["Location"] = request.location;
    }

    if (!Util.isUnset(request.ossLogCollectEnabled)) {
      body["OssLogCollectEnabled"] = request.ossLogCollectEnabled;
    }

    if (!Util.isUnset(request.roleName)) {
      body["RoleName"] = request.roleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RegisterLocation",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/webapi/locations`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RegisterLocationResponse>(await this.callApi(params, req, runtime), new RegisterLocationResponse({}));
  }

  /**
   * @summary 注册Location
   *
   * @param request RegisterLocationRequest
   * @return RegisterLocationResponse
   */
  async registerLocation(request: RegisterLocationRequest): Promise<RegisterLocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.registerLocationWithOptions(request, headers, runtime);
  }

  /**
   * @summary rename partition
   *
   * @param request RenamePartitionRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return RenamePartitionResponse
   */
  async renamePartitionWithOptions(request: RenamePartitionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RenamePartitionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.partitionInput)) {
      body["PartitionInput"] = request.partitionInput;
    }

    if (!Util.isUnset(request.partitionValues)) {
      body["PartitionValues"] = request.partitionValues;
    }

    if (!Util.isUnset(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RenamePartition",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/partitions/rename`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RenamePartitionResponse>(await this.callApi(params, req, runtime), new RenamePartitionResponse({}));
  }

  /**
   * @summary rename partition
   *
   * @param request RenamePartitionRequest
   * @return RenamePartitionResponse
   */
  async renamePartition(request: RenamePartitionRequest): Promise<RenamePartitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renamePartitionWithOptions(request, headers, runtime);
  }

  /**
   * @summary rename table
   *
   * @param request RenameTableRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return RenameTableResponse
   */
  async renameTableWithOptions(request: RenameTableRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RenameTableResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.isAsync)) {
      body["IsAsync"] = request.isAsync;
    }

    if (!Util.isUnset(request.tableInput)) {
      body["TableInput"] = request.tableInput;
    }

    if (!Util.isUnset(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RenameTable",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/rename`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RenameTableResponse>(await this.callApi(params, req, runtime), new RenameTableResponse({}));
  }

  /**
   * @summary rename table
   *
   * @param request RenameTableRequest
   * @return RenameTableResponse
   */
  async renameTable(request: RenameTableRequest): Promise<RenameTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renameTableWithOptions(request, headers, runtime);
  }

  /**
   * @summary 取消Principal资源的权限
   *
   * @param request RevokePermissionsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return RevokePermissionsResponse
   */
  async revokePermissionsWithOptions(request: RevokePermissionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RevokePermissionsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accesses)) {
      body["Accesses"] = request.accesses;
    }

    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.delegateAccesses)) {
      body["DelegateAccesses"] = request.delegateAccesses;
    }

    if (!Util.isUnset(request.metaResource)) {
      body["MetaResource"] = request.metaResource;
    }

    if (!Util.isUnset(request.principal)) {
      body["Principal"] = request.principal;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RevokePermissions",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/auth/permissions/revoke`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RevokePermissionsResponse>(await this.callApi(params, req, runtime), new RevokePermissionsResponse({}));
  }

  /**
   * @summary 取消Principal资源的权限
   *
   * @param request RevokePermissionsRequest
   * @return RevokePermissionsResponse
   */
  async revokePermissions(request: RevokePermissionsRequest): Promise<RevokePermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.revokePermissionsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 批量将该角色从这些用户中revoke
   *
   * @param request RevokeRoleFromUsersRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return RevokeRoleFromUsersResponse
   */
  async revokeRoleFromUsersWithOptions(request: RevokeRoleFromUsersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RevokeRoleFromUsersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.roleName)) {
      body["RoleName"] = request.roleName;
    }

    if (!Util.isUnset(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RevokeRoleFromUsers",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/auth/roles/revokeusers`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RevokeRoleFromUsersResponse>(await this.callApi(params, req, runtime), new RevokeRoleFromUsersResponse({}));
  }

  /**
   * @summary 批量将该角色从这些用户中revoke
   *
   * @param request RevokeRoleFromUsersRequest
   * @return RevokeRoleFromUsersResponse
   */
  async revokeRoleFromUsers(request: RevokeRoleFromUsersRequest): Promise<RevokeRoleFromUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.revokeRoleFromUsersWithOptions(request, headers, runtime);
  }

  /**
   * @summary 批量Revoke该用户的角色
   *
   * @param request RevokeRolesFromUserRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return RevokeRolesFromUserResponse
   */
  async revokeRolesFromUserWithOptions(request: RevokeRolesFromUserRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RevokeRolesFromUserResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.roleNames)) {
      body["RoleNames"] = request.roleNames;
    }

    if (!Util.isUnset(request.user)) {
      body["User"] = request.user;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RevokeRolesFromUser",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/auth/roles/revokeroles`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RevokeRolesFromUserResponse>(await this.callApi(params, req, runtime), new RevokeRolesFromUserResponse({}));
  }

  /**
   * @summary 批量Revoke该用户的角色
   *
   * @param request RevokeRolesFromUserRequest
   * @return RevokeRolesFromUserResponse
   */
  async revokeRolesFromUser(request: RevokeRolesFromUserRequest): Promise<RevokeRolesFromUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.revokeRolesFromUserWithOptions(request, headers, runtime);
  }

  /**
   * @summary 运行元数据迁移任务
   *
   * @param request RunMigrationWorkflowRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return RunMigrationWorkflowResponse
   */
  async runMigrationWorkflowWithOptions(request: RunMigrationWorkflowRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RunMigrationWorkflowResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RunMigrationWorkflow",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/webapi/migration/workflow/run`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RunMigrationWorkflowResponse>(await this.callApi(params, req, runtime), new RunMigrationWorkflowResponse({}));
  }

  /**
   * @summary 运行元数据迁移任务
   *
   * @param request RunMigrationWorkflowRequest
   * @return RunMigrationWorkflowResponse
   */
  async runMigrationWorkflow(request: RunMigrationWorkflowRequest): Promise<RunMigrationWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runMigrationWorkflowWithOptions(request, headers, runtime);
  }

  /**
   * @summary DLF 元数据search
   *
   * @param request SearchRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return SearchResponse
   */
  async searchWithOptions(request: SearchRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SearchResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchText)) {
      body["SearchText"] = request.searchText;
    }

    if (!Util.isUnset(request.searchType)) {
      body["SearchType"] = request.searchType;
    }

    if (!Util.isUnset(request.sortCriteria)) {
      body["SortCriteria"] = request.sortCriteria;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "Search",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/search`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SearchResponse>(await this.callApi(params, req, runtime), new SearchResponse({}));
  }

  /**
   * @summary DLF 元数据search
   *
   * @param request SearchRequest
   * @return SearchResponse
   */
  async search(request: SearchRequest): Promise<SearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchWithOptions(request, headers, runtime);
  }

  /**
   * @summary DLF 跨Catalog检索元数据
   *
   * @param request SearchAcrossCatalogRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return SearchAcrossCatalogResponse
   */
  async searchAcrossCatalogWithOptions(request: SearchAcrossCatalogRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SearchAcrossCatalogResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogIds)) {
      body["CatalogIds"] = request.catalogIds;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchText)) {
      body["SearchText"] = request.searchText;
    }

    if (!Util.isUnset(request.searchTypes)) {
      body["SearchTypes"] = request.searchTypes;
    }

    if (!Util.isUnset(request.sortCriteria)) {
      body["SortCriteria"] = request.sortCriteria;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SearchAcrossCatalog",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/search/search-across-catalog`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SearchAcrossCatalogResponse>(await this.callApi(params, req, runtime), new SearchAcrossCatalogResponse({}));
  }

  /**
   * @summary DLF 跨Catalog检索元数据
   *
   * @param request SearchAcrossCatalogRequest
   * @return SearchAcrossCatalogResponse
   */
  async searchAcrossCatalog(request: SearchAcrossCatalogRequest): Promise<SearchAcrossCatalogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchAcrossCatalogWithOptions(request, headers, runtime);
  }

  /**
   * @summary 停止元数据迁移任务
   *
   * @param request StopMigrationWorkflowRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopMigrationWorkflowResponse
   */
  async stopMigrationWorkflowWithOptions(request: StopMigrationWorkflowRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopMigrationWorkflowResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopMigrationWorkflow",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/webapi/migration/workflow/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopMigrationWorkflowResponse>(await this.callApi(params, req, runtime), new StopMigrationWorkflowResponse({}));
  }

  /**
   * @summary 停止元数据迁移任务
   *
   * @param request StopMigrationWorkflowRequest
   * @return StopMigrationWorkflowResponse
   */
  async stopMigrationWorkflow(request: StopMigrationWorkflowRequest): Promise<StopMigrationWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopMigrationWorkflowWithOptions(request, headers, runtime);
  }

  /**
   * @param request SubmitQueryRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return SubmitQueryResponse
   */
  async submitQueryWithOptions(request: SubmitQueryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SubmitQueryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      body["catalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.sql)) {
      body["sql"] = request.sql;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitQuery",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/webapi/query/submitQueryRequestBody`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SubmitQueryResponse>(await this.callApi(params, req, runtime), new SubmitQueryResponse({}));
  }

  /**
   * @param request SubmitQueryRequest
   * @return SubmitQueryResponse
   */
  async submitQuery(request: SubmitQueryRequest): Promise<SubmitQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitQueryWithOptions(request, headers, runtime);
  }

  /**
   * @summary unlock
   *
   * @param request UnLockRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UnLockResponse
   */
  async unLockWithOptions(request: UnLockRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UnLockResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.lockId)) {
      query["LockId"] = request.lockId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnLock",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/locks`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UnLockResponse>(await this.callApi(params, req, runtime), new UnLockResponse({}));
  }

  /**
   * @summary unlock
   *
   * @param request UnLockRequest
   * @return UnLockResponse
   */
  async unLock(request: UnLockRequest): Promise<UnLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unLockWithOptions(request, headers, runtime);
  }

  /**
   * @summary 更新数据湖Catalog
   *
   * @param request UpdateCatalogRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateCatalogResponse
   */
  async updateCatalogWithOptions(request: UpdateCatalogRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateCatalogResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogInput)) {
      body["CatalogInput"] = request.catalogInput;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCatalog",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateCatalogResponse>(await this.callApi(params, req, runtime), new UpdateCatalogResponse({}));
  }

  /**
   * @summary 更新数据湖Catalog
   *
   * @param request UpdateCatalogRequest
   * @return UpdateCatalogResponse
   */
  async updateCatalog(request: UpdateCatalogRequest): Promise<UpdateCatalogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateCatalogWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取数据湖配置
   *
   * @param request UpdateCatalogSettingsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateCatalogSettingsResponse
   */
  async updateCatalogSettingsWithOptions(request: UpdateCatalogSettingsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateCatalogSettingsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.catalogSettings)) {
      body["CatalogSettings"] = request.catalogSettings;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCatalogSettings",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/settings`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateCatalogSettingsResponse>(await this.callApi(params, req, runtime), new UpdateCatalogSettingsResponse({}));
  }

  /**
   * @summary 获取数据湖配置
   *
   * @param request UpdateCatalogSettingsRequest
   * @return UpdateCatalogSettingsResponse
   */
  async updateCatalogSettings(request: UpdateCatalogSettingsRequest): Promise<UpdateCatalogSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateCatalogSettingsWithOptions(request, headers, runtime);
  }

  /**
   * @summary Update database
   *
   * @param request UpdateDatabaseRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateDatabaseResponse
   */
  async updateDatabaseWithOptions(request: UpdateDatabaseRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateDatabaseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseInput)) {
      body["DatabaseInput"] = request.databaseInput;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDatabase",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateDatabaseResponse>(await this.callApi(params, req, runtime), new UpdateDatabaseResponse({}));
  }

  /**
   * @summary Update database
   *
   * @param request UpdateDatabaseRequest
   * @return UpdateDatabaseResponse
   */
  async updateDatabase(request: UpdateDatabaseRequest): Promise<UpdateDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDatabaseWithOptions(request, headers, runtime);
  }

  /**
   * @summary update function
   *
   * @param request UpdateFunctionRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateFunctionResponse
   */
  async updateFunctionWithOptions(request: UpdateFunctionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateFunctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.functionInput)) {
      body["FunctionInput"] = request.functionInput;
    }

    if (!Util.isUnset(request.functionName)) {
      body["FunctionName"] = request.functionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFunction",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/functions`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateFunctionResponse>(await this.callApi(params, req, runtime), new UpdateFunctionResponse({}));
  }

  /**
   * @summary update function
   *
   * @param request UpdateFunctionRequest
   * @return UpdateFunctionResponse
   */
  async updateFunction(request: UpdateFunctionRequest): Promise<UpdateFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFunctionWithOptions(request, headers, runtime);
  }

  /**
   * @summary update partition columnstatistics
   *
   * @param request UpdatePartitionColumnStatisticsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdatePartitionColumnStatisticsResponse
   */
  async updatePartitionColumnStatisticsWithOptions(request: UpdatePartitionColumnStatisticsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdatePartitionColumnStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.updateTablePartitionColumnStatisticsRequest),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePartitionColumnStatistics",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/partitions/columnstatistics`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdatePartitionColumnStatisticsResponse>(await this.callApi(params, req, runtime), new UpdatePartitionColumnStatisticsResponse({}));
  }

  /**
   * @summary update partition columnstatistics
   *
   * @param request UpdatePartitionColumnStatisticsRequest
   * @return UpdatePartitionColumnStatisticsResponse
   */
  async updatePartitionColumnStatistics(request: UpdatePartitionColumnStatisticsRequest): Promise<UpdatePartitionColumnStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePartitionColumnStatisticsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 赋予Principal资源的权限
   *
   * @param request UpdatePermissionsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdatePermissionsResponse
   */
  async updatePermissionsWithOptions(request: UpdatePermissionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdatePermissionsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accesses)) {
      body["Accesses"] = request.accesses;
    }

    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.delegateAccesses)) {
      body["DelegateAccesses"] = request.delegateAccesses;
    }

    if (!Util.isUnset(request.metaResource)) {
      body["MetaResource"] = request.metaResource;
    }

    if (!Util.isUnset(request.principal)) {
      body["Principal"] = request.principal;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePermissions",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/auth/permissions/`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdatePermissionsResponse>(await this.callApi(params, req, runtime), new UpdatePermissionsResponse({}));
  }

  /**
   * @summary 赋予Principal资源的权限
   *
   * @param request UpdatePermissionsRequest
   * @return UpdatePermissionsResponse
   */
  async updatePermissions(request: UpdatePermissionsRequest): Promise<UpdatePermissionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePermissionsWithOptions(request, headers, runtime);
  }

  /**
   * @summary 修改Location
   *
   * @param request UpdateRegisteredLocationRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateRegisteredLocationResponse
   */
  async updateRegisteredLocationWithOptions(request: UpdateRegisteredLocationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateRegisteredLocationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.inventoryCollectEnabled)) {
      body["InventoryCollectEnabled"] = request.inventoryCollectEnabled;
    }

    if (!Util.isUnset(request.locationId)) {
      body["LocationId"] = request.locationId;
    }

    if (!Util.isUnset(request.ossLogCollectEnabled)) {
      body["OssLogCollectEnabled"] = request.ossLogCollectEnabled;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRegisteredLocation",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/webapi/locations`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateRegisteredLocationResponse>(await this.callApi(params, req, runtime), new UpdateRegisteredLocationResponse({}));
  }

  /**
   * @summary 修改Location
   *
   * @param request UpdateRegisteredLocationRequest
   * @return UpdateRegisteredLocationResponse
   */
  async updateRegisteredLocation(request: UpdateRegisteredLocationRequest): Promise<UpdateRegisteredLocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRegisteredLocationWithOptions(request, headers, runtime);
  }

  /**
   * @summary 更新角色
   *
   * @param request UpdateRoleRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateRoleResponse
   */
  async updateRoleWithOptions(request: UpdateRoleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateRoleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.roleInput)) {
      body["RoleInput"] = request.roleInput;
    }

    if (!Util.isUnset(request.roleName)) {
      body["RoleName"] = request.roleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRole",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/auth/roles`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateRoleResponse>(await this.callApi(params, req, runtime), new UpdateRoleResponse({}));
  }

  /**
   * @summary 更新角色
   *
   * @param request UpdateRoleRequest
   * @return UpdateRoleResponse
   */
  async updateRole(request: UpdateRoleRequest): Promise<UpdateRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRoleWithOptions(request, headers, runtime);
  }

  /**
   * @summary 更新Role中的Users
   *
   * @param request UpdateRoleUsersRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateRoleUsersResponse
   */
  async updateRoleUsersWithOptions(request: UpdateRoleUsersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateRoleUsersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.roleName)) {
      body["RoleName"] = request.roleName;
    }

    if (!Util.isUnset(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRoleUsers",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/auth/updateroleusers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateRoleUsersResponse>(await this.callApi(params, req, runtime), new UpdateRoleUsersResponse({}));
  }

  /**
   * @summary 更新Role中的Users
   *
   * @param request UpdateRoleUsersRequest
   * @return UpdateRoleUsersResponse
   */
  async updateRoleUsers(request: UpdateRoleUsersRequest): Promise<UpdateRoleUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRoleUsersWithOptions(request, headers, runtime);
  }

  /**
   * @summary update table
   *
   * @param request UpdateTableRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateTableResponse
   */
  async updateTableWithOptions(request: UpdateTableRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateTableResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.allowPartitionKeyChange)) {
      body["AllowPartitionKeyChange"] = request.allowPartitionKeyChange;
    }

    if (!Util.isUnset(request.catalogId)) {
      body["CatalogId"] = request.catalogId;
    }

    if (!Util.isUnset(request.databaseName)) {
      body["DatabaseName"] = request.databaseName;
    }

    if (!Util.isUnset(request.isAsync)) {
      body["IsAsync"] = request.isAsync;
    }

    if (!Util.isUnset(request.skipArchive)) {
      body["SkipArchive"] = request.skipArchive;
    }

    if (!Util.isUnset(request.tableInput)) {
      body["TableInput"] = request.tableInput;
    }

    if (!Util.isUnset(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTable",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateTableResponse>(await this.callApi(params, req, runtime), new UpdateTableResponse({}));
  }

  /**
   * @summary update table
   *
   * @param request UpdateTableRequest
   * @return UpdateTableResponse
   */
  async updateTable(request: UpdateTableRequest): Promise<UpdateTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTableWithOptions(request, headers, runtime);
  }

  /**
   * @summary update table columnstatistics
   *
   * @param request UpdateTableColumnStatisticsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateTableColumnStatisticsResponse
   */
  async updateTableColumnStatisticsWithOptions(request: UpdateTableColumnStatisticsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateTableColumnStatisticsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.updateTablePartitionColumnStatisticsRequest),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTableColumnStatistics",
      version: "2020-07-10",
      protocol: "HTTPS",
      pathname: `/api/metastore/catalogs/databases/tables/columnstatistics`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateTableColumnStatisticsResponse>(await this.callApi(params, req, runtime), new UpdateTableColumnStatisticsResponse({}));
  }

  /**
   * @summary update table columnstatistics
   *
   * @param request UpdateTableColumnStatisticsRequest
   * @return UpdateTableColumnStatisticsResponse
   */
  async updateTableColumnStatistics(request: UpdateTableColumnStatisticsRequest): Promise<UpdateTableColumnStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTableColumnStatisticsWithOptions(request, headers, runtime);
  }

}
