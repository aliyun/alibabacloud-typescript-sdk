// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateProjectRequestTransferMappingDatabasesTablesAdbTableSchema } from "./CreateProjectRequestTransferMappingDatabasesTablesAdbTableSchema";
import { CreateProjectRequestTransferMappingDatabasesTablesObkvPartitionConfig } from "./CreateProjectRequestTransferMappingDatabasesTablesObkvPartitionConfig";


export class CreateProjectRequestTransferMappingDatabasesTables extends $dara.Model {
  adbTableSchema?: CreateProjectRequestTransferMappingDatabasesTablesAdbTableSchema;
  filterColumns?: string[];
  /**
   * @example
   * e_4l085bu7***
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
  obkvPartitionConfig?: CreateProjectRequestTransferMappingDatabasesTablesObkvPartitionConfig;
  shardColumns?: string[];
  /**
   * @example
   * id > 1
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
      adbTableSchema: CreateProjectRequestTransferMappingDatabasesTablesAdbTableSchema,
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      mappedName: 'string',
      name: 'string',
      obkvPartitionConfig: CreateProjectRequestTransferMappingDatabasesTablesObkvPartitionConfig,
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

