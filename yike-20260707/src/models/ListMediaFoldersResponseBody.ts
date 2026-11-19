// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaFoldersResponseBodyFolderList extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * -
   */
  createTime?: string;
  /**
   * @remarks
   * The folder ID. The ID of the default folder is fixed to `fd_{ProductionId}_default`.
   * 
   * @example
   * fd_pd_1585***_default
   */
  folderId?: string;
  /**
   * @remarks
   * The folder name.
   * 
   * @example
   * Default folder
   */
  folderName?: string;
  /**
   * @remarks
   * Indicates whether the folder is the default folder. Each project has one and only one default folder.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * -
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The ID of the project to which the folder belongs.
   * 
   * @example
   * pd_1585***
   */
  productionId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      folderId: 'FolderId',
      folderName: 'FolderName',
      isDefault: 'IsDefault',
      modifiedTime: 'ModifiedTime',
      productionId: 'ProductionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      folderId: 'string',
      folderName: 'string',
      isDefault: 'boolean',
      modifiedTime: 'string',
      productionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaFoldersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of folders.
   */
  folderList?: ListMediaFoldersResponseBodyFolderList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4B6524F7-*****-A55F-B7DEA1EC628A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      folderList: 'FolderList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderList: { 'type': 'array', 'itemType': ListMediaFoldersResponseBodyFolderList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.folderList)) {
      $dara.Model.validateArray(this.folderList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

