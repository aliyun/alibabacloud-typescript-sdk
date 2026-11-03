// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectMembersRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the requested data.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the workspace management page to obtain the ID.
   * 
   * This parameter specifies the DataWorks workspace used when you invoke this API operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 62136
   */
  projectId?: number;
  /**
   * @remarks
   * The list of workspace role codes. You can call the [ListProjectRoles](https://help.aliyun.com/document_detail/2853930.html) operation to obtain the role codes.
   */
  roleCodes?: string[];
  /**
   * @remarks
   * The list of DataWorks account IDs. You can log on to the [DataWorks console - Administration](https://dataworks.console.aliyun.com/product/ms_menu), select the workspace that you want to manage, go to the Administration page, and then go to the Tenant Members and Roles page to view the account IDs.
   */
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      roleCodes: 'RoleCodes',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      roleCodes: { 'type': 'array', 'itemType': 'string' },
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.roleCodes)) {
      $dara.Model.validateArray(this.roleCodes);
    }
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

