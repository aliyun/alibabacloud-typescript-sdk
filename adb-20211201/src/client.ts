// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class Adb4MysqlSparkDiagnosisInfo extends $tea.Model {
  diagnosisCode?: string;
  diagnosisCodeLabel?: string;
  diagnosisMsg?: string;
  /**
   * @example
   * APPLICATION
   */
  diagnosisType?: string;
  static names(): { [key: string]: string } {
    return {
      diagnosisCode: 'DiagnosisCode',
      diagnosisCodeLabel: 'DiagnosisCodeLabel',
      diagnosisMsg: 'DiagnosisMsg',
      diagnosisType: 'DiagnosisType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosisCode: 'string',
      diagnosisCodeLabel: 'string',
      diagnosisMsg: 'string',
      diagnosisType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
  /**
   * @example
   * BATCH
   */
  appType?: string;
  /**
   * @example
   * amv-bp11q28kv****
   */
  DBClusterId?: string;
  /**
   * @example
   * {     "name": "SparkPi",     "file": "local:///tmp/spark-examples.jar",     "className": "org.apache.spark.examples.SparkPi",     "args": [         "1000000"     ],     "conf": {         "spark.driver.resourceSpec": "small",         "spark.executor.instances": 1,         "spark.executor.resourceSpec": "small"     } }
   */
  data?: string;
  /**
   * @example
   * 100
   */
  durationInMillis?: number;
  /**
   * @example
   * 100
   */
  estimateExecutionCpuTimeInSeconds?: number;
  /**
   * @example
   * s202204291426hzpre60cfa*****-0003
   */
  lastAttemptId?: string;
  /**
   * @example
   * 1651213645200
   */
  lastUpdatedTimeInMillis?: number;
  /**
   * @example
   * oss://<bucket-name>/logs/driver
   */
  logRootPath?: string;
  /**
   * @example
   * spark-rg
   */
  resourceGroupName?: string;
  /**
   * @example
   * 1651213645010
   */
  startedTimeInMillis?: number;
  /**
   * @example
   * 1651213645000
   */
  submittedTimeInMillis?: number;
  /**
   * @example
   * 1651213645300
   */
  terminatedTimeInMillis?: number;
  /**
   * @example
   * https://sparkui.aliyuncs.com/token=xxx
   */
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
  /**
   * @example
   * EXCEEDED_QUOTA
   */
  appErrorCode?: string;
  /**
   * @example
   * exception: xxxx
   */
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

export class OperatorNode extends $tea.Model {
  children?: OperatorNode[];
  id?: number;
  levelWidth?: number;
  nodeDepth?: number;
  nodeName?: string;
  nodeWidth?: number;
  parentId?: number;
  stats?: OperatorNodeStats;
  static names(): { [key: string]: string } {
    return {
      children: 'children',
      id: 'id',
      levelWidth: 'levelWidth',
      nodeDepth: 'nodeDepth',
      nodeName: 'nodeName',
      nodeWidth: 'nodeWidth',
      parentId: 'parentId',
      stats: 'stats',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': OperatorNode },
      id: 'number',
      levelWidth: 'number',
      nodeDepth: 'number',
      nodeName: 'string',
      nodeWidth: 'number',
      parentId: 'number',
      stats: OperatorNodeStats,
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
  /**
   * @example
   * amv-adbxxxxx
   */
  DBClusterId?: string;
  result?: LogAnalyzeResult;
  /**
   * @example
   * true
   */
  ruleMatched?: boolean;
  /**
   * @example
   * 1672123543000
   */
  startedTimeInMillis?: number;
  /**
   * @example
   * 1672123543000
   */
  submittedTimeInMillis?: number;
  /**
   * @example
   * Driver log not found
   */
  taskErrMsg?: string;
  /**
   * @example
   * 10
   */
  taskId?: number;
  /**
   * @example
   * WAITING
   */
  taskState?: string;
  /**
   * @example
   * 1672123543000
   */
  terminatedTimeInMillis?: number;
  /**
   * @example
   * 13719918xxx
   */
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
  /**
   * @example
   * s202207151211hz0cb4*****
   */
  appId?: string;
  /**
   * @example
   * Spark Test
   */
  appName?: string;
  /**
   * @example
   * amv-23xxxx
   */
  DBClusterId?: string;
  detail?: Detail;
  /**
   * @example
   * WARN: Disk is full
   */
  message?: string;
  /**
   * @example
   * NORMAL
   */
  priority?: string;
  /**
   * @example
   * FAILED
   */
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
  /**
   * @example
   * s202207151211hz0cb4200*****-0001
   */
  attemptId?: string;
  detail?: Detail;
  /**
   * @example
   * WARN: Disk is full
   */
  message?: string;
  /**
   * @example
   * NORMAL
   */
  priority?: string;
  /**
   * @example
   * RUNNING
   */
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

export class SparkOperatorInfo extends $tea.Model {
  metricValue?: number;
  operatorName?: Buffer;
  static names(): { [key: string]: string } {
    return {
      metricValue: 'MetricValue',
      operatorName: 'OperatorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricValue: 'number',
      operatorName: 'Buffer',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SparkSession extends $tea.Model {
  /**
   * @example
   * true
   */
  active?: string;
  /**
   * @example
   * 11123123
   */
  aliyunUid?: number;
  /**
   * @example
   * 15
   */
  sessionId?: number;
  /**
   * @example
   * idle
   */
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
  /**
   * @example
   * 1111111
   */
  aliyunUid?: number;
  /**
   * @example
   * SELECT * FROM table
   */
  code?: string;
  /**
   * @example
   * Waiting
   */
  codeState?: string;
  /**
   * @example
   * SQL
   */
  codeType?: string;
  /**
   * @example
   * 1658987911000
   */
  endTime?: number;
  /**
   * @example
   * Disk is full
   */
  error?: string;
  /**
   * @example
   * true
   */
  haveRows?: boolean;
  /**
   * @example
   * Spark is running, the ouput is...
   */
  output?: string;
  /**
   * @example
   * rg1
   */
  resourceGroup?: string;
  /**
   * @example
   * 10
   */
  sessionId?: number;
  /**
   * @example
   * 1658977911000
   */
  startTime?: number;
  /**
   * @example
   * 100
   */
  statementId?: number;
  /**
   * @example
   * 1000
   */
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
  /**
   * @remarks
   * The prefix of the public endpoint.
   * 
   * *   The prefix can contain lowercase letters, digits, and hyphens (-). It must start with a lowercase letter.
   * *   The prefix can be up to 30 characters in length.
   * 
   * @example
   * test12
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1z5d2q71is2****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database engine of the cluster. Valid values:
   * 
   * *   **AnalyticDB** (default): the AnalyticDB for MySQL engine.
   * *   **Clickhouse**: the wide table engine.
   * 
   * @example
   * Clickhouse
   */
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBClusterId: 'DBClusterId',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStringPrefix: 'string',
      DBClusterId: 'string',
      engine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateClusterPublicConnectionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 868EF07F-D0B2-5043-B092-0C14CD00B65A
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AllocateClusterPublicConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class AttachUserENIRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL Data Lakehouse Edition clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp11q28kvl688****
   */
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

export class AttachUserENIResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
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

export class AttachUserENIResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachUserENIResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachUserENIResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAccountRequest extends $tea.Model {
  /**
   * @remarks
   * The standard account of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * test_accout
   */
  accountName?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-wz99d9nh532****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the RAM user.
   * 
   * This parameter is required.
   * 
   * @example
   * 1444832459****
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DFF27323-3868-5F8A-917D-5D1D06B6BC0D
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class BindDBResourceGroupWithUserRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1ub9grke1****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The name of the database account. It can be a standard account or a privileged account.
   * 
   * This parameter is required.
   * 
   * @example
   * accout
   */
  groupUser?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      groupName: 'GroupName',
      groupUser: 'GroupUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      groupName: 'string',
      groupUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindDBResourceGroupWithUserResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
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

export class BindDBResourceGroupWithUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindDBResourceGroupWithUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BindDBResourceGroupWithUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckBindRamUserRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * @example
   * amv-wz9842849v6****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2FB9DCA3-DA56-5B43-A9A0-68E3D0E6AA84
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result of the request. Valid values:
   * 
   * *   **true**: the database account is associated with a RAM user.
   * *   **false**: the database account is not associated with a RAM user.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckBindRamUserResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class CheckSampleDataSetRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-wz9r8f67h4cqz41u
   */
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

export class CheckSampleDataSetResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0CE655C3-C211-513D-A42F-D4AE2D1A867C
   */
  requestId?: string;
  /**
   * @remarks
   * The state of the built-in dataset. Valid values:
   * 
   * *   **SUCCEED**: The dataset is loaded.
   * *   **INIT**: The dataset is being loaded.
   * *   **FAILED**: The dataset failed to be loaded.
   * *   **UNINITIALIZED**: The dataset is not loaded.
   * 
   * @example
   * UNINITIALIZED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckSampleDataSetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckSampleDataSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckSampleDataSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the account.
   * 
   * *   The description cannot start with `http://` or `https://`.
   * *   The description can be up to 256 characters in length.
   * 
   * @example
   * test
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * *   The name must start with a lowercase letter and end with a lowercase letter or a digit.
   * *   The name can contain lowercase letters, digits, and underscores (_).
   * *   The name must be 2 to 16 characters in length.
   * *   Reserved account names such as root, admin, and opsadmin cannot be used.
   * 
   * This parameter is required.
   * 
   * @example
   * test_accout
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the database account.
   * 
   * *   The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * *   Special characters include `! @ # $ % ^ & * ( ) _ + - =`
   * *   The password must be 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Test_accout1
   */
  accountPassword?: string;
  /**
   * @remarks
   * The type of the database account. Valid values:
   * 
   * *   **Normal**: standard account.
   * *   **Super**: privileged account.
   * 
   * This parameter is required.
   * 
   * @example
   * Normal
   */
  accountType?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database engine of the cluster. Valid values:
   * 
   * *   **AnalyticDB** (default): the AnalyticDB for MySQL engine.
   * *   **Clickhouse**: the wide table engine.
   * 
   * @example
   * Clickhouse
   */
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      accountType: 'AccountType',
      DBClusterId: 'DBClusterId',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountPassword: 'string',
      accountType: 'string',
      DBClusterId: 'string',
      engine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2FED790E-FB61-4721-8C1C-07C627FA5A19
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the backup set that you want to use to restore data.
   * 
   * >  You can call the [DescribeBackups](https://help.aliyun.com/document_detail/612318.html) operation to query the backup sets of the cluster.
   * 
   * @example
   * 1880808684
   */
  backupSetId?: string;
  /**
   * @remarks
   * The amount of reserved computing resources. Unit: ACUs. Valid values: 0 to 4096. The value must be in increments of 16 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
   * 
   * >  This parameter must be specified with a unit.
   * 
   * @example
   * 16ACU
   */
  computeResource?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * *   The description cannot start with `http://` or `https://`.
   * *   The description must be 2 to 256 characters in length
   * 
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The network type of the cluster. Only **VPC** is supported.
   * 
   * @example
   * VPC
   */
  DBClusterNetworkType?: string;
  /**
   * @remarks
   * The version of the cluster. Set the value to **5.0**.
   * 
   * This parameter is required.
   * 
   * @example
   * 5.0
   */
  DBClusterVersion?: string;
  diskEncryption?: boolean;
  /**
   * @remarks
   * Specifies whether to allocate all reserved computing resources to the user_default resource group. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  enableDefaultResourcePool?: boolean;
  kmsId?: string;
  /**
   * @remarks
   * The billing method of the cluster. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go.
   * *   **Prepaid**: subscription.
   * 
   * This parameter is required.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The subscription type of the subscription cluster. Valid values:
   * 
   * *   **Year**: subscription on a yearly basis.
   * *   **Month**: subscription on a monthly basis.
   * 
   * >  This parameter must be specified when PayType is set to Prepaid.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @example
   * LegacyForm
   */
  productForm?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  reservedNodeCount?: number;
  reservedNodeSize?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The point in time to which you want to restore data from the backup set.
   * 
   * @example
   * 2023-09-20T03:13:56Z
   */
  restoreToTime?: string;
  /**
   * @remarks
   * The method that you want to use to restore data. Valid values:
   * 
   * *   **backup**: restores data from a backup set. You must also specify the **BackupSetId** and **SourceDBClusterId** parameters.
   * *   **timepoint**: restores data to a point in time. You must also specify the **RestoreToTime** and **SourceDBClusterId** parameters.
   * 
   * @example
   * backup
   */
  restoreType?: string;
  /**
   * @remarks
   * The ID of the source AnalyticDB for MySQL Data Warehouse Edition cluster. If you want to restore a Data Lakehouse Edition cluster from a Data Warehouse Edition cluster, you must specify this parameter.
   * 
   * @example
   * amv-bp1r053byu48p****
   */
  sourceDbClusterId?: string;
  /**
   * @remarks
   * The amount of reserved storage resources. Unit: AnalyticDB compute units (ACUs). Valid values: 0 to 2064. The value must be in increments of 24 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
   * 
   * >  This parameter must be specified with a unit.
   * 
   * @example
   * 24ACU
   */
  storageResource?: string;
  /**
   * @remarks
   * The tags to add to the cluster.
   */
  tag?: CreateDBClusterRequestTag[];
  /**
   * @remarks
   * The subscription duration of the subscription cluster.
   * 
   * *   Valid values when **Period** is set to Year: 1 to 3 (integer).
   * *   Valid values when **Period** is set to Month: 1 to 9 (integer).
   * 
   * >  This parameter must be specified when PayType is set to **Prepaid**.
   * 
   * @example
   * 3
   */
  usedTime?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1at5ze0t5u3xtqn****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1aadw9k19x6cis9****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the most recent zone list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
      computeResource: 'ComputeResource',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterVersion: 'DBClusterVersion',
      diskEncryption: 'DiskEncryption',
      enableDefaultResourcePool: 'EnableDefaultResourcePool',
      kmsId: 'KmsId',
      payType: 'PayType',
      period: 'Period',
      productForm: 'ProductForm',
      regionId: 'RegionId',
      reservedNodeCount: 'ReservedNodeCount',
      reservedNodeSize: 'ReservedNodeSize',
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
      diskEncryption: 'boolean',
      enableDefaultResourcePool: 'boolean',
      kmsId: 'string',
      payType: 'string',
      period: 'string',
      productForm: 'string',
      regionId: 'string',
      reservedNodeCount: 'number',
      reservedNodeSize: 'string',
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @example
   * amv-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 202353278****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The default resource group ID.
   * 
   * @example
   * rg-4690g37929****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDBClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  clusterMode?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  clusterSizeResource?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the spot instance feature for the resource group. After you enable the spot instance feature, you are charged for resources at a lower unit price but the resources are probably released. You can enable the spot instance feature only for job resource groups. Valid values:
   * 
   * *   **True**
   * *   **False**
   * 
   * @example
   * True
   */
  enableSpot?: boolean;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * *   The name can be up to 255 characters in length.
   * *   The name must start with a letter or a digit.
   * *   The name can contain letters, digits, hyphens (_), and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * 
   * *   **Interactive**
   * *   **Job**
   * 
   * > For information about resource groups of Data Lakehouse Edition, see [Resource groups](https://help.aliyun.com/document_detail/428610.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Job
   */
  groupType?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  maxClusterCount?: number;
  /**
   * @remarks
   * The maximum reserved computing resources. Unit: ACU.
   * 
   * *   If GroupType is set to Interactive, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 16 ACUs.
   * *   If GroupType is set to Job, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 8 ACUs.
   * 
   * @example
   * 48
   */
  maxComputeResource?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  minClusterCount?: number;
  /**
   * @remarks
   * The minimum reserved computing resources. Unit: AnalyticDB Compute Units (ACUs).
   * 
   * *   When GroupType is set to Interactive, set this parameter to 16 ACUs.
   * *   When GroupType is set to Job, set this parameter to 0 ACUs.
   * 
   * @example
   * 0
   */
  minComputeResource?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/612393.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The job resubmission rules.
   */
  rules?: CreateDBResourceGroupRequestRules[];
  static names(): { [key: string]: string } {
    return {
      clusterMode: 'ClusterMode',
      clusterSizeResource: 'ClusterSizeResource',
      DBClusterId: 'DBClusterId',
      enableSpot: 'EnableSpot',
      groupName: 'GroupName',
      groupType: 'GroupType',
      maxClusterCount: 'MaxClusterCount',
      maxComputeResource: 'MaxComputeResource',
      minClusterCount: 'MinClusterCount',
      minComputeResource: 'MinComputeResource',
      regionId: 'RegionId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterMode: 'string',
      clusterSizeResource: 'string',
      DBClusterId: 'string',
      enableSpot: 'boolean',
      groupName: 'string',
      groupType: 'string',
      maxClusterCount: 'number',
      maxComputeResource: 'string',
      minClusterCount: 'number',
      minComputeResource: 'string',
      regionId: 'string',
      rules: { 'type': 'array', 'itemType': CreateDBResourceGroupRequestRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBResourceGroupShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  clusterMode?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  clusterSizeResource?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the spot instance feature for the resource group. After you enable the spot instance feature, you are charged for resources at a lower unit price but the resources are probably released. You can enable the spot instance feature only for job resource groups. Valid values:
   * 
   * *   **True**
   * *   **False**
   * 
   * @example
   * True
   */
  enableSpot?: boolean;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * *   The name can be up to 255 characters in length.
   * *   The name must start with a letter or a digit.
   * *   The name can contain letters, digits, hyphens (_), and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * 
   * *   **Interactive**
   * *   **Job**
   * 
   * > For information about resource groups of Data Lakehouse Edition, see [Resource groups](https://help.aliyun.com/document_detail/428610.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Job
   */
  groupType?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  maxClusterCount?: number;
  /**
   * @remarks
   * The maximum reserved computing resources. Unit: ACU.
   * 
   * *   If GroupType is set to Interactive, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 16 ACUs.
   * *   If GroupType is set to Job, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 8 ACUs.
   * 
   * @example
   * 48
   */
  maxComputeResource?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  minClusterCount?: number;
  /**
   * @remarks
   * The minimum reserved computing resources. Unit: AnalyticDB Compute Units (ACUs).
   * 
   * *   When GroupType is set to Interactive, set this parameter to 16 ACUs.
   * *   When GroupType is set to Job, set this parameter to 0 ACUs.
   * 
   * @example
   * 0
   */
  minComputeResource?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/612393.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The job resubmission rules.
   */
  rulesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterMode: 'ClusterMode',
      clusterSizeResource: 'ClusterSizeResource',
      DBClusterId: 'DBClusterId',
      enableSpot: 'EnableSpot',
      groupName: 'GroupName',
      groupType: 'GroupType',
      maxClusterCount: 'MaxClusterCount',
      maxComputeResource: 'MaxComputeResource',
      minClusterCount: 'MinClusterCount',
      minComputeResource: 'MinComputeResource',
      regionId: 'RegionId',
      rulesShrink: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterMode: 'string',
      clusterSizeResource: 'string',
      DBClusterId: 'string',
      enableSpot: 'boolean',
      groupName: 'string',
      groupType: 'string',
      maxClusterCount: 'number',
      maxComputeResource: 'string',
      minClusterCount: 'number',
      minComputeResource: 'string',
      regionId: 'string',
      rulesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBResourceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A94B6C02-7BD4-5D67-9776-3AC8317E8DD5
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDBResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * Specifies whether to enable **Default Proportional Scaling for EIUs**. Valid values:
   * 
   * *   true. In this case, storage resources are scaled along with computing resources, and the TargetSize and CronExpression parameters are not supported.
   * *   false
   * 
   * > 
   * 
   * *   This parameter must be specified when Type is set to WORKER. This parameter is not required when Type is set to EXECUTOR.
   * 
   * *   You can enable Default Proportional Scaling for EIUs for only a single scaling plan of a cluster.
   * 
   * @example
   * false
   */
  autoScale?: boolean;
  /**
   * @remarks
   * A CORN expression that specifies the scaling cycle and time for the scaling plan.
   * 
   * @example
   * 0 20 14 * * ?
   */
  cronExpression?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-wz9509beptiz****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the scaling plan.
   * 
   * >  The name must be 2 to 30 characters in length and can contain letters, digits, and underscores (_). The name must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  elasticPlanName?: string;
  /**
   * @remarks
   * Specifies whether to immediately enable the scaling plan after the plan is created. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The end time of the scaling plan.
   * 
   * >  Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2025-01-01T12:01:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * > 
   * 
   * *   If you want to create a scaling plan that uses interactive resource groups, you must specify this parameter. If you want to create a scaling plan that uses elastic I/O units (EIUs), you do not need to specify this parameter.
   * 
   * *   You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/459446.html) operation to query the resource group name for a cluster.
   * 
   * @example
   * test
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The start time of the scaling plan.
   * 
   * >  Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2022-01-01T12:01:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The desired specifications of elastic resources after scaling.
   * 
   * > 
   * 
   * *   If the scaling plan uses **EIUs** and **Default Proportional Scaling for EIUs** is enabled, you do not need to specify this parameter. In other cases, you must specify this parameter.
   * 
   * *   You can call the [DescribeElasticPlanSpecifications](https://help.aliyun.com/document_detail/601278.html) operation to query the specifications that are supported for scaling plans.
   * 
   * @example
   * 32ACU
   */
  targetSize?: string;
  /**
   * @remarks
   * The type of the scaling plan. Valid values:
   * 
   * *   EXECUTOR: the interactive resource group type, which indicates the computing resource type.
   * *   WORKER: the EIU type.
   * 
   * This parameter is required.
   * 
   * @example
   * EXECUTOR
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5C433C2-001F-58E3-99F5-3274C14DF8BD
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateElasticPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612397.html) operation to query the information about all AnalyticDB for MySQL Data Lakehouse Edition clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp149vz49b36t****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The OSS path where you want to create a subdirectory.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://testBucketName/das_lakehouse
   */
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
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateOssSubDirectoryResponseBodyData;
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * *   If the request was successful, a **success** message is returned.
   * *   If the request failed, an error message is returned.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3A0DE2E0-A37B-5EE4-9136-C4C473714802
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * True
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateOssSubDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class CreatePerformanceViewRequest extends $tea.Model {
  /**
   * @example
   * Basic
   */
  createFromViewType?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612397.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1ub9grke1****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to populate the names of the metrics in the original monitoring view when you view the monitoring view. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  fillOriginViewKeys?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The information about the monitoring view.
   * 
   * This parameter is required.
   */
  viewDetail?: CreatePerformanceViewRequestViewDetail;
  /**
   * @remarks
   * This parameter is required.
   */
  viewName?: string;
  static names(): { [key: string]: string } {
    return {
      createFromViewType: 'CreateFromViewType',
      DBClusterId: 'DBClusterId',
      fillOriginViewKeys: 'FillOriginViewKeys',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      viewDetail: 'ViewDetail',
      viewName: 'ViewName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createFromViewType: 'string',
      DBClusterId: 'string',
      fillOriginViewKeys: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      viewDetail: CreatePerformanceViewRequestViewDetail,
      viewName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePerformanceViewShrinkRequest extends $tea.Model {
  /**
   * @example
   * Basic
   */
  createFromViewType?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612397.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1ub9grke1****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to populate the names of the metrics in the original monitoring view when you view the monitoring view. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  fillOriginViewKeys?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The information about the monitoring view.
   * 
   * This parameter is required.
   */
  viewDetailShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  viewName?: string;
  static names(): { [key: string]: string } {
    return {
      createFromViewType: 'CreateFromViewType',
      DBClusterId: 'DBClusterId',
      fillOriginViewKeys: 'FillOriginViewKeys',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      viewDetailShrink: 'ViewDetail',
      viewName: 'ViewName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createFromViewType: 'string',
      DBClusterId: 'string',
      fillOriginViewKeys: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      viewDetailShrink: 'string',
      viewName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePerformanceViewResponseBody extends $tea.Model {
  /**
   * @example
   * {
   *     "PolicyType": "AccountLevelIdentityBasedPolicy",
   *     "AuthPrincipalOwnerId": "1*****************7",
   *     "EncodedDiagnosticMessage": "AQIBIAAAAOPdwKY2QLOvgMEc7SkkoJfj1kvZwsaRqNYMh10Tv0wTe0fCzaCdrvgazfNb0EnJKETgXyhR+3BIQjx9WAqZryejBsp1Bl4qI5En/D9dEhcXAtKCxCmE2kZCiEzpy8BoEUt+bs0DmlaGWO5xkEpttypLIB4rUhDvZd+zwPg4EXk4KSSWSWsurxtqDkKEMshKlQFBTKvJcKwyhk62IeYly4hQ+5IpXjkh1GQXuDRCQ==",
   *     "AuthPrincipalType": "SubUser",
   *     "AuthPrincipalDisplayName": "2***************9",
   *     "NoPermissionType": "ImplicitDeny",
   *     "AuthAction": "adb:DescribeExcessivePrimaryKeys"
   * }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The creation result. Valid values:
   * 
   * *   **SUCCESS**
   * *   **FAILED**
   * 
   * @example
   * SUCCESS
   */
  createStatus?: string;
  /**
   * @example
   * E031AABF-BD56-5966-A063-4283EF18DB45
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      createStatus: 'CreateStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      createStatus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePerformanceViewResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePerformanceViewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePerformanceViewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSparkTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * The application type. Valid values:
   * 
   * *   **SQL**
   * *   **STREAMING**
   * *   **BATCH**
   * 
   * >  You do not need to specify this parameter when Type is set to folder.
   * 
   * @example
   * SQL
   */
  appType?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the application template. The name can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * batchfile
   */
  name?: string;
  /**
   * @remarks
   * The ID of the directory to which the application template belongs.
   * 
   * >  You can call the [GetSparkTemplateFolderTree](https://help.aliyun.com/document_detail/456218.html) operation to query the directory ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  parentId?: number;
  /**
   * @remarks
   * The type of the application template. Valid values:
   * 
   * *   **folder**: directory.
   * *   **file**: application.
   * 
   * This parameter is required.
   * 
   * @example
   * file
   */
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
  /**
   * @remarks
   * The creation result.
   */
  data?: CreateSparkTemplateResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSparkTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The name of the database account.
   * 
   * >  You can call the [DescribeAccounts](https://help.aliyun.com/document_detail/612430.html) operation to query the information about database accounts for a cluster, including the account name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_accout
   */
  accountName?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database engine of the cluster. Valid values:
   * 
   * *   **AnalyticDB** (default): the AnalyticDB for MySQL engine.
   * *   **Clickhouse**: the wide table engine.
   * 
   * @example
   * Clickhouse
   */
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBClusterId: 'DBClusterId',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBClusterId: 'string',
      engine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2FED790E-FB61-4721-8C1C-07C627FA5A19
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1r053byu48p****
   */
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @example
   * amv-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDBClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * >  You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/612410.html) operation to query the information about resource groups of an AnalyticDB for MySQL cluster, including resource group names.
   * 
   * This parameter is required.
   * 
   * @example
   * test_group
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A94B6C02-7BD4-5D67-9776-3AC8317E8DD3
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDBResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-wz9509beptiz****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the scaling plan.
   * 
   * >  You can call the [DescribeElasticPlans](https://help.aliyun.com/document_detail/601334.html) operation to query the names of scaling plans.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5C433C2-001F-58E3-99F5-3274C14DF8BD
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteElasticPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DeletePerformanceViewRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612397.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-uf6wjk5xxxxxxxxxx
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  viewName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      viewName: 'ViewName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      viewName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePerformanceViewResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * >  This parameter is returned only if Resource Access Management (RAM) permission verification failed.
   * 
   * @example
   * {
   *     "PolicyType": "AccountLevelIdentityBasedPolicy",
   *     "AuthPrincipalOwnerId": "1*****************7",
   *     "EncodedDiagnosticMessage": "AQIBIAAAAOPdwKY2QLOvgMEc7SkkoJfj1kvZwsaRqNYMh10Tv0wTe0fCzaCdrvgazfNb0EnJKETgXyhR+3BIQjx9WAqZryejBsp1Bl4qI5En/D9dEhcXAtKCxCmE2kZCiEzpy8BoEUt+bs0DmlaGWO5xkEpttypLIB4rUhDvZd+zwPg4EXk4KSSWSWsurxtqDkKEMshKlQFBTKvJcKwyhk62IeYly4hQ+5IpXjkh1GQXuDRCQ==",
   *     "AuthPrincipalType": "SubUser",
   *     "AuthPrincipalDisplayName": "2***************9",
   *     "NoPermissionType": "ImplicitDeny",
   *     "AuthAction": "adb:DescribeExcessivePrimaryKeys"
   * }
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * SUCCESS
   */
  deleteStatus?: boolean;
  /**
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      deleteStatus: 'DeleteStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      deleteStatus: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePerformanceViewResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePerformanceViewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePerformanceViewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProcessInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612397.html) operation to query the IDs of all AnalyticDB for MySQL clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-wz9rq819u71ig****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the workflow instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 4017
   */
  processInstanceId?: number;
  /**
   * @remarks
   * The project ID, which is the unique identifier of the project.
   * 
   * This parameter is required.
   * 
   * @example
   * 9839028042592
   */
  projectCode?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @remarks
   * Indicates whether the workflow instance is deleted. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The returned message. Valid values:
   * 
   * *   If the request was successful, **Success** is returned.
   * *   If the request failed, an error message is returned.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 115F9CCA-EF2E-5F91-AB60-4961D52FEAB4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteProcessInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The directory ID of the template files that you want to delete.
   * 
   * > 
   * 
   * *   You can call the [GetSparkTemplateFullTree](https://help.aliyun.com/document_detail/456205.html) operation to query the directory ID of template files.
   * 
   * *   When you specify a directory ID, the directory and all template files that are included in the directory are deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * 725204
   */
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
  /**
   * @remarks
   * The returned result.
   */
  data?: DeleteSparkTemplateResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSparkTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1y769u11748****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the template file to be deleted.
   * 
   * >  You can call the [GetSparkTemplateFullTree](https://help.aliyun.com/document_detail/456205.html) operation to query all template file IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 284
   */
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
  /**
   * @remarks
   * The deletion result.
   */
  data?: DeleteSparkTemplateFileResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C3A9594F-1D40-4472-A96C-8FB8AA20D38C
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSparkTemplateFileResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The name of the database account.
   * 
   * This parameter is required.
   * 
   * @example
   * account1
   */
  accountName?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp14t95lun0w****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies the start position marker from which to return results. If you receive a response indicating that the results are truncated, set this parameter to the value of the `Marker` parameter in the response that you received.
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @remarks
   * Details of the permissions.
   */
  data?: DescribeAccountAllPrivilegesResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3BB185E9-BB54-1727-B876-13243E4C0EB5
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAccountAllPrivilegesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The name of the database account.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * The column name that is used to filter columns.
   * 
   * @example
   * col1
   */
  columnPrivilegeObject?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1k3wdmt139****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database name that is used to filter databases.
   * 
   * @example
   * database1
   */
  databasePrivilegeObject?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The permission level. Valid values: Database, Table, and Column. Global is not supported.
   * 
   * @example
   * Column
   */
  privilegeType?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ch-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The table name that is used to filter tables.
   * 
   * @example
   * table1
   */
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
  /**
   * @remarks
   * The permissions.
   */
  data?: DescribeAccountPrivilegeObjectsResponseBodyData[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 34B2AD29-682F-1C14-B3AA-9EF1A96084B8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 23
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAccountPrivilegeObjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The name of the database account.
   * 
   * This parameter is required.
   * 
   * @example
   * account1
   */
  accountName?: string;
  /**
   * @remarks
   * The columns that you want to query. You can use this parameter to query the permissions of the database account on specific columns. This parameter is available only if the PrivilegeType parameter is set to Column.
   * 
   * @example
   * col1
   */
  columnPrivilegeObject?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1k5p066e1a****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The databases that you want to query. You can use this parameter to query the permissions of the database account on specific databases. This parameter is available only if the PrivilegeType parameter is set to Database, Table, or Column.
   * 
   * @example
   * db1
   */
  databasePrivilegeObject?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The permission level that you want to query. You can call the `DescribeEnabledPrivileges` operation to query the permission level of the database account.
   * 
   * @example
   * Global
   */
  privilegeType?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The tables that you want to query. You can use this parameter to query the permissions of the database account on specific tables. This parameter can be used together with the DatabasePrivilegeObject parameter. This parameter is available only if the PrivilegeType parameter is set to Table or Column.
   * 
   * @example
   * table1
   */
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
  /**
   * @remarks
   * Details of the permissions.
   */
  data?: DescribeAccountPrivilegesResponseBodyData[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DA32480A-E3E5-1BE7-BA98-724551DC04C8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAccountPrivilegesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The name of the database account.
   * 
   * > If you do not specify this parameter, the information about all database accounts in the cluster is returned.
   * 
   * @example
   * test_accout
   */
  accountName?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database engine of the cluster. Valid values:
   * 
   * *   **AnalyticDB** (default): the AnalyticDB for MySQL engine.
   * *   **Clickhouse**: the wide table engine.
   * 
   * @example
   * Clickhouse
   */
  engine?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBClusterId: 'DBClusterId',
      engine: 'Engine',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBClusterId: 'string',
      engine: 'string',
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queried database accounts.
   */
  accountList?: DescribeAccountsResponseBodyAccountList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9CCFAAB4-97B7-5800-B9F2-685EB596E3EF
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition clusters within a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  schema?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
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
  /**
   * @remarks
   * The total number of columns.
   * 
   * @example
   * 1
   */
  columnCount?: number;
  /**
   * @remarks
   * Details of the columns.
   */
  columns?: DescribeAdbMySqlColumnsResponseBodyColumns[];
  /**
   * @remarks
   * The message returned for the operation. Valid values:
   * 
   * *   **Success** is returned if the operation is successful.
   * *   An error message is returned if the operation fails.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A9F013CD-0222-595E-8157-445969B97F03
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  schema?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values:
   * 
   * *   **true**: The operation is successful.
   * *   **false**: The operation fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAdbMySqlColumnsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * *   If the request was successful, a **success** message is returned.
   * *   If the request failed, an error message is returned.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The queried databases.
   */
  schemas?: string[];
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAdbMySqlSchemasResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   * 
   * **if can be null:**
   * false
   */
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
  /**
   * @remarks
   * The message returned for the operation. Valid values:
   * 
   * *   **Success** is returned if the operation is successful.
   * *   An error message is returned if the operation fails.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7A7D49E3-5585-5DF8-B62C-75C46B4991DC
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  schema?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values:
   * 
   * *   **true**: The operation is successful.
   * *   **false**: The operation fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The names of tables.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAdbMySqlTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1pke2pcfavw****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
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
  /**
   * @remarks
   * The queried columns.
   */
  columns?: DescribeAllDataSourceResponseBodyColumns;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C7EDB8E4-9769-4233-88C7-DCA4C9******
   */
  requestId?: string;
  /**
   * @remarks
   * The queried databases.
   */
  schemas?: DescribeAllDataSourceResponseBodySchemas;
  /**
   * @remarks
   * The queried tables.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAllDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the logs to be queried. Specify the time in the ISO 8601 standard in the **yyyy-MM-ddTHH:mm:ssZ** format. The time must be in UTC.
   * 
   * >  The end time must be later than the start time. The maximum time range that can be specified is 30 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-02-11T09:30:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The keyword that you want to use for fuzzy match in the query.
   * 
   * @example
   * table_test
   */
  keyword?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The phase during which the logs to be queried were generated. Valid values:
   * 
   * *   **StructureMigrate**: schema migration.
   * *   **FullDataSync**: full data synchronization.
   * *   **IncrementalSync**: incremental data synchronization.
   * 
   * >  If you do not specify this parameter, logs of all the phases are queried.
   * 
   * @example
   * FullDataSync
   */
  stage?: string;
  /**
   * @remarks
   * The start time of the logs to be queried. Specify the time in the ISO 8601 standard in the **yyyy-MM-ddTHH:mm:ssZ** format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-02-11T08:30:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The types of the logs. Separate multiple log types with commas (,). Valid values:
   * 
   * *   **INFO**
   * *   **WARN**
   * *   **ERROR**
   * 
   * >  If you do not specify this parameter, logs of all types are queried.
   * 
   * @example
   * INFO,WARN,ERROR
   */
  state?: string;
  /**
   * @remarks
   * The ID of the real-time data ingestion job.
   * 
   * This parameter is required.
   * 
   * @example
   * aps-hz109vpvt4fg8528d****
   */
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
  /**
   * @remarks
   * The information about the request denial.
   * 
   * @example
   * {
   *   "AuthAction": "xxx",
   *   "AuthPrincipalDisplayName": "sampleName",
   *   "AuthPrincipalOwnerId": "111111111111111111",
   *   "AuthPrincipalType": "SubUser",
   *   "AuthResource": "xxx",
   *   "NoPermissionType": "xxx",
   *   "PolicyType": "xxx"
   * }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The queried logs.
   */
  actionLogs?: DescribeApsActionLogsResponseBodyActionLogs[];
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @example
   * amv-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5EDBA27-AF3E-5966-9503-FD1557E19167
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  totalCount?: string;
  /**
   * @remarks
   * The ID of the real-time data ingestion job.
   * 
   * @example
   * aps-hz109vpvt4fg8528d****
   */
  workloadId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
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
      accessDeniedDetail: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApsActionLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612397.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1t6rym21****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the data synchronization job.
   * 
   * @example
   * aps-hz1686v37sx****
   */
  workloadId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      workloadId: 'WorkloadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      workloadId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApsResourceGroupsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queried resource groups.
   */
  data?: DescribeApsResourceGroupsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * *   If the request was successful, a success message is returned.
   * *   If the request failed, an error message is returned.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6FC370D7-1D4C-5A8E-805E-F73366382C66
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * True
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApsResourceGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-t4nj8619bz2w3****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database on which the SQL statement was executed.
   * 
   * @example
   * adb_demo
   */
  DBName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * 
   * > 
   * 
   * *   The end time must be later than the start time.
   * 
   * *   The maximum time range that can be specified is 24 hours.
   * 
   * @example
   * 2022-08-12T17:08Z
   */
  endTime?: string;
  /**
   * @remarks
   * The IP address and port number of the client that is used to execute the SQL statement.
   * 
   * @example
   * 100.104.XX.XX:43908
   */
  hostAddress?: string;
  /**
   * @remarks
   * The order in which to sort the retrieved entries by field. Specify this parameter in the JSON format. The value is an ordered array that uses the order of the input array and contains `Field` and `Type`. Example: `[{"Field":"ExecutionStartTime","Type":"Desc"},{"Field":"ScanRows","Type":"Asc"}]`. Fields:
   * 
   * *   `Field`: the field that is used to sort the retrieved entries. Valid values:
   * 
   *     *   **HostAddress**: the IP address of the client that is used to connect to the database.
   *     *   **UserName**: the username.
   *     *   **ExecutionStartTime**: the start time of the query execution.
   *     *   **QueryTime**: the amount of time consumed to execute the SQL statement.
   *     *   **PeakMemoryUsage**: the maximum memory usage when the SQL statement is executed.
   *     *   **ScanRows**: the number of rows to be scanned from a data source in the task.
   *     *   **ScanSize**: the amount of data to be scanned.
   *     *   **ScanTime**: the total amount of time consumed to scan data.
   *     *   **PlanningTime**: the amount of time consumed to generate execution plans.
   *     *   **WallTime**: the accumulated CPU Time values of all operators in the query on each node.
   *     *   **ProcessID**: the process ID.
   * 
   * *   `Type`: the sorting type of the retrieved entries. Valid values:
   * 
   *     *   **Desc**: descending order.
   *     *   **Asc**: ascending order.
   * 
   * @example
   * [{"Field":"ExecuteTime","Type":"Desc"},{"Field":"HostAddress","Type":"Asc"}]
   */
  order?: string;
  /**
   * @remarks
   * The sorting order of the retrieved entries. Valid values:
   * 
   * *   **asc**: sorts the retrieved entries by time in ascending order.
   * *   **desc**: sorts the retrieved entries by time in descending order.
   * 
   * @example
   * asc
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **10** (default)
   * *   **30**
   * *   **50**
   * *   **100**
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * none
   */
  proxyUser?: string;
  /**
   * @remarks
   * The keyword based on which audit logs are queried. You can set this parameter to a value of the STRING type.
   * 
   * @example
   * adb
   */
  queryKeyword?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the SQL statement. Valid values:
   * 
   * *   **DELETE**
   * *   **SELECT**
   * *   **UPDATE**
   * *   **INSERT INTO SELECT**
   * *   **ALTER**
   * *   **DROP**
   * *   **CREATE**
   * 
   * >  You can query only a single type of SQL statements at a time. If you leave this parameter empty, the **SELECT** statements are queried.
   * 
   * @example
   * SELECT
   */
  sqlType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * 
   * > SQL audit logs can be queried only when SQL audit is enabled. Only SQL audit logs within the last 30 days can be queried. If SQL audit was disabled and re-enabled, only SQL audit logs from the time when SQL audit was re-enabled can be queried.
   * 
   * @example
   * 2022-08-12T04:17Z
   */
  startTime?: string;
  /**
   * @remarks
   * Specifies whether the execution of the SQL statement succeeds. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  succeed?: string;
  /**
   * @remarks
   * The username that is used to execute the SQL statement.
   * 
   * @example
   * test
   */
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @example
   * amv-t4nj8619bz2w3****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The queried SQL audit logs.
   */
  items?: DescribeAuditLogRecordsResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8A564B7F-8C00-43C0-8EC5-919FBB70573
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 6974
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAuditLogRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeBackupPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-uf6s7oa710rbu0x3b
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
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

export class DescribeBackupPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The number of days for which data backup files are retained.
   * 
   * @example
   * 7
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * Indicates whether log backup is enabled. Valid values:
   * 
   * *   **Enable**
   * *   **Disable**
   * 
   * @example
   * true
   */
  enableBackupLog?: string;
  /**
   * @remarks
   * The number of days for which the log backup files are retained.
   * 
   * @example
   * 7
   */
  logBackupRetentionPeriod?: number;
  /**
   * @remarks
   * The cycle based on which backups are performed. If more than one day of the week are specified, the days of the week are separated by commas (,). Valid value:
   * 
   * *   Monday
   * *   Tuesday
   * *   Wednesday
   * *   Thursday
   * *   Friday
   * *   Saturday
   * *   Sunday
   * 
   * @example
   * Wednesday,Saturday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The data backup time. The time is in the HH:mmZ-HH:mmZ format. The time is displayed in UTC.
   * 
   * @example
   * 15:00Z-16:00Z
   */
  preferredBackupTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPeriod: 'BackupRetentionPeriod',
      enableBackupLog: 'EnableBackupLog',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRetentionPeriod: 'number',
      enableBackupLog: 'string',
      logBackupRetentionPeriod: 'number',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeBackupsRequest extends $tea.Model {
  /**
   * @remarks
   * The backup set ID.
   * 
   * @example
   * 1679758862
   */
  backupId?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp18934i73vb5****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC. The end time must be later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-02-20T02:30Z
   */
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   30
   * *   50
   * *   100
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2011-06-01T16:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      DBClusterId: 'string',
      endTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queried backup sets.
   */
  items?: DescribeBackupsResponseBodyItems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CE17270B-F8F8-5A31-9DB4-DADDFDAD7940
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 300
   */
  totalCount?: string;
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
      items: DescribeBackupsResponseBodyItems,
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

export class DescribeBackupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBackupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeBackupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAccessWhiteListRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
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
  /**
   * @remarks
   * The queried IP address whitelists.
   */
  items?: DescribeClusterAccessWhiteListResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 370D09FD-442A-5225-AAD3-7362CAE39177
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterAccessWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-wz9dqvn0o7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database engine of the cluster. Valid values:
   * 
   * *   **AnalyticDB** (default): the AnalyticDB for MySQL engine.
   * *   **Clickhouse**: the wide table engine.
   * 
   * @example
   * Clickhouse
   */
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      engine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNetInfoResponseBody extends $tea.Model {
  /**
   * @remarks
   * The network type of the cluster. Only the Virtual Private Cloud (VPC) network type is supported. **VPC** is returned.
   * 
   * @example
   * VPC
   */
  clusterNetworkType?: string;
  /**
   * @remarks
   * The queried network information about the cluster.
   */
  items?: DescribeClusterNetInfoResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 69A29B65-CD0C-52B1-BE42-8B454569747F
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterNetInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeClusterResourceDetailRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1jj9xqft1po****
   */
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

export class DescribeClusterResourceDetailResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The information about the cluster resource usage.
   */
  data?: DescribeClusterResourceDetailResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeClusterResourceDetailResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResourceDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterResourceDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClusterResourceDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResourceUsageRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612397.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-08-22T01:06:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-11-29T10:20Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResourceUsageResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The queried resource usage.
   */
  data?: DescribeClusterResourceUsageResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEAW
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeClusterResourceUsageResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResourceUsageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterResourceUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeClusterResourceUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
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
  /**
   * @remarks
   * The queried columns.
   */
  items?: DescribeColumnsResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-XXX442913CEF
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeColumnsResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeComputeResourceUsageRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-02-05T03:45:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-02-04T03:45:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      resourceGroupName: 'ResourceGroupName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      resourceGroupName: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComputeResourceUsageResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The queried resource usage.
   */
  data?: DescribeComputeResourceUsageResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEAW
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeComputeResourceUsageResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComputeResourceUsageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeComputeResourceUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeComputeResourceUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-wz9509beptiz****
   */
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
  /**
   * @remarks
   * The queried information about the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   */
  items?: DescribeDBClusterAttributeResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5C433C2-001F-58E3-99F5-3274C14DF8BD
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612397.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-uf6o6m8p6x7v****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The access nodes of the queried cluster.
   */
  CS?: DescribeDBClusterHealthStatusResponseBodyCS;
  /**
   * @remarks
   * The compute node groups of the queried cluster.
   */
  executor?: DescribeDBClusterHealthStatusResponseBodyExecutor;
  /**
   * @remarks
   * The health state of the cluster. Valid values:
   * 
   * *   **RISK**
   * *   **NORMAL**
   * *   **UNAVAILABLE**
   * 
   * >  When the states of the access nodes, compute node groups, and storage node groups of a cluster are all **NORMAL** and a connection to the cluster is established, the state of the cluster is **NORMAL**. When the state of the access nodes, compute node groups, or storage node groups of the cluster is **RISK**, the state of the cluster is **RISK**. When the state of the access nodes, compute node groups, or storage node groups of the cluster is **UNAVAILABLE**, the state of the cluster is **UNAVAILABLE**.
   * 
   * @example
   * NORMAL
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEA
   */
  requestId?: string;
  /**
   * @remarks
   * The storage node groups of the queried cluster.
   */
  worker?: DescribeDBClusterHealthStatusResponseBodyWorker;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      CS: 'CS',
      executor: 'Executor',
      instanceStatus: 'InstanceStatus',
      requestId: 'RequestId',
      worker: 'Worker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterHealthStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](~~~612397~~~) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1hx5n1o8f61****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mmZ* format. The time must be in UTC.
   * 
   * > The end time must be later than the start time. The maximum time range that can be specified is two days.
   * 
   * @example
   * 2022-03-11T15:01Z
   */
  endTime?: string;
  /**
   * @remarks
   * The performance metrics to be queried. Separate multiple values with commas (,). Valid values:
   * 
   * *   CPU
   * 
   *     *   **AnalyticDB_CPU_Usage_Percentage**: the average CPU utilization.
   * 
   * *   Connections
   * 
   *     *   **AnalyticDB_Instance_Connection_Count**: the number of database connections.
   * 
   * *   Writes
   * 
   *     *   **AnalyticDB_TPS**: the write transactions per second (TPS).
   *     *   **AnalyticDB_InsertRT**: the write response time.
   *     *   **AnalyticDB_InsertBytes**: the write throughput.
   * 
   * *   Queries
   * 
   *     *   **AnalyticDB_QPS**: the queries per second (QPS).
   *     *   **AnalyticDB_QueryRT**: the query response time.
   *     *   **AnalyticDB_QueryWaitTime**: the query wait time.
   * 
   * *   Disks
   * 
   *     *   **AnalyticDB_Disk_IO_Avg_Usage_Percentage**: the average I/O utilization.
   *     *   **AnalyticDB_Disk_IO_Avg_Waiting_Time**: the average I/O wait time.
   *     *   **AnalyticDB_IO_Throughput**: the disk throughput.
   *     *   **AnalyticDB_IOPS**: the disk IOPS.
   *     *   **AnalyticDB_Disk_Usage**: the disk space that is used.
   *     *   **AnalyticDB_Disk_Usage_Percentage**: the disk usage.
   *     *   **AnalyticDB_Hot_Data_Usage**: the disk space that is used by hot data.
   *     *   **AnalyticDB_Cold_Data_Usage**: the disk space that is used by code data.
   * 
   * >  This parameter must be specified.
   * 
   * @example
   * AnalyticDB_CPU_Usage_Percentage
   */
  key?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/612393.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * user_default
   */
  resourcePools?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mmZ* format. The time must be in UTC.
   * 
   * @example
   * 2022-03-10T23:56Z
   */
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * @example
   * amv-bp1hx5n1o8f61****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mmZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2022-03-11T15:01Z
   */
  endTime?: string;
  /**
   * @remarks
   * The queried performance metrics.
   */
  performances?: DescribeDBClusterPerformanceResponseBodyPerformances[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BD8C3096-8BC6-51DF-A4AB-BACD9DC10435
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mmZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2022-03-10T23:56Z
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterPerformanceResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeDBClusterSpaceSummaryRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-wz9v5sa7mm79z4l2
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeDBClusterSpaceSummaryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queried storage overview information.
   */
  data?: DescribeDBClusterSpaceSummaryResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDBClusterSpaceSummaryResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterSpaceSummaryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterSpaceSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDBClusterSpaceSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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

export class DescribeDBClusterStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEAU
   */
  requestId?: string;
  /**
   * @remarks
   * The queried cluster states.
   */
  status?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClusterStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDBClusterStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the cluster.
   * 
   * *   The description cannot start with `http://` or `https://`.
   * *   The description must be 2 to 256 characters in length
   * 
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * If you do not specify this parameter, the information about all clusters that reside in the region is returned.
   * 
   * @example
   * amv-bp1r053byu48p****
   */
  DBClusterIds?: string;
  /**
   * @remarks
   * The state of the cluster. Valid values:
   * 
   * *   **Preparing**
   * 
   * <!---->
   * 
   * *   **Creating**
   * *   **Running**
   * *   **Deleting**
   * 
   * <!---->
   * 
   * *   **Restoring**
   * 
   * <!---->
   * 
   * *   **ClassChanging**
   * *   **NetAddressCreating**
   * *   **NetAddressDeleting**
   * *   **NetAddressModifying**
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  DBClusterVersion?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  productVersion?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. If you do not specify this parameter, the information about all resource groups in the cluster is returned.
   * 
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags that are added to the cluster.
   */
  tag?: DescribeDBClustersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      DBClusterDescription: 'DBClusterDescription',
      DBClusterIds: 'DBClusterIds',
      DBClusterStatus: 'DBClusterStatus',
      DBClusterVersion: 'DBClusterVersion',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productVersion: 'ProductVersion',
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
      DBClusterVersion: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productVersion: 'string',
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
  /**
   * @remarks
   * The queried clusters.
   */
  items?: DescribeDBClustersResponseBodyItems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5EDBA27-AF3E-5966-9503-FD1557E19167
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * > If you do not specify this parameter, the information about all resource groups in the cluster is returned.
   * 
   * @example
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * 
   * *   **Interactive**
   * *   **Job**
   * 
   * > For information about resource groups of Data Lakehouse Edition, see [Resource groups](https://help.aliyun.com/document_detail/428610.html).
   * 
   * @example
   * Job
   */
  groupType?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/612393.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      groupName: 'GroupName',
      groupType: 'GroupType',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      groupName: 'string',
      groupType: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBResourceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queried resource group.
   */
  groupsInfo?: DescribeDBResourceGroupResponseBodyGroupsInfo[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A94B6C02-7BD4-5D67-9776-3AC8317E8DD3
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDBResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bt6u59zcmd945****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Set the time to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * > 
   * 
   * *   The end time must be later than the start time.
   * 
   * *   The maximum time range that can be specified is 24 hours.
   * 
   * @example
   * 1625220213000
   */
  endTime?: string;
  /**
   * @remarks
   * The language. Valid values:
   * 
   * *   **zh-CN** (default): simplified Chinese.
   * *   **en-US**: English.
   * *   **ja**: Japanese.
   * 
   * @example
   * zh-CN
   */
  lang?: string;
  /**
   * @remarks
   * The query condition for SQL statements, which can contain the `Type`, `Value`, `Min`, and `Max` fields. Specify the condition in the JSON format. `Type` specifies the query dimension. Valid values for Type: `maxCost`, `status`, and `cost`. `Value`, `Min`, or `Max` specifies the query range for the dimension. Valid values:
   * 
   * *   `{"Type":"maxCost","Value":"100"}`: queries the top 100 most time-consuming SQL statements. Set `Value` to 100.
   * *   `{"Type":"status","Value":"finished"}`: queries the executed SQL statements. You can set `Value` to `running` to query the SQL statements that are being executed. You can also set Value to `failed` to query the SQL statements that failed to be executed.
   * *   `{"Type":"cost","Min":"10","Max":"200"}`: queries the SQL statements whose execution duration is in the range of 10 to 200 milliseconds. You can also specify custom values for the Min and Max fields.
   * 
   * @example
   * {"Type":"maxCost","Value":"100"}
   */
  queryCondition?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Set the time to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * >  You can query data only within the last 14 days.
   * 
   * @example
   * 1625220210000
   */
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
  /**
   * @remarks
   * The queried source IP addresses.
   */
  clientIps?: string[];
  /**
   * @remarks
   * The queried database names.
   */
  databases?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DEA97C6B-D7A4-5E69-9EFC-D7F88737CED5
   */
  requestId?: string;
  /**
   * @remarks
   * The queried resource group names.
   */
  resourceGroups?: string[];
  /**
   * @remarks
   * The queried usernames.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDiagnosisDimensionsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The source IP address.
   * 
   * >  You can call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to query the resource groups, database names, usernames, and source IP addresses of the SQL statements that meet a query condition.
   * 
   * @example
   * 59.82.XX.XX
   */
  clientIp?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612397.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1scs48yc125****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database on which the SQL statements are executed.
   * 
   * >  You can call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to query the resource groups, database names, usernames, and source IP addresses of the SQL statements that meet a query condition.
   * 
   * @example
   * adb_demo
   */
  database?: string;
  /**
   * @remarks
   * The end of the time range to query. Set the time to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * > 
   * 
   * *   The end time must be later than the start time.
   * 
   * *   The maximum time range that can be specified is 24 hours.
   * 
   * @example
   * 1633017540000
   */
  endTime?: string;
  /**
   * @remarks
   * The query keyword of the SQL statements.
   * 
   * @example
   * select
   */
  keyword?: string;
  /**
   * @remarks
   * The language of file titles and error messages. Valid values:
   * 
   * *   **zh** (default): simplified Chinese.
   * *   **en**: English.
   * *   **ja**: Japanese.
   * *   **zh-tw**: traditional Chinese.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum peak memory of the SQL statements. Unit: bytes.
   * 
   * @example
   * 89000000
   */
  maxPeakMemory?: number;
  /**
   * @remarks
   * The maximum scan size of the SQL statements. Unit: bytes.
   * 
   * @example
   * 1024000000
   */
  maxScanSize?: number;
  /**
   * @remarks
   * The minimum peak memory of the SQL statements. Unit: bytes.
   * 
   * @example
   * 0
   */
  minPeakMemory?: number;
  /**
   * @remarks
   * The minimum scan size of the SQL statements. Unit: bytes.
   * 
   * @example
   * 0
   */
  minScanSize?: number;
  /**
   * @remarks
   * The order in which to sort the SQL statements by field, which contains the `Field` and `Type` fields. Specify the order in the JSON format. Example: `[{"Field":"StartTime", "Type": "desc"}]`. Fields:
   * 
   * *   `Field` specifies the field that is used to sort the SQL statements. Valid values:
   * 
   *     *   `StartTime`: the execution start time.
   *     *   `Status`: the execution status.
   *     *   `UserName`: the username.
   *     *   `Cost`: the execution duration.
   *     *   `PeakMemory`: the peak memory.
   *     *   `ScanSize`: the amount of data that is scanned.
   *     *   `Database`: the name of the database.
   *     *   `ClientIp`: the source IP address.
   *     *   `ResourceGroup`: the name of the resource group.
   *     *   `QueueTime`: the amount of time that is consumed for queuing.
   *     *   `OutputRows`: the number of output rows.
   *     *   `OutputDataSize`: the amount of output data.
   *     *   `ResourceCostRank`: the execution duration rank of operators that are used in the SQL statements. This value takes effect only when `QueryCondition` is set to `{"Type":"status","Value":"running"}`.
   * 
   * *   `Type` specifies the sorting order. Valid values (case-insensitive):
   * 
   *     *   `Desc`: descending order.
   *     *   `Asc`: ascending order.
   * 
   * @example
   * [{"Field":"StartTime", "Type": "desc" }]
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The SQL pattern ID.
   * 
   * @example
   * 5575924945138******
   */
  patternId?: string;
  /**
   * @remarks
   * The query condition for SQL statements, which can contain the `Type`, `Value`, `Min`, and `Max` fields. Specify the condition in the JSON format. `Type` specifies the query dimension. Valid values for Type: `maxCost`, `status`, and `cost`. `Value`, `Min`, or `Max` specifies the query range for the dimension. Valid values:
   * 
   * *   `{"Type":"maxCost","Value":"100"}`: queries the top 100 most time-consuming SQL statements. Set `Value` to 100.
   * *   `{"Type":"status","Value":"finished"}`: queries the executed SQL statements. You can set `Value` to `running` to query the SQL statements that are being executed. You can also set Value to `failed` to query the SQL statements that failed to be executed.
   * *   `{"Type":"cost","Min":"10","Max":"200"}`: queries the SQL statements whose execution duration is in the range of 10 to 200 milliseconds. You can also specify custom values for the Min and Max fields.
   * 
   * @example
   * {"Type":"status","Value":"finished"}
   */
  queryCondition?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group to which the SQL statements belong.
   * 
   * >  You can call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to query the resource groups, database names, usernames, and source IP addresses of the SQL statements that meet a query condition.
   * 
   * @example
   * user_default
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Set the time to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * >  You can query data only within the last 14 days.
   * 
   * @example
   * 1632931200000
   */
  startTime?: string;
  /**
   * @remarks
   * The username that is used to execute the SQL statements. You can call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to query the resource groups, database names, usernames, and source IP addresses of the SQL statements that meet a query condition.
   * 
   * @example
   * test_user
   */
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
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The queried SQL statements.
   */
  querys?: DescribeDiagnosisRecordsResponseBodyQuerys[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7F88BEFA-CF0B-5C95-8BB1-92EC9F09E40D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDiagnosisRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1r053byu48p
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The language of file titles and error messages. Valid values:
   * 
   * *   **zh**: simplified Chinese.
   * *   **en**: English.
   * *   **ja**: Japanese.
   * *   **zh-tw**: traditional Chinese.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The query ID.
   * 
   * >  You can call the [DescribeDiagnosisRecords](https://help.aliyun.com/document_detail/308207.html) operation to query the diagnostic information about SQL statements for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster, including the query ID.
   * 
   * @example
   * 2021070216432217201616806503453
   */
  processId?: string;
  /**
   * @remarks
   * The IP address and port number of the AnalyticDB for MySQL frontend node on which the SQL statement is executed.
   * 
   * >  You can call the [DescribeDiagnosisRecords](https://help.aliyun.com/document_detail/308207.html) operation to query the diagnostic information about SQL statements for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster, including the IP address and port number of the frontend node.
   * 
   * @example
   * 192.45.***.***:3145
   */
  processRcHost?: string;
  /**
   * @remarks
   * The execution start time of the SQL statement. Set the time to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * >  You can call the [DescribeDiagnosisRecords](https://help.aliyun.com/document_detail/308207.html) operation to query the diagnostic information about SQL statements for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster, including the execution start time of the SQL statement.
   * 
   * @example
   * 1625215402000
   */
  processStartTime?: number;
  /**
   * @remarks
   * The status of the SQL statement. Valid values:
   * 
   * *   **running**
   * *   **finished**
   * *   **failed**
   * 
   * >  You can call the [DescribeDiagnosisRecords](https://help.aliyun.com/document_detail/308207.html) operation to query the diagnostic information about SQL statements for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster, including the status of the SQL statement.
   * 
   * @example
   * running
   */
  processState?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @remarks
   * The queried execution information, including the SQL statement, statistics, execution plan, and operator information.
   */
  diagnosisSQLInfo?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1
   */
  requestId?: string;
  /**
   * @remarks
   * The queried execution information by stage.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDiagnosisSQLInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-8vb6ha79k6e****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The language of the returned data. Valid values:
   * 
   * *   **zh**: simplified Chinese.
   * *   **en**: English.
   * *   **ja**: Japanese.
   * *   **zh-tw**: traditional Chinese.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The queried download tasks.
   */
  records?: DescribeDownloadRecordsResponseBodyRecords[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D761DA51-12F8-5457-AAA9-F52B9F436D2D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      records: 'Records',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      records: { 'type': 'array', 'itemType': DescribeDownloadRecordsResponseBodyRecords },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDownloadRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-wz9509beptiz****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the scaling plan.
   * 
   * >  You can call the [DescribeElasticPlans](https://help.aliyun.com/document_detail/601334.html) operation to query the names of scaling plans.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
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
  /**
   * @remarks
   * The queried scaling plan.
   */
  elasticPlan?: DescribeElasticPlanAttributeResponseBodyElasticPlan;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5C433C2-001F-58E3-99F5-3274C14DF8BD
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeElasticPlanAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-wz9509beptiz****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the scaling plan.
   * 
   * > 
   * 
   * *   If you do not specify this parameter, all scaling plans of the cluster are queried.
   * 
   * *   You can call the [DescribeElasticPlans](https://help.aliyun.com/document_detail/601334.html) operation to query the names of scaling plans.
   * 
   * @example
   * test
   */
  elasticPlanName?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * > 
   * 
   * *   If you do not specify this parameter, the scaling plans of all resource groups are queried, including the interactive resource group and elastic I/O unit (EIU) types.
   * 
   * *   You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/459446.html) operation to query the resource group name for a cluster.
   * 
   * @example
   * test
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2022-01-01T12:01:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the scaling plan job. Valid values:
   * 
   * *   RUNNING
   * *   SUCCESSFUL
   * *   FAILED
   * 
   * >  If you do not specify this parameter, the scaling plans in all states are queried.
   * 
   * @example
   * SUCCESSFUL
   */
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
  /**
   * @remarks
   * The queried scaling plan jobs.
   */
  jobs?: DescribeElasticPlanJobsResponseBodyJobs[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5C433C2-001F-58E3-99F5-3274C14DF8BD
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of scaling plan jobs.
   * 
   * @example
   * 15
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeElasticPlanJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-wz9509beptiz****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * > 
   * 
   * *   This parameter must be specified only when you query the resource specifications that are supported by an interactive resource group.
   * 
   * *   You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/459446.html) operation to query the name of a resource group within a cluster.
   * 
   * @example
   * test
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The type of the scaling plan. Valid values:
   * 
   * *   EXECUTOR: the interactive resource group type, which specifies the computing resource type.
   * *   WORKER: the elastic I/O unit (EIU) type.
   * 
   * This parameter is required.
   * 
   * @example
   * EXECUTOR
   */
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
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5C433C2-001F-58E3-99F5-3274C14DF8BD
   */
  requestId?: string;
  /**
   * @remarks
   * The queried resource specifications.
   */
  specifications?: string[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeElasticPlanSpecificationsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612397.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-wz9509beptiz****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the scaling plan.
   * 
   * > If you do not specify this parameter, all scaling plans are queried.
   * 
   * @example
   * test
   */
  elasticPlanName?: string;
  /**
   * @remarks
   * Specifies whether to query the scaling plans that are immediately enabled after the plans are created. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * > *   If you do not specify this parameter, the scaling plans of all resource groups are queried, covering the interactive resource group type and the elastic I/O unit (EIU) type.
   * >*   You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/459446.html) operation to query the name of a resource group within a cluster.
   * 
   * @example
   * test
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The type of the scaling plan. Valid values:
   * 
   * EXECUTOR: the interactive resource group type, which specifies the computing resource type. WORKER: the EIU type.
   * 
   * @example
   * EXECUTOR
   */
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
  /**
   * @remarks
   * The queried scaling plans.
   */
  elasticPlans?: DescribeElasticPlansResponseBodyElasticPlans[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5C433C2-001F-58E3-99F5-3274C14DF8BD
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeElasticPlansResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The name of the database account.
   * 
   * >  You can call the [DescribeAccounts](https://help.aliyun.com/document_detail/612430.html) operation to query the information about database accounts for a cluster, including the account name.
   * 
   * @example
   * test_accout
   */
  accountName?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp14t95lun0w****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnabledPrivilegesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queried permission level and permissions.
   */
  data?: DescribeEnabledPrivilegesResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 246F42E0-A475-15FF-96D2-8DC47FC2F289
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEnabledPrivilegesResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeExcessivePrimaryKeysRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * @example
   * 2019-06-01T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The language of file titles and error messages. Valid values:
   * 
   * *   **zh (default)**: simplified Chinese.
   * *   **en**: English.
   * *   **ja**: Japanese.
   * *   **zh-tw**: traditional Chinese.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The order in which table fields are sorted. Specify the value in the JSON format.
   * 
   * Example:
   * 
   *     [
   * 
   *         {
   * 
   *             "Field":"Name",
   * 
   *             "Type":"Asc"
   * 
   *         }
   * 
   *     ]
   * 
   * In the preceding code, Field specifies the field that is used to sort the table data. Set the value to Name. Type specifies the sorting order. Valid values: Desc and Asc.
   * 
   * Field and Type are case-insensitive.
   * 
   * @example
   * [{"Field":"TableName", "Type": "Desc" }]
   */
  order?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * @example
   * 2019-06-01T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      lang: 'Lang',
      order: 'Order',
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
      DBClusterId: 'string',
      endTime: 'string',
      lang: 'string',
      order: 'string',
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

export class DescribeExcessivePrimaryKeysResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queried information about the request denial.
   * 
   * @example
   * {
   *     "PolicyType": "AccountLevelIdentityBasedPolicy",
   *     "AuthPrincipalOwnerId": "1906102576997697",
   *     "EncodedDiagnosticMessage": "AQIBIAAAAOPdwKY2QLOvgMEc7SkkoJfj1kvZwsaRqNYMh10Tv0wTe0fCzaCdrvgazfNb0EnJKETgXyhR+3BIQjx9WAqZryejBsp1Bl4qI5En/D9dEhcXAtKCxCmE2kZCiEzpy8BoEUt+bs0DmlaGWO5xkEpttypLIB4rUhDvZd+zwPg4EXk4KSSWSWsurxtqDkKEMshKlQFBTKvJcNqPqHV6lwR4INiAGjIvK1ngXxN1O+6ORRB6A8YvztEOGywOk81ZmuNk0YrNy+qk7+UVDTHeXKsy8h9e/ePY/LMidj0RCmDpo/YpCumd0UGe0qEPe2U+UJAm/+UHlnEFLVg6BP3yIB5D++MCy7mgWm8Kwyhk62IeYly4hQ+5IpXjkh1GQXuDgLVVPVpxEek9n30vnCUL4KsaMgfa7dgojb+3TM8xGsD2zVK5STJNrsXclscIJEqyNXd7CBYiRJVZi1HPO6drN9WW0chLpCSTgjO8n0bNanZaxXKumW9PSwV58UoSFASeMWfZK3TLngX+oq8nGmnTwcJosVjfF4RGzAnS1IXt0Q9N2WHDnpwyLBU/nOz7Hsy8IZ+h+OVjsBTXSM9688/vOF707a5mNzpETvQeGRcua3A5livcKAM2cML0yeUs/Zyj/+BGqtVa+wektspDHC/CECh6R5lxQjRmUdPawY8VDs2onmdLuEH8DdmYt+Yv/jBFBUMWOyAluzkPYcX5nuQKouCIUJUFTSbsJsuH5CTIh7Ls5rbmkj+T1qTVz8gnDR8LxwaqoMSna+elXgVyOOxXtMkenVntsmoC3p/4G7yTPL1hu8JyWGIIvZHZGGLXGEH7FeSuMV8buKxPGFWG3arG8e9LGvDdz5dgTien4y6G5AQ0o1iQdXDos5VWdH3u7k5PrsvdEOpvMi6uSd8a42na80FsYlgGlwM5upydcWUC5Un2HCkJpT1xgk2L6shdVTrK6bidRrqE784FhW9bBQePzGaxSupPENZya0VUctRt+7uq3QwIn4y5jzjgX0E0jgmqPrgiVDjBesMQZYfGPCGysWYWYzfoh+G6V7N2VVGtNnGUwNWzM0WJBPONAgxPv+AmixFRCQ==",
   *     "AuthPrincipalType": "SubUser",
   *     "AuthPrincipalDisplayName": "202515810214480629",
   *     "NoPermissionType": "ImplicitDeny",
   *     "AuthAction": "adb:DescribeExcessivePrimaryKeys"
   *   }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-bp1ub9grke1****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The queried detection items and detection results.
   */
  detectionItems?: DescribeExcessivePrimaryKeysResponseBodyDetectionItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 863D51B7-5321-41D8-A0B6-A088B0******
   */
  requestId?: string;
  /**
   * @remarks
   * The queried tables that have excessive primary key fields.
   */
  tables?: DescribeExcessivePrimaryKeysResponseBodyTables[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 300
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      DBClusterId: 'DBClusterId',
      detectionItems: 'DetectionItems',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tables: 'Tables',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      DBClusterId: 'string',
      detectionItems: { 'type': 'array', 'itemType': DescribeExcessivePrimaryKeysResponseBodyDetectionItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tables: { 'type': 'array', 'itemType': DescribeExcessivePrimaryKeysResponseBodyTables },
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExcessivePrimaryKeysResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeExcessivePrimaryKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeExcessivePrimaryKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResourceUsageRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-uf6g8w25jacm7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. The end time must be later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-03-17T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-02-04T03:45:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResourceUsageResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The queried resource usage.
   */
  data?: DescribeJobResourceUsageResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeJobResourceUsageResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResourceUsageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeJobResourceUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeJobResourceUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePatternPerformanceRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-uf6li1r3do8m****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the *yyyy-MM-ddTHH:mmZ* format. The time must be in UTC.
   * 
   * > The end time must be later than the start time.
   * 
   * @example
   * 2022-08-22T01:06:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The SQL pattern ID.
   * 
   * >  You can call the [DescribeSQLPatterns](https://help.aliyun.com/document_detail/321868.html) operation to query the information about all SQL patterns in an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster within a period of time, including SQL pattern IDs.
   * 
   * @example
   * 3847585356974******
   */
  patternId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * > 
   * 
   * *   If the current date is August 22, 2022 (UTC+8), you can query the data of August 9, 2022 (2022-08-08T16:00:00Z) to the earliest extent. If you want to query the data that is earlier than August 9, 2022 (2022-08-08T16:00:00Z), null is returned.
   * 
   * *   The maximum time range that can be specified is 24 hours.
   * 
   * @example
   * 2022-08-21T02:15:00Z
   */
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
  /**
   * @remarks
   * The end time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mmZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2022-08-22T01:06:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The queried performance metrics.
   */
  performances?: DescribePatternPerformanceResponseBodyPerformances[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F21AF487-B8C9-57E0-8E3A-A92BC3611FB6
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mmZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2022-08-21T02:15:00Z
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePatternPerformanceResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DescribePerformanceViewAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612397.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  viewName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      viewName: 'ViewName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      viewName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePerformanceViewAttributeResponseBody extends $tea.Model {
  /**
   * @example
   * {
   *     "PolicyType": "AccountLevelIdentityBasedPolicy",
   *     "AuthPrincipalOwnerId": "1*****************7",
   *     "EncodedDiagnosticMessage": "AQIBIAAAAOPdwKY2QLOvgMEc7SkkoJfj1kvZwsaRqNYMh10Tv0wTe0fCzaCdrvgazfNb0EnJKETgXyhR+3BIQjx9WAqZryejBsp1Bl4qI5En/D9dEhcXAtKCxCmE2kZCiEzpy8BoEUt+bs0DmlaGWO5xkEpttypLIB4rUhDvZd+zwPg4EXk4KSSWSWsurxtqDkKEMshKlQFBTKvJcKwyhk62IeYly4hQ+5IpXjkh1GQXuDRCQ==",
   *     "AuthPrincipalType": "SubUser",
   *     "AuthPrincipalDisplayName": "2***************9",
   *     "NoPermissionType": "ImplicitDeny",
   *     "AuthAction": "adb:DescribeExcessivePrimaryKeys"
   * }
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * Basic
   */
  createFromViewType?: string;
  /**
   * @example
   * amv-bp198m028ih55xxxx
   */
  DBClusterId?: string;
  /**
   * @example
   * true
   */
  fillOriginViewKeys?: boolean;
  /**
   * @example
   * E031AABF-BD56-5966-A063-4283EF18DB45
   */
  requestId?: string;
  viewDetail?: DescribePerformanceViewAttributeResponseBodyViewDetail;
  viewName?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      createFromViewType: 'CreateFromViewType',
      DBClusterId: 'DBClusterId',
      fillOriginViewKeys: 'FillOriginViewKeys',
      requestId: 'RequestId',
      viewDetail: 'ViewDetail',
      viewName: 'ViewName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      createFromViewType: 'string',
      DBClusterId: 'string',
      fillOriginViewKeys: 'boolean',
      requestId: 'string',
      viewDetail: DescribePerformanceViewAttributeResponseBodyViewDetail,
      viewName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePerformanceViewAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePerformanceViewAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePerformanceViewAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePerformanceViewsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612397.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1ub9grke1****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
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

export class DescribePerformanceViewsResponseBody extends $tea.Model {
  /**
   * @example
   * {
   *     "PolicyType": "AccountLevelIdentityBasedPolicy",
   *     "AuthPrincipalOwnerId": "1*****************7",
   *     "EncodedDiagnosticMessage": "AQIBIAAAAOPdwKY2QLOvgMEc7SkkoJfj1kvZwsaRqNYMh10Tv0wTe0fCzaCdrvgazfNb0EnJKETgXyhR+3BIQjx9WAqZryejBsp1Bl4qI5En/D9dEhcXAtKCxCmE2kZCiEzpy8BoEUt+bs0DmlaGWO5xkEpttypLIB4rUhDvZd+zwPg4EXk4KSSWSWsurxtqDkKEMshKlQFBTKvJcKwyhk62IeYly4hQ+5IpXjkh1GQXuDRCQ==",
   *     "AuthPrincipalType": "SubUser",
   *     "AuthPrincipalDisplayName": "2***************9",
   *     "NoPermissionType": "ImplicitDeny",
   *     "AuthAction": "adb:DescribeExcessivePrimaryKeys"
   * }
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 3A8F6106-6AFD-5A34-9C80-8DE2C42D06E8
   */
  requestId?: string;
  views?: DescribePerformanceViewsResponseBodyViews[];
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      requestId: 'RequestId',
      views: 'Views',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      requestId: 'string',
      views: { 'type': 'array', 'itemType': DescribePerformanceViewsResponseBodyViews },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePerformanceViewsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePerformanceViewsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePerformanceViewsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  /**
   * @remarks
   * The language that is used for the region and zone names indicated by the LocalName parameter in the response parameters. Valid values:
   * 
   * *   **zh-CN** (default): simplified Chinese.
   * *   **en-US**: English.
   * *   **ja**: Japanese.
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
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

export class DescribeRegionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queried regions.
   */
  regions?: DescribeRegionsResponseBodyRegions;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 421794A3-72A5-5D27-9E8B-A75A4C503E17
   */
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

export class DescribeSQLPatternsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-8vb8de93v9b****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * > The end time must be later than the start time.
   * 
   * @example
   * 2022-09-07T03:06:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The keyword that is used for the query.
   * 
   * @example
   * SELECT
   */
  keyword?: string;
  /**
   * @remarks
   * The language. Valid values:
   * 
   * *   **zh** (default): simplified Chinese.
   * *   **en**: English.
   * *   **ja**: Japanese.
   * *   **zh-tw**: traditional Chinese.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The order by which to sort query results. Specify the parameter value in the JSON format. Example: `[{"Field":"AverageQueryTime","Type":"Asc"}]`.
   * 
   * *   `Field` specifies the field by which to sort the query results. Valid values:
   * 
   *     *   `PatternCreationTime`: the earliest commit time of the SQL pattern within the time range to query.
   *     *   `AverageQueryTime`: the average total amount of time consumed by the SQL pattern within the time range to query.
   *     *   `MaxQueryTime`: the maximum total amount of time consumed by the SQL pattern within the time range to query.
   *     *   `AverageExecutionTime`: the average execution duration of the SQL pattern within the time range to query.
   *     *   `MaxExecutionTime`: the maximum execution duration of the SQL pattern within the time range to query.
   *     *   `AveragePeakMemory`: the average peak memory usage of the SQL pattern within the time range to query.
   *     *   `MaxPeakMemory`: the maximum peak memory usage of the SQL pattern within the time range to query.
   *     *   `AverageScanSize`: the average amount of data scanned based on the SQL pattern within the time range to query.
   *     *   `MaxScanSize`: the maximum amount of data scanned based on the SQL pattern within the time range to query.
   *     *   `QueryCount`: the number of queries performed in association with the SQL pattern within the time range to query.
   *     *   `FailedCount`: the number of failed queries performed in association with the SQL pattern within the time range to query.
   * 
   * *   `Type` specifies the sorting order. Valid values (case-insensitive):
   * 
   *     *   `Asc`: ascending order.
   *     *   `Desc`: descending order.
   * 
   * @example
   * [{"Field":"AverageQueryTime","Type":"Asc"}]
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **10** (default)
   * *   **30**
   * *   **50**
   * *   **100**
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * > *   Only data within the last 14 days can be queried.
   * > * The maximum time range that can be specified is 24 hours.
   * 
   * @example
   * 2022-09-06T03:06:00Z
   */
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
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The queried SQL pattern.
   */
  patternDetails?: DescribeSQLPatternsResponseBodyPatternDetails[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F3174013-5B7A-5A47-9FE0-6B5D397BD86B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      patternDetails: 'PatternDetails',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSQLPatternsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @remarks
   * The queried databases.
   */
  items?: DescribeSchemasResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25B56BC7-4978-40B3-9E48-4B7067******
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSchemasResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-uf6o6m8p6x7v****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the Spark job.
   * 
   * This parameter is required.
   * 
   * @example
   * 1248
   */
  jobId?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @remarks
   * The content of the log.
   * 
   * @example
   * >>>>>>>> stdout:n++++++++++++++++++executing sql: MSCK REPAIR TABLE  `footprint_ethereum`.`dwd_eth_eth_txr_v2_di` n++n
   */
  log?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * *   If the request was successful, **Success** is returned.
   * *   If the request failed, an error message is returned.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CD65640-9963-5D60-929C-118F2C84070E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSparkCodeLogResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612397.html) operation to query the IDs of all AnalyticDB for MySQL clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-uf6210mmev07****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the Spark job.
   * 
   * This parameter is required.
   * 
   * @example
   * 620
   */
  jobId?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * *   If the request was successful, **Success** is returned.
   * *   If the request failed, an error message is returned.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The execution result, which is in the format of JSON objects.
   * 
   * @example
   * "{\\"schema\\":[\\"id\\",\\"name\\",\\"age\\"],\\"data\\":[\\"{\\\\\\"id\\\\\\":10,\\\\\\"name\\\\\\":\\\\\\"z\\\\\\",\\\\\\"age\\\\\\":123}\\",\\"{\\\\\\"id\\\\\\":2,\\\\\\"name\\\\\\":\\\\\\"b\\\\\\",\\\\\\"age\\\\\\":17}\\",\\"{\\\\\\"id\\\\\\":1,\\\\\\"name\\\\\\":\\\\\\"a\\\\\\",\\\\\\"age\\\\\\":15}\\",\\"{\\\\\\"id\\\\\\":3,\\\\\\"name\\\\\\":\\\\\\"c\\\\\\",\\\\\\"age\\\\\\":222}\\",\\"{\\\\\\"id\\\\\\":10,\\\\\\"name\\\\\\":\\\\\\"z\\\\\\",\\\\\\"age\\\\\\":123}\\"],\\"haveRows\\":true,\\"rowNumber\\":6}"
   */
  output?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSparkCodeOutputResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1v6usq6m65****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the Spark job.
   * 
   * This parameter is required.
   * 
   * @example
   * 1248
   */
  jobId?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * *   If the request was successful, **SUCCESS** is returned.
   * *   If the request failed, an error message is returned.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 774DDC37-1908-58F6-B9CA-99E3E45965A6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The URL of the web UI for the Spark application.
   * 
   * @example
   * https://adb-subuser-cn-hangzhou-1358535755648527-100000648.oss-cn-hangzhou.aliyuncs.com/%3Facl?Expires=1681295967&OSSAccessKeyId=LTAI5tB7NAkm25oiGASu****&Signature=hKAZ1vgvhJ%2FD8hNHTuX%2FOOBWht****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSparkCodeWebUiResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1ej1nq9n6****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The order by which to sort query results. Specify the parameter value in the JSON string format. Example: `[{"Field":"Pattern","Type":"Asc"}]`. Parameters:
   * 
   * *   `Field` specifies the field by which to sort the query results. Valid values:
   * 
   *     *   `Pattern`: the SQL pattern.
   *     *   `AccessIP`: the IP address of the client.
   *     *   `User`: the username.
   *     *   `QueryCount`: the number of queries performed in association with the SQL pattern within the time range to query.
   *     *   `AvgPeakMemory`: the average peak memory usage of the SQL pattern within the time range to query. Unit: KB.
   *     *   `MaxPeakMemory`: the maximum peak memory usage of the SQL pattern within the time range to query. Unit: KB.
   *     *   `AvgCpuTime`: the average execution duration of the SQL pattern within the time range to query. Unit: milliseconds.
   *     *   `MaxCpuTime`: the maximum execution duration of the SQL pattern within the time range to query. Unit: milliseconds.
   *     *   `AvgStageCount`: the average number of stages.
   *     *   `MaxStageCount`: the maximum number of stages.
   *     *   `AvgTaskCount`: the average number of tasks.
   *     *   `MaxTaskCount`: the maximum number of tasks.
   *     *   `AvgScanSize`: the average amount of data scanned based on the SQL pattern within the time range to query. Unit: KB.
   *     *   `MaxScanSize`: the maximum amount of data scanned based on the SQL pattern within the time range to query. Unit: KB.
   * 
   * *   `Type` specifies the sorting order. Valid values:
   * 
   *     *   `Asc`: ascending order.
   *     *   `Desc`: descending order.
   * 
   * > 
   * 
   * *   If you do not specify this parameter, query results are sorted in ascending order of `Pattern`.
   * 
   * *   If you want to sort query results by `AccessIP`, you must set the `Type` parameter to `accessip`. If you want to sort query results by `User`, you must leave the `Type` parameter empty or set it to `user`.
   * 
   * @example
   * [{"Field":"Pattern","Type":"Asc"}]
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **10** (default)
   * *   **30**
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The keyword that is used for the query.
   * 
   * > If you do not specify this parameter, all SQL patterns of the AnalyticDB for MySQL cluster within the time period specified by `StartTime` are returned.
   * 
   * @example
   * SELECT
   */
  sqlPattern?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-dd format. The time must be in UTC.
   * 
   * > Only data within the last 30 days can be queried.
   * 
   * @example
   * 2022-08-30T12:10:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The dimension by which to aggregate the SQL patterns. Valid values:
   * 
   * *   `user`: aggregates the SQL patterns by user.
   * *   `accessip`: aggregates the SQL patterns by client IP address.
   * 
   * > If you do not specify this parameter, the SQL patterns are aggregated by `user`.
   * 
   * @example
   * user
   */
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
  /**
   * @remarks
   * The queried SQL pattern.
   */
  items?: DescribeSqlPatternResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DB1F6C23-CBCA-5260-9366-BA7BB5EBF6F1
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 50
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSqlPatternResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeStorageResourceUsageRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp10yt0gva71ei7d
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-08-23T01:06:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-08-22T01:06:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageResourceUsageResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The queried resource usage.
   */
  data?: DescribeStorageResourceUsageResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEAW
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeStorageResourceUsageResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageResourceUsageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeStorageResourceUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeStorageResourceUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableAccessCountRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-2ze627uzpkh8a8****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The order by which to sort query results. Specify the parameter value in the JSON string format. Example: `[{"Field":"TableSchema","Type":"Asc"}]`. Fields in the request parameter:
   * 
   * *   `Field` specifies the field by which to sort the query results. Valid values:
   * 
   *     *   `TableSchema`: the name of the database to which the table belongs.
   *     *   `TableName`: the name of the table.
   *     *   `AccessCount`: the number of accesses to the table.
   * 
   * *   `Type` specifies the sorting order. Valid values:
   * 
   *     *   `Asc`: ascending order.
   *     *   `Desc`: descending order.
   * 
   * >  If you do not specify this parameter, query results are sorted in ascending order based on the database and the table.
   * 
   * @example
   * [{"Field":"TableSchema","Type":"Asc"}]
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **10** (default)
   * *   **30**
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * >  Only data within the last 30 days can be queried.
   * 
   * @example
   * 2022-09-25T12:10:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * >  If you leave this parameter empty, the number of accesses to all tables in the cluster on a date is returned.
   * 
   * @example
   * CUSTOMER
   */
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
  /**
   * @remarks
   * The queried tables.
   */
  items?: DescribeTableAccessCountResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6B7D627B-DA23-572D-AD71-256F64698B7D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTableAccessCountResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
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
  /**
   * @remarks
   * The queried tables.
   */
  items?: DescribeTablesResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeUserQuotaRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1qjt3o18d86987
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
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

export class DescribeUserQuotaResponseBody extends $tea.Model {
  /**
   * @remarks
   * The available elastic AnalyticDB compute units (ACUs).
   * 
   * @example
   * 512ACU
   */
  elasticACU?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0322C7FB-4584-5D2A-BF7F-F9036E940C35
   */
  requestId?: string;
  /**
   * @remarks
   * The available reserved computing resources.
   * 
   * @example
   * 48ACU
   */
  reserverdCompteACU?: string;
  /**
   * @remarks
   * The available reserved storage resources.
   * 
   * @example
   * 24ACU
   */
  reserverdStorageACU?: string;
  /**
   * @remarks
   * The number of available resource groups.
   * 
   * @example
   * 10
   */
  resourceGroupCount?: string;
  static names(): { [key: string]: string } {
    return {
      elasticACU: 'ElasticACU',
      requestId: 'RequestId',
      reserverdCompteACU: 'ReserverdCompteACU',
      reserverdStorageACU: 'ReserverdStorageACU',
      resourceGroupCount: 'ResourceGroupCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticACU: 'string',
      requestId: 'string',
      reserverdCompteACU: 'string',
      reserverdStorageACU: 'string',
      resourceGroupCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserQuotaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeUserQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUserQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachUserENIRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp11q28kvl688****
   */
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

export class DetachUserENIResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
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

export class DetachUserENIResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachUserENIResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachUserENIResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableElasticPlanRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-wz9509beptiz****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the scaling plan.
   * 
   * >  You can call the [DescribeElasticPlans](https://help.aliyun.com/document_detail/601334.html) operation to query the names of scaling plans.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5C433C2-001F-58E3-99F5-3274C14DF8BD
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableElasticPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The source IP address.
   * 
   * >  You can call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to query the resource groups, database names, usernames, and source IP addresses of the SQL statements that meet a query condition.
   * 
   * @example
   * 106.11.XX.XX
   */
  clientIp?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1q8bu9a****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database on which the SQL statements are executed.
   * 
   * >  You can call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to query the resource groups, database names, usernames, and source IP addresses of the SQL statements that meet a query condition.
   * 
   * @example
   * adb_demo
   */
  database?: string;
  /**
   * @remarks
   * The end of the time range to query. Set the time to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * > 
   * 
   * *   The end time must be later than the start time.
   * 
   * *   The maximum time range that can be specified is 24 hours.
   * 
   * @example
   * 1662450730000
   */
  endTime?: string;
  /**
   * @remarks
   * The query keyword of the SQL statements.
   * 
   * @example
   * select
   */
  keyword?: string;
  /**
   * @remarks
   * The language. Valid values:
   * 
   * *   **zh**: simplified Chinese.
   * *   **en**: English.
   * *   **ja**: Japanese.
   * *   **zh-tw**: traditional Chinese.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum peak memory of the SQL statements. Unit: bytes.
   * 
   * @example
   * 88000000
   */
  maxPeakMemory?: number;
  /**
   * @remarks
   * The maximum scan size of the SQL statements. Unit: bytes.
   * 
   * @example
   * 64424509440
   */
  maxScanSize?: number;
  /**
   * @remarks
   * The minimum peak memory of the SQL statements. Unit: bytes.
   * 
   * @example
   * 88000000
   */
  minPeakMemory?: number;
  /**
   * @remarks
   * The minimum scan size of the SQL statements. Unit: bytes.
   * 
   * @example
   * 1073741824
   */
  minScanSize?: number;
  /**
   * @remarks
   * The query condition for SQL statements, which can contain the `Type`, `Value`, `Min`, and `Max` fields. Specify the condition in the JSON format. `Type` specifies the query dimension. Valid values for Type: `maxCost`, `status`, and `cost`. `Value`, `Min`, or `Max` specifies the query range for the dimension. Valid values:
   * 
   * *   `{"Type":"maxCost","Value":"100"}`: queries the top 100 most time-consuming SQL statements. Set `Value` to 100.
   * *   `{"Type":"status","Value":"finished"}`: queries the executed SQL statements. You can set `Value` to `running` to query the SQL statements that are being executed. You can also set Value to `failed` to query the SQL statements that failed to be executed.
   * *   `{"Type":"cost","Min":"10","Max":"200"}`: queries the SQL statements whose execution duration is in the range of 10 to 200 milliseconds. You can also specify custom values for the Min and Max fields.
   * 
   * @example
   * {"Type":"status","Value":"finished"}
   */
  queryCondition?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group to which the SQL statements belong.
   * 
   * >  You can call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to query the resource groups, database names, usernames, and source IP addresses of the SQL statements that meet a query condition.
   * 
   * @example
   * user_default
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Set the time to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * >  You can query data only within the last 14 days.
   * 
   * @example
   * 1662364330000
   */
  startTime?: string;
  /**
   * @remarks
   * The username that is used to execute the SQL statements.
   * 
   * >  You can call the [DescribeDiagnosisDimensions](~~~~) operation to query the resource groups, database names, usernames, and source IP addresses of the SQL statements that meet a query condition.
   * 
   * @example
   * test_user
   */
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
  /**
   * @remarks
   * The download ID.
   * 
   * @example
   * 25494
   */
  downloadId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 845774AC-5D43-53A2-AAB8-C73828E68508
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DownloadDiagnosisRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-wz9509beptiz****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the scaling plan.
   * 
   * >  You can call the [DescribeElasticPlans](https://help.aliyun.com/document_detail/601334.html) operation to query the names of scaling plans.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5C433C2-001F-58E3-99F5-3274C14DF8BD
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableElasticPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ExistRunningSQLEngineRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612397.html) operation to query the information about all AnalyticDB for MySQL clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1cit7z8j****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * >  You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/459446.html) operation to query the name of the resource group for a cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * spark_test
   */
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

export class ExistRunningSQLEngineResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether a running SQL engine exists in the resource group.
   * 
   * Valid values:
   * 
   * *   **True**
   * *   **False**
   * 
   * @example
   * True
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FA675D68-14A4-5D9C-8820-92537D9F447E
   */
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

export class ExistRunningSQLEngineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExistRunningSQLEngineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExistRunningSQLEngineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatabaseObjectsRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-bp1565u55p32****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The owner of the database.
   * 
   * @example
   * admin
   */
  filterOwner?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test_db
   */
  filterSchemaName?: string;
  /**
   * @remarks
   * The order in which you want to sort the query results. Valid values:
   * 
   * *   Asc
   * *   Desc
   * 
   * Valid values for Field: DatabaseName, CreateTime, and UpdateTime. -CreateTime; -UpdateTime;
   * 
   * Default value: {"Type": "Desc","Field": "DatabaseName"}.
   * 
   * @example
   * {"Type": "Desc","Field": "DbName"}
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   30
   * *   50
   * *   100
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @remarks
   * The queried databases.
   */
  data?: GetDatabaseObjectsResponseBodyData;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 863D51B7-5321-41D8-A0B6-A088B0******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDatabaseObjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the log.
   * 
   * > You can call the [ListSparkAppAttempts](https://help.aliyun.com/document_detail/455887.html) operation to query the information about the retry attempts of a Spark application, including the retry log IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * s202207151211hz****-0001
   */
  attemptId?: string;
  /**
   * @remarks
   * The number of log entries to return. Valid values: 1 to 500. Default value: 300.
   * 
   * @example
   * 20
   */
  logLength?: number;
  /**
   * @remarks
   * The log offset.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 500
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      attemptId: 'AttemptId',
      logLength: 'LogLength',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attemptId: 'string',
      logLength: 'number',
      pageNumber: 'number',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppAttemptLogResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queried log.
   */
  data?: GetSparkAppAttemptLogResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C3A9594F-1D40-4472-A96C-8FB8AA20D38C
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSparkAppAttemptLogResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The application ID.
   * 
   * >  You can call the [ListSparkApps](https://help.aliyun.com/document_detail/455888.html) operation to query the Spark application IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * s202205201533hz1209892000****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612397.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppInfoResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queried Spark application. Fields in the response parameter:
   * 
   * *   **Data**: the data of the Spark application template.
   * *   **EstimateExecutionCpuTimeInSeconds**: the amount of time that is required to consume CPU resources for running the Spark application. Unit: milliseconds.
   * *   **LogRootPath**: the storage path of log files.
   * *   **LastAttemptId**: the most recent attempt ID.
   * *   **WebUiAddress**: the web UI URL.
   * *   **SubmittedTimeInMillis**: the time when the Spark application was submitted. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * *   **StartedTimeInMillis**: the time when the Spark application was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * *   **LastUpdatedTimeInMillis**: the time when the Spark application was last updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * *   **TerminatedTimeInMillis**: the time when the Spark application was terminated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * *   **DBClusterId**: the ID of the cluster on which the Spark application runs.
   * *   **ResourceGroupName**: the name of the job resource group.
   * *   **DurationInMillis**: the amount of time that is required to run the Spark application. Unit: milliseconds.
   * 
   * @example
   * {     \\"name\\": \\"SparkPi\\",     \\"file\\": \\"local:///tmp/spark-examples.jar\\",     \\"className\\": \\"org.apache.spark.examples.SparkPi\\",     \\"args\\": [         \\"1000000\\"     ],     \\"conf\\": {         \\"spark.driver.resourceSpec\\": \\"small\\",         \\"spark.executor.instances\\": 1,         \\"spark.executor.resourceSpec\\": \\"small\\"     } }",
   *       "EstimateExecutionCpuTimeInSeconds" : 100,
   *       "LogRootPath" : "oss://test/logs/driver",
   *       "LastAttemptId" : "s202204291426hzpre60cfabb0000004-0003",
   *       "WebUiAddress" : "https://sparkui.aliyuncs.com/token=xxx",
   *       "SubmittedTimeInMillis" : 1651213645000,
   *       "StartedTimeInMillis" : 1651213645010,
   *       "LastUpdatedTimeInMillis" : 1651213645200,
   *       "TerminatedTimeInMillis" : 1651213645300,
   *       "DBClusterId" : "am-dbclusterid",
   *       "ResourceGroupName" : "spark-rg",
   *       "DurationInMillis" : 100
   *     }
   */
  data?: SparkAppInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D65A809F-34CE-4550-9BC1-0ED21ETG380
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSparkAppInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The Spark application ID.
   * 
   * > You can call the [ListSparkApps](https://help.aliyun.com/document_detail/612475.html) operation to query the Spark application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * s202206061441hz22a35ab000****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL clusters within a region.
   * 
   * @example
   * amv-2ze6fl8ud7t***
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The number of log entries to return. Valid values: 1 to 500. Default value: 300.
   * 
   * @example
   * 20
   */
  logLength?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 500
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      DBClusterId: 'DBClusterId',
      logLength: 'LogLength',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      DBClusterId: 'string',
      logLength: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppLogResponseBody extends $tea.Model {
  /**
   * @remarks
   * The queried log.
   */
  data?: GetSparkAppLogResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C3A9594F-1D40-4472-A96C-8FB8AA20D38C
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSparkAppLogResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the Spark application.
   * 
   * This parameter is required.
   * 
   * @example
   * s202204221525hzca7d8140000003
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612397.html) operation to query the IDs of all AnalyticDB for MySQL clusters within a region.
   * 
   * @example
   * amv-bp1ggnu61d77****
   */
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppMetricsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetSparkAppMetricsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSparkAppMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The Spark application ID.
   * 
   * >  You can call the [ListSparkApps](https://help.aliyun.com/document_detail/455888.html) operation to query Spark application IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * s202204191546hzpread6a896000****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612397.html) operation to query the IDs of all AnalyticDB for MySQL clusters within a region.
   * 
   * @example
   * amv-bp1h405854m****
   */
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppStateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetSparkAppStateResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D65A809F-34CE-4550-9BC1-0ED21ETG380
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSparkAppStateResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The Spark application ID.
   * 
   * >  You can call the [ListSparkApps](https://help.aliyun.com/document_detail/455888.html) operation to query Spark application IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * s202205201533hz1209892000****
   */
  appId?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * @example
   * amv-uf6g8w25jacm7****
   */
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppWebUiAddressResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetSparkAppWebUiAddressResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D65A809F-34CE-4550-9BC1-0ED21ETG380
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSparkAppWebUiAddressResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-adsdxxxx
   */
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
  /**
   * @remarks
   * The queried Spark log configuration.
   */
  data?: GetSparkConfigLogPathResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1919-xxx-ssdfsdff
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSparkConfigLogPathResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * @example
   * amv-clusterxxx
   */
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
  /**
   * @remarks
   * The common definitions of Spark applications.
   * 
   * @example
   * {"SQLTemplateExample": "-- Here is just an example of SparkSQL. Modify the content and run your spark program.
   * conf spark.driver.resourceSpec=medium;
   * conf spark.executor.instances=2;
   * conf spark.executor.resourceSpec=medium;
   * conf spark.app.name=Spark SQL Test;
   * conf spark.adb.connectors=oss;
   * 
   * -- Here are your sql statements
   * show databases;",
   *                  "BatchTemplateExample": "{
   *     "comments": [
   *         "-- Here is just an example of SparkPi. Modify the content and run your spark program."
   *     ],
   *     "args": ["1000"],
   *   "file":"local:///tmp/spark-examples.jar",
   *     "name": "SparkPi",
   *     "className": "org.apache.spark.examples.SparkPi",
   *     "conf": {      "spark.driver.resourceSpec": "medium",
   *         "spark.executor.instances": 2,
   *         "spark.executor.resourceSpec": "medium"
   *     }
   * }"
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D65A809F-34CE-4550-9BC1-0ED21ETG380
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSparkDefinitionsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the Spark log analysis task. You can call the ListSparkLogAnalyzeTasks operation to query the IDs of all Spark log analysis tasks that are submitted in the current cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
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
  /**
   * @remarks
   * The information about the Spark log analysis task.
   */
  data?: SparkAnalyzeLogTask;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1DF5AF5B-C803-1861-A0FF-63666A557709
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSparkLogAnalyzeTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the job resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * test_instance
   */
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
  /**
   * @remarks
   * The state information about the Spark SQL engine.
   */
  data?: GetSparkSQLEngineStateResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxxx-xxx-xx
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSparkSQLEngineStateResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-8vbn8pq537k8w****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The application template ID.
   * 
   * >  You can call the [GetSparkTemplateFullTree](https://help.aliyun.com/document_detail/456205.html) operation to query the application template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 725204
   */
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
  /**
   * @remarks
   * The returned data.
   */
  data?: GetSparkTemplateFileContentResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D65A809F-34CE-4550-9BC1-0ED21ETG380
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSparkTemplateFileContentResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
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
  /**
   * @remarks
   * The directory structure of Spark applications, which is in the tree format. Fields in the response parameter:
   * 
   * *   **Uid**: the UID of the Alibaba Cloud account.
   * 
   * *   **Type**: the application template type. Valid values: **FOLDER**
   * 
   * *   **Parent**: indicates whether a child directory exists. Valid values:
   * 
   *     *   **0**: no.
   *     *   **-1**: yes.
   * 
   * *   **Children**: the child directory.
   * 
   * *   **LastModified**: the time when applications in the directory are last modified. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * *   **Name**: the name of the directory.
   * 
   * *   **Id**: the directory ID.
   * 
   * @example
   * {           "Uid":195813423****,           "Type":"FOLDER",          "Parent":-1,           "Children":[              {                     "LastModified":1647853173,               "Uid":195813423****,                     "Type":"FOLDER",                     "Parent":0,                     "Id":157,                     "Name":"t"         }       ],            "Id":725204,            "Name":"root"      }
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSparkTemplateFolderTreeResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
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
  /**
   * @remarks
   * The directory structure of Spark applications. Fields in the response parameter:
   * 
   * *   **Uid**: the UID of the Alibaba Cloud account.
   * 
   * *   **Type**: the application template type. Valid values:
   * 
   *     *   **FOLDER**
   *     *   **FILE**
   * 
   * *   **Parent**: indicates whether a child directory exists. Valid values:
   * 
   *     *   **0**: no.
   *     *   **-1**: yes.
   * 
   * *   **Children**: the child directory.
   * 
   * *   **LastModified**: the time when applications are last modified. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * *   **AppType**: the application type. Valid values:
   * 
   *     *   **SQL**
   *     *   **STREAMING**
   *     *   **BATCH**
   * 
   * *   **Name**: the name of the directory or application.
   * 
   * *   **Id**: the directory ID or application ID.
   * 
   * @example
   * {     "Uid": 10415777****,     "Type": "FOLDER",     "Parent": -1,     "Children": [       {         "LastModified": 1648544748,         "Uid": 104157779****,         "Type": "FILE",         "Parent": 0,         "Id": s202204132****,         "AppType": "SQL",         "Name": "f"       },       {         "LastModified": 1648544956,         "Uid": 1041577795****,         "Type": "FOLDER",         "Parent": 0,         "Id": 157,         "Name": "f3333"       }     ],     "Id": 725204,     "Name": "root"   }
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSparkTemplateFullTreeResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-*******
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * dbName
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the region in which the cluster resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * tableName
   */
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
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the query succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The information about the table.
   */
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

export class GetTableColumnsRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * assist_user_phone
   */
  columnName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
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
  /**
   * @remarks
   * The queried data.
   */
  data?: GetTableColumnsResponseBodyData;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTableColumnsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1ub9grke1****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 863D51B7-5321-41D8-A0B6-A088B0******
   */
  requestId?: string;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * create table (
   *  id varchar(32)
   * );
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTableDDLResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1565u55p32****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The description of the table.
   * 
   * @example
   * description
   */
  filterDescription?: string;
  /**
   * @remarks
   * The owner of the table.
   * 
   * @example
   * admin
   */
  filterOwner?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test_tbl
   */
  filterTblName?: string;
  /**
   * @remarks
   * The type of the table.
   * 
   * Valid values:
   * 
   * DIMENSION_TABLE
   * 
   * FACT_TABLE
   * 
   * EXTERNAL_TABLE
   * 
   * Default value: null.
   * 
   * @example
   * FACT_TABLE
   */
  filterTblType?: string;
  /**
   * @remarks
   * The order in which the fields to be returned are sorted.
   * 
   * Valid values:
   * 
   * *   Asc
   * *   Desc
   * 
   * Values for fields:
   * 
   * TableName
   * 
   * TableSize
   * 
   * CreateTime
   * 
   * UpdateTime
   * 
   * Default value: {"Type": "Desc","Field": "TableName"};
   * 
   * @example
   * {"Type": "Desc","Field": "TableName"}
   */
  orderBy?: string;
  /**
   * @remarks
   * The number of the page to return. The value is an integer that is greater than 0. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
   * 
   * *   30
   * *   50
   * *   100
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region in which the cluster resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
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
  /**
   * @remarks
   * The data returned.
   */
  data?: GetTableObjectsResponseBodyData;
  /**
   * @remarks
   * The number of the returned page. The value is an integer that is greater than 0. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: 30. Valid values:
   * 
   * *   **30**
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 863D51B7-5321-41D8-A0B6-A088B0******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTableObjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1ub9grke1****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the view.
   * 
   * @example
   * v_modbus
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 421794A3-72A5-5D27-9E8B-A75A4C503E17
   */
  requestId?: string;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * CREATE VIEW `test`.`test_view` AS SELECT
   *   `id`
   * , `name`
   * FROM
   *   `test_tbl_adb`
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetViewDDLResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The owner of the view.
   * 
   * @example
   * admin
   */
  filterOwner?: string;
  /**
   * @remarks
   * The name of the view.
   * 
   * @example
   * test_filter
   */
  filterViewName?: string;
  /**
   * @remarks
   * The type of the view.
   * 
   * Valid values:
   * 
   * \\-VIRTUAL_VIEW
   * 
   * \\-MATERIALIZED_VIEW
   * 
   * Default value: null.
   * 
   * @example
   * VIRTUAL_VIEW
   */
  filterViewType?: string;
  /**
   * @remarks
   * The order in which you want to sort the query results. Valid values for Type:
   * 
   * *   Asc
   * *   Desc
   * 
   * Valid values for Field: -ViewName
   * 
   * \\-CreateTime
   * 
   * \\-UpdateTime
   * 
   * Default value: {"Type": "Desc","Field": "ViewName"}.
   * 
   * @example
   * {"Type": "Desc","Field": "ViewName"}
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
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
  /**
   * @remarks
   * The returned data.
   */
  data?: GetViewObjectsResponseBodyData;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetViewObjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the Spark application that you want to terminate.
   * 
   * This parameter is required.
   * 
   * @example
   * s202204132018hzprec1ac****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL clusters within a region.
   * 
   * @example
   * amv-bp1ub9grke1****
   */
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillSparkAppResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: KillSparkAppResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 69D0810B-F9F5-5F4C-A57F-DF36133B63C9
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: KillSparkAppResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the Spark log analysis task. You can call the ListSparkLogAnalyzeTasks operation to query the IDs and states of all analysis tasks in the current cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 15
   */
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
  /**
   * @remarks
   * The information about the Spark log analysis task.
   */
  data?: SparkAnalyzeLogTask;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1DF5AF5B-C803-1861-A0FF-63666A557709
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: KillSparkLogAnalyzeTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-8vbn8pq537k8w****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * spark_test
   */
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
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D65A809F-34CE-4550-9BC1-0ED21ETG380
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: KillSparkSQLEngineResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the Spark application.
   * 
   * > You can call the [ListSparkApps](https://help.aliyun.com/document_detail/455888.html) operation to query all application IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * s202204132018hzprec1ac****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * @example
   * amv-uf6o6m8p6x***
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The page number. The value must be an integer that is greater than 0. Default value: **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **10** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      DBClusterId: 'DBClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      DBClusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkAppAttemptsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListSparkAppAttemptsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSparkAppAttemptsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The number of the page to return. The value must be an integer that is greater than 0. Default value: **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10. Valid values:
   * 
   * - **10**
   * - **50**
   * - **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the job resource group.
   * 
   * @example
   * test_instance
   */
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
  /**
   * @remarks
   * The data returned.
   */
  data?: ListSparkAppsResponseBodyData;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D65A809F-34CE-4550-9BC1-0ED21ETG380
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSparkAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-9scxs****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
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
  /**
   * @remarks
   * The returned data.
   */
  data?: ListSparkLogAnalyzeTasksResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1DF5AF5B-C803-1861-A0FF-63666A557709
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSparkLogAnalyzeTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
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
  /**
   * @remarks
   * The IDs of Spark template files.
   */
  data?: number[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSparkTemplateFileIdsResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class LoadSampleDataSetRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-2ze0z517o1mgp66a
   */
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

export class LoadSampleDataSetResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * @example
   * amv-2ze0z517o1mgp66a
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FA31BE84-ABE8-554A-A769-5F860C34EE10
   */
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

export class LoadSampleDataSetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LoadSampleDataSetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LoadSampleDataSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountDescriptionRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the database account.
   * 
   * *   The description cannot start with `http://` or `https://`.
   * *   The description must be 2 to 256 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * AccDesc
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * >  You can call the [DescribeAccounts](https://help.aliyun.com/document_detail/612430.html) operation to query the information about database accounts of an AnalyticDB for MySQL cluster, including database account names.
   * 
   * This parameter is required.
   * 
   * @example
   * testacc
   */
  accountName?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database engine of the cluster. Valid values:
   * 
   * *   **AnalyticDB** (default): the AnalyticDB for MySQL engine.
   * *   **Clickhouse**: the wide table engine.
   * 
   * @example
   * Clickhouse
   */
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      DBClusterId: 'DBClusterId',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      DBClusterId: 'string',
      engine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAccountDescriptionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAccountDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The name of the database account.
   * 
   * This parameter is required.
   * 
   * @example
   * account1
   */
  accountName?: string;
  /**
   * @remarks
   * The permissions that you want to grant to the database account.
   * 
   * This parameter is required.
   */
  accountPrivileges?: ModifyAccountPrivilegesRequestAccountPrivileges[];
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1k5p066e1a****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @remarks
   * The name of the database account.
   * 
   * This parameter is required.
   * 
   * @example
   * account1
   */
  accountName?: string;
  /**
   * @remarks
   * The permissions that you want to grant to the database account.
   * 
   * This parameter is required.
   */
  accountPrivilegesShrink?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1k5p066e1a****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DD88DE7-824F-1082-AA57-575AFC6517A8
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAccountPrivilegesResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The status to which you want to change the SQL audit feature. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * >  After you disable the SQL audit feature, all SQL audit logs are deleted. You must query and export SQL audit logs before you disable SQL audit. For more information, see [DescribeAuditLogRecords](https://help.aliyun.com/document_detail/612426.html). When you re-enable SQL audit, audit logs that are generated from the time when SQL audit was last enabled are available for queries.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  auditLogStatus?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-t4nj8619bz2w3****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CDC59E56-BD07-56CA-A05F-B7907DE5C862
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the status of SQL audit is updated. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAuditLogConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ModifyBackupPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The number of days for which to retain full backup files. Valid values: 7 to 730.
   * 
   * >  If you do not specify this parameter, the default value 7 is used.
   * 
   * @example
   * 7
   */
  backupRetentionPeriod?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable log backup. Valid values:
   * 
   * *   **Enable**
   * *   **Disable**
   * 
   * >  If you do not specify this parameter, the default value Enable is used.
   * 
   * @example
   * Enable
   */
  enableBackupLog?: string;
  /**
   * @remarks
   * The number of days for which to retain log backup files. Valid values: 7 to 730.
   * 
   * >  If you do not specify this parameter, the default value 7 is used.
   * 
   * @example
   * 7
   */
  logBackupRetentionPeriod?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The days of the week on which to perform a full backup. Separate multiple values with commas (,). Valid values:
   * 
   * *   **Monday**
   * *   **Tuesday**
   * *   **Wednesday**
   * *   **Thursday**
   * *   **Friday**
   * *   **Saturday**
   * *   **Sunday**
   * 
   * >  To ensure data security, we recommend that you specify at least two values.
   * 
   * This parameter is required.
   * 
   * @example
   * Monday,Wednesday,Friday,Sunday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The start time to perform a full backup. Specify the time in the HH:mmZ-HH:mmZ format. The time must be in UTC.
   * 
   * >  The time range must be 1 hour.
   * 
   * This parameter is required.
   * 
   * @example
   * 18:00Z-19:00Z
   */
  preferredBackupTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPeriod: 'BackupRetentionPeriod',
      DBClusterId: 'DBClusterId',
      enableBackupLog: 'EnableBackupLog',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRetentionPeriod: 'string',
      DBClusterId: 'string',
      enableBackupLog: 'string',
      logBackupRetentionPeriod: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBackupPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyBackupPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyBackupPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterAccessWhiteListRequest extends $tea.Model {
  /**
   * @remarks
   * The attribute of the IP address whitelist. By default, this parameter is empty.
   * 
   * > Whitelists with the hidden attribute are not displayed in the console. Those whitelists are used to access Data Transmission Service (DTS) and PolarDB.
   * 
   * @example
   * hidden
   */
  DBClusterIPArrayAttribute?: string;
  /**
   * @remarks
   * The name of the IP address whitelist. If you do not specify this parameter, the Default whitelist is modified.
   * 
   * *   The whitelist name must be 2 to 32 characters in length. The name can contain lowercase letters, digits, and underscores (_). The name must start with a lowercase letter and end with a lowercase letter or a digit.
   * *   Each cluster supports up to 50 IP address whitelists.
   * 
   * @example
   * test
   */
  DBClusterIPArrayName?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The method used to modify the IP address whitelist. Valid values:
   * 
   * *   **Cover** (default)
   * *   **Append**
   * *   **Delete**
   * 
   * @example
   * Cover
   */
  modifyMode?: string;
  /**
   * @remarks
   * The IP addresses in an IP address whitelist of a cluster. Separate multiple IP addresses with commas (,). You can add a maximum of 500 different IP addresses to a whitelist. The entries in the IP address whitelist must be in one of the following formats:
   * 
   * *   IP addresses, such as 10.23.XX.XX.
   * *   CIDR blocks, such as 10.23.xx.xx/24. In this example, 24 indicates that the prefix of each IP address in the IP whitelist is 24 bits in length. You can replace 24 with a value within the range of 1 to 32.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.23.xx.xx
   */
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 370D09FD-442A-5225-AAD3-7362CAE39177
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 1564657730
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyClusterAccessWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The prefix of the public endpoint.
   * 
   * *   The prefix can contain lowercase letters, digits, and hyphens (-). It must start with a lowercase letter.
   * *   The prefix can be up to 30 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test-123
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The public endpoint of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****.ads.aliyuncs.com
   */
  currentConnectionString?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The port number. Set the value to **3306**.
   * 
   * @example
   * 3306
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 370D09FD-442A-5225-AAD3-7362CAE39177
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyClusterConnectionStringResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The reserved computing resources. Unit: ACUs. Valid values: 0 to 4096. The value must be in increments of 16 ACUs. Each ACU is approximately equal to 1 core and 4 GB memory.
   * 
   * >  This parameter must be specified with a unit.
   * 
   * @example
   * 16ACU
   */
  computeResource?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to allocate all reserved computing resources to the user_default resource group. Valid values:
   * 
   * *   true (default)
   * *   false
   * 
   * @example
   * true
   */
  enableDefaultResourcePool?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  reservedNodeCount?: number;
  reservedNodeSize?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The reserved storage resources. Unit: ACUs. Valid values: 0 to 2064. The value must be in increments of 24 ACUs. Each ACU is approximately equal to 1 core and 4 GB memory.
   * 
   * >  This parameter must be specified with a unit.
   * 
   * @example
   * 24ACU
   */
  storageResource?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'ComputeResource',
      DBClusterId: 'DBClusterId',
      enableDefaultResourcePool: 'EnableDefaultResourcePool',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      reservedNodeCount: 'ReservedNodeCount',
      reservedNodeSize: 'ReservedNodeSize',
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
      reservedNodeCount: 'number',
      reservedNodeSize: 'string',
      resourceOwnerAccount: 'string',
      storageResource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBClusterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @example
   * amv-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 2035629****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0D6BF3E2-41D8-57F6-9A62-A13A70377952
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The description of the cluster.
   * 
   * *   The description cannot start with `http://` or `https`.
   * *   The description must be 2 to 256 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * adb_test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1r053byu48p****
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 17F57FEE-EA4F-4337-8D2E-9C23CAA63D74
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The maintenance window of the cluster. It must be in the hh:mmZ-hh:mmZ format.
   * 
   * > The interval must be 1 hour and start and end at the beginning of an hour.
   * 
   * This parameter is required.
   * 
   * @example
   * 22:00Z-23:00Z
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 65BDA532-28AF-4122-AA39-B382721EEE64
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBClusterMaintainTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  clusterMode?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  clusterSizeResource?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the spot instance feature for the resource group. After you enable the spot instance feature, you are charged for resources at a lower unit price but the resources are probably released. You can enable the spot instance feature only for job resource groups. Valid values:
   * 
   * *   **True**
   * *   **False**
   * 
   * @example
   * true
   */
  enableSpot?: boolean;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * > You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/459446.html) operation to query the name of a resource group in a cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * 
   * *   **Interactive**
   * *   **Job**
   * 
   * > For information about resource groups of Data Lakehouse Edition, see [Resource groups](https://help.aliyun.com/document_detail/428610.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Interactive
   */
  groupType?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  maxClusterCount?: number;
  /**
   * @remarks
   * The maximum amount of reserved computing resources. Unit: ACU.
   * 
   * *   If GroupType is set to Interactive, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 16 ACUs.
   * *   If GroupType is set to Job, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 8 ACUs.
   * 
   * @example
   * 48ACU
   */
  maxComputeResource?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  minClusterCount?: number;
  /**
   * @remarks
   * The minimum amount of reserved computing resources. Unit: AnalyticDB compute units (ACUs).
   * 
   * *   If the GroupType parameter is set to Interactive, set the value to 16ACU.
   * *   If GroupType is set to Job, set the value to 0ACU.
   * 
   * @example
   * 0ACU
   */
  minComputeResource?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The job resubmission rules.
   */
  rules?: ModifyDBResourceGroupRequestRules[];
  static names(): { [key: string]: string } {
    return {
      clusterMode: 'ClusterMode',
      clusterSizeResource: 'ClusterSizeResource',
      DBClusterId: 'DBClusterId',
      enableSpot: 'EnableSpot',
      groupName: 'GroupName',
      groupType: 'GroupType',
      maxClusterCount: 'MaxClusterCount',
      maxComputeResource: 'MaxComputeResource',
      minClusterCount: 'MinClusterCount',
      minComputeResource: 'MinComputeResource',
      regionId: 'RegionId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterMode: 'string',
      clusterSizeResource: 'string',
      DBClusterId: 'string',
      enableSpot: 'boolean',
      groupName: 'string',
      groupType: 'string',
      maxClusterCount: 'number',
      maxComputeResource: 'string',
      minClusterCount: 'number',
      minComputeResource: 'string',
      regionId: 'string',
      rules: { 'type': 'array', 'itemType': ModifyDBResourceGroupRequestRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBResourceGroupShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  clusterMode?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  clusterSizeResource?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the spot instance feature for the resource group. After you enable the spot instance feature, you are charged for resources at a lower unit price but the resources are probably released. You can enable the spot instance feature only for job resource groups. Valid values:
   * 
   * *   **True**
   * *   **False**
   * 
   * @example
   * true
   */
  enableSpot?: boolean;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * > You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/459446.html) operation to query the name of a resource group in a cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * 
   * *   **Interactive**
   * *   **Job**
   * 
   * > For information about resource groups of Data Lakehouse Edition, see [Resource groups](https://help.aliyun.com/document_detail/428610.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Interactive
   */
  groupType?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  maxClusterCount?: number;
  /**
   * @remarks
   * The maximum amount of reserved computing resources. Unit: ACU.
   * 
   * *   If GroupType is set to Interactive, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 16 ACUs.
   * *   If GroupType is set to Job, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 8 ACUs.
   * 
   * @example
   * 48ACU
   */
  maxComputeResource?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  minClusterCount?: number;
  /**
   * @remarks
   * The minimum amount of reserved computing resources. Unit: AnalyticDB compute units (ACUs).
   * 
   * *   If the GroupType parameter is set to Interactive, set the value to 16ACU.
   * *   If GroupType is set to Job, set the value to 0ACU.
   * 
   * @example
   * 0ACU
   */
  minComputeResource?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The job resubmission rules.
   */
  rulesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterMode: 'ClusterMode',
      clusterSizeResource: 'ClusterSizeResource',
      DBClusterId: 'DBClusterId',
      enableSpot: 'EnableSpot',
      groupName: 'GroupName',
      groupType: 'GroupType',
      maxClusterCount: 'MaxClusterCount',
      maxComputeResource: 'MaxComputeResource',
      minClusterCount: 'MinClusterCount',
      minComputeResource: 'MinComputeResource',
      regionId: 'RegionId',
      rulesShrink: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterMode: 'string',
      clusterSizeResource: 'string',
      DBClusterId: 'string',
      enableSpot: 'boolean',
      groupName: 'string',
      groupType: 'string',
      maxClusterCount: 'number',
      maxComputeResource: 'string',
      minClusterCount: 'number',
      minComputeResource: 'string',
      regionId: 'string',
      rulesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBResourceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 805F14E1-0186-520E-A6D5-30188D94E8DA
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDBResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * A CORN expression that specifies the scaling cycle and time for the scaling plan.
   * 
   * @example
   * 0 20 14 * * ?
   */
  cronExpression?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-wz9509beptiz****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the scaling plan.
   * 
   * >  You can call the [DescribeElasticPlans](https://help.aliyun.com/document_detail/601334.html) operation to query the names of scaling plans.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  elasticPlanName?: string;
  /**
   * @remarks
   * The end time of the scaling plan.
   * 
   * >  Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2025-01-01T12:01:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the scaling plan.
   * 
   * >  Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2022-01-01T12:01:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The desired specifications of elastic resources after scaling.
   * 
   * > 
   * 
   * *   If the scaling plan uses **EIUs** and **Default Proportional Scaling for EIUs** is enabled, you do not need to specify this parameter. In other cases, you must specify this parameter.
   * 
   * *   You can call the [DescribeElasticPlanSpecifications](https://help.aliyun.com/document_detail/601278.html) operation to query the specifications that are supported for scaling plans.
   * 
   * @example
   * 32ACU
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5C433C2-001F-58E3-99F5-3274C14DF8BD
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyElasticPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ModifyPerformanceViewRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612397.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1ub9grke1****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The new information about the monitoring view.
   * 
   * This parameter is required.
   */
  viewDetail?: ModifyPerformanceViewRequestViewDetail;
  /**
   * @remarks
   * The name of the monitoring view.
   * 
   * This parameter is required.
   */
  viewName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      viewDetail: 'ViewDetail',
      viewName: 'ViewName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      viewDetail: ModifyPerformanceViewRequestViewDetail,
      viewName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPerformanceViewShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612397.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1ub9grke1****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The new information about the monitoring view.
   * 
   * This parameter is required.
   */
  viewDetailShrink?: string;
  /**
   * @remarks
   * The name of the monitoring view.
   * 
   * This parameter is required.
   */
  viewName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      viewDetailShrink: 'ViewDetail',
      viewName: 'ViewName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      viewDetailShrink: 'string',
      viewName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPerformanceViewResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details about the access denial. This parameter is returned only if Resource Access Management (RAM) permission verification failed.
   * 
   * @example
   * {
   *     "PolicyType": "AccountLevelIdentityBasedPolicy",
   *     "AuthPrincipalOwnerId": "1*****************7",
   *     "EncodedDiagnosticMessage": "AQIBIAAAAOPdwKY2QLOvgMEc7SkkoJfj1kvZwsaRqNYMh10Tv0wTe0fCzaCdrvgazfNb0EnJKETgXyhR+3BIQjx9WAqZryejBsp1Bl4qI5En/D9dEhcXAtKCxCmE2kZCiEzpy8BoEUt+bs0DmlaGWO5xkEpttypLIB4rUhDvZd+zwPg4EXk4KSSWSWsurxtqDkKEMshKlQFBTKvJcKwyhk62IeYly4hQ+5IpXjkh1GQXuDRCQ==",
   *     "AuthPrincipalType": "SubUser",
   *     "AuthPrincipalDisplayName": "2***************9",
   *     "NoPermissionType": "ImplicitDeny",
   *     "AuthAction": "adb:DescribeExcessivePrimaryKeys"
   * }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The modification result. Valid values:
   * 
   * *   **SUCCESS**
   * *   **FAILED**
   * 
   * @example
   * SUCCESS
   */
  modifyStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C7EDB8E4-9769-4233-88C7-DCA4C9******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      modifyStatus: 'ModifyStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      modifyStatus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPerformanceViewResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyPerformanceViewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyPerformanceViewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreloadSparkAppMetricsRequest extends $tea.Model {
  /**
   * @remarks
   * The Spark application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * s202204221525hzca7d8140000003
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL clusters within a region.
   * 
   * @example
   * amv-bp1mfe9qmsw1dzyg
   */
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreloadSparkAppMetricsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: PreloadSparkAppMetricsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 84489769-3065-5A28-A4CB-977CD426F1C3
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PreloadSparkAppMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database engine of the cluster. Valid values:
   * 
   * *   **AnalyticDB** (default): the AnalyticDB for MySQL engine.
   * *   **Clickhouse**: the wide table engine.
   * 
   * @example
   * Clickhouse
   */
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      engine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseClusterPublicConnectionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A94B6C02-7BD4-5D67-9776-3AC8317E8DD5
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseClusterPublicConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class RenameSparkTemplateFileRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-d*****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The template file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The name of the template file that you want to rename.
   * 
   * This parameter is required.
   * 
   * @example
   * new_template_name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      id: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameSparkTemplateFileResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: RenameSparkTemplateFileResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16D332C4-ACEB-526A-9B53-2B708FED594A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RenameSparkTemplateFileResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameSparkTemplateFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenameSparkTemplateFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenameSparkTemplateFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the database account.
   * 
   * *   The description cannot start with `http://` or `https://`.
   * *   The description must be 2 to 256 characters in length.
   * 
   * @example
   * AccDesc
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * >  You can call the [DescribeAccounts](https://help.aliyun.com/document_detail/612430.html) operation to query the information about database accounts of an AnalyticDB for MySQL cluster, including database account names.
   * 
   * This parameter is required.
   * 
   * @example
   * test_accout
   */
  accountName?: string;
  /**
   * @remarks
   * The password of the database account.
   * 
   * *   The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * *   Special characters include `! @ # $ % ^ & * ( ) _ + - =`
   * *   The password must be 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Test_accout1
   */
  accountPassword?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database engine of the cluster. Valid values:
   * 
   * *   **AnalyticDB** (default): the AnalyticDB for MySQL engine.
   * *   **Clickhouse**: the wide table engine.
   * 
   * @example
   * Clickhouse
   */
  engine?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      DBClusterId: 'DBClusterId',
      engine: 'Engine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountPassword: 'string',
      DBClusterId: 'string',
      engine: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetAccountPasswordResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetAccountPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The database ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-dbclusterid
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) log path.
   * 
   * @example
   * oss://path/to/log
   */
  ossLogPath?: string;
  /**
   * @remarks
   * Specifies whether to use the default OSS log path.
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The returned data.
   */
  data?: SetSparkAppLogRootPathResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D65A809F-34CE-4550-9BC1-0ED21ETG380
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetSparkAppLogRootPathResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The configuration that is required to start the Spark SQL engine. Specify this value in the JSON format. For more information, see [Conf configuration parameters](https://help.aliyun.com/document_detail/471203.html).
   * 
   * @example
   * { "spark.shuffle.timeout": ":0s" }
   */
  config?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-abcd****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) paths of third-party JAR packages that are required to start the Spark SQL engine. Separate multiple OSS paths with commas (,).
   * 
   * @example
   * oss://testBuckname/test.jar,oss://testBuckname/test2.jar
   */
  jars?: string;
  /**
   * @remarks
   * The maximum number of executors that are required to execute SQL statements. Valid values: 1 to 2000. If this value exceeds the total number of executes that are supported by the resource group, the Spark SQL engine fails to be started.
   * 
   * @example
   * 10
   */
  maxExecutor?: number;
  /**
   * @remarks
   * The minimum number of executors that are required to execute SQL statements. Valid values: 0 to 2000. A value of 0 indicates that no executors are permanent if no SQL statements are executed. If this value exceeds the total number of executors that are supported by the resource group, the Spark SQL engine fails to be started. The value must be less than the value of MaxExecutor.
   * 
   * @example
   * 1
   */
  minExecutor?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * spark-rg-name
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The maximum number of slots that are required to maintain Spark sessions for executing SQL statements. Valid values: 1 to 500.
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * The returned data.
   */
  data?: StartSparkSQLEngineResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D65A809F-34CE-4550-9BC1-0ED21ETG380
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartSparkSQLEngineResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The type of the client. The value can be up to 64 characters in length.
   * 
   * @example
   * CONSOLE
   */
  agentSource?: string;
  /**
   * @remarks
   * The version of the client. The value can be up to 64 characters in length.
   * 
   * @example
   * 1.091
   */
  agentVersion?: string;
  /**
   * @remarks
   * The name of the application. The value can be up to 64 characters in length.
   * 
   * @example
   * TestApp
   */
  appName?: string;
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * *   **SQL**
   * *   **STREAMING**
   * *   **BATCH** (default)
   * 
   * @example
   * SQL
   */
  appType?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The data of the application template.
   * 
   * > For information about the application template configuration, see [Spark application configuration guide](https://help.aliyun.com/document_detail/452402.html).
   * 
   * This parameter is required.
   * 
   * @example
   * conf spark.driver.resourceSpec=small; conf spark.executor.instances=1; conf spark.executor.resourceSpec=small; conf spark.app.name=TestApp;
   */
  data?: string;
  /**
   * @remarks
   * The name of the job resource group.
   * 
   * >  You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/612410.html) operation to query the name of a resource group within a cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * adb
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The ID of the application template.
   * 
   * > You can call the [GetSparkTemplateFullTree](https://help.aliyun.com/document_detail/456205.html) operation to query the application template ID.
   * 
   * @example
   * 15
   */
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
  /**
   * @remarks
   * The returned data.
   */
  data?: SubmitSparkAppResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitSparkAppResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The ID of the Spark application.
   * 
   * This parameter is required.
   * 
   * @example
   * s202301121553hzd9c6f7xxxx
   */
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
  /**
   * @remarks
   * The information about the Spark log analysis task.
   */
  data?: SparkAnalyzeLogTask;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1DF5AF5B-C803-1861-A0FF-63666A557709
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitSparkLogAnalyzeTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
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
  /**
   * @remarks
   * The name of the database account.
   * 
   * >  You can call the [DescribeAccounts](https://help.aliyun.com/document_detail/612430.html) operation to query the information about database accounts of an AnalyticDB for MySQL cluster, including database account names.
   * 
   * This parameter is required.
   * 
   * @example
   * test_accout
   */
  accountName?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-wz99d9nh5****
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 93E85E5C-C805-5837-8713-05B69A504EE5
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class UnbindDBResourceGroupWithUserRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1ub9grke1****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * user1
   */
  groupUser?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      groupName: 'GroupName',
      groupUser: 'GroupUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      groupName: 'string',
      groupUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDBResourceGroupWithUserResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
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

export class UnbindDBResourceGroupWithUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindDBResourceGroupWithUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnbindDBResourceGroupWithUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSparkTemplateFileRequest extends $tea.Model {
  /**
   * @remarks
   * The template data to be updated.
   * 
   * >  If you do not specify this parameter, the application template is not updated. For information about how to configure a Spark application template, see [Configure a Spark application](https://help.aliyun.com/document_detail/452402.html).
   * 
   * @example
   * set spark.driver.resourceSpec=medium;set spark.executor.instances=2;set spark.executor.resourceSpec=medium;set spark.app.name=Spark SQL Test;
   */
  content?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-pz5vp4585l466****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The application template ID.
   * 
   * >  You can call the [GetSparkTemplateFullTree](https://help.aliyun.com/document_detail/456205.html) operation to query the application template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 718056
   */
  id?: number;
  /**
   * @remarks
   * The name of the job resource group.
   * 
   * @example
   * adb
   */
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
  /**
   * @remarks
   * The update result.
   */
  data?: UpdateSparkTemplateFileResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C3A9594F-1D40-4472-A96C-8FB8AA20D38C
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSparkTemplateFileResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class OperatorNodeStats extends $tea.Model {
  bytes?: number;
  outputRows?: number;
  parameters?: string;
  peakMemory?: number;
  timeCost?: number;
  static names(): { [key: string]: string } {
    return {
      bytes: 'bytes',
      outputRows: 'outputRows',
      parameters: 'parameters',
      peakMemory: 'peakMemory',
      timeCost: 'timeCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytes: 'number',
      outputRows: 'number',
      parameters: 'string',
      peakMemory: 'number',
      timeCost: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDBClusterRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N to add to the cluster. You can use tags to filter clusters. Valid values of N: 1 to 20. The values that you specify for N must be unique and consecutive integers that start from 1. Each value of `Tag.N.Key` is paired with a value of `Tag.N.Value`.
   * 
   * >  The tag key can be up to 64 characters in length and cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * 
   * @example
   * testkey1
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the cluster. You can use tags to filter clusters. Valid values of N: 1 to 20. The values that you specify for N must be unique and consecutive integers that start from 1. Each value of `Tag.N.Key` is paired with a value of `Tag.N.Value`.
   * 
   * >  The tag value can be up to 64 characters in length and cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * 
   * @example
   * test1
   */
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

export class CreateDBResourceGroupRequestRules extends $tea.Model {
  /**
   * @remarks
   * The name of the resource group.
   * 
   * *   The name can be up to 255 characters in length.
   * *   The name must start with a letter or digit.
   * *   The name can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * The execution duration of the query. Unit: milliseconds.
   * 
   * @example
   * 180000
   */
  queryTime?: string;
  /**
   * @remarks
   * The name of the resource group to which you want to resubmit the query job.
   * 
   * @example
   * job
   */
  targetGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      queryTime: 'QueryTime',
      targetGroupName: 'TargetGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      queryTime: 'string',
      targetGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOssSubDirectoryResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The cyclic redundancy check (CRC) value on the client.
   * 
   * @example
   * 1
   */
  clientCRC?: number;
  /**
   * @remarks
   * The tag of the OSS path.
   * 
   * @example
   * 1
   */
  ETag?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3A0DE2E0-A37B-5EE4-9136-C4C473714802
   */
  requestId?: string;
  /**
   * @remarks
   * The CRC-64 value on the OSS bucket.
   * 
   * @example
   * 1
   */
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

export class CreatePerformanceViewRequestViewDetailCategoriesKeys extends $tea.Model {
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * AnalyticDB_CPU
   */
  keyName?: string;
  /**
   * @remarks
   * Specifies whether to select the metric. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      keyName: 'KeyName',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyName: 'string',
      selected: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePerformanceViewRequestViewDetailCategories extends $tea.Model {
  /**
   * @remarks
   * The name of the metric category. Valid values:
   * 
   * *   **Node**
   * *   **DiskData**
   * *   **WorkLoad**
   * *   **ResourceGroup**
   * 
   * @example
   * Node
   */
  category?: string;
  /**
   * @remarks
   * The metrics.
   */
  keys?: CreatePerformanceViewRequestViewDetailCategoriesKeys[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      keys: { 'type': 'array', 'itemType': CreatePerformanceViewRequestViewDetailCategoriesKeys },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePerformanceViewRequestViewDetail extends $tea.Model {
  /**
   * @remarks
   * The metric categories.
   */
  categories?: CreatePerformanceViewRequestViewDetailCategories[];
  /**
   * @remarks
   * Specifies whether to enable the filter interaction feature. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  chartLinked?: boolean;
  /**
   * @remarks
   * The number of charts to display in each row.
   * 
   * @example
   * 2
   */
  chartsPerLine?: number;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      chartLinked: 'ChartLinked',
      chartsPerLine: 'ChartsPerLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': CreatePerformanceViewRequestViewDetailCategories },
      chartLinked: 'boolean',
      chartsPerLine: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSparkTemplateResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the application template is created. Valid values:
   * 
   * *   **True**
   * *   **False**
   * 
   * @example
   * True
   */
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
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **True**
   * *   **False**
   * 
   * @example
   * True
   */
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
  /**
   * @remarks
   * Indicates whether the template file is deleted. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * id
   */
  column?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * tdb1
   */
  database?: string;
  /**
   * @remarks
   * The description of the permission object.
   * 
   * @example
   * id of table
   */
  description?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * table1
   */
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
  /**
   * @remarks
   * The objects on which the permission takes effect, including databases, tables, and columns. If Global is returned for the PrivilegeType parameter, an empty string is returned for this parameter.
   */
  privilegeObject?: DescribeAccountAllPrivilegesResponseBodyDataResultPrivilegeObject;
  /**
   * @remarks
   * The permission level of the database account. You can call the `DescribeEnabledPrivileges` operation to query the permission level of the database account.
   * 
   * @example
   * Global
   */
  privilegeType?: string;
  /**
   * @remarks
   * The name of the permission, which is the same as the permission name returned by the `DescribeEnabledPrivileges` operation.
   */
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
  /**
   * @remarks
   * Indicates the position where the results are truncated. When a value of `true` is returned for the `Truncated` parameter, this parameter is present and contains the value to use for the Marker parameter in a subsequent call.
   * 
   * @example
   * 0573e74fd1ccb01739993a691e876074db6e1b6ad79f54115f0e98528432ba6a523cfec5780ade5189299cc3396f6ff7
   */
  marker?: string;
  /**
   * @remarks
   * The permissions.
   */
  result?: DescribeAccountAllPrivilegesResponseBodyDataResult[];
  /**
   * @remarks
   * Indicates whether the results are truncated. If the results are truncated, a value of `true` is returned. In this case, you must call this operation again to obtain all the results until a value of `false` is returned for this parameter.
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The name of the column. This parameter is returned when PrivilegeType is set to Column.
   * 
   * @example
   * column1
   */
  column?: string;
  /**
   * @remarks
   * The name of the database. This parameter is returned when PrivilegeType is set to Database, Table, or Column.
   * 
   * @example
   * tdb1
   */
  database?: string;
  /**
   * @remarks
   * The description that is specified when you create a table or column. This parameter is returned only when PrivilegeType is set to Database or Table, indicating the database description or table description.
   * 
   * @example
   * a test db
   */
  description?: string;
  /**
   * @remarks
   * The name of the table. This parameter is returned when PrivilegeType is set to Table or Column.
   * 
   * @example
   * table1
   */
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
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * column1
   */
  column?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * db1
   */
  database?: string;
  /**
   * @remarks
   * The description of the permission object.
   * 
   * @example
   * a test column
   */
  description?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * tabl1
   */
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
  /**
   * @remarks
   * The objects on which the permission takes effect, including databases, tables, columns, and additional descriptions.
   */
  privilegeObject?: DescribeAccountPrivilegesResponseBodyDataPrivilegeObject;
  /**
   * @remarks
   * The permission level of the permission. Valid values: `Global`, `Database`, `Table`, and `Column`. You can call the `DescribeEnabledPrivileges` parameter to query the permission level of a specific permission.
   * 
   * @example
   * Column
   */
  privilegeType?: string;
  /**
   * @remarks
   * The name of the permission. You can call the `DescribeEnabledPrivileges` operation to query the name of the permission.
   */
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
  /**
   * @remarks
   * The description of the database account.
   * 
   * @example
   * test_accout_des
   */
  accountDescription?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * @example
   * test_accout
   */
  accountName?: string;
  /**
   * @remarks
   * The status of the database account. Valid values:
   * 
   * *   **Creating**
   * *   **Available**
   * *   **Deleting**
   * 
   * @example
   * Available
   */
  accountStatus?: string;
  /**
   * @remarks
   * The type of the database account. Valid values:
   * 
   * *   **Normal**: standard account.
   * *   **Super**: privileged account.
   * 
   * @example
   * Normal
   */
  accountType?: string;
  /**
   * @remarks
   * The database engine of the cluster. Valid values:
   * 
   * *   **AnalyticDB**: the AnalyticDB for MySQL engine.
   * *   **Clickhouse**: the wide table engine.
   * 
   * @example
   * Clickhouse
   */
  engine?: string;
  /**
   * @remarks
   * The ID of the Resource Access Management (RAM) user.
   * 
   * @example
   * 1958134230****
   */
  ramUsers?: string;
  static names(): { [key: string]: string } {
    return {
      accountDescription: 'AccountDescription',
      accountName: 'AccountName',
      accountStatus: 'AccountStatus',
      accountType: 'AccountType',
      engine: 'Engine',
      ramUsers: 'RamUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDescription: 'string',
      accountName: 'string',
      accountStatus: 'string',
      accountType: 'string',
      engine: 'string',
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
  /**
   * @remarks
   * The comments of the column.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * id
   */
  name?: string;
  /**
   * @remarks
   * The data type of the column.
   * 
   * @example
   * bigint
   */
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
  /**
   * @remarks
   * Indicates whether the column is an auto-increment column. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  autoIncrementColumn?: boolean;
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * id
   */
  columnName?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * @example
   * amv-bp1pke2pcfavw****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Indicates whether the column is the primary key of the table. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  primaryKey?: boolean;
  /**
   * @remarks
   * The logical name of the database.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  /**
   * @remarks
   * The logical name of the table.
   * 
   * @example
   * test
   */
  tableName?: string;
  /**
   * @remarks
   * The data type of the column.
   * 
   * @example
   * bigint
   */
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * @example
   * amv-bp1pke2pcfavw****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The logical name of the database.
   * 
   * @example
   * adb_demo
   */
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * @example
   * amv-bp1pke2pcfavw****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  /**
   * @remarks
   * The logical name of the table.
   * 
   * @example
   * test
   */
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
  /**
   * @remarks
   * The content of the log.
   * 
   * @example
   * DDL migration job finished
   */
  context?: string;
  /**
   * @remarks
   * The phase during which the log was generated. Valid values:
   * 
   * *   **StructureMigrate**: schema migration.
   * *   **FullDataSync**: full data synchronization.
   * *   **IncrementalSync**: incremental data synchronization.
   * 
   * @example
   * FullDataSync
   */
  stage?: string;
  /**
   * @remarks
   * The type of the log. Multiple log types are separated by commas (,). Valid values:
   * 
   * *   **INFO**
   * *   **WARN**
   * *   **ERROR**
   * 
   * @example
   * INFO,WARN,ERROR
   */
  state?: string;
  /**
   * @remarks
   * The time when the log was generated. The time follows the ISO 8601 standard in the **yyyy-MM-ddTHH:mm:ssZ** format. The time is displayed in UTC.
   * 
   * @example
   * 2023-02-01T05:46:30Z
   */
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
  /**
   * @remarks
   * Indicates whether the resource group is available. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * True
   */
  available?: boolean;
  cuOptions?: number[];
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * 
   * *   **Interactive**
   * *   **Job**
   * 
   * >  For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/428610.html).
   * 
   * @example
   * Job
   */
  groupType?: string;
  /**
   * @remarks
   * The amount of remaining computing resources. Unit: ACUs.
   * 
   * @example
   * 512
   */
  leftComputeResource?: number;
  /**
   * @remarks
   * The maximum amount of reserved computing resources. Unit: ACUs.
   * 
   * *   If the value of GroupType is **Interactive**, the amount of reserved computing resources that are not allocated in the cluster is returned in increments of 16 ACUs.
   * *   If the value of GroupType is **Job**, the amount of reserved computing resources that are not allocated in the cluster is returned in increments of 8 ACUs.
   * 
   * @example
   * 512
   */
  maxComputeResource?: number;
  /**
   * @remarks
   * The minimum amount of reserved computing resources. Unit: ACUs.
   * 
   * *   If the value of GroupType is **Interactive**, 16 is returned.
   * *   If the value of GroupType is **Job**, 0 is returned.
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * The queried resource groups.
   */
  resourceGroups?: DescribeApsResourceGroupsResponseBodyDataResourceGroups[];
  /**
   * @remarks
   * The step size of resources. Unit: AnalyticDB compute units (ACUs).
   * 
   * *   If the value of GroupType is **Interactive**, 16 is returned.
   * *   If the value of GroupType is **Job**, 8 is returned.
   * 
   * @example
   * 8
   */
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
  /**
   * @remarks
   * The connection ID.
   * 
   * @example
   * 14356****
   */
  connId?: string;
  /**
   * @remarks
   * The name of the database on which the SQL statement was executed.
   * 
   * @example
   * adb_demo
   */
  DBName?: string;
  /**
   * @remarks
   * The start time of the execution of the SQL statement. The time is displayed in the ISO 8601 standard in the yyyy-MM-dd HH:mm:ss format. The time must be in UTC.
   * 
   * @example
   * 2022-08-12 10:10:00
   */
  executeTime?: string;
  /**
   * @remarks
   * The IP address and port number of the client that is used to execute the SQL statement.
   * 
   * @example
   * 100.104.XX.XX:43908
   */
  hostAddress?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 202106081752021720161662490345362390
   */
  processID?: string;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * SELECT * FROM adb_hdfs_import_source
   */
  SQLText?: string;
  /**
   * @remarks
   * The type of the SQL statement.
   * 
   * @example
   * SELECT
   */
  SQLType?: string;
  /**
   * @remarks
   * Indicates whether the SQL statement was successfully executed. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  succeed?: string;
  /**
   * @remarks
   * The amount of time that is consumed to execute the SQL statement. Unit: milliseconds.
   * 
   * @example
   * 216
   */
  totalTime?: string;
  /**
   * @remarks
   * The username that is used to execute the SQL statement.
   * 
   * @example
   * test
   */
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

export class DescribeBackupsResponseBodyItemsBackup extends $tea.Model {
  /**
   * @remarks
   * The end time of the backup.
   * 
   * @example
   * 2022-06-02T16:00Z
   */
  backupEndTime?: string;
  /**
   * @remarks
   * The backup set ID.
   * 
   * @example
   * 32732****
   */
  backupId?: string;
  /**
   * @remarks
   * The backup method. Snapshot is returned.
   * 
   * @example
   * Snapshot
   */
  backupMethod?: string;
  /**
   * @remarks
   * The size of the backup set. Unit: bytes.
   * 
   * @example
   * 2167808
   */
  backupSize?: number;
  /**
   * @remarks
   * The start time of the backup.
   * 
   * @example
   * 2022-06-01T16:00Z
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The backup type. Valid values:
   * 
   * *   **FullBackup**
   * *   **IncrementalBackup**
   * 
   * @example
   * FullBackup
   */
  backupType?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      backupEndTime: 'BackupEndTime',
      backupId: 'BackupId',
      backupMethod: 'BackupMethod',
      backupSize: 'BackupSize',
      backupStartTime: 'BackupStartTime',
      backupType: 'BackupType',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupEndTime: 'string',
      backupId: 'string',
      backupMethod: 'string',
      backupSize: 'number',
      backupStartTime: 'string',
      backupType: 'string',
      DBClusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupsResponseBodyItems extends $tea.Model {
  backup?: DescribeBackupsResponseBodyItemsBackup[];
  static names(): { [key: string]: string } {
    return {
      backup: 'Backup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backup: { 'type': 'array', 'itemType': DescribeBackupsResponseBodyItemsBackup },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAccessWhiteListResponseBodyItemsIPArray extends $tea.Model {
  /**
   * @remarks
   * The attribute of the whitelist.
   * 
   * > Whitelists with the **hidden** attribute are not displayed in the console. Those whitelists are used to access Data Transmission Service (DTS) and PolarDB.
   * 
   * @example
   * hidden
   */
  DBClusterIPArrayAttribute?: string;
  /**
   * @remarks
   * The name of the IP address whitelist.
   * 
   * Each cluster supports up to 50 IP address whitelists.
   * 
   * @example
   * test
   */
  DBClusterIPArrayName?: string;
  /**
   * @remarks
   * The IP addresses in the IP address whitelist. Up to 500 IP addresses can be returned. Multiple IP addresses are separated by commas (,).
   * 
   * @example
   * 127.0.xx.xx
   */
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

export class DescribeClusterNetInfoResponseBodyItemsAddressPortsPorts extends $tea.Model {
  /**
   * @remarks
   * The port.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The type of the protocol. Valid values:
   * 
   * *   **tcp**
   * *   **http**
   * *   **https**
   * *   **mysql**
   * 
   * @example
   * mysql
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'string',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNetInfoResponseBodyItemsAddressPorts extends $tea.Model {
  ports?: DescribeClusterNetInfoResponseBodyItemsAddressPortsPorts[];
  static names(): { [key: string]: string } {
    return {
      ports: 'ports',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ports: { 'type': 'array', 'itemType': DescribeClusterNetInfoResponseBodyItemsAddressPortsPorts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterNetInfoResponseBodyItemsAddress extends $tea.Model {
  /**
   * @remarks
   * The endpoint of the cluster.
   * 
   * *   If NetType is set to VPC, the VPC endpoint of the cluster is returned.
   * *   If NetType is set to Public, the public endpoint of the cluster is returned.
   * 
   * @example
   * amv-wz9dqvn0o7****.ads.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The prefix of the endpoint.
   * 
   * *   If NetType is set to VPC, the prefix of the VPC endpoint is returned.
   * *   If NetType is set to Public, the prefix of the public endpoint is returned.
   * 
   * @example
   * amv-wz9dqvn0o7****
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The IP address of the endpoint.
   * 
   * *   If NetType is set to VPC, the private IP address of the cluster is returned.
   * *   If NetType is set to Public, the public IP address of the cluster is returned.
   * 
   * @example
   * 192.168.xx.xx
   */
  IPAddress?: string;
  /**
   * @remarks
   * The network type of the cluster. Valid values:
   * 
   * *   **Public**: Internet.
   * *   **VPC**: VPC.
   * 
   * @example
   * VPC
   */
  netType?: string;
  /**
   * @remarks
   * The port number that is used to connect to the cluster. **3306** is returned.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The ports.
   */
  ports?: DescribeClusterNetInfoResponseBodyItemsAddressPorts;
  /**
   * @remarks
   * The VPC ID.
   * 
   * >  If NetType is set to Public, an empty string is returned.
   * 
   * @example
   * vpc-8vbhucmd5b****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the cluster.
   * 
   * >  If NetType is set to Public, an empty string is returned.
   * 
   * @example
   * vsw-bp1syh8vvw8yec****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      connectionStringPrefix: 'ConnectionStringPrefix',
      IPAddress: 'IPAddress',
      netType: 'NetType',
      port: 'Port',
      ports: 'Ports',
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
      ports: DescribeClusterNetInfoResponseBodyItemsAddressPorts,
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

export class DescribeClusterResourceDetailResponseBodyDataResourceGroupList extends $tea.Model {
  /**
   * @remarks
   * A reserved parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  clusterMode?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * 0
   */
  clusterSizeResource?: string;
  /**
   * @remarks
   * Indicates whether the preemptible instance feature is enabled for the resource group. After the preemptible instance feature is enabled, you are charged for resources at a lower unit price but the resources are probably released. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * The True value is returned only for job resource groups.
   * 
   * @example
   * true
   */
  enableSpot?: boolean;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * 0
   */
  maxClusterCount?: number;
  /**
   * @remarks
   * The maximum amount of reserved computing resources. Unit: ACUs.
   * 
   * @example
   * 128ACU
   */
  maxComputeResource?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * 0
   */
  minClusterCount?: number;
  /**
   * @remarks
   * The minimum amount of reserved computing resources. Unit: ACUs.
   * 
   * @example
   * 16ACU
   */
  minComputeResource?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * 17
   */
  poolId?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * testadb
   */
  poolName?: string;
  /**
   * @remarks
   * The type of the resource group.
   * 
   * @example
   * interactive
   */
  poolType?: string;
  /**
   * @remarks
   * The user of the resource group.
   * 
   * @example
   * user1
   */
  poolUsers?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * 0
   */
  runningClusterCount?: number;
  /**
   * @remarks
   * The status of the resource group. Valid values:
   * 
   * *   **running**
   * *   **deleting**
   * *   **scaling**
   * 
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusterMode: 'ClusterMode',
      clusterSizeResource: 'ClusterSizeResource',
      enableSpot: 'EnableSpot',
      maxClusterCount: 'MaxClusterCount',
      maxComputeResource: 'MaxComputeResource',
      minClusterCount: 'MinClusterCount',
      minComputeResource: 'MinComputeResource',
      poolId: 'PoolId',
      poolName: 'PoolName',
      poolType: 'PoolType',
      poolUsers: 'PoolUsers',
      runningClusterCount: 'RunningClusterCount',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterMode: 'string',
      clusterSizeResource: 'string',
      enableSpot: 'boolean',
      maxClusterCount: 'number',
      maxComputeResource: 'string',
      minClusterCount: 'number',
      minComputeResource: 'string',
      poolId: 'number',
      poolName: 'string',
      poolType: 'string',
      poolUsers: 'string',
      runningClusterCount: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResourceDetailResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The amount of reserved computing resources. Unit: AnalyticDB compute units (ACUs). Valid values: 0 to 4096. The value must be in increments of 16 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
   * 
   * @example
   * 16ACU
   */
  computeResource?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @example
   * amv-adbxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The amount of idle reserved computing resources. Unit: ACUs. Valid values: 0 to 4096. The value must be in increments of 16 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
   * 
   * @example
   * 0ACU
   */
  freeComputeResource?: string;
  /**
   * @remarks
   * The resource groups.
   */
  resourceGroupList?: DescribeClusterResourceDetailResponseBodyDataResourceGroupList[];
  /**
   * @remarks
   * The amount of reserved storage resources. Unit: ACUs. Valid values: 0 to 2064. The value must be in increments of 24 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
   * 
   * @example
   * 24ACU
   */
  storageResource?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'ComputeResource',
      DBClusterId: 'DBClusterId',
      freeComputeResource: 'FreeComputeResource',
      resourceGroupList: 'ResourceGroupList',
      storageResource: 'StorageResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: 'string',
      DBClusterId: 'string',
      freeComputeResource: 'string',
      resourceGroupList: { 'type': 'array', 'itemType': DescribeClusterResourceDetailResponseBodyDataResourceGroupList },
      storageResource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResourceUsageResponseBodyDataAcuInfo extends $tea.Model {
  /**
   * @remarks
   * The resource usage metric. Valid values:
   * 
   * *   `TotalAcuNumber`: the total number of ACUs.
   * *   `ReservedAcuNumber`: the number of ACUs for the reserved resources.
   * *   `ReservedAcuUsageNumber`: the number of ACUs for the reserved resources that are used.
   * 
   * @example
   * TotalAcuNumber
   */
  name?: string;
  /**
   * @remarks
   * The values of the metric at specific points in time.
   */
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

export class DescribeClusterResourceUsageResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The AnalyticDB compute unit (ACU) usage of the cluster.
   */
  acuInfo?: DescribeClusterResourceUsageResponseBodyDataAcuInfo[];
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @example
   * amv-uf6dj23rt5zo9s9d
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2023-03-23T02:31Z
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2023-03-14T03:42:15Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      acuInfo: 'AcuInfo',
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acuInfo: { 'type': 'array', 'itemType': DescribeClusterResourceUsageResponseBodyDataAcuInfo },
      DBClusterId: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColumnsResponseBodyItemsColumn extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the column is an auto-increment column. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  autoIncrementColumn?: boolean;
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * id
   */
  columnName?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * @example
   * amv-bp111m2cfrdl1****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Indicates whether the column is the primary key of the table. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  primaryKey?: boolean;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
  tableName?: string;
  /**
   * @remarks
   * The data type of the column.
   * 
   * @example
   * bigint
   */
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

export class DescribeComputeResourceUsageResponseBodyDataAcuInfo extends $tea.Model {
  /**
   * @remarks
   * The resource usage metric. Valid values:
   * 
   * *   `TotalAcuNumber`: the total number of ACUs.
   * *   `ReservedAcuNumber`: the number of ACUs for the reserved resources.
   * *   `ReservedAcuUsageNumber`: the number of ACUs for the reserved resources that are used.
   * 
   * @example
   * TotalAcuNumber
   */
  name?: string;
  /**
   * @remarks
   * The values of the metric at specific points in time.
   */
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

export class DescribeComputeResourceUsageResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The AnalyticDB compute unit (ACU) usage of the cluster.
   */
  acuInfo?: DescribeComputeResourceUsageResponseBodyDataAcuInfo[];
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-clusterxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2023-06-07T02:37:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * test
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The type of the resource group.
   * 
   * @example
   * interative
   */
  resourceGroupType?: string;
  /**
   * @remarks
   * The start time of the query. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-04-24T07:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      acuInfo: 'AcuInfo',
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      resourceGroupName: 'ResourceGroupName',
      resourceGroupType: 'ResourceGroupType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acuInfo: { 'type': 'array', 'itemType': DescribeComputeResourceUsageResponseBodyDataAcuInfo },
      DBClusterId: 'string',
      endTime: 'string',
      resourceGroupName: 'string',
      resourceGroupType: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterAttributeResponseBodyItemsDBClusterTagsTag extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * >  You can call the [TagResources](https://help.aliyun.com/document_detail/179253.html) operation to add tags to a cluster.
   * 
   * @example
   * tag1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test1
   */
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
  /**
   * @remarks
   * The cache size of the ClickHouse wide table engine. Unit: GB. If a value of -1 is returned, the ClickHouse wide table engine is disabled. If a value other than -1 is returned, this parameter indicates the disk cache size.
   * 
   * @example
   * 100
   */
  clickhouseEngineCacheSize?: number;
  /**
   * @remarks
   * Indicates whether the ClickHouse wide table engine is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  clickhouseEngineEnabled?: boolean;
  /**
   * @remarks
   * The billing method of the cluster. Valid values:
   * 
   * *   **ads**: pay-as-you-go.
   * *   **ads_pre**: subscription.
   * 
   * @example
   * ads_pre
   */
  commodityCode?: string;
  /**
   * @remarks
   * The specifications of reserved computing resources. Each ACU is approximately equal to 1 core and 4 GB memory. Computing resources are used to compute data. The increase in the computing resources can accelerate queries. You can scale computing resources based on your business requirements.
   * 
   * @example
   * 16ACU
   */
  computeResource?: string;
  /**
   * @remarks
   * The total amount of computing resources in the cluster. Each ACU is approximately equal to 1 core and 4 GB memory.
   * 
   * @example
   * 48ACU
   */
  computeResourceTotal?: string;
  /**
   * @remarks
   * The public endpoint that is used to connect to the cluster.
   * 
   * @example
   * amv-wz9509beptiz****.ads.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The time when the cluster was created. The time follows the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2022-07-01T09:50:18Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * adb_test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @example
   * amv-wz9509beptiz****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The network type of the cluster. **VPC** is returned.
   * 
   * @example
   * VPC
   */
  DBClusterNetworkType?: string;
  /**
   * @remarks
   * The status of the cluster. Valid values:
   * 
   * *   **Preparing**
   * *   **Creating**
   * *   **Running**
   * *   **Deleting**
   * *   **Restoring**
   * *   **ClassChanging**
   * *   **NetAddressCreating**
   * *   **NetAddressDeleting**
   * *   **NetAddressModifying**
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The type of the cluster. By default, **Common** is returned, which indicates a common cluster.
   * 
   * @example
   * Common
   */
  DBClusterType?: string;
  /**
   * @remarks
   * The engine version of the AnalyticDB for MySQL Data Lakehouse Edition cluster. **5.0** is returned.
   * 
   * @example
   * 5.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * The engine of the cluster. **AnalyticDB** is returned.
   * 
   * @example
   * AnalyticDB
   */
  engine?: string;
  /**
   * @remarks
   * The minor version of the cluster.
   * 
   * @example
   * 3.1.16
   */
  engineVersion?: string;
  /**
   * @remarks
   * The time when the cluster expires.
   * 
   * *   If the billing method of the cluster is subscription, the actual expiration time is returned.
   * *   If the billing method of the cluster is pay-as-you-go, null is returned.
   * 
   * @example
   * 2022-10-01T09:50:18Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the subscription cluster has expired. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > 
   * 
   * *   If the cluster has expired, the system locks or releases the cluster within a period of time. We recommend that you renew the expired cluster. For more information, see [Renewal policy](https://help.aliyun.com/document_detail/135248.html).
   * 
   * *   This parameter is not returned for pay-as-you-go clusters.
   * 
   * @example
   * false
   */
  expired?: string;
  /**
   * @remarks
   * The ID of the key that is used to encrypt disk data.
   * 
   * >  This parameter is returned only when disk encryption is enabled.
   * 
   * @example
   * e1935511-cf88-1123-a0f8-1be8d251****
   */
  kmsId?: string;
  /**
   * @remarks
   * The lock mode of the cluster. Valid values:
   * 
   * *   **Unlock**: The cluster is not locked.
   * *   **ManualLock**: The cluster is manually locked.
   * *   **LockByExpiration**: The cluster is automatically locked due to cluster expiration.
   * 
   * @example
   * ManualLock
   */
  lockMode?: string;
  /**
   * @remarks
   * The reason why the cluster is locked.
   * 
   * >  This parameter is returned only when the cluster was locked. **instance_expire** is returned.
   * 
   * @example
   * instance_expire
   */
  lockReason?: string;
  /**
   * @remarks
   * The maintenance window of the cluster. The time is displayed in the `HH:mmZ-HH:mmZ` format in UTC.
   * 
   * >  For more information about maintenance windows, see [Configure a maintenance window](https://help.aliyun.com/document_detail/122569.html).
   * 
   * @example
   * 04:00Z-05:00Z
   */
  maintainTime?: string;
  /**
   * @remarks
   * The mode of the cluster. By default, **flexible** is returned, which indicates that the cluster is in elastic mode.
   * 
   * @example
   * flexible
   */
  mode?: string;
  /**
   * @remarks
   * The billing method of the cluster. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go.
   * *   **Prepaid**: subscription.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The port number that is used to connect to the cluster.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  productForm?: string;
  /**
   * @remarks
   * The edition of the cluster. Valid values:
   * 
   * *   **BasicVersion**: Basic Edition.
   * *   **EnterpriseVersion**: Enterprise Edition.
   * 
   * @example
   * BasicVersion
   */
  productVersion?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The amount of remaining reserved computing resources that are available in the cluster. Each ACU is approximately equal to 1 core and 4 GB memory.
   * 
   * @example
   * 24ACU
   */
  reservedACU?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  reservedNodeCount?: number;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  reservedNodeSize?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The specifications of reserved storage resources. Each AnalyticDB compute unit (ACU) is approximately equal to 1 core and 4 GB memory. Storage resources are used to read and write data. The increase in the storage resources can improve the read and write performance of the cluster.
   * 
   * @example
   * 24ACU
   */
  storageResource?: string;
  /**
   * @remarks
   * The total amount of storage resources in the cluster. Each ACU is approximately equal to 1 core and 4 GB memory.
   * 
   * @example
   * 24ACU
   */
  storageResourceTotal?: string;
  /**
   * @remarks
   * Reserved parameters.
   */
  supportedFeatures?: { [key: string]: string };
  /**
   * @remarks
   * The tags that are added to the cluster.
   */
  tags?: DescribeDBClusterAttributeResponseBodyItemsDBClusterTags;
  /**
   * @remarks
   * Indicates whether Elastic Network Interface (ENI) is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  userENIStatus?: boolean;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID of the cluster.
   * 
   * @example
   * vpc-bp13h7uzhulpu****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the cluster.
   * 
   * @example
   * vsw-uf629gydd54ld****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the cluster.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clickhouseEngineCacheSize: 'ClickhouseEngineCacheSize',
      clickhouseEngineEnabled: 'ClickhouseEngineEnabled',
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
      kmsId: 'KmsId',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      maintainTime: 'MaintainTime',
      mode: 'Mode',
      payType: 'PayType',
      port: 'Port',
      productForm: 'ProductForm',
      productVersion: 'ProductVersion',
      regionId: 'RegionId',
      reservedACU: 'ReservedACU',
      reservedNodeCount: 'ReservedNodeCount',
      reservedNodeSize: 'ReservedNodeSize',
      resourceGroupId: 'ResourceGroupId',
      storageResource: 'StorageResource',
      storageResourceTotal: 'StorageResourceTotal',
      supportedFeatures: 'SupportedFeatures',
      tags: 'Tags',
      userENIStatus: 'UserENIStatus',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clickhouseEngineCacheSize: 'number',
      clickhouseEngineEnabled: 'boolean',
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
      kmsId: 'string',
      lockMode: 'string',
      lockReason: 'string',
      maintainTime: 'string',
      mode: 'string',
      payType: 'string',
      port: 'number',
      productForm: 'string',
      productVersion: 'string',
      regionId: 'string',
      reservedACU: 'string',
      reservedNodeCount: 'number',
      reservedNodeSize: 'string',
      resourceGroupId: 'string',
      storageResource: 'string',
      storageResourceTotal: 'string',
      supportedFeatures: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  /**
   * @remarks
   * The number of healthy access nodes.
   * 
   * @example
   * 2
   */
  activeCount?: number;
  /**
   * @remarks
   * The total number of access nodes.
   * 
   * @example
   * 2
   */
  expectedCount?: number;
  /**
   * @remarks
   * The number of risky nodes.
   * 
   * @example
   * 0
   */
  riskCount?: number;
  /**
   * @remarks
   * The health state of access nodes. Valid values:
   * 
   * *   **RISK**
   * *   **NORMAL**
   * *   **UNAVAILABLE**
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The number of unavailable access nodes.
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * The number of healthy access nodes.
   * 
   * @example
   * 2
   */
  activeCount?: number;
  /**
   * @remarks
   * The total number of compute nodes.
   * 
   * @example
   * 2
   */
  expectedCount?: number;
  /**
   * @remarks
   * The number of risky nodes.
   * 
   * @example
   * 0
   */
  riskCount?: number;
  /**
   * @remarks
   * The health state of compute node groups. Valid values:
   * 
   * *   **RISK**
   * *   **NORMAL**
   * *   **UNAVAILABLE**
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The number of unavailable access nodes.
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * The number of healthy storage node groups.
   * 
   * @example
   * 2
   */
  activeCount?: number;
  /**
   * @remarks
   * The total number of storage node groups.
   * 
   * @example
   * 2
   */
  expectedCount?: number;
  /**
   * @remarks
   * The number of risky storage node groups.
   * 
   * @example
   * 0
   */
  riskCount?: number;
  /**
   * @remarks
   * The health state of storage node groups. Valid values:
   * 
   * *   **RISK**
   * *   **NORMAL**
   * *   **UNAVAILABLE**
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The number of unavailable storage node groups.
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * *   CPU
   * 
   *     *   **AnalyticDB_CPU_Usage_Percentage**: the CPU utilization.
   * 
   *         *   AnalyticDB_Storage_CPU_Avg_Usage_Percentage: the average CPU utilization across storage nodes.
   *         *   AnalyticDB_Storage_CPU_Max_Usage_Percentage: the maximum CPU utilization across storage nodes.
   *         *   AnalyticDB_Compute_CPU_Max_Usage_Percentage: the average CPU utilization across compute nodes.
   *         *   AnalyticDB_Compute_CPU_Max_Usage_Percentage: the maximum CPU utilization across compute nodes.
   *         *   AnalyticDB_CS_CPU_Avg_Usage_Percentage: the average CPU utilization across access nodes.
   *         *   AnalyticDB_CS_CPU_Max_Usage_Percentage: the maximum CPU utilization across access nodes.
   * 
   * *   Connections
   * 
   *     *   **AnalyticDB_Instance_Connection_Count**: the number of connections to the cluster.
   * 
   *         *   AnalyticDB_Instance_Connection_Count: the number of connections to the cluster.
   * 
   * *   Writes
   * 
   *     *   **AnalyticDB_TPS**: the write TPS.
   * 
   *         *   tps: the sum of the insert_tps, update_tps, delete_tps, and load_tps values.
   *         *   insert_tps: the number of successful INSERT INTO VALUES operations per second.
   *         *   update_tps: the number of successful UPDATE operations per second.
   *         *   delete_tps: the number of successful DELETE operations per second.
   *         *   load_tps: the number of successful INSERT OVERWRITE operations per second.
   * 
   *     *   **AnalyticDB_InsertRT**: the write response time.
   * 
   *         *   AnalyticDB_Avg_InsertRT: the average amount of time consumed by writes.
   *         *   AnalyticDB_Max_InsertRT: the maximum amount of time consumed by a single write.
   * 
   *     *   **AnalyticDB_InsertBytes**: the write throughput.
   * 
   *         *   AnalyticDB_InsertBytes: the amount of written data.
   * 
   * *   Updates
   * 
   *     *   **AnalyticDB_UpdateRT**: the update response time.
   * 
   *         *   updateinto_avg_rt: the average amount of time consumed by updates.
   *         *   updateinto_max_rt: the maximum amount of time consumed by a single update.
   * 
   * *   Deletes
   * 
   *     *   **AnalyticDB_DeleteRT**: the delete response time.
   * 
   *         *   delete_avg_rt: the average amount of time consumed by deletes.
   *         *   delete_max_rt: the maximum amount of time consumed by a single delete.
   * 
   * *   Queries
   * 
   *     *   **AnalyticDB_QPS**: the QPS.
   * 
   *         *   AnalyticDB_QPS: the number of SELECT operations completed per second.
   *         *   AnalyticDB_ETL_QPS: the number of INSERT OVERWRITE operations completed per second.
   * 
   *     *   **AnalyticDB_QueryRT**: the query response time.
   * 
   *         *   AnalyticDB_Avg_QueryRT: the average amount of time consumed by queries.
   *         *   AnalyticDB_Max_QueryRT: the maximum amount of time consumed by a single query.
   *         *   etl_avg_rt: the average amount of time consumed by extract-transform-load (ETL) operations.
   *         *   etl_max_rt: the maximum amount of time consumed by a single ETL operation.
   * 
   *     *   **AnalyticDB_QueryWaitTime**: the query wait time.
   * 
   *         *   AnalyticDB_Avg_QueryWaitTime: the average wait time for SELECT and ETL operations.
   *         *   AnalyticDB_Max_QueryWaitTime: the maximum wait time for SELECT and ETL operations.
   * 
   *     *   AnalyticDB_QueryFailedRatio: the query failure rate.
   * 
   *         *   query_failed_ratio: the failure rate of SELECT and ETL operations.
   * 
   * *   Disks
   * 
   *     *   **AnalyticDB_IO_Throughput**: the disk I/O throughput.
   * 
   *         *   AnalyticDB_Storage_Read_IO_Throughput: the average read throughput across storage nodes.
   *         *   AnalyticDB_Storage_Write_IO_Throughput: the average write throughput across storage nodes.
   *         *   AnalyticDB_Compute_Read_IO_Throughput: the average read throughput across compute nodes.
   *         *   AnalyticDB_Compute_Write_IO_Throughput: the average write throughput across compute nodes.
   * 
   *     *   **AnalyticDB_Disk_IO_Avg_Usage_Percentage**: the average I/O usage.
   * 
   *         *   AnalyticDB_Disk_IO_Avg_Usage_Percentage: the average I/O usage across storage nodes.
   * 
   *     *   **AnalyticDB_Disk_IO_Avg_Waiting_Time**: the average I/O wait time.
   * 
   *         *   AnalyticDB_Disk_IO_Avg_Waiting_Time: the average I/O wait time of storage nodes.
   * 
   *     *   **AnalyticDB_IOPS**: the disk IOPS.
   * 
   *         *   AnalyticDB_Storage_Read_IOPS: the average read IOPS of storage nodes.
   *         *   AnalyticDB_Storage_Write_IOPS: the average write IOPS of storage nodes.
   *         *   AnalyticDB_Compute_Read_IOPS: the average read IOPS of compute nodes.
   *         *   AnalyticDB_Compute_Write_IOPS: the average write IOPS of compute nodes.
   * 
   *     *   **AnalyticDB_DiskUsage**: the disk storage that is used.
   * 
   *         *   disk_used_ratio: the average disk usage across nodes.
   *         *   worker_max_node_disk_used_ratio: the maximum disk usage across nodes.
   * 
   *     *   **AnalyticDB_Hot_Data_Usage**: the disk storage that is used by hot data.
   * 
   *         *   AnalyticDB_Hot_Data_Usage: the disk storage that is used by hot data.
   * 
   *     *   **AnalyticDB_Cold_Data_Usage**: the disk storage that is used by cold data.
   * 
   *         *   AnalyticDB_Cold_Data_Usage: the disk storage that is used by cold data.
   * 
   *     *   AnalyticDB_DiskUsedRatio: the node disk usage.
   * 
   *         *   disk_used_ratio: the average disk usage across nodes.
   *         *   worker_max_node_disk_used_ratio: the maximum disk usage across nodes.
   * 
   *     *   AnalyticDB_DiskUsedSize: the total data size of the cluster.
   * 
   *         *   user_used_disk_max: the maximum hot data size across nodes.
   *         *   user_used_disk_avg: the average hot data size across nodes.
   *         *   hot_disk_used: the hot data size.
   *         *   cold_disk_used: the cold data size.
   * 
   * *   Other
   * 
   *     *   **AnalyticDB_BuildTaskCount**: the number of BUILD jobs.
   * 
   *         *   max_build_task_count: the maximum number of running BUILD jobs across nodes.
   *         *   avg_build_task_count: the average number of running BUILD jobs across nodes.
   * 
   *     *   **AnalyticDB_ComputeMemoryUsedRatio**: the compute memory usage.
   * 
   *         *   max_worker_compute_memory_used_ratio: the maximum compute memory usage across storage nodes.
   *         *   avg_worker_compute_memory_used_ratio: the average compute memory usage across storage nodes.
   *         *   max_executor_compute_memory_used_ratio: the maximum compute memory usage across compute nodes.
   *         *   avg_executor_compute_memory_used_ratio: the average compute memory usage across compute nodes.
   * 
   *     *   AnalyticDB_UnavailableNodeCount: the number of unavailable nodes.
   * 
   *         *   worker_unavailable_node_count: the number of unavailable storage nodes.
   *         *   executor_unavailable_node_count: the number of unavailable compute nodes.
   * 
   * *   WLM
   * 
   *     *   AnalyticDB_WLM_ResubmitQueries_Count: the number of resubmitted WLM queries.
   * 
   *         *   AnalyticDB_WLM_ResubmitQueries_Count: the number of resubmitted WLM queries.
   * 
   *     *   AnalyticDB_WLM_SQA_AvgRt_MS: the average amount of time consumed by accelerated short WLM queries.
   * 
   *         *   AnalyticDB_WLM_SQA_AvgRt_MS: the average amount of time consumed by accelerated short WLM queries.
   * 
   *     *   AnalyticDB_WLM_SQA_Queries_Count: the number of accelerated short WLM queries.
   * 
   *         *   AnalyticDB_WLM_SQA_Queries_Count: the number of accelerated short WLM queries.
   * 
   *     *   AnalyticDB_WLM_TotalQueries_Count: the total number of WLM queries.
   * 
   *         *   AnalyticDB_WLM_TotalQueries_Count: the total number of WLM queries.
   * 
   * *   APS
   * 
   *     *   AnalyticDB_APS_BPS: the bytes per second (BPS) of APS provided by the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   *         *   APS_Read_BPS: the read BPS of APS.
   * 
   *     *   AnalyticDB_APS_CPU: the CPU utilization of APS provided by the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   *         *   APS_CPU_Avg_Usage_Percentage: the average CPU utilization of APS.
   *         *   APS_CPU_Max_Usage_Percentage: the maximum CPU utilization of APS.
   * 
   *     *   AnalyticDB_APS_Memory: the memory usage of APS provided by the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   *         *   APS_Memory_Avg_Usage_Percentage: the average memory usage of APS.
   *         *   APS_Memory_Max_Usage_Percentage: the maximum memory usage of APS.
   * 
   *     *   AnalyticDB_APS_RPS: the number of records per second of APS provided by the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   *         *   APS_Read_RPS: the number of read records per second of APS.
   * 
   *     *   AnalyticDB_APS_RT: the response time of APS provided by the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   *         *   APS_Read_Avg_RT: the average response time of APS.
   *         *   APS_Read_Max_RT: the maximum response time of APS.
   * 
   * *   *   *
   *     *   *
   *     *   *
   *     *   *
   *     *   *
   * 
   * @example
   * AnalyticDB_Storage_CPU_Avg_Usage_Percentage
   */
  name?: string;
  /**
   * @remarks
   * The tags that are added to the cluster.
   * 
   * @example
   * {instance_name: "am-***"}
   */
  tags?: string;
  /**
   * @remarks
   * The values of the performance metric at different points in time.
   */
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
  /**
   * @remarks
   * The name of the performance metric.
   * 
   * @example
   * AnalyticDB_CPU_Usage_Percentage
   */
  key?: string;
  /**
   * @remarks
   * The queried performance metric data.
   */
  series?: DescribeDBClusterPerformanceResponseBodyPerformancesSeries[];
  /**
   * @remarks
   * The unit of the performance metric.
   * 
   * @example
   * %
   */
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

export class DescribeDBClusterSpaceSummaryResponseBodyDataColdData extends $tea.Model {
  /**
   * @remarks
   * The data size of table records. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  dataSize?: number;
  /**
   * @remarks
   * The data size of regular indexes. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  indexSize?: number;
  /**
   * @remarks
   * The data size of other data. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  otherSize?: number;
  /**
   * @remarks
   * The data size of primary key indexes. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  primaryKeyIndexSize?: number;
  /**
   * @remarks
   * The cold data size. Unit: bytes.
   * 
   * >  Formula: Cold data size = Data size of table records + Data size of regular indexes + Data size of primary key indexes + Data size of other data.
   * 
   * @example
   * 4194304
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataSize: 'DataSize',
      indexSize: 'IndexSize',
      otherSize: 'OtherSize',
      primaryKeyIndexSize: 'PrimaryKeyIndexSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSize: 'number',
      indexSize: 'number',
      otherSize: 'number',
      primaryKeyIndexSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterSpaceSummaryResponseBodyDataDataGrowth extends $tea.Model {
  /**
   * @remarks
   * The data growth within the last day. Unit: bytes.
   * 
   * >  Formula: Data growth within the last day = Current data size - Data size one day ago.
   * 
   * @example
   * 1048576
   */
  dayGrowth?: number;
  /**
   * @remarks
   * The daily data growth within the last seven days. Unit: bytes.
   * 
   * >  Formula: Daily data growth within the last seven days = (Current data size - Data size seven days ago)/7.
   * 
   * @example
   * 1048576
   */
  weekGrowth?: number;
  static names(): { [key: string]: string } {
    return {
      dayGrowth: 'DayGrowth',
      weekGrowth: 'WeekGrowth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayGrowth: 'number',
      weekGrowth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterSpaceSummaryResponseBodyDataHotData extends $tea.Model {
  /**
   * @remarks
   * The data size of table records. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  dataSize?: number;
  /**
   * @remarks
   * The data size of regular indexes. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  indexSize?: number;
  /**
   * @remarks
   * The data size of other data. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  otherSize?: number;
  /**
   * @remarks
   * The data size of primary key indexes. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  primaryKeyIndexSize?: number;
  /**
   * @remarks
   * The hot data size. Unit: bytes.
   * 
   * >  Formula: Hot data size = Data size of table records + Data size of regular indexes + Data size of primary key indexes + Data size of other data.
   * 
   * @example
   * 4194304
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataSize: 'DataSize',
      indexSize: 'IndexSize',
      otherSize: 'OtherSize',
      primaryKeyIndexSize: 'PrimaryKeyIndexSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSize: 'number',
      indexSize: 'number',
      otherSize: 'number',
      primaryKeyIndexSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterSpaceSummaryResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The cold data.
   */
  coldData?: DescribeDBClusterSpaceSummaryResponseBodyDataColdData;
  /**
   * @remarks
   * The data growth.
   */
  dataGrowth?: DescribeDBClusterSpaceSummaryResponseBodyDataDataGrowth;
  /**
   * @remarks
   * The hot data.
   */
  hotData?: DescribeDBClusterSpaceSummaryResponseBodyDataHotData;
  /**
   * @remarks
   * The total data size. Unit: bytes.
   * 
   * >  Formula: Total data size = Hot data size+ Cold data size.
   * 
   * @example
   * 8388608
   */
  totalSize?: string;
  static names(): { [key: string]: string } {
    return {
      coldData: 'ColdData',
      dataGrowth: 'DataGrowth',
      hotData: 'HotData',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldData: DescribeDBClusterSpaceSummaryResponseBodyDataColdData,
      dataGrowth: DescribeDBClusterSpaceSummaryResponseBodyDataDataGrowth,
      hotData: DescribeDBClusterSpaceSummaryResponseBodyDataHotData,
      totalSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersRequestTag extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tag1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test1
   */
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
  /**
   * @remarks
   * The tag key.
   * 
   * >  You can call the [TagResources](https://help.aliyun.com/document_detail/179253.html) operation to add tags to a cluster.
   * 
   * @example
   * tag1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test1
   */
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

export class DescribeDBClustersResponseBodyItemsDBClusterTaskInfoStepListStepList extends $tea.Model {
  endTime?: string;
  startTime?: string;
  stepDesc?: string;
  stepName?: string;
  stepProgress?: string;
  stepStatus?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      stepDesc: 'StepDesc',
      stepName: 'StepName',
      stepProgress: 'StepProgress',
      stepStatus: 'StepStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      stepDesc: 'string',
      stepName: 'string',
      stepProgress: 'string',
      stepStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBodyItemsDBClusterTaskInfoStepList extends $tea.Model {
  stepList?: DescribeDBClustersResponseBodyItemsDBClusterTaskInfoStepListStepList[];
  static names(): { [key: string]: string } {
    return {
      stepList: 'StepList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stepList: { 'type': 'array', 'itemType': DescribeDBClustersResponseBodyItemsDBClusterTaskInfoStepListStepList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBodyItemsDBClusterTaskInfo extends $tea.Model {
  name?: string;
  progress?: string;
  status?: string;
  stepList?: DescribeDBClustersResponseBodyItemsDBClusterTaskInfoStepList;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      progress: 'Progress',
      status: 'Status',
      stepList: 'StepList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      progress: 'string',
      status: 'string',
      stepList: DescribeDBClustersResponseBodyItemsDBClusterTaskInfoStepList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBodyItemsDBCluster extends $tea.Model {
  category?: string;
  /**
   * @remarks
   * The billing method of the cluster. Valid values:
   * 
   * *   **ads**: pay-as-you-go.
   * *   **ads_pre**: subscription.
   * 
   * @example
   * ads_pre
   */
  commodityCode?: string;
  /**
   * @remarks
   * The specifications of reserved computing resources. Each ACU is approximately equal to 1 core and 4 GB memory. Computing resources are used to compute data. The increase in the computing resources can accelerate queries. You can scale computing resources based on your business requirements.
   * 
   * @example
   * 16ACU
   */
  computeResource?: string;
  /**
   * @remarks
   * The public endpoint that is used to connect to the cluster.
   * 
   * @example
   * amv-bp163885f8q21****.ads.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The time when the cluster was created. The time follows the ISO 8601 standard in the *yyyy-mm-ddThh:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2022-04-01T09:50:18Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * adb_test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @example
   * amv-bp163885f8q21****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The network type of the cluster. **VPC** is returned.
   * 
   * @example
   * VPC
   */
  DBClusterNetworkType?: string;
  /**
   * @remarks
   * The status of the cluster. Valid values:
   * 
   * *   **Preparing**
   * 
   * <!---->
   * 
   * *   **Creating**
   * *   **Running**
   * *   **Deleting**
   * 
   * <!---->
   * 
   * *   **Restoring**
   * 
   * <!---->
   * 
   * *   **ClassChanging**
   * *   **NetAddressCreating**
   * *   **NetAddressDeleting**
   * *   **NetAddressModifying**
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The type of the cluster. By default, **Common** is returned, which indicates a common cluster.
   * 
   * @example
   * Common
   */
  DBClusterType?: string;
  DBNodeClass?: string;
  DBNodeCount?: number;
  DBNodeStorage?: number;
  /**
   * @remarks
   * The engine version of the AnalyticDB for MySQL Data Lakehouse Edition cluster. **5.0** is returned.
   * 
   * @example
   * 5.0
   */
  DBVersion?: string;
  diskType?: string;
  dtsJobId?: string;
  elasticIOResource?: number;
  /**
   * @remarks
   * The engine of the cluster. **AnalyticDB** is returned.
   * 
   * @example
   * AnalyticDB
   */
  engine?: string;
  executorCount?: string;
  /**
   * @remarks
   * The time when the cluster expires. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * > 
   * 
   * *   If the billing method of the cluster is subscription, the actual expiration time is returned.
   * 
   * *   If the billing method of the cluster is pay-as-you-go, null is returned.
   * 
   * @example
   * 2022-07-01T09:50:18Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the subscription cluster has expired. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > 
   * 
   * *   If the cluster has expired, the system locks or releases the cluster within a period of time. We recommend that you renew the expired cluster. For more information, see [Renewal policy](https://help.aliyun.com/document_detail/135246.html).
   * 
   * *   This parameter is not returned for pay-as-you-go clusters.
   * 
   * @example
   * false
   */
  expired?: string;
  innerIp?: string;
  innerPort?: string;
  /**
   * @remarks
   * The lock status of the cluster. Valid values:
   * 
   * *   **Unlock**: The cluster is not locked.
   * *   **ManualLock**: The cluster is manually locked.
   * *   **LockByExpiration**: The cluster is automatically locked due to cluster expiration.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The reason why the cluster is locked.
   * 
   * >  This parameter is returned only when the cluster was locked. **instance_expire** is returned.
   * 
   * @example
   * instance_expire
   */
  lockReason?: string;
  /**
   * @remarks
   * The mode of the cluster. By default, **flexible** is returned, which indicates that the cluster is in elastic mode.
   * 
   * @example
   * flexible
   */
  mode?: string;
  /**
   * @remarks
   * The billing method of the cluster. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go.
   * *   **Prepaid**: subscription.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The port number that is used to connect to the cluster.
   * 
   * @example
   * 3306
   */
  port?: string;
  productForm?: string;
  productVersion?: string;
  rdsInstanceId?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remaining reserved computing resources that are available in the cluster. Each ACU is approximately equal to 1 core and 4 GB memory.
   * 
   * @example
   * 32ACU
   */
  reservedACU?: string;
  reservedNodeCount?: number;
  reservedNodeSize?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The specifications of reserved storage resources. Each AnalyticDB compute unit (ACU) is approximately equal to 1 core and 4 GB memory. Storage resources are used to read and write data. The increase in the storage resources can improve the read and write performance of the cluster.
   * 
   * @example
   * 24ACU
   */
  storageResource?: string;
  /**
   * @remarks
   * The tags that are added to the cluster.
   */
  tags?: DescribeDBClustersResponseBodyItemsDBClusterTags;
  taskInfo?: DescribeDBClustersResponseBodyItemsDBClusterTaskInfo;
  VPCCloudInstanceId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID of the cluster.
   * 
   * @example
   * vpc-bp13h7uzhulpuxvnp****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the cluster.
   * 
   * @example
   * vsw-bp1syh8vvw8yech7n****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the cluster.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      commodityCode: 'CommodityCode',
      computeResource: 'ComputeResource',
      connectionString: 'ConnectionString',
      createTime: 'CreateTime',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterStatus: 'DBClusterStatus',
      DBClusterType: 'DBClusterType',
      DBNodeClass: 'DBNodeClass',
      DBNodeCount: 'DBNodeCount',
      DBNodeStorage: 'DBNodeStorage',
      DBVersion: 'DBVersion',
      diskType: 'DiskType',
      dtsJobId: 'DtsJobId',
      elasticIOResource: 'ElasticIOResource',
      engine: 'Engine',
      executorCount: 'ExecutorCount',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      innerIp: 'InnerIp',
      innerPort: 'InnerPort',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      mode: 'Mode',
      payType: 'PayType',
      port: 'Port',
      productForm: 'ProductForm',
      productVersion: 'ProductVersion',
      rdsInstanceId: 'RdsInstanceId',
      regionId: 'RegionId',
      reservedACU: 'ReservedACU',
      reservedNodeCount: 'ReservedNodeCount',
      reservedNodeSize: 'ReservedNodeSize',
      resourceGroupId: 'ResourceGroupId',
      storageResource: 'StorageResource',
      tags: 'Tags',
      taskInfo: 'TaskInfo',
      VPCCloudInstanceId: 'VPCCloudInstanceId',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      commodityCode: 'string',
      computeResource: 'string',
      connectionString: 'string',
      createTime: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterNetworkType: 'string',
      DBClusterStatus: 'string',
      DBClusterType: 'string',
      DBNodeClass: 'string',
      DBNodeCount: 'number',
      DBNodeStorage: 'number',
      DBVersion: 'string',
      diskType: 'string',
      dtsJobId: 'string',
      elasticIOResource: 'number',
      engine: 'string',
      executorCount: 'string',
      expireTime: 'string',
      expired: 'string',
      innerIp: 'string',
      innerPort: 'string',
      lockMode: 'string',
      lockReason: 'string',
      mode: 'string',
      payType: 'string',
      port: 'string',
      productForm: 'string',
      productVersion: 'string',
      rdsInstanceId: 'string',
      regionId: 'string',
      reservedACU: 'string',
      reservedNodeCount: 'number',
      reservedNodeSize: 'string',
      resourceGroupId: 'string',
      storageResource: 'string',
      tags: DescribeDBClustersResponseBodyItemsDBClusterTags,
      taskInfo: DescribeDBClustersResponseBodyItemsDBClusterTaskInfo,
      VPCCloudInstanceId: 'string',
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

export class DescribeDBResourceGroupResponseBodyGroupsInfoRules extends $tea.Model {
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * user_default
   */
  groupName?: string;
  /**
   * @remarks
   * The execution duration of the query. Unit: milliseconds.
   * 
   * @example
   * 180000
   */
  queryTime?: string;
  /**
   * @remarks
   * The name of the destination resource group.
   * 
   * @example
   * job
   */
  targetGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      queryTime: 'QueryTime',
      targetGroupName: 'TargetGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      queryTime: 'string',
      targetGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBResourceGroupResponseBodyGroupsInfo extends $tea.Model {
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  clusterMode?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  clusterSizeResource?: string;
  /**
   * @remarks
   * The time when the resource group was created. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2022-08-29T03:34:30Z
   */
  createTime?: string;
  /**
   * @remarks
   * The minimum amount of elastic computing resources. Unit: ACUs.
   * 
   * @example
   * 16ACU
   */
  elasticMinComputeResource?: string;
  /**
   * @remarks
   * Indicates whether the preemptible instance feature is enabled for the resource group. After the preemptible instance feature is enabled, you are charged for resources at a lower unit price but the resources are probably released. Valid values:
   * 
   * *   **True**
   * *   **False**
   * 
   * The True value is returned only for job resource groups.
   * 
   * @example
   * True
   */
  enableSpot?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * test1
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * 
   * *   **Interactive**
   * *   **Job**
   * 
   * >  For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/428610.html).
   * 
   * @example
   * Job
   */
  groupType?: string;
  /**
   * @remarks
   * The Resource Access Management (RAM) user that is associated with the resource group.
   * 
   * @example
   * testb,testc
   */
  groupUsers?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  maxClusterCount?: number;
  /**
   * @remarks
   * The maximum amount of reserved computing resources. Unit: ACUs.
   * 
   * @example
   * 512ACU
   */
  maxComputeResource?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  minClusterCount?: number;
  /**
   * @remarks
   * The minimum amount of reserved computing resources. Unit: AnalyticDB compute units (ACUs).
   * 
   * @example
   * 0ACU
   */
  minComputeResource?: string;
  /**
   * @remarks
   * The job resubmission rules.
   */
  rules?: DescribeDBResourceGroupResponseBodyGroupsInfoRules[];
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * N/A
   */
  runningClusterCount?: number;
  /**
   * @remarks
   * The status of the resource group. Valid values:
   * 
   * *   **creating**: The resource group is being created.
   * *   **ok**: The resource group is created.
   * *   **pendingdelete**: The resource group is pending to be deleted.
   * 
   * @example
   * ok
   */
  status?: string;
  /**
   * @remarks
   * The time when the resource group was updated. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2022-08-31T03:34:30Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      clusterMode: 'ClusterMode',
      clusterSizeResource: 'ClusterSizeResource',
      createTime: 'CreateTime',
      elasticMinComputeResource: 'ElasticMinComputeResource',
      enableSpot: 'EnableSpot',
      groupName: 'GroupName',
      groupType: 'GroupType',
      groupUsers: 'GroupUsers',
      maxClusterCount: 'MaxClusterCount',
      maxComputeResource: 'MaxComputeResource',
      minClusterCount: 'MinClusterCount',
      minComputeResource: 'MinComputeResource',
      rules: 'Rules',
      runningClusterCount: 'RunningClusterCount',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterMode: 'string',
      clusterSizeResource: 'string',
      createTime: 'string',
      elasticMinComputeResource: 'string',
      enableSpot: 'string',
      groupName: 'string',
      groupType: 'string',
      groupUsers: 'string',
      maxClusterCount: 'number',
      maxComputeResource: 'string',
      minClusterCount: 'number',
      minComputeResource: 'string',
      rules: { 'type': 'array', 'itemType': DescribeDBResourceGroupResponseBodyGroupsInfoRules },
      runningClusterCount: 'number',
      status: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisRecordsResponseBodyQuerys extends $tea.Model {
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 59.82.XX.XX
   */
  clientIp?: string;
  /**
   * @remarks
   * The total execution duration. Unit: milliseconds.
   * 
   * >  This value is the cumulative value of the `QueuedTime`, `TotalPlanningTime`, and `ExecutionTime` parameters.
   * 
   * @example
   * 10
   */
  cost?: number;
  /**
   * @remarks
   * The name of the database on which the SQL statement is executed.
   * 
   * @example
   * adb_demo
   */
  database?: string;
  /**
   * @remarks
   * The number of rows written to the table by an extract-transform-load (ETL) job.
   * 
   * @example
   * 0
   */
  etlWriteRows?: number;
  /**
   * @remarks
   * The execution duration. Unit: milliseconds.
   * 
   * @example
   * 6
   */
  executionTime?: number;
  /**
   * @remarks
   * The amount of returned data. Unit: bytes.
   * 
   * @example
   * 9
   */
  outputDataSize?: number;
  /**
   * @remarks
   * The number of rows returned.
   * 
   * @example
   * 1
   */
  outputRows?: number;
  /**
   * @remarks
   * The peak memory. Unit: bytes.
   * 
   * @example
   * 16648
   */
  peakMemory?: number;
  /**
   * @remarks
   * The query ID.
   * 
   * @example
   * 2021093000414401000000023503151******
   */
  processId?: string;
  /**
   * @remarks
   * The amount of time that is consumed for queuing. Unit: milliseconds.
   * 
   * @example
   * 6
   */
  queueTime?: number;
  /**
   * @remarks
   * The IP address and port number of the AnalyticDB for MySQL frontend node on which the SQL statement is executed.
   * 
   * @example
   * 10.0.XX.XX:3004
   */
  rcHost?: string;
  /**
   * @remarks
   * The execution duration rank of operators that are used in the SQL statement.
   * 
   * >  This parameter is returned only for SQL statements whose `Status` parameter is `running`.
   * 
   * @example
   * 1
   */
  resourceCostRank?: number;
  /**
   * @remarks
   * The resource group to which the SQL statement belongs.
   * 
   * @example
   * user_default
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The queried SQL statement.
   * 
   * >  For performance considerations, an SQL statement cannot exceed 5,120 characters in length. Otherwise, the SQL statement is truncated. You can call the [DownloadDiagnosisRecords](https://help.aliyun.com/document_detail/308212.html) operation to download the information about SQL statements that meet a query condition for an AnalyticDB for MySQL cluster, including the complete SQL statements.
   * 
   * @example
   * SELECT count(*)\\nFROM nation
   */
  SQL?: string;
  /**
   * @remarks
   * Indicates whether the SQL statement is truncated. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  SQLTruncated?: boolean;
  /**
   * @remarks
   * The maximum length of the SQL statement. 5120 is returned. Unit: characters. SQL statements that exceed this limit are truncated.
   * 
   * @example
   * 5120
   */
  SQLTruncatedThreshold?: number;
  /**
   * @remarks
   * The number of rows scanned.
   * 
   * @example
   * 1
   */
  scanRows?: number;
  /**
   * @remarks
   * The amount of scanned data. Unit: bytes.
   * 
   * @example
   * 9
   */
  scanSize?: number;
  /**
   * @remarks
   * The execution start time of the SQL statement. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1632933704000
   */
  startTime?: number;
  /**
   * @remarks
   * The state of the SQL statement. Valid values:
   * 
   * *   **running**
   * *   **finished**
   * *   **failed**
   * 
   * @example
   * finished
   */
  status?: string;
  /**
   * @remarks
   * The amount of time that is consumed to generate an execution plan. Unit: milliseconds.
   * 
   * @example
   * 4
   */
  totalPlanningTime?: number;
  /**
   * @remarks
   * The total number of stages generated.
   * 
   * @example
   * 2
   */
  totalStages?: number;
  /**
   * @remarks
   * The username that is used to execute the SQL statements.
   * 
   * @example
   * test_user
   */
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
  /**
   * @remarks
   * The total amount of input data in the stage. Unit: bytes.
   * 
   * @example
   * 2341
   */
  inputDataSize?: number;
  /**
   * @remarks
   * The total number of input rows in the stage.
   * 
   * @example
   * 2341
   */
  inputRows?: number;
  /**
   * @remarks
   * The total amount of time consumed by all operators in the stage. Unit: milliseconds.
   * 
   * @example
   * 2341
   */
  operatorCost?: number;
  /**
   * @remarks
   * The total amount of output data in the stage. Unit: bytes.
   * 
   * @example
   * 2341
   */
  outputDataSize?: number;
  /**
   * @remarks
   * The total number of output rows in the stage.
   * 
   * @example
   * 2341
   */
  outputRows?: number;
  /**
   * @remarks
   * The total peak memory of the stage. Unit: bytes.
   * 
   * @example
   * 2341
   */
  peakMemory?: number;
  /**
   * @remarks
   * The execution progress of the stage.
   * 
   * @example
   * 0.3
   */
  progress?: number;
  /**
   * @remarks
   * The stage ID.
   * 
   * @example
   * Stage[26]
   */
  stageId?: string;
  /**
   * @remarks
   * The state of the stage.
   * 
   * @example
   * RUNNING
   */
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
  /**
   * @remarks
   * The download job ID.
   * 
   * @example
   * 636890
   */
  downloadId?: number;
  /**
   * @remarks
   * The error message returned if the download job failed.
   * 
   * @example
   * The query result is empty.
   */
  exceptionMsg?: string;
  /**
   * @remarks
   * The name of the downloaded file.
   * 
   * @example
   * 20210806094635-20210806095135
   */
  fileName?: string;
  /**
   * @remarks
   * The status of the download job. Valid values:
   * 
   * *   **running**
   * *   **finished**
   * *   **failed**
   * 
   * @example
   * finished
   */
  status?: string;
  /**
   * @remarks
   * The download URL of the file.
   */
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
  /**
   * @remarks
   * Indicates whether **Default Proportional Scaling for EIUs** is enabled. Valid values: true: Default Proportional Scaling for EIUs is enabled. If you set this parameter to true, storage resources are scaled along with computing resources. false: Default Proportional Scaling for EIUs is not enabled.
   * 
   * >  You can enable Default Proportional Scaling for EIUs for only a single scaling plan of a cluster. After you enable a scaling plan of the Default Proportional Scaling for EIUs type, you cannot enable scaling plans of other types.
   * 
   * @example
   * false
   */
  autoScale?: boolean;
  /**
   * @remarks
   * A CORN expression that indicates the scaling cycle and time for the scaling plan.
   * 
   * @example
   * 0 20 14 * * ?
   */
  cronExpression?: string;
  /**
   * @remarks
   * The name of the scaling plan.
   * 
   * @example
   * test
   */
  elasticPlanName?: string;
  /**
   * @remarks
   * Indicates whether the scaling plan is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The end time of the scaling plan.
   * 
   * >  The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2025-01-01T12:01:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the resource group used by the scaling plan.
   * 
   * @example
   * test
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The start time of the scaling plan.
   * 
   * >  The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-01-01T12:01:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The amount of elastic resources after scaling.
   * 
   * @example
   * 32ACU
   */
  targetSize?: string;
  /**
   * @remarks
   * The type of the scaling plan.
   * 
   * @example
   * EXECUTOR
   */
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
  /**
   * @remarks
   * The amount of elastic resources.
   * 
   * > 
   * 
   * *   If Type is set to EXECUTOR, ElasticAcu indicates the amount of elastic resources in the current resource group.
   * *   If Type is set to WORKER, ElasticAcu indicates the total amount of elastic storage resources in the current cluster.
   * 
   * @example
   * 16ACU
   */
  elasticAcu?: string;
  /**
   * @remarks
   * The name of the scaling plan.
   * 
   * @example
   * test
   */
  elasticPlanName?: string;
  /**
   * @remarks
   * The end time of the scaling plan job.
   * 
   * >  The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2022-01-01T12:01:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The number of compute nodes or storage replica sets.
   * 
   * > 
   * 
   * *   If Type is set to EXECUTOR, InstanceSize indicates the number of compute nodes in the cluster.
   * *   If Type is set to EXECUTOR, InstanceSize indicates the number of storage replica sets in the cluster.
   * 
   * @example
   * 1
   */
  instanceSize?: number;
  /**
   * @remarks
   * The amount of reserved resources.
   * 
   * > 
   * 
   * *   If Type is set to EXECUTOR, ReserveAcu indicates the amount of reserved resources in the current resource group.
   * *   If Type is set to WORKER, ReserveAcu indicates the total amount of reserved storage resources in the current cluster.
   * 
   * @example
   * 16ACU
   */
  reserveAcu?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * test
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The start time of the scaling plan job.
   * 
   * >  The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2022-01-01T11:01:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the scaling plan job. Valid values:
   * 
   * *   RUNNING
   * *   SUCCESSFUL
   * *   FAILED
   * 
   * @example
   * SUCCESSFUL
   */
  status?: string;
  /**
   * @remarks
   * The desired specifications of elastic resources after scaling.
   * 
   * @example
   * 32ACU
   */
  targetSize?: string;
  /**
   * @remarks
   * The total amount of resources.
   * 
   * > 
   * 
   * *   If Type is set to EXECUTOR, TotalAcu indicates the total amount of computing resources in the current resource group.
   * *   If Type is set to WORKER, TotalAcu indicates the total amount of storage resources in the cluster.
   * 
   * @example
   * 32ACU
   */
  totalAcu?: string;
  /**
   * @remarks
   * The type of the scaling plan job. Valid values:
   * 
   * *   EXECUTOR: the interactive resource group type, which indicates the computing resource type.
   * *   WORKER: the EIU type.
   * 
   * @example
   * EXECUTOR
   */
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
  /**
   * @remarks
   * Indicates whether **Proportional Default Scaling for EIUs** is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  autoScale?: boolean;
  /**
   * @remarks
   * The name of the scaling plan.
   * 
   * @example
   * test
   */
  elasticPlanName?: string;
  /**
   * @remarks
   * Indicates whether the scaling plan was immediately enabled after the plan is created. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The time when the next scheduling is performed.
   * 
   * > The time is in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2022-01-01T12:01:00Z
   */
  nextScheduleTime?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * > You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/459446.html) operation to query the name of a resource group within a cluster.
   * 
   * @example
   * test
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The amount of elastic resources after scaling.
   * 
   * @example
   * 32ACU
   */
  targetSize?: string;
  /**
   * @remarks
   * The type of the scaling plan. Valid values:
   * 
   * *   EXECUTOR: interactive resource group.
   * *   WORKER: EIU.
   * 
   * @example
   * EXECUTOR
   */
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
  /**
   * @remarks
   * The description of the permission.
   */
  description?: string;
  /**
   * @remarks
   * The name of the permission.
   * 
   * @example
   * select
   */
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
  /**
   * @remarks
   * The description of the permission level.
   * 
   * This parameter is required.
   */
  description?: string;
  /**
   * @remarks
   * The queried permissions.
   * 
   * This parameter is required.
   */
  privileges?: DescribeEnabledPrivilegesResponseBodyDataPrivileges[];
  /**
   * @remarks
   * The permission level.
   * 
   * This parameter is required.
   * 
   * @example
   * Global
   */
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

export class DescribeExcessivePrimaryKeysResponseBodyDetectionItems extends $tea.Model {
  /**
   * @remarks
   * The detection result.
   */
  message?: string;
  /**
   * @remarks
   * The name of the detection item.
   */
  name?: string;
  /**
   * @remarks
   * The severity level of the detection result.
   * 
   * @example
   * NORMAL
   * WARNNING
   * CRITICAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      name: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExcessivePrimaryKeysResponseBodyTables extends $tea.Model {
  /**
   * @remarks
   * The total number of columns.
   * 
   * @example
   * 21
   */
  columnCount?: number;
  /**
   * @remarks
   * The queried primary key fields.
   * 
   * @example
   * 2
   */
  primaryKeyColumns?: string;
  /**
   * @remarks
   * The number of primary key fields.
   * 
   * @example
   * 3
   */
  primaryKeyCount?: number;
  /**
   * @remarks
   * The data size of primary key indexes. Unit: bytes.
   * 
   * @example
   * 222
   */
  primaryKeyIndexSize?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  /**
   * @remarks
   * The percentage of the table size. Unit: %.
   * 
   * >  Formula: Table storage percentage = Total data size of a table/Total data size of the cluster × 100%.
   * 
   * @example
   * 23
   */
  spaceRatio?: number;
  /**
   * @remarks
   * The name of the table
   * 
   * @example
   * test
   */
  tableName?: string;
  /**
   * @remarks
   * The cold data size. Unit: bytes.
   * 
   * >  Formula: Cold data size = Data size of table records + Data size of regular indexes + Data size of primary key indexes + Data size of other data.
   * 
   * @example
   * 4
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      columnCount: 'ColumnCount',
      primaryKeyColumns: 'PrimaryKeyColumns',
      primaryKeyCount: 'PrimaryKeyCount',
      primaryKeyIndexSize: 'PrimaryKeyIndexSize',
      schemaName: 'SchemaName',
      spaceRatio: 'SpaceRatio',
      tableName: 'TableName',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnCount: 'number',
      primaryKeyColumns: 'string',
      primaryKeyCount: 'number',
      primaryKeyIndexSize: 'number',
      schemaName: 'string',
      spaceRatio: 'number',
      tableName: 'string',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResourceUsageResponseBodyDataJobAcuUsageAcuUsageDetail extends $tea.Model {
  /**
   * @remarks
   * The number of ACUs for the elastic resources.
   * 
   * @example
   * 16ACU
   */
  elasticAcuNumber?: number;
  /**
   * @remarks
   * The number of ACUs for the reserved resources.
   * 
   * @example
   * 16ACU
   */
  reservedAcuNumber?: number;
  /**
   * @example
   * 16ACU
   */
  spotAcuNumber?: number;
  /**
   * @example
   * 0.9
   */
  spotAcuPercentage?: number;
  /**
   * @remarks
   * The total number of ACUs.
   * 
   * @example
   * 32ACU
   */
  totalAcuNumber?: number;
  static names(): { [key: string]: string } {
    return {
      elasticAcuNumber: 'ElasticAcuNumber',
      reservedAcuNumber: 'ReservedAcuNumber',
      spotAcuNumber: 'SpotAcuNumber',
      spotAcuPercentage: 'SpotAcuPercentage',
      totalAcuNumber: 'TotalAcuNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticAcuNumber: 'number',
      reservedAcuNumber: 'number',
      spotAcuNumber: 'number',
      spotAcuPercentage: 'number',
      totalAcuNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResourceUsageResponseBodyDataJobAcuUsage extends $tea.Model {
  /**
   * @remarks
   * The ACU usage.
   */
  acuUsageDetail?: DescribeJobResourceUsageResponseBodyDataJobAcuUsageAcuUsageDetail;
  /**
   * @remarks
   * The end time of the job. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-05-23T16:00:00Z
   */
  jobEndTime?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 1592
   */
  jobId?: string;
  /**
   * @remarks
   * The start time of the job. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-05-22T16:00:00Z
   */
  jobStartTime?: string;
  /**
   * @remarks
   * The name of the job resource group.
   * 
   * @example
   * job_default
   */
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      acuUsageDetail: 'AcuUsageDetail',
      jobEndTime: 'JobEndTime',
      jobId: 'JobId',
      jobStartTime: 'JobStartTime',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acuUsageDetail: DescribeJobResourceUsageResponseBodyDataJobAcuUsageAcuUsageDetail,
      jobEndTime: 'string',
      jobId: 'string',
      jobStartTime: 'string',
      resourceGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResourceUsageResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * @example
   * amv-clusterxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-05-23T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The AnalyticDB compute unit (ACU) usage of the job resource group.
   */
  jobAcuUsage?: DescribeJobResourceUsageResponseBodyDataJobAcuUsage[];
  /**
   * @remarks
   * The start time of the query. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-05-22T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      jobAcuUsage: 'JobAcuUsage',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      jobAcuUsage: { 'type': 'array', 'itemType': DescribeJobResourceUsageResponseBodyDataJobAcuUsage },
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePatternPerformanceResponseBodyPerformancesSeries extends $tea.Model {
  /**
   * @remarks
   * The name of the performance metric value. Valid values:
   * 
   * *   If the value of `Key` is `AnalyticDB_PatternQueryCount`, `pattern_query_count` is returned, which indicates the number of executions of the SQL statements in association with the SQL pattern.
   * 
   * *   If the value of `Key` is `AnalyticDB_PatternQueryTime`, the following values are returned:
   * 
   *     *   `average_query_time`, which indicates the average total amount of time consumed by the SQL statements in association with the SQL pattern.
   *     *   `max_query_time`, which indicates the maximum total amount of time consumed by the SQL statements in association with the SQL pattern.
   * 
   * *   If the value of `Key` is `AnalyticDB_PatternExecutionTime`, the following values are returned:
   * 
   *     *   `average_execution_time`, which indicates the average execution duration of the SQL statements in association with the SQL pattern.
   *     *   `max_execution_time`, which indicates the maximum execution duration of the SQL statements in association with the SQL pattern.
   * 
   * *   If the value of `Key` is `AnalyticDB_PatternPeakMemory`, the following values are returned:
   * 
   *     *   `average_peak_memory`, which indicates the average peak memory usage of the SQL statements in association with the SQL pattern.
   *     *   `max_peak_memory`, which indicates the maximum peak memory usage of the SQL statements in association with the SQL pattern.
   * 
   * *   If the value of `Key` is `AnalyticDB_PatternScanSize`, the following values are returned:
   * 
   *     *   `average_scan_size`, which indicates the average amount of data scanned by the SQL statements in association with the SQL pattern.
   *     *   `max_scan_size`, which indicates the maximum amount of data scanned by the SQL statements in association with the SQL pattern.
   * 
   * @example
   * max_query_time
   */
  name?: string;
  /**
   * @remarks
   * The values of the performance metric.
   */
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
  /**
   * @remarks
   * The queried performance metric. Valid values:
   * 
   * *   **AnalyticDB_PatternQueryCount**: the total number of queries executed in association with the SQL pattern.
   * *   **AnalyticDB_PatternQueryTime**: the total amount of time consumed by the queries executed in association with the SQL pattern.
   * *   **AnalyticDB_PatternExecutionTime**: the execution duration of the queries executed in association with the SQL pattern.
   * *   **AnalyticDB_PatternPeakMemory**: the peak memory usage of the queries executed in association with the SQL pattern.
   * *   **AnalyticDB_PatternScanSize**: the amount of data scanned in the queries executed in association with the SQL pattern.
   * 
   * @example
   * AnalyticDB_PatternExecutionTime
   */
  key?: string;
  /**
   * @remarks
   * The values of the performance metrics.
   */
  series?: DescribePatternPerformanceResponseBodyPerformancesSeries[];
  /**
   * @remarks
   * The unit of the performance metric. Valid values:
   * 
   * *   If the performance metric is related to the query time (the value of `Key` is `AnalyticDB_PatternQueryTime` or `AnalyticDB_PatternExecutionTime`), **ms** is returned.
   * *   If the performance metric is related to the peak memory usage (the value of `Key` is `AnalyticDB_PatternPeakMemory`), **MB** is returned.
   * *   If the performance metric is related to the amount of data scanned (the value of `Key` is `AnalyticDB_PatternScanSize`), **MB** is returned.
   * *   If the performance metric is related to the number of queries (the value of `Key` is `AnalyticDB_PatternQueryCount`), null is returned.
   * 
   * @example
   * ms
   */
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

export class DescribePerformanceViewAttributeResponseBodyViewDetailCategoriesKeys extends $tea.Model {
  /**
   * @example
   * AnalyticDB_CPU
   */
  keyName?: string;
  /**
   * @example
   * true
   */
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      keyName: 'KeyName',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyName: 'string',
      selected: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePerformanceViewAttributeResponseBodyViewDetailCategories extends $tea.Model {
  /**
   * @example
   * Node
   */
  category?: string;
  keys?: DescribePerformanceViewAttributeResponseBodyViewDetailCategoriesKeys[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      keys: { 'type': 'array', 'itemType': DescribePerformanceViewAttributeResponseBodyViewDetailCategoriesKeys },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePerformanceViewAttributeResponseBodyViewDetail extends $tea.Model {
  categories?: DescribePerformanceViewAttributeResponseBodyViewDetailCategories[];
  /**
   * @example
   * true
   */
  chartLinked?: boolean;
  /**
   * @example
   * 2
   */
  chartsPerLine?: number;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      chartLinked: 'ChartLinked',
      chartsPerLine: 'ChartsPerLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': DescribePerformanceViewAttributeResponseBodyViewDetailCategories },
      chartLinked: 'boolean',
      chartsPerLine: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePerformanceViewsResponseBodyViews extends $tea.Model {
  /**
   * @example
   * 2024-06-18T07:06:53.000+00:00
   */
  createTime?: string;
  /**
   * @example
   * 2024-06-18T07:07:32.000+00:00
   */
  updateTime?: string;
  viewName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      viewName: 'ViewName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      updateTime: 'string',
      viewName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegionZonesZone extends $tea.Model {
  /**
   * @remarks
   * The name of the zone.
   * 
   * @example
   * Hangzhou Zone H
   */
  localName?: string;
  /**
   * @remarks
   * Indicates whether Virtual Private Cloud (VPC) is supported in the zone. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  vpcEnabled?: boolean;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
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
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * China (Hangzhou)
   */
  localName?: string;
  /**
   * @remarks
   * The endpoint of the region.
   * 
   * @example
   * adb.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The queried zones.
   */
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
  /**
   * @remarks
   * The IP address of the SQL client that commits the SQL pattern.
   * 
   * @example
   * 192.168.xx.xx
   */
  accessIp?: string;
  /**
   * @remarks
   * The average execution duration of the SQL pattern within the query time range. Unit: milliseconds.
   * 
   * @example
   * 234.78
   */
  averageExecutionTime?: number;
  averageOperatorCost?: number;
  /**
   * @remarks
   * The average peak memory usage of the SQL pattern within the query time range. Unit: bytes.
   * 
   * @example
   * 234.22
   */
  averagePeakMemory?: number;
  /**
   * @remarks
   * The average total amount of time consumed by the SQL pattern within the query time range. Unit: milliseconds.
   * 
   * @example
   * 4
   */
  averageQueryTime?: number;
  averageScanCost?: number;
  /**
   * @remarks
   * The average amount of data scanned based on the SQL pattern within the query time range. Unit: bytes.
   * 
   * @example
   * 234149.23
   */
  averageScanSize?: number;
  /**
   * @remarks
   * Indicates whether the execution of the SQL pattern can be intercepted. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  Only SELECT and INSERT statements can be intercepted.
   * 
   * @example
   * true
   */
  blockable?: boolean;
  /**
   * @remarks
   * The number of failed queries executed in association with the SQL pattern within the query time range.
   * 
   * @example
   * 18
   */
  failedCount?: number;
  /**
   * @remarks
   * The maximum execution duration of the SQL pattern within the query time range. Unit: milliseconds.
   * 
   * @example
   * 2142
   */
  maxExecutionTime?: number;
  maxOperatorCost?: number;
  /**
   * @remarks
   * The maximum peak memory usage of the SQL pattern within the query time range. Unit: bytes.
   * 
   * @example
   * 234149
   */
  maxPeakMemory?: number;
  /**
   * @remarks
   * The maximum total amount of time consumed by the SQL pattern within the query time range. Unit: milliseconds.
   * 
   * @example
   * 2341
   */
  maxQueryTime?: number;
  maxScanCost?: number;
  /**
   * @remarks
   * The maximum amount of data scanned based on the SQL pattern within the query time range. Unit: bytes.
   * 
   * @example
   * 32212254
   */
  maxScanSize?: number;
  operatorCostPercentage?: number;
  operatorCostSum?: number;
  /**
   * @remarks
   * The earliest commit time of the SQL pattern within the query time range.
   * 
   * @example
   * 2022-09-06 05:06:00
   */
  patternCreationTime?: string;
  /**
   * @remarks
   * The ID of the SQL pattern.
   * 
   * @example
   * 5575924945138******
   */
  patternId?: string;
  peakMemoryPercentage?: number;
  peakMemorySum?: number;
  /**
   * @remarks
   * The number of queries executed in association with the SQL pattern within the query time range.
   * 
   * @example
   * 345
   */
  queryCount?: number;
  queryTimePercentage?: number;
  queryTimeSum?: number;
  /**
   * @remarks
   * The statement of the SQL pattern.
   * 
   * @example
   * SELECT * FROM KEPLER_META_NODE_STATIC_INFO WHERE elastic_node = ? OR (elastic_node = ? AND enable = ?)
   */
  SQLPattern?: string;
  scanCostPercentage?: number;
  scanCostSum?: number;
  scanSizePercentage?: number;
  scanSizeSum?: number;
  /**
   * @remarks
   * The tables scanned based on the SQL pattern.
   * 
   * @example
   * tpch.orders
   */
  tables?: string;
  /**
   * @remarks
   * The name of the database account that is used to commit the SQL pattern.
   * 
   * @example
   * test
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      accessIp: 'AccessIp',
      averageExecutionTime: 'AverageExecutionTime',
      averageOperatorCost: 'AverageOperatorCost',
      averagePeakMemory: 'AveragePeakMemory',
      averageQueryTime: 'AverageQueryTime',
      averageScanCost: 'AverageScanCost',
      averageScanSize: 'AverageScanSize',
      blockable: 'Blockable',
      failedCount: 'FailedCount',
      maxExecutionTime: 'MaxExecutionTime',
      maxOperatorCost: 'MaxOperatorCost',
      maxPeakMemory: 'MaxPeakMemory',
      maxQueryTime: 'MaxQueryTime',
      maxScanCost: 'MaxScanCost',
      maxScanSize: 'MaxScanSize',
      operatorCostPercentage: 'OperatorCostPercentage',
      operatorCostSum: 'OperatorCostSum',
      patternCreationTime: 'PatternCreationTime',
      patternId: 'PatternId',
      peakMemoryPercentage: 'PeakMemoryPercentage',
      peakMemorySum: 'PeakMemorySum',
      queryCount: 'QueryCount',
      queryTimePercentage: 'QueryTimePercentage',
      queryTimeSum: 'QueryTimeSum',
      SQLPattern: 'SQLPattern',
      scanCostPercentage: 'ScanCostPercentage',
      scanCostSum: 'ScanCostSum',
      scanSizePercentage: 'ScanSizePercentage',
      scanSizeSum: 'ScanSizeSum',
      tables: 'Tables',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessIp: 'string',
      averageExecutionTime: 'number',
      averageOperatorCost: 'number',
      averagePeakMemory: 'number',
      averageQueryTime: 'number',
      averageScanCost: 'number',
      averageScanSize: 'number',
      blockable: 'boolean',
      failedCount: 'number',
      maxExecutionTime: 'number',
      maxOperatorCost: 'number',
      maxPeakMemory: 'number',
      maxQueryTime: 'number',
      maxScanCost: 'number',
      maxScanSize: 'number',
      operatorCostPercentage: 'number',
      operatorCostSum: 'number',
      patternCreationTime: 'string',
      patternId: 'string',
      peakMemoryPercentage: 'number',
      peakMemorySum: 'number',
      queryCount: 'number',
      queryTimePercentage: 'number',
      queryTimeSum: 'number',
      SQLPattern: 'string',
      scanCostPercentage: 'number',
      scanCostSum: 'number',
      scanSizePercentage: 'number',
      scanSizeSum: 'number',
      tables: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSchemasResponseBodyItemsSchema extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
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
  /**
   * @remarks
   * The IP address of the client.
   * 
   * >  This parameter is returned only when **Type** is set to **accessip**.
   * 
   * @example
   * 100.104.xx.xx
   */
  accessIP?: string;
  /**
   * @remarks
   * The average execution duration of the SQL pattern within the query time range. Unit: milliseconds.
   * 
   * @example
   * 1.0625
   */
  avgCpuTime?: string;
  /**
   * @remarks
   * The average peak memory usage of the SQL pattern within the query time range. Unit: KB.
   * 
   * @example
   * 240048
   */
  avgPeakMemory?: string;
  /**
   * @remarks
   * The average amount of data scanned based on the SQL pattern within the query time range. Unit: KB.
   * 
   * @example
   * 244
   */
  avgScanSize?: string;
  /**
   * @remarks
   * The average number of scanned rows.
   * 
   * @example
   * 2
   */
  avgStageCount?: string;
  /**
   * @remarks
   * The average number of tasks.
   * 
   * @example
   * 2
   */
  avgTaskCount?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @example
   * amv-bp1ej1nq9n6****
   */
  instanceName?: string;
  /**
   * @remarks
   * The maximum execution duration of the SQL pattern within the query time range. Unit: milliseconds.
   * 
   * @example
   * 17
   */
  maxCpuTime?: string;
  /**
   * @remarks
   * The maximum peak memory usage of the SQL pattern within the query time range. Unit: KB.
   * 
   * @example
   * 480096
   */
  maxPeakMemory?: string;
  /**
   * @remarks
   * The maximum amount of data scanned based on the SQL pattern within the query time range. Unit: KB.
   * 
   * @example
   * 1024
   */
  maxScanSize?: string;
  /**
   * @remarks
   * The maximum number of stages.
   * 
   * @example
   * 2
   */
  maxStageCount?: string;
  /**
   * @remarks
   * The maximum number of tasks.
   * 
   * @example
   * 2
   */
  maxTaskCount?: string;
  /**
   * @remarks
   * The SQL pattern.
   * 
   * @example
   * SELECT table_name, table_schema AS schema_name, create_time, create_time AS last_ddl_time, table_comment AS description , ceil((data_length + index_length) / ? / ?) AS store_capacity , data_length AS data_bytes, index_length AS index_bytes, table_collation AS collation, auto_increment, table_rows AS num_rows , engine FROM information_schema.tables WHERE table_type != ? AND table_schema = ? AND table_name IN (?) ORDER BY 1
   */
  pattern?: string;
  /**
   * @remarks
   * The number of queries performed in association with the SQL pattern within the query time range.
   * 
   * @example
   * 16
   */
  queryCount?: string;
  /**
   * @remarks
   * The start date of the query.
   * 
   * @example
   * 2022-08-30
   */
  reportDate?: string;
  /**
   * @remarks
   * The username.
   * 
   * >  This parameter is returned only when **Type** is left empty or set to **user**.
   * 
   * @example
   * test_acc
   */
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

export class DescribeStorageResourceUsageResponseBodyDataAcuInfo extends $tea.Model {
  /**
   * @remarks
   * The resource usage metric. Valid values:
   * 
   * *   `TotalAcuNumber`: the total number of ACUs.
   * *   `ReservedAcuNumber`: the number of ACUs for the reserved resources.
   * 
   * @example
   * TotalAcuNumber
   */
  name?: string;
  /**
   * @remarks
   * The values of the metric at specific points in time.
   */
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

export class DescribeStorageResourceUsageResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The AnalyticDB compute unit (ACU) usage of the cluster.
   */
  acuInfo?: DescribeStorageResourceUsageResponseBodyDataAcuInfo[];
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @example
   * amv-bp1bg858bo8c****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-08-23T01:06:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2022-08-22T01:06:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      acuInfo: 'AcuInfo',
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acuInfo: { 'type': 'array', 'itemType': DescribeStorageResourceUsageResponseBodyDataAcuInfo },
      DBClusterId: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableAccessCountResponseBodyItems extends $tea.Model {
  /**
   * @remarks
   * The number of accesses to the table.
   * 
   * @example
   * 6
   */
  accessCount?: string;
  /**
   * @remarks
   * The ID of the cluster to which the table belongs.
   * 
   * @example
   * amv-2ze627uzpkh8a8****
   */
  instanceName?: string;
  /**
   * @remarks
   * The date when the table was accessed.
   * 
   * @example
   * 2022-09-26
   */
  reportDate?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * CUSTOMER
   */
  tableName?: string;
  /**
   * @remarks
   * The database to which the table belongs.
   * 
   * @example
   * tpch
   */
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
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @example
   * amv-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
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
  /**
   * @remarks
   * The queried database.
   */
  databaseSummaryModels?: DatabaseSummaryModel[];
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   30
   * *   50
   * *   100
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * s202204132018hzprec1ac61a000****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @example
   * amv-clusterxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The content of the log.
   * 
   * @example
   * 22/04/22 15:30:49 INFO Utils: Start the dump task because s202207151211hz****-0001 app end, the interval is 238141ms;22/04/22 15:30:49 INFO AbstractConnector: Stopped Spark@5e774d9d{HTTP/1.1, (http/1.1)}{0.0.0.0:4040}
   */
  logContent?: string;
  /**
   * @remarks
   * The number of log entries. A value of 0 indicates that no valid logs are returned.
   * 
   * @example
   * 775946240
   */
  logSize?: number;
  /**
   * @remarks
   * The alert message returned for the request, such as task execution failure or insufficient resources. If no alert occurs, null is returned.
   * 
   * @example
   * WARNING: log file maybe deleted, please check oss path: oss://TestBucketName/applog/
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      DBClusterId: 'DBClusterId',
      logContent: 'LogContent',
      logSize: 'LogSize',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      DBClusterId: 'string',
      logContent: 'string',
      logSize: 'number',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppLogResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * @example
   * amv-clusterxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The content of the log.
   * 
   * @example
   * 22/04/22 15:30:49 INFO Utils: Start the dump task because s202206061441hz22a35ab000****-0001 app end, the interval is 238141ms;22/04/22 15:30:49 INFO AbstractConnector: Stopped Spark@5e774d9d{HTTP/1.1, (http/1.1)}{0.0.0.0:4040}
   */
  logContent?: string;
  /**
   * @remarks
   * The number of log entries. A value of 0 indicates that no valid logs are returned.
   * 
   * @example
   * 3517972480
   */
  logSize?: number;
  /**
   * @remarks
   * The alert message returned for the request, such as task execution failure or insufficient resources. If no alert occurs, null is returned.
   * 
   * @example
   * WARNING:  log file maybe deleted, please check oss path: oss://TestBucketName/applog/
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      logContent: 'LogContent',
      logSize: 'LogSize',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      logContent: 'string',
      logSize: 'number',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppMetricsResponseBodyDataScanMetrics extends $tea.Model {
  /**
   * @remarks
   * The number of scanned rows.
   * 
   * @example
   * 1000
   */
  outputRowsCount?: number;
  /**
   * @remarks
   * The number of scanned bytes.
   * 
   * @example
   * 10000
   */
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
  /**
   * @remarks
   * The ID of the Spark application.
   * 
   * @example
   * s202302051515shfa865f80003691
   */
  appId?: string;
  /**
   * @remarks
   * The attempt ID of the Spark application.
   * 
   * @example
   * s202301061000hz57d797b0000201-0001
   */
  attemptId?: string;
  /**
   * @remarks
   * The path of the event log.
   * 
   * @example
   * oss://path/to/eventLog
   */
  eventLogPath?: string;
  /**
   * @remarks
   * Indicates whether parsing is complete. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * True
   */
  finished?: boolean;
  /**
   * @remarks
   * The metrics.
   */
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
  /**
   * @remarks
   * The Spark application ID.
   * 
   * @example
   * s202204191546hzpread6a896000****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @example
   * amv-clusterxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The alert message returned for the operation, such as task execution failure or insufficient resources. If no alert occurs, null is returned.
   * 
   * @example
   * Insufficient resources.
   */
  message?: string;
  /**
   * @remarks
   * The execution state of the application. Valid values:
   * 
   * *   **SUBMITTED**
   * *   **STARTING**
   * *   **RUNNING**
   * *   **FAILING**
   * *   **FAILED**
   * *   **KILLING**
   * *   **KILLED**
   * *   **SUCCEEDING**
   * *   **COMPLETED**
   * *   **FATAL**
   * *   **UNKNOWN**
   * 
   * @example
   * COMPLETED
   */
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
  /**
   * @remarks
   * The Spark application ID.
   * 
   * @example
   * s202205201533hz1209892000****
   */
  appId?: string;
  /**
   * @remarks
   * The database ID.
   * 
   * @example
   * amv-clusterxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The expiration time. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1655801973000
   */
  expirationTimeInMillis?: number;
  /**
   * @remarks
   * The URL of the web UI for the Spark application.
   * 
   * @example
   * https://adbsparkui-cn-hangzhou.aliyuncs.com/?token=****
   */
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
  /**
   * @remarks
   * The default log path.
   * 
   * @example
   * oss://aliyun-oa-adb-spark-1111-oss-cn-hanghzou/spark-logs
   */
  defaultLogPath?: string;
  /**
   * @remarks
   * Indicates whether a log path exists.
   * 
   * @example
   * true
   */
  isLogPathExists?: boolean;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 1675654361000
   */
  modifiedTimestamp?: string;
  /**
   * @remarks
   * The account ID of the modifier.
   * 
   * @example
   * 10130223128xxx
   */
  modifiedUid?: string;
  /**
   * @remarks
   * The recorded log path.
   * 
   * @example
   * oss://test/spark-logs/
   */
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
  /**
   * @remarks
   * The ID of the Spark application.
   * 
   * @example
   * s202207151211hz0c****
   */
  appId?: string;
  /**
   * @remarks
   * The configuration of the Spark application.
   * 
   * @example
   * {"key1": "value1", "key2": "value2"}
   */
  config?: string;
  /**
   * @remarks
   * The third-party JAR package.
   * 
   * @example
   * oss://test-bucket/test.jar
   */
  jars?: string;
  /**
   * @remarks
   * The maximum number of started Spark executors.
   * 
   * @example
   * 3
   */
  maxExecutor?: string;
  /**
   * @remarks
   * The minimum number of started Spark executors.
   * 
   * @example
   * 1
   */
  minExecutor?: string;
  /**
   * @remarks
   * The slot number of the Spark application.
   * 
   * @example
   * 2
   */
  slotNum?: string;
  /**
   * @remarks
   * The execution state of the application. Valid values:
   * 
   * *   SUBMITTED
   * *   STARTING
   * *   RUNNING
   * *   FAILING
   * *   FAILED
   * *   KILLING
   * *   KILLED
   * *   SUCCEEDING
   * *   COMPLETED
   * *   FATAL
   * *   UNKNOWN
   * 
   * @example
   * COMPLETED
   */
  state?: string;
  /**
   * @remarks
   * The timestamp when the Spark SQL application was submitted. Unit: milliseconds.
   * 
   * @example
   * 1651213645000
   */
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
  /**
   * @remarks
   * The application type. Valid values:
   * 
   * *   **SQL**
   * *   **STREAMING**
   * *   **BATCH**
   * 
   * @example
   * SQL
   */
  appType?: string;
  /**
   * @remarks
   * The content of the application template.
   * 
   * @example
   * set spark.driver.resourceSpec=medium;set spark.executor.instances=2;set spark.executor.resourceSpec=medium;set spark.app.name=Spark SQL Test;
   */
  content?: string;
  /**
   * @remarks
   * The application template ID.
   * 
   * @example
   * 725204
   */
  id?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * test
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The file type. Valid values:
   * 
   * *   **folder**
   * *   **file**
   * 
   * @example
   * file
   */
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
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The information about the table.
   */
  table?: TableDetailModel;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
   */
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
  /**
   * @remarks
   * The number of the returned page. The value is an integer that is greater than 0. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: 30. Valid values:
   * 
   * *   **30**
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Details of the tables.
   */
  tableSummaryModels?: TableSummaryModel[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The queried views.
   */
  tableSummaryModels?: TableSummaryModel[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The Spark application ID.
   * 
   * @example
   * s202204132018hzprec1ac****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * LAKEHOUSE-1-1
   */
  appName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-bp1c3em7b2e****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * [Advisor] Advisor feature is not available for instance: am-2ze292w4fyglwxxxx
   */
  message?: string;
  /**
   * @remarks
   * The execution state of the Spark application. Valid values:
   * 
   * *   **SUBMITTED**
   * *   **STARTING**
   * *   **RUNNING**
   * *   **FAILING**
   * *   **FAILED**
   * *   **KILLING**
   * *   **KILLED**
   * *   **SUCCEEDING**
   * *   **COMPLETED**
   * *   **FATAL**
   * *   **UNKNOWN**
   * 
   * @example
   * running
   */
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
  /**
   * @remarks
   * The information about the attempts. Fields in the response parameter:
   * 
   * *   **AttemptId**: the attempt ID.
   * 
   * *   **State**: the state of the Spark application. Valid values:
   * 
   *     *   **SUBMITTED**
   *     *   **STARTING**
   *     *   **RUNNING**
   *     *   **FAILING**
   *     *   **FAILED**
   *     *   **KILLING**
   *     *   **KILLED**
   *     *   **SUCCEEDING**
   *     *   **COMPLETED**
   *     *   **FATAL**
   *     *   **UNKNOWN**
   * 
   * *   **Message**: the alert message that is returned. If no alert is generated, null is returned.
   * 
   * *   **Data**: the data of the Spark application template.
   * 
   * *   **EstimateExecutionCpuTimeInSeconds**: the amount of time it takes to consume CPU resources for running the Spark application. Unit: milliseconds.
   * 
   * *   **LogRootPath**: the storage path of log files.
   * 
   * *   **LastAttemptId**: the ID of the last attempt.
   * 
   * *   **WebUiAddress**: the web UI address.
   * 
   * *   **SubmittedTimeInMillis**: the time when the Spark application was submitted. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * *   **StartedTimeInMillis**: the time when the Spark application was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * *   **LastUpdatedTimeInMillis**: the time when the Spark application was last updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * *   **TerminatedTimeInMillis**: the time when the Spark application task was terminated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * *   **DBClusterId**: the ID of the cluster on which the Spark application runs.
   * 
   * *   **ResourceGroupName**: the name of the job resource group.
   * 
   * *   **DurationInMillis**: the amount of time it takes to run the Spark application. Unit: milliseconds.
   */
  attemptInfoList?: SparkAttemptInfo[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
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
  /**
   * @remarks
   * Details of the applications. Fields in the response parameter:
   * 
   * - **Data**: the data of the Spark application template.
   * - **EstimateExecutionCpuTimeInSeconds**: the amount of time it takes to consume CPU resources for running the Spark application. Unit: milliseconds.
   * - **LogRootPath**: the storage path of log files.
   * - **LastAttemptId**: the most recent attempt ID.
   * - **WebUiAddress**: the web UI URL.
   * - **SubmittedTimeInMillis**: the time when the Spark application was submitted. The time is displayed in the UNIX timestamp format. Unit: milliseconds.
   * - **StartedTimeInMillis**: the time when the Spark application was created. The time is displayed in the UNIX timestamp format. Unit: milliseconds.
   * - **LastUpdatedTimeInMillis**: the time when the Spark application was last updated. The time is displayed in the UNIX timestamp format. Unit: milliseconds.
   * - **TerminatedTimeInMillis**: the time when the Spark application task was terminated. The time is displayed in the UNIX timestamp format. Unit: milliseconds.
   * - **DBClusterId**: the ID of the cluster on which the Spark application runs.
   * - **ResourceGroupName**: the name of the job resource group.
   * - **DurationInMillis**: the amount of time it takes to run the Spark application. Unit: milliseconds.
   */
  appInfoList?: SparkAppInfo[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The queried Spark log analysis tasks.
   */
  taskList?: SparkAnalyzeLogTask[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * The columns on which you want to grant permissions. This parameter must be specified when the PrivilegeType parameter is set to Column.
   * 
   * @example
   * column1
   */
  column?: string;
  /**
   * @remarks
   * The databases on which you want to grant permissions. This parameter must be specified when the PrivilegeType parameter is set to Database, Table, or Column.
   * 
   * @example
   * tsdb1
   */
  database?: string;
  /**
   * @remarks
   * The tables on which you want to grant permissions. This parameter must be specified when the PrivilegeType parameter is set to Table or Column.
   * 
   * @example
   * table1
   */
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
  /**
   * @remarks
   * The objects on which you want to grant permissions, including databases, tables, and columns.
   */
  privilegeObject?: ModifyAccountPrivilegesRequestAccountPrivilegesPrivilegeObject;
  /**
   * @remarks
   * The permission level that you want to assign to the database account. You can call the `DescribeEnabledPrivileges` operation to query the permission level that can be assigned to the database account.
   * 
   * @example
   * Global
   */
  privilegeType?: string;
  /**
   * @remarks
   * The permissions that you want to grant to the database account.
   */
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

export class ModifyDBResourceGroupRequestRules extends $tea.Model {
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * user_default
   */
  groupName?: string;
  /**
   * @remarks
   * The execution duration of the query. Unit: milliseconds.
   * 
   * @example
   * 180000
   */
  queryTime?: string;
  /**
   * @remarks
   * The name of the destination resource group.
   * 
   * @example
   * job
   */
  targetGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      queryTime: 'QueryTime',
      targetGroupName: 'TargetGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      queryTime: 'string',
      targetGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPerformanceViewRequestViewDetailCategoriesKeys extends $tea.Model {
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * AnalyticDB_CPU
   */
  keyName?: string;
  /**
   * @remarks
   * Specifies whether to select the metric. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      keyName: 'KeyName',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyName: 'string',
      selected: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPerformanceViewRequestViewDetailCategories extends $tea.Model {
  /**
   * @remarks
   * The name of the metric category. Valid values:
   * 
   * *   **Node**
   * *   **DiskData**
   * *   **WorkLoad**
   * *   **ResourceGroup**
   * 
   * @example
   * Node
   */
  category?: string;
  /**
   * @remarks
   * The metrics.
   */
  keys?: ModifyPerformanceViewRequestViewDetailCategoriesKeys[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      keys: { 'type': 'array', 'itemType': ModifyPerformanceViewRequestViewDetailCategoriesKeys },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPerformanceViewRequestViewDetail extends $tea.Model {
  /**
   * @remarks
   * The metric categories.
   */
  categories?: ModifyPerformanceViewRequestViewDetailCategories[];
  /**
   * @remarks
   * Specifies whether to enable the filter interaction feature. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  chartLinked?: boolean;
  /**
   * @remarks
   * The number of charts to display in each row.
   * 
   * @example
   * 3
   */
  chartsPerLine?: number;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      chartLinked: 'ChartLinked',
      chartsPerLine: 'ChartsPerLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': ModifyPerformanceViewRequestViewDetailCategories },
      chartLinked: 'boolean',
      chartsPerLine: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreloadSparkAppMetricsResponseBodyDataScanMetrics extends $tea.Model {
  /**
   * @remarks
   * The number of rows scanned.
   * 
   * @example
   * 1000
   */
  outputRowsCount?: number;
  /**
   * @remarks
   * The size of the scanned data. Unit: bytes.
   * 
   * @example
   * 10000
   */
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
  /**
   * @remarks
   * The ID of the Spark application.
   * 
   * @example
   * s202212181815shaccb8be0000253
   */
  appId?: string;
  /**
   * @remarks
   * The retry ID of the Spark application.
   * 
   * @example
   * s202301061000hz57d797b0000201-0001
   */
  attemptId?: string;
  /**
   * @remarks
   * The event log path.
   * 
   * @example
   * oss://path/to/eventLog
   */
  eventLogPath?: string;
  /**
   * @remarks
   * Indicates whether parsing is complete. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * True
   */
  finished?: boolean;
  /**
   * @remarks
   * The metrics.
   */
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

export class RenameSparkTemplateFileResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   True
   * *   False
   * 
   * @example
   * True
   */
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

export class SetSparkAppLogRootPathResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The recommended default OSS log path.
   * 
   * @example
   * oss://path/to/log
   */
  defaultLogPath?: string;
  /**
   * @remarks
   * Indicates whether an OSS log path exists.
   * 
   * @example
   * true
   */
  isLogPathExists?: boolean;
  /**
   * @remarks
   * The time when the modification was last modified.
   * 
   * @example
   * 1675236908
   */
  modifiedTimestamp?: string;
  /**
   * @remarks
   * The modifier ID.
   * 
   * @example
   * 1111111
   */
  modifiedUid?: string;
  /**
   * @remarks
   * The OSS log path.
   * 
   * @example
   * oss://path/to/log
   */
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
  /**
   * @remarks
   * The ID of the Spark job.
   * 
   * @example
   * s202301xxxx
   */
  appId?: string;
  /**
   * @remarks
   * The name of the Spark application.
   * 
   * @example
   * SQLEngine1
   */
  appName?: string;
  /**
   * @remarks
   * The state of the Spark SQL engine. Valid values:
   * 
   * *   SUBMITTED
   * *   STARTING
   * *   RUNNING
   * *   FAILED
   * 
   * @example
   * SUBMITTED
   */
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
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * s202204132018hzprec1ac61a000****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * TestApp
   */
  appName?: string;
  /**
   * @remarks
   * The alert message returned for the operation, such as task execution failure or insufficient resources. If no alert occurs, null is returned.
   * 
   * @example
   * Insufficient resources.
   */
  message?: string;
  /**
   * @remarks
   * The execution state of the application. Valid values:
   * 
   * *   **SUBMITTED**
   * *   **STARTING**
   * *   **RUNNING**
   * *   **FAILING**
   * *   **FAILED**
   * *   **KILLING**
   * *   **KILLED**
   * *   **SUCCEEDING**
   * *   **COMPLETED**
   * *   **FATAL**
   * *   **UNKNOWN**
   * 
   * @example
   * SUBMITTED
   */
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
  /**
   * @remarks
   * Indicates whether the application template is updated.
   * 
   * *   **True**
   * *   **False**
   * 
   * @example
   * True
   */
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

  /**
   * Applies for a public endpoint for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - AllocateClusterPublicConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllocateClusterPublicConnectionResponse
   */
  async allocateClusterPublicConnectionWithOptions(request: AllocateClusterPublicConnectionRequest, runtime: $Util.RuntimeOptions): Promise<AllocateClusterPublicConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
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

  /**
   * Applies for a public endpoint for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - AllocateClusterPublicConnectionRequest
   * @returns AllocateClusterPublicConnectionResponse
   */
  async allocateClusterPublicConnection(request: AllocateClusterPublicConnectionRequest): Promise<AllocateClusterPublicConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.allocateClusterPublicConnectionWithOptions(request, runtime);
  }

  /**
   * Attaches an elastic network interface (ENI) to an AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - AttachUserENIRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachUserENIResponse
   */
  async attachUserENIWithOptions(request: AttachUserENIRequest, runtime: $Util.RuntimeOptions): Promise<AttachUserENIResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachUserENI",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachUserENIResponse>(await this.callApi(params, req, runtime), new AttachUserENIResponse({}));
  }

  /**
   * Attaches an elastic network interface (ENI) to an AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - AttachUserENIRequest
   * @returns AttachUserENIResponse
   */
  async attachUserENI(request: AttachUserENIRequest): Promise<AttachUserENIResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachUserENIWithOptions(request, runtime);
  }

  /**
   * Associates a standard account of an AnalyticDB for MySQL cluster with a Resource Access Management (RAM) user.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - BindAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindAccountResponse
   */
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

  /**
   * Associates a standard account of an AnalyticDB for MySQL cluster with a Resource Access Management (RAM) user.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - BindAccountRequest
   * @returns BindAccountResponse
   */
  async bindAccount(request: BindAccountRequest): Promise<BindAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindAccountWithOptions(request, runtime);
  }

  /**
   * Associates a resource group with a database account.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - BindDBResourceGroupWithUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindDBResourceGroupWithUserResponse
   */
  async bindDBResourceGroupWithUserWithOptions(request: BindDBResourceGroupWithUserRequest, runtime: $Util.RuntimeOptions): Promise<BindDBResourceGroupWithUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.groupUser)) {
      query["GroupUser"] = request.groupUser;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindDBResourceGroupWithUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindDBResourceGroupWithUserResponse>(await this.callApi(params, req, runtime), new BindDBResourceGroupWithUserResponse({}));
  }

  /**
   * Associates a resource group with a database account.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - BindDBResourceGroupWithUserRequest
   * @returns BindDBResourceGroupWithUserResponse
   */
  async bindDBResourceGroupWithUser(request: BindDBResourceGroupWithUserRequest): Promise<BindDBResourceGroupWithUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindDBResourceGroupWithUserWithOptions(request, runtime);
  }

  /**
   * Queries whether a database account of an AnalyticDB for MySQL cluster is associated with a Resource Access Management (RAM) user.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - CheckBindRamUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckBindRamUserResponse
   */
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

  /**
   * Queries whether a database account of an AnalyticDB for MySQL cluster is associated with a Resource Access Management (RAM) user.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - CheckBindRamUserRequest
   * @returns CheckBindRamUserResponse
   */
  async checkBindRamUser(request: CheckBindRamUserRequest): Promise<CheckBindRamUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkBindRamUserWithOptions(request, runtime);
  }

  /**
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - CheckSampleDataSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckSampleDataSetResponse
   */
  async checkSampleDataSetWithOptions(request: CheckSampleDataSetRequest, runtime: $Util.RuntimeOptions): Promise<CheckSampleDataSetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckSampleDataSet",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckSampleDataSetResponse>(await this.callApi(params, req, runtime), new CheckSampleDataSetResponse({}));
  }

  /**
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - CheckSampleDataSetRequest
   * @returns CheckSampleDataSetResponse
   */
  async checkSampleDataSet(request: CheckSampleDataSetRequest): Promise<CheckSampleDataSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkSampleDataSetWithOptions(request, runtime);
  }

  /**
   * Creates a database account for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - CreateAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccountResponse
   */
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

    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
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

  /**
   * Creates a database account for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - CreateAccountRequest
   * @returns CreateAccountResponse
   */
  async createAccount(request: CreateAccountRequest): Promise<CreateAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  /**
   * Creates an AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - CreateDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBClusterResponse
   */
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

    if (!Util.isUnset(request.diskEncryption)) {
      query["DiskEncryption"] = request.diskEncryption;
    }

    if (!Util.isUnset(request.enableDefaultResourcePool)) {
      query["EnableDefaultResourcePool"] = request.enableDefaultResourcePool;
    }

    if (!Util.isUnset(request.kmsId)) {
      query["KmsId"] = request.kmsId;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.productForm)) {
      query["ProductForm"] = request.productForm;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.reservedNodeCount)) {
      query["ReservedNodeCount"] = request.reservedNodeCount;
    }

    if (!Util.isUnset(request.reservedNodeSize)) {
      query["ReservedNodeSize"] = request.reservedNodeSize;
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

  /**
   * Creates an AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - CreateDBClusterRequest
   * @returns CreateDBClusterResponse
   */
  async createDBCluster(request: CreateDBClusterRequest): Promise<CreateDBClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBClusterWithOptions(request, runtime);
  }

  /**
   * Creates a resource group for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param tmpReq - CreateDBResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBResourceGroupResponse
   */
  async createDBResourceGroupWithOptions(tmpReq: CreateDBResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateDBResourceGroupResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateDBResourceGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.rules)) {
      request.rulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rules, "Rules", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clusterMode)) {
      query["ClusterMode"] = request.clusterMode;
    }

    if (!Util.isUnset(request.clusterSizeResource)) {
      query["ClusterSizeResource"] = request.clusterSizeResource;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.enableSpot)) {
      query["EnableSpot"] = request.enableSpot;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!Util.isUnset(request.maxClusterCount)) {
      query["MaxClusterCount"] = request.maxClusterCount;
    }

    if (!Util.isUnset(request.maxComputeResource)) {
      query["MaxComputeResource"] = request.maxComputeResource;
    }

    if (!Util.isUnset(request.minClusterCount)) {
      query["MinClusterCount"] = request.minClusterCount;
    }

    if (!Util.isUnset(request.minComputeResource)) {
      query["MinComputeResource"] = request.minComputeResource;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.rulesShrink)) {
      query["Rules"] = request.rulesShrink;
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

  /**
   * Creates a resource group for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - CreateDBResourceGroupRequest
   * @returns CreateDBResourceGroupResponse
   */
  async createDBResourceGroup(request: CreateDBResourceGroupRequest): Promise<CreateDBResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDBResourceGroupWithOptions(request, runtime);
  }

  /**
   * Creates a scaling plan for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - CreateElasticPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateElasticPlanResponse
   */
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

  /**
   * Creates a scaling plan for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - CreateElasticPlanRequest
   * @returns CreateElasticPlanResponse
   */
  async createElasticPlan(request: CreateElasticPlanRequest): Promise<CreateElasticPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createElasticPlanWithOptions(request, runtime);
  }

  /**
   * Creates an Object Storage Service (OSS) subdirectory.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - CreateOssSubDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOssSubDirectoryResponse
   */
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

  /**
   * Creates an Object Storage Service (OSS) subdirectory.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - CreateOssSubDirectoryRequest
   * @returns CreateOssSubDirectoryResponse
   */
  async createOssSubDirectory(request: CreateOssSubDirectoryRequest): Promise<CreateOssSubDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOssSubDirectoryWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - CreatePerformanceViewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePerformanceViewResponse
   */
  async createPerformanceViewWithOptions(tmpReq: CreatePerformanceViewRequest, runtime: $Util.RuntimeOptions): Promise<CreatePerformanceViewResponse> {
    Util.validateModel(tmpReq);
    let request = new CreatePerformanceViewShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.viewDetail)) {
      request.viewDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.viewDetail, "ViewDetail", "json");
    }

    let query = { };
    if (!Util.isUnset(request.createFromViewType)) {
      query["CreateFromViewType"] = request.createFromViewType;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.fillOriginViewKeys)) {
      query["FillOriginViewKeys"] = request.fillOriginViewKeys;
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

    if (!Util.isUnset(request.viewDetailShrink)) {
      query["ViewDetail"] = request.viewDetailShrink;
    }

    if (!Util.isUnset(request.viewName)) {
      query["ViewName"] = request.viewName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePerformanceView",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePerformanceViewResponse>(await this.callApi(params, req, runtime), new CreatePerformanceViewResponse({}));
  }

  /**
   * @param request - CreatePerformanceViewRequest
   * @returns CreatePerformanceViewResponse
   */
  async createPerformanceView(request: CreatePerformanceViewRequest): Promise<CreatePerformanceViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPerformanceViewWithOptions(request, runtime);
  }

  /**
   * Creates a Spark application template.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - CreateSparkTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSparkTemplateResponse
   */
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

  /**
   * Creates a Spark application template.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - CreateSparkTemplateRequest
   * @returns CreateSparkTemplateResponse
   */
  async createSparkTemplate(request: CreateSparkTemplateRequest): Promise<CreateSparkTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSparkTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes a database account from an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DeleteAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccountResponse
   */
  async deleteAccountWithOptions(request: DeleteAccountRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
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

  /**
   * Deletes a database account from an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DeleteAccountRequest
   * @returns DeleteAccountResponse
   */
  async deleteAccount(request: DeleteAccountRequest): Promise<DeleteAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  /**
   * Deletes an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * ### [](#)
   * *   You can call this operation to delete only subscription clusters.
   * *   For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DeleteDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBClusterResponse
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
   * Deletes an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * ### [](#)
   * *   You can call this operation to delete only subscription clusters.
   * *   For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DeleteDBClusterRequest
   * @returns DeleteDBClusterResponse
   */
  async deleteDBCluster(request: DeleteDBClusterRequest): Promise<DeleteDBClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBClusterWithOptions(request, runtime);
  }

  /**
   * Deletes a resource group from an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DeleteDBResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBResourceGroupResponse
   */
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

  /**
   * Deletes a resource group from an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DeleteDBResourceGroupRequest
   * @returns DeleteDBResourceGroupResponse
   */
  async deleteDBResourceGroup(request: DeleteDBResourceGroupRequest): Promise<DeleteDBResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDBResourceGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a scaling plan from an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DeleteElasticPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteElasticPlanResponse
   */
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

  /**
   * Deletes a scaling plan from an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DeleteElasticPlanRequest
   * @returns DeleteElasticPlanResponse
   */
  async deleteElasticPlan(request: DeleteElasticPlanRequest): Promise<DeleteElasticPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteElasticPlanWithOptions(request, runtime);
  }

  /**
   * @param request - DeletePerformanceViewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePerformanceViewResponse
   */
  async deletePerformanceViewWithOptions(request: DeletePerformanceViewRequest, runtime: $Util.RuntimeOptions): Promise<DeletePerformanceViewResponse> {
    Util.validateModel(request);
    let query = { };
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

    if (!Util.isUnset(request.viewName)) {
      query["ViewName"] = request.viewName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePerformanceView",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePerformanceViewResponse>(await this.callApi(params, req, runtime), new DeletePerformanceViewResponse({}));
  }

  /**
   * @param request - DeletePerformanceViewRequest
   * @returns DeletePerformanceViewResponse
   */
  async deletePerformanceView(request: DeletePerformanceViewRequest): Promise<DeletePerformanceViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePerformanceViewWithOptions(request, runtime);
  }

  /**
   * Deletes a worflow instance from an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DeleteProcessInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProcessInstanceResponse
   */
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

  /**
   * Deletes a worflow instance from an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DeleteProcessInstanceRequest
   * @returns DeleteProcessInstanceResponse
   */
  async deleteProcessInstance(request: DeleteProcessInstanceRequest): Promise<DeleteProcessInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProcessInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes Spark template files.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - DeleteSparkTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSparkTemplateResponse
   */
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

  /**
   * Deletes Spark template files.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - DeleteSparkTemplateRequest
   * @returns DeleteSparkTemplateResponse
   */
  async deleteSparkTemplate(request: DeleteSparkTemplateRequest): Promise<DeleteSparkTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSparkTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes Spark template files.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DeleteSparkTemplateFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSparkTemplateFileResponse
   */
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

  /**
   * Deletes Spark template files.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DeleteSparkTemplateFileRequest
   * @returns DeleteSparkTemplateFileResponse
   */
  async deleteSparkTemplateFile(request: DeleteSparkTemplateFileRequest): Promise<DeleteSparkTemplateFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSparkTemplateFileWithOptions(request, runtime);
  }

  /**
   * Queries the permissions of a database account on all permission levels.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeAccountAllPrivilegesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountAllPrivilegesResponse
   */
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

  /**
   * Queries the permissions of a database account on all permission levels.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeAccountAllPrivilegesRequest
   * @returns DescribeAccountAllPrivilegesResponse
   */
  async describeAccountAllPrivileges(request: DescribeAccountAllPrivilegesRequest): Promise<DescribeAccountAllPrivilegesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountAllPrivilegesWithOptions(request, runtime);
  }

  /**
   * Queries the databases, tables, and columns on which a database account has permissions.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeAccountPrivilegeObjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountPrivilegeObjectsResponse
   */
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

  /**
   * Queries the databases, tables, and columns on which a database account has permissions.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeAccountPrivilegeObjectsRequest
   * @returns DescribeAccountPrivilegeObjectsResponse
   */
  async describeAccountPrivilegeObjects(request: DescribeAccountPrivilegeObjectsRequest): Promise<DescribeAccountPrivilegeObjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountPrivilegeObjectsWithOptions(request, runtime);
  }

  /**
   * 获取某一ADB账户的权限
   * 
   * @param request - DescribeAccountPrivilegesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountPrivilegesResponse
   */
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

  /**
   * 获取某一ADB账户的权限
   * 
   * @param request - DescribeAccountPrivilegesRequest
   * @returns DescribeAccountPrivilegesResponse
   */
  async describeAccountPrivileges(request: DescribeAccountPrivilegesRequest): Promise<DescribeAccountPrivilegesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountPrivilegesWithOptions(request, runtime);
  }

  /**
   * Queries the database accounts of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountsResponse
   */
  async describeAccountsWithOptions(request: DescribeAccountsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAccountsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
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

  /**
   * Queries the database accounts of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeAccountsRequest
   * @returns DescribeAccountsResponse
   */
  async describeAccounts(request: DescribeAccountsRequest): Promise<DescribeAccountsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountsWithOptions(request, runtime);
  }

  /**
   * Queries the information about table columns for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeAdbMySqlColumnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAdbMySqlColumnsResponse
   */
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

  /**
   * Queries the information about table columns for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeAdbMySqlColumnsRequest
   * @returns DescribeAdbMySqlColumnsResponse
   */
  async describeAdbMySqlColumns(request: DescribeAdbMySqlColumnsRequest): Promise<DescribeAdbMySqlColumnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAdbMySqlColumnsWithOptions(request, runtime);
  }

  /**
   * Queries a list of databases for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeAdbMySqlSchemasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAdbMySqlSchemasResponse
   */
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

  /**
   * Queries a list of databases for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeAdbMySqlSchemasRequest
   * @returns DescribeAdbMySqlSchemasResponse
   */
  async describeAdbMySqlSchemas(request: DescribeAdbMySqlSchemasRequest): Promise<DescribeAdbMySqlSchemasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAdbMySqlSchemasWithOptions(request, runtime);
  }

  /**
   * Queries a list of tables for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeAdbMySqlTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAdbMySqlTablesResponse
   */
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

  /**
   * Queries a list of tables for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeAdbMySqlTablesRequest
   * @returns DescribeAdbMySqlTablesResponse
   */
  async describeAdbMySqlTables(request: DescribeAdbMySqlTablesRequest): Promise<DescribeAdbMySqlTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAdbMySqlTablesWithOptions(request, runtime);
  }

  /**
   * Queries a list of databases, tables, and columns in an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeAllDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAllDataSourceResponse
   */
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

  /**
   * Queries a list of databases, tables, and columns in an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeAllDataSourceRequest
   * @returns DescribeAllDataSourceResponse
   */
  async describeAllDataSource(request: DescribeAllDataSourceRequest): Promise<DescribeAllDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAllDataSourceWithOptions(request, runtime);
  }

  /**
   * Queries the logs of a real-time data ingestion job for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeApsActionLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApsActionLogsResponse
   */
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

  /**
   * Queries the logs of a real-time data ingestion job for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeApsActionLogsRequest
   * @returns DescribeApsActionLogsResponse
   */
  async describeApsActionLogs(request: DescribeApsActionLogsRequest): Promise<DescribeApsActionLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApsActionLogsWithOptions(request, runtime);
  }

  /**
   * Queries the information about resource groups of an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeApsResourceGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApsResourceGroupsResponse
   */
  async describeApsResourceGroupsWithOptions(request: DescribeApsResourceGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApsResourceGroupsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.workloadId)) {
      body["WorkloadId"] = request.workloadId;
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

  /**
   * Queries the information about resource groups of an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeApsResourceGroupsRequest
   * @returns DescribeApsResourceGroupsResponse
   */
  async describeApsResourceGroups(request: DescribeApsResourceGroupsRequest): Promise<DescribeApsResourceGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApsResourceGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the SQL audit logs of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   *   SQL audit logs can be queried only when SQL audit is enabled. Only SQL audit logs within the last 30 days can be queried. If SQL audit was disabled and re-enabled, only SQL audit logs from the time when SQL audit was re-enabled can be queried. The following operations are not recorded in SQL audit logs: **INSERT INTO VALUES**, **REPLACE INTO VALUES**, and **UPSERT INTO VALUES**.
   * *   For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeAuditLogRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAuditLogRecordsResponse
   */
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

  /**
   * Queries the SQL audit logs of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   *   SQL audit logs can be queried only when SQL audit is enabled. Only SQL audit logs within the last 30 days can be queried. If SQL audit was disabled and re-enabled, only SQL audit logs from the time when SQL audit was re-enabled can be queried. The following operations are not recorded in SQL audit logs: **INSERT INTO VALUES**, **REPLACE INTO VALUES**, and **UPSERT INTO VALUES**.
   * *   For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeAuditLogRecordsRequest
   * @returns DescribeAuditLogRecordsResponse
   */
  async describeAuditLogRecords(request: DescribeAuditLogRecordsRequest): Promise<DescribeAuditLogRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAuditLogRecordsWithOptions(request, runtime);
  }

  /**
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicyWithOptions(request: DescribeBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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
      action: "DescribeBackupPolicy",
      version: "2021-12-01",
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

  /**
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeBackupPolicyRequest
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicy(request: DescribeBackupPolicyRequest): Promise<DescribeBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupPolicyWithOptions(request, runtime);
  }

  /**
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeBackupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupsResponse
   */
  async describeBackupsWithOptions(request: DescribeBackupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBackupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBackups",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBackupsResponse>(await this.callApi(params, req, runtime), new DescribeBackupsResponse({}));
  }

  /**
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeBackupsRequest
   * @returns DescribeBackupsResponse
   */
  async describeBackups(request: DescribeBackupsRequest): Promise<DescribeBackupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBackupsWithOptions(request, runtime);
  }

  /**
   * Queries the IP address whitelists of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeClusterAccessWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterAccessWhiteListResponse
   */
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

  /**
   * Queries the IP address whitelists of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeClusterAccessWhiteListRequest
   * @returns DescribeClusterAccessWhiteListResponse
   */
  async describeClusterAccessWhiteList(request: DescribeClusterAccessWhiteListRequest): Promise<DescribeClusterAccessWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterAccessWhiteListWithOptions(request, runtime);
  }

  /**
   * Queries the network information about an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeClusterNetInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterNetInfoResponse
   */
  async describeClusterNetInfoWithOptions(request: DescribeClusterNetInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterNetInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
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

  /**
   * Queries the network information about an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeClusterNetInfoRequest
   * @returns DescribeClusterNetInfoResponse
   */
  async describeClusterNetInfo(request: DescribeClusterNetInfoRequest): Promise<DescribeClusterNetInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterNetInfoWithOptions(request, runtime);
  }

  /**
   * 获取集群资源统计
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeClusterResourceDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterResourceDetailResponse
   */
  async describeClusterResourceDetailWithOptions(request: DescribeClusterResourceDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterResourceDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterResourceDetail",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterResourceDetailResponse>(await this.callApi(params, req, runtime), new DescribeClusterResourceDetailResponse({}));
  }

  /**
   * 获取集群资源统计
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeClusterResourceDetailRequest
   * @returns DescribeClusterResourceDetailResponse
   */
  async describeClusterResourceDetail(request: DescribeClusterResourceDetailRequest): Promise<DescribeClusterResourceDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterResourceDetailWithOptions(request, runtime);
  }

  /**
   * 获取实例资源统计
   * 
   * @param request - DescribeClusterResourceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterResourceUsageResponse
   */
  async describeClusterResourceUsageWithOptions(request: DescribeClusterResourceUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterResourceUsageResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClusterResourceUsage",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterResourceUsageResponse>(await this.callApi(params, req, runtime), new DescribeClusterResourceUsageResponse({}));
  }

  /**
   * 获取实例资源统计
   * 
   * @param request - DescribeClusterResourceUsageRequest
   * @returns DescribeClusterResourceUsageResponse
   */
  async describeClusterResourceUsage(request: DescribeClusterResourceUsageRequest): Promise<DescribeClusterResourceUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterResourceUsageWithOptions(request, runtime);
  }

  /**
   * Queries a list of columns in a table.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeColumnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeColumnsResponse
   */
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

  /**
   * Queries a list of columns in a table.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeColumnsRequest
   * @returns DescribeColumnsResponse
   */
  async describeColumns(request: DescribeColumnsRequest): Promise<DescribeColumnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeColumnsWithOptions(request, runtime);
  }

  /**
   * 获取实例计算资源使用统计
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeComputeResourceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeComputeResourceUsageResponse
   */
  async describeComputeResourceUsageWithOptions(request: DescribeComputeResourceUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeComputeResourceUsageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeComputeResourceUsage",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeComputeResourceUsageResponse>(await this.callApi(params, req, runtime), new DescribeComputeResourceUsageResponse({}));
  }

  /**
   * 获取实例计算资源使用统计
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeComputeResourceUsageRequest
   * @returns DescribeComputeResourceUsageResponse
   */
  async describeComputeResourceUsage(request: DescribeComputeResourceUsageRequest): Promise<DescribeComputeResourceUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeComputeResourceUsageWithOptions(request, runtime);
  }

  /**
   * Queries the information about an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeDBClusterAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterAttributeResponse
   */
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

  /**
   * Queries the information about an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeDBClusterAttributeRequest
   * @returns DescribeDBClusterAttributeResponse
   */
  async describeDBClusterAttribute(request: DescribeDBClusterAttributeRequest): Promise<DescribeDBClusterAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the health status of an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeDBClusterHealthStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterHealthStatusResponse
   */
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

  /**
   * Queries the health status of an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeDBClusterHealthStatusRequest
   * @returns DescribeDBClusterHealthStatusResponse
   */
  async describeDBClusterHealthStatus(request: DescribeDBClusterHealthStatusRequest): Promise<DescribeDBClusterHealthStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterHealthStatusWithOptions(request, runtime);
  }

  /**
   * Queries the performance data of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeDBClusterPerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterPerformanceResponse
   */
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

  /**
   * Queries the performance data of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeDBClusterPerformanceRequest
   * @returns DescribeDBClusterPerformanceResponse
   */
  async describeDBClusterPerformance(request: DescribeDBClusterPerformanceRequest): Promise<DescribeDBClusterPerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterPerformanceWithOptions(request, runtime);
  }

  /**
   * Queries the storage overview information of an AnalyticDB for MySQL cluster, such as the total data size, hot data size, cold data size, and data growth.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeDBClusterSpaceSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterSpaceSummaryResponse
   */
  async describeDBClusterSpaceSummaryWithOptions(request: DescribeDBClusterSpaceSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterSpaceSummaryResponse> {
    Util.validateModel(request);
    let query = { };
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
      action: "DescribeDBClusterSpaceSummary",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterSpaceSummaryResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterSpaceSummaryResponse({}));
  }

  /**
   * Queries the storage overview information of an AnalyticDB for MySQL cluster, such as the total data size, hot data size, cold data size, and data growth.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeDBClusterSpaceSummaryRequest
   * @returns DescribeDBClusterSpaceSummaryResponse
   */
  async describeDBClusterSpaceSummary(request: DescribeDBClusterSpaceSummaryRequest): Promise<DescribeDBClusterSpaceSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterSpaceSummaryWithOptions(request, runtime);
  }

  /**
   * Queries the status of AnalyticDB for MySQL Data Lakehouse Edition clusters within a region.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeDBClusterStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterStatusResponse
   */
  async describeDBClusterStatusWithOptions(request: DescribeDBClusterStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDBClusterStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDBClusterStatus",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDBClusterStatusResponse>(await this.callApi(params, req, runtime), new DescribeDBClusterStatusResponse({}));
  }

  /**
   * Queries the status of AnalyticDB for MySQL Data Lakehouse Edition clusters within a region.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeDBClusterStatusRequest
   * @returns DescribeDBClusterStatusResponse
   */
  async describeDBClusterStatus(request: DescribeDBClusterStatusRequest): Promise<DescribeDBClusterStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClusterStatusWithOptions(request, runtime);
  }

  /**
   * Queries the information about AnalyticDB for MySQL Data Lakehouse Edition clusters within a region.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeDBClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClustersResponse
   */
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

    if (!Util.isUnset(request.DBClusterVersion)) {
      query["DBClusterVersion"] = request.DBClusterVersion;
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

  /**
   * Queries the information about AnalyticDB for MySQL Data Lakehouse Edition clusters within a region.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeDBClustersRequest
   * @returns DescribeDBClustersResponse
   */
  async describeDBClusters(request: DescribeDBClustersRequest): Promise<DescribeDBClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBClustersWithOptions(request, runtime);
  }

  /**
   * Queries the information about resource groups of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeDBResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBResourceGroupResponse
   */
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

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
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

  /**
   * Queries the information about resource groups of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeDBResourceGroupRequest
   * @returns DescribeDBResourceGroupResponse
   */
  async describeDBResourceGroup(request: DescribeDBResourceGroupRequest): Promise<DescribeDBResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDBResourceGroupWithOptions(request, runtime);
  }

  /**
   * Queries the deduplicated statistics of resource groups, databases, usernames, and source IP addresses about SQL statements that meet a query condition for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeDiagnosisDimensionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiagnosisDimensionsResponse
   */
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

  /**
   * Queries the deduplicated statistics of resource groups, databases, usernames, and source IP addresses about SQL statements that meet a query condition for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeDiagnosisDimensionsRequest
   * @returns DescribeDiagnosisDimensionsResponse
   */
  async describeDiagnosisDimensions(request: DescribeDiagnosisDimensionsRequest): Promise<DescribeDiagnosisDimensionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiagnosisDimensionsWithOptions(request, runtime);
  }

  /**
   * Queries the diagnostic information about SQL statements that meet a query condition for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeDiagnosisRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiagnosisRecordsResponse
   */
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

  /**
   * Queries the diagnostic information about SQL statements that meet a query condition for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeDiagnosisRecordsRequest
   * @returns DescribeDiagnosisRecordsResponse
   */
  async describeDiagnosisRecords(request: DescribeDiagnosisRecordsRequest): Promise<DescribeDiagnosisRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiagnosisRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the execution information about an SQL statement, including the execution plan, execution information, resource usage, and self-diagnostics results.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeDiagnosisSQLInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiagnosisSQLInfoResponse
   */
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

  /**
   * Queries the execution information about an SQL statement, including the execution plan, execution information, resource usage, and self-diagnostics results.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeDiagnosisSQLInfoRequest
   * @returns DescribeDiagnosisSQLInfoResponse
   */
  async describeDiagnosisSQLInfo(request: DescribeDiagnosisSQLInfoRequest): Promise<DescribeDiagnosisSQLInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiagnosisSQLInfoWithOptions(request, runtime);
  }

  /**
   * Queries the last five SQL query download tasks of an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeDownloadRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDownloadRecordsResponse
   */
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

  /**
   * Queries the last five SQL query download tasks of an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeDownloadRecordsRequest
   * @returns DescribeDownloadRecordsResponse
   */
  async describeDownloadRecords(request: DescribeDownloadRecordsRequest): Promise<DescribeDownloadRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDownloadRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a scaling plan for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeElasticPlanAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeElasticPlanAttributeResponse
   */
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

  /**
   * Queries the information about a scaling plan for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeElasticPlanAttributeRequest
   * @returns DescribeElasticPlanAttributeResponse
   */
  async describeElasticPlanAttribute(request: DescribeElasticPlanAttributeRequest): Promise<DescribeElasticPlanAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeElasticPlanAttributeWithOptions(request, runtime);
  }

  /**
   * Queries a list of scaling plan jobs for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeElasticPlanJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeElasticPlanJobsResponse
   */
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

  /**
   * Queries a list of scaling plan jobs for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeElasticPlanJobsRequest
   * @returns DescribeElasticPlanJobsResponse
   */
  async describeElasticPlanJobs(request: DescribeElasticPlanJobsRequest): Promise<DescribeElasticPlanJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeElasticPlanJobsWithOptions(request, runtime);
  }

  /**
   * Queries the resource specifications that are supported by different types of scaling plans of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeElasticPlanSpecificationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeElasticPlanSpecificationsResponse
   */
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

  /**
   * Queries the resource specifications that are supported by different types of scaling plans of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeElasticPlanSpecificationsRequest
   * @returns DescribeElasticPlanSpecificationsResponse
   */
  async describeElasticPlanSpecifications(request: DescribeElasticPlanSpecificationsRequest): Promise<DescribeElasticPlanSpecificationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeElasticPlanSpecificationsWithOptions(request, runtime);
  }

  /**
   * Queries scaling plans of an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeElasticPlansRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeElasticPlansResponse
   */
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

  /**
   * Queries scaling plans of an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeElasticPlansRequest
   * @returns DescribeElasticPlansResponse
   */
  async describeElasticPlans(request: DescribeElasticPlansRequest): Promise<DescribeElasticPlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeElasticPlansWithOptions(request, runtime);
  }

  /**
   * Queries the permission level and permissions supported for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @param request - DescribeEnabledPrivilegesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEnabledPrivilegesResponse
   */
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

  /**
   * Queries the permission level and permissions supported for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @param request - DescribeEnabledPrivilegesRequest
   * @returns DescribeEnabledPrivilegesResponse
   */
  async describeEnabledPrivileges(request: DescribeEnabledPrivilegesRequest): Promise<DescribeEnabledPrivilegesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEnabledPrivilegesWithOptions(request, runtime);
  }

  /**
   * Queries the information about tables that have excessive primary key fields in an AnalyticDB for MySQL Data Lakehouse Edition (V5.0) cluster.
   * 
   * @param request - DescribeExcessivePrimaryKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExcessivePrimaryKeysResponse
   */
  async describeExcessivePrimaryKeysWithOptions(request: DescribeExcessivePrimaryKeysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExcessivePrimaryKeysResponse> {
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

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeExcessivePrimaryKeys",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeExcessivePrimaryKeysResponse>(await this.callApi(params, req, runtime), new DescribeExcessivePrimaryKeysResponse({}));
  }

  /**
   * Queries the information about tables that have excessive primary key fields in an AnalyticDB for MySQL Data Lakehouse Edition (V5.0) cluster.
   * 
   * @param request - DescribeExcessivePrimaryKeysRequest
   * @returns DescribeExcessivePrimaryKeysResponse
   */
  async describeExcessivePrimaryKeys(request: DescribeExcessivePrimaryKeysRequest): Promise<DescribeExcessivePrimaryKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExcessivePrimaryKeysWithOptions(request, runtime);
  }

  /**
   * 获取作业资源使用统计
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeJobResourceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeJobResourceUsageResponse
   */
  async describeJobResourceUsageWithOptions(request: DescribeJobResourceUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeJobResourceUsageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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
      action: "DescribeJobResourceUsage",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeJobResourceUsageResponse>(await this.callApi(params, req, runtime), new DescribeJobResourceUsageResponse({}));
  }

  /**
   * 获取作业资源使用统计
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeJobResourceUsageRequest
   * @returns DescribeJobResourceUsageResponse
   */
  async describeJobResourceUsage(request: DescribeJobResourceUsageRequest): Promise<DescribeJobResourceUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeJobResourceUsageWithOptions(request, runtime);
  }

  /**
   * Queries the information about performance metrics of an SQL pattern such as the query duration and average memory usage for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster within a time range.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribePatternPerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePatternPerformanceResponse
   */
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

  /**
   * Queries the information about performance metrics of an SQL pattern such as the query duration and average memory usage for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster within a time range.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribePatternPerformanceRequest
   * @returns DescribePatternPerformanceResponse
   */
  async describePatternPerformance(request: DescribePatternPerformanceRequest): Promise<DescribePatternPerformanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePatternPerformanceWithOptions(request, runtime);
  }

  /**
   * @param request - DescribePerformanceViewAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePerformanceViewAttributeResponse
   */
  async describePerformanceViewAttributeWithOptions(request: DescribePerformanceViewAttributeRequest, runtime: $Util.RuntimeOptions): Promise<DescribePerformanceViewAttributeResponse> {
    Util.validateModel(request);
    let query = { };
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

    if (!Util.isUnset(request.viewName)) {
      query["ViewName"] = request.viewName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePerformanceViewAttribute",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePerformanceViewAttributeResponse>(await this.callApi(params, req, runtime), new DescribePerformanceViewAttributeResponse({}));
  }

  /**
   * @param request - DescribePerformanceViewAttributeRequest
   * @returns DescribePerformanceViewAttributeResponse
   */
  async describePerformanceViewAttribute(request: DescribePerformanceViewAttributeRequest): Promise<DescribePerformanceViewAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePerformanceViewAttributeWithOptions(request, runtime);
  }

  /**
   * @param request - DescribePerformanceViewsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePerformanceViewsResponse
   */
  async describePerformanceViewsWithOptions(request: DescribePerformanceViewsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePerformanceViewsResponse> {
    Util.validateModel(request);
    let query = { };
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
      action: "DescribePerformanceViews",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePerformanceViewsResponse>(await this.callApi(params, req, runtime), new DescribePerformanceViewsResponse({}));
  }

  /**
   * @param request - DescribePerformanceViewsRequest
   * @returns DescribePerformanceViewsResponse
   */
  async describePerformanceViews(request: DescribePerformanceViewsRequest): Promise<DescribePerformanceViewsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePerformanceViewsWithOptions(request, runtime);
  }

  /**
   * Queries a list of regions and zones in which AnalyticDB for MySQL Data Lakehouse Edition (V3.0) is available.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
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

  /**
   * Queries a list of regions and zones in which AnalyticDB for MySQL Data Lakehouse Edition (V3.0) is available.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries a list of SQL patterns for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster within a time range.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeSQLPatternsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSQLPatternsResponse
   */
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

  /**
   * Queries a list of SQL patterns for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster within a time range.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeSQLPatternsRequest
   * @returns DescribeSQLPatternsResponse
   */
  async describeSQLPatterns(request: DescribeSQLPatternsRequest): Promise<DescribeSQLPatternsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSQLPatternsWithOptions(request, runtime);
  }

  /**
   * Queries a list of databases in an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeSchemasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSchemasResponse
   */
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

  /**
   * Queries a list of databases in an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeSchemasRequest
   * @returns DescribeSchemasResponse
   */
  async describeSchemas(request: DescribeSchemasRequest): Promise<DescribeSchemasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSchemasWithOptions(request, runtime);
  }

  /**
   * Queries the execution logs of Spark code.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeSparkCodeLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSparkCodeLogResponse
   */
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

  /**
   * Queries the execution logs of Spark code.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeSparkCodeLogRequest
   * @returns DescribeSparkCodeLogResponse
   */
  async describeSparkCodeLog(request: DescribeSparkCodeLogRequest): Promise<DescribeSparkCodeLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSparkCodeLogWithOptions(request, runtime);
  }

  /**
   * Queries the execution result of Spark code.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeSparkCodeOutputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSparkCodeOutputResponse
   */
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

  /**
   * Queries the execution result of Spark code.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeSparkCodeOutputRequest
   * @returns DescribeSparkCodeOutputResponse
   */
  async describeSparkCodeOutput(request: DescribeSparkCodeOutputRequest): Promise<DescribeSparkCodeOutputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSparkCodeOutputWithOptions(request, runtime);
  }

  /**
   * Queries the URL of the web UI for a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeSparkCodeWebUiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSparkCodeWebUiResponse
   */
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

  /**
   * Queries the URL of the web UI for a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeSparkCodeWebUiRequest
   * @returns DescribeSparkCodeWebUiResponse
   */
  async describeSparkCodeWebUi(request: DescribeSparkCodeWebUiRequest): Promise<DescribeSparkCodeWebUiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSparkCodeWebUiWithOptions(request, runtime);
  }

  /**
   * Queries the information about SQL patterns of an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster within a time range.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeSqlPatternRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSqlPatternResponse
   */
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

  /**
   * Queries the information about SQL patterns of an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster within a time range.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeSqlPatternRequest
   * @returns DescribeSqlPatternResponse
   */
  async describeSqlPattern(request: DescribeSqlPatternRequest): Promise<DescribeSqlPatternResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSqlPatternWithOptions(request, runtime);
  }

  /**
   * Queries the storage resource usage of an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @param request - DescribeStorageResourceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStorageResourceUsageResponse
   */
  async describeStorageResourceUsageWithOptions(request: DescribeStorageResourceUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeStorageResourceUsageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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
      action: "DescribeStorageResourceUsage",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeStorageResourceUsageResponse>(await this.callApi(params, req, runtime), new DescribeStorageResourceUsageResponse({}));
  }

  /**
   * Queries the storage resource usage of an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @param request - DescribeStorageResourceUsageRequest
   * @returns DescribeStorageResourceUsageResponse
   */
  async describeStorageResourceUsage(request: DescribeStorageResourceUsageRequest): Promise<DescribeStorageResourceUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeStorageResourceUsageWithOptions(request, runtime);
  }

  /**
   * Queries the number of accesses to a table or all tables in an AnalyticDB for MySQL cluster on a date.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeTableAccessCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTableAccessCountResponse
   */
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

  /**
   * Queries the number of accesses to a table or all tables in an AnalyticDB for MySQL cluster on a date.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeTableAccessCountRequest
   * @returns DescribeTableAccessCountResponse
   */
  async describeTableAccessCount(request: DescribeTableAccessCountRequest): Promise<DescribeTableAccessCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTableAccessCountWithOptions(request, runtime);
  }

  /**
   * Queries a list of tables in a database.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTablesResponse
   */
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

  /**
   * Queries a list of tables in a database.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeTablesRequest
   * @returns DescribeTablesResponse
   */
  async describeTables(request: DescribeTablesRequest): Promise<DescribeTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTablesWithOptions(request, runtime);
  }

  /**
   * 查询配额
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeUserQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserQuotaResponse
   */
  async describeUserQuotaWithOptions(request: DescribeUserQuotaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserQuotaResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserQuota",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserQuotaResponse>(await this.callApi(params, req, runtime), new DescribeUserQuotaResponse({}));
  }

  /**
   * 查询配额
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeUserQuotaRequest
   * @returns DescribeUserQuotaResponse
   */
  async describeUserQuota(request: DescribeUserQuotaRequest): Promise<DescribeUserQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserQuotaWithOptions(request, runtime);
  }

  /**
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DetachUserENIRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachUserENIResponse
   */
  async detachUserENIWithOptions(request: DetachUserENIRequest, runtime: $Util.RuntimeOptions): Promise<DetachUserENIResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachUserENI",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachUserENIResponse>(await this.callApi(params, req, runtime), new DetachUserENIResponse({}));
  }

  /**
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DetachUserENIRequest
   * @returns DetachUserENIResponse
   */
  async detachUserENI(request: DetachUserENIRequest): Promise<DetachUserENIResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachUserENIWithOptions(request, runtime);
  }

  /**
   * Disables a scaling plan for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DisableElasticPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableElasticPlanResponse
   */
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

  /**
   * Disables a scaling plan for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DisableElasticPlanRequest
   * @returns DisableElasticPlanResponse
   */
  async disableElasticPlan(request: DisableElasticPlanRequest): Promise<DisableElasticPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableElasticPlanWithOptions(request, runtime);
  }

  /**
   * Downloads the diagnostic information about SQL statements that meet a query condition for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DownloadDiagnosisRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DownloadDiagnosisRecordsResponse
   */
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

  /**
   * Downloads the diagnostic information about SQL statements that meet a query condition for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DownloadDiagnosisRecordsRequest
   * @returns DownloadDiagnosisRecordsResponse
   */
  async downloadDiagnosisRecords(request: DownloadDiagnosisRecordsRequest): Promise<DownloadDiagnosisRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadDiagnosisRecordsWithOptions(request, runtime);
  }

  /**
   * Enables a scaling plan for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - EnableElasticPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableElasticPlanResponse
   */
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

  /**
   * Enables a scaling plan for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - EnableElasticPlanRequest
   * @returns EnableElasticPlanResponse
   */
  async enableElasticPlan(request: EnableElasticPlanRequest): Promise<EnableElasticPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableElasticPlanWithOptions(request, runtime);
  }

  /**
   * Queries whether a running SQL engine exists.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - ExistRunningSQLEngineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExistRunningSQLEngineResponse
   */
  async existRunningSQLEngineWithOptions(request: ExistRunningSQLEngineRequest, runtime: $Util.RuntimeOptions): Promise<ExistRunningSQLEngineResponse> {
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
      action: "ExistRunningSQLEngine",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExistRunningSQLEngineResponse>(await this.callApi(params, req, runtime), new ExistRunningSQLEngineResponse({}));
  }

  /**
   * Queries whether a running SQL engine exists.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - ExistRunningSQLEngineRequest
   * @returns ExistRunningSQLEngineResponse
   */
  async existRunningSQLEngine(request: ExistRunningSQLEngineRequest): Promise<ExistRunningSQLEngineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.existRunningSQLEngineWithOptions(request, runtime);
  }

  /**
   * Queries the information about databases.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetDatabaseObjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatabaseObjectsResponse
   */
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

  /**
   * Queries the information about databases.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetDatabaseObjectsRequest
   * @returns GetDatabaseObjectsResponse
   */
  async getDatabaseObjects(request: GetDatabaseObjectsRequest): Promise<GetDatabaseObjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDatabaseObjectsWithOptions(request, runtime);
  }

  /**
   * Queries the information about the retry log of a Spark application.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetSparkAppAttemptLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkAppAttemptLogResponse
   */
  async getSparkAppAttemptLogWithOptions(request: GetSparkAppAttemptLogRequest, runtime: $Util.RuntimeOptions): Promise<GetSparkAppAttemptLogResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.attemptId)) {
      body["AttemptId"] = request.attemptId;
    }

    if (!Util.isUnset(request.logLength)) {
      body["LogLength"] = request.logLength;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
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

  /**
   * Queries the information about the retry log of a Spark application.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetSparkAppAttemptLogRequest
   * @returns GetSparkAppAttemptLogResponse
   */
  async getSparkAppAttemptLog(request: GetSparkAppAttemptLogRequest): Promise<GetSparkAppAttemptLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkAppAttemptLogWithOptions(request, runtime);
  }

  /**
   * Queries the information about an Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkAppInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkAppInfoResponse
   */
  async getSparkAppInfoWithOptions(request: GetSparkAppInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetSparkAppInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
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

  /**
   * Queries the information about an Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkAppInfoRequest
   * @returns GetSparkAppInfoResponse
   */
  async getSparkAppInfo(request: GetSparkAppInfoRequest): Promise<GetSparkAppInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkAppInfoWithOptions(request, runtime);
  }

  /**
   * Queries the logs of a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkAppLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkAppLogResponse
   */
  async getSparkAppLogWithOptions(request: GetSparkAppLogRequest, runtime: $Util.RuntimeOptions): Promise<GetSparkAppLogResponse> {
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

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.logLength)) {
      body["LogLength"] = request.logLength;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
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

  /**
   * Queries the logs of a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkAppLogRequest
   * @returns GetSparkAppLogResponse
   */
  async getSparkAppLog(request: GetSparkAppLogRequest): Promise<GetSparkAppLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkAppLogWithOptions(request, runtime);
  }

  /**
   * Queries the metrics of a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkAppMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkAppMetricsResponse
   */
  async getSparkAppMetricsWithOptions(request: GetSparkAppMetricsRequest, runtime: $Util.RuntimeOptions): Promise<GetSparkAppMetricsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
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

  /**
   * Queries the metrics of a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkAppMetricsRequest
   * @returns GetSparkAppMetricsResponse
   */
  async getSparkAppMetrics(request: GetSparkAppMetricsRequest): Promise<GetSparkAppMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkAppMetricsWithOptions(request, runtime);
  }

  /**
   * Queries the status of a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkAppStateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkAppStateResponse
   */
  async getSparkAppStateWithOptions(request: GetSparkAppStateRequest, runtime: $Util.RuntimeOptions): Promise<GetSparkAppStateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
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

  /**
   * Queries the status of a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkAppStateRequest
   * @returns GetSparkAppStateResponse
   */
  async getSparkAppState(request: GetSparkAppStateRequest): Promise<GetSparkAppStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkAppStateWithOptions(request, runtime);
  }

  /**
   * Queries the URL of the web UI for a Spark application.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetSparkAppWebUiAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkAppWebUiAddressResponse
   */
  async getSparkAppWebUiAddressWithOptions(request: GetSparkAppWebUiAddressRequest, runtime: $Util.RuntimeOptions): Promise<GetSparkAppWebUiAddressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
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

  /**
   * Queries the URL of the web UI for a Spark application.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetSparkAppWebUiAddressRequest
   * @returns GetSparkAppWebUiAddressResponse
   */
  async getSparkAppWebUiAddress(request: GetSparkAppWebUiAddressRequest): Promise<GetSparkAppWebUiAddressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkAppWebUiAddressWithOptions(request, runtime);
  }

  /**
   * Queries the Spark log configuration of an AnalyticDB for MySQL cluster, including the default Spark log path.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkConfigLogPathRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkConfigLogPathResponse
   */
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

  /**
   * Queries the Spark log configuration of an AnalyticDB for MySQL cluster, including the default Spark log path.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkConfigLogPathRequest
   * @returns GetSparkConfigLogPathResponse
   */
  async getSparkConfigLogPath(request: GetSparkConfigLogPathRequest): Promise<GetSparkConfigLogPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkConfigLogPathWithOptions(request, runtime);
  }

  /**
   * Queries the common definitions of Spark applications.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkDefinitionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkDefinitionsResponse
   */
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

  /**
   * Queries the common definitions of Spark applications.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkDefinitionsRequest
   * @returns GetSparkDefinitionsResponse
   */
  async getSparkDefinitions(request: GetSparkDefinitionsRequest): Promise<GetSparkDefinitionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkDefinitionsWithOptions(request, runtime);
  }

  /**
   * Queries the results of a Spark log analysis task.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetSparkLogAnalyzeTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkLogAnalyzeTaskResponse
   */
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

  /**
   * Queries the results of a Spark log analysis task.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetSparkLogAnalyzeTaskRequest
   * @returns GetSparkLogAnalyzeTaskResponse
   */
  async getSparkLogAnalyzeTask(request: GetSparkLogAnalyzeTaskRequest): Promise<GetSparkLogAnalyzeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkLogAnalyzeTaskWithOptions(request, runtime);
  }

  /**
   * Queries the state information about the Spark SQL engine.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkSQLEngineStateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkSQLEngineStateResponse
   */
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

  /**
   * Queries the state information about the Spark SQL engine.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkSQLEngineStateRequest
   * @returns GetSparkSQLEngineStateResponse
   */
  async getSparkSQLEngineState(request: GetSparkSQLEngineStateRequest): Promise<GetSparkSQLEngineStateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkSQLEngineStateWithOptions(request, runtime);
  }

  /**
   * Queries the content of a Spark application template.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkTemplateFileContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkTemplateFileContentResponse
   */
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

  /**
   * Queries the content of a Spark application template.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkTemplateFileContentRequest
   * @returns GetSparkTemplateFileContentResponse
   */
  async getSparkTemplateFileContent(request: GetSparkTemplateFileContentRequest): Promise<GetSparkTemplateFileContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkTemplateFileContentWithOptions(request, runtime);
  }

  /**
   * Queries the directory structure of Spark applications.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkTemplateFolderTreeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkTemplateFolderTreeResponse
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
   * Queries the directory structure of Spark applications.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkTemplateFolderTreeRequest
   * @returns GetSparkTemplateFolderTreeResponse
   */
  async getSparkTemplateFolderTree(request: GetSparkTemplateFolderTreeRequest): Promise<GetSparkTemplateFolderTreeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkTemplateFolderTreeWithOptions(request, runtime);
  }

  /**
   * Queries the directory structure of Spark applications.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetSparkTemplateFullTreeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkTemplateFullTreeResponse
   */
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

  /**
   * Queries the directory structure of Spark applications.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetSparkTemplateFullTreeRequest
   * @returns GetSparkTemplateFullTreeResponse
   */
  async getSparkTemplateFullTree(request: GetSparkTemplateFullTreeRequest): Promise<GetSparkTemplateFullTreeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSparkTemplateFullTreeWithOptions(request, runtime);
  }

  /**
   * 获取表
   * 
   * @param request - GetTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableResponse
   */
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

  /**
   * 获取表
   * 
   * @param request - GetTableRequest
   * @returns GetTableResponse
   */
  async getTable(request: GetTableRequest): Promise<GetTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTableWithOptions(request, runtime);
  }

  /**
   * Queries the information about columns.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetTableColumnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableColumnsResponse
   */
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

  /**
   * Queries the information about columns.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetTableColumnsRequest
   * @returns GetTableColumnsResponse
   */
  async getTableColumns(request: GetTableColumnsRequest): Promise<GetTableColumnsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTableColumnsWithOptions(request, runtime);
  }

  /**
   * Queries the statement that is used to create a table.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetTableDDLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableDDLResponse
   */
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

  /**
   * Queries the statement that is used to create a table.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetTableDDLRequest
   * @returns GetTableDDLResponse
   */
  async getTableDDL(request: GetTableDDLRequest): Promise<GetTableDDLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTableDDLWithOptions(request, runtime);
  }

  /**
   * 获取table概要信息
   * 
   * @param request - GetTableObjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableObjectsResponse
   */
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

  /**
   * 获取table概要信息
   * 
   * @param request - GetTableObjectsRequest
   * @returns GetTableObjectsResponse
   */
  async getTableObjects(request: GetTableObjectsRequest): Promise<GetTableObjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTableObjectsWithOptions(request, runtime);
  }

  /**
   * Queries the statement that is used to create a view.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetViewDDLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetViewDDLResponse
   */
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

  /**
   * Queries the statement that is used to create a view.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetViewDDLRequest
   * @returns GetViewDDLResponse
   */
  async getViewDDL(request: GetViewDDLRequest): Promise<GetViewDDLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getViewDDLWithOptions(request, runtime);
  }

  /**
   * Queries the information about views.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetViewObjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetViewObjectsResponse
   */
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

  /**
   * Queries the information about views.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetViewObjectsRequest
   * @returns GetViewObjectsResponse
   */
  async getViewObjects(request: GetViewObjectsRequest): Promise<GetViewObjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getViewObjectsWithOptions(request, runtime);
  }

  /**
   * Terminates a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - KillSparkAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns KillSparkAppResponse
   */
  async killSparkAppWithOptions(request: KillSparkAppRequest, runtime: $Util.RuntimeOptions): Promise<KillSparkAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
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

  /**
   * Terminates a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - KillSparkAppRequest
   * @returns KillSparkAppResponse
   */
  async killSparkApp(request: KillSparkAppRequest): Promise<KillSparkAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.killSparkAppWithOptions(request, runtime);
  }

  /**
   * Terminates a Spark log analysis task and queries the information about the analysis task.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - KillSparkLogAnalyzeTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns KillSparkLogAnalyzeTaskResponse
   */
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

  /**
   * Terminates a Spark log analysis task and queries the information about the analysis task.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - KillSparkLogAnalyzeTaskRequest
   * @returns KillSparkLogAnalyzeTaskResponse
   */
  async killSparkLogAnalyzeTask(request: KillSparkLogAnalyzeTaskRequest): Promise<KillSparkLogAnalyzeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.killSparkLogAnalyzeTaskWithOptions(request, runtime);
  }

  /**
   * Shuts down a Spark SQL engine.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - KillSparkSQLEngineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns KillSparkSQLEngineResponse
   */
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

  /**
   * Shuts down a Spark SQL engine.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - KillSparkSQLEngineRequest
   * @returns KillSparkSQLEngineResponse
   */
  async killSparkSQLEngine(request: KillSparkSQLEngineRequest): Promise<KillSparkSQLEngineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.killSparkSQLEngineWithOptions(request, runtime);
  }

  /**
   * Queries the information about retry attempts of a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - ListSparkAppAttemptsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSparkAppAttemptsResponse
   */
  async listSparkAppAttemptsWithOptions(request: ListSparkAppAttemptsRequest, runtime: $Util.RuntimeOptions): Promise<ListSparkAppAttemptsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
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

  /**
   * Queries the information about retry attempts of a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - ListSparkAppAttemptsRequest
   * @returns ListSparkAppAttemptsResponse
   */
  async listSparkAppAttempts(request: ListSparkAppAttemptsRequest): Promise<ListSparkAppAttemptsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSparkAppAttemptsWithOptions(request, runtime);
  }

  /**
   * Queries the Spark applications that run on an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @param request - ListSparkAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSparkAppsResponse
   */
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

  /**
   * Queries the Spark applications that run on an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @param request - ListSparkAppsRequest
   * @returns ListSparkAppsResponse
   */
  async listSparkApps(request: ListSparkAppsRequest): Promise<ListSparkAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSparkAppsWithOptions(request, runtime);
  }

  /**
   * Queries a list of Spark log analysis tasks.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - ListSparkLogAnalyzeTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSparkLogAnalyzeTasksResponse
   */
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

  /**
   * Queries a list of Spark log analysis tasks.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - ListSparkLogAnalyzeTasksRequest
   * @returns ListSparkLogAnalyzeTasksResponse
   */
  async listSparkLogAnalyzeTasks(request: ListSparkLogAnalyzeTasksRequest): Promise<ListSparkLogAnalyzeTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSparkLogAnalyzeTasksWithOptions(request, runtime);
  }

  /**
   * Queries all Spark template file IDs of an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - ListSparkTemplateFileIdsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSparkTemplateFileIdsResponse
   */
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

  /**
   * Queries all Spark template file IDs of an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - ListSparkTemplateFileIdsRequest
   * @returns ListSparkTemplateFileIdsResponse
   */
  async listSparkTemplateFileIds(request: ListSparkTemplateFileIdsRequest): Promise<ListSparkTemplateFileIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSparkTemplateFileIdsWithOptions(request, runtime);
  }

  /**
   * Loads a built-in dataset.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - LoadSampleDataSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LoadSampleDataSetResponse
   */
  async loadSampleDataSetWithOptions(request: LoadSampleDataSetRequest, runtime: $Util.RuntimeOptions): Promise<LoadSampleDataSetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "LoadSampleDataSet",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LoadSampleDataSetResponse>(await this.callApi(params, req, runtime), new LoadSampleDataSetResponse({}));
  }

  /**
   * Loads a built-in dataset.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - LoadSampleDataSetRequest
   * @returns LoadSampleDataSetResponse
   */
  async loadSampleDataSet(request: LoadSampleDataSetRequest): Promise<LoadSampleDataSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.loadSampleDataSetWithOptions(request, runtime);
  }

  /**
   * Modifies the description of a database account for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyAccountDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccountDescriptionResponse
   */
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

    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
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

  /**
   * Modifies the description of a database account for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyAccountDescriptionRequest
   * @returns ModifyAccountDescriptionResponse
   */
  async modifyAccountDescription(request: ModifyAccountDescriptionRequest): Promise<ModifyAccountDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  /**
   * Modifies the permissions of a database account.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param tmpReq - ModifyAccountPrivilegesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccountPrivilegesResponse
   */
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

  /**
   * Modifies the permissions of a database account.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyAccountPrivilegesRequest
   * @returns ModifyAccountPrivilegesResponse
   */
  async modifyAccountPrivileges(request: ModifyAccountPrivilegesRequest): Promise<ModifyAccountPrivilegesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAccountPrivilegesWithOptions(request, runtime);
  }

  /**
   * Modifies the SQL audit settings of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyAuditLogConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAuditLogConfigResponse
   */
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

  /**
   * Modifies the SQL audit settings of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyAuditLogConfigRequest
   * @returns ModifyAuditLogConfigResponse
   */
  async modifyAuditLogConfig(request: ModifyAuditLogConfigRequest): Promise<ModifyAuditLogConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAuditLogConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the backup policy of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicyWithOptions(request: ModifyBackupPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBackupPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupRetentionPeriod)) {
      query["BackupRetentionPeriod"] = request.backupRetentionPeriod;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.enableBackupLog)) {
      query["EnableBackupLog"] = request.enableBackupLog;
    }

    if (!Util.isUnset(request.logBackupRetentionPeriod)) {
      query["LogBackupRetentionPeriod"] = request.logBackupRetentionPeriod;
    }

    if (!Util.isUnset(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.preferredBackupPeriod)) {
      query["PreferredBackupPeriod"] = request.preferredBackupPeriod;
    }

    if (!Util.isUnset(request.preferredBackupTime)) {
      query["PreferredBackupTime"] = request.preferredBackupTime;
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
      action: "ModifyBackupPolicy",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyBackupPolicyResponse>(await this.callApi(params, req, runtime), new ModifyBackupPolicyResponse({}));
  }

  /**
   * Modifies the backup policy of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyBackupPolicyRequest
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicy(request: ModifyBackupPolicyRequest): Promise<ModifyBackupPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the IP address whitelist of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - ModifyClusterAccessWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterAccessWhiteListResponse
   */
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

  /**
   * Modifies the IP address whitelist of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - ModifyClusterAccessWhiteListRequest
   * @returns ModifyClusterAccessWhiteListResponse
   */
  async modifyClusterAccessWhiteList(request: ModifyClusterAccessWhiteListRequest): Promise<ModifyClusterAccessWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyClusterAccessWhiteListWithOptions(request, runtime);
  }

  /**
   * Modifies the public endpoint of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyClusterConnectionStringRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterConnectionStringResponse
   */
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

  /**
   * Modifies the public endpoint of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyClusterConnectionStringRequest
   * @returns ModifyClusterConnectionStringResponse
   */
  async modifyClusterConnectionString(request: ModifyClusterConnectionStringRequest): Promise<ModifyClusterConnectionStringResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyClusterConnectionStringWithOptions(request, runtime);
  }

  /**
   * Changes the configurations of an AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * @remarks
   * ### [](#)
   * *   During a scaling event, you are not allowed to execute the `SUBMIT JOB` statement to submit asynchronous jobs. If your business requires asynchronous jobs, perform scaling during appropriate periods.
   * *   When you scale a cluster, data in the cluster is migrated for redistribution. The amount of time that is required to migrate data is proportional to the data volume. During a scaling event, the services provided by the cluster are not interrupted. When you downgrade cluster specifications, data migration may require up to dozens of hours to complete. Proceed with caution especially if your cluster contains a large amount of data.
   * *   If the cluster has a built-in dataset loaded, make sure that the cluster has reserved storage resources of at least 24 AnalyticDB compute units (ACUs). Otherwise, the built-in dataset cannot be used.
   * *   When the scaling process is about to end, transient connections may occur. We recommend that you scale your cluster during off-peak hours or make sure that your application is configured to automatically reconnect to your cluster.
   * *   You can change an AnalyticDB for MySQL cluster from Data Warehouse Edition to Data Lakehouse Edition, but not the other way around. For more information, see Change a cluster from Data Warehouse Edition to Data Lakehouse Edition.
   * *   For information about the endpoints of the current service, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterResponse
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

    if (!Util.isUnset(request.reservedNodeCount)) {
      query["ReservedNodeCount"] = request.reservedNodeCount;
    }

    if (!Util.isUnset(request.reservedNodeSize)) {
      query["ReservedNodeSize"] = request.reservedNodeSize;
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
   * Changes the configurations of an AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * @remarks
   * ### [](#)
   * *   During a scaling event, you are not allowed to execute the `SUBMIT JOB` statement to submit asynchronous jobs. If your business requires asynchronous jobs, perform scaling during appropriate periods.
   * *   When you scale a cluster, data in the cluster is migrated for redistribution. The amount of time that is required to migrate data is proportional to the data volume. During a scaling event, the services provided by the cluster are not interrupted. When you downgrade cluster specifications, data migration may require up to dozens of hours to complete. Proceed with caution especially if your cluster contains a large amount of data.
   * *   If the cluster has a built-in dataset loaded, make sure that the cluster has reserved storage resources of at least 24 AnalyticDB compute units (ACUs). Otherwise, the built-in dataset cannot be used.
   * *   When the scaling process is about to end, transient connections may occur. We recommend that you scale your cluster during off-peak hours or make sure that your application is configured to automatically reconnect to your cluster.
   * *   You can change an AnalyticDB for MySQL cluster from Data Warehouse Edition to Data Lakehouse Edition, but not the other way around. For more information, see Change a cluster from Data Warehouse Edition to Data Lakehouse Edition.
   * *   For information about the endpoints of the current service, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyDBClusterRequest
   * @returns ModifyDBClusterResponse
   */
  async modifyDBCluster(request: ModifyDBClusterRequest): Promise<ModifyDBClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterWithOptions(request, runtime);
  }

  /**
   * Modifies the description of an AnalyticDB for MySQL cluster to facilitate the maintenance and management of the cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyDBClusterDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterDescriptionResponse
   */
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

  /**
   * Modifies the description of an AnalyticDB for MySQL cluster to facilitate the maintenance and management of the cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyDBClusterDescriptionRequest
   * @returns ModifyDBClusterDescriptionResponse
   */
  async modifyDBClusterDescription(request: ModifyDBClusterDescriptionRequest): Promise<ModifyDBClusterDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterDescriptionWithOptions(request, runtime);
  }

  /**
   * Modifies the maintenance window of an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyDBClusterMaintainTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterMaintainTimeResponse
   */
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

  /**
   * Modifies the maintenance window of an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyDBClusterMaintainTimeRequest
   * @returns ModifyDBClusterMaintainTimeResponse
   */
  async modifyDBClusterMaintainTime(request: ModifyDBClusterMaintainTimeRequest): Promise<ModifyDBClusterMaintainTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBClusterMaintainTimeWithOptions(request, runtime);
  }

  /**
   * Modifies the amount of reserved computing resources for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param tmpReq - ModifyDBResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBResourceGroupResponse
   */
  async modifyDBResourceGroupWithOptions(tmpReq: ModifyDBResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDBResourceGroupResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyDBResourceGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.rules)) {
      request.rulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rules, "Rules", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clusterMode)) {
      query["ClusterMode"] = request.clusterMode;
    }

    if (!Util.isUnset(request.clusterSizeResource)) {
      query["ClusterSizeResource"] = request.clusterSizeResource;
    }

    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.enableSpot)) {
      query["EnableSpot"] = request.enableSpot;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!Util.isUnset(request.maxClusterCount)) {
      query["MaxClusterCount"] = request.maxClusterCount;
    }

    if (!Util.isUnset(request.maxComputeResource)) {
      query["MaxComputeResource"] = request.maxComputeResource;
    }

    if (!Util.isUnset(request.minClusterCount)) {
      query["MinClusterCount"] = request.minClusterCount;
    }

    if (!Util.isUnset(request.minComputeResource)) {
      query["MinComputeResource"] = request.minComputeResource;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.rulesShrink)) {
      query["Rules"] = request.rulesShrink;
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

  /**
   * Modifies the amount of reserved computing resources for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyDBResourceGroupRequest
   * @returns ModifyDBResourceGroupResponse
   */
  async modifyDBResourceGroup(request: ModifyDBResourceGroupRequest): Promise<ModifyDBResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDBResourceGroupWithOptions(request, runtime);
  }

  /**
   * Modifies a scaling plan for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - ModifyElasticPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyElasticPlanResponse
   */
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

  /**
   * Modifies a scaling plan for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - ModifyElasticPlanRequest
   * @returns ModifyElasticPlanResponse
   */
  async modifyElasticPlan(request: ModifyElasticPlanRequest): Promise<ModifyElasticPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyElasticPlanWithOptions(request, runtime);
  }

  /**
   * Modifies the information about a custom monitoring view.
   * 
   * @param tmpReq - ModifyPerformanceViewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPerformanceViewResponse
   */
  async modifyPerformanceViewWithOptions(tmpReq: ModifyPerformanceViewRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPerformanceViewResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyPerformanceViewShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.viewDetail)) {
      request.viewDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.viewDetail, "ViewDetail", "json");
    }

    let query = { };
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

    if (!Util.isUnset(request.viewDetailShrink)) {
      query["ViewDetail"] = request.viewDetailShrink;
    }

    if (!Util.isUnset(request.viewName)) {
      query["ViewName"] = request.viewName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPerformanceView",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyPerformanceViewResponse>(await this.callApi(params, req, runtime), new ModifyPerformanceViewResponse({}));
  }

  /**
   * Modifies the information about a custom monitoring view.
   * 
   * @param request - ModifyPerformanceViewRequest
   * @returns ModifyPerformanceViewResponse
   */
  async modifyPerformanceView(request: ModifyPerformanceViewRequest): Promise<ModifyPerformanceViewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPerformanceViewWithOptions(request, runtime);
  }

  /**
   * Preloads metrics for a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - PreloadSparkAppMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PreloadSparkAppMetricsResponse
   */
  async preloadSparkAppMetricsWithOptions(request: PreloadSparkAppMetricsRequest, runtime: $Util.RuntimeOptions): Promise<PreloadSparkAppMetricsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
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

  /**
   * Preloads metrics for a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - PreloadSparkAppMetricsRequest
   * @returns PreloadSparkAppMetricsResponse
   */
  async preloadSparkAppMetrics(request: PreloadSparkAppMetricsRequest): Promise<PreloadSparkAppMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.preloadSparkAppMetricsWithOptions(request, runtime);
  }

  /**
   * Releases the public endpoint of an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ReleaseClusterPublicConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseClusterPublicConnectionResponse
   */
  async releaseClusterPublicConnectionWithOptions(request: ReleaseClusterPublicConnectionRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseClusterPublicConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
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

  /**
   * Releases the public endpoint of an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ReleaseClusterPublicConnectionRequest
   * @returns ReleaseClusterPublicConnectionResponse
   */
  async releaseClusterPublicConnection(request: ReleaseClusterPublicConnectionRequest): Promise<ReleaseClusterPublicConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseClusterPublicConnectionWithOptions(request, runtime);
  }

  /**
   * Renames a Spark template file.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - RenameSparkTemplateFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenameSparkTemplateFileResponse
   */
  async renameSparkTemplateFileWithOptions(request: RenameSparkTemplateFileRequest, runtime: $Util.RuntimeOptions): Promise<RenameSparkTemplateFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenameSparkTemplateFile",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenameSparkTemplateFileResponse>(await this.callApi(params, req, runtime), new RenameSparkTemplateFileResponse({}));
  }

  /**
   * Renames a Spark template file.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - RenameSparkTemplateFileRequest
   * @returns RenameSparkTemplateFileResponse
   */
  async renameSparkTemplateFile(request: RenameSparkTemplateFileRequest): Promise<RenameSparkTemplateFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renameSparkTemplateFileWithOptions(request, runtime);
  }

  /**
   * Resets the password of a database account for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ResetAccountPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetAccountPasswordResponse
   */
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

    if (!Util.isUnset(request.engine)) {
      query["Engine"] = request.engine;
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

  /**
   * Resets the password of a database account for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ResetAccountPasswordRequest
   * @returns ResetAccountPasswordResponse
   */
  async resetAccountPassword(request: ResetAccountPasswordRequest): Promise<ResetAccountPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetAccountPasswordWithOptions(request, runtime);
  }

  /**
   * Modifies the Spark log configuration.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - SetSparkAppLogRootPathRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetSparkAppLogRootPathResponse
   */
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

  /**
   * Modifies the Spark log configuration.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - SetSparkAppLogRootPathRequest
   * @returns SetSparkAppLogRootPathResponse
   */
  async setSparkAppLogRootPath(request: SetSparkAppLogRootPathRequest): Promise<SetSparkAppLogRootPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setSparkAppLogRootPathWithOptions(request, runtime);
  }

  /**
   * Starts the Spark SQL engine.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - StartSparkSQLEngineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartSparkSQLEngineResponse
   */
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

  /**
   * Starts the Spark SQL engine.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - StartSparkSQLEngineRequest
   * @returns StartSparkSQLEngineResponse
   */
  async startSparkSQLEngine(request: StartSparkSQLEngineRequest): Promise<StartSparkSQLEngineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startSparkSQLEngineWithOptions(request, runtime);
  }

  /**
   * Submits a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - SubmitSparkAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSparkAppResponse
   */
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

  /**
   * Submits a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - SubmitSparkAppRequest
   * @returns SubmitSparkAppResponse
   */
  async submitSparkApp(request: SubmitSparkAppRequest): Promise<SubmitSparkAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSparkAppWithOptions(request, runtime);
  }

  /**
   * Submits a Spark log analysis task and queries the analysis results.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - SubmitSparkLogAnalyzeTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSparkLogAnalyzeTaskResponse
   */
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

  /**
   * Submits a Spark log analysis task and queries the analysis results.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - SubmitSparkLogAnalyzeTaskRequest
   * @returns SubmitSparkLogAnalyzeTaskResponse
   */
  async submitSparkLogAnalyzeTask(request: SubmitSparkLogAnalyzeTaskRequest): Promise<SubmitSparkLogAnalyzeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSparkLogAnalyzeTaskWithOptions(request, runtime);
  }

  /**
   * Disassociates a standard account of an AnalyticDB for MySQL cluster from a Resource Access Management (RAM) user.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - UnbindAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindAccountResponse
   */
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

  /**
   * Disassociates a standard account of an AnalyticDB for MySQL cluster from a Resource Access Management (RAM) user.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - UnbindAccountRequest
   * @returns UnbindAccountResponse
   */
  async unbindAccount(request: UnbindAccountRequest): Promise<UnbindAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindAccountWithOptions(request, runtime);
  }

  /**
   * Disassociates resource groups from database accounts for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - UnbindDBResourceGroupWithUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindDBResourceGroupWithUserResponse
   */
  async unbindDBResourceGroupWithUserWithOptions(request: UnbindDBResourceGroupWithUserRequest, runtime: $Util.RuntimeOptions): Promise<UnbindDBResourceGroupWithUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.groupUser)) {
      query["GroupUser"] = request.groupUser;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnbindDBResourceGroupWithUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindDBResourceGroupWithUserResponse>(await this.callApi(params, req, runtime), new UnbindDBResourceGroupWithUserResponse({}));
  }

  /**
   * Disassociates resource groups from database accounts for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - UnbindDBResourceGroupWithUserRequest
   * @returns UnbindDBResourceGroupWithUserResponse
   */
  async unbindDBResourceGroupWithUser(request: UnbindDBResourceGroupWithUserRequest): Promise<UnbindDBResourceGroupWithUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindDBResourceGroupWithUserWithOptions(request, runtime);
  }

  /**
   * Updates a Spark application template.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - UpdateSparkTemplateFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSparkTemplateFileResponse
   */
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

  /**
   * Updates a Spark application template.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - UpdateSparkTemplateFileRequest
   * @returns UpdateSparkTemplateFileResponse
   */
  async updateSparkTemplateFile(request: UpdateSparkTemplateFileRequest): Promise<UpdateSparkTemplateFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSparkTemplateFileWithOptions(request, runtime);
  }

}
