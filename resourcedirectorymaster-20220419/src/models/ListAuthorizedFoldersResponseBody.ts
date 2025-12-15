// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedFoldersResponseBodyFoldersFolder extends $dara.Model {
  /**
   * @remarks
   * The ID of the folder.
   * 
   * @example
   * fd-bVaRIG****
   */
  folderId?: string;
  /**
   * @remarks
   * The name of the folder.
   * 
   * @example
   * project-1
   */
  folderName?: string;
  /**
   * @remarks
   * The RDPath of the folder.
   */
  resourceDirectoryPath?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      folderName: 'FolderName',
      resourceDirectoryPath: 'ResourceDirectoryPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      folderName: 'string',
      resourceDirectoryPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizedFoldersResponseBodyFolders extends $dara.Model {
  folder?: ListAuthorizedFoldersResponseBodyFoldersFolder[];
  static names(): { [key: string]: string } {
    return {
      folder: 'Folder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folder: { 'type': 'array', 'itemType': ListAuthorizedFoldersResponseBodyFoldersFolder },
    };
  }

  validate() {
    if(Array.isArray(this.folder)) {
      $dara.Model.validateArray(this.folder);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizedFoldersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The folders.
   */
  folders?: ListAuthorizedFoldersResponseBodyFolders;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B8A4E7D-6CFF-471D-84DF-195A7A241ECB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      folders: 'Folders',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folders: ListAuthorizedFoldersResponseBodyFolders,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.folders && typeof (this.folders as any).validate === 'function') {
      (this.folders as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

