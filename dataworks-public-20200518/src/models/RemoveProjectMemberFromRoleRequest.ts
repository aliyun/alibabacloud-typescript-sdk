// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveProjectMemberFromRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DataWorks workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 27
   */
  projectId?: number;
  /**
   * @remarks
   * The role code of the DataWorks workspace. You can invoke the ListProjectRoles operation to obtain the list of role codes for a project.
   * The default preset roles are as follows:
   * 
   * - role_project_owner: Project owner.
   * - role_project_admin: Storage management administrator.
   * - role_project_dev: Developer.
   * - role_project_pe: O&M engineer.
   * - role_project_deploy: Deployment.
   * - role_project_guest: Visitor.
   * - role_project_security: Security administrator.
   * - role_project_tester: Experience user.
   * - role_project_erd: Model designer.
   * 
   * This parameter is required.
   * 
   * @example
   * role_project_guest
   */
  roleCode?: string;
  /**
   * @remarks
   * The ID of the user.
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

