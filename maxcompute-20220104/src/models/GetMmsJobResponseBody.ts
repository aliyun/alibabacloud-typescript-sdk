// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMmsJobResponseBodyDataConfig extends $dara.Model {
  /**
   * @remarks
   * The column name mapping in the format of {source column name: destination column name}.
   */
  columnMapping?: { [key: string]: string };
  /**
   * @remarks
   * Specifies whether to enable verification. The current verification method executes SELECT COUNT on both the source and destination to compare row counts.
   * 
   * @example
   * true
   */
  enableVerification?: boolean;
  /**
   * @remarks
   * Specifies whether to enable incremental migration. Only new partitions or modified partitions are migrated. Modified partitions are re-migrated.
   * 
   * @example
   * true
   */
  increment?: boolean;
  /**
   * @remarks
   * The additional configuration information.
   * 
   * @example
   * {"spark.executor.mem": "2g"}
   */
  others?: { [key: string]: any };
  /**
   * @remarks
   * The partition filter expressions. Specifies the partition filter expression for a given table.
   */
  partitionFilters?: { [key: string]: string };
  /**
   * @remarks
   * The list of partition IDs of the tables to migrate. This parameter takes effect when type is set to Partitions.
   */
  partitions?: number[];
  /**
   * @remarks
   * Depcreated
   * 
   * @example
   * false
   */
  schemaOnly?: boolean;
  /**
   * @remarks
   * The list of tables to exclude from migration. This parameter takes effect when type is set to Database.
   */
  tableBlackList?: string[];
  /**
   * @remarks
   * The mapping from source table names to destination table names.
   */
  tableMapping?: { [key: string]: string };
  /**
   * @remarks
   * The list of tables to migrate. This parameter takes effect when type is set to Database. If tableWhiteList is not specified, all tables in the corresponding database are migrated.
   */
  tableWhiteList?: string[];
  /**
   * @remarks
   * The list of table names to migrate. This parameter takes effect when type is set to Tables.
   */
  tables?: string[];
  /**
   * @remarks
   * **[Deprecated]** Valid values: MOCK, HIVE (hive udtf task), HIVE_DATAX (hive datax task), COPY_TASK (ODPS Copy Task), ODPS_INSERT_OVERWRITE (ODPS simple insert overwrite task), MC2MC_VERIFY, OSS, HIVE_OSS, HIVE_SPARK, BIGQUERY.
   * 
   * @example
   * BIGQUERY
   */
  taskType?: string;
  /**
   * @remarks
   * Depcreated
   * 
   * @example
   * Depcreated
   */
  tunnelQuota?: string;
  static names(): { [key: string]: string } {
    return {
      columnMapping: 'columnMapping',
      enableVerification: 'enableVerification',
      increment: 'increment',
      others: 'others',
      partitionFilters: 'partitionFilters',
      partitions: 'partitions',
      schemaOnly: 'schemaOnly',
      tableBlackList: 'tableBlackList',
      tableMapping: 'tableMapping',
      tableWhiteList: 'tableWhiteList',
      tables: 'tables',
      taskType: 'taskType',
      tunnelQuota: 'tunnelQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnMapping: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      enableVerification: 'boolean',
      increment: 'boolean',
      others: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      partitionFilters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      partitions: { 'type': 'array', 'itemType': 'number' },
      schemaOnly: 'boolean',
      tableBlackList: { 'type': 'array', 'itemType': 'string' },
      tableMapping: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      tableWhiteList: { 'type': 'array', 'itemType': 'string' },
      tables: { 'type': 'array', 'itemType': 'string' },
      taskType: 'string',
      tunnelQuota: 'string',
    };
  }

  validate() {
    if(this.columnMapping) {
      $dara.Model.validateMap(this.columnMapping);
    }
    if(this.others) {
      $dara.Model.validateMap(this.others);
    }
    if(this.partitionFilters) {
      $dara.Model.validateMap(this.partitionFilters);
    }
    if(Array.isArray(this.partitions)) {
      $dara.Model.validateArray(this.partitions);
    }
    if(Array.isArray(this.tableBlackList)) {
      $dara.Model.validateArray(this.tableBlackList);
    }
    if(this.tableMapping) {
      $dara.Model.validateMap(this.tableMapping);
    }
    if(Array.isArray(this.tableWhiteList)) {
      $dara.Model.validateArray(this.tableWhiteList);
    }
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The configuration of the migration job.
   */
  config?: GetMmsJobResponseBodyDataConfig;
  /**
   * @remarks
   * The creation time in the format of YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2024-12-17 15:44:17
   */
  createTime?: string;
  /**
   * @remarks
   * The source database ID.
   * 
   * @example
   * 23
   */
  dbId?: number;
  /**
   * @remarks
   * The destination MaxCompute project.
   * 
   * @example
   * mms_target
   */
  dstDbName?: string;
  /**
   * @remarks
   * The destination MaxCompute schema.
   * 
   * @example
   * default
   */
  dstSchemaName?: string;
  /**
   * @remarks
   * The expected migration completion time. A smaller eta value indicates a higher priority for the migration task.
   * 
   * @example
   * 2025-05-06
   */
  eta?: string;
  /**
   * @remarks
   * The migration job ID.
   * 
   * @example
   * 10
   */
  id?: number;
  /**
   * @remarks
   * The migration job name.
   * 
   * @example
   * migrate_db_1
   */
  name?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 2
   */
  sourceId?: number;
  /**
   * @remarks
   * The data source name.
   * 
   * @example
   * demo
   */
  sourceName?: string;
  /**
   * @remarks
   * The source database name.
   * 
   * @example
   * mms_test
   */
  srcDbName?: string;
  /**
   * @remarks
   * The source schema name in a three-level namespace.
   * 
   * @example
   * default
   */
  srcSchemaName?: string;
  /**
   * @remarks
   * The migration task status.
   * 
   * @example
   * DOING
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the job is stopped.
   * 
   * @example
   * false
   */
  stopped?: boolean;
  /**
   * @remarks
   * The number of completed migration tasks.
   * 
   * @example
   * 100
   */
  taskDone?: number;
  /**
   * @remarks
   * The number of migration tasks included.
   * 
   * @example
   * 100
   */
  taskNum?: number;
  /**
   * @remarks
   * The migration scope. Valid values: Database, Tables, Partitions.
   * 
   * @example
   * Tables
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      createTime: 'createTime',
      dbId: 'dbId',
      dstDbName: 'dstDbName',
      dstSchemaName: 'dstSchemaName',
      eta: 'eta',
      id: 'id',
      name: 'name',
      sourceId: 'sourceId',
      sourceName: 'sourceName',
      srcDbName: 'srcDbName',
      srcSchemaName: 'srcSchemaName',
      status: 'status',
      stopped: 'stopped',
      taskDone: 'taskDone',
      taskNum: 'taskNum',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: GetMmsJobResponseBodyDataConfig,
      createTime: 'string',
      dbId: 'number',
      dstDbName: 'string',
      dstSchemaName: 'string',
      eta: 'string',
      id: 'number',
      name: 'string',
      sourceId: 'number',
      sourceName: 'string',
      srcDbName: 'string',
      srcSchemaName: 'string',
      status: 'string',
      stopped: 'boolean',
      taskDone: 'number',
      taskNum: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMmsJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The migration job object.
   */
  data?: GetMmsJobResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9F872FD-5DDE-30A6-8C8A-1B8C6A81059F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMmsJobResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

