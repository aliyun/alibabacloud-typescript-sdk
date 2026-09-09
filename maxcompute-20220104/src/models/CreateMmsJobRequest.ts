// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMmsJobRequest extends $dara.Model {
  /**
   * @remarks
   * {Source column name: Destination column name}
   */
  columnMapping?: { [key: string]: string };
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
   * default
   */
  dstSchemaName?: string;
  /**
   * @remarks
   * Specifies whether to migrate table data.
   * 
   * @example
   * true
   */
  enableDataMigration?: boolean;
  /**
   * @remarks
   * Specifies whether to migrate table schemas.
   * 
   * @example
   * true
   */
  enableSchemaMigration?: boolean;
  /**
   * @remarks
   * Specifies whether to enable data verification. The current verification method is to execute SELECT COUNT(\\*) on the source and destination to compare the number of rows.
   * 
   * @example
   * false
   */
  enableVerification?: boolean;
  /**
   * @remarks
   * The expected completion time of the migration. Note: A smaller eta value gives the migration task higher priority.
   * 
   * @example
   * 2025-02-04
   */
  eta?: string;
  /**
   * @remarks
   * Specifies whether to perform an incremental migration. In an incremental migration, only new or changed partitions are migrated. Note that changed partitions are re-migrated.
   * 
   * @example
   * true
   */
  increment?: boolean;
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
   * Other configuration information.
   */
  others?: { [key: string]: any };
  /**
   * @remarks
   * {Table name: Partition filter expression}
   */
  partitionFilters?: { [key: string]: string };
  /**
   * @remarks
   * The list of partition IDs.
   */
  partitions?: number[];
  /**
   * @remarks
   * Specifies whether to migrate only metadata.
   * 
   * @example
   * false
   */
  schemaOnly?: boolean;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * 2000014
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
   * src_db
   */
  srcDbName?: string;
  /**
   * @remarks
   * The name of the source schema. This is the schema in a Layer 3 namespace.
   * 
   * @example
   * default
   */
  srcSchemaName?: string;
  /**
   * @remarks
   * The blacklist of tables.
   */
  tableBlackList?: string[];
  /**
   * @remarks
   * {Source table: Destination table}
   */
  tableMapping?: { [key: string]: string };
  /**
   * @remarks
   * The whitelist of tables. Note: If you configure both a whitelist and a blacklist, only the blacklist takes effect.
   */
  tableWhiteList?: string[];
  /**
   * @remarks
   * The list of table names.
   */
  tables?: string[];
  /**
   * @remarks
   * The type of the migration task.
   * 
   * @example
   * BIGQUERY
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      columnMapping: 'columnMapping',
      dstDbName: 'dstDbName',
      dstSchemaName: 'dstSchemaName',
      enableDataMigration: 'enableDataMigration',
      enableSchemaMigration: 'enableSchemaMigration',
      enableVerification: 'enableVerification',
      eta: 'eta',
      increment: 'increment',
      name: 'name',
      others: 'others',
      partitionFilters: 'partitionFilters',
      partitions: 'partitions',
      schemaOnly: 'schemaOnly',
      sourceId: 'sourceId',
      sourceName: 'sourceName',
      srcDbName: 'srcDbName',
      srcSchemaName: 'srcSchemaName',
      tableBlackList: 'tableBlackList',
      tableMapping: 'tableMapping',
      tableWhiteList: 'tableWhiteList',
      tables: 'tables',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnMapping: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      dstDbName: 'string',
      dstSchemaName: 'string',
      enableDataMigration: 'boolean',
      enableSchemaMigration: 'boolean',
      enableVerification: 'boolean',
      eta: 'string',
      increment: 'boolean',
      name: 'string',
      others: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      partitionFilters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      partitions: { 'type': 'array', 'itemType': 'number' },
      schemaOnly: 'boolean',
      sourceId: 'number',
      sourceName: 'string',
      srcDbName: 'string',
      srcSchemaName: 'string',
      tableBlackList: { 'type': 'array', 'itemType': 'string' },
      tableMapping: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      tableWhiteList: { 'type': 'array', 'itemType': 'string' },
      tables: { 'type': 'array', 'itemType': 'string' },
      taskType: 'string',
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

