// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountAllPrivilegesResponseBodyDataResultPrivilegeObject extends $dara.Model {
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * id
   */
  column?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * tdb1
   */
  database?: string;
  /**
   * @remarks
   * The description of the permission object.
   * 
   * @example
   * id of table
   */
  description?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * table1
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      database: 'Database',
      description: 'Description',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
      database: 'string',
      description: 'string',
      table: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

