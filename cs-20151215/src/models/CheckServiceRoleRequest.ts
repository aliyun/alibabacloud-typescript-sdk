// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CheckServiceRoleRequestRoles } from "./CheckServiceRoleRequestRoles";


export class CheckServiceRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The list of service roles you want to check.
   * 
   * This parameter is required.
   */
  roles?: CheckServiceRoleRequestRoles[];
  static names(): { [key: string]: string } {
    return {
      roles: 'roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roles: { 'type': 'array', 'itemType': CheckServiceRoleRequestRoles },
    };
  }

  validate() {
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

