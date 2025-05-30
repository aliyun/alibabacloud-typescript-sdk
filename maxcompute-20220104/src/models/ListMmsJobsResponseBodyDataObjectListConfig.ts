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

