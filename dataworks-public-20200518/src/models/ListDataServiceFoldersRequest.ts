// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceFoldersRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword in folder names. The keyword is used to search for folders whose names contain this keyword.
   * 
   * @example
   * Keyword in folder names
   */
  folderNameKeyword?: string;
  /**
   * @remarks
   * The ID of the business process to which the folders belong.
   * 
   * @example
   * ds_123abc
   */
  groupId?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
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
   * The ID of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  projectId?: number;
  /**
   * @remarks
   * The tenant ID. To obtain the tenant ID, perform the following steps: Log on to the [DataWorks console](https://workbench.data.aliyun.com/console). Find your workspace and go to the DataStudio page. On the page that appears, click the username for the logon in the upper-right corner and click User Info in the Menu section.
   * 
   * @example
   * 10002
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      folderNameKeyword: 'FolderNameKeyword',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderNameKeyword: 'string',
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

