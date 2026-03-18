// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMmsFetchMetadataJobRequest extends $dara.Model {
  /**
   * @remarks
   * Updates metadata for the specified source database, schema, or dataset.
   * 
   * @example
   * default
   */
  dbName?: string;
  /**
   * @remarks
   * Updates metadata for the specified source tables.
   */
  tableNames?: string[];
  static names(): { [key: string]: string } {
    return {
      dbName: 'dbName',
      tableNames: 'tableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      tableNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tableNames)) {
      $dara.Model.validateArray(this.tableNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

