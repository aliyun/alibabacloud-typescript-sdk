// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMmsTimerRequest extends $dara.Model {
  /**
   * @remarks
   * The mapping between source and destination column names in the {source column name: destination column name} format.
   */
  columnMapping?: { [key: string]: string };
  /**
   * @remarks
   * Specifies whether to migrate the table data.
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
   * Specifies whether to enable verification. Currently, the verification method executes SELECT COUNT on the source and destination to compare the number of rows.
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
   * Other configuration information.
   */
  others?: { [key: string]: any };
  /**
   * @remarks
   * The partition filter expression. Configure the partition filter expression for the specified table.
   */
  partitionFilters?: { [key: string]: string };
  /**
   * @remarks
   * The list of partition IDs for the tables to be migrated. Specify this parameter when type is set to Partitions.
   */
  partitions?: number[];
  /**
   * @remarks
   * The schedule type of the scheduled task. Valid values: Daily (runs daily) and Hourly (runs hourly).
   * 
   * @example
   * Daily
   */
  scheduleType?: string;
  /**
   * @remarks
   * The data source ID.
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
   * The list of tables to exclude from migration. Specify this parameter when type is set to Database.
   */
  tableBlackList?: string[];
  /**
   * @remarks
   * The mapping between the source table name and the destination table name.
   */
  tableMapping?: { [key: string]: string };
  /**
   * @remarks
   * The list of tables to migrate. Specify this parameter when type is set to Database. If this parameter is not specified, all tables in the corresponding database are migrated.
   */
  tableWhiteList?: string[];
  /**
   * @remarks
   * The list of names of the tables to be migrated. Specify this parameter when type is set to Tables.
   */
  tables?: string[];
  /**
   * @remarks
   * The schedule time of the scheduled task. When scheduleType is set to Daily, the value is in the HH:MM format. When scheduleType is set to Hourly, the value is in the MM format.
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

