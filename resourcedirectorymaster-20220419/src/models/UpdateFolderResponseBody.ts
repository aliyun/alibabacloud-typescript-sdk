// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFolderResponseBodyFolder extends $dara.Model {
  /**
   * @remarks
   * The time when the folder was created.
   * 
   * @example
   * 2019-02-19T09:34:50.757Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the folder.
   * 
   * @example
   * fd-u8B321****
   */
  folderId?: string;
  /**
   * @remarks
   * The name of the folder.
   * 
   * @example
   * rdFolder
   */
  folderName?: string;
  /**
   * @remarks
   * The ID of the parent folder.
   * 
   * @example
   * r-b1****
   */
  parentFolderId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      folderId: 'FolderId',
      folderName: 'FolderName',
      parentFolderId: 'ParentFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      folderId: 'string',
      folderName: 'string',
      parentFolderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFolderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the folder.
   */
  folder?: UpdateFolderResponseBodyFolder;
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
      folder: UpdateFolderResponseBodyFolder,
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

