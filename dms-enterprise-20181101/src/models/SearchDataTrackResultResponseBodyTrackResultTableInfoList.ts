// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchDataTrackResultResponseBodyTrackResultTableInfoListColumns } from "./SearchDataTrackResultResponseBodyTrackResultTableInfoListColumns";


export class SearchDataTrackResultResponseBodyTrackResultTableInfoList extends $dara.Model {
  /**
   * @remarks
   * The information about columns.
   */
  columns?: SearchDataTrackResultResponseBodyTrackResultTableInfoListColumns[];
  /**
   * @remarks
   * The description of the column.
   * 
   * @example
   * auto-description
   */
  description?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * prod_eb_vas
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * import_table_test1
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      description: 'Description',
      schemaName: 'SchemaName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': SearchDataTrackResultResponseBodyTrackResultTableInfoListColumns },
      description: 'string',
      schemaName: 'string',
      tableName: 'string',
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

