// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChatItem } from "./ChatItem";


export class ChatFolderItem extends $dara.Model {
  folderId?: string;
  folderName?: string;
  subFolders?: ChatItem[];
  static names(): { [key: string]: string } {
    return {
      folderId: 'folderId',
      folderName: 'folderName',
      subFolders: 'subFolders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      folderName: 'string',
      subFolders: { 'type': 'array', 'itemType': ChatItem },
    };
  }

  validate() {
    if(Array.isArray(this.subFolders)) {
      $dara.Model.validateArray(this.subFolders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

