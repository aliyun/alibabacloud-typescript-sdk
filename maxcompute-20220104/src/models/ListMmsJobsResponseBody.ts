// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsJobsResponseBodyDataObjectListConfig extends $dara.Model {
  /**
   * @remarks
   * The mapping from source column names to destination column names.
   */
  columnMapping?: { [key: string]: string };
  /**
   * @remarks
   * Enable verification. The current method runs SELECT COUNT on both the source and destination and compares the row counts.
   * 
   * @example
   * true
   */
  enableVerification?: boolean;
  /**
   * @remarks
   * Enable incremental migration. Only new or modified partitions are migrated. Modified partitions are re-migrated.
   * 
   * @example
   * true
   */
  increment?: boolean;
  /**
   * @remarks
   * Other configuration settings.
   * 
   * @example
   * {"spark.executor.mem": "2g"}
   */
  others?: { [key: string]: any };
  /**
   * @remarks
   * The partition filter expression. Specify the partition filter expression for each table.
   */
  partitionFilters?: { [key: string]: string };
  /**
   * @remarks
   * When type is set to Partitions, specify the partition IDs of the tables to migrate.
   */
  partitions?: number[];
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * false
   */
  schemaOnly?: boolean;
  /**
   * @remarks
   * When type is set to Database, specify the tables to exclude from migration.
   */
  tableBlackList?: string[];
  /**
   * @remarks
   * The mapping from source table names to destination table names.
   */
  tableMapping?: { [key: string]: string };
  /**
   * @remarks
   * When type is set to Database, specify the tables to migrate. If you do not specify tableWhiteList, all tables in the specified database are migrated.
   */
  tableWhiteList?: string[];
  /**
   * @remarks
   * When type is set to Tables, specify the names of the tables to migrate.
   */
  tables?: string[];
  /**
   * @remarks
   * Deprecated. Valid values: MOCK, HIVE (hive udtf task), HIVE_DATAX (hive datax task), COPY_TASK (ODPS Copy Task), ODPS_INSERT_OVERWRITE (ODPS simple insert overwrite task), MC2MC_VERIFY, OSS, HIVE_OSS, HIVE_SPARK, and BIGQUERY.
   * 
   * @example
   * BIGQUERY
   */
  taskType?: string;
  /**
   * @remarks
   * Deprecated.
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

export class ListMmsJobsResponseBodyDataObjectList extends $dara.Model {
  /**
   * @remarks
   * The configuration of the migration job.
   */
  config?: ListMmsJobsResponseBodyDataObjectListConfig;
  /**
   * @remarks
   * Indicates whether the migration job is stopped.
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
   * 196
   */
  dbId?: number;
  /**
   * @remarks
   * The destination MaxCompute project.
   * 
   * @example
   * mms_test
   */
  dstDbName?: string;
  /**
   * @remarks
   * The destination MaxCompute schema.
   * 
   * @example
   * test_table_1
   */
  dstSchemaName?: string;
  /**
   * @remarks
   * The estimated completion time of the migration. A smaller eta value increases the priority of the migration job.
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
   * 18
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
   * 2000015
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
   * test_db_1
   */
  srcDbName?: string;
  /**
   * @remarks
   * The source schema name. This is the schema in a Layer 3 namespace.
   * 
   * @example
   * test_table_1
   */
  srcSchemaName?: string;
  /**
   * @remarks
   * The status of the migration job.
   * 
   * @example
   * DONE
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the migration job is stopped.
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
   * 10
   */
  taskDone?: number;
  /**
   * @remarks
   * The number of migration tasks in the job.
   * 
   * @example
   * 10
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
      config: ListMmsJobsResponseBodyDataObjectListConfig,
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

export class ListMmsJobsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of migration jobs.
   */
  objectList?: ListMmsJobsResponseBodyDataObjectList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      objectList: 'objectList',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectList: { 'type': 'array', 'itemType': ListMmsJobsResponseBodyDataObjectList },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.objectList)) {
      $dara.Model.validateArray(this.objectList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the returned data.
   */
  data?: ListMmsJobsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1112E7C7-C65F-57A2-A7C7-3B178AA257B6
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
      data: ListMmsJobsResponseBodyData,
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

