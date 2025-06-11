// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataExtraInfoSubDbsValueTablesColumns } from "./DataExtraInfoSubDbsValueTablesColumns";


export class DataExtraInfoSubDbsValueTables extends $dara.Model {
  /**
   * @example
   * fexg***
   */
  tableId?: string;
  /**
   * @example
   * db_name
   */
  database?: string;
  /**
   * @example
   * table_name
   */
  tableName?: string;
  /**
   * @example
   * mapped_table
   */
  mappingTableName?: string;
  /**
   * @example
   * g_i4kat***
   */
  instance?: string;
  columns?: DataExtraInfoSubDbsValueTablesColumns[];
  static names(): { [key: string]: string } {
    return {
      tableId: 'TableId',
      database: 'Database',
      tableName: 'TableName',
      mappingTableName: 'MappingTableName',
      instance: 'Instance',
      columns: 'Columns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableId: 'string',
      database: 'string',
      tableName: 'string',
      mappingTableName: 'string',
      instance: 'string',
      columns: { 'type': 'array', 'itemType': DataExtraInfoSubDbsValueTablesColumns },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

