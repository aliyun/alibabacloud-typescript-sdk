// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAncestorsResponseBodyFoldersFolder extends $dara.Model {
  createTime?: string;
  folderId?: string;
  folderName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      folderId: 'FolderId',
      folderName: 'FolderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      folderId: 'string',
      folderName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAncestorsResponseBodyFolders extends $dara.Model {
  folder?: ListAncestorsResponseBodyFoldersFolder[];
  static names(): { [key: string]: string } {
    return {
      folder: 'Folder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folder: { 'type': 'array', 'itemType': ListAncestorsResponseBodyFoldersFolder },
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

export class ListAncestorsResponseBody extends $dara.Model {
  folders?: ListAncestorsResponseBodyFolders;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 83AFBEB6-DC03-406E-9686-867461FF6698
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      folders: 'Folders',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folders: ListAncestorsResponseBodyFolders,
      requestId: 'string',
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

