// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthorizationResource } from "./AuthorizationResource";


export class RoleGrantCmd extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  accountId?: string;
  authorizationResourceList?: AuthorizationResource[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      authorizationResourceList: 'authorizationResourceList',
      roleId: 'roleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      authorizationResourceList: { 'type': 'array', 'itemType': AuthorizationResource },
      roleId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.authorizationResourceList)) {
      $dara.Model.validateArray(this.authorizationResourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

