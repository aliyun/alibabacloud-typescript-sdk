// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ColDetailModel extends $tea.Model {
  columnName?: string;
  createTime?: string;
  description?: string;
  distributeKey?: boolean;
  nullable?: boolean;
  partitionKey?: boolean;
  primaryKey?: boolean;
  schemaName?: string;
  tableName?: string;
  type?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      createTime: 'CreateTime',
      description: 'Description',
      distributeKey: 'DistributeKey',
      nullable: 'Nullable',
      partitionKey: 'PartitionKey',
      primaryKey: 'PrimaryKey',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      createTime: 'string',
      description: 'string',
      distributeKey: 'boolean',
      nullable: 'boolean',
      partitionKey: 'boolean',
      primaryKey: 'boolean',
      schemaName: 'string',
      tableName: 'string',
      type: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CstoreIndexModel extends $tea.Model {
  columnOrds?: string[];
  createTime?: string;
  databaseName?: string;
  indexColumns?: FieldSchemaModel[];
  indexName?: string;
  indexType?: string;
  options?: { [key: string]: string };
  physicalTableName?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      columnOrds: 'ColumnOrds',
      createTime: 'CreateTime',
      databaseName: 'DatabaseName',
      indexColumns: 'IndexColumns',
      indexName: 'IndexName',
      indexType: 'IndexType',
      options: 'Options',
      physicalTableName: 'PhysicalTableName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnOrds: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      databaseName: 'string',
      indexColumns: { 'type': 'array', 'itemType': FieldSchemaModel },
      indexName: 'string',
      indexType: 'string',
      options: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      physicalTableName: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DatabaseSummaryModel extends $tea.Model {
  createTime?: string;
  description?: string;
  owner?: string;
  schemaName?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      owner: 'Owner',
      schemaName: 'SchemaName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      owner: 'string',
      schemaName: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Detail extends $tea.Model {
  appType?: string;
  DBClusterId?: string;
  data?: string;
  durationInMillis?: number;
  estimateExecutionCpuTimeInSeconds?: number;
  lastAttemptId?: string;
  lastUpdatedTimeInMillis?: number;
  logRootPath?: string;
  resourceGroupName?: string;
  startedTimeInMillis?: number;
  submittedTimeInMillis?: number;
  terminatedTimeInMillis?: number;
  webUiAddress?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      DBClusterId: 'DBClusterId',
      data: 'Data',
      durationInMillis: 'DurationInMillis',
      estimateExecutionCpuTimeInSeconds: 'EstimateExecutionCpuTimeInSeconds',
      lastAttemptId: 'LastAttemptId',
      lastUpdatedTimeInMillis: 'LastUpdatedTimeInMillis',
      logRootPath: 'LogRootPath',
      resourceGroupName: 'ResourceGroupName',
      startedTimeInMillis: 'StartedTimeInMillis',
      submittedTimeInMillis: 'SubmittedTimeInMillis',
      terminatedTimeInMillis: 'TerminatedTimeInMillis',
      webUiAddress: 'WebUiAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      DBClusterId: 'string',
      data: 'string',
      durationInMillis: 'number',
      estimateExecutionCpuTimeInSeconds: 'number',
      lastAttemptId: 'string',
      lastUpdatedTimeInMillis: 'number',
      logRootPath: 'string',
      resourceGroupName: 'string',
      startedTimeInMillis: 'number',
      submittedTimeInMillis: 'number',
      terminatedTimeInMillis: 'number',
      webUiAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FieldSchemaModel extends $tea.Model {
  autoIncrement?: boolean;
  columnRawName?: string;
  comment?: string;
  compressFloatUseShort?: boolean;
  compression?: string;
  createTime?: string;
  dataType?: string;
  databaseName?: string;
  defaultValue?: string;
  delimiter?: string;
  encode?: string;
  isPartitionKey?: boolean;
  mappedName?: string;
  name?: string;
  nullable?: boolean;
  onUpdate?: string;
  ordinalPosition?: number;
  physicalColumnName?: string;
  pkPosition?: number;
  precision?: number;
  primarykey?: boolean;
  scale?: number;
  tableName?: string;
  tokenizer?: string;
  type?: string;
  updateTime?: string;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      autoIncrement: 'AutoIncrement',
      columnRawName: 'ColumnRawName',
      comment: 'Comment',
      compressFloatUseShort: 'CompressFloatUseShort',
      compression: 'Compression',
      createTime: 'CreateTime',
      dataType: 'DataType',
      databaseName: 'DatabaseName',
      defaultValue: 'DefaultValue',
      delimiter: 'Delimiter',
      encode: 'Encode',
      isPartitionKey: 'IsPartitionKey',
      mappedName: 'MappedName',
      name: 'Name',
      nullable: 'Nullable',
      onUpdate: 'OnUpdate',
      ordinalPosition: 'OrdinalPosition',
      physicalColumnName: 'PhysicalColumnName',
      pkPosition: 'PkPosition',
      precision: 'Precision',
      primarykey: 'Primarykey',
      scale: 'Scale',
      tableName: 'TableName',
      tokenizer: 'Tokenizer',
      type: 'Type',
      updateTime: 'UpdateTime',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoIncrement: 'boolean',
      columnRawName: 'string',
      comment: 'string',
      compressFloatUseShort: 'boolean',
      compression: 'string',
      createTime: 'string',
      dataType: 'string',
      databaseName: 'string',
      defaultValue: 'string',
      delimiter: 'string',
      encode: 'string',
      isPartitionKey: 'boolean',
      mappedName: 'string',
      name: 'string',
      nullable: 'boolean',
      onUpdate: 'string',
      ordinalPosition: 'number',
      physicalColumnName: 'string',
      pkPosition: 'number',
      precision: 'number',
      primarykey: 'boolean',
      scale: 'number',
      tableName: 'string',
      tokenizer: 'string',
      type: 'string',
      updateTime: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Filters extends $tea.Model {
  appIdRegex?: string;
  appNameRegex?: string;
  appState?: string;
  appType?: string;
  executionTimeRange?: FiltersExecutionTimeRange;
  submitTimeRange?: FiltersSubmitTimeRange;
  termiatedTimeRange?: FiltersTermiatedTimeRange;
  static names(): { [key: string]: string } {
    return {
      appIdRegex: 'AppIdRegex',
      appNameRegex: 'AppNameRegex',
      appState: 'AppState',
      appType: 'AppType',
      executionTimeRange: 'ExecutionTimeRange',
      submitTimeRange: 'SubmitTimeRange',
      termiatedTimeRange: 'TermiatedTimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIdRegex: 'string',
      appNameRegex: 'string',
      appState: 'string',
      appType: 'string',
      executionTimeRange: FiltersExecutionTimeRange,
      submitTimeRange: FiltersSubmitTimeRange,
      termiatedTimeRange: FiltersTermiatedTimeRange,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogAnalyzeResult extends $tea.Model {
  appErrorAdvice?: string;
  appErrorCode?: string;
  appErrorLog?: string;
  static names(): { [key: string]: string } {
    return {
      appErrorAdvice: 'AppErrorAdvice',
      appErrorCode: 'AppErrorCode',
      appErrorLog: 'AppErrorLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appErrorAdvice: 'string',
      appErrorCode: 'string',
      appErrorLog: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SerDeInfoModel extends $tea.Model {
  name?: string;
  parameters?: { [key: string]: string };
  serDeId?: number;
  serializationLib?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      parameters: 'Parameters',
      serDeId: 'SerDeId',
      serializationLib: 'SerializationLib',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      serDeId: 'number',
      serializationLib: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SparkAnalyzeLogTask extends $tea.Model {
  DBClusterId?: string;
  result?: LogAnalyzeResult;
  ruleMatched?: boolean;
  startedTimeInMillis?: number;
  submittedTimeInMillis?: number;
  taskErrMsg?: string;
  taskId?: number;
  taskState?: string;
  terminatedTimeInMillis?: number;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      result: 'Result',
      ruleMatched: 'RuleMatched',
      startedTimeInMillis: 'StartedTimeInMillis',
      submittedTimeInMillis: 'SubmittedTimeInMillis',
      taskErrMsg: 'TaskErrMsg',
      taskId: 'TaskId',
      taskState: 'TaskState',
      terminatedTimeInMillis: 'TerminatedTimeInMillis',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      result: LogAnalyzeResult,
      ruleMatched: 'boolean',
      startedTimeInMillis: 'number',
      submittedTimeInMillis: 'number',
      taskErrMsg: 'string',
      taskId: 'number',
      taskState: 'string',
      terminatedTimeInMillis: 'number',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SparkAppInfo extends $tea.Model {
  appId?: string;
  appName?: string;
  DBClusterId?: string;
  detail?: Detail;
  message?: string;
  priority?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      DBClusterId: 'DBClusterId',
      detail: 'Detail',
      message: 'Message',
      priority: 'Priority',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      DBClusterId: 'string',
      detail: Detail,
      message: 'string',
      priority: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SparkAttemptInfo extends $tea.Model {
  attemptId?: string;
  detail?: Detail;
  message?: string;
  priority?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      attemptId: 'AttemptId',
      detail: 'Detail',
      message: 'Message',
      priority: 'Priority',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attemptId: 'string',
      detail: Detail,
      message: 'string',
      priority: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SparkSession extends $tea.Model {
  active?: string;
  aliyunUid?: number;
  sessionId?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      aliyunUid: 'AliyunUid',
      sessionId: 'SessionId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'string',
      aliyunUid: 'number',
      sessionId: 'number',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Statement extends $tea.Model {
  aliyunUid?: number;
  code?: string;
  codeState?: string;
  codeType?: string;
  endTime?: number;
  error?: string;
  haveRows?: boolean;
  output?: string;
  resourceGroup?: string;
  sessionId?: number;
  startTime?: number;
  statementId?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      code: 'Code',
      codeState: 'CodeState',
      codeType: 'CodeType',
      endTime: 'EndTime',
      error: 'Error',
      haveRows: 'HaveRows',
      output: 'Output',
      resourceGroup: 'ResourceGroup',
      sessionId: 'SessionId',
      startTime: 'StartTime',
      statementId: 'StatementId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'number',
      code: 'string',
      codeState: 'string',
      codeType: 'string',
      endTime: 'number',
      error: 'string',
      haveRows: 'boolean',
      output: 'string',
      resourceGroup: 'string',
      sessionId: 'number',
      startTime: 'number',
      statementId: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StatementInfo extends $tea.Model {
  code?: string;
  completedTimeInMills?: number;
  output?: string;
  process?: number;
  startedTimeInMills?: number;
  state?: string;
  statementId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      completedTimeInMills: 'CompletedTimeInMills',
      output: 'Output',
      process: 'Process',
      startedTimeInMills: 'StartedTimeInMills',
      state: 'State',
      statementId: 'StatementId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      completedTimeInMills: 'number',
      output: 'string',
      process: 'number',
      startedTimeInMills: 'number',
      state: 'string',
      statementId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StorageDescriptorModel extends $tea.Model {
  compressed?: boolean;
  inputFormat?: string;
  location?: string;
  numBuckets?: number;
  outputFormat?: string;
  parameters?: { [key: string]: string };
  sdId?: number;
  serDeInfo?: SerDeInfoModel;
  storedAsSubDirectories?: boolean;
  static names(): { [key: string]: string } {
    return {
      compressed: 'Compressed',
      inputFormat: 'InputFormat',
      location: 'Location',
      numBuckets: 'NumBuckets',
      outputFormat: 'OutputFormat',
      parameters: 'Parameters',
      sdId: 'SdId',
      serDeInfo: 'SerDeInfo',
      storedAsSubDirectories: 'StoredAsSubDirectories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compressed: 'boolean',
      inputFormat: 'string',
      location: 'string',
      numBuckets: 'number',
      outputFormat: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      sdId: 'number',
      serDeInfo: SerDeInfoModel,
      storedAsSubDirectories: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableDetailModel extends $tea.Model {
  catalog?: string;
  columns?: ColDetailModel[];
  createTime?: string;
  description?: string;
  owner?: string;
  schemaName?: string;
  tableName?: string;
  tableType?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      columns: 'Columns',
      createTime: 'CreateTime',
      description: 'Description',
      owner: 'Owner',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      tableType: 'TableType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      columns: { 'type': 'array', 'itemType': ColDetailModel },
      createTime: 'string',
      description: 'string',
      owner: 'string',
      schemaName: 'string',
      tableName: 'string',
      tableType: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableModel extends $tea.Model {
  archiveType?: string;
  blockSize?: number;
  bucket?: number;
  bucketCount?: number;
  cols?: FieldSchemaModel[];
  comment?: string;
  compression?: string;
  createTime?: string;
  currentVersion?: number;
  dbName?: string;
  dictEncode?: boolean;
  distributeColumns?: FieldSchemaModel[];
  distributeType?: string;
  enableDfs?: boolean;
  hotPartitionCount?: number;
  indexes?: CstoreIndexModel[];
  isAllIndex?: boolean;
  isFulltextDict?: boolean;
  maxColumnId?: number;
  parameters?: { [key: string]: string };
  partitionColumn?: string;
  partitionCount?: number;
  partitionKeys?: FieldSchemaModel[];
  partitionType?: string;
  physicalDatabaseName?: string;
  physicalTableName?: string;
  previousVersion?: number;
  rawTableName?: string;
  routeColumns?: FieldSchemaModel[];
  routeEffectiveColumn?: FieldSchemaModel;
  routeType?: string;
  rtEngineType?: string;
  rtIndexAll?: boolean;
  rtModeType?: string;
  sd?: StorageDescriptorModel;
  storagePolicy?: string;
  subpartitionColumn?: string;
  subpartitionCount?: number;
  subpartitionType?: string;
  tableEngineName?: string;
  tableName?: string;
  tableType?: string;
  tblId?: number;
  temporary?: boolean;
  updateTime?: string;
  viewExpandedText?: string;
  viewOriginalText?: string;
  viewSecurityMode?: string;
  static names(): { [key: string]: string } {
    return {
      archiveType: 'ArchiveType',
      blockSize: 'BlockSize',
      bucket: 'Bucket',
      bucketCount: 'BucketCount',
      cols: 'Cols',
      comment: 'Comment',
      compression: 'Compression',
      createTime: 'CreateTime',
      currentVersion: 'CurrentVersion',
      dbName: 'DbName',
      dictEncode: 'DictEncode',
      distributeColumns: 'DistributeColumns',
      distributeType: 'DistributeType',
      enableDfs: 'EnableDfs',
      hotPartitionCount: 'HotPartitionCount',
      indexes: 'Indexes',
      isAllIndex: 'IsAllIndex',
      isFulltextDict: 'IsFulltextDict',
      maxColumnId: 'MaxColumnId',
      parameters: 'Parameters',
      partitionColumn: 'PartitionColumn',
      partitionCount: 'PartitionCount',
      partitionKeys: 'PartitionKeys',
      partitionType: 'PartitionType',
      physicalDatabaseName: 'PhysicalDatabaseName',
      physicalTableName: 'PhysicalTableName',
      previousVersion: 'PreviousVersion',
      rawTableName: 'RawTableName',
      routeColumns: 'RouteColumns',
      routeEffectiveColumn: 'RouteEffectiveColumn',
      routeType: 'RouteType',
      rtEngineType: 'RtEngineType',
      rtIndexAll: 'RtIndexAll',
      rtModeType: 'RtModeType',
      sd: 'Sd',
      storagePolicy: 'StoragePolicy',
      subpartitionColumn: 'SubpartitionColumn',
      subpartitionCount: 'SubpartitionCount',
      subpartitionType: 'SubpartitionType',
      tableEngineName: 'TableEngineName',
      tableName: 'TableName',
      tableType: 'TableType',
      tblId: 'TblId',
      temporary: 'Temporary',
      updateTime: 'UpdateTime',
      viewExpandedText: 'ViewExpandedText',
      viewOriginalText: 'ViewOriginalText',
      viewSecurityMode: 'ViewSecurityMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveType: 'string',
      blockSize: 'number',
      bucket: 'number',
      bucketCount: 'number',
      cols: { 'type': 'array', 'itemType': FieldSchemaModel },
      comment: 'string',
      compression: 'string',
      createTime: 'string',
      currentVersion: 'number',
      dbName: 'string',
      dictEncode: 'boolean',
      distributeColumns: { 'type': 'array', 'itemType': FieldSchemaModel },
      distributeType: 'string',
      enableDfs: 'boolean',
      hotPartitionCount: 'number',
      indexes: { 'type': 'array', 'itemType': CstoreIndexModel },
      isAllIndex: 'boolean',
      isFulltextDict: 'boolean',
      maxColumnId: 'number',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      partitionColumn: 'string',
      partitionCount: 'number',
      partitionKeys: { 'type': 'array', 'itemType': FieldSchemaModel },
      partitionType: 'string',
      physicalDatabaseName: 'string',
      physicalTableName: 'string',
      previousVersion: 'number',
      rawTableName: 'string',
      routeColumns: { 'type': 'array', 'itemType': FieldSchemaModel },
      routeEffectiveColumn: FieldSchemaModel,
      routeType: 'string',
      rtEngineType: 'string',
      rtIndexAll: 'boolean',
      rtModeType: 'string',
      sd: StorageDescriptorModel,
      storagePolicy: 'string',
      subpartitionColumn: 'string',
      subpartitionCount: 'number',
      subpartitionType: 'string',
      tableEngineName: 'string',
      tableName: 'string',
      tableType: 'string',
      tblId: 'number',
      temporary: 'boolean',
      updateTime: 'string',
      viewExpandedText: 'string',
      viewOriginalText: 'string',
      viewSecurityMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableSummaryModel extends $tea.Model {
  createTime?: string;
  description?: string;
  owner?: string;
  SQL?: string;
  schemaName?: string;
  tableName?: string;
  tableSize?: number;
  tableType?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      owner: 'Owner',
      SQL: 'SQL',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      tableSize: 'TableSize',
      tableType: 'TableType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      owner: 'string',
      SQL: 'string',
      schemaName: 'string',
      tableName: 'string',
      tableSize: 'number',
      tableType: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateClusterPublicConnectionRequest extends $tea.Model {
  connectionStringPrefix?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStringPrefix: 'string',
      DBClusterId: 'string',
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
  statusCode: number;
  body: AllocateClusterPublicConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AllocateClusterPublicConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAccountRequest extends $tea.Model {
  accountName?: string;
  DBClusterId?: string;
  ramUser?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBClusterId: 'DBClusterId',
      ramUser: 'RamUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBClusterId: 'string',
      ramUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAccountResponseBody extends $tea.Model {
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

export class BindAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BindAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckBindRamUserRequest extends $tea.Model {
  DBClusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckBindRamUserResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckBindRamUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckBindRamUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckBindRamUserResponseBody,
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
  accountType?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      accountType: 'AccountType',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountPassword: 'string',
      accountType: 'string',
      DBClusterId: 'string',
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
  statusCode: number;
  body: CreateAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBClusterRequest extends $tea.Model {
  backupSetId?: string;
  computeResource?: string;
  DBClusterDescription?: string;
  DBClusterNetworkType?: string;
  DBClusterVersion?: string;
  enableDefaultResourcePool?: boolean;
  payType?: string;
  period?: string;
  regionId?: string;
  resourceGroupId?: string;
  restoreToTime?: string;
  restoreType?: string;
  sourceDbClusterId?: string;
  storageResource?: string;
  tag?: CreateDBClusterRequestTag[];
  usedTime?: string;
  VPCId?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
      computeResource: 'ComputeResource',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterVersion: 'DBClusterVersion',
      enableDefaultResourcePool: 'EnableDefaultResourcePool',
      payType: 'PayType',
      period: 'Period',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      restoreToTime: 'RestoreToTime',
      restoreType: 'RestoreType',
      sourceDbClusterId: 'SourceDbClusterId',
      storageResource: 'StorageResource',
      tag: 'Tag',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetId: 'string',
      computeResource: 'string',
      DBClusterDescription: 'string',
      DBClusterNetworkType: 'string',
      DBClusterVersion: 'string',
      enableDefaultResourcePool: 'boolean',
      payType: 'string',
      period: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      restoreToTime: 'string',
      restoreType: 'string',
      sourceDbClusterId: 'string',
      storageResource: 'string',
      tag: { 'type': 'array', 'itemType': CreateDBClusterRequestTag },
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

export class CreateDBClusterResponseBody extends $tea.Model {
  DBClusterId?: string;
  orderId?: string;
  requestId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      orderId: 'OrderId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      orderId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDBClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDBClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBResourceGroupRequest extends $tea.Model {
  DBClusterId?: string;
  groupName?: string;
  groupType?: string;
  maxComputeResource?: string;
  minComputeResource?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      groupName: 'GroupName',
      groupType: 'GroupType',
      maxComputeResource: 'MaxComputeResource',
      minComputeResource: 'MinComputeResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      groupName: 'string',
      groupType: 'string',
      maxComputeResource: 'string',
      minComputeResource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBResourceGroupResponseBody extends $tea.Model {
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

export class CreateDBResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDBResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDBResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateElasticPlanRequest extends $tea.Model {
  autoScale?: boolean;
  cronExpression?: string;
  DBClusterId?: string;
  elasticPlanName?: string;
  enabled?: boolean;
  endTime?: string;
  resourceGroupName?: string;
  startTime?: string;
  targetSize?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoScale: 'AutoScale',
      cronExpression: 'CronExpression',
      DBClusterId: 'DBClusterId',
      elasticPlanName: 'ElasticPlanName',
      enabled: 'Enabled',
      endTime: 'EndTime',
      resourceGroupName: 'ResourceGroupName',
      startTime: 'StartTime',
      targetSize: 'TargetSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScale: 'boolean',
      cronExpression: 'string',
      DBClusterId: 'string',
      elasticPlanName: 'string',
      enabled: 'boolean',
      endTime: 'string',
      resourceGroupName: 'string',
      startTime: 'string',
      targetSize: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateElasticPlanResponseBody extends $tea.Model {
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

export class CreateElasticPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateElasticPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateElasticPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOssSubDirectoryRequest extends $tea.Model {
  DBClusterId?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOssSubDirectoryResponseBody extends $tea.Model {
  data?: CreateOssSubDirectoryResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateOssSubDirectoryResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOssSubDirectoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOssSubDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateOssSubDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSparkTemplateRequest extends $tea.Model {
  appType?: string;
  DBClusterId?: string;
  name?: string;
  parentId?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      DBClusterId: 'DBClusterId',
      name: 'Name',
      parentId: 'ParentId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      DBClusterId: 'string',
      name: 'string',
      parentId: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSparkTemplateResponseBody extends $tea.Model {
  data?: CreateSparkTemplateResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateSparkTemplateResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSparkTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSparkTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSparkTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountRequest extends $tea.Model {
  accountName?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBClusterId: 'string',
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
  statusCode: number;
  body: DeleteAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBClusterRequest extends $tea.Model {
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBClusterResponseBody extends $tea.Model {
  DBClusterId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDBClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDBClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBResourceGroupRequest extends $tea.Model {
  DBClusterId?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDBResourceGroupResponseBody extends $tea.Model {
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

export class DeleteDBResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDBResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDBResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteElasticPlanRequest extends $tea.Model {
  DBClusterId?: string;
  elasticPlanName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      elasticPlanName: 'ElasticPlanName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      elasticPlanName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteElasticPlanResponseBody extends $tea.Model {
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

export class DeleteElasticPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteElasticPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteElasticPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProcessInstanceRequest extends $tea.Model {
  DBClusterId?: string;
  processInstanceId?: number;
  projectCode?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      processInstanceId: 'ProcessInstanceId',
      projectCode: 'ProjectCode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      processInstanceId: 'number',
      projectCode: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProcessInstanceResponseBody extends $tea.Model {
  data?: boolean;
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
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProcessInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteProcessInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteProcessInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSparkTemplateRequest extends $tea.Model {
  DBClusterId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSparkTemplateResponseBody extends $tea.Model {
  data?: DeleteSparkTemplateResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteSparkTemplateResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSparkTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSparkTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSparkTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSparkTemplateFileRequest extends $tea.Model {
  DBClusterId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSparkTemplateFileResponseBody extends $tea.Model {
  data?: DeleteSparkTemplateFileResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteSparkTemplateFileResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSparkTemplateFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSparkTemplateFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSparkTemplateFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAllPrivilegesRequest extends $tea.Model {
  accountName?: string;
  DBClusterId?: string;
  marker?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBClusterId: 'DBClusterId',
      marker: 'Marker',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBClusterId: 'string',
      marker: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAllPrivilegesResponseBody extends $tea.Model {
  data?: DescribeAccountAllPrivilegesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeAccountAllPrivilegesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAllPrivilegesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAccountAllPrivilegesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAccountAllPrivilegesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountPrivilegeObjectsRequest extends $tea.Model {
  accountName?: string;
  columnPrivilegeObject?: string;
  DBClusterId?: string;
  databasePrivilegeObject?: string;
  pageNumber?: string;
  pageSize?: string;
  privilegeType?: string;
  regionId?: string;
  tablePrivilegeObject?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      columnPrivilegeObject: 'ColumnPrivilegeObject',
      DBClusterId: 'DBClusterId',
      databasePrivilegeObject: 'DatabasePrivilegeObject',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      privilegeType: 'PrivilegeType',
      regionId: 'RegionId',
      tablePrivilegeObject: 'TablePrivilegeObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      columnPrivilegeObject: 'string',
      DBClusterId: 'string',
      databasePrivilegeObject: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      privilegeType: 'string',
      regionId: 'string',
      tablePrivilegeObject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountPrivilegeObjectsResponseBody extends $tea.Model {
  data?: DescribeAccountPrivilegeObjectsResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': DescribeAccountPrivilegeObjectsResponseBodyData },
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

export class DescribeAccountPrivilegeObjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAccountPrivilegeObjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAccountPrivilegeObjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountPrivilegesRequest extends $tea.Model {
  accountName?: string;
  columnPrivilegeObject?: string;
  DBClusterId?: string;
  databasePrivilegeObject?: string;
  pageNumber?: string;
  pageSize?: string;
  privilegeType?: string;
  regionId?: string;
  tablePrivilegeObject?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      columnPrivilegeObject: 'ColumnPrivilegeObject',
      DBClusterId: 'DBClusterId',
      databasePrivilegeObject: 'DatabasePrivilegeObject',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      privilegeType: 'PrivilegeType',
      regionId: 'RegionId',
      tablePrivilegeObject: 'TablePrivilegeObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      columnPrivilegeObject: 'string',
      DBClusterId: 'string',
      databasePrivilegeObject: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      privilegeType: 'string',
      regionId: 'string',
      tablePrivilegeObject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountPrivilegesResponseBody extends $tea.Model {
  data?: DescribeAccountPrivilegesResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': DescribeAccountPrivilegesResponseBodyData },
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

export class DescribeAccountPrivilegesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAccountPrivilegesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAccountPrivilegesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsRequest extends $tea.Model {
  accountName?: string;
  DBClusterId?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBClusterId: 'DBClusterId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBClusterId: 'string',
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBody extends $tea.Model {
  accountList?: DescribeAccountsResponseBodyAccountList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountList: 'AccountList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountList: DescribeAccountsResponseBodyAccountList,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAccountsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdbMySqlColumnsRequest extends $tea.Model {
  DBClusterId?: string;
  regionId?: string;
  schema?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      schema: 'Schema',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      schema: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdbMySqlColumnsResponseBody extends $tea.Model {
  columnCount?: number;
  columns?: DescribeAdbMySqlColumnsResponseBodyColumns[];
  message?: string;
  requestId?: string;
  schema?: string;
  success?: boolean;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      columnCount: 'ColumnCount',
      columns: 'Columns',
      message: 'Message',
      requestId: 'RequestId',
      schema: 'Schema',
      success: 'Success',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnCount: 'number',
      columns: { 'type': 'array', 'itemType': DescribeAdbMySqlColumnsResponseBodyColumns },
      message: 'string',
      requestId: 'string',
      schema: 'string',
      success: 'boolean',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdbMySqlColumnsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAdbMySqlColumnsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAdbMySqlColumnsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdbMySqlSchemasRequest extends $tea.Model {
  DBClusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdbMySqlSchemasResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  schemas?: string[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      schemas: 'Schemas',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      schemas: { 'type': 'array', 'itemType': 'string' },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdbMySqlSchemasResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAdbMySqlSchemasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAdbMySqlSchemasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdbMySqlTablesRequest extends $tea.Model {
  DBClusterId?: string;
  regionId?: string;
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      schema: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdbMySqlTablesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  schema?: string;
  success?: boolean;
  tables?: string[];
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      schema: 'Schema',
      success: 'Success',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      schema: 'string',
      success: 'boolean',
      tables: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdbMySqlTablesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAdbMySqlTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAdbMySqlTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllDataSourceRequest extends $tea.Model {
  DBClusterId?: string;
  regionId?: string;
  schemaName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      schemaName: 'SchemaName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
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
  statusCode: number;
  body: DescribeAllDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAllDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApsActionLogsRequest extends $tea.Model {
  DBClusterId?: string;
  endTime?: string;
  keyword?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  stage?: string;
  startTime?: string;
  state?: string;
  workloadId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      keyword: 'Keyword',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      stage: 'Stage',
      startTime: 'StartTime',
      state: 'State',
      workloadId: 'WorkloadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      keyword: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      stage: 'string',
      startTime: 'string',
      state: 'string',
      workloadId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApsActionLogsResponseBody extends $tea.Model {
  actionLogs?: DescribeApsActionLogsResponseBodyActionLogs[];
  DBClusterId?: string;
  pageNumber?: string;
  pageSize?: string;
  requestId?: string;
  totalCount?: string;
  workloadId?: string;
  static names(): { [key: string]: string } {
    return {
      actionLogs: 'ActionLogs',
      DBClusterId: 'DBClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      workloadId: 'WorkloadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionLogs: { 'type': 'array', 'itemType': DescribeApsActionLogsResponseBodyActionLogs },
      DBClusterId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
      workloadId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApsActionLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApsActionLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApsActionLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApsResourceGroupsRequest extends $tea.Model {
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApsResourceGroupsResponseBody extends $tea.Model {
  data?: DescribeApsResourceGroupsResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeApsResourceGroupsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApsResourceGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeApsResourceGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApsResourceGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogRecordsRequest extends $tea.Model {
  DBClusterId?: string;
  DBName?: string;
  endTime?: string;
  hostAddress?: string;
  order?: string;
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  proxyUser?: string;
  queryKeyword?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sqlType?: string;
  startTime?: string;
  succeed?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBName: 'DBName',
      endTime: 'EndTime',
      hostAddress: 'HostAddress',
      order: 'Order',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      proxyUser: 'ProxyUser',
      queryKeyword: 'QueryKeyword',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sqlType: 'SqlType',
      startTime: 'StartTime',
      succeed: 'Succeed',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBName: 'string',
      endTime: 'string',
      hostAddress: 'string',
      order: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      proxyUser: 'string',
      queryKeyword: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sqlType: 'string',
      startTime: 'string',
      succeed: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogRecordsResponseBody extends $tea.Model {
  DBClusterId?: string;
  items?: DescribeAuditLogRecordsResponseBodyItems[];
  pageNumber?: string;
  pageSize?: string;
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      items: { 'type': 'array', 'itemType': DescribeAuditLogRecordsResponseBodyItems },
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

export class DescribeAuditLogRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAuditLogRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAuditLogRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAccessWhiteListRequest extends $tea.Model {
  DBClusterId?: string;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      resourceOwnerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAccessWhiteListResponseBody extends $tea.Model {
  items?: DescribeClusterAccessWhiteListResponseBodyItems;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeClusterAccessWhiteListResponseBodyItems,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAccessWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeClusterAccessWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClusterAccessWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNetInfoRequest extends $tea.Model {
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNetInfoResponseBody extends $tea.Model {
  clusterNetworkType?: string;
  items?: DescribeClusterNetInfoResponseBodyItems;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterNetworkType: 'ClusterNetworkType',
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterNetworkType: 'string',
      items: DescribeClusterNetInfoResponseBodyItems,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNetInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeClusterNetInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClusterNetInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnsRequest extends $tea.Model {
  DBClusterId?: string;
  regionId?: string;
  schemaName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      schemaName: 'SchemaName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
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
  statusCode: number;
  body: DescribeColumnsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeColumnsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeRequest extends $tea.Model {
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponseBody extends $tea.Model {
  items?: DescribeDBClusterAttributeResponseBodyItems;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDBClusterAttributeResponseBodyItems,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDBClusterAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDBClusterAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterHealthStatusRequest extends $tea.Model {
  DBClusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterHealthStatusResponseBody extends $tea.Model {
  CS?: DescribeDBClusterHealthStatusResponseBodyCS;
  executor?: DescribeDBClusterHealthStatusResponseBodyExecutor;
  instanceStatus?: string;
  requestId?: string;
  worker?: DescribeDBClusterHealthStatusResponseBodyWorker;
  static names(): { [key: string]: string } {
    return {
      CS: 'CS',
      executor: 'Executor',
      instanceStatus: 'InstanceStatus',
      requestId: 'RequestId',
      worker: 'Worker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CS: DescribeDBClusterHealthStatusResponseBodyCS,
      executor: DescribeDBClusterHealthStatusResponseBodyExecutor,
      instanceStatus: 'string',
      requestId: 'string',
      worker: DescribeDBClusterHealthStatusResponseBodyWorker,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterHealthStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDBClusterHealthStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDBClusterHealthStatusResponseBody,
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
  regionId?: string;
  resourcePools?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      key: 'Key',
      regionId: 'RegionId',
      resourcePools: 'ResourcePools',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      key: 'string',
      regionId: 'string',
      resourcePools: 'string',
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
  statusCode: number;
  body: DescribeDBClusterPerformanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDBClusterPerformanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersRequest extends $tea.Model {
  DBClusterDescription?: string;
  DBClusterIds?: string;
  DBClusterStatus?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  tag?: DescribeDBClustersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      DBClusterDescription: 'DBClusterDescription',
      DBClusterIds: 'DBClusterIds',
      DBClusterStatus: 'DBClusterStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterDescription: 'string',
      DBClusterIds: 'string',
      DBClusterStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDBClustersRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBody extends $tea.Model {
  items?: DescribeDBClustersResponseBodyItems;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
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
      items: DescribeDBClustersResponseBodyItems,
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
  statusCode: number;
  body: DescribeDBClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDBClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBResourceGroupRequest extends $tea.Model {
  DBClusterId?: string;
  groupName?: string;
  groupType?: string;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      groupName: 'GroupName',
      groupType: 'GroupType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      groupName: 'string',
      groupType: 'string',
      resourceOwnerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBResourceGroupResponseBody extends $tea.Model {
  groupsInfo?: DescribeDBResourceGroupResponseBodyGroupsInfo[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupsInfo: 'GroupsInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupsInfo: { 'type': 'array', 'itemType': DescribeDBResourceGroupResponseBodyGroupsInfo },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDBResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDBResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisDimensionsRequest extends $tea.Model {
  DBClusterId?: string;
  endTime?: string;
  lang?: string;
  queryCondition?: string;
  regionId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      lang: 'Lang',
      queryCondition: 'QueryCondition',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      lang: 'string',
      queryCondition: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisDimensionsResponseBody extends $tea.Model {
  clientIps?: string[];
  databases?: string[];
  requestId?: string;
  resourceGroups?: string[];
  userNames?: string[];
  static names(): { [key: string]: string } {
    return {
      clientIps: 'ClientIps',
      databases: 'Databases',
      requestId: 'RequestId',
      resourceGroups: 'ResourceGroups',
      userNames: 'UserNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIps: { 'type': 'array', 'itemType': 'string' },
      databases: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      resourceGroups: { 'type': 'array', 'itemType': 'string' },
      userNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisDimensionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDiagnosisDimensionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDiagnosisDimensionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisRecordsRequest extends $tea.Model {
  clientIp?: string;
  DBClusterId?: string;
  database?: string;
  endTime?: string;
  keyword?: string;
  lang?: string;
  maxPeakMemory?: number;
  maxScanSize?: number;
  minPeakMemory?: number;
  minScanSize?: number;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  patternId?: string;
  queryCondition?: string;
  regionId?: string;
  resourceGroup?: string;
  startTime?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      DBClusterId: 'DBClusterId',
      database: 'Database',
      endTime: 'EndTime',
      keyword: 'Keyword',
      lang: 'Lang',
      maxPeakMemory: 'MaxPeakMemory',
      maxScanSize: 'MaxScanSize',
      minPeakMemory: 'MinPeakMemory',
      minScanSize: 'MinScanSize',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      patternId: 'PatternId',
      queryCondition: 'QueryCondition',
      regionId: 'RegionId',
      resourceGroup: 'ResourceGroup',
      startTime: 'StartTime',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      DBClusterId: 'string',
      database: 'string',
      endTime: 'string',
      keyword: 'string',
      lang: 'string',
      maxPeakMemory: 'number',
      maxScanSize: 'number',
      minPeakMemory: 'number',
      minScanSize: 'number',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      patternId: 'string',
      queryCondition: 'string',
      regionId: 'string',
      resourceGroup: 'string',
      startTime: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisRecordsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  querys?: DescribeDiagnosisRecordsResponseBodyQuerys[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      querys: 'Querys',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      querys: { 'type': 'array', 'itemType': DescribeDiagnosisRecordsResponseBodyQuerys },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDiagnosisRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDiagnosisRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisSQLInfoRequest extends $tea.Model {
  DBClusterId?: string;
  lang?: string;
  processId?: string;
  processRcHost?: string;
  processStartTime?: number;
  processState?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      lang: 'Lang',
      processId: 'ProcessId',
      processRcHost: 'ProcessRcHost',
      processStartTime: 'ProcessStartTime',
      processState: 'ProcessState',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      lang: 'string',
      processId: 'string',
      processRcHost: 'string',
      processStartTime: 'number',
      processState: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisSQLInfoResponseBody extends $tea.Model {
  diagnosisSQLInfo?: string;
  requestId?: string;
  stageInfos?: DescribeDiagnosisSQLInfoResponseBodyStageInfos[];
  static names(): { [key: string]: string } {
    return {
      diagnosisSQLInfo: 'DiagnosisSQLInfo',
      requestId: 'RequestId',
      stageInfos: 'StageInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosisSQLInfo: 'string',
      requestId: 'string',
      stageInfos: { 'type': 'array', 'itemType': DescribeDiagnosisSQLInfoResponseBodyStageInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisSQLInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDiagnosisSQLInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDiagnosisSQLInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadRecordsRequest extends $tea.Model {
  DBClusterId?: string;
  lang?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      lang: 'Lang',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      lang: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadRecordsResponseBody extends $tea.Model {
  records?: DescribeDownloadRecordsResponseBodyRecords[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': DescribeDownloadRecordsResponseBodyRecords },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDownloadRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDownloadRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticPlanAttributeRequest extends $tea.Model {
  DBClusterId?: string;
  elasticPlanName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      elasticPlanName: 'ElasticPlanName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      elasticPlanName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticPlanAttributeResponseBody extends $tea.Model {
  elasticPlan?: DescribeElasticPlanAttributeResponseBodyElasticPlan;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticPlan: 'ElasticPlan',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticPlan: DescribeElasticPlanAttributeResponseBodyElasticPlan,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticPlanAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeElasticPlanAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeElasticPlanAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticPlanJobsRequest extends $tea.Model {
  DBClusterId?: string;
  elasticPlanName?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupName?: string;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      elasticPlanName: 'ElasticPlanName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupName: 'ResourceGroupName',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      elasticPlanName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupName: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticPlanJobsResponseBody extends $tea.Model {
  jobs?: DescribeElasticPlanJobsResponseBodyJobs[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': DescribeElasticPlanJobsResponseBodyJobs },
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

export class DescribeElasticPlanJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeElasticPlanJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeElasticPlanJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticPlanSpecificationsRequest extends $tea.Model {
  DBClusterId?: string;
  resourceGroupName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      resourceGroupName: 'ResourceGroupName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      resourceGroupName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticPlanSpecificationsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  specifications?: string[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      specifications: 'Specifications',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      specifications: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticPlanSpecificationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeElasticPlanSpecificationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeElasticPlanSpecificationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticPlansRequest extends $tea.Model {
  DBClusterId?: string;
  elasticPlanName?: string;
  enabled?: boolean;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      elasticPlanName: 'ElasticPlanName',
      enabled: 'Enabled',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupName: 'ResourceGroupName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      elasticPlanName: 'string',
      enabled: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticPlansResponseBody extends $tea.Model {
  elasticPlans?: DescribeElasticPlansResponseBodyElasticPlans[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      elasticPlans: 'ElasticPlans',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticPlans: { 'type': 'array', 'itemType': DescribeElasticPlansResponseBodyElasticPlans },
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

export class DescribeElasticPlansResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeElasticPlansResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeElasticPlansResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnabledPrivilegesRequest extends $tea.Model {
  DBClusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnabledPrivilegesResponseBody extends $tea.Model {
  data?: DescribeEnabledPrivilegesResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeEnabledPrivilegesResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnabledPrivilegesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeEnabledPrivilegesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeEnabledPrivilegesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePatternPerformanceRequest extends $tea.Model {
  DBClusterId?: string;
  endTime?: string;
  patternId?: string;
  regionId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      patternId: 'PatternId',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      patternId: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePatternPerformanceResponseBody extends $tea.Model {
  endTime?: string;
  performances?: DescribePatternPerformanceResponseBodyPerformances[];
  requestId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      performances: 'Performances',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      performances: { 'type': 'array', 'itemType': DescribePatternPerformanceResponseBodyPerformances },
      requestId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePatternPerformanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePatternPerformanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePatternPerformanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
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
  statusCode: number;
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeSQLPatternsRequest extends $tea.Model {
  DBClusterId?: string;
  endTime?: string;
  keyword?: string;
  lang?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      keyword: 'Keyword',
      lang: 'Lang',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      keyword: 'string',
      lang: 'string',
      order: 'string',
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

export class DescribeSQLPatternsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  patternDetails?: DescribeSQLPatternsResponseBodyPatternDetails[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      patternDetails: 'PatternDetails',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      patternDetails: { 'type': 'array', 'itemType': DescribeSQLPatternsResponseBodyPatternDetails },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSQLPatternsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSQLPatternsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSQLPatternsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSchemasRequest extends $tea.Model {
  DBClusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
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
  statusCode: number;
  body: DescribeSchemasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSchemasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSparkCodeLogRequest extends $tea.Model {
  DBClusterId?: string;
  jobId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      jobId: 'JobId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      jobId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSparkCodeLogResponseBody extends $tea.Model {
  log?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      log: 'Log',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      log: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSparkCodeLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSparkCodeLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSparkCodeLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSparkCodeOutputRequest extends $tea.Model {
  DBClusterId?: string;
  jobId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      jobId: 'JobId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      jobId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSparkCodeOutputResponseBody extends $tea.Model {
  message?: string;
  output?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      output: 'Output',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      output: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSparkCodeOutputResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSparkCodeOutputResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSparkCodeOutputResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSparkCodeWebUiRequest extends $tea.Model {
  DBClusterId?: string;
  jobId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      jobId: 'JobId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      jobId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSparkCodeWebUiResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  success?: boolean;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSparkCodeWebUiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSparkCodeWebUiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSparkCodeWebUiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlPatternRequest extends $tea.Model {
  DBClusterId?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  sqlPattern?: string;
  startTime?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sqlPattern: 'SqlPattern',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      sqlPattern: 'string',
      startTime: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlPatternResponseBody extends $tea.Model {
  items?: DescribeSqlPatternResponseBodyItems[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
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
      items: { 'type': 'array', 'itemType': DescribeSqlPatternResponseBodyItems },
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

export class DescribeSqlPatternResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSqlPatternResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSqlPatternResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableAccessCountRequest extends $tea.Model {
  DBClusterId?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  startTime?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTime: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableAccessCountResponseBody extends $tea.Model {
  items?: DescribeTableAccessCountResponseBodyItems[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
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
      items: { 'type': 'array', 'itemType': DescribeTableAccessCountResponseBodyItems },
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

export class DescribeTableAccessCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTableAccessCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTableAccessCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTablesRequest extends $tea.Model {
  DBClusterId?: string;
  regionId?: string;
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      schemaName: 'SchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      schemaName: 'string',
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

export class DisableElasticPlanRequest extends $tea.Model {
  DBClusterId?: string;
  elasticPlanName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      elasticPlanName: 'ElasticPlanName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      elasticPlanName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableElasticPlanResponseBody extends $tea.Model {
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

export class DisableElasticPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableElasticPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableElasticPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadDiagnosisRecordsRequest extends $tea.Model {
  clientIp?: string;
  DBClusterId?: string;
  database?: string;
  endTime?: string;
  keyword?: string;
  lang?: string;
  maxPeakMemory?: number;
  maxScanSize?: number;
  minPeakMemory?: number;
  minScanSize?: number;
  queryCondition?: string;
  regionId?: string;
  resourceGroup?: string;
  startTime?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      DBClusterId: 'DBClusterId',
      database: 'Database',
      endTime: 'EndTime',
      keyword: 'Keyword',
      lang: 'Lang',
      maxPeakMemory: 'MaxPeakMemory',
      maxScanSize: 'MaxScanSize',
      minPeakMemory: 'MinPeakMemory',
      minScanSize: 'MinScanSize',
      queryCondition: 'QueryCondition',
      regionId: 'RegionId',
      resourceGroup: 'ResourceGroup',
      startTime: 'StartTime',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      DBClusterId: 'string',
      database: 'string',
      endTime: 'string',
      keyword: 'string',
      lang: 'string',
      maxPeakMemory: 'number',
      maxScanSize: 'number',
      minPeakMemory: 'number',
      minScanSize: 'number',
      queryCondition: 'string',
      regionId: 'string',
      resourceGroup: 'string',
      startTime: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadDiagnosisRecordsResponseBody extends $tea.Model {
  downloadId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      downloadId: 'DownloadId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadDiagnosisRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DownloadDiagnosisRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DownloadDiagnosisRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableElasticPlanRequest extends $tea.Model {
  DBClusterId?: string;
  elasticPlanName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      elasticPlanName: 'ElasticPlanName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      elasticPlanName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableElasticPlanResponseBody extends $tea.Model {
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

export class EnableElasticPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableElasticPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableElasticPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseObjectsRequest extends $tea.Model {
  DBClusterId?: string;
  filterOwner?: string;
  filterSchemaName?: string;
  orderBy?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      filterOwner: 'FilterOwner',
      filterSchemaName: 'FilterSchemaName',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      filterOwner: 'string',
      filterSchemaName: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseObjectsResponseBody extends $tea.Model {
  data?: GetDatabaseObjectsResponseBodyData;
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
      data: GetDatabaseObjectsResponseBodyData,
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

export class GetDatabaseObjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDatabaseObjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDatabaseObjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppAttemptLogRequest extends $tea.Model {
  attemptId?: string;
  logLength?: number;
  static names(): { [key: string]: string } {
    return {
      attemptId: 'AttemptId',
      logLength: 'LogLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attemptId: 'string',
      logLength: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppAttemptLogResponseBody extends $tea.Model {
  data?: GetSparkAppAttemptLogResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSparkAppAttemptLogResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppAttemptLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSparkAppAttemptLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSparkAppAttemptLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppInfoRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppInfoResponseBody extends $tea.Model {
  data?: SparkAppInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SparkAppInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSparkAppInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSparkAppInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppLogRequest extends $tea.Model {
  appId?: string;
  logLength?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      logLength: 'LogLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      logLength: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppLogResponseBody extends $tea.Model {
  data?: GetSparkAppLogResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSparkAppLogResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSparkAppLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSparkAppLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppMetricsRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppMetricsResponseBody extends $tea.Model {
  data?: GetSparkAppMetricsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSparkAppMetricsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppMetricsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSparkAppMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSparkAppMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppStateRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppStateResponseBody extends $tea.Model {
  data?: GetSparkAppStateResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSparkAppStateResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppStateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSparkAppStateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSparkAppStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppWebUiAddressRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppWebUiAddressResponseBody extends $tea.Model {
  data?: GetSparkAppWebUiAddressResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSparkAppWebUiAddressResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppWebUiAddressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSparkAppWebUiAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSparkAppWebUiAddressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkConfigLogPathRequest extends $tea.Model {
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkConfigLogPathResponseBody extends $tea.Model {
  data?: GetSparkConfigLogPathResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSparkConfigLogPathResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkConfigLogPathResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSparkConfigLogPathResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSparkConfigLogPathResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkDefinitionsRequest extends $tea.Model {
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkDefinitionsResponseBody extends $tea.Model {
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

export class GetSparkDefinitionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSparkDefinitionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSparkDefinitionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkLogAnalyzeTaskRequest extends $tea.Model {
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

export class GetSparkLogAnalyzeTaskResponseBody extends $tea.Model {
  data?: SparkAnalyzeLogTask;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SparkAnalyzeLogTask,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkLogAnalyzeTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSparkLogAnalyzeTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSparkLogAnalyzeTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkSQLEngineStateRequest extends $tea.Model {
  DBClusterId?: string;
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      resourceGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkSQLEngineStateResponseBody extends $tea.Model {
  data?: GetSparkSQLEngineStateResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSparkSQLEngineStateResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkSQLEngineStateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSparkSQLEngineStateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSparkSQLEngineStateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkTemplateFileContentRequest extends $tea.Model {
  DBClusterId?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkTemplateFileContentResponseBody extends $tea.Model {
  data?: GetSparkTemplateFileContentResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSparkTemplateFileContentResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkTemplateFileContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSparkTemplateFileContentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSparkTemplateFileContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkTemplateFolderTreeRequest extends $tea.Model {
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkTemplateFolderTreeResponseBody extends $tea.Model {
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

export class GetSparkTemplateFolderTreeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSparkTemplateFolderTreeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSparkTemplateFolderTreeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkTemplateFullTreeRequest extends $tea.Model {
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkTemplateFullTreeResponseBody extends $tea.Model {
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

export class GetSparkTemplateFullTreeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSparkTemplateFullTreeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSparkTemplateFullTreeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableRequest extends $tea.Model {
  DBClusterId?: string;
  dbName?: string;
  regionId?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      dbName: 'DbName',
      regionId: 'RegionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      dbName: 'string',
      regionId: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  table?: TableModel;
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
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      table: TableModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTableResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class GetTableColumnsRequest extends $tea.Model {
  columnName?: string;
  DBClusterId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  schemaName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      DBClusterId: 'DBClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      schemaName: 'SchemaName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      DBClusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      schemaName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableColumnsResponseBody extends $tea.Model {
  data?: GetTableColumnsResponseBodyData;
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
      data: GetTableColumnsResponseBodyData,
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

export class GetTableColumnsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTableColumnsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTableColumnsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableDDLRequest extends $tea.Model {
  DBClusterId?: string;
  regionId?: string;
  schemaName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      schemaName: 'SchemaName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      schemaName: 'string',
      tableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableDDLResponseBody extends $tea.Model {
  requestId?: string;
  SQL?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SQL: 'SQL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SQL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableDDLResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTableDDLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTableDDLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableObjectsRequest extends $tea.Model {
  DBClusterId?: string;
  filterDescription?: string;
  filterOwner?: string;
  filterTblName?: string;
  filterTblType?: string;
  orderBy?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      filterDescription: 'FilterDescription',
      filterOwner: 'FilterOwner',
      filterTblName: 'FilterTblName',
      filterTblType: 'FilterTblType',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      schemaName: 'SchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      filterDescription: 'string',
      filterOwner: 'string',
      filterTblName: 'string',
      filterTblType: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      schemaName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableObjectsResponseBody extends $tea.Model {
  data?: GetTableObjectsResponseBodyData;
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
      data: GetTableObjectsResponseBodyData,
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

export class GetTableObjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTableObjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTableObjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetViewDDLRequest extends $tea.Model {
  DBClusterId?: string;
  regionId?: string;
  schemaName?: string;
  viewName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      schemaName: 'SchemaName',
      viewName: 'ViewName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      schemaName: 'string',
      viewName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetViewDDLResponseBody extends $tea.Model {
  requestId?: string;
  SQL?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SQL: 'SQL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SQL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetViewDDLResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetViewDDLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetViewDDLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetViewObjectsRequest extends $tea.Model {
  DBClusterId?: string;
  filterOwner?: string;
  filterViewName?: string;
  filterViewType?: string;
  orderBy?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      filterOwner: 'FilterOwner',
      filterViewName: 'FilterViewName',
      filterViewType: 'FilterViewType',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      schemaName: 'SchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      filterOwner: 'string',
      filterViewName: 'string',
      filterViewType: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      schemaName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetViewObjectsResponseBody extends $tea.Model {
  data?: GetViewObjectsResponseBodyData;
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
      data: GetViewObjectsResponseBodyData,
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

export class GetViewObjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetViewObjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetViewObjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillSparkAppRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillSparkAppResponseBody extends $tea.Model {
  data?: KillSparkAppResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: KillSparkAppResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillSparkAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: KillSparkAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: KillSparkAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillSparkLogAnalyzeTaskRequest extends $tea.Model {
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

export class KillSparkLogAnalyzeTaskResponseBody extends $tea.Model {
  data?: SparkAnalyzeLogTask;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SparkAnalyzeLogTask,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillSparkLogAnalyzeTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: KillSparkLogAnalyzeTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: KillSparkLogAnalyzeTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillSparkSQLEngineRequest extends $tea.Model {
  DBClusterId?: string;
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      resourceGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillSparkSQLEngineResponseBody extends $tea.Model {
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

export class KillSparkSQLEngineResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: KillSparkSQLEngineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: KillSparkSQLEngineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkAppAttemptsRequest extends $tea.Model {
  appId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkAppAttemptsResponseBody extends $tea.Model {
  data?: ListSparkAppAttemptsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListSparkAppAttemptsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkAppAttemptsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSparkAppAttemptsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSparkAppAttemptsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkAppsRequest extends $tea.Model {
  DBClusterId?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkAppsResponseBody extends $tea.Model {
  data?: ListSparkAppsResponseBodyData;
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
      data: ListSparkAppsResponseBodyData,
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

export class ListSparkAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSparkAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSparkAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkLogAnalyzeTasksRequest extends $tea.Model {
  DBClusterId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkLogAnalyzeTasksResponseBody extends $tea.Model {
  data?: ListSparkLogAnalyzeTasksResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListSparkLogAnalyzeTasksResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkLogAnalyzeTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSparkLogAnalyzeTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSparkLogAnalyzeTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkTemplateFileIdsRequest extends $tea.Model {
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkTemplateFileIdsResponseBody extends $tea.Model {
  data?: number[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'number' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkTemplateFileIdsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSparkTemplateFileIdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSparkTemplateFileIdsResponseBody,
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
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      DBClusterId: 'string',
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

export class ModifyAccountPrivilegesRequest extends $tea.Model {
  accountName?: string;
  accountPrivileges?: ModifyAccountPrivilegesRequestAccountPrivileges[];
  DBClusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPrivileges: 'AccountPrivileges',
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPrivileges: { 'type': 'array', 'itemType': ModifyAccountPrivilegesRequestAccountPrivileges },
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountPrivilegesShrinkRequest extends $tea.Model {
  accountName?: string;
  accountPrivilegesShrink?: string;
  DBClusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPrivilegesShrink: 'AccountPrivileges',
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPrivilegesShrink: 'string',
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountPrivilegesResponseBody extends $tea.Model {
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

export class ModifyAccountPrivilegesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyAccountPrivilegesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAccountPrivilegesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAuditLogConfigRequest extends $tea.Model {
  auditLogStatus?: string;
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      auditLogStatus: 'AuditLogStatus',
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
      auditLogStatus: 'string',
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

export class ModifyAuditLogConfigResponseBody extends $tea.Model {
  requestId?: string;
  updateSucceed?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      updateSucceed: 'UpdateSucceed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      updateSucceed: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAuditLogConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyAuditLogConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyAuditLogConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterAccessWhiteListRequest extends $tea.Model {
  DBClusterIPArrayAttribute?: string;
  DBClusterIPArrayName?: string;
  DBClusterId?: string;
  modifyMode?: string;
  securityIps?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterIPArrayAttribute: 'DBClusterIPArrayAttribute',
      DBClusterIPArrayName: 'DBClusterIPArrayName',
      DBClusterId: 'DBClusterId',
      modifyMode: 'ModifyMode',
      securityIps: 'SecurityIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterIPArrayAttribute: 'string',
      DBClusterIPArrayName: 'string',
      DBClusterId: 'string',
      modifyMode: 'string',
      securityIps: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterAccessWhiteListResponseBody extends $tea.Model {
  DBClusterId?: string;
  requestId?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      requestId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterAccessWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyClusterAccessWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyClusterAccessWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterConnectionStringRequest extends $tea.Model {
  connectionStringPrefix?: string;
  currentConnectionString?: string;
  DBClusterId?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      connectionStringPrefix: 'ConnectionStringPrefix',
      currentConnectionString: 'CurrentConnectionString',
      DBClusterId: 'DBClusterId',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStringPrefix: 'string',
      currentConnectionString: 'string',
      DBClusterId: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterConnectionStringResponseBody extends $tea.Model {
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

export class ModifyClusterConnectionStringResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyClusterConnectionStringResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyClusterConnectionStringResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterRequest extends $tea.Model {
  computeResource?: string;
  DBClusterId?: string;
  enableDefaultResourcePool?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  storageResource?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'ComputeResource',
      DBClusterId: 'DBClusterId',
      enableDefaultResourcePool: 'EnableDefaultResourcePool',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      storageResource: 'StorageResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: 'string',
      DBClusterId: 'string',
      enableDefaultResourcePool: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      storageResource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterResponseBody extends $tea.Model {
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

export class ModifyDBClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDBClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDBClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterDescriptionRequest extends $tea.Model {
  DBClusterDescription?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterDescription: 'string',
      DBClusterId: 'string',
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
  statusCode: number;
  body: ModifyDBClusterDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      maintainTime: 'MaintainTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      maintainTime: 'string',
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
  statusCode: number;
  body: ModifyDBClusterMaintainTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDBClusterMaintainTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBResourceGroupRequest extends $tea.Model {
  DBClusterId?: string;
  groupName?: string;
  groupType?: string;
  maxComputeResource?: string;
  minComputeResource?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      groupName: 'GroupName',
      groupType: 'GroupType',
      maxComputeResource: 'MaxComputeResource',
      minComputeResource: 'MinComputeResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      groupName: 'string',
      groupType: 'string',
      maxComputeResource: 'string',
      minComputeResource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBResourceGroupResponseBody extends $tea.Model {
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

export class ModifyDBResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDBResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDBResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElasticPlanRequest extends $tea.Model {
  cronExpression?: string;
  DBClusterId?: string;
  elasticPlanName?: string;
  endTime?: string;
  startTime?: string;
  targetSize?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      DBClusterId: 'DBClusterId',
      elasticPlanName: 'ElasticPlanName',
      endTime: 'EndTime',
      startTime: 'StartTime',
      targetSize: 'TargetSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      DBClusterId: 'string',
      elasticPlanName: 'string',
      endTime: 'string',
      startTime: 'string',
      targetSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElasticPlanResponseBody extends $tea.Model {
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

export class ModifyElasticPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyElasticPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyElasticPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreloadSparkAppMetricsRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreloadSparkAppMetricsResponseBody extends $tea.Model {
  data?: PreloadSparkAppMetricsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: PreloadSparkAppMetricsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreloadSparkAppMetricsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PreloadSparkAppMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PreloadSparkAppMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseClusterPublicConnectionRequest extends $tea.Model {
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
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
  statusCode: number;
  body: ReleaseClusterPublicConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleaseClusterPublicConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordRequest extends $tea.Model {
  accountDescription?: string;
  accountName?: string;
  accountPassword?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountPassword: 'string',
      DBClusterId: 'string',
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
  statusCode: number;
  body: ResetAccountPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetAccountPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSparkAppLogRootPathRequest extends $tea.Model {
  DBClusterId?: string;
  ossLogPath?: string;
  useDefaultOss?: boolean;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ossLogPath: 'OssLogPath',
      useDefaultOss: 'UseDefaultOss',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ossLogPath: 'string',
      useDefaultOss: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSparkAppLogRootPathResponseBody extends $tea.Model {
  data?: SetSparkAppLogRootPathResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SetSparkAppLogRootPathResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSparkAppLogRootPathResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetSparkAppLogRootPathResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetSparkAppLogRootPathResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSparkSQLEngineRequest extends $tea.Model {
  config?: string;
  DBClusterId?: string;
  jars?: string;
  maxExecutor?: number;
  minExecutor?: number;
  resourceGroupName?: string;
  slotNum?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      DBClusterId: 'DBClusterId',
      jars: 'Jars',
      maxExecutor: 'MaxExecutor',
      minExecutor: 'MinExecutor',
      resourceGroupName: 'ResourceGroupName',
      slotNum: 'SlotNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      DBClusterId: 'string',
      jars: 'string',
      maxExecutor: 'number',
      minExecutor: 'number',
      resourceGroupName: 'string',
      slotNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSparkSQLEngineResponseBody extends $tea.Model {
  data?: StartSparkSQLEngineResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: StartSparkSQLEngineResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSparkSQLEngineResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartSparkSQLEngineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartSparkSQLEngineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSparkAppRequest extends $tea.Model {
  agentSource?: string;
  agentVersion?: string;
  appName?: string;
  appType?: string;
  DBClusterId?: string;
  data?: string;
  resourceGroupName?: string;
  templateFileId?: number;
  static names(): { [key: string]: string } {
    return {
      agentSource: 'AgentSource',
      agentVersion: 'AgentVersion',
      appName: 'AppName',
      appType: 'AppType',
      DBClusterId: 'DBClusterId',
      data: 'Data',
      resourceGroupName: 'ResourceGroupName',
      templateFileId: 'TemplateFileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSource: 'string',
      agentVersion: 'string',
      appName: 'string',
      appType: 'string',
      DBClusterId: 'string',
      data: 'string',
      resourceGroupName: 'string',
      templateFileId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSparkAppResponseBody extends $tea.Model {
  data?: SubmitSparkAppResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SubmitSparkAppResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSparkAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitSparkAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitSparkAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSparkLogAnalyzeTaskRequest extends $tea.Model {
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSparkLogAnalyzeTaskResponseBody extends $tea.Model {
  data?: SparkAnalyzeLogTask;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SparkAnalyzeLogTask,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSparkLogAnalyzeTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitSparkLogAnalyzeTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitSparkLogAnalyzeTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindAccountRequest extends $tea.Model {
  accountName?: string;
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindAccountResponseBody extends $tea.Model {
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

export class UnbindAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnbindAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnbindAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSparkTemplateFileRequest extends $tea.Model {
  content?: string;
  DBClusterId?: string;
  id?: number;
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      DBClusterId: 'DBClusterId',
      id: 'Id',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      DBClusterId: 'string',
      id: 'number',
      resourceGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSparkTemplateFileResponseBody extends $tea.Model {
  data?: UpdateSparkTemplateFileResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateSparkTemplateFileResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSparkTemplateFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSparkTemplateFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSparkTemplateFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FiltersExecutionTimeRange extends $tea.Model {
  maxTimeInSeconds?: number;
  minTimeInSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      maxTimeInSeconds: 'MaxTimeInSeconds',
      minTimeInSeconds: 'MinTimeInSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxTimeInSeconds: 'number',
      minTimeInSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FiltersSubmitTimeRange extends $tea.Model {
  maxTimeInMills?: number;
  minTimeInMills?: number;
  static names(): { [key: string]: string } {
    return {
      maxTimeInMills: 'MaxTimeInMills',
      minTimeInMills: 'MinTimeInMills',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxTimeInMills: 'number',
      minTimeInMills: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FiltersTermiatedTimeRange extends $tea.Model {
  maxTimeInMills?: number;
  minTimeInMills?: number;
  static names(): { [key: string]: string } {
    return {
      maxTimeInMills: 'MaxTimeInMills',
      minTimeInMills: 'MinTimeInMills',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxTimeInMills: 'number',
      minTimeInMills: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBClusterRequestTag extends $tea.Model {
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

export class CreateOssSubDirectoryResponseBodyData extends $tea.Model {
  clientCRC?: number;
  ETag?: string;
  requestId?: string;
  serverCRC?: number;
  static names(): { [key: string]: string } {
    return {
      clientCRC: 'ClientCRC',
      ETag: 'ETag',
      requestId: 'RequestId',
      serverCRC: 'ServerCRC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientCRC: 'number',
      ETag: 'string',
      requestId: 'string',
      serverCRC: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSparkTemplateResponseBodyData extends $tea.Model {
  succeeded?: boolean;
  static names(): { [key: string]: string } {
    return {
      succeeded: 'Succeeded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      succeeded: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSparkTemplateResponseBodyData extends $tea.Model {
  succeeded?: boolean;
  static names(): { [key: string]: string } {
    return {
      succeeded: 'Succeeded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      succeeded: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSparkTemplateFileResponseBodyData extends $tea.Model {
  succeeded?: boolean;
  static names(): { [key: string]: string } {
    return {
      succeeded: 'Succeeded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      succeeded: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAllPrivilegesResponseBodyDataResultPrivilegeObject extends $tea.Model {
  column?: string;
  database?: string;
  description?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      database: 'Database',
      description: 'Description',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
      database: 'string',
      description: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAllPrivilegesResponseBodyDataResult extends $tea.Model {
  privilegeObject?: DescribeAccountAllPrivilegesResponseBodyDataResultPrivilegeObject;
  privilegeType?: string;
  privileges?: string[];
  static names(): { [key: string]: string } {
    return {
      privilegeObject: 'PrivilegeObject',
      privilegeType: 'PrivilegeType',
      privileges: 'Privileges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privilegeObject: DescribeAccountAllPrivilegesResponseBodyDataResultPrivilegeObject,
      privilegeType: 'string',
      privileges: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAllPrivilegesResponseBodyData extends $tea.Model {
  marker?: string;
  result?: DescribeAccountAllPrivilegesResponseBodyDataResult[];
  truncated?: boolean;
  static names(): { [key: string]: string } {
    return {
      marker: 'Marker',
      result: 'Result',
      truncated: 'Truncated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      result: { 'type': 'array', 'itemType': DescribeAccountAllPrivilegesResponseBodyDataResult },
      truncated: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountPrivilegeObjectsResponseBodyData extends $tea.Model {
  column?: string;
  database?: string;
  description?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      database: 'Database',
      description: 'Description',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
      database: 'string',
      description: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountPrivilegesResponseBodyDataPrivilegeObject extends $tea.Model {
  column?: string;
  database?: string;
  description?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      database: 'Database',
      description: 'Description',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
      database: 'string',
      description: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountPrivilegesResponseBodyData extends $tea.Model {
  privilegeObject?: DescribeAccountPrivilegesResponseBodyDataPrivilegeObject;
  privilegeType?: string;
  privileges?: string[];
  static names(): { [key: string]: string } {
    return {
      privilegeObject: 'PrivilegeObject',
      privilegeType: 'PrivilegeType',
      privileges: 'Privileges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privilegeObject: DescribeAccountPrivilegesResponseBodyDataPrivilegeObject,
      privilegeType: 'string',
      privileges: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccountListDBAccount extends $tea.Model {
  accountDescription?: string;
  accountName?: string;
  accountStatus?: string;
  accountType?: string;
  ramUsers?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountStatus: 'AccountStatus',
      accountType: 'AccountType',
      ramUsers: 'RamUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountStatus: 'string',
      accountType: 'string',
      ramUsers: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBodyAccountList extends $tea.Model {
  DBAccount?: DescribeAccountsResponseBodyAccountListDBAccount[];
  static names(): { [key: string]: string } {
    return {
      DBAccount: 'DBAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBAccount: { 'type': 'array', 'itemType': DescribeAccountsResponseBodyAccountListDBAccount },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdbMySqlColumnsResponseBodyColumns extends $tea.Model {
  comment?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      name: 'string',
      type: 'string',
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

export class DescribeApsActionLogsResponseBodyActionLogs extends $tea.Model {
  context?: string;
  stage?: string;
  state?: string;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      stage: 'Stage',
      state: 'State',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
      stage: 'string',
      state: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApsResourceGroupsResponseBodyDataResourceGroups extends $tea.Model {
  available?: boolean;
  cuOptions?: number[];
  groupName?: string;
  groupType?: string;
  leftComputeResource?: number;
  maxComputeResource?: number;
  minComputeResource?: number;
  static names(): { [key: string]: string } {
    return {
      available: 'Available',
      cuOptions: 'CuOptions',
      groupName: 'GroupName',
      groupType: 'GroupType',
      leftComputeResource: 'LeftComputeResource',
      maxComputeResource: 'MaxComputeResource',
      minComputeResource: 'MinComputeResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'boolean',
      cuOptions: { 'type': 'array', 'itemType': 'number' },
      groupName: 'string',
      groupType: 'string',
      leftComputeResource: 'number',
      maxComputeResource: 'number',
      minComputeResource: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApsResourceGroupsResponseBodyData extends $tea.Model {
  resourceGroups?: DescribeApsResourceGroupsResponseBodyDataResourceGroups[];
  step?: number;
  static names(): { [key: string]: string } {
    return {
      resourceGroups: 'ResourceGroups',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroups: { 'type': 'array', 'itemType': DescribeApsResourceGroupsResponseBodyDataResourceGroups },
      step: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuditLogRecordsResponseBodyItems extends $tea.Model {
  connId?: string;
  DBName?: string;
  executeTime?: string;
  hostAddress?: string;
  processID?: string;
  SQLText?: string;
  SQLType?: string;
  succeed?: string;
  totalTime?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      connId: 'ConnId',
      DBName: 'DBName',
      executeTime: 'ExecuteTime',
      hostAddress: 'HostAddress',
      processID: 'ProcessID',
      SQLText: 'SQLText',
      SQLType: 'SQLType',
      succeed: 'Succeed',
      totalTime: 'TotalTime',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connId: 'string',
      DBName: 'string',
      executeTime: 'string',
      hostAddress: 'string',
      processID: 'string',
      SQLText: 'string',
      SQLType: 'string',
      succeed: 'string',
      totalTime: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAccessWhiteListResponseBodyItemsIPArray extends $tea.Model {
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

export class DescribeClusterAccessWhiteListResponseBodyItems extends $tea.Model {
  IPArray?: DescribeClusterAccessWhiteListResponseBodyItemsIPArray[];
  static names(): { [key: string]: string } {
    return {
      IPArray: 'IPArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPArray: { 'type': 'array', 'itemType': DescribeClusterAccessWhiteListResponseBodyItemsIPArray },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNetInfoResponseBodyItemsAddress extends $tea.Model {
  connectionString?: string;
  connectionStringPrefix?: string;
  IPAddress?: string;
  netType?: string;
  port?: string;
  VPCId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      connectionStringPrefix: 'ConnectionStringPrefix',
      IPAddress: 'IPAddress',
      netType: 'NetType',
      port: 'Port',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      connectionStringPrefix: 'string',
      IPAddress: 'string',
      netType: 'string',
      port: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNetInfoResponseBodyItems extends $tea.Model {
  address?: DescribeClusterNetInfoResponseBodyItemsAddress[];
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: { 'type': 'array', 'itemType': DescribeClusterNetInfoResponseBodyItemsAddress },
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

export class DescribeDBClusterAttributeResponseBodyItemsDBClusterTagsTag extends $tea.Model {
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

export class DescribeDBClusterAttributeResponseBodyItemsDBClusterTags extends $tea.Model {
  tag?: DescribeDBClusterAttributeResponseBodyItemsDBClusterTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBClusterAttributeResponseBodyItemsDBClusterTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponseBodyItemsDBCluster extends $tea.Model {
  commodityCode?: string;
  computeResource?: string;
  computeResourceTotal?: string;
  connectionString?: string;
  creationTime?: string;
  DBClusterDescription?: string;
  DBClusterId?: string;
  DBClusterNetworkType?: string;
  DBClusterStatus?: string;
  DBClusterType?: string;
  DBVersion?: string;
  engine?: string;
  engineVersion?: string;
  expireTime?: string;
  expired?: string;
  lockMode?: string;
  lockReason?: string;
  maintainTime?: string;
  mode?: string;
  payType?: string;
  port?: number;
  regionId?: string;
  reservedACU?: string;
  resourceGroupId?: string;
  storageResource?: string;
  storageResourceTotal?: string;
  tags?: DescribeDBClusterAttributeResponseBodyItemsDBClusterTags;
  userENIStatus?: boolean;
  VPCId?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      computeResource: 'ComputeResource',
      computeResourceTotal: 'ComputeResourceTotal',
      connectionString: 'ConnectionString',
      creationTime: 'CreationTime',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterStatus: 'DBClusterStatus',
      DBClusterType: 'DBClusterType',
      DBVersion: 'DBVersion',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      maintainTime: 'MaintainTime',
      mode: 'Mode',
      payType: 'PayType',
      port: 'Port',
      regionId: 'RegionId',
      reservedACU: 'ReservedACU',
      resourceGroupId: 'ResourceGroupId',
      storageResource: 'StorageResource',
      storageResourceTotal: 'StorageResourceTotal',
      tags: 'Tags',
      userENIStatus: 'UserENIStatus',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      computeResource: 'string',
      computeResourceTotal: 'string',
      connectionString: 'string',
      creationTime: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterNetworkType: 'string',
      DBClusterStatus: 'string',
      DBClusterType: 'string',
      DBVersion: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      expired: 'string',
      lockMode: 'string',
      lockReason: 'string',
      maintainTime: 'string',
      mode: 'string',
      payType: 'string',
      port: 'number',
      regionId: 'string',
      reservedACU: 'string',
      resourceGroupId: 'string',
      storageResource: 'string',
      storageResourceTotal: 'string',
      tags: DescribeDBClusterAttributeResponseBodyItemsDBClusterTags,
      userENIStatus: 'boolean',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponseBodyItems extends $tea.Model {
  DBCluster?: DescribeDBClusterAttributeResponseBodyItemsDBCluster[];
  static names(): { [key: string]: string } {
    return {
      DBCluster: 'DBCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBCluster: { 'type': 'array', 'itemType': DescribeDBClusterAttributeResponseBodyItemsDBCluster },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterHealthStatusResponseBodyCS extends $tea.Model {
  activeCount?: number;
  expectedCount?: number;
  riskCount?: number;
  status?: string;
  unavailableCount?: number;
  static names(): { [key: string]: string } {
    return {
      activeCount: 'ActiveCount',
      expectedCount: 'ExpectedCount',
      riskCount: 'RiskCount',
      status: 'Status',
      unavailableCount: 'UnavailableCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCount: 'number',
      expectedCount: 'number',
      riskCount: 'number',
      status: 'string',
      unavailableCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterHealthStatusResponseBodyExecutor extends $tea.Model {
  activeCount?: number;
  expectedCount?: number;
  riskCount?: number;
  status?: string;
  unavailableCount?: number;
  static names(): { [key: string]: string } {
    return {
      activeCount: 'ActiveCount',
      expectedCount: 'ExpectedCount',
      riskCount: 'RiskCount',
      status: 'Status',
      unavailableCount: 'UnavailableCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCount: 'number',
      expectedCount: 'number',
      riskCount: 'number',
      status: 'string',
      unavailableCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterHealthStatusResponseBodyWorker extends $tea.Model {
  activeCount?: number;
  expectedCount?: number;
  riskCount?: number;
  status?: string;
  unavailableCount?: number;
  static names(): { [key: string]: string } {
    return {
      activeCount: 'ActiveCount',
      expectedCount: 'ExpectedCount',
      riskCount: 'RiskCount',
      status: 'Status',
      unavailableCount: 'UnavailableCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeCount: 'number',
      expectedCount: 'number',
      riskCount: 'number',
      status: 'string',
      unavailableCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponseBodyPerformancesSeries extends $tea.Model {
  name?: string;
  tags?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      tags: 'Tags',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      tags: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponseBodyPerformances extends $tea.Model {
  key?: string;
  series?: DescribeDBClusterPerformanceResponseBodyPerformancesSeries[];
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      series: 'Series',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class DescribeDBClustersResponseBodyItemsDBClusterTagsTag extends $tea.Model {
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

export class DescribeDBClustersResponseBodyItemsDBClusterTags extends $tea.Model {
  tag?: DescribeDBClustersResponseBodyItemsDBClusterTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBClustersResponseBodyItemsDBClusterTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBodyItemsDBCluster extends $tea.Model {
  commodityCode?: string;
  computeResource?: string;
  connectionString?: string;
  createTime?: string;
  DBClusterDescription?: string;
  DBClusterId?: string;
  DBClusterNetworkType?: string;
  DBClusterStatus?: string;
  DBClusterType?: string;
  DBVersion?: string;
  engine?: string;
  expireTime?: string;
  expired?: string;
  lockMode?: string;
  lockReason?: string;
  mode?: string;
  payType?: string;
  port?: string;
  regionId?: string;
  reservedACU?: string;
  resourceGroupId?: string;
  storageResource?: string;
  tags?: DescribeDBClustersResponseBodyItemsDBClusterTags;
  VPCId?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      computeResource: 'ComputeResource',
      connectionString: 'ConnectionString',
      createTime: 'CreateTime',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterStatus: 'DBClusterStatus',
      DBClusterType: 'DBClusterType',
      DBVersion: 'DBVersion',
      engine: 'Engine',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      mode: 'Mode',
      payType: 'PayType',
      port: 'Port',
      regionId: 'RegionId',
      reservedACU: 'ReservedACU',
      resourceGroupId: 'ResourceGroupId',
      storageResource: 'StorageResource',
      tags: 'Tags',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      computeResource: 'string',
      connectionString: 'string',
      createTime: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterNetworkType: 'string',
      DBClusterStatus: 'string',
      DBClusterType: 'string',
      DBVersion: 'string',
      engine: 'string',
      expireTime: 'string',
      expired: 'string',
      lockMode: 'string',
      lockReason: 'string',
      mode: 'string',
      payType: 'string',
      port: 'string',
      regionId: 'string',
      reservedACU: 'string',
      resourceGroupId: 'string',
      storageResource: 'string',
      tags: DescribeDBClustersResponseBodyItemsDBClusterTags,
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBodyItems extends $tea.Model {
  DBCluster?: DescribeDBClustersResponseBodyItemsDBCluster[];
  static names(): { [key: string]: string } {
    return {
      DBCluster: 'DBCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBCluster: { 'type': 'array', 'itemType': DescribeDBClustersResponseBodyItemsDBCluster },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBResourceGroupResponseBodyGroupsInfo extends $tea.Model {
  createTime?: string;
  elasticMinComputeResource?: string;
  groupName?: string;
  groupType?: string;
  groupUsers?: string;
  maxComputeResource?: string;
  minComputeResource?: string;
  status?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      elasticMinComputeResource: 'ElasticMinComputeResource',
      groupName: 'GroupName',
      groupType: 'GroupType',
      groupUsers: 'GroupUsers',
      maxComputeResource: 'MaxComputeResource',
      minComputeResource: 'MinComputeResource',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      elasticMinComputeResource: 'string',
      groupName: 'string',
      groupType: 'string',
      groupUsers: 'string',
      maxComputeResource: 'string',
      minComputeResource: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisRecordsResponseBodyQuerys extends $tea.Model {
  clientIp?: string;
  cost?: number;
  database?: string;
  etlWriteRows?: number;
  executionTime?: number;
  outputDataSize?: number;
  outputRows?: number;
  peakMemory?: number;
  processId?: string;
  queueTime?: number;
  rcHost?: string;
  resourceCostRank?: number;
  resourceGroup?: string;
  SQL?: string;
  SQLTruncated?: boolean;
  SQLTruncatedThreshold?: number;
  scanRows?: number;
  scanSize?: number;
  startTime?: number;
  status?: string;
  totalPlanningTime?: number;
  totalStages?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      cost: 'Cost',
      database: 'Database',
      etlWriteRows: 'EtlWriteRows',
      executionTime: 'ExecutionTime',
      outputDataSize: 'OutputDataSize',
      outputRows: 'OutputRows',
      peakMemory: 'PeakMemory',
      processId: 'ProcessId',
      queueTime: 'QueueTime',
      rcHost: 'RcHost',
      resourceCostRank: 'ResourceCostRank',
      resourceGroup: 'ResourceGroup',
      SQL: 'SQL',
      SQLTruncated: 'SQLTruncated',
      SQLTruncatedThreshold: 'SQLTruncatedThreshold',
      scanRows: 'ScanRows',
      scanSize: 'ScanSize',
      startTime: 'StartTime',
      status: 'Status',
      totalPlanningTime: 'TotalPlanningTime',
      totalStages: 'TotalStages',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      cost: 'number',
      database: 'string',
      etlWriteRows: 'number',
      executionTime: 'number',
      outputDataSize: 'number',
      outputRows: 'number',
      peakMemory: 'number',
      processId: 'string',
      queueTime: 'number',
      rcHost: 'string',
      resourceCostRank: 'number',
      resourceGroup: 'string',
      SQL: 'string',
      SQLTruncated: 'boolean',
      SQLTruncatedThreshold: 'number',
      scanRows: 'number',
      scanSize: 'number',
      startTime: 'number',
      status: 'string',
      totalPlanningTime: 'number',
      totalStages: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisSQLInfoResponseBodyStageInfos extends $tea.Model {
  inputDataSize?: number;
  inputRows?: number;
  operatorCost?: number;
  outputDataSize?: number;
  outputRows?: number;
  peakMemory?: number;
  progress?: number;
  stageId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      inputDataSize: 'InputDataSize',
      inputRows: 'InputRows',
      operatorCost: 'OperatorCost',
      outputDataSize: 'OutputDataSize',
      outputRows: 'OutputRows',
      peakMemory: 'PeakMemory',
      progress: 'Progress',
      stageId: 'StageId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputDataSize: 'number',
      inputRows: 'number',
      operatorCost: 'number',
      outputDataSize: 'number',
      outputRows: 'number',
      peakMemory: 'number',
      progress: 'number',
      stageId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadRecordsResponseBodyRecords extends $tea.Model {
  downloadId?: number;
  exceptionMsg?: string;
  fileName?: string;
  status?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      downloadId: 'DownloadId',
      exceptionMsg: 'ExceptionMsg',
      fileName: 'FileName',
      status: 'Status',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadId: 'number',
      exceptionMsg: 'string',
      fileName: 'string',
      status: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticPlanAttributeResponseBodyElasticPlan extends $tea.Model {
  autoScale?: boolean;
  cronExpression?: string;
  elasticPlanName?: string;
  enabled?: boolean;
  endTime?: string;
  resourceGroupName?: string;
  startTime?: string;
  targetSize?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoScale: 'AutoScale',
      cronExpression: 'CronExpression',
      elasticPlanName: 'ElasticPlanName',
      enabled: 'Enabled',
      endTime: 'EndTime',
      resourceGroupName: 'ResourceGroupName',
      startTime: 'StartTime',
      targetSize: 'TargetSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScale: 'boolean',
      cronExpression: 'string',
      elasticPlanName: 'string',
      enabled: 'boolean',
      endTime: 'string',
      resourceGroupName: 'string',
      startTime: 'string',
      targetSize: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticPlanJobsResponseBodyJobs extends $tea.Model {
  elasticAcu?: string;
  elasticPlanName?: string;
  endTime?: string;
  instanceSize?: number;
  reserveAcu?: string;
  resourceGroupName?: string;
  startTime?: string;
  status?: string;
  targetSize?: string;
  totalAcu?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      elasticAcu: 'ElasticAcu',
      elasticPlanName: 'ElasticPlanName',
      endTime: 'EndTime',
      instanceSize: 'InstanceSize',
      reserveAcu: 'ReserveAcu',
      resourceGroupName: 'ResourceGroupName',
      startTime: 'StartTime',
      status: 'Status',
      targetSize: 'TargetSize',
      totalAcu: 'TotalAcu',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticAcu: 'string',
      elasticPlanName: 'string',
      endTime: 'string',
      instanceSize: 'number',
      reserveAcu: 'string',
      resourceGroupName: 'string',
      startTime: 'string',
      status: 'string',
      targetSize: 'string',
      totalAcu: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticPlansResponseBodyElasticPlans extends $tea.Model {
  autoScale?: boolean;
  elasticPlanName?: string;
  enabled?: boolean;
  nextScheduleTime?: string;
  resourceGroupName?: string;
  targetSize?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoScale: 'AutoScale',
      elasticPlanName: 'ElasticPlanName',
      enabled: 'Enabled',
      nextScheduleTime: 'NextScheduleTime',
      resourceGroupName: 'ResourceGroupName',
      targetSize: 'TargetSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScale: 'boolean',
      elasticPlanName: 'string',
      enabled: 'boolean',
      nextScheduleTime: 'string',
      resourceGroupName: 'string',
      targetSize: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnabledPrivilegesResponseBodyDataPrivileges extends $tea.Model {
  description?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnabledPrivilegesResponseBodyData extends $tea.Model {
  description?: string;
  privileges?: DescribeEnabledPrivilegesResponseBodyDataPrivileges[];
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      privileges: 'Privileges',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      privileges: { 'type': 'array', 'itemType': DescribeEnabledPrivilegesResponseBodyDataPrivileges },
      scope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePatternPerformanceResponseBodyPerformancesSeries extends $tea.Model {
  name?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePatternPerformanceResponseBodyPerformances extends $tea.Model {
  key?: string;
  series?: DescribePatternPerformanceResponseBodyPerformancesSeries[];
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      series: 'Series',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      series: { 'type': 'array', 'itemType': DescribePatternPerformanceResponseBodyPerformancesSeries },
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegionZonesZone extends $tea.Model {
  localName?: string;
  vpcEnabled?: boolean;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      vpcEnabled: 'VpcEnabled',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
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
  localName?: string;
  regionEndpoint?: string;
  regionId?: string;
  zones?: DescribeRegionsResponseBodyRegionsRegionZones;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
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

export class DescribeSQLPatternsResponseBodyPatternDetails extends $tea.Model {
  accessIp?: string;
  averageExecutionTime?: number;
  averagePeakMemory?: number;
  averageQueryTime?: number;
  averageScanSize?: number;
  blockable?: boolean;
  failedCount?: number;
  maxExecutionTime?: number;
  maxPeakMemory?: number;
  maxQueryTime?: number;
  maxScanSize?: number;
  patternCreationTime?: string;
  patternId?: string;
  queryCount?: number;
  SQLPattern?: string;
  tables?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      accessIp: 'AccessIp',
      averageExecutionTime: 'AverageExecutionTime',
      averagePeakMemory: 'AveragePeakMemory',
      averageQueryTime: 'AverageQueryTime',
      averageScanSize: 'AverageScanSize',
      blockable: 'Blockable',
      failedCount: 'FailedCount',
      maxExecutionTime: 'MaxExecutionTime',
      maxPeakMemory: 'MaxPeakMemory',
      maxQueryTime: 'MaxQueryTime',
      maxScanSize: 'MaxScanSize',
      patternCreationTime: 'PatternCreationTime',
      patternId: 'PatternId',
      queryCount: 'QueryCount',
      SQLPattern: 'SQLPattern',
      tables: 'Tables',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessIp: 'string',
      averageExecutionTime: 'number',
      averagePeakMemory: 'number',
      averageQueryTime: 'number',
      averageScanSize: 'number',
      blockable: 'boolean',
      failedCount: 'number',
      maxExecutionTime: 'number',
      maxPeakMemory: 'number',
      maxQueryTime: 'number',
      maxScanSize: 'number',
      patternCreationTime: 'string',
      patternId: 'string',
      queryCount: 'number',
      SQLPattern: 'string',
      tables: 'string',
      user: 'string',
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

export class DescribeSqlPatternResponseBodyItems extends $tea.Model {
  accessIP?: string;
  avgCpuTime?: string;
  avgPeakMemory?: string;
  avgScanSize?: string;
  avgStageCount?: string;
  avgTaskCount?: string;
  instanceName?: string;
  maxCpuTime?: string;
  maxPeakMemory?: string;
  maxScanSize?: string;
  maxStageCount?: string;
  maxTaskCount?: string;
  pattern?: string;
  queryCount?: string;
  reportDate?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      accessIP: 'AccessIP',
      avgCpuTime: 'AvgCpuTime',
      avgPeakMemory: 'AvgPeakMemory',
      avgScanSize: 'AvgScanSize',
      avgStageCount: 'AvgStageCount',
      avgTaskCount: 'AvgTaskCount',
      instanceName: 'InstanceName',
      maxCpuTime: 'MaxCpuTime',
      maxPeakMemory: 'MaxPeakMemory',
      maxScanSize: 'MaxScanSize',
      maxStageCount: 'MaxStageCount',
      maxTaskCount: 'MaxTaskCount',
      pattern: 'Pattern',
      queryCount: 'QueryCount',
      reportDate: 'ReportDate',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessIP: 'string',
      avgCpuTime: 'string',
      avgPeakMemory: 'string',
      avgScanSize: 'string',
      avgStageCount: 'string',
      avgTaskCount: 'string',
      instanceName: 'string',
      maxCpuTime: 'string',
      maxPeakMemory: 'string',
      maxScanSize: 'string',
      maxStageCount: 'string',
      maxTaskCount: 'string',
      pattern: 'string',
      queryCount: 'string',
      reportDate: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableAccessCountResponseBodyItems extends $tea.Model {
  accessCount?: string;
  instanceName?: string;
  reportDate?: string;
  tableName?: string;
  tableSchema?: string;
  static names(): { [key: string]: string } {
    return {
      accessCount: 'AccessCount',
      instanceName: 'InstanceName',
      reportDate: 'ReportDate',
      tableName: 'TableName',
      tableSchema: 'TableSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCount: 'string',
      instanceName: 'string',
      reportDate: 'string',
      tableName: 'string',
      tableSchema: 'string',
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

export class GetDatabaseObjectsResponseBodyData extends $tea.Model {
  databaseSummaryModels?: DatabaseSummaryModel[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      databaseSummaryModels: 'DatabaseSummaryModels',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseSummaryModels: { 'type': 'array', 'itemType': DatabaseSummaryModel },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppAttemptLogResponseBodyData extends $tea.Model {
  DBClusterId?: string;
  logContent?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      logContent: 'LogContent',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      logContent: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppLogResponseBodyData extends $tea.Model {
  DBClusterId?: string;
  logContent?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      logContent: 'LogContent',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      logContent: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppMetricsResponseBodyDataScanMetrics extends $tea.Model {
  outputRowsCount?: number;
  totalReadFileSizeInByte?: number;
  static names(): { [key: string]: string } {
    return {
      outputRowsCount: 'OutputRowsCount',
      totalReadFileSizeInByte: 'TotalReadFileSizeInByte',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputRowsCount: 'number',
      totalReadFileSizeInByte: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppMetricsResponseBodyData extends $tea.Model {
  appId?: string;
  attemptId?: string;
  eventLogPath?: string;
  finished?: boolean;
  scanMetrics?: GetSparkAppMetricsResponseBodyDataScanMetrics;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      attemptId: 'AttemptId',
      eventLogPath: 'EventLogPath',
      finished: 'Finished',
      scanMetrics: 'ScanMetrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      attemptId: 'string',
      eventLogPath: 'string',
      finished: 'boolean',
      scanMetrics: GetSparkAppMetricsResponseBodyDataScanMetrics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppStateResponseBodyData extends $tea.Model {
  appId?: string;
  appName?: string;
  DBClusterId?: string;
  message?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      DBClusterId: 'DBClusterId',
      message: 'Message',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      DBClusterId: 'string',
      message: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppWebUiAddressResponseBodyData extends $tea.Model {
  appId?: string;
  DBClusterId?: string;
  expirationTimeInMillis?: number;
  webUiAddress?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      DBClusterId: 'DBClusterId',
      expirationTimeInMillis: 'ExpirationTimeInMillis',
      webUiAddress: 'WebUiAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      DBClusterId: 'string',
      expirationTimeInMillis: 'number',
      webUiAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkConfigLogPathResponseBodyData extends $tea.Model {
  defaultLogPath?: string;
  isLogPathExists?: boolean;
  modifiedTimestamp?: string;
  modifiedUid?: string;
  recordedLogPath?: string;
  static names(): { [key: string]: string } {
    return {
      defaultLogPath: 'DefaultLogPath',
      isLogPathExists: 'IsLogPathExists',
      modifiedTimestamp: 'ModifiedTimestamp',
      modifiedUid: 'ModifiedUid',
      recordedLogPath: 'RecordedLogPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultLogPath: 'string',
      isLogPathExists: 'boolean',
      modifiedTimestamp: 'string',
      modifiedUid: 'string',
      recordedLogPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkSQLEngineStateResponseBodyData extends $tea.Model {
  appId?: string;
  config?: string;
  jars?: string;
  maxExecutor?: string;
  minExecutor?: string;
  slotNum?: string;
  state?: string;
  submittedTimeInMillis?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      config: 'Config',
      jars: 'Jars',
      maxExecutor: 'MaxExecutor',
      minExecutor: 'MinExecutor',
      slotNum: 'SlotNum',
      state: 'State',
      submittedTimeInMillis: 'SubmittedTimeInMillis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      config: 'string',
      jars: 'string',
      maxExecutor: 'string',
      minExecutor: 'string',
      slotNum: 'string',
      state: 'string',
      submittedTimeInMillis: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkTemplateFileContentResponseBodyData extends $tea.Model {
  appType?: string;
  content?: string;
  id?: number;
  resourceGroupName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      content: 'Content',
      id: 'Id',
      resourceGroupName: 'ResourceGroupName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      content: 'string',
      id: 'number',
      resourceGroupName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableColumnsResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  table?: TableDetailModel;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      table: 'Table',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      table: TableDetailModel,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableObjectsResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  tableSummaryModels?: TableSummaryModel[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tableSummaryModels: 'TableSummaryModels',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      tableSummaryModels: { 'type': 'array', 'itemType': TableSummaryModel },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetViewObjectsResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  tableSummaryModels?: TableSummaryModel[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tableSummaryModels: 'TableSummaryModels',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      tableSummaryModels: { 'type': 'array', 'itemType': TableSummaryModel },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillSparkAppResponseBodyData extends $tea.Model {
  appId?: string;
  appName?: string;
  DBClusterId?: string;
  message?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      DBClusterId: 'DBClusterId',
      message: 'Message',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      DBClusterId: 'string',
      message: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkAppAttemptsResponseBodyData extends $tea.Model {
  attemptInfoList?: SparkAttemptInfo[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      attemptInfoList: 'AttemptInfoList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attemptInfoList: { 'type': 'array', 'itemType': SparkAttemptInfo },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkAppsResponseBodyData extends $tea.Model {
  appInfoList?: SparkAppInfo[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      appInfoList: 'AppInfoList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfoList: { 'type': 'array', 'itemType': SparkAppInfo },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkLogAnalyzeTasksResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  taskList?: SparkAnalyzeLogTask[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      taskList: 'TaskList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      taskList: { 'type': 'array', 'itemType': SparkAnalyzeLogTask },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountPrivilegesRequestAccountPrivilegesPrivilegeObject extends $tea.Model {
  column?: string;
  database?: string;
  table?: string;
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      database: 'Database',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
      database: 'string',
      table: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountPrivilegesRequestAccountPrivileges extends $tea.Model {
  privilegeObject?: ModifyAccountPrivilegesRequestAccountPrivilegesPrivilegeObject;
  privilegeType?: string;
  privileges?: string[];
  static names(): { [key: string]: string } {
    return {
      privilegeObject: 'PrivilegeObject',
      privilegeType: 'PrivilegeType',
      privileges: 'Privileges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privilegeObject: ModifyAccountPrivilegesRequestAccountPrivilegesPrivilegeObject,
      privilegeType: 'string',
      privileges: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreloadSparkAppMetricsResponseBodyDataScanMetrics extends $tea.Model {
  outputRowsCount?: number;
  totalReadFileSizeInByte?: number;
  static names(): { [key: string]: string } {
    return {
      outputRowsCount: 'OutputRowsCount',
      totalReadFileSizeInByte: 'TotalReadFileSizeInByte',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputRowsCount: 'number',
      totalReadFileSizeInByte: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreloadSparkAppMetricsResponseBodyData extends $tea.Model {
  appId?: string;
  attemptId?: string;
  eventLogPath?: string;
  finished?: boolean;
  scanMetrics?: PreloadSparkAppMetricsResponseBodyDataScanMetrics;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      attemptId: 'AttemptId',
      eventLogPath: 'EventLogPath',
      finished: 'Finished',
      scanMetrics: 'ScanMetrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      attemptId: 'string',
      eventLogPath: 'string',
      finished: 'boolean',
      scanMetrics: PreloadSparkAppMetricsResponseBodyDataScanMetrics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSparkAppLogRootPathResponseBodyData extends $tea.Model {
  defaultLogPath?: string;
  isLogPathExists?: boolean;
  modifiedTimestamp?: string;
  modifiedUid?: string;
  recordedLogPath?: string;
  static names(): { [key: string]: string } {
    return {
      defaultLogPath: 'DefaultLogPath',
      isLogPathExists: 'IsLogPathExists',
      modifiedTimestamp: 'ModifiedTimestamp',
      modifiedUid: 'ModifiedUid',
      recordedLogPath: 'RecordedLogPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultLogPath: 'string',
      isLogPathExists: 'boolean',
      modifiedTimestamp: 'string',
      modifiedUid: 'string',
      recordedLogPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartSparkSQLEngineResponseBodyData extends $tea.Model {
  appId?: string;
  appName?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSparkAppResponseBodyData extends $tea.Model {
  appId?: string;
  appName?: string;
  message?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      message: 'Message',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      message: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSparkTemplateFileResponseBodyData extends $tea.Model {
  succeeded?: boolean;
  static names(): { [key: string]: string } {
    return {
      succeeded: 'Succeeded',
    };
  }

  static types(): { [key: string]: any } {
    return {
      succeeded: 'boolean',
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
      'cn-qingdao': "adb.aliyuncs.com",
      'cn-beijing': "adb.aliyuncs.com",
      'cn-hangzhou': "adb.aliyuncs.com",
      'cn-shanghai': "adb.aliyuncs.com",
      'cn-shenzhen': "adb.aliyuncs.com",
      'cn-hongkong': "adb.aliyuncs.com",
      'ap-southeast-1': "adb.aliyuncs.com",
      'us-west-1': "adb.aliyuncs.com",
      'us-east-1': "adb.aliyuncs.com",
      'cn-hangzhou-finance': "adb.aliyuncs.com",
      'cn-north-2-gov-1': "adb.aliyuncs.com",
      'ap-northeast-2-pop': "adb.ap-northeast-1.aliyuncs.com",
      'cn-beijing-finance-1': "adb.aliyuncs.com",
      'cn-beijing-finance-pop': "adb.aliyuncs.com",
      'cn-beijing-gov-1': "adb.aliyuncs.com",
      'cn-beijing-nu16-b01': "adb.aliyuncs.com",
      'cn-edge-1': "adb.aliyuncs.com",
      'cn-fujian': "adb.aliyuncs.com",
      'cn-haidian-cm12-c01': "adb.aliyuncs.com",
      'cn-hangzhou-bj-b01': "adb.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "adb.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "adb.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "adb.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "adb.aliyuncs.com",
      'cn-hangzhou-test-306': "adb.aliyuncs.com",
      'cn-hongkong-finance-pop': "adb.aliyuncs.com",
      'cn-qingdao-nebula': "adb.aliyuncs.com",
      'cn-shanghai-et15-b01': "adb.aliyuncs.com",
      'cn-shanghai-et2-b01': "adb.aliyuncs.com",
      'cn-shanghai-finance-1': "adb.aliyuncs.com",
      'cn-shanghai-inner': "adb.aliyuncs.com",
      'cn-shanghai-internal-test-1': "adb.aliyuncs.com",
      'cn-shenzhen-finance-1': "adb.aliyuncs.com",
      'cn-shenzhen-inner': "adb.aliyuncs.com",
      'cn-shenzhen-st4-d01': "adb.aliyuncs.com",
      'cn-shenzhen-su18-b01': "adb.aliyuncs.com",
      'cn-wuhan': "adb.aliyuncs.com",
      'cn-yushanfang': "adb.aliyuncs.com",
      'cn-zhangbei-na61-b01': "adb.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "adb.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "adb.aliyuncs.com",
      'eu-west-1-oxs': "adb.ap-northeast-1.aliyuncs.com",
      'me-east-1': "adb.ap-northeast-1.aliyuncs.com",
      'rus-west-1-pop': "adb.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("adb", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AllocateClusterPublicConnection",
      version: "2021-12-01",
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

  async bindAccountWithOptions(request: BindAccountRequest, runtime: $Util.RuntimeOptions): Promise<BindAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.ramUser)) {
      query["RamUser"] = request.ramUser;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindAccount",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindAccountResponse>(await this.callApi(params, req, runtime), new BindAccountResponse({}));
  }

  async bindAccount(request: BindAccountRequest): Promise<BindAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindAccountWithOptions(request, runtime);
  }

  async checkBindRamUserWithOptions(request: CheckBindRamUserRequest, runtime: $Util.RuntimeOptions): Promise<CheckBindRamUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckBindRamUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckBindRamUserResponse>(await this.callApi(params, req, runtime), new CheckBindRamUserResponse({}));
  }

  async checkBindRamUser(request: CheckBindRamUserRequest): Promise<CheckBindRamUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkBindRamUserWithOptions(request, runtime);
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

    if (!Util.isUnset(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAccount",
      version: "2021-12-01",
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

  async createDBClusterWithOptions(request: CreateDBClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupSetId)) {
      query["BackupSetId"] = request.backupSetId;
    }

    if (!Util.isUnset(request.computeResource)) {
      query["ComputeResource"] = request.computeResource;
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

    if (!Util.isUnset(request.enableDefaultResourcePool)) {
      query["EnableDefaultResourcePool"] = request.enableDefaultResourcePool;
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.restoreToTime)) {
      query["RestoreToTime"] = request.restoreToTime;
    }

    if (!Util.isUnset(request.restoreType)) {
      query["RestoreType"] = request.restoreType;
    }

    if (!Util.isUnset(request.sourceDbClusterId)) {
      query["SourceDbClusterId"] = request.sourceDbClusterId;
    }

    if (!Util.isUnset(request.storageResource)) {
      query["StorageResource"] = request.storageResource;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
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
      action: "CreateDBCluster",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDBClusterResponse>(await this.callApi(params, req, runtime), new CreateDBClusterResponse({}));
  }

  async createDBCluster(request: CreateDBClusterRequest): Promise<CreateDBClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBClusterWithOptions(request, runtime);
  }

  async createDBResourceGroupWithOptions(request: CreateDBResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!Util.isUnset(request.maxComputeResource)) {
      query["MaxComputeResource"] = request.maxComputeResource;
    }

    if (!Util.isUnset(request.minComputeResource)) {
      query["MinComputeResource"] = request.minComputeResource;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDBResourceGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDBResourceGroupResponse>(await this.callApi(params, req, runtime), new CreateDBResourceGroupResponse({}));
  }

  async createDBResourceGroup(request: CreateDBResourceGroupRequest): Promise<CreateDBResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBResourceGroupWithOptions(request, runtime);
  }

  async createElasticPlanWithOptions(request: CreateElasticPlanRequest, runtime: $Util.RuntimeOptions): Promise<CreateElasticPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoScale)) {
      query["AutoScale"] = request.autoScale;
    }

    if (!Util.isUnset(request.cronExpression)) {
      query["CronExpression"] = request.cronExpression;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.elasticPlanName)) {
      query["ElasticPlanName"] = request.elasticPlanName;
    }

    if (!Util.isUnset(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.resourceGroupName)) {
      query["ResourceGroupName"] = request.resourceGroupName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.targetSize)) {
      query["TargetSize"] = request.targetSize;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateElasticPlan",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateElasticPlanResponse>(await this.callApi(params, req, runtime), new CreateElasticPlanResponse({}));
  }

  async createElasticPlan(request: CreateElasticPlanRequest): Promise<CreateElasticPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createElasticPlanWithOptions(request, runtime);
  }

  async createOssSubDirectoryWithOptions(request: CreateOssSubDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<CreateOssSubDirectoryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.path)) {
      body["Path"] = request.path;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateOssSubDirectory",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOssSubDirectoryResponse>(await this.callApi(params, req, runtime), new CreateOssSubDirectoryResponse({}));
  }

  async createOssSubDirectory(request: CreateOssSubDirectoryRequest): Promise<CreateOssSubDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOssSubDirectoryWithOptions(request, runtime);
  }

  async createSparkTemplateWithOptions(request: CreateSparkTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateSparkTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.parentId)) {
      body["ParentId"] = request.parentId;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSparkTemplate",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSparkTemplateResponse>(await this.callApi(params, req, runtime), new CreateSparkTemplateResponse({}));
  }

  async createSparkTemplate(request: CreateSparkTemplateRequest): Promise<CreateSparkTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSparkTemplateWithOptions(request, runtime);
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAccount",
      version: "2021-12-01",
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

  /**
    * ###
    * You can call this operation to delete only subscription clusters.
    *
    * @param request DeleteDBClusterRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteDBClusterResponse
   */
  async deleteDBClusterWithOptions(request: DeleteDBClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDBCluster",
      version: "2021-12-01",
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

  /**
    * ###
    * You can call this operation to delete only subscription clusters.
    *
    * @param request DeleteDBClusterRequest
    * @return DeleteDBClusterResponse
   */
  async deleteDBCluster(request: DeleteDBClusterRequest): Promise<DeleteDBClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBClusterWithOptions(request, runtime);
  }

  async deleteDBResourceGroupWithOptions(request: DeleteDBResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDBResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDBResourceGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDBResourceGroupResponse>(await this.callApi(params, req, runtime), new DeleteDBResourceGroupResponse({}));
  }

  async deleteDBResourceGroup(request: DeleteDBResourceGroupRequest): Promise<DeleteDBResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBResourceGroupWithOptions(request, runtime);
  }

  async deleteElasticPlanWithOptions(request: DeleteElasticPlanRequest, runtime: $Util.RuntimeOptions): Promise<DeleteElasticPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.elasticPlanName)) {
      query["ElasticPlanName"] = request.elasticPlanName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteElasticPlan",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteElasticPlanResponse>(await this.callApi(params, req, runtime), new DeleteElasticPlanResponse({}));
  }

  async deleteElasticPlan(request: DeleteElasticPlanRequest): Promise<DeleteElasticPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteElasticPlanWithOptions(request, runtime);
  }

  async deleteProcessInstanceWithOptions(request: DeleteProcessInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProcessInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.processInstanceId)) {
      query["ProcessInstanceId"] = request.processInstanceId;
    }

    if (!Util.isUnset(request.projectCode)) {
      query["ProjectCode"] = request.projectCode;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteProcessInstance",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteProcessInstanceResponse>(await this.callApi(params, req, runtime), new DeleteProcessInstanceResponse({}));
  }

  async deleteProcessInstance(request: DeleteProcessInstanceRequest): Promise<DeleteProcessInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProcessInstanceWithOptions(request, runtime);
  }

  async deleteSparkTemplateWithOptions(request: DeleteSparkTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSparkTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSparkTemplate",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSparkTemplateResponse>(await this.callApi(params, req, runtime), new DeleteSparkTemplateResponse({}));
  }

  async deleteSparkTemplate(request: DeleteSparkTemplateRequest): Promise<DeleteSparkTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSparkTemplateWithOptions(request, runtime);
  }

  async deleteSparkTemplateFileWithOptions(request: DeleteSparkTemplateFileRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSparkTemplateFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSparkTemplateFile",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSparkTemplateFileResponse>(await this.callApi(params, req, runtime), new DeleteSparkTemplateFileResponse({}));
  }

  async deleteSparkTemplateFile(request: DeleteSparkTemplateFileRequest): Promise<DeleteSparkTemplateFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSparkTemplateFileWithOptions(request, runtime);
  }

  async describeAccountAllPrivilegesWithOptions(request: DescribeAccountAllPrivilegesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountAllPrivilegesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.marker)) {
      query["Marker"] = request.marker;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccountAllPrivileges",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAccountAllPrivilegesResponse>(await this.callApi(params, req, runtime), new DescribeAccountAllPrivilegesResponse({}));
  }

  async describeAccountAllPrivileges(request: DescribeAccountAllPrivilegesRequest): Promise<DescribeAccountAllPrivilegesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountAllPrivilegesWithOptions(request, runtime);
  }

  async describeAccountPrivilegeObjectsWithOptions(request: DescribeAccountPrivilegeObjectsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountPrivilegeObjectsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.columnPrivilegeObject)) {
      query["ColumnPrivilegeObject"] = request.columnPrivilegeObject;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.databasePrivilegeObject)) {
      query["DatabasePrivilegeObject"] = request.databasePrivilegeObject;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.privilegeType)) {
      query["PrivilegeType"] = request.privilegeType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tablePrivilegeObject)) {
      query["TablePrivilegeObject"] = request.tablePrivilegeObject;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccountPrivilegeObjects",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAccountPrivilegeObjectsResponse>(await this.callApi(params, req, runtime), new DescribeAccountPrivilegeObjectsResponse({}));
  }

  async describeAccountPrivilegeObjects(request: DescribeAccountPrivilegeObjectsRequest): Promise<DescribeAccountPrivilegeObjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountPrivilegeObjectsWithOptions(request, runtime);
  }

  async describeAccountPrivilegesWithOptions(request: DescribeAccountPrivilegesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountPrivilegesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.columnPrivilegeObject)) {
      query["ColumnPrivilegeObject"] = request.columnPrivilegeObject;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.databasePrivilegeObject)) {
      query["DatabasePrivilegeObject"] = request.databasePrivilegeObject;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.privilegeType)) {
      query["PrivilegeType"] = request.privilegeType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tablePrivilegeObject)) {
      query["TablePrivilegeObject"] = request.tablePrivilegeObject;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccountPrivileges",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAccountPrivilegesResponse>(await this.callApi(params, req, runtime), new DescribeAccountPrivilegesResponse({}));
  }

  async describeAccountPrivileges(request: DescribeAccountPrivilegesRequest): Promise<DescribeAccountPrivilegesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountPrivilegesWithOptions(request, runtime);
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

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAccounts",
      version: "2021-12-01",
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

  async describeAdbMySqlColumnsWithOptions(request: DescribeAdbMySqlColumnsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAdbMySqlColumnsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.schema)) {
      query["Schema"] = request.schema;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAdbMySqlColumns",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAdbMySqlColumnsResponse>(await this.callApi(params, req, runtime), new DescribeAdbMySqlColumnsResponse({}));
  }

  async describeAdbMySqlColumns(request: DescribeAdbMySqlColumnsRequest): Promise<DescribeAdbMySqlColumnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAdbMySqlColumnsWithOptions(request, runtime);
  }

  async describeAdbMySqlSchemasWithOptions(request: DescribeAdbMySqlSchemasRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAdbMySqlSchemasResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAdbMySqlSchemas",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAdbMySqlSchemasResponse>(await this.callApi(params, req, runtime), new DescribeAdbMySqlSchemasResponse({}));
  }

  async describeAdbMySqlSchemas(request: DescribeAdbMySqlSchemasRequest): Promise<DescribeAdbMySqlSchemasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAdbMySqlSchemasWithOptions(request, runtime);
  }

  async describeAdbMySqlTablesWithOptions(request: DescribeAdbMySqlTablesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAdbMySqlTablesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.schema)) {
      query["Schema"] = request.schema;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAdbMySqlTables",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAdbMySqlTablesResponse>(await this.callApi(params, req, runtime), new DescribeAdbMySqlTablesResponse({}));
  }

  async describeAdbMySqlTables(request: DescribeAdbMySqlTablesRequest): Promise<DescribeAdbMySqlTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAdbMySqlTablesWithOptions(request, runtime);
  }

  async describeAllDataSourceWithOptions(request: DescribeAllDataSourceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAllDataSourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      version: "2021-12-01",
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

  async describeApsActionLogsWithOptions(request: DescribeApsActionLogsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApsActionLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
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

    if (!Util.isUnset(request.stage)) {
      query["Stage"] = request.stage;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    if (!Util.isUnset(request.workloadId)) {
      query["WorkloadId"] = request.workloadId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApsActionLogs",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApsActionLogsResponse>(await this.callApi(params, req, runtime), new DescribeApsActionLogsResponse({}));
  }

  async describeApsActionLogs(request: DescribeApsActionLogsRequest): Promise<DescribeApsActionLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApsActionLogsWithOptions(request, runtime);
  }

  async describeApsResourceGroupsWithOptions(request: DescribeApsResourceGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApsResourceGroupsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApsResourceGroups",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeApsResourceGroupsResponse>(await this.callApi(params, req, runtime), new DescribeApsResourceGroupsResponse({}));
  }

  async describeApsResourceGroups(request: DescribeApsResourceGroupsRequest): Promise<DescribeApsResourceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApsResourceGroupsWithOptions(request, runtime);
  }

  async describeAuditLogRecordsWithOptions(request: DescribeAuditLogRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAuditLogRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.hostAddress)) {
      query["HostAddress"] = request.hostAddress;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
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

    if (!Util.isUnset(request.proxyUser)) {
      query["ProxyUser"] = request.proxyUser;
    }

    if (!Util.isUnset(request.queryKeyword)) {
      query["QueryKeyword"] = request.queryKeyword;
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

    if (!Util.isUnset(request.sqlType)) {
      query["SqlType"] = request.sqlType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.succeed)) {
      query["Succeed"] = request.succeed;
    }

    if (!Util.isUnset(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAuditLogRecords",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAuditLogRecordsResponse>(await this.callApi(params, req, runtime), new DescribeAuditLogRecordsResponse({}));
  }

  async describeAuditLogRecords(request: DescribeAuditLogRecordsRequest): Promise<DescribeAuditLogRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAuditLogRecordsWithOptions(request, runtime);
  }

  async describeClusterAccessWhiteListWithOptions(request: DescribeClusterAccessWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterAccessWhiteListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterAccessWhiteList",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterAccessWhiteListResponse>(await this.callApi(params, req, runtime), new DescribeClusterAccessWhiteListResponse({}));
  }

  async describeClusterAccessWhiteList(request: DescribeClusterAccessWhiteListRequest): Promise<DescribeClusterAccessWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterAccessWhiteListWithOptions(request, runtime);
  }

  async describeClusterNetInfoWithOptions(request: DescribeClusterNetInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterNetInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterNetInfo",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterNetInfoResponse>(await this.callApi(params, req, runtime), new DescribeClusterNetInfoResponse({}));
  }

  async describeClusterNetInfo(request: DescribeClusterNetInfoRequest): Promise<DescribeClusterNetInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterNetInfoWithOptions(request, runtime);
  }

  async describeColumnsWithOptions(request: DescribeColumnsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeColumnsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      version: "2021-12-01",
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

  async describeDBClusterAttributeWithOptions(request: DescribeDBClusterAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBClusterAttribute",
      version: "2021-12-01",
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

  async describeDBClusterHealthStatusWithOptions(request: DescribeDBClusterHealthStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterHealthStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBClusterHealthStatus",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterHealthStatusResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterHealthStatusResponse({}));
  }

  async describeDBClusterHealthStatus(request: DescribeDBClusterHealthStatusRequest): Promise<DescribeDBClusterHealthStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterHealthStatusWithOptions(request, runtime);
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourcePools)) {
      query["ResourcePools"] = request.resourcePools;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBClusterPerformance",
      version: "2021-12-01",
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
    if (!Util.isUnset(request.DBClusterDescription)) {
      query["DBClusterDescription"] = request.DBClusterDescription;
    }

    if (!Util.isUnset(request.DBClusterIds)) {
      query["DBClusterIds"] = request.DBClusterIds;
    }

    if (!Util.isUnset(request.DBClusterStatus)) {
      query["DBClusterStatus"] = request.DBClusterStatus;
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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBClusters",
      version: "2021-12-01",
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

  async describeDBResourceGroupWithOptions(request: DescribeDBResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBResourceGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBResourceGroupResponse>(await this.callApi(params, req, runtime), new DescribeDBResourceGroupResponse({}));
  }

  async describeDBResourceGroup(request: DescribeDBResourceGroupRequest): Promise<DescribeDBResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBResourceGroupWithOptions(request, runtime);
  }

  async describeDiagnosisDimensionsWithOptions(request: DescribeDiagnosisDimensionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiagnosisDimensionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.queryCondition)) {
      query["QueryCondition"] = request.queryCondition;
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
      action: "DescribeDiagnosisDimensions",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDiagnosisDimensionsResponse>(await this.callApi(params, req, runtime), new DescribeDiagnosisDimensionsResponse({}));
  }

  async describeDiagnosisDimensions(request: DescribeDiagnosisDimensionsRequest): Promise<DescribeDiagnosisDimensionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiagnosisDimensionsWithOptions(request, runtime);
  }

  async describeDiagnosisRecordsWithOptions(request: DescribeDiagnosisRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiagnosisRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.database)) {
      query["Database"] = request.database;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.maxPeakMemory)) {
      query["MaxPeakMemory"] = request.maxPeakMemory;
    }

    if (!Util.isUnset(request.maxScanSize)) {
      query["MaxScanSize"] = request.maxScanSize;
    }

    if (!Util.isUnset(request.minPeakMemory)) {
      query["MinPeakMemory"] = request.minPeakMemory;
    }

    if (!Util.isUnset(request.minScanSize)) {
      query["MinScanSize"] = request.minScanSize;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.patternId)) {
      query["PatternId"] = request.patternId;
    }

    if (!Util.isUnset(request.queryCondition)) {
      query["QueryCondition"] = request.queryCondition;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroup)) {
      query["ResourceGroup"] = request.resourceGroup;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDiagnosisRecords",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDiagnosisRecordsResponse>(await this.callApi(params, req, runtime), new DescribeDiagnosisRecordsResponse({}));
  }

  async describeDiagnosisRecords(request: DescribeDiagnosisRecordsRequest): Promise<DescribeDiagnosisRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiagnosisRecordsWithOptions(request, runtime);
  }

  async describeDiagnosisSQLInfoWithOptions(request: DescribeDiagnosisSQLInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiagnosisSQLInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDiagnosisSQLInfo",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDiagnosisSQLInfoResponse>(await this.callApi(params, req, runtime), new DescribeDiagnosisSQLInfoResponse({}));
  }

  async describeDiagnosisSQLInfo(request: DescribeDiagnosisSQLInfoRequest): Promise<DescribeDiagnosisSQLInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiagnosisSQLInfoWithOptions(request, runtime);
  }

  async describeDownloadRecordsWithOptions(request: DescribeDownloadRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDownloadRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDownloadRecords",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDownloadRecordsResponse>(await this.callApi(params, req, runtime), new DescribeDownloadRecordsResponse({}));
  }

  async describeDownloadRecords(request: DescribeDownloadRecordsRequest): Promise<DescribeDownloadRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDownloadRecordsWithOptions(request, runtime);
  }

  async describeElasticPlanAttributeWithOptions(request: DescribeElasticPlanAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeElasticPlanAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.elasticPlanName)) {
      query["ElasticPlanName"] = request.elasticPlanName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeElasticPlanAttribute",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeElasticPlanAttributeResponse>(await this.callApi(params, req, runtime), new DescribeElasticPlanAttributeResponse({}));
  }

  async describeElasticPlanAttribute(request: DescribeElasticPlanAttributeRequest): Promise<DescribeElasticPlanAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeElasticPlanAttributeWithOptions(request, runtime);
  }

  async describeElasticPlanJobsWithOptions(request: DescribeElasticPlanJobsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeElasticPlanJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.elasticPlanName)) {
      query["ElasticPlanName"] = request.elasticPlanName;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupName)) {
      query["ResourceGroupName"] = request.resourceGroupName;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeElasticPlanJobs",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeElasticPlanJobsResponse>(await this.callApi(params, req, runtime), new DescribeElasticPlanJobsResponse({}));
  }

  async describeElasticPlanJobs(request: DescribeElasticPlanJobsRequest): Promise<DescribeElasticPlanJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeElasticPlanJobsWithOptions(request, runtime);
  }

  async describeElasticPlanSpecificationsWithOptions(request: DescribeElasticPlanSpecificationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeElasticPlanSpecificationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.resourceGroupName)) {
      query["ResourceGroupName"] = request.resourceGroupName;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeElasticPlanSpecifications",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeElasticPlanSpecificationsResponse>(await this.callApi(params, req, runtime), new DescribeElasticPlanSpecificationsResponse({}));
  }

  async describeElasticPlanSpecifications(request: DescribeElasticPlanSpecificationsRequest): Promise<DescribeElasticPlanSpecificationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeElasticPlanSpecificationsWithOptions(request, runtime);
  }

  async describeElasticPlansWithOptions(request: DescribeElasticPlansRequest, runtime: $Util.RuntimeOptions): Promise<DescribeElasticPlansResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.elasticPlanName)) {
      query["ElasticPlanName"] = request.elasticPlanName;
    }

    if (!Util.isUnset(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupName)) {
      query["ResourceGroupName"] = request.resourceGroupName;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeElasticPlans",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeElasticPlansResponse>(await this.callApi(params, req, runtime), new DescribeElasticPlansResponse({}));
  }

  async describeElasticPlans(request: DescribeElasticPlansRequest): Promise<DescribeElasticPlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeElasticPlansWithOptions(request, runtime);
  }

  async describeEnabledPrivilegesWithOptions(request: DescribeEnabledPrivilegesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEnabledPrivilegesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEnabledPrivileges",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEnabledPrivilegesResponse>(await this.callApi(params, req, runtime), new DescribeEnabledPrivilegesResponse({}));
  }

  async describeEnabledPrivileges(request: DescribeEnabledPrivilegesRequest): Promise<DescribeEnabledPrivilegesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEnabledPrivilegesWithOptions(request, runtime);
  }

  async describePatternPerformanceWithOptions(request: DescribePatternPerformanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribePatternPerformanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.patternId)) {
      query["PatternId"] = request.patternId;
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
      action: "DescribePatternPerformance",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePatternPerformanceResponse>(await this.callApi(params, req, runtime), new DescribePatternPerformanceResponse({}));
  }

  async describePatternPerformance(request: DescribePatternPerformanceRequest): Promise<DescribePatternPerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePatternPerformanceWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
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
      action: "DescribeRegions",
      version: "2021-12-01",
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

  async describeSQLPatternsWithOptions(request: DescribeSQLPatternsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSQLPatternsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSQLPatterns",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSQLPatternsResponse>(await this.callApi(params, req, runtime), new DescribeSQLPatternsResponse({}));
  }

  async describeSQLPatterns(request: DescribeSQLPatternsRequest): Promise<DescribeSQLPatternsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLPatternsWithOptions(request, runtime);
  }

  async describeSchemasWithOptions(request: DescribeSchemasRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSchemasResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSchemas",
      version: "2021-12-01",
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

  async describeSparkCodeLogWithOptions(request: DescribeSparkCodeLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSparkCodeLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSparkCodeLog",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSparkCodeLogResponse>(await this.callApi(params, req, runtime), new DescribeSparkCodeLogResponse({}));
  }

  async describeSparkCodeLog(request: DescribeSparkCodeLogRequest): Promise<DescribeSparkCodeLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSparkCodeLogWithOptions(request, runtime);
  }

  async describeSparkCodeOutputWithOptions(request: DescribeSparkCodeOutputRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSparkCodeOutputResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSparkCodeOutput",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSparkCodeOutputResponse>(await this.callApi(params, req, runtime), new DescribeSparkCodeOutputResponse({}));
  }

  async describeSparkCodeOutput(request: DescribeSparkCodeOutputRequest): Promise<DescribeSparkCodeOutputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSparkCodeOutputWithOptions(request, runtime);
  }

  async describeSparkCodeWebUiWithOptions(request: DescribeSparkCodeWebUiRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSparkCodeWebUiResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSparkCodeWebUi",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSparkCodeWebUiResponse>(await this.callApi(params, req, runtime), new DescribeSparkCodeWebUiResponse({}));
  }

  async describeSparkCodeWebUi(request: DescribeSparkCodeWebUiRequest): Promise<DescribeSparkCodeWebUiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSparkCodeWebUiWithOptions(request, runtime);
  }

  async describeSqlPatternWithOptions(request: DescribeSqlPatternRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSqlPatternResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
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

    if (!Util.isUnset(request.sqlPattern)) {
      query["SqlPattern"] = request.sqlPattern;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSqlPattern",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSqlPatternResponse>(await this.callApi(params, req, runtime), new DescribeSqlPatternResponse({}));
  }

  async describeSqlPattern(request: DescribeSqlPatternRequest): Promise<DescribeSqlPatternResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSqlPatternWithOptions(request, runtime);
  }

  async describeTableAccessCountWithOptions(request: DescribeTableAccessCountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTableAccessCountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTableAccessCount",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTableAccessCountResponse>(await this.callApi(params, req, runtime), new DescribeTableAccessCountResponse({}));
  }

  async describeTableAccessCount(request: DescribeTableAccessCountRequest): Promise<DescribeTableAccessCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTableAccessCountWithOptions(request, runtime);
  }

  async describeTablesWithOptions(request: DescribeTablesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTablesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTables",
      version: "2021-12-01",
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

  async disableElasticPlanWithOptions(request: DisableElasticPlanRequest, runtime: $Util.RuntimeOptions): Promise<DisableElasticPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.elasticPlanName)) {
      query["ElasticPlanName"] = request.elasticPlanName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableElasticPlan",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableElasticPlanResponse>(await this.callApi(params, req, runtime), new DisableElasticPlanResponse({}));
  }

  async disableElasticPlan(request: DisableElasticPlanRequest): Promise<DisableElasticPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableElasticPlanWithOptions(request, runtime);
  }

  async downloadDiagnosisRecordsWithOptions(request: DownloadDiagnosisRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DownloadDiagnosisRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.database)) {
      query["Database"] = request.database;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.maxPeakMemory)) {
      query["MaxPeakMemory"] = request.maxPeakMemory;
    }

    if (!Util.isUnset(request.maxScanSize)) {
      query["MaxScanSize"] = request.maxScanSize;
    }

    if (!Util.isUnset(request.minPeakMemory)) {
      query["MinPeakMemory"] = request.minPeakMemory;
    }

    if (!Util.isUnset(request.minScanSize)) {
      query["MinScanSize"] = request.minScanSize;
    }

    if (!Util.isUnset(request.queryCondition)) {
      query["QueryCondition"] = request.queryCondition;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroup)) {
      query["ResourceGroup"] = request.resourceGroup;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DownloadDiagnosisRecords",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DownloadDiagnosisRecordsResponse>(await this.callApi(params, req, runtime), new DownloadDiagnosisRecordsResponse({}));
  }

  async downloadDiagnosisRecords(request: DownloadDiagnosisRecordsRequest): Promise<DownloadDiagnosisRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadDiagnosisRecordsWithOptions(request, runtime);
  }

  async enableElasticPlanWithOptions(request: EnableElasticPlanRequest, runtime: $Util.RuntimeOptions): Promise<EnableElasticPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.elasticPlanName)) {
      query["ElasticPlanName"] = request.elasticPlanName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableElasticPlan",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableElasticPlanResponse>(await this.callApi(params, req, runtime), new EnableElasticPlanResponse({}));
  }

  async enableElasticPlan(request: EnableElasticPlanRequest): Promise<EnableElasticPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableElasticPlanWithOptions(request, runtime);
  }

  async getDatabaseObjectsWithOptions(request: GetDatabaseObjectsRequest, runtime: $Util.RuntimeOptions): Promise<GetDatabaseObjectsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.filterOwner)) {
      query["FilterOwner"] = request.filterOwner;
    }

    if (!Util.isUnset(request.filterSchemaName)) {
      query["FilterSchemaName"] = request.filterSchemaName;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
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
      action: "GetDatabaseObjects",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDatabaseObjectsResponse>(await this.callApi(params, req, runtime), new GetDatabaseObjectsResponse({}));
  }

  async getDatabaseObjects(request: GetDatabaseObjectsRequest): Promise<GetDatabaseObjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDatabaseObjectsWithOptions(request, runtime);
  }

  async getSparkAppAttemptLogWithOptions(request: GetSparkAppAttemptLogRequest, runtime: $Util.RuntimeOptions): Promise<GetSparkAppAttemptLogResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.attemptId)) {
      body["AttemptId"] = request.attemptId;
    }

    if (!Util.isUnset(request.logLength)) {
      body["LogLength"] = request.logLength;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSparkAppAttemptLog",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSparkAppAttemptLogResponse>(await this.callApi(params, req, runtime), new GetSparkAppAttemptLogResponse({}));
  }

  async getSparkAppAttemptLog(request: GetSparkAppAttemptLogRequest): Promise<GetSparkAppAttemptLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkAppAttemptLogWithOptions(request, runtime);
  }

  async getSparkAppInfoWithOptions(request: GetSparkAppInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetSparkAppInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSparkAppInfo",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSparkAppInfoResponse>(await this.callApi(params, req, runtime), new GetSparkAppInfoResponse({}));
  }

  async getSparkAppInfo(request: GetSparkAppInfoRequest): Promise<GetSparkAppInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkAppInfoWithOptions(request, runtime);
  }

  async getSparkAppLogWithOptions(request: GetSparkAppLogRequest, runtime: $Util.RuntimeOptions): Promise<GetSparkAppLogResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.logLength)) {
      body["LogLength"] = request.logLength;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSparkAppLog",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSparkAppLogResponse>(await this.callApi(params, req, runtime), new GetSparkAppLogResponse({}));
  }

  async getSparkAppLog(request: GetSparkAppLogRequest): Promise<GetSparkAppLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkAppLogWithOptions(request, runtime);
  }

  async getSparkAppMetricsWithOptions(request: GetSparkAppMetricsRequest, runtime: $Util.RuntimeOptions): Promise<GetSparkAppMetricsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSparkAppMetrics",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSparkAppMetricsResponse>(await this.callApi(params, req, runtime), new GetSparkAppMetricsResponse({}));
  }

  async getSparkAppMetrics(request: GetSparkAppMetricsRequest): Promise<GetSparkAppMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkAppMetricsWithOptions(request, runtime);
  }

  async getSparkAppStateWithOptions(request: GetSparkAppStateRequest, runtime: $Util.RuntimeOptions): Promise<GetSparkAppStateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSparkAppState",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSparkAppStateResponse>(await this.callApi(params, req, runtime), new GetSparkAppStateResponse({}));
  }

  async getSparkAppState(request: GetSparkAppStateRequest): Promise<GetSparkAppStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkAppStateWithOptions(request, runtime);
  }

  async getSparkAppWebUiAddressWithOptions(request: GetSparkAppWebUiAddressRequest, runtime: $Util.RuntimeOptions): Promise<GetSparkAppWebUiAddressResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSparkAppWebUiAddress",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSparkAppWebUiAddressResponse>(await this.callApi(params, req, runtime), new GetSparkAppWebUiAddressResponse({}));
  }

  async getSparkAppWebUiAddress(request: GetSparkAppWebUiAddressRequest): Promise<GetSparkAppWebUiAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkAppWebUiAddressWithOptions(request, runtime);
  }

  async getSparkConfigLogPathWithOptions(request: GetSparkConfigLogPathRequest, runtime: $Util.RuntimeOptions): Promise<GetSparkConfigLogPathResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSparkConfigLogPath",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSparkConfigLogPathResponse>(await this.callApi(params, req, runtime), new GetSparkConfigLogPathResponse({}));
  }

  async getSparkConfigLogPath(request: GetSparkConfigLogPathRequest): Promise<GetSparkConfigLogPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkConfigLogPathWithOptions(request, runtime);
  }

  async getSparkDefinitionsWithOptions(request: GetSparkDefinitionsRequest, runtime: $Util.RuntimeOptions): Promise<GetSparkDefinitionsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSparkDefinitions",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSparkDefinitionsResponse>(await this.callApi(params, req, runtime), new GetSparkDefinitionsResponse({}));
  }

  async getSparkDefinitions(request: GetSparkDefinitionsRequest): Promise<GetSparkDefinitionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkDefinitionsWithOptions(request, runtime);
  }

  async getSparkLogAnalyzeTaskWithOptions(request: GetSparkLogAnalyzeTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetSparkLogAnalyzeTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSparkLogAnalyzeTask",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSparkLogAnalyzeTaskResponse>(await this.callApi(params, req, runtime), new GetSparkLogAnalyzeTaskResponse({}));
  }

  async getSparkLogAnalyzeTask(request: GetSparkLogAnalyzeTaskRequest): Promise<GetSparkLogAnalyzeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkLogAnalyzeTaskWithOptions(request, runtime);
  }

  async getSparkSQLEngineStateWithOptions(request: GetSparkSQLEngineStateRequest, runtime: $Util.RuntimeOptions): Promise<GetSparkSQLEngineStateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.resourceGroupName)) {
      body["ResourceGroupName"] = request.resourceGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSparkSQLEngineState",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSparkSQLEngineStateResponse>(await this.callApi(params, req, runtime), new GetSparkSQLEngineStateResponse({}));
  }

  async getSparkSQLEngineState(request: GetSparkSQLEngineStateRequest): Promise<GetSparkSQLEngineStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkSQLEngineStateWithOptions(request, runtime);
  }

  async getSparkTemplateFileContentWithOptions(request: GetSparkTemplateFileContentRequest, runtime: $Util.RuntimeOptions): Promise<GetSparkTemplateFileContentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSparkTemplateFileContent",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSparkTemplateFileContentResponse>(await this.callApi(params, req, runtime), new GetSparkTemplateFileContentResponse({}));
  }

  async getSparkTemplateFileContent(request: GetSparkTemplateFileContentRequest): Promise<GetSparkTemplateFileContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkTemplateFileContentWithOptions(request, runtime);
  }

  /**
    * You can call this operation to query the directory structure but not application data in the directory. To query the directory structure that contains application data, call the [GetSparkTemplateFullTree](~~456205~~) operation.
    *
    * @param request GetSparkTemplateFolderTreeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetSparkTemplateFolderTreeResponse
   */
  async getSparkTemplateFolderTreeWithOptions(request: GetSparkTemplateFolderTreeRequest, runtime: $Util.RuntimeOptions): Promise<GetSparkTemplateFolderTreeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSparkTemplateFolderTree",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSparkTemplateFolderTreeResponse>(await this.callApi(params, req, runtime), new GetSparkTemplateFolderTreeResponse({}));
  }

  /**
    * You can call this operation to query the directory structure but not application data in the directory. To query the directory structure that contains application data, call the [GetSparkTemplateFullTree](~~456205~~) operation.
    *
    * @param request GetSparkTemplateFolderTreeRequest
    * @return GetSparkTemplateFolderTreeResponse
   */
  async getSparkTemplateFolderTree(request: GetSparkTemplateFolderTreeRequest): Promise<GetSparkTemplateFolderTreeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkTemplateFolderTreeWithOptions(request, runtime);
  }

  async getSparkTemplateFullTreeWithOptions(request: GetSparkTemplateFullTreeRequest, runtime: $Util.RuntimeOptions): Promise<GetSparkTemplateFullTreeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetSparkTemplateFullTree",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSparkTemplateFullTreeResponse>(await this.callApi(params, req, runtime), new GetSparkTemplateFullTreeResponse({}));
  }

  async getSparkTemplateFullTree(request: GetSparkTemplateFullTreeRequest): Promise<GetSparkTemplateFullTreeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkTemplateFullTreeWithOptions(request, runtime);
  }

  async getTableWithOptions(request: GetTableRequest, runtime: $Util.RuntimeOptions): Promise<GetTableResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
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
      action: "GetTable",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTableResponse>(await this.callApi(params, req, runtime), new GetTableResponse({}));
  }

  async getTable(request: GetTableRequest): Promise<GetTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTableWithOptions(request, runtime);
  }

  async getTableColumnsWithOptions(request: GetTableColumnsRequest, runtime: $Util.RuntimeOptions): Promise<GetTableColumnsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.columnName)) {
      query["ColumnName"] = request.columnName;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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
      action: "GetTableColumns",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTableColumnsResponse>(await this.callApi(params, req, runtime), new GetTableColumnsResponse({}));
  }

  async getTableColumns(request: GetTableColumnsRequest): Promise<GetTableColumnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTableColumnsWithOptions(request, runtime);
  }

  async getTableDDLWithOptions(request: GetTableDDLRequest, runtime: $Util.RuntimeOptions): Promise<GetTableDDLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "GetTableDDL",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTableDDLResponse>(await this.callApi(params, req, runtime), new GetTableDDLResponse({}));
  }

  async getTableDDL(request: GetTableDDLRequest): Promise<GetTableDDLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTableDDLWithOptions(request, runtime);
  }

  async getTableObjectsWithOptions(request: GetTableObjectsRequest, runtime: $Util.RuntimeOptions): Promise<GetTableObjectsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.filterDescription)) {
      query["FilterDescription"] = request.filterDescription;
    }

    if (!Util.isUnset(request.filterOwner)) {
      query["FilterOwner"] = request.filterOwner;
    }

    if (!Util.isUnset(request.filterTblName)) {
      query["FilterTblName"] = request.filterTblName;
    }

    if (!Util.isUnset(request.filterTblType)) {
      query["FilterTblType"] = request.filterTblType;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
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

    if (!Util.isUnset(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTableObjects",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTableObjectsResponse>(await this.callApi(params, req, runtime), new GetTableObjectsResponse({}));
  }

  async getTableObjects(request: GetTableObjectsRequest): Promise<GetTableObjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTableObjectsWithOptions(request, runtime);
  }

  async getViewDDLWithOptions(request: GetViewDDLRequest, runtime: $Util.RuntimeOptions): Promise<GetViewDDLResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!Util.isUnset(request.viewName)) {
      query["ViewName"] = request.viewName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetViewDDL",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetViewDDLResponse>(await this.callApi(params, req, runtime), new GetViewDDLResponse({}));
  }

  async getViewDDL(request: GetViewDDLRequest): Promise<GetViewDDLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getViewDDLWithOptions(request, runtime);
  }

  async getViewObjectsWithOptions(request: GetViewObjectsRequest, runtime: $Util.RuntimeOptions): Promise<GetViewObjectsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.filterOwner)) {
      query["FilterOwner"] = request.filterOwner;
    }

    if (!Util.isUnset(request.filterViewName)) {
      query["FilterViewName"] = request.filterViewName;
    }

    if (!Util.isUnset(request.filterViewType)) {
      query["FilterViewType"] = request.filterViewType;
    }

    if (!Util.isUnset(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
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

    if (!Util.isUnset(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetViewObjects",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetViewObjectsResponse>(await this.callApi(params, req, runtime), new GetViewObjectsResponse({}));
  }

  async getViewObjects(request: GetViewObjectsRequest): Promise<GetViewObjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getViewObjectsWithOptions(request, runtime);
  }

  async killSparkAppWithOptions(request: KillSparkAppRequest, runtime: $Util.RuntimeOptions): Promise<KillSparkAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "KillSparkApp",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<KillSparkAppResponse>(await this.callApi(params, req, runtime), new KillSparkAppResponse({}));
  }

  async killSparkApp(request: KillSparkAppRequest): Promise<KillSparkAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.killSparkAppWithOptions(request, runtime);
  }

  async killSparkLogAnalyzeTaskWithOptions(request: KillSparkLogAnalyzeTaskRequest, runtime: $Util.RuntimeOptions): Promise<KillSparkLogAnalyzeTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "KillSparkLogAnalyzeTask",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<KillSparkLogAnalyzeTaskResponse>(await this.callApi(params, req, runtime), new KillSparkLogAnalyzeTaskResponse({}));
  }

  async killSparkLogAnalyzeTask(request: KillSparkLogAnalyzeTaskRequest): Promise<KillSparkLogAnalyzeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.killSparkLogAnalyzeTaskWithOptions(request, runtime);
  }

  async killSparkSQLEngineWithOptions(request: KillSparkSQLEngineRequest, runtime: $Util.RuntimeOptions): Promise<KillSparkSQLEngineResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.resourceGroupName)) {
      body["ResourceGroupName"] = request.resourceGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "KillSparkSQLEngine",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<KillSparkSQLEngineResponse>(await this.callApi(params, req, runtime), new KillSparkSQLEngineResponse({}));
  }

  async killSparkSQLEngine(request: KillSparkSQLEngineRequest): Promise<KillSparkSQLEngineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.killSparkSQLEngineWithOptions(request, runtime);
  }

  async listSparkAppAttemptsWithOptions(request: ListSparkAppAttemptsRequest, runtime: $Util.RuntimeOptions): Promise<ListSparkAppAttemptsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
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
      action: "ListSparkAppAttempts",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSparkAppAttemptsResponse>(await this.callApi(params, req, runtime), new ListSparkAppAttemptsResponse({}));
  }

  async listSparkAppAttempts(request: ListSparkAppAttemptsRequest): Promise<ListSparkAppAttemptsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSparkAppAttemptsWithOptions(request, runtime);
  }

  async listSparkAppsWithOptions(request: ListSparkAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListSparkAppsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupName)) {
      query["ResourceGroupName"] = request.resourceGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSparkApps",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSparkAppsResponse>(await this.callApi(params, req, runtime), new ListSparkAppsResponse({}));
  }

  async listSparkApps(request: ListSparkAppsRequest): Promise<ListSparkAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSparkAppsWithOptions(request, runtime);
  }

  async listSparkLogAnalyzeTasksWithOptions(request: ListSparkLogAnalyzeTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListSparkLogAnalyzeTasksResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListSparkLogAnalyzeTasks",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSparkLogAnalyzeTasksResponse>(await this.callApi(params, req, runtime), new ListSparkLogAnalyzeTasksResponse({}));
  }

  async listSparkLogAnalyzeTasks(request: ListSparkLogAnalyzeTasksRequest): Promise<ListSparkLogAnalyzeTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSparkLogAnalyzeTasksWithOptions(request, runtime);
  }

  async listSparkTemplateFileIdsWithOptions(request: ListSparkTemplateFileIdsRequest, runtime: $Util.RuntimeOptions): Promise<ListSparkTemplateFileIdsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListSparkTemplateFileIds",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSparkTemplateFileIdsResponse>(await this.callApi(params, req, runtime), new ListSparkTemplateFileIdsResponse({}));
  }

  async listSparkTemplateFileIds(request: ListSparkTemplateFileIdsRequest): Promise<ListSparkTemplateFileIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSparkTemplateFileIdsWithOptions(request, runtime);
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAccountDescription",
      version: "2021-12-01",
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

  async modifyAccountPrivilegesWithOptions(tmpReq: ModifyAccountPrivilegesRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAccountPrivilegesResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyAccountPrivilegesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.accountPrivileges)) {
      request.accountPrivilegesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.accountPrivileges, "AccountPrivileges", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.accountPrivilegesShrink)) {
      query["AccountPrivileges"] = request.accountPrivilegesShrink;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAccountPrivileges",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAccountPrivilegesResponse>(await this.callApi(params, req, runtime), new ModifyAccountPrivilegesResponse({}));
  }

  async modifyAccountPrivileges(request: ModifyAccountPrivilegesRequest): Promise<ModifyAccountPrivilegesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountPrivilegesWithOptions(request, runtime);
  }

  async modifyAuditLogConfigWithOptions(request: ModifyAuditLogConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAuditLogConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auditLogStatus)) {
      query["AuditLogStatus"] = request.auditLogStatus;
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
      action: "ModifyAuditLogConfig",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAuditLogConfigResponse>(await this.callApi(params, req, runtime), new ModifyAuditLogConfigResponse({}));
  }

  async modifyAuditLogConfig(request: ModifyAuditLogConfigRequest): Promise<ModifyAuditLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAuditLogConfigWithOptions(request, runtime);
  }

  async modifyClusterAccessWhiteListWithOptions(request: ModifyClusterAccessWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<ModifyClusterAccessWhiteListResponse> {
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

    if (!Util.isUnset(request.securityIps)) {
      query["SecurityIps"] = request.securityIps;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyClusterAccessWhiteList",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyClusterAccessWhiteListResponse>(await this.callApi(params, req, runtime), new ModifyClusterAccessWhiteListResponse({}));
  }

  async modifyClusterAccessWhiteList(request: ModifyClusterAccessWhiteListRequest): Promise<ModifyClusterAccessWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyClusterAccessWhiteListWithOptions(request, runtime);
  }

  async modifyClusterConnectionStringWithOptions(request: ModifyClusterConnectionStringRequest, runtime: $Util.RuntimeOptions): Promise<ModifyClusterConnectionStringResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!Util.isUnset(request.currentConnectionString)) {
      query["CurrentConnectionString"] = request.currentConnectionString;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyClusterConnectionString",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyClusterConnectionStringResponse>(await this.callApi(params, req, runtime), new ModifyClusterConnectionStringResponse({}));
  }

  async modifyClusterConnectionString(request: ModifyClusterConnectionStringRequest): Promise<ModifyClusterConnectionStringResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyClusterConnectionStringWithOptions(request, runtime);
  }

  /**
    * *   During a scaling event, you are not allowed to execute the `SUBMIT JOB` statement to submit asynchronous tasks. If your business requires asynchronous tasks, perform scaling during appropriate periods.
    * *   When cluster specifications are scaled up or down, data in the cluster is migrated for redistribution. The amount of time required for data migration is proportional to the volume of data. During a scale-up or scale-down event, the services provided by the cluster are not interrupted. During a scale-down event, data migration can take up to dozens of hours to complete. Proceed with caution especially when your cluster contains a large amount of data.
    * *   If the cluster has a built-in dataset loaded, make sure that the cluster has reserved storage resources of at least 24 AnalyticDB compute units (ACUs). Otherwise, the built-in dataset cannot be used.
    *
    * @param request ModifyDBClusterRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyDBClusterResponse
   */
  async modifyDBClusterWithOptions(request: ModifyDBClusterRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.computeResource)) {
      query["ComputeResource"] = request.computeResource;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.enableDefaultResourcePool)) {
      query["EnableDefaultResourcePool"] = request.enableDefaultResourcePool;
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

    if (!Util.isUnset(request.storageResource)) {
      query["StorageResource"] = request.storageResource;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBCluster",
      version: "2021-12-01",
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

  /**
    * *   During a scaling event, you are not allowed to execute the `SUBMIT JOB` statement to submit asynchronous tasks. If your business requires asynchronous tasks, perform scaling during appropriate periods.
    * *   When cluster specifications are scaled up or down, data in the cluster is migrated for redistribution. The amount of time required for data migration is proportional to the volume of data. During a scale-up or scale-down event, the services provided by the cluster are not interrupted. During a scale-down event, data migration can take up to dozens of hours to complete. Proceed with caution especially when your cluster contains a large amount of data.
    * *   If the cluster has a built-in dataset loaded, make sure that the cluster has reserved storage resources of at least 24 AnalyticDB compute units (ACUs). Otherwise, the built-in dataset cannot be used.
    *
    * @param request ModifyDBClusterRequest
    * @return ModifyDBClusterResponse
   */
  async modifyDBCluster(request: ModifyDBClusterRequest): Promise<ModifyDBClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterWithOptions(request, runtime);
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBClusterDescription",
      version: "2021-12-01",
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBClusterMaintainTime",
      version: "2021-12-01",
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

  async modifyDBResourceGroupWithOptions(request: ModifyDBResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!Util.isUnset(request.maxComputeResource)) {
      query["MaxComputeResource"] = request.maxComputeResource;
    }

    if (!Util.isUnset(request.minComputeResource)) {
      query["MinComputeResource"] = request.minComputeResource;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDBResourceGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDBResourceGroupResponse>(await this.callApi(params, req, runtime), new ModifyDBResourceGroupResponse({}));
  }

  async modifyDBResourceGroup(request: ModifyDBResourceGroupRequest): Promise<ModifyDBResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBResourceGroupWithOptions(request, runtime);
  }

  async modifyElasticPlanWithOptions(request: ModifyElasticPlanRequest, runtime: $Util.RuntimeOptions): Promise<ModifyElasticPlanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cronExpression)) {
      query["CronExpression"] = request.cronExpression;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.elasticPlanName)) {
      query["ElasticPlanName"] = request.elasticPlanName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.targetSize)) {
      query["TargetSize"] = request.targetSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyElasticPlan",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyElasticPlanResponse>(await this.callApi(params, req, runtime), new ModifyElasticPlanResponse({}));
  }

  async modifyElasticPlan(request: ModifyElasticPlanRequest): Promise<ModifyElasticPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyElasticPlanWithOptions(request, runtime);
  }

  async preloadSparkAppMetricsWithOptions(request: PreloadSparkAppMetricsRequest, runtime: $Util.RuntimeOptions): Promise<PreloadSparkAppMetricsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PreloadSparkAppMetrics",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PreloadSparkAppMetricsResponse>(await this.callApi(params, req, runtime), new PreloadSparkAppMetricsResponse({}));
  }

  async preloadSparkAppMetrics(request: PreloadSparkAppMetricsRequest): Promise<PreloadSparkAppMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.preloadSparkAppMetricsWithOptions(request, runtime);
  }

  async releaseClusterPublicConnectionWithOptions(request: ReleaseClusterPublicConnectionRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseClusterPublicConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseClusterPublicConnection",
      version: "2021-12-01",
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetAccountPassword",
      version: "2021-12-01",
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

  async setSparkAppLogRootPathWithOptions(request: SetSparkAppLogRootPathRequest, runtime: $Util.RuntimeOptions): Promise<SetSparkAppLogRootPathResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.ossLogPath)) {
      body["OssLogPath"] = request.ossLogPath;
    }

    if (!Util.isUnset(request.useDefaultOss)) {
      body["UseDefaultOss"] = request.useDefaultOss;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SetSparkAppLogRootPath",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetSparkAppLogRootPathResponse>(await this.callApi(params, req, runtime), new SetSparkAppLogRootPathResponse({}));
  }

  async setSparkAppLogRootPath(request: SetSparkAppLogRootPathRequest): Promise<SetSparkAppLogRootPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setSparkAppLogRootPathWithOptions(request, runtime);
  }

  async startSparkSQLEngineWithOptions(request: StartSparkSQLEngineRequest, runtime: $Util.RuntimeOptions): Promise<StartSparkSQLEngineResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.config)) {
      body["Config"] = request.config;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.jars)) {
      body["Jars"] = request.jars;
    }

    if (!Util.isUnset(request.maxExecutor)) {
      body["MaxExecutor"] = request.maxExecutor;
    }

    if (!Util.isUnset(request.minExecutor)) {
      body["MinExecutor"] = request.minExecutor;
    }

    if (!Util.isUnset(request.resourceGroupName)) {
      body["ResourceGroupName"] = request.resourceGroupName;
    }

    if (!Util.isUnset(request.slotNum)) {
      body["SlotNum"] = request.slotNum;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartSparkSQLEngine",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartSparkSQLEngineResponse>(await this.callApi(params, req, runtime), new StartSparkSQLEngineResponse({}));
  }

  async startSparkSQLEngine(request: StartSparkSQLEngineRequest): Promise<StartSparkSQLEngineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startSparkSQLEngineWithOptions(request, runtime);
  }

  async submitSparkAppWithOptions(request: SubmitSparkAppRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSparkAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.agentSource)) {
      body["AgentSource"] = request.agentSource;
    }

    if (!Util.isUnset(request.agentVersion)) {
      body["AgentVersion"] = request.agentVersion;
    }

    if (!Util.isUnset(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.data)) {
      body["Data"] = request.data;
    }

    if (!Util.isUnset(request.resourceGroupName)) {
      body["ResourceGroupName"] = request.resourceGroupName;
    }

    if (!Util.isUnset(request.templateFileId)) {
      body["TemplateFileId"] = request.templateFileId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitSparkApp",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitSparkAppResponse>(await this.callApi(params, req, runtime), new SubmitSparkAppResponse({}));
  }

  async submitSparkApp(request: SubmitSparkAppRequest): Promise<SubmitSparkAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSparkAppWithOptions(request, runtime);
  }

  async submitSparkLogAnalyzeTaskWithOptions(request: SubmitSparkLogAnalyzeTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSparkLogAnalyzeTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitSparkLogAnalyzeTask",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitSparkLogAnalyzeTaskResponse>(await this.callApi(params, req, runtime), new SubmitSparkLogAnalyzeTaskResponse({}));
  }

  async submitSparkLogAnalyzeTask(request: SubmitSparkLogAnalyzeTaskRequest): Promise<SubmitSparkLogAnalyzeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSparkLogAnalyzeTaskWithOptions(request, runtime);
  }

  async unbindAccountWithOptions(request: UnbindAccountRequest, runtime: $Util.RuntimeOptions): Promise<UnbindAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnbindAccount",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindAccountResponse>(await this.callApi(params, req, runtime), new UnbindAccountResponse({}));
  }

  async unbindAccount(request: UnbindAccountRequest): Promise<UnbindAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindAccountWithOptions(request, runtime);
  }

  async updateSparkTemplateFileWithOptions(request: UpdateSparkTemplateFileRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSparkTemplateFileResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.resourceGroupName)) {
      body["ResourceGroupName"] = request.resourceGroupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSparkTemplateFile",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSparkTemplateFileResponse>(await this.callApi(params, req, runtime), new UpdateSparkTemplateFileResponse({}));
  }

  async updateSparkTemplateFile(request: UpdateSparkTemplateFileRequest): Promise<UpdateSparkTemplateFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSparkTemplateFileWithOptions(request, runtime);
  }

}
