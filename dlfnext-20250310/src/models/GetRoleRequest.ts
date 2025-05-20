// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoleRequest extends $dara.Model {
  /**
   * @example
   * acs:dlf::[accountId]:role/role_name
   */
  rolePrincipal?: string;
  static names(): { [key: string]: string } {
    return {
      rolePrincipal: 'rolePrincipal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rolePrincipal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

