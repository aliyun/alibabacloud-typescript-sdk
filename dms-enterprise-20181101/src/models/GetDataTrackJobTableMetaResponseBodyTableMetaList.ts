// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataTrackJobTableMetaResponseBodyTableMetaListColumns } from "./GetDataTrackJobTableMetaResponseBodyTableMetaListColumns";


export class GetDataTrackJobTableMetaResponseBodyTableMetaList extends $dara.Model {
  /**
   * @remarks
   * The information about columns.
   */
  columns?: GetDataTrackJobTableMetaResponseBodyTableMetaListColumns[];
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * DB165
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * live_stat
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      schemaName: 'SchemaName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': GetDataTrackJobTableMetaResponseBodyTableMetaListColumns },
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

