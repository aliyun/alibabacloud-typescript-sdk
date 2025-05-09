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

