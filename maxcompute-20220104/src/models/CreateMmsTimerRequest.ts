// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMmsTimerRequest extends $dara.Model {
  columnMapping?: { [key: string]: string };
  /**
   * @example
   * true
   */
  enableDataMigration?: boolean;
  /**
   * @example
   * true
   */
  enableSchemaMigration?: boolean;
  /**
   * @example
   * false
   */
  enableVerification?: boolean;
  /**
   * @example
   * planA
   */
  name?: string;
  others?: { [key: string]: any };
  partitionFilters?: { [key: string]: string };
  partitions?: number[];
  /**
   * @example
   * Daily
   */
  scheduleType?: string;
  /**
   * @example
   * 2000014
   */
  sourceId?: number;
  /**
   * @example
   * src_db
   */
  srcDbName?: string;
  tableBlackList?: string[];
  tableMapping?: { [key: string]: string };
  tableWhiteList?: string[];
  tables?: string[];
  /**
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

