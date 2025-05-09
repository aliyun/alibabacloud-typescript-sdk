// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectMemberShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 24054
   */
  projectId?: number;
  /**
   * @remarks
   * The codes of the roles in the workspace. You can call the [ListProjectRoles](https://help.aliyun.com/document_detail/2853930.html) operation to query the codes of all roles in the workspace.
   * 
   * This parameter specifies the roles that you can assign to a member when you add the member.
   * 
   * This parameter is required.
   */
  roleCodesShrink?: string;
  /**
   * @remarks
   * The ID of the account that you want to add to the workspace as a member. You can log on to the [DataWorks console](https://dataworks.console.aliyun.com/product/ms_menu), choose More > Management Center in the left-side navigation pane, select the desired workspace on the Management Center page, and then click Go to Management Center. In the left-side navigation pane of the SettingCenter page, click **Tenant Members and Roles**. On the Tenant Members and Roles page, view the ID of the account that you want to add to the workspace as a member.
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

