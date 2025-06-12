// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEntitiesForPolicyResponseBodyRolesRole } from "./ListEntitiesForPolicyResponseBodyRolesRole";


export class ListEntitiesForPolicyResponseBodyRoles extends $dara.Model {
  role?: ListEntitiesForPolicyResponseBodyRolesRole[];
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: { 'type': 'array', 'itemType': ListEntitiesForPolicyResponseBodyRolesRole },
    };
  }

  validate() {
    if(Array.isArray(this.role)) {
      $dara.Model.validateArray(this.role);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

