// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DataWorks Workspace. You can sign in to the [DataWorks Console](https://dataworks.console.aliyun.com/workspace/list) and go to the Workspace Management page to obtain the Workspace ID.
   * 
   * This parameter is used to identify the DataWorks workspace that you want to access.
   * 
   * This parameter is required.
   * 
   * @example
   * 88757
   */
  projectId?: number;
  /**
   * @remarks
   * The ID of the user. To find the ID, sign in to the [DataWorks Console](https://dataworks.console.aliyun.com/product/ms_menu), go to the Management Center, select the target Workspace, and open the Tenant Members and Roles page.
   * 
   * This parameter is required.
   * 
   * @example
   * 123422****
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

