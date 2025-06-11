// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfoTablesBlack extends $dara.Model {
  /**
   * @example
   * table_name
   */
  name?: string;
  /**
   * @example
   * schema_name
   */
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      schema: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

