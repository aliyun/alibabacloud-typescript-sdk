// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the role in the DataWorks workspace. Valid values:
   * 
   * *   role_project_admin: workspace administrator
   * *   role_project_dev: developer
   * *   role_project_dg_admin: data governance administrator
   * *   role_project_guest: visitor
   * *   role_project_security: security administrator
   * *   role_project_deploy: deployer
   * *   role_project_owner: workspace owner
   * *   role_project_data_analyst: data analyst
   * *   role_project_pe: O\\&M engineer
   * *   role_project_erd: model designer
   * 
   * This parameter is required.
   * 
   * @example
   * role_project_guest
   */
  code?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10002
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

