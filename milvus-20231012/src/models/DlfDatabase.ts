// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DlfDatabase extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * my_database
   */
  databaseName?: string;
  /**
   * @remarks
   * The description of the database.
   * 
   * @example
   * Test database
   */
  description?: string;
  /**
   * @remarks
   * The number of tables in the database. Read-only.
   * 
   * @example
   * 10
   */
  tableCount?: number;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'databaseName',
      description: 'description',
      tableCount: 'tableCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      description: 'string',
      tableCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

