// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RdAccountDTO } from "./RdAccountDto";


export class RdAccountFolderDTO extends $dara.Model {
  accountCount?: number;
  accountList?: RdAccountDTO[];
  folderId?: string;
  folderList?: RdAccountFolderDTO[];
  folderName?: string;
  resourceDirectoryId?: string;
  resourceDirectoryPath?: string;
  resourceDirectoryPathName?: string;
  selectedCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountCount: 'AccountCount',
      accountList: 'AccountList',
      folderId: 'FolderId',
      folderList: 'FolderList',
      folderName: 'FolderName',
      resourceDirectoryId: 'ResourceDirectoryId',
      resourceDirectoryPath: 'ResourceDirectoryPath',
      resourceDirectoryPathName: 'ResourceDirectoryPathName',
      selectedCount: 'SelectedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountCount: 'number',
      accountList: { 'type': 'array', 'itemType': RdAccountDTO },
      folderId: 'string',
      folderList: { 'type': 'array', 'itemType': RdAccountFolderDTO },
      folderName: 'string',
      resourceDirectoryId: 'string',
      resourceDirectoryPath: 'string',
      resourceDirectoryPathName: 'string',
      selectedCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accountList)) {
      $dara.Model.validateArray(this.accountList);
    }
    if(Array.isArray(this.folderList)) {
      $dara.Model.validateArray(this.folderList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

