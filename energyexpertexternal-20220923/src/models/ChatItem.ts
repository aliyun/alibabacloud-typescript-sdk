// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChatRefDocItem } from "./ChatRefDocItem";


export class ChatItem extends $dara.Model {
  /**
   * @remarks
   * The content of the answer to the question.
   * 
   * @example
   * No related content found.
   */
  answer?: string;
  /**
   * @remarks
   * Q&A time, in milliseconds timestamp.
   * 
   * @example
   * 1747280158000
   */
  createTime?: number;
  /**
   * @remarks
   * Folder selected for the Q&A.
   * 
   * @example
   * 7708fddb-21dc-4403-a4ea-5b94eccce4c3
   */
  folderId?: string;
  /**
   * @remarks
   * Name of the folder selected for the Q&A.
   * 
   * @example
   * deafult folder
   */
  folderName?: string;
  /**
   * @remarks
   * Question content.
   * 
   * @example
   * How to use the knowledge base.
   */
  question?: string;
  /**
   * @remarks
   * - List of files related to the Q&A.
   * - If streaming question answering is used, only the first shard contains data.
   */
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

