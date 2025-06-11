// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTenantUsersResponseBodyTenantUsersDatabases extends $dara.Model {
  /**
   * @example
   * db_pay1
   */
  database?: string;
  privileges?: string;
  /**
   * @example
   * ReadOnly
   */
  role?: string;
  /**
   * @example
   * tbl_pay1
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      privileges: 'Privileges',
      role: 'Role',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      privileges: 'string',
      role: 'string',
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

