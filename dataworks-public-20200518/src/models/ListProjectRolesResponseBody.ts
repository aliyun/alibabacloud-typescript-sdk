// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectRolesResponseBodyProjectRoleList extends $dara.Model {
  /**
   * @remarks
   * The code of the workspace role.
   * 
   * @example
   * role_project_guest
   */
  projectRoleCode?: string;
  /**
   * @remarks
   * The ID of the workspace role.
   * 
   * @example
   * 1
   */
  projectRoleId?: number;
  /**
   * @remarks
   * The name of the workspace role.
   * 
   * @example
   * Visitor
   */
  projectRoleName?: string;
  /**
   * @remarks
   * The type of the workspace role.
   * 
   * @example
   * 0
   */
  projectRoleType?: string;
  static names(): { [key: string]: string } {
    return {
      projectRoleCode: 'ProjectRoleCode',
      projectRoleId: 'ProjectRoleId',
      projectRoleName: 'ProjectRoleName',
      projectRoleType: 'ProjectRoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectRoleCode: 'string',
      projectRoleId: 'number',
      projectRoleName: 'string',
      projectRoleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectRolesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of roles in the workspace.
   */
  projectRoleList?: ListProjectRolesResponseBodyProjectRoleList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AFAE64E-D1BE-432B-A9****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      projectRoleList: 'ProjectRoleList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectRoleList: { 'type': 'array', 'itemType': ListProjectRolesResponseBodyProjectRoleList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.projectRoleList)) {
      $dara.Model.validateArray(this.projectRoleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

