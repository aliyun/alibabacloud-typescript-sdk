// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChatItem } from "./ChatItem";


export class GetChatListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Q&A list.
   */
  chatList?: ChatItem[];
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 21
   */
  total?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 3
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      chatList: 'chatList',
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      total: 'total',
      totalPage: 'totalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatList: { 'type': 'array', 'itemType': ChatItem },
      currentPage: 'number',
      pageSize: 'number',
      total: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.chatList)) {
      $dara.Model.validateArray(this.chatList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

