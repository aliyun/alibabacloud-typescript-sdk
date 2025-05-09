// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteProjectMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 534752
   */
  projectId?: number;
  /**
   * @remarks
   * The ID of the account used by the member in the workspace. You can log on to the [DataWorks console](https://dataworks.console.aliyun.com/product/ms_menu), choose More > Management Center in the left-side navigation pane, select the desired workspace on the Management Center page, and then click Go to Management Center. In the left-side navigation pane of the SettingCenter page, click Tenant Members and Roles. On the **Tenant Members and Roles** page, view the ID of the account used by the member in the workspace.
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
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
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

