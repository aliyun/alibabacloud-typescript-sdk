// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFolderResponseBodyFolder extends $dara.Model {
  /**
   * @remarks
   * The time when the folder was created.
   * 
   * @example
   * 2021-06-15T06:39:08.521Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the folder.
   * 
   * @example
   * fd-Jyl5U7****
   */
  folderId?: string;
  /**
   * @remarks
   * The name of the folder.
   * 
   * @example
   * Applications
   */
  folderName?: string;
  /**
   * @remarks
   * The ID of the parent folder.
   * 
   * @example
   * r-Wm****
   */
  parentFolderId?: string;
  /**
   * @remarks
   * The path of the folder in the resource directory.
   */
  resourceDirectoryPath?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      folderId: 'FolderId',
      folderName: 'FolderName',
      parentFolderId: 'ParentFolderId',
      resourceDirectoryPath: 'ResourceDirectoryPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      folderId: 'string',
      folderName: 'string',
      parentFolderId: 'string',
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

export class GetFolderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the folder.
   */
  folder?: GetFolderResponseBodyFolder;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C2CBCA30-C8DD-423E-B4AD-4FB694C9180C
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
      folder: GetFolderResponseBodyFolder,
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

