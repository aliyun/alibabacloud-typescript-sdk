// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRolesResponseBodyDataRoles } from "./ListRolesResponseBodyDataRoles";


export class ListRolesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The MaxCompute project-level roles.
   */
  roles?: ListRolesResponseBodyDataRoles[];
  static names(): { [key: string]: string } {
    return {
      roles: 'roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roles: { 'type': 'array', 'itemType': ListRolesResponseBodyDataRoles },
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

