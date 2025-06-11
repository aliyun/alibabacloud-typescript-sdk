// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProjectModifyRecordsResponseBodyDataDatabasesSpecificViewsAdbTableSchema } from "./ListProjectModifyRecordsResponseBodyDataDatabasesSpecificViewsAdbTableSchema";
import { ListProjectModifyRecordsResponseBodyDataDatabasesSpecificViewsColumns } from "./ListProjectModifyRecordsResponseBodyDataDatabasesSpecificViewsColumns";


export class ListProjectModifyRecordsResponseBodyDataDatabasesSpecificViews extends $dara.Model {
  adbTableSchema?: ListProjectModifyRecordsResponseBodyDataDatabasesSpecificViewsAdbTableSchema;
  columns?: ListProjectModifyRecordsResponseBodyDataDatabasesSpecificViewsColumns[];
  filterColumns?: string[];
  /**
   * @example
   * table_id
   */
  id?: string;
  /**
   * @example
   * mapped_name
   */
  mappedName?: string;
  /**
   * @example
   * table_name
   */
  name?: string;
  shardColumns?: string[];
  /**
   * @example
   * id < 1
   */
  whereClause?: string;
  static names(): { [key: string]: string } {
    return {
      adbTableSchema: 'AdbTableSchema',
      columns: 'Columns',
      filterColumns: 'FilterColumns',
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      shardColumns: 'ShardColumns',
      whereClause: 'WhereClause',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adbTableSchema: ListProjectModifyRecordsResponseBodyDataDatabasesSpecificViewsAdbTableSchema,
      columns: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataDatabasesSpecificViewsColumns },
      filterColumns: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      mappedName: 'string',
      name: 'string',
      shardColumns: { 'type': 'array', 'itemType': 'string' },
      whereClause: 'string',
    };
  }

  validate() {
    if(this.adbTableSchema && typeof (this.adbTableSchema as any).validate === 'function') {
      (this.adbTableSchema as any).validate();
    }
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.filterColumns)) {
      $dara.Model.validateArray(this.filterColumns);
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

