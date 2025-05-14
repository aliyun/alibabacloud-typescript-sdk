// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CheckServiceRoleResponseBodyRoles } from "./CheckServiceRoleResponseBodyRoles";


export class CheckServiceRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The check results.
   */
  roles?: CheckServiceRoleResponseBodyRoles[];
  static names(): { [key: string]: string } {
    return {
      roles: 'roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roles: { 'type': 'array', 'itemType': CheckServiceRoleResponseBodyRoles },
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

