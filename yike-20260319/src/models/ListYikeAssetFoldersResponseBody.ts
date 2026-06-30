// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListYikeAssetFoldersResponseBodyFolderList extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-06-03T02:23:01Z
   */
  createTime?: string;
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * fd-YhFKIuciRP
   */
  folderId?: string;
  /**
   * @remarks
   * The folder name.
   * 
   * @example
   * default
   */
  folderName?: string;
  /**
   * @remarks
   * Indicates whether the folder is the default folder.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * pd_1833************
   */
  productionId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * llm-odl2p61i4vfbph4g
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      folderId: 'FolderId',
      folderName: 'FolderName',
      isDefault: 'IsDefault',
      productionId: 'ProductionId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      folderId: 'string',
      folderName: 'string',
      isDefault: 'boolean',
      productionId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListYikeAssetFoldersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The folder list.
   */
  folderList?: ListYikeAssetFoldersResponseBodyFolderList[];
  /**
   * @remarks
   * The maximum number of results.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page.
   * 
   * @example
   * Token
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of folders.
   * 
   * @example
   * 78
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      folderList: 'FolderList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderList: { 'type': 'array', 'itemType': ListYikeAssetFoldersResponseBodyFolderList },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      total: 'number',
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

