// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTenantUserResponseBodyTenantUserRoles extends $dara.Model {
  /**
   * @example
   * db_pay1
   */
  database?: string;
  /**
   * @example
   * ReadOnly
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

