// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectMembersRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Pages start from page 1.
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
   * The ID of the DataWorks workspace. To obtain this ID, log in to the [DataWorks Console](https://workbench.data.aliyun.com/console) and go to the Workspace Management page.
   * 
   * This parameter specifies the DataWorks workspace for the API call.
   * 
   * This parameter is required.
   * 
   * @example
   * 62136
   */
  projectId?: number;
  /**
   * @remarks
   * A list of role codes for the workspace to filter the results. You can call the [ListProjectRoles](https://help.aliyun.com/document_detail/2853930.html) operation to obtain the role codes.
   */
  roleCodes?: string[];
  /**
   * @remarks
   * A list of DataWorks user IDs to filter the results. You can find these IDs on the [Tenant Members and Roles](https://dataworks.console.aliyun.com/product/ms_menu) page in the Management Center.
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

