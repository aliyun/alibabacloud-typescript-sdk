// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceFoldersResponseBodyFolderPagingResultFolders extends $dara.Model {
  /**
   * @remarks
   * The time when the folder was created.
   * 
   * The format is `yyyy-MM-dd\\"T\\"HH:mm:ssZ`, for example, `2020-09-24T18:37:51+0800`. The time zone offset in this example is `+0800`.
   * 
   * @example
   * 2020-09-24T18:37:51+0800
   */
  createdTime?: string;
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * 11
   */
  folderId?: number;
  /**
   * @remarks
   * The folder name.
   * 
   * @example
   * test1
   */
  folderName?: string;
  /**
   * @remarks
   * The ID of the business process to which the folder belongs.
   * 
   * @example
   * ds_1234
   */
  groupId?: string;
  /**
   * @remarks
   * The time when the folder was last modified.
   * 
   * The format is `yyyy-MM-dd\\"T\\"HH:mm:ssZ`, for example, `2020-09-24T18:37:51+0800`. The time zone offset in this example is `+0800`.
   * 
   * @example
   * 2020-09-24T18:37:51+0800
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The ID of the parent folder. The root folder ID under a business process is 0. User-created folder IDs are greater than 0.
   * 
   * @example
   * 0
   */
  parentId?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 10001
   */
  projectId?: number;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 10002
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      folderId: 'FolderId',
      folderName: 'FolderName',
      groupId: 'GroupId',
      modifiedTime: 'ModifiedTime',
      parentId: 'ParentId',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      folderId: 'number',
      folderName: 'string',
      groupId: 'string',
      modifiedTime: 'string',
      parentId: 'number',
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

export class ListDataServiceFoldersResponseBodyFolderPagingResult extends $dara.Model {
  /**
   * @remarks
   * The folder list.
   */
  folders?: ListDataServiceFoldersResponseBodyFolderPagingResultFolders[];
  /**
   * @remarks
   * The page number, which is the same as the PageNumber parameter in the request.
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
   * The total number of records.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      folders: 'Folders',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folders: { 'type': 'array', 'itemType': ListDataServiceFoldersResponseBodyFolderPagingResultFolders },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.folders)) {
      $dara.Model.validateArray(this.folders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceFoldersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination result of the folder list.
   */
  folderPagingResult?: ListDataServiceFoldersResponseBodyFolderPagingResult;
  /**
   * @remarks
   * The request ID. A unique identifier for the request.
   * 
   * @example
   * 0000-ABCD-EF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      folderPagingResult: 'FolderPagingResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderPagingResult: ListDataServiceFoldersResponseBodyFolderPagingResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.folderPagingResult && typeof (this.folderPagingResult as any).validate === 'function') {
      (this.folderPagingResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

