// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccountPrivilegesRequestAccountPrivilegesPrivilegeObject extends $dara.Model {
  /**
   * @remarks
   * The columns on which you want to grant permissions. This parameter must be specified when the PrivilegeType parameter is set to Column.
   * 
   * @example
   * column1
   */
  column?: string;
  /**
   * @remarks
   * The databases on which you want to grant permissions. This parameter must be specified when the PrivilegeType parameter is set to Database, Table, or Column.
   * 
   * @example
   * tsdb1
   */
  database?: string;
  /**
   * @remarks
   * The tables on which you want to grant permissions. This parameter must be specified when the PrivilegeType parameter is set to Table or Column.
   * 
   * @example
   * table1
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      database: 'Database',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
      database: 'string',
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

