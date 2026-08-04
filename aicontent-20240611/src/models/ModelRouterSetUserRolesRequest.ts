// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DepartmentRoleCmd } from "./DepartmentRoleCmd";


export class ModelRouterSetUserRolesRequest extends $dara.Model {
  /**
   * @remarks
   * The department role list (required, full overwrite).
   * 
   * @example
   * [{"clientId":1001,"roleCode":"member"},{"clientId":1002,"roleCode":"member"}]
   */
  departmentRoles?: DepartmentRoleCmd[];
  static names(): { [key: string]: string } {
    return {
      departmentRoles: 'departmentRoles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentRoles: { 'type': 'array', 'itemType': DepartmentRoleCmd },
    };
  }

  validate() {
    if(Array.isArray(this.departmentRoles)) {
      $dara.Model.validateArray(this.departmentRoles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

