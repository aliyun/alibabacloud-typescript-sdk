// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChatRefDocItem } from "./ChatRefDocItem";


export class ChatItem extends $dara.Model {
  answer?: string;
  createTime?: number;
  folderId?: string;
  folderName?: string;
  question?: string;
  refDocList?: ChatRefDocItem[];
  static names(): { [key: string]: string } {
    return {
      answer: 'answer',
      createTime: 'createTime',
      folderId: 'folderId',
      folderName: 'folderName',
      question: 'question',
      refDocList: 'refDocList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      createTime: 'number',
      folderId: 'string',
      folderName: 'string',
      question: 'string',
      refDocList: { 'type': 'array', 'itemType': ChatRefDocItem },
    };
  }

  validate() {
    if(Array.isArray(this.refDocList)) {
      $dara.Model.validateArray(this.refDocList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

