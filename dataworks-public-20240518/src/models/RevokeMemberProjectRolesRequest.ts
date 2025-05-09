// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeMemberProjectRolesRequest extends $dara.Model {
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://dataworks.console.aliyun.com/workspace/list) and go to the Workspace page to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 105149
   */
  projectId?: number;
  /**
   * @remarks
   * The codes of the roles in the workspace. You can call the [ListProjectRoles](https://help.aliyun.com/document_detail/2853930.html) operation to query the codes of all roles in the workspace.
   * 
   * You must configure this parameter to specify the roles that you want to revoke from the member in the workspace.
   * 
   * This parameter is required.
   */
  roleCodes?: string[];
  /**
   * @remarks
   * The ID of the account used by the member in the workspace. You can log on to the [DataWorks console](https://dataworks.console.aliyun.com/product/ms_menu), choose More > Management Center in the left-side navigation pane, select the desired workspace on the Management Center page, and then click Go to Management Center. In the left-side navigation pane of the SettingCenter page, click Tenant Members and Roles. On the Tenant Members and Roles page, view the ID of the account used by the member in the workspace.
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
      roleCodes: 'RoleCodes',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
      roleCodes: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.roleCodes)) {
      $dara.Model.validateArray(this.roleCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

