// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMmsJobResponseBodyDataConfig extends $dara.Model {
  /**
   * @remarks
   * {Source column name: Destination column name}
   */
  columnMapping?: { [key: string]: string };
  /**
   * @remarks
   * Enables data verification. The current verification method is to execute a SELECT COUNT statement on the source and destination to compare the row counts.
   * 
   * @example
   * true
   */
  enableVerification?: boolean;
  /**
   * @remarks
   * Incremental migration. Only new or modified partitions are migrated. Note: Modified partitions are re-migrated.
   * 
   * @example
   * true
   */
  increment?: boolean;
  /**
   * @remarks
   * Other configuration information.
   * 
   * @example
   * {"spark.executor.mem": "2g"}
   */
  others?: { [key: string]: any };
  /**
   * @remarks
   * The partition filter expression. This parameter specifies the partition filter expression for a specific table.
   */
  partitionFilters?: { [key: string]: string };
  /**
   * @remarks
   * If type is set to Partitions, this parameter specifies the list of partition IDs of the table to migrate.
   */
  partitions?: number[];
  /**
   * @remarks
   * Deprecated
   * 
   * @example
   * false
   */
  schemaOnly?: boolean;
  /**
   * @remarks
   * If type is set to Database, this parameter specifies the tables to exclude from the migration.
   */
  tableBlackList?: string[];
  /**
   * @remarks
   * The mapping from source table names to destination table names.
   */
  tableMapping?: { [key: string]: string };
  /**
   * @remarks
   * If type is set to Database, this parameter specifies the list of tables to migrate. If you do not specify this parameter, all tables in the database are migrated.
   */
  tableWhiteList?: string[];
  /**
   * @remarks
   * If type is set to Tables, this parameter specifies the list of names of the tables to migrate.
   */
  tables?: string[];
  /**
   * @remarks
   * Deprecated. Valid values: MOCK, HIVE (a Hive user-defined table-valued function (UDTF) task), HIVE_DATAX (a Hive DataX task), COPY_TASK (an ODPS Copy Task), ODPS_INSERT_OVERWRITE (an ODPS simple insert overwrite task), MC2MC_VERIFY, OSS, HIVE_OSS, HIVE_SPARK, and BIGQUERY.
   * 
   * @example
   * BIGQUERY
   */
  taskType?: string;
  /**
   * @remarks
   * Deprecated
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
   * The time when the job was created.
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
   * The expected completion time of the migration. Note: A smaller eta value indicates a higher priority for the migration task.
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
   * The name of the migration job.
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
   * The name of the data source.
   * 
   * @example
   * demo
   */
  sourceName?: string;
  /**
   * @remarks
   * The name of the source database.
   * 
   * @example
   * mms_test
   */
  srcDbName?: string;
  /**
   * @remarks
   * The name of the source schema. This parameter specifies the schema in a Layer 3 namespace.
   * 
   * @example
   * default
   */
  srcSchemaName?: string;
  /**
   * @remarks
   * The status of the migration task.
   * 
   * @example
   * DOING
   */
  status?: string;
  /**
   * @remarks
   * Stopped.
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
   * The number of migration tasks included in the job.
   * 
   * @example
   * 100
   */
  taskNum?: number;
  /**
   * @remarks
   * The migration scope. Valid values: Database, Tables, and Partitions.
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

