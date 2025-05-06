// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResourceDirectoryFolderNode extends $dara.Model {
  accountId?: string;
  children?: ResourceDirectoryFolderNode[];
  displayName?: string;
  folderId?: string;
  folderName?: string;
  parentFolderId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      children: 'Children',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      folderName: 'FolderName',
      parentFolderId: 'ParentFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      children: { 'type': 'array', 'itemType': ResourceDirectoryFolderNode },
      displayName: 'string',
      folderId: 'string',
      folderName: 'string',
      parentFolderId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

