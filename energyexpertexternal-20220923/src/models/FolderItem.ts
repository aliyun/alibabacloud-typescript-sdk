// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FolderItem extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentLevel?: number;
  /**
   * @example
   * 0
   */
  docCount?: number;
  /**
   * @example
   * 0
   */
  folderDefault?: number;
  /**
   * @example
   * 4b648f6d11344f258df876cbdc24dc1f
   */
  folderId?: string;
  /**
   * @example
   * “abc” “1234”
   */
  folderName?: string;
  /**
   * @example
   * 2
   */
  folderNum?: number;
  /**
   * @example
   * aidoc-energy-api-example.oss-cn-hangzhou.aliyuncs.com
   */
  ossDomain?: string;
  /**
   * @example
   * test/
   */
  ossPath?: string;
  /**
   * @example
   * 1696462764375572
   */
  ossUpdateBy?: string;
  /**
   * @example
   * "0" ：parent folder is root
   * "4b648f6d11344f258df876cbdc24dc1f" ： folderId
   */
  parentFolderId?: string;
  /**
   * @example
   * folder/manual/
   */
  resourcePath?: string;
  /**
   * @example
   * 0
   */
  storageType?: number;
  subFolderList?: FolderItem[];
  /**
   * @example
   * -1
   */
  syncParsingStatus?: number;
  /**
   * @example
   * -1
   */
  syncStatus?: number;
  /**
   * @example
   * 0
   */
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

