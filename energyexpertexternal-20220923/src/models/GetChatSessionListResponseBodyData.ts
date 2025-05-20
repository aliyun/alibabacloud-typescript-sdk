// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetChatSessionListResponseBodyDataSessionList } from "./GetChatSessionListResponseBodyDataSessionList";


export class GetChatSessionListResponseBodyData extends $dara.Model {
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
   * 分页大小。
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Session list.
   */
  sessionList?: GetChatSessionListResponseBodyDataSessionList[];
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
   * Total number of pages
   * 
   * @example
   * 3
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      sessionList: 'sessionList',
      total: 'total',
      totalPage: 'totalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      sessionList: { 'type': 'array', 'itemType': GetChatSessionListResponseBodyDataSessionList },
      total: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sessionList)) {
      $dara.Model.validateArray(this.sessionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

