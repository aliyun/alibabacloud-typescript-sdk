// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMmsJobRequest extends $dara.Model {
  columnMapping?: { [key: string]: string };
  dstDbName?: string;
  dstSchemaName?: string;
  enableVerification?: boolean;
  eta?: string;
  increment?: boolean;
  name?: string;
  others?: { [key: string]: any };
  partitionFilters?: { [key: string]: string };
  partitions?: number[];
  schemaOnly?: boolean;
  sourceId?: number;
  sourceName?: string;
  srcDbName?: string;
  srcSchemaName?: string;
  tableBlackList?: string[];
  tableMapping?: { [key: string]: string };
  tableWhiteList?: string[];
  tables?: string[];
  /**
   * @remarks
   * MOCK, HIVE: hive udtf task, HIVE_DATAX: hive datax task, COPY_TASK: odps Copy Task, ODPS_INSERT_OVERWRITE: odps simple insert overwrite task, MC2MC_VERIFY, OSS, HIVE_OSS
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      columnMapping: 'columnMapping',
      dstDbName: 'dstDbName',
      dstSchemaName: 'dstSchemaName',
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

