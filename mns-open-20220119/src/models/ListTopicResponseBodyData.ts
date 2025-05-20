// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTopicResponseBodyDataPageData } from "./ListTopicResponseBodyDataPageData";


export class ListTopicResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data returned on the current page.
   */
  pageData?: ListTopicResponseBodyDataPageData[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 130
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': ListTopicResponseBodyDataPageData },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pageData)) {
      $dara.Model.validateArray(this.pageData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

