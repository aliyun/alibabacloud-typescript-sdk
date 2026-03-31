// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsJobsResponseBodyDataObjectListConfig extends $dara.Model {
  columnMapping?: { [key: string]: string };
  enableVerification?: boolean;
  increment?: boolean;
  others?: { [key: string]: any };
  partitionFilters?: { [key: string]: string };
  partitions?: number[];
  schemaOnly?: boolean;
  tableBlackList?: string[];
  tableMapping?: { [key: string]: string };
  tableWhiteList?: string[];
  tables?: string[];
  taskType?: string;
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
  config?: ListMmsJobsResponseBodyDataObjectListConfig;
  /**
   * @example
   * 2024-12-17 15:44:17
   */
  createTime?: string;
  /**
   * @example
   * 196
   */
  dbId?: number;
  /**
   * @example
   * mms_test
   */
  dstDbName?: string;
  /**
   * @example
   * test_table_1
   */
  dstSchemaName?: string;
  eta?: string;
  /**
   * @example
   * 18
   */
  id?: number;
  /**
   * @example
   * migrate_db_1
   */
  name?: string;
  /**
   * @example
   * 2000015
   */
  sourceId?: number;
  /**
   * @example
   * demo
   */
  sourceName?: string;
  /**
   * @example
   * test_db_1
   */
  srcDbName?: string;
  /**
   * @example
   * test_table_1
   */
  srcSchemaName?: string;
  /**
   * @example
   * DONE
   */
  status?: string;
  /**
   * @example
   * false
   */
  stopped?: boolean;
  /**
   * @example
   * 10
   */
  taskDone?: number;
  /**
   * @example
   * 10
   */
  taskNum?: number;
  /**
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
  objectList?: ListMmsJobsResponseBodyDataObjectList[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
  data?: ListMmsJobsResponseBodyData;
  /**
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

