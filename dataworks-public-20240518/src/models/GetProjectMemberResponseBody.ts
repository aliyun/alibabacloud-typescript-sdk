// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectMemberResponseBodyProjectMemberRoles extends $dara.Model {
  /**
   * @remarks
   * The code of the workspace role. Built-in workspace roles in DataWorks:
   * - role_project_admin: workspace administrator
   * - role_project_dev: developer
   * - role_project_dg_admin: data governance administrator
   * - role_project_guest: guest
   * - role_project_security: security administrator
   * - role_project_deploy: deployer
   * - role_project_owner: workspace owner
   * - role_project_data_analyst: data analyst
   * - role_project_pe: operator
   * - role_project_erd: model designer
   * 
   * @example
   * role_project_guest
   */
  code?: string;
  /**
   * @remarks
   * The name of the workspace role.
   * 
   * @example
   * Visitors
   */
  name?: string;
  /**
   * @remarks
   * The type of the workspace role. Valid values:
   * - UserCustom: custom role
   * - System: system role
   * 
   * @example
   * System
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectMemberResponseBodyProjectMember extends $dara.Model {
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * 88757
   */
  projectId?: number;
  /**
   * @remarks
   * The list of workspace roles assigned to the workspace member.
   */
  roles?: GetProjectMemberResponseBodyProjectMemberRoles[];
  /**
   * @remarks
   * The status of the workspace member. Valid values:
   * - Normal: The member is normal.
   * - Forbidden: The member is disabled.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The ID of the DataWorks account.
   * 
   * @example
   * 123422344899
   */
  userId?: string;
  /**
   * @remarks
   * The cloud account name of the member.
   * 
   * @example
   * liusan
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      roles: 'Roles',
      status: 'Status',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      roles: { 'type': 'array', 'itemType': GetProjectMemberResponseBodyProjectMemberRoles },
      status: 'string',
      userId: 'string',
      userName: 'string',
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

export class GetProjectMemberResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the workspace member.
   */
  projectMember?: GetProjectMemberResponseBodyProjectMember;
  /**
   * @remarks
   * The request ID. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 8abcb91f-d266-4073-b907-2ed670378ed1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      projectMember: 'ProjectMember',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectMember: GetProjectMemberResponseBodyProjectMember,
      requestId: 'string',
    };
  }

  validate() {
    if(this.projectMember && typeof (this.projectMember as any).validate === 'function') {
      (this.projectMember as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

