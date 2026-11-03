// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://dataworks.console.aliyun.com/workspace/list) and go to the workspace management page to obtain the ID.
   * 
   * This parameter specifies the DataWorks workspace used to invoke this API.
   * 
   * This parameter is required.
   * 
   * @example
   * 88757
   */
  projectId?: number;
  /**
   * @remarks
   * The ID of the DataWorks account. You can log on to the [DataWorks console - Administration](https://dataworks.console.aliyun.com/product/ms_menu), select the workspace that you want to manage, go to the Administration page, and then go to the Tenant Members and Roles page to view the account ID.
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

