// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Identifier extends $dara.Model {
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * database_name
   */
  database?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * table_name
   */
  object?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'database',
      object: 'object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      object: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

