// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectMemberResponseBodyProjectMemberRoles extends $dara.Model {
  /**
   * @remarks
   * The code of the role. Valid values:
   * 
   * *   role_project_admin: Workspace Administrator
   * *   role_project_dev: Develop
   * *   role_project_dg_admin: Data Governance Administrator
   * *   role_project_guest: Visitor
   * *   role_project_security: Security Administrator
   * *   role_project_deploy: Deploy
   * *   role_project_owner: Workspace Owner
   * *   role_project_data_analyst: Data Analyst
   * *   role_project_pe: O\\&M
   * *   role_project_erd: Model Designer
   * 
   * @example
   * role_project_guest
   */
  code?: string;
  /**
   * @remarks
   * The name of the role.
   * 
   * @example
   * Visitors
   */
  name?: string;
  /**
   * @remarks
   * The type of the role. Valid values:
   * 
   * *   UserCustom: custom role
   * *   System: built-in role
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
   * The DataWorks workspace ID.
   * 
   * @example
   * 88757
   */
  projectId?: number;
  /**
   * @remarks
   * The roles that are assigned to the member in the workspace.
   */
  roles?: GetProjectMemberResponseBodyProjectMemberRoles[];
  /**
   * @remarks
   * The status of the member.
   * 
   * *   Normal
   * *   Forbidden
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The ID of the account used by the member in the workspace.
   * 
   * @example
   * 123422344899
   */
  userId?: string;
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
   * The details about the member in the workspace.
   */
  projectMember?: GetProjectMemberResponseBodyProjectMember;
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
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

