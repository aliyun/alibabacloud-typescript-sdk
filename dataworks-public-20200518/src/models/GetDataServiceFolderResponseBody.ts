// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataServiceFolderResponseBodyFolder extends $dara.Model {
  /**
   * @remarks
   * The time when the folder was created.
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
   * The name of the folder.
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
   * @example
   * 2020-09-24T18:37:51+0800
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The parent folder ID. The ID of the root folder in a business process is 0, and the ID of a folder created by a user in a business process is greater than 0.
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

export class GetDataServiceFolderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the folder.
   */
  folder?: GetDataServiceFolderResponseBodyFolder;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0000-ABCD-EF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      folder: 'Folder',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folder: GetDataServiceFolderResponseBodyFolder,
      requestId: 'string',
    };
  }

  validate() {
    if(this.folder && typeof (this.folder as any).validate === 'function') {
      (this.folder as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

