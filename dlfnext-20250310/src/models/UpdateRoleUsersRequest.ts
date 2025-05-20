// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRoleUsersRequest extends $dara.Model {
  /**
   * @example
   * acs:dlf::[accountId]:role/role_name
   */
  rolePrincipal?: string;
  userPrincipals?: string[];
  static names(): { [key: string]: string } {
    return {
      rolePrincipal: 'rolePrincipal',
      userPrincipals: 'userPrincipals',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rolePrincipal: 'string',
      userPrincipals: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userPrincipals)) {
      $dara.Model.validateArray(this.userPrincipals);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

