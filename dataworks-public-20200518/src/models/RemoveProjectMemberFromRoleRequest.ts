// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveProjectMemberFromRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 27
   */
  projectId?: number;
  /**
   * @remarks
   * The code of the role in the DataWorks workspace. You can call the ListProjectRoles operation to query the codes of all roles in a DataWorks workspace. Valid values:
   * 
   * *   role_project_owner: workspace owner
   * *   role_project_admin: workspace administrator
   * *   role_project_dev: developer
   * *   role_project_pe: O\\&M engineer
   * *   role_project_deploy: deployment expert
   * *   role_project_guest: visitor
   * *   role_project_security: security administrator
   * *   role_project_tester: experiencer
   * *   role_project_erd: model designer
   * 
   * This parameter is required.
   * 
   * @example
   * role_project_guest
   */
  roleCode?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      roleCode: 'RoleCode',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      roleCode: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

