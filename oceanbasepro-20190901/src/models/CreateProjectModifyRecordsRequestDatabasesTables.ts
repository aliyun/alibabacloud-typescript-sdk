// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateProjectModifyRecordsRequestDatabasesTablesAdbTableSchema } from "./CreateProjectModifyRecordsRequestDatabasesTablesAdbTableSchema";
import { CreateProjectModifyRecordsRequestDatabasesTablesObkvPartitionConfig } from "./CreateProjectModifyRecordsRequestDatabasesTablesObkvPartitionConfig";


export class CreateProjectModifyRecordsRequestDatabasesTables extends $dara.Model {
  adbTableSchema?: CreateProjectModifyRecordsRequestDatabasesTablesAdbTableSchema;
  filterColumns?: string[];
  /**
   * @example
   * table_id
   */
  id?: string;
  /**
   * @example
   * mapped_table
   */
  mappedName?: string;
  /**
   * @example
   * table_name
   */
  name?: string;
  obkvPartitionConfig?: CreateProjectModifyRecordsRequestDatabasesTablesObkvPartitionConfig;
  shardColumns?: string[];
  /**
   * @example
   * id<1
   */
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      adbTableSchema: 'AdbTableSchema',
      filterColumns: 'FilterColumns',
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      obkvPartitionConfig: 'ObkvPartitionConfig',
      shardColumns: 'ShardColumns',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbTableSchema: CreateProjectModifyRecordsRequestDatabasesTablesAdbTableSchema,
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      mappedName: 'string',
      name: 'string',
      obkvPartitionConfig: CreateProjectModifyRecordsRequestDatabasesTablesObkvPartitionConfig,
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      whereClause: 'string',
    };
  }

  validate() {
    if(this.adbTableSchema && typeof (this.adbTableSchema as any).validate === 'function') {
      (this.adbTableSchema as any).validate();
    }
    if(Array.isArray(this.filterColumns)) {
      $dara.Model.validateArray(this.filterColumns);
    }
    if(this.obkvPartitionConfig && typeof (this.obkvPartitionConfig as any).validate === 'function') {
      (this.obkvPartitionConfig as any).validate();
    }
    if(Array.isArray(this.shardColumns)) {
      $dara.Model.validateArray(this.shardColumns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

