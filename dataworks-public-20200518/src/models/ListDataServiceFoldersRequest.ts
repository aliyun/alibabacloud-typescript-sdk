// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceFoldersRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword of the folder name. Substring matching is supported.
   * 
   * @example
   * FolderNameKeyword
   */
  folderNameKeyword?: string;
  /**
   * @remarks
   * The ID of the business process to which the folder belongs.
   * 
   * @example
   * ds_123abc
   */
  groupId?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  projectId?: number;
  /**
   * @remarks
   * The tenant ID. To obtain the tenant ID, log on to the [DataWorks console](https://workbench.data.aliyun.com/console), go to the DataStudio page, click your username in the upper-right corner, and select Menu > User Info.
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

