// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProjectModifyRecordsResponseBodyDataDatabasesViewsAdbTableSchema } from "./ListProjectModifyRecordsResponseBodyDataDatabasesViewsAdbTableSchema";
import { ListProjectModifyRecordsResponseBodyDataDatabasesViewsColumns } from "./ListProjectModifyRecordsResponseBodyDataDatabasesViewsColumns";


export class ListProjectModifyRecordsResponseBodyDataDatabasesViews extends $dara.Model {
  adbTableSchema?: ListProjectModifyRecordsResponseBodyDataDatabasesViewsAdbTableSchema;
  columns?: ListProjectModifyRecordsResponseBodyDataDatabasesViewsColumns[];
  filterColumns?: string[];
  /**
   * @example
   * table_id
   */
  id?: string;
  /**
   * @example
   * mapped_view
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
   * id<1
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
      adbTableSchema: ListProjectModifyRecordsResponseBodyDataDatabasesViewsAdbTableSchema,
      columns: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataDatabasesViewsColumns },
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

