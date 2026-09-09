// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMmsTimerRequest extends $dara.Model {
  /**
   * @remarks
   * A map of source column names to target column names.
   */
  columnMapping?: { [key: string]: string };
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
   * Specifies whether to migrate the table schema.
   * 
   * @example
   * true
   */
  enableSchemaMigration?: boolean;
  /**
   * @remarks
   * Specifies whether to enable data verification. If set to `true`, the system runs a `SELECT COUNT(*)` query on both the source and target tables and compares the row counts.
   * 
   * @example
   * false
   */
  enableVerification?: boolean;
  /**
   * @remarks
   * The name of the scheduled task.
   * 
   * @example
   * planA
   */
  name?: string;
  /**
   * @remarks
   * Other configuration settings.
   */
  others?: { [key: string]: any };
  /**
   * @remarks
   * A map of table names to their corresponding partition filter expressions.
   */
  partitionFilters?: { [key: string]: string };
  /**
   * @remarks
   * A list of IDs for the table partitions to migrate. This parameter takes effect only when the `type` parameter is set to `Partitions`.
   */
  partitions?: number[];
  /**
   * @remarks
   * The schedule type for the task.
   * 
   * @example
   * Daily
   */
  scheduleType?: string;
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
   * The name of the source database.
   * 
   * @example
   * src_db
   */
  srcDbName?: string;
  /**
   * @remarks
   * A blacklist of tables to exclude from the migration. This parameter takes effect only when the `type` parameter is set to `Database`.
   */
  tableBlackList?: string[];
  /**
   * @remarks
   * A map of source table names to target table names.
   */
  tableMapping?: { [key: string]: string };
  /**
   * @remarks
   * A whitelist of tables to migrate. This parameter takes effect only when the `type` parameter is set to `Database`. If omitted, all tables in the source database are migrated.
   */
  tableWhiteList?: string[];
  /**
   * @remarks
   * A list of table names to migrate. This parameter takes effect only when the `type` parameter is set to `Tables`.
   */
  tables?: string[];
  /**
   * @remarks
   * The time to run the scheduled task. If `scheduleType` is set to `Daily`, the value is the time in `HH:MM` format. If `scheduleType` is set to `Hourly`, the value is the minute of the hour (`MM`).
   * 
   * @example
   * 12:00
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      columnMapping: 'columnMapping',
      enableDataMigration: 'enableDataMigration',
      enableSchemaMigration: 'enableSchemaMigration',
      enableVerification: 'enableVerification',
      name: 'name',
      others: 'others',
      partitionFilters: 'partitionFilters',
      partitions: 'partitions',
      scheduleType: 'scheduleType',
      sourceId: 'sourceId',
      srcDbName: 'srcDbName',
      tableBlackList: 'tableBlackList',
      tableMapping: 'tableMapping',
      tableWhiteList: 'tableWhiteList',
      tables: 'tables',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnMapping: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      enableDataMigration: 'boolean',
      enableSchemaMigration: 'boolean',
      enableVerification: 'boolean',
      name: 'string',
      others: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      partitionFilters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      partitions: { 'type': 'array', 'itemType': 'number' },
      scheduleType: 'string',
      sourceId: 'number',
      srcDbName: 'string',
      tableBlackList: { 'type': 'array', 'itemType': 'string' },
      tableMapping: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      tableWhiteList: { 'type': 'array', 'itemType': 'string' },
      tables: { 'type': 'array', 'itemType': 'string' },
      value: 'string',
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

