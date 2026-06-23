// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectMemberResponseBodyProjectMemberRoles extends $dara.Model {
  /**
   * @remarks
   * The code of the Workspace role.
   * 
   * The built-in system roles in a DataWorks Workspace include:
   * 
   * - role_project_admin: Workspace Administrator
   * 
   * - role_project_dev: Developer
   * 
   * - role_project_dg_admin: Data Governance Administrator
   * 
   * - role_project_guest: Guest
   * 
   * - role_project_security: Security Administrator
   * 
   * - role_project_deploy: Deployment
   * 
   * - role_project_owner: Workspace Owner
   * 
   * - role_project_data_analyst: Data Analyst
   * 
   * - role_project_pe: O\\&M (Operations & Maintenance)
   * 
   * - role_project_erd: Model Designer
   * 
   * @example
   * role_project_guest
   */
  code?: string;
  /**
   * @remarks
   * The name of the Workspace role.
   * 
   * @example
   * Visitors
   */
  name?: string;
  /**
   * @remarks
   * The type of the Workspace role.
   * 
   * - UserCustom: A user-defined role.
   * 
   * - System: A built-in System Role.
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
   * The ID of the Workspace.
   * 
   * @example
   * 88757
   */
  projectId?: number;
  /**
   * @remarks
   * Roles assigned to the Workspace member.
   */
  roles?: GetProjectMemberResponseBodyProjectMemberRoles[];
  /**
   * @remarks
   * The status of the Workspace member.
   * 
   * - Normal: The member is active.
   * 
   * - Disabled: The member is disabled.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 123422344899
   */
  userId?: string;
  /**
   * @remarks
   * The name of the user.
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
   * The details of the Workspace member.
   */
  projectMember?: GetProjectMemberResponseBodyProjectMember;
  /**
   * @remarks
   * The request ID. Use this ID to locate logs and troubleshoot issues.
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

