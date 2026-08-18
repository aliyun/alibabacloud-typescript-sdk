// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectMemberShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Management page to obtain the ID.
   * 
   * This parameter specifies the DataWorks workspace for this API call operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 24054
   */
  projectId?: number;
  /**
   * @remarks
   * The list of workspace role codes. You can call [ListProjectRoles](https://help.aliyun.com/document_detail/2853930.html) to obtain the role codes.
   * 
   * This parameter is used to grant workspace roles to the member when adding the member to the workspace.
   * 
   * This parameter is required.
   */
  roleCodesShrink?: string;
  /**
   * @remarks
   * The ID of the DataWorks account. You can log on to the [DataWorks console - Management Center](https://dataworks.console.aliyun.com/product/ms_menu), select the workspace to which you want to add a member, go to the Management Center page, and then navigate to the **Tenant Members and Roles** page to view the account ID of the user you want to add to the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 123422344899
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      roleCodesShrink: 'RoleCodes',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      roleCodesShrink: 'string',
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

