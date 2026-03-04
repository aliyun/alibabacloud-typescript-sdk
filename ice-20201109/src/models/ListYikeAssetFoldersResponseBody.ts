// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListYikeAssetFoldersResponseBodyFolderList extends $dara.Model {
  /**
   * @example
   * 2026-01-22T02:07:06Z
   */
  createTime?: string;
  /**
   * @example
   * fd-EXRyxc5SHY
   */
  folderId?: string;
  /**
   * @example
   * default
   */
  folderName?: string;
  /**
   * @example
   * 1
   */
  isDefault?: boolean;
  /**
   * @example
   * pd_183320223010****
   */
  productionId?: string;
  /**
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
  folderList?: ListYikeAssetFoldersResponseBodyFolderList[];
  /**
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * Token
   */
  nextToken?: string;
  /**
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
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

