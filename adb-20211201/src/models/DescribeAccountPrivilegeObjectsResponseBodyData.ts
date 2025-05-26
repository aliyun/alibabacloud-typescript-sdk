// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountPrivilegeObjectsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the column. This parameter is returned when PrivilegeType is set to Column.
   * 
   * @example
   * column1
   */
  column?: string;
  /**
   * @remarks
   * The name of the database. This parameter is returned when PrivilegeType is set to Database, Table, or Column.
   * 
   * @example
   * tdb1
   */
  database?: string;
  /**
   * @remarks
   * The description that is specified when you create a table or column. This parameter is returned only when PrivilegeType is set to Database or Table, indicating the database description or table description.
   * 
   * @example
   * a test db
   */
  description?: string;
  /**
   * @remarks
   * The name of the table. This parameter is returned when PrivilegeType is set to Table or Column.
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

