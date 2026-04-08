// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMmsTimerResponseBodyDataConfig extends $dara.Model {
  columnMapping?: { [key: string]: string };
  enableDataMigration?: boolean;
  enableSchemaMigration?: boolean;
  /**
   * @example
   * true
   */
  enableVerification?: boolean;
  others?: { [key: string]: any };
  partitionFilters?: { [key: string]: string };
  partitions?: number[];
  tableBlackList?: string[];
  tableMapping?: { [key: string]: string };
  tableWhiteList?: string[];
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
  config?: GetMmsTimerResponseBodyDataConfig;
  /**
   * @example
   * 1730946421757
   */
  createTime?: string;
  /**
   * @example
   * 23
   */
  dbId?: number;
  /**
   * @example
   * 2523
   */
  id?: number;
  /**
   * @example
   * sale_detail
   */
  name?: string;
  /**
   * @example
   * Daily
   */
  scheduleType?: string;
  /**
   * @example
   * 2000017
   */
  sourceId?: number;
  /**
   * @example
   * mms_test
   */
  srcDbName?: string;
  /**
   * @example
   * false
   */
  stopped?: boolean;
  /**
   * @example
   * Daily, Hourly
   */
  type?: string;
  /**
   * @example
   * 2026-04-01T02:18:01Z
   */
  updateTime?: string;
  /**
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
  data?: GetMmsTimerResponseBodyData;
  /**
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

