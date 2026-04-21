// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListYikeAssetFoldersResponseBodyFolderList extends $dara.Model {
  createTime?: string;
  folderId?: string;
  folderName?: string;
  isDefault?: boolean;
  productionId?: string;
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
  maxResults?: number;
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
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

