// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FolderItem extends $dara.Model {
  currentLevel?: number;
  docCount?: number;
  folderDefault?: number;
  folderId?: string;
  folderName?: string;
  folderNum?: number;
  ossDomain?: string;
  ossPath?: string;
  ossUpdateBy?: string;
  parentFolderId?: string;
  resourcePath?: string;
  storageType?: number;
  subFolderList?: FolderItem[];
  syncParsingStatus?: number;
  syncStatus?: number;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      currentLevel: 'currentLevel',
      docCount: 'docCount',
      folderDefault: 'folderDefault',
      folderId: 'folderId',
      folderName: 'folderName',
      folderNum: 'folderNum',
      ossDomain: 'ossDomain',
      ossPath: 'ossPath',
      ossUpdateBy: 'ossUpdateBy',
      parentFolderId: 'parentFolderId',
      resourcePath: 'resourcePath',
      storageType: 'storageType',
      subFolderList: 'subFolderList',
      syncParsingStatus: 'syncParsingStatus',
      syncStatus: 'syncStatus',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentLevel: 'number',
      docCount: 'number',
      folderDefault: 'number',
      folderId: 'string',
      folderName: 'string',
      folderNum: 'number',
      ossDomain: 'string',
      ossPath: 'string',
      ossUpdateBy: 'string',
      parentFolderId: 'string',
      resourcePath: 'string',
      storageType: 'number',
      subFolderList: { 'type': 'array', 'itemType': FolderItem },
      syncParsingStatus: 'number',
      syncStatus: 'number',
      taskId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.subFolderList)) {
      $dara.Model.validateArray(this.subFolderList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

