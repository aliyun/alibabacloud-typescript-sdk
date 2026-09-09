// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMmsTimerResponseBodyDataConfig extends $dara.Model {
  /**
   * @remarks
   * A map of source column names to destination column names.
   */
  columnMapping?: { [key: string]: string };
  /**
   * @remarks
   * Whether to migrate table data.
   */
  enableDataMigration?: boolean;
  /**
   * @remarks
   * Whether to migrate the table schema.
   */
  enableSchemaMigration?: boolean;
  /**
   * @remarks
   * Whether to enable verification. The system performs verification by running a `SELECT COUNT(*)` query on both the source and destination to compare the row count.
   * 
   * @example
   * true
   */
  enableVerification?: boolean;
  /**
   * @remarks
   * Other configurations.
   */
  others?: { [key: string]: any };
  /**
   * @remarks
   * A map of table names to their corresponding partition filter expressions.
   */
  partitionFilters?: { [key: string]: string };
  /**
   * @remarks
   * If `type` is set to `Partitions`, this parameter specifies a list of partition IDs to migrate.
   */
  partitions?: number[];
  /**
   * @remarks
   * If `type` is set to `Database`, this parameter specifies a table deny list. Tables on this list are excluded from the migration.
   */
  tableBlackList?: string[];
  /**
   * @remarks
   * A map of source table names to destination table names.
   */
  tableMapping?: { [key: string]: string };
  /**
   * @remarks
   * If `type` is set to `Database`, this parameter specifies a table allowlist. If this parameter is not specified, all tables in the database are migrated.
   */
  tableWhiteList?: string[];
  /**
   * @remarks
   * If `type` is set to `Tables`, this parameter specifies a list of table names to migrate.
   */
  tables?: string[];
  static names(): { [key: string]: string } {
    return {
      columnMapping: 'columnMapping',
      enableDataMigration: 'enableDataMigration',
      enableSchemaMigration: 'enableSchemaMigration',
      enableVerification: 'enableVerification',
      others: 'others',
      partitionFilters: 'partitionFilters',
      partitions: 'partitions',
      tableBlackList: 'tableBlackList',
      tableMapping: 'tableMapping',
      tableWhiteList: 'tableWhiteList',
      tables: 'tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnMapping: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      enableDataMigration: 'boolean',
      enableSchemaMigration: 'boolean',
      enableVerification: 'boolean',
      others: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      partitionFilters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      partitions: { 'type': 'array', 'itemType': 'number' },
      tableBlackList: { 'type': 'array', 'itemType': 'string' },
      tableMapping: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      tableWhiteList: { 'type': 'array', 'itemType': 'string' },
      tables: { 'type': 'array', 'itemType': 'string' },
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

export class GetMmsTimerResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The configuration of the migration job.
   */
  config?: GetMmsTimerResponseBodyDataConfig;
  /**
   * @remarks
   * The creation time of the scheduled task. This is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1730946421757
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the source database.
   * 
   * @example
   * 23
   */
  dbId?: number;
  /**
   * @remarks
   * The ID of the scheduled task.
   * 
   * @example
   * 2523
   */
  id?: number;
  /**
   * @remarks
   * The name of the scheduled task.
   * 
   * @example
   * sale_detail
   */
  name?: string;
  /**
   * @remarks
   * The scheduling type of the scheduled task. Valid values: `Daily` and `Hourly`.
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
   * 2000017
   */
  sourceId?: number;
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
   * Indicates whether the scheduled task is stopped.
   * 
   * @example
   * false
   */
  stopped?: boolean;
  /**
   * @remarks
   * The type of the scheduled task.
   * 
   * @example
   * Daily, Hourly
   */
  type?: string;
  /**
   * @remarks
   * The last update time of the scheduled task, in ISO 8601 format.
   * 
   * @example
   * 2026-04-01T02:18:01Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The scheduling time. If `scheduleType` is `Daily`, the value is in the `HH:MM` format. If `scheduleType` is `Hourly`, the value is in the `MM` format.
   * 
   * @example
   * p1=1/p2=abc
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      createTime: 'createTime',
      dbId: 'dbId',
      id: 'id',
      name: 'name',
      scheduleType: 'scheduleType',
      sourceId: 'sourceId',
      srcDbName: 'srcDbName',
      stopped: 'stopped',
      type: 'type',
      updateTime: 'updateTime',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: GetMmsTimerResponseBodyDataConfig,
      createTime: 'string',
      dbId: 'number',
      id: 'number',
      name: 'string',
      scheduleType: 'string',
      sourceId: 'number',
      srcDbName: 'string',
      stopped: 'boolean',
      type: 'string',
      updateTime: 'string',
      value: 'string',
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

export class GetMmsTimerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetMmsTimerResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0a06dfe716674588654372173ec0da
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
      data: GetMmsTimerResponseBodyData,
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

